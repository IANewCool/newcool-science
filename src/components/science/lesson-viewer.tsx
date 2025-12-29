'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb, ChevronRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useScienceStore } from '@/store/science-store';

export function LessonViewer() {
  const { currentLesson, completeLesson, isLessonCompleted } = useScienceStore();
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!currentLesson) return null;

  const completed = isLessonCompleted(currentLesson.id);
  const isQuiz = currentLesson.type === 'quiz';
  const questions = currentLesson.questions || [];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    const correct = index === questions[currentQuestion].correctIndex;
    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setQuizCompleted(true);
      // Complete if passed (>= 60%)
      if (correctAnswers / questions.length >= 0.6 && !completed) {
        completeLesson(currentLesson.id, currentLesson.xp);
      }
    }
  };

  const handleCompleteLesson = () => {
    if (!completed) {
      completeLesson(currentLesson.id, currentLesson.xp);
    }
  };

  // Regular lesson view
  if (!isQuiz) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Lesson header */}
        <div className="text-center">
          <span className="text-5xl mb-4 block">{currentLesson.icon}</span>
          <h2 className="text-2xl font-bold text-white mb-2">{currentLesson.title}</h2>
          <p className="text-slate-400">{currentLesson.description}</p>
        </div>

        {/* Theory */}
        {currentLesson.theory && (
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <p className="text-slate-300 leading-relaxed text-lg">
              {currentLesson.theory}
            </p>
          </Card>
        )}

        {/* Facts */}
        {currentLesson.facts && currentLesson.facts.length > 0 && (
          <Card className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <h3 className="font-semibold text-yellow-400">Datos Curiosos</h3>
            </div>
            <ul className="space-y-3">
              {currentLesson.facts.map((fact, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-yellow-400 mt-1">*</span>
                  <span className="text-slate-300">{fact}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        )}

        {/* Complete button */}
        <div className="text-center pt-4">
          {completed ? (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">Leccion completada</span>
            </div>
          ) : (
            <Button
              size="lg"
              onClick={handleCompleteLesson}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            >
              Completar Leccion
              <Award className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Quiz view
  if (quizCompleted) {
    const passed = correctAnswers / questions.length >= 0.6;
    const percentage = Math.round((correctAnswers / questions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          <div className={`text-8xl ${passed ? 'animate-bounce' : ''}`}>
            {passed ? '🎉' : '😔'}
          </div>
          <h2 className="text-3xl font-bold text-white">
            {passed ? 'Felicitaciones!' : 'Sigue practicando'}
          </h2>
          <p className="text-xl text-slate-400">
            Obtuviste {correctAnswers} de {questions.length} correctas ({percentage}%)
          </p>

          {passed && (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <Award className="w-6 h-6" />
              <span className="font-medium">+{currentLesson.xp} XP ganados!</span>
            </div>
          )}

          <Button
            variant="outline"
            onClick={() => {
              setQuizCompleted(false);
              setCurrentQuestion(0);
              setSelectedAnswer(null);
              setIsCorrect(null);
              setCorrectAnswers(0);
            }}
          >
            Intentar de nuevo
          </Button>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">
          Pregunta {currentQuestion + 1} de {questions.length}
        </span>
        <span className="text-green-400">
          {correctAnswers} correctas
        </span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <Card className="p-6 bg-slate-800/50 border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-6">
          {question.question}
        </h3>

        <div className="space-y-3">
          <AnimatePresence mode="wait">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`
                  w-full p-4 rounded-lg text-left transition-all
                  ${selectedAnswer === null
                    ? 'bg-slate-700/50 hover:bg-slate-700 border border-slate-600'
                    : index === question.correctIndex
                      ? 'bg-green-500/20 border border-green-500'
                      : selectedAnswer === index
                        ? 'bg-red-500/20 border border-red-500'
                        : 'bg-slate-700/30 border border-slate-700'
                  }
                `}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-white">{option}</span>
                  {selectedAnswer !== null && index === question.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />
                  )}
                  {selectedAnswer === index && index !== question.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                  )}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Explanation */}
        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-lg ${
              isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-blue-500/10 border border-blue-500/30'
            }`}
          >
            <p className="text-slate-300">{question.explanation}</p>
          </motion.div>
        )}
      </Card>

      {/* Next button */}
      {selectedAnswer !== null && (
        <div className="text-center">
          <Button onClick={handleNext} size="lg">
            {currentQuestion < questions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
}
