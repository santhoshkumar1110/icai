export interface Option {
  key: 'a' | 'b' | 'c' | 'd';
  text: string;
}

export interface Question {
  id: string;
  questionNumber: number;
  questionText: string;
  options: Option[];
  correctKey: 'a' | 'b' | 'c' | 'd';
  marks: number;
  reasoning: string;
  accountingStandard?: string;
}

export interface CaseScenario {
  id: string;
  caseNumber: number;
  title: string;
  applicableStandards: string[];
  scenarioParagraphs: string[];
  scenarioTables?: { headers: string[]; rows: (string | number)[][] }[];
  questions: Question[];
}

export interface ExamPaper {
  id: string;
  code: string;
  title: string;
  subject: string;
  totalMarks: number;
  totalQuestions: number;
  durationMinutes: number;
  cases: CaseScenario[];
}

export interface QuestionScoreDetail {
  questionId: string;
  caseId: string;
  caseNumber: number;
  caseTitle: string;
  questionNumber: number;
  questionText: string;
  userAnswerKey: string | null;
  correctKey: 'a' | 'b' | 'c' | 'd';
  isCorrect: boolean;
  isAttempted: boolean;
  marksObtained: number;
  marksPossible: number;
  reasoning: string;
  accountingStandard?: string;
}

export interface ScoreSummary {
  totalScore: number;
  maxScore: number;
  correct: number;
  wrong: number;
  unattempted: number;
  percentage: number;
  details: QuestionScoreDetail[];
}
