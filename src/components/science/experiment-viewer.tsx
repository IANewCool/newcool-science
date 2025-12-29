'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Microscope,
  Atom,
  Globe,
  Zap,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useScienceStore } from '@/store/science-store';

// Simulation components (simplified visual representations)
const SimulationDisplay = ({ type, step }: { type: string; step: number }) => {
  const simulations: Record<string, React.ReactNode[]> = {
    microscope: [
      <div key="0" className="text-center">
        <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full flex items-center justify-center border-4 border-green-500/30">
          <Microscope className="w-20 h-20 text-green-400" />
        </div>
        <p className="mt-4 text-slate-400">Microscopio listo para observar</p>
      </div>,
      <div key="1" className="text-center">
        <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-full flex items-center justify-center border-4 border-pink-500/30 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full top-12 left-16 animate-pulse" />
          <div className="absolute w-6 h-6 bg-blue-500 rounded-full bottom-16 right-12" />
          <div className="absolute w-3 h-3 bg-green-500 rounded-full top-20 right-16" />
          <div className="w-8 h-8 bg-yellow-500/50 rounded-full" />
        </div>
        <p className="mt-4 text-slate-400">Celula animal bajo el microscopio</p>
      </div>,
      <div key="2" className="text-center">
        <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-400/20 to-lime-500/20 rounded-lg flex items-center justify-center border-4 border-green-500/30 relative">
          <div className="absolute w-4 h-4 bg-green-600 rounded-full top-8 left-8" />
          <div className="absolute w-4 h-4 bg-green-600 rounded-full bottom-8 right-8" />
          <div className="absolute w-4 h-4 bg-green-600 rounded-full top-8 right-12" />
          <div className="w-10 h-10 bg-purple-500/50 rounded-full" />
          <div className="absolute w-full h-full border-4 border-green-700/50 rounded-lg" />
        </div>
        <p className="mt-4 text-slate-400">Celula vegetal con pared celular</p>
      </div>,
      <div key="3" className="text-center">
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/30">
            <div className="w-16 h-16 mx-auto bg-pink-500/20 rounded-full mb-2" />
            <p className="text-xs text-pink-400">Animal</p>
          </div>
          <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-lg mb-2" />
            <p className="text-xs text-green-400">Vegetal</p>
          </div>
        </div>
        <p className="mt-4 text-slate-400">Comparacion de celulas</p>
      </div>,
    ],
    'chemical-reaction': [
      <div key="0" className="text-center">
        <div className="flex justify-center gap-4">
          <div className="w-24 h-32 bg-blue-500/20 rounded-b-full border-2 border-blue-500/50 flex items-end justify-center">
            <div className="w-16 h-20 bg-blue-500/40 rounded-b-full" />
          </div>
        </div>
        <p className="mt-4 text-slate-400">Beaker con agua lista</p>
      </div>,
      <div key="1" className="text-center">
        <div className="flex justify-center gap-4">
          <div className="w-24 h-32 bg-blue-500/20 rounded-b-full border-2 border-blue-500/50 flex items-end justify-center relative">
            <div className="w-16 h-16 bg-blue-500/40 rounded-b-full" />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute top-2 left-8"
            >
              <span className="text-2xl">💧</span>
            </motion.div>
          </div>
        </div>
        <p className="mt-4 text-slate-400">Calentando el agua...</p>
      </div>,
      <div key="2" className="text-center">
        <div className="flex justify-center gap-4">
          <div className="w-24 h-32 bg-blue-500/20 rounded-b-full border-2 border-blue-500/50 flex items-end justify-center relative">
            <div className="w-16 h-8 bg-blue-500/40 rounded-b-full" />
            <motion.div
              animate={{ y: [-10, -30], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute top-0"
            >
              <span className="text-xl">💨</span>
            </motion.div>
          </div>
        </div>
        <p className="mt-4 text-slate-400">Evaporacion: agua a vapor</p>
      </div>,
      <div key="3" className="text-center">
        <div className="flex justify-center gap-4">
          <div className="w-24 h-24 bg-gray-500/20 rounded-full border-2 border-gray-500/50 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-3xl">☁️</span>
            </motion.div>
          </div>
        </div>
        <p className="mt-4 text-slate-400">Condensacion: vapor a gotas</p>
      </div>,
      <div key="4" className="text-center">
        <div className="flex justify-center gap-4">
          <div className="w-24 h-32 bg-cyan-500/20 rounded-b-full border-2 border-cyan-500/50 flex items-end justify-center">
            <div className="w-20 h-28 bg-cyan-300/60 rounded-b-full" />
          </div>
        </div>
        <p className="mt-4 text-slate-400">Solidificacion: agua a hielo</p>
      </div>,
    ],
    'physics-simulation': [
      <div key="0" className="text-center">
        <div className="relative h-40 w-64 mx-auto">
          <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-600 rounded" />
          <motion.div
            className="absolute bottom-2 left-4 w-12 h-8 bg-blue-500 rounded"
          />
        </div>
        <p className="mt-4 text-slate-400">Carrito en reposo</p>
      </div>,
      <div key="1" className="text-center">
        <div className="relative h-40 w-64 mx-auto">
          <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-600 rounded" />
          <motion.div
            animate={{ x: [0, 180] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-2 left-4 w-12 h-8 bg-blue-500 rounded"
          />
        </div>
        <p className="mt-4 text-slate-400">Carrito liviano: acelera rapido</p>
      </div>,
      <div key="2" className="text-center">
        <div className="relative h-40 w-64 mx-auto">
          <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-600 rounded" />
          <motion.div
            animate={{ x: [0, 100] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-2 left-4 w-16 h-10 bg-red-500 rounded"
          />
        </div>
        <p className="mt-4 text-slate-400">Carrito pesado: acelera lento</p>
      </div>,
    ],
    anatomy: [
      <div key="0" className="text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-32 h-32 mx-auto"
        >
          <span className="text-7xl">❤️</span>
        </motion.div>
        <p className="mt-4 text-slate-400">El corazon: bomba del cuerpo</p>
      </div>,
      <div key="1" className="text-center">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-32 h-32 mx-auto flex items-center justify-center"
        >
          <span className="text-7xl">🫁</span>
        </motion.div>
        <p className="mt-4 text-slate-400">Los pulmones: intercambio de gases</p>
      </div>,
      <div key="2" className="text-center">
        <div className="flex justify-center gap-2">
          <span className="text-5xl">🍎</span>
          <span className="text-3xl">→</span>
          <span className="text-5xl">🫃</span>
          <span className="text-3xl">→</span>
          <span className="text-5xl">💪</span>
        </div>
        <p className="mt-4 text-slate-400">Digestion: comida a energia</p>
      </div>,
    ],
    ecosystem: [
      <div key="0" className="text-center">
        <div className="flex justify-center gap-2 flex-wrap">
          <span className="text-5xl">🌿</span>
          <span className="text-5xl">🌻</span>
          <span className="text-5xl">🌳</span>
        </div>
        <p className="mt-4 text-slate-400">Productores: plantas</p>
      </div>,
      <div key="1" className="text-center">
        <div className="flex justify-center gap-2 flex-wrap">
          <span className="text-5xl">🐰</span>
          <span className="text-5xl">🦌</span>
          <span className="text-5xl">🐛</span>
        </div>
        <p className="mt-4 text-slate-400">Consumidores primarios: herbivoros</p>
      </div>,
      <div key="2" className="text-center">
        <div className="flex justify-center gap-2 flex-wrap">
          <span className="text-5xl">🦊</span>
          <span className="text-5xl">🦅</span>
          <span className="text-5xl">🐍</span>
        </div>
        <p className="mt-4 text-slate-400">Consumidores secundarios: carnivoros</p>
      </div>,
      <div key="3" className="text-center">
        <div className="flex justify-center gap-2 flex-wrap">
          <span className="text-5xl">🍄</span>
          <span className="text-5xl">🦠</span>
        </div>
        <p className="mt-4 text-slate-400">Descomponedores: hongos y bacterias</p>
      </div>,
    ],
    'solar-system': [
      <div key="0" className="text-center relative h-48">
        <div className="flex justify-center gap-1 items-end">
          <span className="text-2xl">☿️</span>
          <span className="text-3xl">♀️</span>
          <span className="text-3xl">🌍</span>
          <span className="text-2xl">♂️</span>
        </div>
        <p className="mt-4 text-slate-400">Planetas rocosos (interiores)</p>
      </div>,
      <div key="1" className="text-center">
        <div className="flex justify-center gap-2">
          <span className="text-6xl">🪐</span>
          <span className="text-5xl">🔴</span>
        </div>
        <p className="mt-4 text-slate-400">Gigantes gaseosos: Jupiter y Saturno</p>
      </div>,
      <div key="2" className="text-center">
        <div className="flex justify-center gap-2">
          <span className="text-4xl">💠</span>
          <span className="text-4xl">🔵</span>
        </div>
        <p className="mt-4 text-slate-400">Gigantes de hielo: Urano y Neptuno</p>
      </div>,
      <div key="3" className="text-center">
        <div className="text-6xl">☀️</div>
        <div className="flex justify-center gap-1 mt-2 text-xs">
          <span>☿️</span>
          <span>♀️</span>
          <span>🌍</span>
          <span>♂️</span>
          <span>🪐</span>
          <span>🔴</span>
          <span>💠</span>
          <span>🔵</span>
        </div>
        <p className="mt-4 text-slate-400">El Sistema Solar completo</p>
      </div>,
    ],
    weather: [
      <div key="0" className="text-center">
        <motion.div
          animate={{ y: [-5, 0, -5] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <span className="text-6xl">☀️</span>
        </motion.div>
        <div className="flex justify-center mt-4">
          <motion.div
            animate={{ y: [0, -20], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-2xl">💧</span>
          </motion.div>
        </div>
        <p className="mt-4 text-slate-400">Evaporacion: el sol calienta el agua</p>
      </div>,
      <div key="1" className="text-center">
        <div className="flex justify-center gap-2">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl"
          >☁️</motion.span>
          <span className="text-5xl">☁️</span>
        </div>
        <p className="mt-4 text-slate-400">Condensacion: se forman nubes</p>
      </div>,
      <div key="2" className="text-center">
        <div className="text-5xl">🌧️</div>
        <div className="flex justify-center gap-1">
          <motion.span
            animate={{ y: [0, 30], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0 }}
          >💧</motion.span>
          <motion.span
            animate={{ y: [0, 30], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
          >💧</motion.span>
          <motion.span
            animate={{ y: [0, 30], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
          >💧</motion.span>
        </div>
        <p className="mt-4 text-slate-400">Precipitacion: lluvia</p>
      </div>,
      <div key="3" className="text-center">
        <div className="flex justify-center items-center gap-2">
          <span className="text-4xl">🏔️</span>
          <span className="text-3xl">→</span>
          <span className="text-4xl">🌊</span>
        </div>
        <p className="mt-4 text-slate-400">Escorrentia: el agua vuelve al mar</p>
      </div>,
    ],
    circuit: [
      <div key="0" className="text-center">
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-20 bg-yellow-500/30 border-2 border-yellow-500 rounded flex items-center justify-center">
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="w-20 h-1 bg-gray-500" />
          <div className="w-10 h-10 bg-gray-500/30 border-2 border-gray-500 rounded-full" />
        </div>
        <p className="mt-4 text-slate-400">Circuito abierto: sin conexion</p>
      </div>,
      <div key="1" className="text-center">
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-20 bg-yellow-500/30 border-2 border-yellow-500 rounded flex items-center justify-center">
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="w-20 h-1 bg-yellow-400" />
          <motion.div
            animate={{ boxShadow: ['0 0 0px #fbbf24', '0 0 20px #fbbf24', '0 0 0px #fbbf24'] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-10 h-10 bg-yellow-500/50 border-2 border-yellow-500 rounded-full"
          />
        </div>
        <p className="mt-4 text-slate-400">Circuito cerrado: luz encendida!</p>
      </div>,
      <div key="2" className="text-center">
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-16 bg-yellow-500/30 border-2 border-yellow-500 rounded" />
          <div className="w-12 h-1 bg-yellow-400" />
          <div className="w-8 h-8 bg-yellow-500/30 border-2 border-yellow-500 rounded-full" />
          <div className="w-8 h-1 bg-yellow-400" />
          <div className="w-8 h-8 bg-yellow-500/30 border-2 border-yellow-500 rounded-full" />
        </div>
        <p className="mt-4 text-slate-400">Circuito en serie: misma corriente</p>
      </div>,
      <div key="3" className="text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-yellow-500/50 border-2 border-yellow-500 rounded-full" />
          </div>
          <div className="w-1 h-4 bg-yellow-400" />
          <div className="w-10 h-16 bg-yellow-500/30 border-2 border-yellow-500 rounded" />
          <div className="w-1 h-4 bg-yellow-400" />
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-yellow-500/50 border-2 border-yellow-500 rounded-full" />
          </div>
        </div>
        <p className="mt-4 text-slate-400">Circuito en paralelo: brillo completo</p>
      </div>,
    ],
  };

  const sim = simulations[type] || simulations['microscope'];
  return sim[Math.min(step, sim.length - 1)] || sim[0];
};

export function ExperimentViewer() {
  const {
    currentLesson,
    experimentState,
    nextStep,
    previousStep,
    completeStep,
    completeLesson,
    isLessonCompleted,
  } = useScienceStore();

  const [showResults, setShowResults] = useState(false);

  if (!currentLesson || !currentLesson.steps) return null;

  const steps = currentLesson.steps;
  const { currentStep, stepsCompleted } = experimentState;
  const allStepsCompleted = stepsCompleted.length === steps.length;
  const completed = isLessonCompleted(currentLesson.id);

  const handleCompleteStep = () => {
    completeStep(currentStep);
    if (currentStep < steps.length - 1) {
      nextStep();
    } else {
      setShowResults(true);
    }
  };

  const handleFinish = () => {
    if (!completed) {
      completeLesson(currentLesson.id, currentLesson.xp);
    }
  };

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          <span className="text-7xl block animate-bounce">🎉</span>
          <h2 className="text-3xl font-bold text-white">Experimento Completado!</h2>
          <p className="text-xl text-slate-400">
            Completaste todos los pasos del experimento
          </p>

          <div className="flex items-center justify-center gap-2 text-green-400">
            <Award className="w-6 h-6" />
            <span className="font-medium">+{currentLesson.xp} XP ganados!</span>
          </div>

          <Button
            size="lg"
            onClick={handleFinish}
            className="bg-gradient-to-r from-green-500 to-emerald-600"
          >
            Finalizar
            <CheckCircle2 className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
          <FlaskConical className="w-5 h-5" />
          <span className="text-sm font-medium">Experimento Virtual</span>
        </div>
        <h2 className="text-2xl font-bold text-white">{currentLesson.title}</h2>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Paso {currentStep + 1} de {steps.length}</span>
          <span className="text-purple-400">{stepsCompleted.length} completados</span>
        </div>
        <Progress
          value={((currentStep + 1) / steps.length) * 100}
          className="h-2"
        />
      </div>

      {/* Simulation area */}
      <Card className="p-8 bg-slate-800/50 border-slate-700 min-h-[250px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <SimulationDisplay
              type={currentLesson.simulation || 'microscope'}
              step={currentStep}
            />
          </motion.div>
        </AnimatePresence>
      </Card>

      {/* Step info */}
      <Card className="p-6 bg-slate-800/50 border-slate-700">
        <h3 className="font-semibold text-lg text-white mb-2">{step.title}</h3>
        <p className="text-slate-300 mb-4">{step.instruction}</p>

        {step.expectedResult && (
          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
            <p className="text-sm text-green-400">
              <strong>Resultado esperado:</strong> {step.expectedResult}
            </p>
          </div>
        )}
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={previousStep}
          disabled={currentStep === 0}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Anterior
        </Button>

        {stepsCompleted.includes(currentStep) ? (
          <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
            Siguiente
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        ) : (
          <Button
            onClick={handleCompleteStep}
            className="bg-gradient-to-r from-purple-500 to-pink-600"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Completar Paso
          </Button>
        )}
      </div>
    </div>
  );
}
