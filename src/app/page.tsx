'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FlaskConical,
  ArrowLeft,
  Trophy,
  Dna,
  Atom,
  Rocket,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModuleCard } from '@/components/science/module-card';
import { LessonList } from '@/components/science/lesson-list';
import { LessonViewer } from '@/components/science/lesson-viewer';
import { ExperimentViewer } from '@/components/science/experiment-viewer';
import { StatsBar } from '@/components/science/stats-bar';
import { useScienceStore } from '@/store/science-store';
import { ALL_MODULES, getModulesByBranch, getBranchInfo } from '@/data/lessons';
import type { ScienceBranch } from '@/types';

type View = 'home' | 'modules' | 'lesson';

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [selectedBranch, setSelectedBranch] = useState<ScienceBranch | 'all'>('all');
  const { currentModule, currentLesson, selectModule, selectLesson, clearSelection, progress } = useScienceStore();

  const filteredModules = selectedBranch === 'all'
    ? ALL_MODULES
    : getModulesByBranch(selectedBranch);

  const handleModuleClick = (module: typeof ALL_MODULES[0]) => {
    selectModule(module);
    setView('modules');
  };

  const handleLessonClick = (lesson: typeof ALL_MODULES[0]['lessons'][0]) => {
    selectLesson(lesson);
    setView('lesson');
  };

  const handleBack = () => {
    if (view === 'lesson') {
      setView('modules');
    } else if (view === 'modules') {
      clearSelection();
      setView('home');
    }
  };

  const branchIcons = {
    biology: <Dna className="w-4 h-4" />,
    chemistry: <FlaskConical className="w-4 h-4" />,
    physics: <Atom className="w-4 h-4" />,
    'earth-science': <Globe className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {view !== 'home' ? (
              <Button variant="ghost" size="icon" onClick={handleBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
            )}
            <div>
              <h1 className="font-bold text-lg text-white">
                {view === 'home' && 'NewCool Science'}
                {view === 'modules' && currentModule?.name}
                {view === 'lesson' && currentLesson?.title}
              </h1>
              <p className="text-xs text-green-300">
                {view === 'home' && 'Explora el mundo de la ciencia'}
                {view === 'modules' && `${currentModule?.lessons.length} lecciones`}
                {view === 'lesson' && currentLesson?.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/20 rounded-lg">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">{progress.totalXP} XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <StatsBar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Hero section */}
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6"
                >
                  <FlaskConical className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  Explora la Ciencia
                </h2>
                <p className="text-slate-400 max-w-md mx-auto">
                  Desde celulas hasta el universo. Experimentos virtuales,
                  lecciones interactivas y quizzes desafiantes.
                </p>
              </div>

              {/* Branch filters */}
              <div className="flex justify-center gap-3 flex-wrap">
                <Button
                  variant={selectedBranch === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedBranch('all')}
                  className="gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  Todos
                </Button>
                {(['biology', 'chemistry', 'physics', 'earth-science'] as ScienceBranch[]).map((branch) => {
                  const info = getBranchInfo(branch);
                  return (
                    <Button
                      key={branch}
                      variant={selectedBranch === branch ? 'default' : 'outline'}
                      onClick={() => setSelectedBranch(branch)}
                      className="gap-2"
                      style={selectedBranch === branch ? { backgroundColor: info.color } : undefined}
                    >
                      {branchIcons[branch]}
                      {info.name}
                    </Button>
                  );
                })}
              </div>

              {/* Modules grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredModules.map((module, i) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    index={i}
                    onClick={() => handleModuleClick(module)}
                  />
                ))}
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <p className="text-3xl font-bold text-green-400">{ALL_MODULES.length}</p>
                  <p className="text-sm text-slate-400">Modulos</p>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <p className="text-3xl font-bold text-purple-400">
                    {ALL_MODULES.reduce((sum, m) => sum + m.lessons.length, 0)}
                  </p>
                  <p className="text-sm text-slate-400">Lecciones</p>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <p className="text-3xl font-bold text-blue-400">4</p>
                  <p className="text-sm text-slate-400">Ramas</p>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <p className="text-3xl font-bold text-yellow-400">
                    {ALL_MODULES.reduce((sum, m) => sum + m.lessons.filter(l => l.type === 'experiment').length, 0)}
                  </p>
                  <p className="text-sm text-slate-400">Experimentos</p>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'modules' && currentModule && (
            <motion.div
              key="modules"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Module header */}
              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${currentModule.color}20` }}
                >
                  {currentModule.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white">{currentModule.name}</h2>
                  <p className="text-slate-400">{currentModule.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span
                      className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        ${currentModule.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' : ''}
                        ${currentModule.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                        ${currentModule.difficulty === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
                      `}
                    >
                      {currentModule.difficulty === 'beginner' && 'Principiante'}
                      {currentModule.difficulty === 'intermediate' && 'Intermedio'}
                      {currentModule.difficulty === 'advanced' && 'Avanzado'}
                    </span>
                    <span className="text-sm text-slate-400">
                      {currentModule.lessons.length} lecciones
                    </span>
                  </div>
                </div>
              </div>

              {/* Lessons list */}
              <LessonList
                lessons={currentModule.lessons}
                onSelectLesson={handleLessonClick}
              />
            </motion.div>
          )}

          {view === 'lesson' && currentLesson && (
            <motion.div
              key="lesson"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {currentLesson.type === 'experiment' ? (
                <ExperimentViewer />
              ) : (
                <LessonViewer />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>
            <span className="font-semibold text-green-400">NewCool Science</span>
            {' '}- Parte del ecosistema NewCool
          </p>
          <p className="mt-1">Explora el universo desde tu pantalla</p>
        </div>
      </footer>
    </div>
  );
}
