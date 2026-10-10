import {
  Option,
  Question,
  CaseScenario,
  ExamPaper,
  QuestionScoreDetail,
  ScoreSummary,
} from './types';

import { cases1to10 } from './cases/cases1to10';
import { cases11to20 } from './cases/cases11to20';
import { cases21to30 } from './cases/cases21to30';
import { cases31to40 } from './cases/cases31to40';
import { cases41to50 } from './cases/cases41to50';
import { cases51to56 } from './cases/cases51to56';

// Re-export shared types
export * from './types';

// Combine all 6 chunk files into a single paper1Cases array
export const paper1Cases: CaseScenario[] = [
  ...cases1to10,
  ...cases11to20,
  ...cases21to30,
  ...cases31to40,
  ...cases41to50,
  ...cases51to56,
];

// Computed dynamic properties
export const totalQuestions: number = paper1Cases.reduce(
  (sum, c) => sum + c.questions.length,
  0
);

export const totalMarks: number = totalQuestions * 2;

export const durationMinutes: number = 180; // standard 3 hours

// Backward-compatible alias
export const allCases: CaseScenario[] = paper1Cases;
export const totalQuestionsCount: number = totalQuestions;

// Master Exam Paper object
export const paper1ExamPaper: ExamPaper = {
  id: 'icai-paper-1-master',
  code: 'PAPER-1',
  title: 'Advanced Accounting — Case Scenario Assessment',
  subject: 'Advanced Accounting',
  totalMarks,
  totalQuestions,
  durationMinutes,
  cases: paper1Cases,
};

export const paper1MasterExam: ExamPaper = paper1ExamPaper;

export function getPaper1(): ExamPaper {
  return paper1ExamPaper;
}

export function calculateScore(userAnswers: Record<string, string>): ScoreSummary {
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;
  let totalScore = 0;
  const details: QuestionScoreDetail[] = [];

  paper1Cases.forEach((c) => {
    c.questions.forEach((q) => {
      const userAns = userAnswers[q.id];
      const isAttempted = Boolean(userAns);
      const isCorrect = userAns === q.correctKey;

      if (!isAttempted) {
        unattempted++;
      } else if (isCorrect) {
        correct++;
        totalScore += q.marks;
      } else {
        wrong++;
      }

      details.push({
        questionId: q.id,
        caseId: c.id,
        caseNumber: c.caseNumber,
        caseTitle: c.title,
        questionNumber: q.questionNumber,
        questionText: q.questionText,
        userAnswerKey: userAns || null,
        correctKey: q.correctKey,
        isCorrect,
        isAttempted,
        marksObtained: isCorrect ? q.marks : 0,
        marksPossible: q.marks,
        reasoning: q.reasoning,
        accountingStandard: q.accountingStandard,
      });
    });
  });

  const percentage = totalMarks > 0 ? Math.round((totalScore / totalMarks) * 100) : 0;

  return {
    totalScore,
    maxScore: totalMarks,
    correct,
    wrong,
    unattempted,
    percentage,
    details,
  };
}
