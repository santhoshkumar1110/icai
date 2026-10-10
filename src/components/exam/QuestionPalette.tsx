import React, { useState, useMemo } from 'react';
import {
  LayoutGrid,
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Filter,
  Layers,
  ChevronLeft,
  ChevronRight,
  Eye,
} from 'lucide-react';
import { CaseScenario, ScoreSummary } from '../../data/types';

export interface FlatQuestionItem {
  globalNumber: number;
  questionId: string;
  caseIndex: number;
  questionIndexInCase: number;
  caseNumber: number;
  caseTitle: string;
  questionText: string;
  accountingStandard: string;
  marks: number;
  isAnswered: boolean;
  isFlagged: boolean;
  userAnswerKey?: string | null;
  correctKey?: string;
  isCorrect?: boolean;
  marksObtained?: number;
}

export interface QuestionPaletteProps {
  cases: CaseScenario[];
  activeCaseIndex: number;
  activeQuestionIndex?: number;
  onSelectQuestion: (caseIndex: number, questionIndex: number) => void;
  userAnswers: Record<string, string>;
  flaggedQuestions: Record<string, boolean>;
  isResultView?: boolean;
  scoreResult?: ScoreSummary | null;
  onClose?: () => void;
  className?: string;
}

type PaletteFilter = 'all' | 'answered' | 'unanswered' | 'active-case' | 'flagged';

const PAGE_SIZE = 50;

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  cases,
  activeCaseIndex,
  activeQuestionIndex = 0,
  onSelectQuestion,
  userAnswers,
  flaggedQuestions,
  isResultView = false,
  scoreResult,
  onClose,
  className = '',
}) => {
  const [filter, setFilter] = useState<PaletteFilter>('all');
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [hoveredQuestion, setHoveredQuestion] = useState<FlatQuestionItem | null>(null);

  // Flatten all questions across all 56 cases with 1-based global numbers
  const flatQuestions: FlatQuestionItem[] = useMemo(() => {
    const list: FlatQuestionItem[] = [];
    let counter = 1;

    // Create lookup for score result if in results mode
    const detailMap = new Map<string, { isCorrect: boolean; marksObtained: number; correctKey: string }>();
    if (scoreResult) {
      scoreResult.details.forEach((d) => {
        detailMap.set(d.questionId, {
          isCorrect: d.isCorrect,
          marksObtained: d.marksObtained,
          correctKey: d.correctKey,
        });
      });
    }

    cases.forEach((c, cIdx) => {
      c.questions.forEach((q, qIdx) => {
        const isAnswered = Boolean(userAnswers[q.id]);
        const isFlagged = Boolean(flaggedQuestions[q.id]);
        const resultDetail = detailMap.get(q.id);

        list.push({
          globalNumber: counter++,
          questionId: q.id,
          caseIndex: cIdx,
          questionIndexInCase: qIdx,
          caseNumber: c.caseNumber,
          caseTitle: c.title,
          questionText: q.questionText,
          accountingStandard: q.accountingStandard || 'AS Core',
          marks: q.marks,
          isAnswered,
          isFlagged,
          userAnswerKey: userAnswers[q.id] || null,
          correctKey: resultDetail?.correctKey,
          isCorrect: resultDetail?.isCorrect,
          marksObtained: resultDetail?.marksObtained,
        });
      });
    });

    return list;
  }, [cases, userAnswers, flaggedQuestions, scoreResult]);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return flatQuestions.filter((q) => {
      if (filter === 'active-case') {
        return q.caseIndex === activeCaseIndex;
      }
      if (filter === 'answered') {
        return q.isAnswered;
      }
      if (filter === 'unanswered') {
        return !q.isAnswered;
      }
      if (filter === 'flagged') {
        return q.isFlagged;
      }
      return true;
    });
  }, [flatQuestions, filter, activeCaseIndex]);

  // Grouped Pagination calculations
  const totalPages = Math.ceil(filteredQuestions.length / PAGE_SIZE) || 1;
  const safePageIndex = Math.min(pageIndex, totalPages - 1);

  const paginatedQuestions = useMemo(() => {
    const start = safePageIndex * PAGE_SIZE;
    return filteredQuestions.slice(start, start + PAGE_SIZE);
  }, [filteredQuestions, safePageIndex]);

  // Overall counts for summary pills
  const counts = useMemo(() => {
    let answered = 0;
    let unanswered = 0;
    let flagged = 0;
    let correct = 0;
    let incorrect = 0;

    flatQuestions.forEach((q) => {
      if (q.isAnswered) answered++;
      else unanswered++;
      if (q.isFlagged) flagged++;
      if (q.isCorrect) correct++;
      else if (q.isAnswered && q.isCorrect === false) incorrect++;
    });

    return {
      total: flatQuestions.length,
      answered,
      unanswered,
      flagged,
      correct,
      incorrect,
    };
  }, [flatQuestions]);

  return (
    <div
      id="question-palette-container"
      className={`bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 text-white shadow-xl ${className}`}
    >
      {/* Top Header: Title & Stats */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {isResultView ? 'Post-Exam Evaluation' : 'Comprehensive Question Palette'}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white">
              {isResultView
                ? `Results Palette (${counts.correct} Correct, ${counts.incorrect} Incorrect, ${counts.unanswered} Skipped)`
                : `Question Matrix (${counts.answered} of ${counts.total} Answered)`}
            </h3>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          {!isResultView ? (
            <>
              <span className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                <span className="w-2.5 h-2.5 rounded bg-blue-600 inline-block" />
                <span className="text-slate-300">Answered ({counts.answered})</span>
              </span>
              <span className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                <span className="w-2.5 h-2.5 rounded bg-slate-600 inline-block" />
                <span className="text-slate-400">Unattempted ({counts.unanswered})</span>
              </span>
              <span className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                <span className="w-2.5 h-2.5 rounded bg-purple-600 inline-block" />
                <span className="text-slate-300">Flagged ({counts.flagged})</span>
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/80 text-emerald-300">
                <span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block" />
                Correct (+2) [{counts.correct}]
              </span>
              <span className="flex items-center gap-1 bg-rose-950/60 px-2 py-1 rounded border border-rose-800/80 text-rose-300">
                <span className="w-2.5 h-2.5 rounded bg-rose-500 inline-block" />
                Incorrect (0) [{counts.incorrect}]
              </span>
              <span className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700 text-slate-400">
                <span className="w-2.5 h-2.5 rounded bg-slate-500 inline-block" />
                Unattempted [{counts.unanswered}]
              </span>
            </>
          )}
        </div>
      </div>

      {/* Toolbar: Filter Buttons & Page Jumper */}
      <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-slate-800/80">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-400 text-[11px] mr-1 hidden sm:inline">Filter:</span>
          <button
            id="palette-filter-all"
            onClick={() => {
              setFilter('all');
              setPageIndex(0);
            }}
            className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            All ({counts.total})
          </button>
          <button
            id="palette-filter-answered"
            onClick={() => {
              setFilter('answered');
              setPageIndex(0);
            }}
            className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
              filter === 'answered'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Answered ({counts.answered})
          </button>
          <button
            id="palette-filter-unanswered"
            onClick={() => {
              setFilter('unanswered');
              setPageIndex(0);
            }}
            className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
              filter === 'unanswered'
                ? 'bg-slate-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Unanswered ({counts.unanswered})
          </button>
          <button
            id="palette-filter-active-case"
            onClick={() => {
              setFilter('active-case');
              setPageIndex(0);
            }}
            className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
              filter === 'active-case'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Active Case (Case {cases[activeCaseIndex]?.caseNumber || 1})
          </button>
          {!isResultView && (
            <button
              id="palette-filter-flagged"
              onClick={() => {
                setFilter('flagged');
                setPageIndex(0);
              }}
              className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                filter === 'flagged'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Flagged ({counts.flagged})
            </button>
          )}
        </div>

        {/* Grouped Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center space-x-1.5 text-xs">
            <span className="text-slate-400 text-[11px] mr-1 hidden sm:inline">Page:</span>
            <button
              onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
              disabled={safePageIndex === 0}
              className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const startQ = idx * PAGE_SIZE + 1;
              const endQ = Math.min((idx + 1) * PAGE_SIZE, filteredQuestions.length);
              const isActive = safePageIndex === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setPageIndex(idx)}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                  title={`Questions ${startQ} to ${endQ}`}
                >
                  {startQ}–{endQ}
                </button>
              );
            })}

            <button
              onClick={() => setPageIndex((p) => Math.min(totalPages - 1, p + 1))}
              disabled={safePageIndex >= totalPages - 1}
              className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Grid of Numbered Buttons (Q1 to Q150+) */}
      <div className="pt-3">
        {paginatedQuestions.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs">
            No questions match this filter criteria.
          </div>
        ) : (
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-14 gap-2">
            {paginatedQuestions.map((q) => {
              const isCurrentlySelected =
                activeCaseIndex === q.caseIndex &&
                activeQuestionIndex === q.questionIndexInCase;

              let btnStyle = '';

              if (isResultView) {
                // Post-exam result view color coding
                if (q.isCorrect) {
                  // Emerald (correct, +2 marks)
                  btnStyle =
                    'bg-emerald-600 hover:bg-emerald-500 border-emerald-500 text-white shadow-xs';
                } else if (q.isAnswered && !q.isCorrect) {
                  // Rose (incorrect, 0 marks)
                  btnStyle =
                    'bg-rose-600 hover:bg-rose-500 border-rose-500 text-white shadow-xs';
                } else {
                  // Gray (unattempted, 0 marks)
                  btnStyle =
                    'bg-slate-700 hover:bg-slate-600 border-slate-600 text-slate-300';
                }
              } else {
                // Practice / Exam active mode color coding
                if (q.isFlagged) {
                  // Purple (flagged)
                  btnStyle =
                    'bg-purple-600 hover:bg-purple-500 border-purple-500 text-white font-bold shadow-xs';
                } else if (q.isAnswered) {
                  // Blue (answered)
                  btnStyle =
                    'bg-blue-600 hover:bg-blue-500 border-blue-500 text-white font-bold shadow-xs';
                } else {
                  // Gray (unattempted)
                  btnStyle =
                    'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300';
                }
              }

              return (
                <div key={q.questionId} className="relative group">
                  <button
                    id={`palette-btn-${q.globalNumber}`}
                    onClick={() => {
                      onSelectQuestion(q.caseIndex, q.questionIndexInCase);
                      if (onClose) onClose();
                    }}
                    onMouseEnter={() => setHoveredQuestion(q)}
                    onMouseLeave={() => setHoveredQuestion(null)}
                    className={`w-full aspect-square rounded-lg text-xs font-bold border transition-all flex flex-col items-center justify-center cursor-pointer ${btnStyle} ${
                      isCurrentlySelected
                        ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 scale-105 z-10'
                        : ''
                    }`}
                  >
                    <span>Q{q.globalNumber}</span>
                    <span className="text-[9px] opacity-75 font-normal leading-none mt-0.5">
                      C{q.caseNumber}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Hover Info Tooltip Bar */}
      {hoveredQuestion && (
        <div className="mt-3 pt-2.5 border-t border-slate-800 text-xs flex flex-wrap items-center justify-between gap-2 text-slate-300 animate-in fade-in duration-100">
          <div className="flex items-center space-x-2">
            <span className="bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded text-[10px]">
              Q{hoveredQuestion.globalNumber}
            </span>
            <span className="font-semibold text-white truncate max-w-xs sm:max-w-md">
              Case {hoveredQuestion.caseNumber}: {hoveredQuestion.caseTitle}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-[11px]">
            <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
              {hoveredQuestion.accountingStandard}
            </span>
            {isResultView ? (
              <span
                className={`font-bold ${
                  hoveredQuestion.isCorrect
                    ? 'text-emerald-400'
                    : hoveredQuestion.isAnswered
                    ? 'text-rose-400'
                    : 'text-amber-400'
                }`}
              >
                {hoveredQuestion.isCorrect
                  ? 'Correct (+2 Marks)'
                  : hoveredQuestion.isAnswered
                  ? 'Incorrect (0 Marks)'
                  : 'Unattempted (0 Marks)'}
              </span>
            ) : (
              <span className="text-slate-400">
                Status:{' '}
                <strong
                  className={
                    hoveredQuestion.isAnswered ? 'text-blue-400' : 'text-slate-300'
                  }
                >
                  {hoveredQuestion.isAnswered ? 'Answered' : 'Unanswered'}
                </strong>
                {hoveredQuestion.isFlagged && ' • Flagged'}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
