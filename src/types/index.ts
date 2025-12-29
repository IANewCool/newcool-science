// Science branches
export type ScienceBranch = 'biology' | 'chemistry' | 'physics' | 'earth-science';

// Difficulty levels
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

// Lesson types
export type LessonType = 'lesson' | 'experiment' | 'quiz' | 'project';

// Experiment simulation types
export type SimulationType =
  | 'microscope'
  | 'chemical-reaction'
  | 'physics-simulation'
  | 'ecosystem'
  | 'solar-system'
  | 'circuit'
  | 'anatomy'
  | 'weather';

// An experiment step
export interface ExperimentStep {
  id: string;
  title: string;
  instruction: string;
  action?: string; // What user needs to do
  expectedResult?: string;
  hint?: string;
}

// A science lesson
export interface Lesson {
  id: string;
  title: string;
  description: string;
  branch: ScienceBranch;
  type: LessonType;
  difficulty: Difficulty;
  xp: number;
  duration: number; // minutes
  icon: string;

  // Content
  theory?: string;
  facts?: string[];
  steps?: ExperimentStep[];

  // Simulation
  simulation?: SimulationType;
  simulationConfig?: Record<string, unknown>;

  // Quiz
  questions?: QuizQuestion[];
}

// Quiz question
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// A science module
export interface Module {
  id: string;
  name: string;
  description: string;
  branch: ScienceBranch;
  icon: string;
  color: string;
  difficulty: Difficulty;
  requiredXP: number;
  lessons: Lesson[];
}

// User progress
export interface UserProgress {
  totalXP: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lessonsCompleted: number;
  experimentsCompleted: number;
  quizzesPassed: number;
  achievements: Achievement[];
  completedLessons: string[];
  unlockedModules: string[];
  lastActiveDate: string;
  preferredBranch: ScienceBranch;
}

// Achievement
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'lessons' | 'experiments' | 'streak' | 'xp' | 'level' | 'branch';
  requirement: number;
  branch?: ScienceBranch;
  progress?: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
}

// Experiment state
export interface ExperimentState {
  currentLesson: Lesson | null;
  currentStep: number;
  stepsCompleted: number[];
  isRunning: boolean;
  observations: string[];
  results: Record<string, unknown>;
}

// Level configuration
export interface LevelConfig {
  level: number;
  name: string;
  xpRequired: number;
  icon: string;
  color: string;
}
