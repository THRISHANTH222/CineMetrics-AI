import React, { useState, useEffect } from 'react';
import { SlideData } from '../types/presentation';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Layers,
  ArrowRight,
  FileDown
} from 'lucide-react';

interface PresenterConsoleViewProps {
  slides: SlideData[];
  currentSlideId: number;
  onSelectSlide: (id: number) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onExitPresenter: () => void;
  onExportPdf?: () => void;
}

export const PresenterConsoleView: React.FC<PresenterConsoleViewProps> = ({
  slides,
  currentSlideId,
  onSelectSlide,
  onPrevSlide,
  onNextSlide,
  onExitPresenter,
  onExportPdf
}) => {
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(true);

  const currentSlide = slides.find((s) => s.id === currentSlideId) || slides[0];
  const nextSlide = slides.find((s) => s.id === currentSlideId + 1) || null;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 space-y-5">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between p-3.5 bg-neutral-900 border border-neutral-800 rounded-xl">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Presenter Dual Console
          </h2>
          <span className="text-xs text-neutral-400 font-mono">
            Slide {currentSlide.id} of {slides.length}
          </span>
        </div>

        {/* Stopwatch Timer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-400 font-bold text-sm tabular-nums">
              {formatTimer(timerSeconds)}
            </span>
            <button
              onClick={() => setTimerRunning((p) => !p)}
              className="text-neutral-400 hover:text-white ml-1"
            >
              {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => {
                setTimerRunning(false);
                setTimerSeconds(0);
              }}
              className="text-neutral-400 hover:text-white"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {onExportPdf && (
            <button
              onClick={onExportPdf}
              title="Export Slide Deck to PDF"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold rounded-lg transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Export PDF</span>
            </button>
          )}

          <button
            onClick={onExitPresenter}
            className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 rounded-lg transition-colors"
          >
            Exit Console
          </button>
        </div>
      </div>

      {/* Dual Screens: Current Slide vs Next Slide Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Active Current Slide Screen */}
        <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-5 space-y-4">
          <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-800 pb-2">
            <span className="font-mono text-amber-400 font-bold">
              CURRENT SLIDE (AUDIENCE VIEW)
            </span>
            <span className="font-mono">{currentSlide.category}</span>
          </div>

          <div>
            <span className="text-[11px] font-mono text-neutral-400 block mb-1">
              {currentSlide.kicker}
            </span>
            <h3 className="text-xl font-bold text-white">
              {currentSlide.title}
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Core Takeaway */}
          <div className="p-3 bg-amber-500/10 border-l-2 border-amber-400 rounded-r-lg text-xs text-neutral-200">
            <strong className="text-amber-400">Key Takeaway:</strong> {currentSlide.keyTakeaway}
          </div>

          {/* Bullet points recap */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {currentSlide.bulletPoints.map((bp, i) => (
              <div key={i} className="p-2.5 bg-neutral-900/60 rounded border border-neutral-800/80">
                <div className="font-semibold text-white text-[11px] mb-0.5">{bp.heading}</div>
                <div className="text-neutral-400 text-[10px] leading-relaxed line-clamp-2">{bp.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Next Slide Preview + Quick Navigation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 space-y-2">
            <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-800 pb-2">
              <span className="font-mono text-sky-400 font-bold">NEXT UP</span>
              <span className="font-mono">
                {nextSlide ? `Slide ${nextSlide.id}` : 'End of Deck'}
              </span>
            </div>

            {nextSlide ? (
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800 space-y-1">
                <div className="text-[10px] font-mono text-neutral-400">{nextSlide.kicker}</div>
                <h4 className="text-sm font-bold text-white line-clamp-1">{nextSlide.title}</h4>
                <p className="text-xs text-neutral-400 line-clamp-2">{nextSlide.subtitle}</p>
                <div className="text-[10px] text-amber-400 pt-1 font-mono">
                  Takeaway: {nextSlide.keyTakeaway}
                </div>
              </div>
            ) : (
              <div className="p-4 text-center text-xs text-neutral-500 font-mono">
                You have reached the final slide of the deck.
              </div>
            )}
          </div>

          {/* Quick Nav Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevSlide}
              disabled={currentSlide.id === 1}
              className="flex-1 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-xs font-semibold text-white disabled:opacity-30 transition-colors flex items-center justify-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Slide</span>
            </button>
            <button
              onClick={onNextSlide}
              disabled={currentSlide.id === slides.length}
              className="flex-1 py-2.5 bg-amber-400 hover:bg-amber-300 rounded-xl text-xs font-bold text-neutral-950 disabled:opacity-30 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Next Slide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Big Readable Speaker Script for the Presenter */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 border-b border-neutral-800 pb-2">
          <BookOpen className="w-4 h-4" />
          <span>Lecture Script (Read aloud in class):</span>
        </div>
        <p className="text-sm sm:text-base text-neutral-100 leading-relaxed font-serif bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/80">
          "{currentSlide.speakerNotes.presentationScript}"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="p-3 bg-sky-950/20 border border-sky-500/20 rounded-xl space-y-1">
            <div className="text-sky-400 font-semibold flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              Classroom Tip:
            </div>
            <p className="text-neutral-300 text-[11px] leading-relaxed">
              {currentSlide.speakerNotes.classroomTip}
            </p>
          </div>

          <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-1">
            <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Student Q&A:
            </div>
            <p className="text-neutral-300 text-[11px] leading-relaxed">
              <strong>Q:</strong> "{currentSlide.speakerNotes.commonStudentQuestion}"<br />
              <strong className="text-emerald-400">A:</strong> {currentSlide.speakerNotes.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
