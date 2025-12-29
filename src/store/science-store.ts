import { create } from 'zustand';
import type { UserProgress, ExperimentState, Module, Lesson, ScienceBranch, Achievement } from '@/types';
import { ALL_MODULES, ACHIEVEMENTS, getLevelByXP } from '@/data/lessons';

interface ScienceStore {
  // User progress
  progress: UserProgress;

  // Experiment state
  experimentState: ExperimentState;

  // Current selection
  currentModule: Module | null;
  currentLesson: Lesson | null;

  // Actions
  selectModule: (module: Module) => void;
  selectLesson: (lesson: Lesson) => void;
  clearSelection: () => void;

  // Experiment actions
  nextStep: () => void;
  previousStep: () => void;
  completeStep: (stepIndex: number) => void;
  addObservation: (observation: string) => void;
  resetExperiment: () => void;

  // Progress actions
  completeLesson: (lessonId: string, xp: number) => void;
  addXP: (amount: number) => void;
  updateStreak: () => void;
  unlockAchievement: (achievementId: string) => void;

  // Helpers
  isLessonCompleted: (lessonId: string) => boolean;
  isModuleUnlocked: (moduleId: string) => boolean;
  getModuleProgress: (moduleId: string) => number;
  updateAchievements: () => void;
}

const initialProgress: UserProgress = {
  totalXP: 0,
  level: 1,
  currentStreak: 0,
  longestStreak: 0,
  lessonsCompleted: 0,
  experimentsCompleted: 0,
  quizzesPassed: 0,
  achievements: ACHIEVEMENTS.map(a => ({ ...a })),
  completedLessons: [],
  unlockedModules: ['bio-cells', 'chem-matter', 'phys-forces', 'earth-planet'],
  lastActiveDate: new Date().toISOString().split('T')[0],
  preferredBranch: 'biology',
};

const initialExperimentState: ExperimentState = {
  currentLesson: null,
  currentStep: 0,
  stepsCompleted: [],
  isRunning: false,
  observations: [],
  results: {},
};

export const useScienceStore = create<ScienceStore>((set, get) => ({
  progress: initialProgress,
  experimentState: initialExperimentState,
  currentModule: null,
  currentLesson: null,

  selectModule: (module) => {
    set({ currentModule: module, currentLesson: null });
  },

  selectLesson: (lesson) => {
    set({
      currentLesson: lesson,
      experimentState: {
        ...initialExperimentState,
        currentLesson: lesson,
      },
    });
  },

  clearSelection: () => {
    set({
      currentModule: null,
      currentLesson: null,
      experimentState: initialExperimentState,
    });
  },

  nextStep: () => {
    const { experimentState, currentLesson } = get();
    const maxSteps = currentLesson?.steps?.length || 0;
    if (experimentState.currentStep < maxSteps - 1) {
      set({
        experimentState: {
          ...experimentState,
          currentStep: experimentState.currentStep + 1,
        },
      });
    }
  },

  previousStep: () => {
    const { experimentState } = get();
    if (experimentState.currentStep > 0) {
      set({
        experimentState: {
          ...experimentState,
          currentStep: experimentState.currentStep - 1,
        },
      });
    }
  },

  completeStep: (stepIndex) => {
    const { experimentState } = get();
    if (!experimentState.stepsCompleted.includes(stepIndex)) {
      set({
        experimentState: {
          ...experimentState,
          stepsCompleted: [...experimentState.stepsCompleted, stepIndex],
        },
      });
    }
  },

  addObservation: (observation) => {
    const { experimentState } = get();
    set({
      experimentState: {
        ...experimentState,
        observations: [...experimentState.observations, observation],
      },
    });
  },

  resetExperiment: () => {
    const { currentLesson } = get();
    set({
      experimentState: {
        ...initialExperimentState,
        currentLesson,
      },
    });
  },

  completeLesson: (lessonId, xp) => {
    const { progress, currentLesson } = get();

    if (progress.completedLessons.includes(lessonId)) {
      return; // Already completed
    }

    const newCompletedLessons = [...progress.completedLessons, lessonId];
    const newXP = progress.totalXP + xp;
    const newLevel = getLevelByXP(newXP);

    // Update stats based on lesson type
    let experimentsCompleted = progress.experimentsCompleted;
    let quizzesPassed = progress.quizzesPassed;

    if (currentLesson?.type === 'experiment') {
      experimentsCompleted++;
    } else if (currentLesson?.type === 'quiz') {
      quizzesPassed++;
    }

    // Check for module unlocks
    const unlockedModules = [...progress.unlockedModules];
    ALL_MODULES.forEach((module) => {
      if (!unlockedModules.includes(module.id) && newXP >= module.requiredXP) {
        unlockedModules.push(module.id);
      }
    });

    set({
      progress: {
        ...progress,
        totalXP: newXP,
        level: newLevel.level,
        lessonsCompleted: progress.lessonsCompleted + 1,
        experimentsCompleted,
        quizzesPassed,
        completedLessons: newCompletedLessons,
        unlockedModules,
      },
    });

    // Check achievements
    get().updateAchievements();
  },

  addXP: (amount) => {
    set((state) => {
      const newXP = state.progress.totalXP + amount;
      const newLevel = getLevelByXP(newXP);
      return {
        progress: {
          ...state.progress,
          totalXP: newXP,
          level: newLevel.level,
        },
      };
    });
  },

  updateStreak: () => {
    const { progress } = get();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    let newStreak = progress.currentStreak;

    if (progress.lastActiveDate === yesterday) {
      newStreak++;
    } else if (progress.lastActiveDate !== today) {
      newStreak = 1;
    }

    set({
      progress: {
        ...progress,
        currentStreak: newStreak,
        longestStreak: Math.max(progress.longestStreak, newStreak),
        lastActiveDate: today,
      },
    });
  },

  unlockAchievement: (achievementId) => {
    set((state) => ({
      progress: {
        ...state.progress,
        achievements: state.progress.achievements.map((a) =>
          a.id === achievementId
            ? { ...a, isUnlocked: true, unlockedAt: new Date() }
            : a
        ),
      },
    }));
  },

  updateAchievements: () => {
    const { progress } = get();

    // Count lessons by branch
    const branchCounts: Record<ScienceBranch, number> = {
      'biology': 0,
      'chemistry': 0,
      'physics': 0,
      'earth-science': 0,
    };

    ALL_MODULES.forEach(module => {
      module.lessons.forEach(lesson => {
        if (progress.completedLessons.includes(lesson.id)) {
          branchCounts[module.branch]++;
        }
      });
    });

    const updatedAchievements = progress.achievements.map((achievement) => {
      if (achievement.isUnlocked) return achievement;

      let currentProgress = 0;

      switch (achievement.type) {
        case 'lessons':
          currentProgress = progress.lessonsCompleted;
          break;
        case 'experiments':
          currentProgress = progress.experimentsCompleted;
          break;
        case 'streak':
          currentProgress = progress.currentStreak;
          break;
        case 'xp':
          currentProgress = progress.totalXP;
          break;
        case 'level':
          currentProgress = progress.level;
          break;
        case 'branch':
          if (achievement.branch) {
            currentProgress = branchCounts[achievement.branch];
          }
          break;
      }

      const isUnlocked = currentProgress >= achievement.requirement;

      return {
        ...achievement,
        progress: currentProgress,
        isUnlocked,
        unlockedAt: isUnlocked ? new Date() : undefined,
      };
    });

    set((state) => ({
      progress: {
        ...state.progress,
        achievements: updatedAchievements,
      },
    }));
  },

  isLessonCompleted: (lessonId) => {
    return get().progress.completedLessons.includes(lessonId);
  },

  isModuleUnlocked: (moduleId) => {
    return get().progress.unlockedModules.includes(moduleId);
  },

  getModuleProgress: (moduleId) => {
    const { progress } = get();
    const module = ALL_MODULES.find((m) => m.id === moduleId);
    if (!module) return 0;

    const completedInModule = module.lessons.filter((l) =>
      progress.completedLessons.includes(l.id)
    ).length;

    return Math.round((completedInModule / module.lessons.length) * 100);
  },
}));
