'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Play, Lock, Clock, Beaker, HelpCircle, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScienceStore } from '@/store/science-store';
import type { Lesson } from '@/types';

interface LessonListProps {
  lessons: Lesson[];
  onSelectLesson: (lesson: Lesson) => void;
}

export function LessonList({ lessons, onSelectLesson }: LessonListProps) {
  const { isLessonCompleted, progress } = useScienceStore();

  const getTypeIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'lesson':
        return <Play className="w-4 h-4" />;
      case 'experiment':
        return <Beaker className="w-4 h-4" />;
      case 'quiz':
        return <HelpCircle className="w-4 h-4" />;
      case 'project':
        return <Rocket className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: Lesson['type']) => {
    switch (type) {
      case 'lesson':
        return 'Leccion';
      case 'experiment':
        return 'Experimento';
      case 'quiz':
        return 'Quiz';
      case 'project':
        return 'Proyecto';
    }
  };

  const getTypeColor = (type: Lesson['type']) => {
    switch (type) {
      case 'lesson':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'experiment':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'quiz':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'project':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  // Check if lesson is available (previous lesson completed or first lesson)
  const isLessonAvailable = (index: number): boolean => {
    if (index === 0) return true;
    const previousLesson = lessons[index - 1];
    return isLessonCompleted(previousLesson.id);
  };

  return (
    <div className="space-y-3">
      {lessons.map((lesson, index) => {
        const completed = isLessonCompleted(lesson.id);
        const available = isLessonAvailable(index);

        return (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className={`
                p-4 transition-all duration-200 cursor-pointer
                ${available
                  ? 'hover:bg-slate-700/50 hover:border-slate-600'
                  : 'opacity-50 cursor-not-allowed'
                }
                ${completed ? 'border-green-500/30 bg-green-500/5' : 'bg-slate-800/50 border-slate-700'}
              `}
              onClick={available ? () => onSelectLesson(lesson) : undefined}
            >
              <div className="flex items-center gap-4">
                {/* Status icon */}
                <div
                  className={`
                    w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                    ${completed
                      ? 'bg-green-500/20'
                      : available
                        ? 'bg-slate-700'
                        : 'bg-slate-800'
                    }
                  `}
                >
                  {completed ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : available ? (
                    <span className="text-xl">{lesson.icon}</span>
                  ) : (
                    <Lock className="w-5 h-5 text-slate-500" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-white truncate">
                      {lesson.title}
                    </h4>
                    <Badge
                      variant="outline"
                      className={`text-xs shrink-0 ${getTypeColor(lesson.type)}`}
                    >
                      {getTypeIcon(lesson.type)}
                      <span className="ml-1">{getTypeLabel(lesson.type)}</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-400 truncate">
                    {lesson.description}
                  </p>
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{lesson.duration} min</span>
                  </div>
                  <div className="text-sm font-medium text-yellow-400">
                    +{lesson.xp} XP
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
