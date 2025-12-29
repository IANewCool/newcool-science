'use client';

import { motion } from 'framer-motion';
import { Lock, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useScienceStore } from '@/store/science-store';
import type { Module } from '@/types';

interface ModuleCardProps {
  module: Module;
  index: number;
  onClick: () => void;
}

export function ModuleCard({ module, index, onClick }: ModuleCardProps) {
  const { isModuleUnlocked, getModuleProgress, progress } = useScienceStore();

  const unlocked = isModuleUnlocked(module.id);
  const moduleProgress = getModuleProgress(module.id);
  const isComplete = moduleProgress === 100;

  const completedLessons = module.lessons.filter(l =>
    progress.completedLessons.includes(l.id)
  ).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        className={`
          relative overflow-hidden cursor-pointer transition-all duration-300
          ${unlocked
            ? 'hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20'
            : 'opacity-60 cursor-not-allowed'
          }
          ${isComplete ? 'ring-2 ring-green-500/50' : ''}
          bg-slate-800/50 border-slate-700
        `}
        onClick={unlocked ? onClick : undefined}
      >
        {/* Header gradient */}
        <div
          className="h-2"
          style={{ backgroundColor: module.color }}
        />

        <div className="p-5">
          {/* Icon and lock */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${module.color}20` }}
            >
              {module.icon}
            </div>

            {!unlocked && (
              <div className="flex items-center gap-1 text-slate-500">
                <Lock className="w-4 h-4" />
                <span className="text-xs">{module.requiredXP} XP</span>
              </div>
            )}

            {isComplete && (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            )}
          </div>

          {/* Title and description */}
          <h3 className="font-bold text-lg text-white mb-1">{module.name}</h3>
          <p className="text-sm text-slate-400 mb-3 line-clamp-2">
            {module.description}
          </p>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            <Badge
              variant="outline"
              className={`
                text-xs
                ${module.difficulty === 'beginner' ? 'border-green-500/50 text-green-400' : ''}
                ${module.difficulty === 'intermediate' ? 'border-yellow-500/50 text-yellow-400' : ''}
                ${module.difficulty === 'advanced' ? 'border-red-500/50 text-red-400' : ''}
              `}
            >
              {module.difficulty === 'beginner' && 'Principiante'}
              {module.difficulty === 'intermediate' && 'Intermedio'}
              {module.difficulty === 'advanced' && 'Avanzado'}
            </Badge>
            <span className="text-xs text-slate-500">
              {module.lessons.length} lecciones
            </span>
          </div>

          {/* Progress */}
          {unlocked && (
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-400">Progreso</span>
                <span className="text-white font-medium">
                  {completedLessons}/{module.lessons.length}
                </span>
              </div>
              <Progress
                value={moduleProgress}
                className="h-2 bg-slate-700"
              />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
