export interface QuizAnswer {
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  answers: QuizAnswer[];
}

export interface QuizLevel {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  questions: QuizQuestion[];
}

export interface QuizResult {
  levelId: number;
  score: number;
  total: number;
  completedAt: number;
}
