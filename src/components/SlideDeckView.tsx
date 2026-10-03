import React, { useState, useEffect, useRef } from 'react';
import { SlideData } from '../types/presentation';
import { CinemaReelVisual } from './diagrams/CinemaReelVisual';
import { BayesianCalculator } from './diagrams/BayesianCalculator';
import { ReleaseTimelineVisual } from './diagrams/ReleaseTimelineVisual';
import { AudienceSamplingVisual } from './diagrams/AudienceSamplingVisual';
import { StarmeterComparison } from './diagrams/StarmeterComparison';
import { NlpVennHierarchy } from './diagrams/NlpVennHierarchy';
import { ClassicalVsTransformerVisual } from './diagrams/ClassicalVsTransformerVisual';
import { AiPipelineSimulator } from './diagrams/AiPipelineSimulator';
import { ImdbVsAiMatrix } from './diagrams/ImdbVsAiMatrix';
import { CITATIONS } from '../data/slidesData';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  BookOpen,
  HelpCircle,
  ShieldAlert,
  CheckCircle2,
  ExternalLink,
  Layers,
  Clock,
  Crosshair,
  Presentation,
  Download,
  Share2,
  FileDown
} from 'lucide-react';

interface SlideDeckViewProps {
  slides: SlideData[];
  currentSlideId: number;
  onSelectSlide: (id: number) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onExportPdf?: () => void;
}

export const SlideDeckView: React.FC<SlideDeckViewProps> = ({
  slides,
  currentSlideId,
  onSelectSlide,
  onPrevSlide,
  onNextSlide,
  onExportPdf
}) => {
  const [showThumbnails, setShowThumbnails] = useState<boolean>(true);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [laserActive, setLaserActive] = useState<boolean>(false);
  const [laserPos, setLaserPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const slideRef = useRef<HTMLDivElement>(null);
  const currentSlide = slides.find((s) => s.id === currentSlideId) || slides[0];

  // Presentation stopwatch timer
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

  // Auto-play slideshow (every 20s)
  useEffect(() => {
    let autoInterval: NodeJS.Timeout | null = null;
    if (isAutoPlaying) {
      autoInterval = setInterval(() => {
        onNextSlide();
      }, 20000);
    }
    return () => {
      if (autoInterval) clearInterval(autoInterval);
    };
  }, [isAutoPlaying, onNextSlide]);

  // Laser pointer mouse tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!laserActive || !slideRef.current) return;
    const rect = slideRef.current.getBoundingClientRect();
    setLaserPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Render slide-specific visual diagram / tool
  const renderDiagram = () => {
    switch (currentSlide.componentType) {
      case 'title':
        return <CinemaReelVisual />;
      case 'general_ratings':
        return (
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 md:p-5 text-neutral-200">
            <h4 className="text-sm font-semibold text-white mb-1">
              Rating Engine Comparison & Arithmetic Mean Vulnerability
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs mb-3">
              <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                <div className="text-sky-400 font-semibold mb-0.5">Binary (Netflix)</div>
                <div className="text-[11px] text-neutral-400">Thumbs up/down. Personal recommendation optimization.</div>
              </div>
              <div className="p-2.5 bg-neutral-950 rounded-lg border border-amber-500/40">
                <div className="text-amber-400 font-semibold mb-0.5">Likert 1–10 (IMDb)</div>
                <div className="text-[11px] text-neutral-400">Granular public quality consensus across wide voter cohorts.</div>
              </div>
              <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                <div className="text-emerald-400 font-semibold mb-0.5">Dual Aggregator</div>
                <div className="text-[11px] text-neutral-400">Rotten Tomatoes / Metacritic. Normalizes professional critic thresholds.</div>
              </div>
            </div>

            <div className="p-3 bg-neutral-950 rounded-lg border border-rose-500/20 space-y-2">
              <div className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                Live Attack Simulation: 500 Genuine 9★ Votes vs 500 Bot 1★ Votes
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800">
                  <div className="text-neutral-400 text-[10px]">Raw Arithmetic Average:</div>
                  <div className="text-xl font-bold font-mono text-rose-400">5.0 ★</div>
                  <div className="text-[10px] text-neutral-500">Unweighted mean crashed in half.</div>
                </div>
                <div className="p-2.5 bg-neutral-900 rounded border border-amber-500/40">
                  <div className="text-neutral-400 text-[10px]">IMDb Weighted Average:</div>
                  <div className="text-xl font-bold font-mono text-amber-400">8.4 ★</div>
                  <div className="text-[10px] text-neutral-500">Bot velocity filtered; regular voters count.</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'fast_release':
        return <ReleaseTimelineVisual />;
      case 'data_sampling':
        return <AudienceSamplingVisual />;
      case 'bayesian_math':
        return <BayesianCalculator />;
      case 'starmeter':
        return <StarmeterComparison />;
      case 'nlp_lexicon':
        return <NlpVennHierarchy />;
      case 'classical_ml':
        return <ClassicalVsTransformerVisual />;
      case 'transformers':
        return <ClassicalVsTransformerVisual />;
      case 'ai_pipeline':
        return <AiPipelineSimulator />;
      case 'reality_vs_ai':
        return <ImdbVsAiMatrix />;
      case 'challenges':
        return (
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 md:p-5 text-neutral-200 space-y-3">
            <h4 className="text-sm font-semibold text-white">
              Real-World Linguistic Obstacles in Film Review AI
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                <div className="text-amber-400 font-semibold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" /> Sarcasm & Counter-Factual Praise
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  "Truly an intellectual tour de force if your passion is watching white paint dry." Models without deep bidirectional context anchor on "tour de force" and misclassify as positive.
                </p>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                <div className="text-sky-400 font-semibold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" /> Genre-Dependent Movie Slang
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  "The creature design is sickening and unhinged!" In the horror genre, this represents peak audience admiration. In a period romance, the exact same words mean failure.
                </p>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                <div className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" /> Generative LLM Astroturfing
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Bad actors can prompt LLMs to write 20,000 uniquely structured positive reviews, defeating simple duplicate-text and TF-IDF bot detectors.
                </p>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Multi-Modal Defense Solution
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Combining text perplexity analysis with user account longevity and ticket verification stamps.
                </p>
              </div>
            </div>
          </div>
        );
      case 'conclusions':
        return (
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 md:p-5 text-neutral-200">
            <h4 className="text-sm font-semibold text-white mb-2.5">
              Executive Research Synthesis: The 4 Core Questions Answered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                <span className="text-[10px] font-mono text-amber-400">ANSWER 1 · 2–3H TIMING</span>
                <h5 className="font-bold text-white">Global Geography & Thresholds</h5>
                <p className="text-neutral-400 text-[11px]">
                  Asia-Pacific screens 16h early; midnight preview crowds log instant votes. Scores are withheld until sample thresholds are met.
                </p>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                <span className="text-[10px] font-mono text-sky-400">ANSWER 2 · SAMPLING LOGIC</span>
                <h5 className="font-bold text-white">Vote-Only Weighted Math</h5>
                <p className="text-neutral-400 text-[11px]">
                  Direct voluntary 1–10 star votes. Written reviews and Metascores are excluded from title score calculation.
                </p>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                <span className="text-[10px] font-mono text-emerald-400">ANSWER 3 · STARMETER RANK</span>
                <h5 className="font-bold text-white">Search Buzz, Not Acting Quality</h5>
                <p className="text-neutral-400 text-[11px]">
                  "Top 1" actor means highest weekly search traffic across 200M visitors. No language model evaluates acting skill for STARmeter.
                </p>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                <span className="text-[10px] font-mono text-amber-400">ANSWER 4 · AI IMPLEMENTATION</span>
                <h5 className="font-bold text-white">Transparent RoBERTa Pipeline</h5>
                <p className="text-neutral-400 text-[11px]">
                  An AI system uses Aspect-Based Opinion Mining to synthesize explainable 1–10 ratings from review text.
                </p>
              </div>
            </div>
          </div>
        );
      case 'references':
        return (
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 md:p-5 text-neutral-200 space-y-2.5">
            <h4 className="text-sm font-semibold text-white">
              Primary Academic Papers & Verified IMDb Documentation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs max-h-[300px] overflow-y-auto pr-1">
              {CITATIONS.map((c, i) => (
                <div key={i} className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                  <div className="font-semibold text-white line-clamp-1">{c.title}</div>
                  <div className="text-[11px] text-amber-400 font-mono">{c.source} ({c.year})</div>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'interactive_lab':
        return (
          <div className="space-y-4">
            <BayesianCalculator />
            <AiPipelineSimulator />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col lg:flex-row gap-4 p-3 sm:p-5 max-w-[1720px] mx-auto">
      {/* Left: Keynote / PowerPoint Slide Filmstrip Sidebar */}
      {showThumbnails && (
        <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-neutral-950/80 border border-neutral-800 rounded-2xl p-3 flex flex-col max-h-[82vh] overflow-hidden no-print">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-neutral-800 px-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Slide Deck ({slides.length})</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-400">16:9 Deck</span>
          </div>

          {/* Thumbnail items list */}
          <div className="overflow-y-auto space-y-2 pr-1 flex-1">
            {slides.map((s) => {
              const isActive = s.id === currentSlideId;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectSlide(s.id)}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all relative ${
                    isActive
                      ? 'border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400'
                      : 'border-neutral-800/80 bg-neutral-900/60 hover:bg-neutral-900 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 mb-1">
                    <span className="font-mono text-amber-400 font-bold">
                      {String(s.id).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-neutral-400 truncate max-w-[120px]">
                      {s.category}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-white truncate">
                    {s.title}
                  </div>
                  <div className="text-[10px] text-neutral-400 truncate mt-0.5">
                    {s.kicker}
                  </div>
                </button>
              );
            })}
          </div>
        </aside>
      )}

      {/* Center: True 16:9 Presentation Stage */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Stage Toolbar (Presenter Controls) */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 px-1 text-xs text-neutral-400 no-print">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowThumbnails((prev) => !prev)}
              className="px-2.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showThumbnails ? 'Hide Filmstrip' : 'Show Filmstrip'}</span>
            </button>

            {/* Laser Pointer Toggle */}
            <button
              onClick={() => setLaserActive((prev) => !prev)}
              className={`px-2.5 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
                laserActive
                  ? 'bg-rose-500 text-white border-rose-400 font-semibold'
                  : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-neutral-300'
              }`}
            >
              <Crosshair className="w-3.5 h-3.5" />
              <span>Laser Pointer</span>
            </button>

            {/* Speaker Notes Toggle */}
            <button
              onClick={() => setShowNotes((prev) => !prev)}
              className={`px-2.5 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
                showNotes
                  ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold'
                  : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-neutral-300'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Speaker Notes</span>
            </button>

            {/* Export Slide Deck as PDF Button */}
            {onExportPdf && (
              <button
                onClick={onExportPdf}
                title="Export Entire 15-Slide Deck as PDF Handout"
                className="px-2.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 border border-amber-400 text-neutral-950 font-bold transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Export PDF</span>
              </button>
            )}
          </div>

          {/* Presenter Lecture Stopwatch */}
          <div className="flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 rounded-lg px-2.5 py-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-white tabular-nums font-medium">
              {formatTimer(timerSeconds)}
            </span>
            <button
              onClick={() => setTimerRunning((prev) => !prev)}
              title={timerRunning ? 'Pause Stopwatch' : 'Start Lecture Stopwatch'}
              className="text-neutral-400 hover:text-white p-0.5"
            >
              {timerRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => {
                setTimerRunning(false);
                setTimerSeconds(0);
              }}
              title="Reset Stopwatch"
              className="text-neutral-400 hover:text-white p-0.5"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 16:9 Framed Presentation Canvas */}
        <div
          ref={slideRef}
          onMouseMove={handleMouseMove}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-br from-neutral-950 via-[#0d0d12] to-black rounded-2xl border border-neutral-800/90 shadow-2xl p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-y-auto overflow-x-hidden select-none"
        >
          {/* Virtual Laser Pointer Dot */}
          {laserActive && (
            <div
              className="pointer-events-none absolute z-50 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500 shadow-[0_0_15px_6px_rgba(244,63,94,0.9)] animate-pulse"
              style={{ left: laserPos.x, top: laserPos.y }}
            />
          )}

          {/* Slide Header: Kicker, Category, Slide Number */}
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-amber-400 font-bold font-mono tracking-wider">
                CINEMETRICS AI RESEARCH
              </span>
              <span className="text-neutral-500">/</span>
              <span className="text-neutral-300 font-medium">{currentSlide.category}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-500 font-mono text-[11px]">{currentSlide.kicker}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-amber-400 font-bold tabular-nums">
                SLIDE {String(currentSlide.id).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Slide Body: Title, Subtitle, Dynamic Component */}
          <div className="flex-1 space-y-3.5 my-auto">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight text-balance">
                {currentSlide.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed text-balance">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Core Takeaway Ribbon */}
            <div className="p-2.5 sm:p-3 bg-amber-500/10 border-l-2 border-amber-400 rounded-r-lg text-xs text-neutral-200 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                <strong className="text-amber-400">Core Takeaway:</strong> {currentSlide.keyTakeaway}
              </span>
            </div>

            {/* Dynamic Diagram / Simulator Viewport */}
            <div className="w-full py-1">
              {renderDiagram()}
            </div>

            {/* 4 Mini Key Bullet Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
              {currentSlide.bulletPoints.map((bp, i) => (
                <div
                  key={i}
                  className="p-2.5 sm:p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/80 text-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="font-semibold text-white text-[11px] mb-0.5">
                      {bp.heading}
                    </div>
                    <p className="text-neutral-400 text-[10px] leading-relaxed line-clamp-3">
                      {bp.detail}
                    </p>
                  </div>
                  {bp.highlight && (
                    <div className="mt-1.5 pt-1 border-t border-neutral-800 text-[10px] font-mono text-amber-400 font-medium">
                      {bp.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Footer: Presentation Metadata */}
          <div className="flex items-center justify-between border-t border-neutral-800/80 pt-2.5 mt-3 text-[11px] text-neutral-500">
            <div className="flex items-center gap-2 font-mono text-[10px]">
              <span>AI Assignment Presentation</span>
              <span>·</span>
              <span>IMDb Rating Systems & NLP Transformers</span>
            </div>
            <div className="font-mono text-[10px] text-amber-400/80">
              Verified IMDb & Academic Literature Grounding
            </div>
          </div>
        </div>

        {/* Embedded Speaker Notes Dock (When toggled) */}
        {showNotes && (
          <div className="mt-4 p-4 bg-neutral-950 border border-neutral-800 rounded-xl space-y-2.5 text-xs text-neutral-200 no-print animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-2 font-semibold text-white">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Speaker Script for Slide {currentSlide.id}</span>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono">
                Classroom Presentation Notes
              </span>
            </div>
            <p className="text-neutral-300 italic text-[11px] leading-relaxed bg-neutral-900/80 p-3 rounded-lg border border-neutral-800">
              "{currentSlide.speakerNotes.presentationScript}"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 bg-sky-950/20 border border-sky-500/20 rounded-lg">
                <strong className="text-sky-400 block mb-0.5">Teaching Tip:</strong>
                <span className="text-neutral-300">{currentSlide.speakerNotes.classroomTip}</span>
              </div>
              <div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <strong className="text-emerald-400 block mb-0.5">Anticipated Student Q&A:</strong>
                <span className="text-neutral-300">"{currentSlide.speakerNotes.commonStudentQuestion}" — {currentSlide.speakerNotes.answer}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
