import React from 'react';
import {
  Maximize2,
  Minimize2,
  Grid,
  BookOpen,
  FileText,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Tv,
  Monitor,
  FileDown
} from 'lucide-react';

export type ViewMode = 'deck' | 'scroll' | 'presenter' | 'handout';

interface HeaderNavProps {
  currentSlide: number;
  totalSlides: number;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onOpenGrid: () => void;
  onExportPdf: () => void;
  notesOpen: boolean;
  onToggleNotes: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onSelectCategorySlide: (slideId: number) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentSlide,
  totalSlides,
  viewMode,
  onChangeViewMode,
  onPrevSlide,
  onNextSlide,
  onOpenGrid,
  onExportPdf,
  notesOpen,
  onToggleNotes,
  isFullscreen,
  onToggleFullscreen,
  onSelectCategorySlide
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 px-4 sm:px-6 py-2.5 flex items-center justify-between no-print">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onSelectCategorySlide(1)}
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span>CineMetrics AI</span>
        </button>
      </div>

      {/* Zone 2: Navigation Links */}
      <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-neutral-400">
        <button
          onClick={() => onSelectCategorySlide(2)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          Rating Systems
        </button>
        <button
          onClick={() => onSelectCategorySlide(3)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          2–3h Release
        </button>
        <button
          onClick={() => onSelectCategorySlide(5)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          Top 250 Math
        </button>
        <button
          onClick={() => onSelectCategorySlide(6)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          STARmeter
        </button>
        <button
          onClick={() => onSelectCategorySlide(7)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          NLP Lexicon
        </button>
        <button
          onClick={() => onSelectCategorySlide(10)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          AI Pipeline
        </button>
      </nav>

      {/* Zone 3: Mode Segmented Switcher & Primary Deck Controls */}
      <div className="flex items-center gap-2">
        {/* Segmented View Mode Switcher */}
        <div className="flex items-center p-1 bg-neutral-900 rounded-lg border border-neutral-800 text-xs">
          <button
            onClick={() => onChangeViewMode('deck')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
              viewMode === 'deck'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Slide Deck</span>
          </button>

          <button
            onClick={() => onChangeViewMode('scroll')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
              viewMode === 'scroll'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Detailed View</span>
          </button>

          <button
            onClick={() => onChangeViewMode('presenter')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
              viewMode === 'presenter'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Presenter Console</span>
          </button>

          <button
            onClick={() => onChangeViewMode('handout')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
              viewMode === 'handout'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Handout</span>
          </button>
        </div>

        {/* Export PDF Button */}
        <button
          onClick={onExportPdf}
          title="Export Slide Deck to PDF via PrintHandoutView styles"
          aria-label="Export Entire Deck as PDF"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold rounded-lg transition-colors shadow-sm"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Export PDF</span>
        </button>

        {/* Slide Counter & Arrows */}
        <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-1 text-xs text-neutral-300">
          <button
            onClick={onPrevSlide}
            disabled={currentSlide === 1}
            aria-label="Previous Slide"
            className="p-1 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-500 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-2 font-mono text-[11px] tabular-nums text-amber-400">
            {String(currentSlide).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
          </span>
          <button
            onClick={onNextSlide}
            disabled={currentSlide === totalSlides}
            aria-label="Next Slide"
            className="p-1 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-500 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Overview Grid Button */}
        <button
          onClick={onOpenGrid}
          title="Slide Overview Grid (G)"
          aria-label="Open Slide Grid"
          className="p-2 text-neutral-300 hover:text-amber-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          title="Toggle Fullscreen (F)"
          aria-label="Toggle Fullscreen"
          className="p-2 text-neutral-300 hover:text-amber-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors hidden sm:block"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};

