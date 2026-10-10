import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  FileText,
  RotateCcw,
  Sparkles,
  Check,
  AlertTriangle,
  HelpCircle,
  BarChart3,
  ShieldCheck,
  Building2,
  LayoutGrid,
} from 'lucide-react';
import {
  getPaper1,
  calculateScore,
  ScoreSummary,
} from './data/paper1Data';
import { ExamSplitLayout } from './components/exam/ExamSplitLayout';
import { CaseSelector } from './components/exam/CaseSelector';
import { QuestionPalette } from './components/exam/QuestionPalette';

export default function App() {
  const paper = getPaper1();

  // Navigation & State
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');
  const [showResults, setShowResults] = useState(false);
  const [scoreResult, setScoreResult] = useState<ScoreSummary | null>(null);
  const [timerSeconds, setTimerSeconds] = useState(paper.durationMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isCaseSelectorOpen, setIsCaseSelectorOpen] = useState(false);

  // Timer for exam mode
  useEffect(() => {
    let interval: any = null;
    if (mode === 'exam' && isTimerRunning && !showResults && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [mode, isTimerRunning, showResults, timerSeconds]);

  const handleSelectOption = (questionId: string, key: string) => {
    if (showResults) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: key,
    }));
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleToggleHint = (questionId: string) => {
    setShowHints((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSelectCase = (caseIdx: number) => {
    setSelectedCaseIndex(caseIdx);
    setSelectedQuestionIndex(0);
  };

  const handleSelectQuestion = (qIdx: number) => {
    setSelectedQuestionIndex(qIdx);
  };

  const handleSubmitExam = () => {
    const summary = calculateScore(userAnswers);
    setScoreResult(summary);
    setShowResults(true);
    setIsTimerRunning(false);
  };

  const handleReset = () => {
    setUserAnswers({});
    setFlaggedQuestions({});
    setShowHints({});
    setShowResults(false);
    setScoreResult(null);
    setTimerSeconds(paper.durationMinutes * 60);
    setIsTimerRunning(true);
    setSelectedCaseIndex(0);
    setSelectedQuestionIndex(0);
  };

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Status calculation for question navigator
  const getQuestionStatus = (qId: string) => {
    const answered = Boolean(userAnswers[qId]);
    const flagged = Boolean(flaggedQuestions[qId]);
    if (flagged && answered) return 'flagged-answered';
    if (flagged) return 'flagged';
    if (answered) return 'answered';
    return 'unanswered';
  };

  // Standard breakdown calculation for results
  const standardStats = React.useMemo(() => {
    if (!scoreResult) return [];
    const map = new Map<string, { total: number; correct: number; marks: number }>();
    scoreResult.details.forEach((item) => {
      const std = item.accountingStandard || 'General';
      const existing = map.get(std) || { total: 0, correct: 0, marks: 0 };
      existing.total += 1;
      if (item.isCorrect) existing.correct += 1;
      existing.marks += item.marksObtained;
      map.set(std, existing);
    });
    return Array.from(map.entries()).map(([standard, stats]) => ({
      standard,
      ...stats,
      percentage: Math.round((stats.correct / stats.total) * 100),
    }));
  }, [scoreResult]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans">
      {/* Top Banner: ICAI Official Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-lg shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs tracking-wider uppercase font-semibold text-amber-400">
                  Board of Studies (Academic) • ICAI
                </span>
                <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                  {paper.code}
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold tracking-tight text-white truncate max-w-sm sm:max-w-none">
                {paper.subject} — Case Scenarios Examination Portal
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Case Selector Drawer Toggle */}
            <button
              id="open-case-selector-header-btn"
              onClick={() => setIsCaseSelectorOpen(true)}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Search and select from all 56 case scenarios"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Cases</span>
              <span className="text-[11px] px-1 rounded bg-slate-700 text-slate-200">
                56
              </span>
            </button>

            {/* Question Palette Toggle */}
            {!showResults && (
              <button
                id="toggle-palette-btn"
                onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isPaletteOpen
                    ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-xs'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                }`}
                title="Toggle Master Question Palette"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Palette</span>
                <span className="text-[11px] px-1 rounded bg-slate-700 text-slate-200">
                  {Object.keys(userAnswers).length}/{paper.totalQuestions}
                </span>
              </button>
            )}

            {/* Mode Switcher */}
            <div className="inline-flex rounded-lg bg-slate-800 p-1 border border-slate-700 text-xs font-medium">
              <button
                id="mode-practice-btn"
                onClick={() => setMode('practice')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  mode === 'practice'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Practice
              </button>
              <button
                id="mode-exam-btn"
                onClick={() => setMode('exam')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  mode === 'exam'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Exam
              </button>
            </div>

            {/* Timer */}
            {mode === 'exam' && (
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span
                  className={
                    timerSeconds < 300
                      ? 'text-red-400 font-bold animate-pulse'
                      : 'text-slate-200 font-semibold'
                  }
                >
                  {formatTime(timerSeconds)}
                </span>
              </div>
            )}

            {!showResults ? (
              <button
                id="submit-exam-btn"
                onClick={handleSubmitExam}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Submit</span>
              </button>
            ) : (
              <button
                id="retake-exam-btn"
                onClick={handleReset}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-take</span>
              </button>
            )}
          </div>
        </div>

        {/* Collapsible Global Question Palette Drawer */}
        {isPaletteOpen && !showResults && (
          <div className="border-t border-slate-800 bg-slate-950 px-4 sm:px-6 py-4 animate-in slide-in-from-top-2">
            <div className="max-w-7xl mx-auto">
              <QuestionPalette
                cases={paper.cases}
                activeCaseIndex={selectedCaseIndex}
                activeQuestionIndex={selectedQuestionIndex}
                onSelectQuestion={(cIdx, qIdx) => {
                  setSelectedCaseIndex(cIdx);
                  setSelectedQuestionIndex(qIdx);
                  setIsPaletteOpen(false);
                }}
                userAnswers={userAnswers}
                flaggedQuestions={flaggedQuestions}
                isResultView={false}
                onClose={() => setIsPaletteOpen(false)}
              />
            </div>
          </div>
        )}
      </header>

      {/* Subheader Metadata Bar */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-slate-800">
              Exam Format: 30% Objective Assessment
            </span>
            <span className="text-slate-300">|</span>
            <span>Total Marks: <strong>{paper.totalMarks}</strong></span>
            <span className="text-slate-300">|</span>
            <span>Duration: <strong>{paper.durationMinutes} Mins</strong></span>
            <span className="text-slate-300">|</span>
            <span>Total Questions: <strong>{paper.totalQuestions}</strong> (2 Marks each)</span>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Subject: Advanced Accounting (Paper 1)
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-5 flex-1 flex flex-col">
        {showResults && scoreResult ? (
          /* Results View */
          <div className="space-y-6">
            {/* Scorecard Hero */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" /> Assessment Evaluation Complete
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Performance Summary
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">
                    ICAI Intermediate Paper 1: Advanced Accounting — Integrated Case Scenarios
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-slate-900 text-white px-6 py-4 rounded-xl text-center shadow">
                    <div className="text-xs text-slate-400 font-medium">Marks Obtained</div>
                    <div className="text-3xl font-extrabold text-amber-400">
                      {scoreResult.totalScore} <span className="text-base text-slate-400 font-normal">/ {scoreResult.maxScore}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl text-center">
                    <div className="text-xs text-slate-500 font-medium">Percentage</div>
                    <div className="text-3xl font-extrabold text-slate-900">
                      {scoreResult.percentage}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-center">
                  <div className="text-xs text-emerald-800 font-medium flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Correct Answers
                  </div>
                  <div className="text-xl font-bold text-emerald-700 mt-1">{scoreResult.correct}</div>
                </div>
                <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-3.5 text-center">
                  <div className="text-xs text-rose-800 font-medium flex items-center justify-center gap-1">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" /> Incorrect Answers
                  </div>
                  <div className="text-xl font-bold text-rose-700 mt-1">{scoreResult.wrong}</div>
                </div>
                <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5 text-center">
                  <div className="text-xs text-amber-800 font-medium flex items-center justify-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600" /> Unattempted
                  </div>
                  <div className="text-xl font-bold text-amber-700 mt-1">{scoreResult.unattempted}</div>
                </div>
                <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-3.5 text-center">
                  <div className="text-xs text-indigo-800 font-medium flex items-center justify-center gap-1">
                    <BarChart3 className="w-3.5 h-3.5 text-indigo-600" /> Total Questions
                  </div>
                  <div className="text-xl font-bold text-indigo-700 mt-1">{paper.totalQuestions}</div>
                </div>
              </div>
            </div>

            {/* Standard-wise Performance */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-700" /> Performance by Accounting Standard
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {standardStats.map((item) => (
                  <div key={item.standard} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="text-xs font-semibold text-slate-800 truncate mb-1">
                      {item.standard}
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-600 mb-2">
                      <span>{item.correct} of {item.total} correct</span>
                      <span className="font-bold text-slate-900">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          item.percentage >= 75
                            ? 'bg-emerald-500'
                            : item.percentage >= 50
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-Exam Question Matrix (Color-Coded: Emerald, Rose, Gray) */}
            <QuestionPalette
              cases={paper.cases}
              activeCaseIndex={selectedCaseIndex}
              activeQuestionIndex={selectedQuestionIndex}
              onSelectQuestion={(cIdx, qIdx) => {
                setSelectedCaseIndex(cIdx);
                setSelectedQuestionIndex(qIdx);
                const targetCase = paper.cases[cIdx];
                const targetQ = targetCase?.questions[qIdx];
                if (targetQ) {
                  const el = document.getElementById(`review-detail-${targetQ.id}`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }
              }}
              userAnswers={userAnswers}
              flaggedQuestions={flaggedQuestions}
              isResultView={true}
              scoreResult={scoreResult}
            />

            {/* Detailed Question Review */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-slate-700" />
                  Detailed Solutions & ICAI Working Notes
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  Verified as per BOS Case Scenario Booklet
                </span>
              </div>

              <div className="space-y-6">
                {scoreResult.details.map((detail) => (
                  <div
                    key={detail.questionId}
                    id={`review-detail-${detail.questionId}`}
                    className={`p-5 rounded-xl border transition-all ${
                      detail.isCorrect
                        ? 'border-emerald-200 bg-emerald-50/20'
                        : detail.isAttempted
                        ? 'border-rose-200 bg-rose-50/20'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs px-2.5 py-0.5 rounded bg-slate-900 text-white">
                          Case {detail.caseNumber} • Q{detail.questionNumber}
                        </span>
                        <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {detail.accountingStandard}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {detail.isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-100 px-2.5 py-0.5 rounded-full">
                            <Check className="w-3.5 h-3.5" /> Correct (+{detail.marksPossible} Marks)
                          </span>
                        ) : detail.isAttempted ? (
                          <span className="inline-flex items-center gap-1 text-rose-700 font-semibold bg-rose-100 px-2.5 py-0.5 rounded-full">
                            <XCircle className="w-3.5 h-3.5" /> Incorrect (0 Marks)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-amber-700 font-semibold bg-amber-100 px-2.5 py-0.5 rounded-full">
                            <AlertTriangle className="w-3.5 h-3.5" /> Unattempted
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-slate-900 mb-3">
                      {detail.questionText}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-4">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-500 font-medium">Your Answer: </span>
                        <span className={`font-bold ${detail.isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {detail.userAnswerKey ? `Option (${detail.userAnswerKey.toUpperCase()})` : 'None'}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                        <span className="text-emerald-800 font-medium">ICAI Correct Answer: </span>
                        <span className="font-bold text-emerald-900">
                          Option ({detail.correctKey.toUpperCase()})
                        </span>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-4 text-xs">
                      <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        Official Explanation & Calculation:
                      </div>
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed font-mono text-[11px] sm:text-xs">
                        {detail.reasoning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Modular 50/50 Split Layout */
          <ExamSplitLayout
            cases={paper.cases}
            activeCaseIndex={selectedCaseIndex}
            activeQuestionIndex={selectedQuestionIndex}
            onSelectCase={handleSelectCase}
            onSelectQuestion={handleSelectQuestion}
            userAnswers={userAnswers}
            onSelectAnswer={handleSelectOption}
            flaggedQuestions={flaggedQuestions}
            onToggleFlag={handleToggleFlag}
            mode={mode}
            showHints={showHints}
            onToggleHint={handleToggleHint}
            onSubmitExam={handleSubmitExam}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-3 px-4 sm:px-6 text-center text-xs text-slate-500">
        The Institute of Chartered Accountants of India • Board of Studies (Academic) • Advanced Accounting Case Booklet Repository
      </footer>

      {/* Global Searchable Case Selector Modal */}
      <CaseSelector
        cases={paper.cases}
        activeCaseIndex={selectedCaseIndex}
        onSelectCase={handleSelectCase}
        userAnswers={userAnswers}
        isOpen={isCaseSelectorOpen}
        onClose={() => setIsCaseSelectorOpen(false)}
      />
    </div>
  );
}
