import React, { useEffect } from 'react';
import { SLIDES_DATA, CITATIONS } from '../data/slidesData';
import { Printer, ArrowLeft, BookOpen, ExternalLink, FileDown, CheckCircle, Info } from 'lucide-react';

interface PrintHandoutViewProps {
  onBackToPresentation: () => void;
  autoTriggerPrint?: boolean;
}

export const PrintHandoutView: React.FC<PrintHandoutViewProps> = ({
  onBackToPresentation,
  autoTriggerPrint = false
}) => {
  useEffect(() => {
    if (autoTriggerPrint) {
      const timer = setTimeout(() => {
        window.print();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [autoTriggerPrint]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-6 text-neutral-200">
      {/* Handout Header Controls (Hidden during print) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-800 no-print">
        <button
          onClick={onBackToPresentation}
          className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Slide Deck</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 px-4 py-2.5 rounded-lg transition-colors shadow-lg shadow-amber-400/20"
          >
            <FileDown className="w-4 h-4" />
            <span>Export Entire Deck as PDF</span>
          </button>
        </div>
      </div>

      {/* Browser PDF Export Tip Banner (Hidden during print) */}
      <div className="mb-6 p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-neutral-300 flex items-start gap-2.5 no-print">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-400 block mb-0.5">PDF Export Instructions:</strong>
          <span>
            When the browser print dialog opens, set <strong>Destination</strong> to <em>"Save as PDF"</em>, select <em>"A4 / Letter"</em>, and ensure <em>"Background graphics"</em> is checked to preserve the cinematic styling.
          </span>
        </div>
      </div>

      {/* Handout Document Title */}
      <div className="text-center pb-8 border-b border-neutral-800 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
          College AI & Data Science Assignment · Complete Research Slide Deck
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          The Science Behind the Screen: IMDb Rating Mechanics & AI Opinion Mining
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto">
          Comprehensive Slide Deck Transcripts, Mathematical Formulas, Speaker Notes & Academic Literature
        </p>
        <div className="text-[11px] font-mono text-neutral-500 pt-1">
          15 Slides · Sourced from Official IMDb Documentation & Google AI Research
        </div>
      </div>

      {/* Table of Contents Summary */}
      <div className="my-8 p-5 bg-neutral-900/60 rounded-xl border border-neutral-800 space-y-2 print-avoid-break">
        <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
          Slide Deck Syllabus & Core Inquiries Answered
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
          <div>• <strong>Slide 1–2:</strong> Rating Systems & Arithmetic Mean Failure</div>
          <div>• <strong>Slide 3:</strong> 2–3 Hour Release Timing & Threshold Gates</div>
          <div>• <strong>Slide 4:</strong> Audience Sampling & Ballot Stuffing Safeguards</div>
          <div>• <strong>Slide 5:</strong> Top 250 Bayesian Formula [W = (v/(v+m))R + (m/(v+m))C]</div>
          <div>• <strong>Slide 6:</strong> Actor STARmeter vs. Acting Skill / Oscars</div>
          <div>• <strong>Slide 7:</strong> NLP Lexicon (Text Classification ⊃ Sentiment ⊃ Opinion Mining)</div>
          <div>• <strong>Slide 8–9:</strong> Classical ML (Naive Bayes, SVM) to Deep Transformers (BERT, RoBERTa)</div>
          <div>• <strong>Slide 10–11:</strong> Proposed AI Pipeline & Head-to-Head Architectural Matrix</div>
          <div>• <strong>Slide 12–13:</strong> Real-World Linguistic Challenges & Core Conclusions</div>
          <div>• <strong>Slide 14–15:</strong> Academic Bibliography & Interactive Exploration Lab</div>
        </div>
      </div>

      {/* 15 Slide Summaries */}
      <div className="space-y-10">
        {SLIDES_DATA.map((slide) => (
          <article
            key={slide.id}
            className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl space-y-4 print-page-break"
          >
            <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-3">
              <span className="font-mono text-amber-400 font-bold">
                SLIDE {String(slide.id).padStart(2, '0')} / 15
              </span>
              <span className="text-neutral-500 font-medium">
                {slide.category} · {slide.kicker}
              </span>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                {slide.title}
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">
                {slide.subtitle}
              </p>
            </div>

            {/* Core Takeaway */}
            <div className="p-3 bg-amber-500/10 border-l-2 border-amber-400 rounded-r-lg text-xs text-neutral-200">
              <strong className="text-amber-400">Core Takeaway:</strong> {slide.keyTakeaway}
            </div>

            {/* Key Content Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {slide.bulletPoints.map((bp, idx) => (
                <div key={idx} className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/80">
                  <div className="font-semibold text-white mb-1 flex items-center justify-between">
                    <span>{bp.heading}</span>
                    {bp.highlight && (
                      <span className="text-[10px] font-mono text-amber-400">
                        {bp.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    {bp.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Speaker Notes Transcript */}
            <div className="p-3.5 bg-neutral-900 rounded-lg border border-neutral-800 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-sky-400 font-semibold text-[11px]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Presentation Script & Classroom Lecture Q&A:</span>
              </div>
              <p className="text-neutral-300 italic text-[11px] leading-relaxed">
                "{slide.speakerNotes.presentationScript}"
              </p>
              <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400">
                <span className="text-emerald-400 font-medium">Classroom Tip:</span> {slide.speakerNotes.classroomTip}<br />
                <span className="text-amber-400 font-medium mt-1 inline-block">Anticipated Student Question:</span> "{slide.speakerNotes.commonStudentQuestion}"<br />
                <span className="text-neutral-300 font-medium">Answer:</span> {slide.speakerNotes.answer}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Citations & Bibliography Section */}
      <section className="mt-12 pt-8 border-t border-neutral-800 space-y-4 print-avoid-break">
        <h3 className="text-lg font-bold text-white">
          Verified Academic Sources & Primary Documentation
        </h3>
        <div className="grid grid-cols-1 gap-3 text-xs">
          {CITATIONS.map((cit, idx) => (
            <div key={idx} className="p-3.5 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">{cit.title}</span>
                <span className="text-neutral-500 font-mono text-[10px]">{cit.year}</span>
              </div>
              <div className="text-[11px] text-amber-400">{cit.source}</div>
              <p className="text-[11px] text-neutral-400">{cit.note}</p>
              {cit.url && (
                <div className="text-[10px] text-sky-400 pt-0.5 font-mono">
                  {cit.url}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
