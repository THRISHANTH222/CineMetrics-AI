import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { HeaderNav, ViewMode } from './components/HeaderNav';
import { SlideDeckView } from './components/SlideDeckView';
import { SlideViewer } from './components/SlideViewer';
import { PresenterConsoleView } from './components/PresenterConsoleView';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { SlideGridModal } from './components/SlideGridModal';
import { PrintHandoutView } from './components/PrintHandoutView';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

export default function App() {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>('deck');
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [autoTriggerPrint, setAutoTriggerPrint] = useState<boolean>(false);

  const totalSlides = SLIDES_DATA.length;
  const currentSlide = SLIDES_DATA.find((s) => s.id === currentSlideId) || SLIDES_DATA[0];

  const handleNextSlide = useCallback(() => {
    setCurrentSlideId((prev) => Math.min(totalSlides, prev + 1));
  }, [totalSlides]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlideId((prev) => Math.max(1, prev - 1));
  }, []);

  const handleSelectSlide = useCallback((id: number) => {
    setCurrentSlideId(id);
    if (viewMode === 'handout') {
      setViewMode('deck');
    }
  }, [viewMode]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  // Export entire slide deck to PDF utilizing PrintHandoutView print styles
  const handleExportPdf = useCallback(() => {
    if (viewMode !== 'handout') {
      setAutoTriggerPrint(true);
      setViewMode('handout');
    } else {
      window.print();
    }
  }, [viewMode]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input/textarea
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setIsGridOpen((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setViewMode('deck');
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setViewMode((prev) => (prev === 'handout' ? 'deck' : 'handout'));
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        handleExportPdf();
      } else if (e.key === 'Escape') {
        setIsGridOpen(false);
        setIsNotesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, toggleFullscreen, handleExportPdf]);

  // Track fullscreen changes from browser escape
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Slide Progress Bar */}
      {viewMode !== 'handout' && (
        <div className="w-full h-1 bg-neutral-900 sticky top-0 z-50 overflow-hidden no-print">
          <div
            className="h-full bg-amber-400 transition-all duration-300 ease-out"
            style={{ width: `${(currentSlideId / totalSlides) * 100}%` }}
          />
        </div>
      )}

      {/* Top Bar Navigation */}
      <HeaderNav
        currentSlide={currentSlideId}
        totalSlides={totalSlides}
        viewMode={viewMode}
        onChangeViewMode={(mode) => setViewMode(mode)}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onOpenGrid={() => setIsGridOpen(true)}
        onExportPdf={handleExportPdf}
        notesOpen={isNotesOpen}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onSelectCategorySlide={handleSelectSlide}
      />

      {/* Main View Area based on ViewMode */}
      <main className="flex-1 pb-16">
        {viewMode === 'deck' && (
          <SlideDeckView
            slides={SLIDES_DATA}
            currentSlideId={currentSlideId}
            onSelectSlide={handleSelectSlide}
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
            onExportPdf={handleExportPdf}
          />
        )}

        {viewMode === 'scroll' && (
          <SlideViewer
            slide={currentSlide}
            onOpenNotes={() => setIsNotesOpen(true)}
            onNextSlide={handleNextSlide}
            onPrevSlide={handlePrevSlide}
          />
        )}

        {viewMode === 'presenter' && (
          <PresenterConsoleView
            slides={SLIDES_DATA}
            currentSlideId={currentSlideId}
            onSelectSlide={handleSelectSlide}
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
            onExitPresenter={() => setViewMode('deck')}
            onExportPdf={handleExportPdf}
          />
        )}

        {viewMode === 'handout' && (
          <PrintHandoutView
            onBackToPresentation={() => {
              setAutoTriggerPrint(false);
              setViewMode('deck');
            }}
            autoTriggerPrint={autoTriggerPrint}
          />
        )}
      </main>

      {/* Bottom Floating Scrubber Dock (Visible in scroll & deck modes) */}
      {(viewMode === 'deck' || viewMode === 'scroll') && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 no-print flex items-center gap-2 px-3 py-2 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-full shadow-2xl">
          <button
            onClick={handlePrevSlide}
            disabled={currentSlideId === 1}
            aria-label="Previous Slide"
            className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Quick Slide Numbers Scrubber */}
          <div className="flex items-center gap-1 px-1">
            {SLIDES_DATA.map((s) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideId(s.id)}
                title={`Slide ${s.id}: ${s.title}`}
                className={`transition-all rounded-full ${
                  s.id === currentSlideId
                    ? 'w-6 h-2 bg-amber-400'
                    : 'w-2 h-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNextSlide}
            disabled={currentSlideId === totalSlides}
            aria-label="Next Slide"
            className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="w-px h-4 bg-neutral-800 mx-1 hidden sm:block" />

          {/* Keyboard Helper Badge */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono pr-1">
            <Keyboard className="w-3 h-3 text-neutral-500" />
            <span>Space / Arrows · E to Export PDF</span>
          </div>
        </div>
      )}

      {/* Speaker Notes Drawer Modal/Sidebar */}
      <SpeakerNotesDrawer
        slide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />

      {/* Slide Grid Modal */}
      <SlideGridModal
        slides={SLIDES_DATA}
        currentSlide={currentSlideId}
        isOpen={isGridOpen}
        onSelectSlide={handleSelectSlide}
        onClose={() => setIsGridOpen(false)}
        onExportPdf={handleExportPdf}
      />
    </div>
  );
}
