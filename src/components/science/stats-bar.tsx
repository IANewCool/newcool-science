'use client';

import { motion } from 'framer-motion';
import { Flame, Trophy, Beaker, Star } from 'lucide-react';
import { useScienceStore } from '@/store/science-store';
import { getLevelByXP, getNextLevel } from '@/data/lessons';

export function StatsBar() {
  const { progress } = useScienceStore();
  const currentLevel = getLevelByXP(progress.totalXP);
  const nextLevel = getNextLevel(currentLevel.level);

  const xpToNext = nextLevel ? nextLevel.xpRequired - progress.totalXP : 0;
  const xpProgress = nextLevel
    ? ((progress.totalXP - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100
    : 100;

  return (
    <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Level & XP */}
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: `${currentLevel.color}30` }}
          >
            {currentLevel.icon}
          </div>
          <div className="min-w-[200px]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">
                Nivel {currentLevel.level} - {currentLevel.name}
              </span>
              <span className="text-xs text-slate-400">
                {progress.totalXP} XP
              </span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress}%` }}
                className="h-full rounded-full"
                style={{ backgroundColor: currentLevel.color }}
              />
            </div>
            {nextLevel && (
              <p className="text-xs text-slate-500 mt-1">
                {xpToNext} XP para nivel {nextLevel.level}
              </p>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          {/* Streak */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Flame className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">{progress.currentStreak}</p>
              <p className="text-xs text-slate-400">Racha</p>
            </div>
          </div>

          {/* Lessons */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">{progress.lessonsCompleted}</p>
              <p className="text-xs text-slate-400">Lecciones</p>
            </div>
          </div>

          {/* Experiments */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Beaker className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">{progress.experimentsCompleted}</p>
              <p className="text-xs text-slate-400">Experimentos</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <Trophy className="w-4 h-4 text-yellow-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">
                {progress.achievements.filter(a => a.isUnlocked).length}
              </p>
              <p className="text-xs text-slate-400">Logros</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
