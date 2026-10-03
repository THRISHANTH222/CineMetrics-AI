import React from 'react';
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
import { Sparkles, ShieldAlert, CheckCircle2, ChevronRight, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';

interface SlideViewerProps {
  slide: SlideData;
  onOpenNotes: () => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  onOpenNotes,
  onNextSlide,
  onPrevSlide
}) => {
  // Render slide-specific visual diagram / tool
  const renderDiagram = () => {
    switch (slide.componentType) {
      case 'title':
        return <CinemaReelVisual />;
      case 'general_ratings':
        return (
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
            <h4 className="text-base font-semibold text-white mb-1">
              Rating Engine Comparison & Arithmetic Flaw
            </h4>
            <p className="text-xs text-neutral-400 mb-4">
              Why simple averages break under coordinated attacks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                <div className="text-sky-400 font-semibold mb-1">Binary System</div>
                <div className="text-[11px] text-neutral-400">Netflix Thumbs Up/Down. Optimizes purely for personalized feed curation.</div>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-amber-500/40">
                <div className="text-amber-400 font-semibold mb-1">Likert 1–10 Stars</div>
                <div className="text-[11px] text-neutral-400">IMDb Granular Scale. Quantifies public quality consensus across wide cohorts.</div>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                <div className="text-emerald-400 font-semibold mb-1">Dual Aggregator</div>
                <div className="text-[11px] text-neutral-400">Rotten Tomatoes / Metacritic. Separates binary pass/fail from critic reviews.</div>
              </div>
            </div>

            {/* Arithmetic vs Weighted Attack Simulation */}
            <div className="p-4 bg-neutral-950 rounded-xl border border-rose-500/20 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-rose-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Review Bombing Attack Simulation (500 Authentic 9★ votes vs 500 Bot 1★ votes)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  <div className="text-neutral-400 text-[11px]">Naive Arithmetic Mean:</div>
                  <div className="text-2xl font-bold font-mono text-rose-400 mt-0.5">5.0 ★</div>
                  <div className="text-[10px] text-neutral-500 mt-1">
                    Authentic 9.0 crashed completely in half by bot spam.
                  </div>
                </div>
                <div className="p-3 bg-neutral-900 rounded-lg border border-amber-500/40">
                  <div className="text-neutral-400 text-[11px]">IMDb Weighted Defense Average:</div>
                  <div className="text-2xl font-bold font-mono text-amber-400 mt-0.5">8.4 ★</div>
                  <div className="text-[10px] text-neutral-500 mt-1">
                    Fresh bot accounts discounted; regular voter impact preserved.
                  </div>
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
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200 space-y-4">
            <h4 className="text-base font-semibold text-white">
              Linguistic Obstacles in Real-World Review AI
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
                <div className="text-amber-400 font-semibold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Sarcasm & Counter-Factual Praise
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  "Truly an intellectual tour de force if your passion is watching white paint dry." Models without deep bidirectional context anchor on "tour de force" and misclassify as positive.
                </p>
              </div>
              <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
                <div className="text-sky-400 font-semibold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Context-Dependent Vernacular & Slang
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  "The creature design is sickening and unhinged!" In the horror genre, this represents peak audience admiration. In a period romance, the exact same words mean failure.
                </p>
              </div>
              <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
                <div className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Generative LLM Astroturfing
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Bad actors can prompt LLMs to write 20,000 uniquely structured, nuanced positive reviews, defeating simple duplicate-text and TF-IDF bot detectors.
                </p>
              </div>
              <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
                <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Proposed Countermeasure
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Multi-modal cross-verification: combining text perplexity analysis with user account longevity and verified ticketing receipts.
                </p>
              </div>
            </div>
          </div>
        );
      case 'conclusions':
        return (
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
            <h4 className="text-base font-semibold text-white mb-3">
              Executive Research Synthesis: The 4 Core Questions Answered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400">ANSWER 1 · 2–3H TIMING</span>
                <h5 className="font-bold text-white">Global Geography & Thresholds</h5>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Ratings appear rapidly because Asia-Pacific screens 16h early and midnight crowds log instant votes. Scores stay withheld until sample thresholds are met.
                </p>
              </div>
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-1.5">
                <span className="text-[10px] font-mono text-sky-400">ANSWER 2 · SAMPLING LOGIC</span>
                <h5 className="font-bold text-white">Vote-Only Weighted Math</h5>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  IMDb samples registered 1–10 star votes. Written user reviews and Metascores are excluded from the calculated headline score.
                </p>
              </div>
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-1.5">
                <span className="text-[10px] font-mono text-emerald-400">ANSWER 3 · STARMETER RANK</span>
                <h5 className="font-bold text-white">Search Buzz, Not Acting Quality</h5>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  "Top 1" actor means highest weekly search traffic across 200M visitors. No language model evaluates acting skill for STARmeter.
                </p>
              </div>
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400">ANSWER 4 · AI IMPLEMENTATION</span>
                <h5 className="font-bold text-white">Transparent RoBERTa Pipeline</h5>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  An AI system uses Aspect-Based Opinion Mining to synthesize explainable 1–10 ratings from review text, complementing IMDb's fraud-proof vote numbers.
                </p>
              </div>
            </div>
          </div>
        );
      case 'references':
        return (
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200 space-y-3">
            <h4 className="text-base font-semibold text-white">
              Primary Academic Papers & Verified IMDb Documentation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs max-h-[360px] overflow-y-auto pr-1">
              {CITATIONS.map((c, i) => (
                <div key={i} className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                  <div className="font-semibold text-white line-clamp-1">{c.title}</div>
                  <div className="text-[11px] text-amber-400 font-mono">{c.source} ({c.year})</div>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">{c.note}</p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-sky-400 hover:underline pt-0.5"
                    >
                      <span>Documentation Link</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 'interactive_lab':
        return (
          <div className="space-y-6">
            <BayesianCalculator />
            <AiPipelineSimulator />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Slide Header Zone */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span className="font-mono text-amber-400 font-bold">
            SLIDE {String(slide.id).padStart(2, '0')}
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-neutral-300 font-medium">{slide.category}</span>
          <span aria-hidden="true">·</span>
          <span className="text-neutral-500 font-mono">{slide.kicker}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
          {slide.title}
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 max-w-3xl leading-relaxed text-balance">
          {slide.subtitle}
        </p>
      </div>

      {/* Core Takeaway Banner */}
      <div className="p-3 sm:p-3.5 bg-amber-500/10 border-l-3 border-amber-400 rounded-r-xl flex items-center justify-between gap-3 text-xs sm:text-sm text-neutral-200">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-amber-400">Key Takeaway:</strong> {slide.keyTakeaway}
          </span>
        </div>
        <button
          onClick={onOpenNotes}
          className="shrink-0 text-xs font-semibold text-neutral-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Speaker Notes</span>
        </button>
      </div>

      {/* Primary Visual Diagram / Simulator */}
      <div className="w-full">
        {renderDiagram()}
      </div>

      {/* Research Bullet Points Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
        {slide.bulletPoints.map((bp, idx) => (
          <div
            key={idx}
            className="p-4 bg-neutral-950/80 rounded-xl border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-white">{bp.heading}</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {bp.detail}
              </p>
            </div>
            {bp.highlight && (
              <div className="mt-3 pt-2 border-t border-neutral-800/80 text-[11px] font-mono text-amber-400 font-medium">
                {bp.highlight}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
