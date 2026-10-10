import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Filter,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CaseScenario } from '../../data/types';

export interface CaseSelectorProps {
  cases: CaseScenario[];
  activeCaseIndex: number;
  onSelectCase: (caseIndex: number) => void;
  userAnswers: Record<string, string>;
  isOpen: boolean;
  onClose: () => void;
}

type StandardGroup = 'all' | 'as1-10' | 'as11-20' | 'as21-29' | 'company-accounts';

export function getCaseCategory(c: CaseScenario): 'as1-10' | 'as11-20' | 'as21-29' | 'company-accounts' {
  const allText = `${c.title} ${c.applicableStandards.join(' ')}`.toLowerCase();

  // Company Accounts & statutory provisions
  if (
    allText.includes('section 68') ||
    allText.includes('companies act') ||
    allText.includes('buy-back') ||
    allText.includes('buyback') ||
    allText.includes('crr') ||
    allText.includes('schedule iii') ||
    allText.includes('internal reconstruction') ||
    allText.includes('esop') ||
    allText.includes('preference redemption')
  ) {
    return 'company-accounts';
  }

  // Check standard numbers
  const stdMatch = allText.match(/as\s*(\d+)/g);
  if (stdMatch) {
    const nums = stdMatch
      .map((m) => parseInt(m.replace(/\D/g, ''), 10))
      .filter((n) => !isNaN(n));
    if (nums.some((n) => n >= 1 && n <= 10)) {
      return 'as1-10';
    }
    if (nums.some((n) => n >= 11 && n <= 20)) {
      return 'as11-20';
    }
    if (nums.some((n) => n >= 21 && n <= 29)) {
      return 'as21-29';
    }
  }

  // Fallback check by case number ranges
  if (c.caseNumber <= 10) return 'as1-10';
  if (c.caseNumber <= 20) return 'as11-20';
  if (c.caseNumber <= 30) return 'as21-29';
  return 'company-accounts';
}

export const CaseSelector: React.FC<CaseSelectorProps> = ({
  cases,
  activeCaseIndex,
  onSelectCase,
  userAnswers,
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<StandardGroup>('all');

  // Compute case stats
  const casesWithStats = useMemo(() => {
    return cases.map((c, index) => {
      const totalQ = c.questions.length;
      const answeredQ = c.questions.filter((q) => Boolean(userAnswers[q.id])).length;
      const isComplete = totalQ > 0 && answeredQ === totalQ;
      const isPartial = answeredQ > 0 && answeredQ < totalQ;
      const category = getCaseCategory(c);
      const standardsText =
        c.applicableStandards.length > 0
          ? c.applicableStandards.join(', ')
          : 'AS Core';

      return {
        ...c,
        originalIndex: index,
        totalQ,
        answeredQ,
        isComplete,
        isPartial,
        category,
        standardsText,
      };
    });
  }, [cases, userAnswers]);

  // Filter cases based on search & category
  const filteredCases = useMemo(() => {
    return casesWithStats.filter((c) => {
      // Group filter
      if (selectedGroup !== 'all' && c.category !== selectedGroup) {
        return false;
      }

      // Search filter
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      const matchNum = `case ${c.caseNumber}`.includes(query) || `${c.caseNumber}` === query;
      const matchTitle = c.title.toLowerCase().includes(query);
      const matchStd = c.standardsText.toLowerCase().includes(query);
      return matchNum || matchTitle || matchStd;
    });
  }, [casesWithStats, selectedGroup, searchQuery]);

  // Calculate totals
  const totalAnsweredCases = useMemo(
    () => casesWithStats.filter((c) => c.isComplete).length,
    [casesWithStats]
  );

  if (!isOpen) return null;

  return (
    <div
      id="case-selector-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Case Scenario Repository
                </span>
                <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                  56 Scenarios
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Select an ICAI Case Scenario
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span>Completed:</span>
              <span className="font-bold text-emerald-400">
                {totalAnsweredCases} / {cases.length} Cases
              </span>
            </div>
            <button
              id="close-case-selector-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Standard Filter Toolbar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 space-y-3">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="case-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by case number, company name, standard (e.g., AS 19, Buy-Back, AS 26)..."
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-xs"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Group Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            <span className="text-slate-400 text-[11px] mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Group:
            </span>
            <button
              id="filter-group-all"
              onClick={() => setSelectedGroup('all')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Cases ({cases.length})
            </button>
            <button
              id="filter-group-as1-10"
              onClick={() => setSelectedGroup('as1-10')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'as1-10'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              AS 1 – 10
            </button>
            <button
              id="filter-group-as11-20"
              onClick={() => setSelectedGroup('as11-20')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'as11-20'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              AS 11 – 20
            </button>
            <button
              id="filter-group-as21-29"
              onClick={() => setSelectedGroup('as21-29')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'as21-29'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              AS 21 – 29
            </button>
            <button
              id="filter-group-company"
              onClick={() => setSelectedGroup('company-accounts')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'company-accounts'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              Company Accounts & Buy-Back
            </button>
          </div>
        </div>

        {/* Case List Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100">
          {filteredCases.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Layers className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="font-semibold text-sm">No case scenarios match your query.</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Try searching with another keyword or resetting standard filters.
              </p>
            </div>
          ) : (
            filteredCases.map((c) => {
              const isCurrent = activeCaseIndex === c.originalIndex;

              // Completion badge style
              let badgeColor = 'bg-slate-100 text-slate-600 border-slate-200';
              if (c.isComplete) {
                badgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold';
              } else if (c.isPartial) {
                badgeColor = 'bg-blue-50 text-blue-700 border-blue-200 font-medium';
              }

              return (
                <div
                  key={c.id}
                  id={`case-item-${c.caseNumber}`}
                  onClick={() => {
                    onSelectCase(c.originalIndex);
                    onClose();
                  }}
                  className={`py-3.5 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isCurrent
                      ? 'bg-amber-50/80 border border-amber-300/80 shadow-xs'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start space-x-3.5 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isCurrent
                          ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                          : c.isComplete
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {c.isComplete ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      ) : (
                        `C${c.caseNumber}`
                      )}
                    </div>

                    <div className="min-w-0">
                      {/* Formatted: Case [X]: [Title] (AS XX) — [N] Questions */}
                      <div className="text-sm font-bold text-slate-900 leading-snug flex flex-wrap items-center gap-1.5">
                        <span className="text-slate-900">
                          Case {c.caseNumber}: {c.title}
                        </span>
                        <span className="text-amber-700 font-semibold text-xs bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 shrink-0">
                          ({c.standardsText})
                        </span>
                        <span className="text-slate-400 font-normal text-xs shrink-0">
                          — {c.totalQ} {c.totalQ === 1 ? 'Question' : 'Questions'}
                        </span>
                      </div>

                      <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-2">
                        <span>Applicable: {c.standardsText}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side: Completion Status Badge */}
                  <div className="flex items-center space-x-3 shrink-0">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border whitespace-nowrap ${badgeColor}`}
                    >
                      {c.answeredQ}/{c.totalQ} Answered
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 hidden sm:inline" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing {filteredCases.length} of {cases.length} Case Scenarios
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
