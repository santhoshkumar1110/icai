import React, { useState } from 'react';
import {
  BookOpen,
  Bookmark,
  Highlighter,
  Minus,
  Plus,
  Table as TableIcon,
  Search,
  CheckCircle2,
  FileSpreadsheet,
  Building,
  ListFilter,
} from 'lucide-react';
import { CaseScenario } from '../../data/paper1Data';
import { CaseSelector } from './CaseSelector';

export interface CaseScenarioViewerProps {
  cases: CaseScenario[];
  activeCaseIndex: number;
  onSelectCase: (index: number) => void;
  userAnswers?: Record<string, string>;
  className?: string;
}

export const CaseScenarioViewer: React.FC<CaseScenarioViewerProps> = ({
  cases,
  activeCaseIndex,
  onSelectCase,
  userAnswers = {},
  className = '',
}) => {
  const currentCase = cases[activeCaseIndex] || cases[0];
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(1); // 0 = sm, 1 = base, 2 = lg
  const [highlightKeyFigures, setHighlightKeyFigures] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCaseSelectorOpen, setIsCaseSelectorOpen] = useState<boolean>(false);

  // Font size classes
  const fontClasses = [
    'text-xs leading-relaxed',
    'text-sm leading-relaxed',
    'text-base leading-relaxed',
  ];

  // Highlight helper for accounting figures, currency, standards, and dates
  const renderFormattedParagraph = (text: string) => {
    if (!highlightKeyFigures && !searchQuery) {
      return text;
    }

    // Combine search query highlighting with financial key numbers
    let formattedText = text;
    const tokens: React.ReactNode[] = [];

    // Regex for Currency (₹ ..., Rs, USD, $), percentages (..%), Years (Year 1, 1st April 2019), and search query
    const regexPattern = searchQuery.trim()
      ? new RegExp(
          `(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}|₹\\s*[0-9,]+(?:\\.[0-9]+)?|\\d+(?:\\.\\d+)?%|\\b(?:Year\\s+\\d+|1st\\s+[A-Za-z]+,?\\s+\\d{4}|31st\\s+[A-Za-z]+,?\\s+\\d{4}|AS\\s+\\d+|Section\\s+43B)\\b)`,
          'gi'
        )
      : /(₹\s*[0-9,]+(?:\.[0-9]+)?|\d+(?:\.\d+)?%|\b(?:Year\s+\\d+|1st\s+[A-Za-z]+,?\s+\d{4}|31st\s+[A-Za-z]+,?\s+\d{4}|AS\s+\\d+|Section\s+43B)\b)/gi;

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regexPattern.exec(formattedText)) !== null) {
      if (match.index > lastIndex) {
        tokens.push(formattedText.substring(lastIndex, match.index));
      }

      const matchText = match[0];
      const isSearchHit =
        searchQuery.trim() &&
        matchText.toLowerCase() === searchQuery.trim().toLowerCase();

      if (isSearchHit) {
        tokens.push(
          <mark
            key={`${match.index}-search`}
            className="bg-amber-300 text-slate-950 font-bold px-1 rounded"
          >
            {matchText}
          </mark>
        );
      } else if (highlightKeyFigures) {
        tokens.push(
          <span
            key={`${match.index}-key`}
            className="bg-amber-100/90 text-amber-950 font-semibold px-1 py-0.5 rounded border border-amber-200/70"
          >
            {matchText}
          </span>
        );
      } else {
        tokens.push(matchText);
      }

      lastIndex = match.index + matchText.length;
    }

    if (lastIndex < formattedText.length) {
      tokens.push(formattedText.substring(lastIndex));
    }

    return tokens.length > 0 ? tokens : text;
  };

  return (
    <div
      className={`bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden ${className}`}
    >
      {/* Sticky Header: Case Tabs & Reader Comfort Toolbar */}
      <div className="sticky top-0 z-20 bg-slate-900 border-b border-slate-800 text-white px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Case Navigation Tabs & Dropdown */}
          <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5 max-w-full sm:max-w-xl">
            {/* All Cases Directory Button */}
            <button
              id="open-all-cases-selector-btn"
              onClick={() => setIsCaseSelectorOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm cursor-pointer shrink-0 transition-colors"
              title="Search & browse all 56 case scenarios"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Browse All 56</span>
            </button>

            {/* Quick Case Jump Dropdown */}
            <select
              id="case-quick-jump-select"
              value={activeCaseIndex}
              onChange={(e) => onSelectCase(Number(e.target.value))}
              className="bg-slate-800 text-amber-400 font-bold border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-400 cursor-pointer shrink-0"
              title="Jump directly to any case"
            >
              {cases.map((c, idx) => (
                <option key={c.id} value={idx} className="bg-slate-900 text-slate-200">
                  Case {c.caseNumber}: {c.title.slice(0, 32)}...
                </option>
              ))}
            </select>

            {cases.map((c, idx) => {
              const isActive = activeCaseIndex === idx;
              const answeredCount = c.questions.filter((q) => Boolean(userAnswers[q.id])).length;
              const isAllAnswered = answeredCount === c.questions.length;

              return (
                <button
                  key={c.id}
                  id={`case-tab-switcher-${c.caseNumber}`}
                  onClick={() => onSelectCase(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                  }`}
                  title={c.title}
                >
                  <span>Case {c.caseNumber}</span>
                  {isAllAnswered ? (
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        isActive ? 'text-slate-950' : 'text-emerald-400'
                      }`}
                    />
                  ) : (
                    <span
                      className={`text-[10px] px-1 py-0.2 rounded ${
                        isActive
                          ? 'bg-slate-950/20 text-slate-950 font-bold'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {answeredCount}/{c.questions.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Reading Toolbar (Font Size & Highlighting) */}
          <div className="flex items-center gap-2">
            {/* Search filter in case text */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Find in case..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-32 focus:w-44 transition-all pl-7 pr-2 py-1 text-xs rounded-md bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" />
            </div>

            {/* Highlight Toggle */}
            <button
              id="highlight-toggle-btn"
              onClick={() => setHighlightKeyFigures(!highlightKeyFigures)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium border flex items-center gap-1 transition-colors ${
                highlightKeyFigures
                  ? 'bg-amber-400/20 border-amber-400/50 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
              title="Toggle highlighting of financial figures & dates"
            >
              <Highlighter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Highlight</span>
            </button>

            {/* Font Sizer Controls */}
            <div className="flex items-center rounded-md bg-slate-800 border border-slate-700 p-0.5">
              <button
                id="font-size-dec-btn"
                onClick={() => setFontSizeLevel((prev) => Math.max(0, prev - 1))}
                disabled={fontSizeLevel === 0}
                className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                title="Decrease font size"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="px-1.5 text-[11px] font-mono font-semibold text-slate-300">
                {fontSizeLevel === 0 ? 'A-' : fontSizeLevel === 1 ? 'A' : 'A+'}
              </span>
              <button
                id="font-size-inc-btn"
                onClick={() => setFontSizeLevel((prev) => Math.min(2, prev + 1))}
                disabled={fontSizeLevel === 2}
                className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                title="Increase font size"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Header: Badge, Title & Standards */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 bg-slate-900 text-white rounded-md text-xs font-bold uppercase tracking-wider shadow-xs">
              Case Scenario {currentCase.caseNumber}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Building className="w-3.5 h-3.5 text-slate-400" />
              <span>ICAI Paper 1 • Advanced Accounting</span>
            </div>
          </div>

          {/* Standards Chips */}
          <div className="flex flex-wrap gap-1.5">
            {currentCase.applicableStandards.map((std) => (
              <span
                key={std}
                className="text-xs bg-amber-50 text-amber-900 border border-amber-200/90 font-semibold px-2.5 py-0.5 rounded-full shadow-xs"
              >
                {std}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-lg font-bold text-slate-900 mt-2 tracking-tight">
          {currentCase.title}
        </h2>
      </div>

      {/* Scrollable Scenario Body */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {currentCase.scenarioParagraphs.map((paragraph, pIdx) => {
          // Detect headers like "Year 2", "Year 3", "Situation 1:"
          const isHeaderPrefix = /^(Year\s+\d+|Situation\s+\d+:|At\s+beginning\s+of\s+year\s+\d+|On\s+\d+)/i.test(
            paragraph
          );

          return (
            <div
              key={pIdx}
              className={`p-4 rounded-xl border transition-all ${
                isHeaderPrefix
                  ? 'bg-slate-50/90 border-slate-200'
                  : 'bg-white border-slate-100 hover:border-slate-200'
              }`}
            >
              <p
                className={`${fontClasses[fontSizeLevel]} text-slate-800 whitespace-pre-line`}
              >
                {renderFormattedParagraph(paragraph)}
              </p>
            </div>
          );
        })}

        {/* Structured Financial Tables (e.g., Digitex Year 1-5 Amortisation breakdown) */}
        {currentCase.scenarioTables && currentCase.scenarioTables.length > 0 && (
          <div className="mt-6 border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-white">
            <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <FileSpreadsheet className="w-4 h-4 text-slate-600" />
                <span>Financial Data & Amortisation Schedule</span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Booklet Extract
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {currentCase.scenarioTables[0].headers.map((header, hIdx) => (
                      <th
                        key={hIdx}
                        className="px-3.5 py-2.5 text-[11px] font-bold text-slate-700 uppercase tracking-wider whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70">
                  {currentCase.scenarioTables[0].rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-3.5 py-2 text-xs text-slate-800 whitespace-nowrap ${
                            cIdx === 0
                              ? 'font-bold text-slate-900'
                              : 'font-mono text-slate-700'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="pt-2 text-xs text-slate-400 italic text-center">
          — End of Case Scenario {currentCase.caseNumber} Narrative —
        </div>
      </div>

      {/* Searchable Case Selector Modal */}
      <CaseSelector
        cases={cases}
        activeCaseIndex={activeCaseIndex}
        onSelectCase={onSelectCase}
        userAnswers={userAnswers}
        isOpen={isCaseSelectorOpen}
        onClose={() => setIsCaseSelectorOpen(false)}
      />
    </div>
  );
};
