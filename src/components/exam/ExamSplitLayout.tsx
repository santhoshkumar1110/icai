import React from 'react';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  Award,
  Layers,
  Check,
  Building2,
} from 'lucide-react';
import { CaseScenario, Question } from '../../data/paper1Data';
import { CaseScenarioViewer } from './CaseScenarioViewer';

export interface ExamSplitLayoutProps {
  cases: CaseScenario[];
  activeCaseIndex: number;
  activeQuestionIndex: number;
  onSelectCase: (caseIndex: number) => void;
  onSelectQuestion: (questionIndex: number) => void;
  userAnswers: Record<string, string>;
  onSelectAnswer: (questionId: string, optionKey: string) => void;
  flaggedQuestions: Record<string, boolean>;
  onToggleFlag: (questionId: string) => void;
  mode: 'practice' | 'exam';
  showHints: Record<string, boolean>;
  onToggleHint: (questionId: string) => void;
  onSubmitExam?: () => void;
}

export const ExamSplitLayout: React.FC<ExamSplitLayoutProps> = ({
  cases,
  activeCaseIndex,
  activeQuestionIndex,
  onSelectCase,
  onSelectQuestion,
  userAnswers,
  onSelectAnswer,
  flaggedQuestions,
  onToggleFlag,
  mode,
  showHints,
  onToggleHint,
  onSubmitExam,
}) => {
  const currentCase = cases[activeCaseIndex] || cases[0];
  const currentQuestions = currentCase.questions;
  const currentQuestion: Question =
    currentQuestions[activeQuestionIndex] || currentQuestions[0];

  const totalQuestionsInCase = currentQuestions.length;
  const isAnswered = Boolean(userAnswers[currentQuestion.id]);
  const isFlagged = Boolean(flaggedQuestions[currentQuestion.id]);
  const isHintOpen = Boolean(showHints[currentQuestion.id]);

  // Overall question index calculation
  let globalQuestionNumber = 0;
  for (let i = 0; i < activeCaseIndex; i++) {
    globalQuestionNumber += cases[i].questions.length;
  }
  globalQuestionNumber += activeQuestionIndex + 1;

  let totalExamQuestions = 0;
  cases.forEach((c) => (totalExamQuestions += c.questions.length));

  // Navigation helpers
  const handlePrev = () => {
    if (activeQuestionIndex > 0) {
      onSelectQuestion(activeQuestionIndex - 1);
    } else if (activeCaseIndex > 0) {
      const prevCaseIdx = activeCaseIndex - 1;
      onSelectCase(prevCaseIdx);
      onSelectQuestion(cases[prevCaseIdx].questions.length - 1);
    }
  };

  const handleNext = () => {
    if (activeQuestionIndex < totalQuestionsInCase - 1) {
      onSelectQuestion(activeQuestionIndex + 1);
    } else if (activeCaseIndex < cases.length - 1) {
      onSelectCase(activeCaseIndex + 1);
      onSelectQuestion(0);
    }
  };

  const isFirstQuestion = activeCaseIndex === 0 && activeQuestionIndex === 0;
  const isLastQuestion =
    activeCaseIndex === cases.length - 1 &&
    activeQuestionIndex === totalQuestionsInCase - 1;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[calc(100vh-140px)] items-stretch">
      {/* LEFT PANE: Case Scenario Dossier */}
      <div className="h-[550px] lg:h-full overflow-hidden flex flex-col">
        <CaseScenarioViewer
          cases={cases}
          activeCaseIndex={activeCaseIndex}
          onSelectCase={onSelectCase}
          userAnswers={userAnswers}
          className="h-full"
        />
      </div>

      {/* RIGHT PANE: MCQ Deck */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col h-[600px] lg:h-full overflow-hidden">
        {/* Sticky Question Header Indicator */}
        <div className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800 text-white px-5 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="bg-amber-500 text-slate-950 font-bold px-2.5 py-0.5 rounded text-xs">
                Question {activeQuestionIndex + 1} of {totalQuestionsInCase}
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">|</span>
              <span className="text-xs text-slate-300 font-medium">
                Overall: {globalQuestionNumber}/{totalExamQuestions}
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">|</span>
              <span className="text-xs text-amber-400 font-semibold">
                {currentQuestion.marks} Marks
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Flag / Mark for review button */}
              <button
                id={`flag-question-${currentQuestion.id}`}
                onClick={() => onToggleFlag(currentQuestion.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold border flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isFlagged
                    ? 'bg-amber-400 border-amber-400 text-slate-950 shadow-xs'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                title="Mark this question for review"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{isFlagged ? 'Marked' : 'Mark for Review'}</span>
              </button>

              {/* Practice mode hint / answer reveal */}
              {mode === 'practice' && (
                <button
                  id={`toggle-hint-${currentQuestion.id}`}
                  onClick={() => onToggleHint(currentQuestion.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold border flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isHintOpen
                      ? 'bg-indigo-600 border-indigo-500 text-white'
                      : 'bg-slate-800 border-slate-700 text-indigo-300 hover:text-white'
                  }`}
                  title="View ICAI Working Notes and Solution"
                >
                  {isHintOpen ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Hide Working Note</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">View Working Note</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Mini Question Navigator for this Case */}
          <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
              <span className="text-[11px] text-slate-400 mr-1 hidden sm:inline">
                In this case:
              </span>
              {currentQuestions.map((q, qIdx) => {
                const isCur = activeQuestionIndex === qIdx;
                const answered = Boolean(userAnswers[q.id]);
                const flagged = Boolean(flaggedQuestions[q.id]);

                let pillColor = 'bg-slate-800 text-slate-400 border-slate-700';
                if (answered && flagged) {
                  pillColor = 'bg-purple-600 text-white border-purple-500';
                } else if (flagged) {
                  pillColor = 'bg-amber-400 text-slate-950 font-bold border-amber-300';
                } else if (answered) {
                  pillColor = 'bg-emerald-600 text-white border-emerald-500';
                }

                return (
                  <button
                    key={q.id}
                    id={`case-question-nav-${q.id}`}
                    onClick={() => onSelectQuestion(qIdx)}
                    className={`w-7 h-7 rounded-md text-xs font-bold border flex items-center justify-center transition-all cursor-pointer ${pillColor} ${
                      isCur
                        ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-slate-900 scale-105'
                        : 'hover:opacity-80'
                    }`}
                  >
                    Q{q.questionNumber}
                  </button>
                );
              })}
            </div>

            <span className="text-[11px] font-medium text-slate-400">
              {currentQuestion.accountingStandard}
            </span>
          </div>
        </div>

        {/* Scrollable Question Body & Interactive Choices */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {/* Question Text */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4.5">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Case {currentCase.caseNumber} • Multiple Choice Question {currentQuestion.questionNumber}
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQuestion.questionText}
            </p>
          </div>

          {/* Options Deck */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Select One Option:
            </div>
            {currentQuestion.options.map((option) => {
              const isSelected = userAnswers[currentQuestion.id] === option.key;
              const isRevealed = mode === 'practice' && isHintOpen;
              const isCorrectAnswer = option.key === currentQuestion.correctKey;

              let cardStyle =
                'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50/70 text-slate-800';

              if (isSelected) {
                cardStyle = 'border-slate-950 bg-slate-900 text-white shadow-md ring-1 ring-slate-950';
              }

              if (isRevealed) {
                if (isCorrectAnswer) {
                  cardStyle =
                    'border-emerald-500 bg-emerald-50/90 text-emerald-950 ring-2 ring-emerald-500/50';
                } else if (isSelected && !isCorrectAnswer) {
                  cardStyle =
                    'border-rose-400 bg-rose-50/90 text-rose-950 ring-1 ring-rose-400';
                }
              }

              return (
                <button
                  key={option.key}
                  id={`mcq-option-${currentQuestion.id}-${option.key}`}
                  onClick={() => onSelectAnswer(currentQuestion.id, option.key)}
                  className={`w-full text-left p-4 rounded-xl border flex items-start gap-3.5 transition-all cursor-pointer ${cardStyle}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 font-bold text-xs uppercase transition-colors ${
                      isSelected
                        ? 'bg-amber-400 border-amber-400 text-slate-950'
                        : 'border-slate-300 text-slate-600 bg-slate-100'
                    }`}
                  >
                    {option.key}
                  </div>

                  <div className="flex-1 text-sm font-medium pt-0.5 leading-relaxed">
                    {option.text}
                  </div>

                  {isRevealed && isCorrectAnswer && (
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                      <CheckCircle2 className="w-4 h-4" /> Correct Answer
                    </div>
                  )}

                  {isRevealed && isSelected && !isCorrectAnswer && (
                    <div className="flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md shrink-0">
                      <XCircle className="w-4 h-4" /> Selected
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Working Notes / ICAI Explanation (Practice Mode) */}
          {mode === 'practice' && isHintOpen && (
            <div className="p-4.5 rounded-xl bg-amber-50/90 border border-amber-200 text-xs space-y-2 animate-in fade-in duration-200 shadow-xs">
              <div className="font-bold text-amber-950 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  ICAI Working Note & Statutory Reasoning
                </span>
                <span className="text-[11px] bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded font-mono font-bold">
                  {currentQuestion.accountingStandard}
                </span>
              </div>
              <p className="text-slate-800 whitespace-pre-line leading-relaxed text-xs sm:text-sm font-normal">
                {currentQuestion.reasoning}
              </p>
            </div>
          )}
        </div>

        {/* Action Footer: Navigation & Case Transition */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between gap-3">
          <button
            id="mcq-deck-prev-btn"
            onClick={handlePrev}
            disabled={isFirstQuestion}
            className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Question
          </button>

          <div className="flex items-center gap-2">
            {isLastQuestion ? (
              onSubmitExam && (
                <button
                  id="mcq-deck-submit-btn"
                  onClick={onSubmitExam}
                  className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <Award className="w-4 h-4" /> Finish & Submit Exam
                </button>
              )
            ) : (
              <button
                id="mcq-deck-next-btn"
                onClick={handleNext}
                className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                Next Question <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
