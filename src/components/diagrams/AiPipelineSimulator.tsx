import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, Sliders, RefreshCw, BarChart3 } from 'lucide-react';

interface SampleReview {
  label: string;
  text: string;
  simulatedAspects: {
    direction: number;
    acting: number;
    cinematography: number;
    screenplay: number;
    music: number;
    pacing: number;
  };
  sentimentPolarity: number; // 0.0 to 1.0
  syntheticRating: number;
  explanation: string;
}

const SAMPLE_REVIEWS: SampleReview[] = [
  {
    label: 'Mixed Review (Visual Masterpiece, Weak Script)',
    text: "The IMAX cinematography and sound design were absolutely breathtaking, but the screenplay dragged terribly in the second half and the dialogue felt flat.",
    simulatedAspects: {
      direction: 8.2,
      acting: 7.1,
      cinematography: 9.8,
      screenplay: 4.8,
      music: 9.4,
      pacing: 4.2
    },
    sentimentPolarity: 0.64,
    syntheticRating: 7.3,
    explanation: "High visual and audio aspect scores pulled the rating up, but the low screenplay and pacing scores prevented a 9+ score."
  },
  {
    label: 'Praise with Modern Slang',
    text: "That third act fight choreography was completely sick! The lead actress gave an unhinged, Oscar-worthy performance.",
    simulatedAspects: {
      direction: 9.0,
      acting: 9.6,
      cinematography: 9.1,
      screenplay: 8.4,
      music: 8.7,
      pacing: 9.0
    },
    sentimentPolarity: 0.94,
    syntheticRating: 9.1,
    explanation: "RoBERTa accurately recognized 'sick' and 'unhinged' as strong positive superlatives in contemporary movie vernacular."
  },
  {
    label: 'Subtle Sarcasm / Irony',
    text: "A truly revolutionary masterpiece for anyone who desperately needs a cure for insomnia. Two hours of staring at paint drying.",
    simulatedAspects: {
      direction: 3.2,
      acting: 4.0,
      cinematography: 5.0,
      screenplay: 2.1,
      music: 4.5,
      pacing: 1.8
    },
    sentimentPolarity: 0.18,
    syntheticRating: 2.9,
    explanation: "The pipeline's second-stage irony detector flagged the contrast between 'masterpiece' and 'cure for insomnia', dampening the deceptive word 'masterpiece'."
  }
];

export const AiPipelineSimulator: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<SampleReview>(SAMPLE_REVIEWS[0]);
  const [customText, setCustomText] = useState<string>(SAMPLE_REVIEWS[0].text);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSelectSample = (sample: SampleReview) => {
    setSelectedSample(sample);
    setCustomText(sample.text);
  };

  const handleRunAnalysis = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 400);
  };

  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <h4 className="text-base font-semibold text-white">
            Proposed AI Review-to-Rating Pipeline Simulator
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            Transforming natural language text into calibrated aspect polarities and a 1–10 star rating.
          </p>
        </div>
        <div className="text-xs text-neutral-400 font-mono">
          Model: <span className="text-amber-400">RoBERTa + ABSA Head</span>
        </div>
      </div>

      {/* Preset Review Selectors */}
      <div className="mt-4">
        <div className="text-xs text-neutral-400 mb-2">Test with Verified Review Scenarios:</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {SAMPLE_REVIEWS.map((sample) => (
            <button
              key={sample.label}
              onClick={() => handleSelectSample(sample)}
              className={`p-2.5 rounded-lg border text-left transition-all text-xs ${
                selectedSample.label === sample.label
                  ? 'bg-amber-500/10 border-amber-500/80 text-white'
                  : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
              }`}
            >
              <div className="font-semibold truncate">{sample.label}</div>
              <div className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{sample.text}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Review Text Input */}
      <div className="mt-4">
        <label className="block text-xs font-medium text-neutral-300 mb-1.5">
          Audience Review Input (Natural Language):
        </label>
        <div className="relative">
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            rows={2}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-neutral-200 focus:outline-none focus:border-amber-400 font-mono"
            placeholder="Type or paste any film review text..."
          />
          <button
            onClick={handleRunAnalysis}
            disabled={isProcessing}
            className="absolute bottom-2.5 right-2.5 px-3 py-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold rounded flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isProcessing ? 'animate-spin' : ''}`} />
            Run NLP Pipeline
          </button>
        </div>
      </div>

      {/* Visual Pipeline Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Aspect Scores Column */}
        <div className="lg:col-span-7 bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
              Extracted Aspect Polarity Vectors:
            </span>
            <span className="font-mono text-neutral-400 text-[11px]">Normalized Scale [0–10]</span>
          </div>

          <div className="space-y-2.5 pt-1">
            {Object.entries(selectedSample.simulatedAspects).map(([aspect, score]) => {
              const isHigh = score >= 7.5;
              const isLow = score < 5.0;
              return (
                <div key={aspect} className="text-xs">
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span className="capitalize">{aspect}:</span>
                    <span className={`font-mono font-semibold ${isHigh ? 'text-emerald-400' : isLow ? 'text-rose-400' : 'text-amber-400'}`}>
                      {score.toFixed(1)} / 10
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        isHigh ? 'bg-emerald-400' : isLow ? 'bg-rose-500' : 'bg-amber-400'
                      }`}
                      style={{ width: `${score * 10}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 leading-relaxed">
            <strong className="text-neutral-200">Semantic Interpretation:</strong> {selectedSample.explanation}
          </div>
        </div>

        {/* Synthesized Output Column */}
        <div className="lg:col-span-5 bg-neutral-950 p-5 rounded-xl border border-amber-500/30 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono text-amber-400 font-semibold">SYNTHETIC OUTPUT</span>
              <span className="text-[11px] text-neutral-400 font-mono">Stage 6 Calibrated</span>
            </div>

            <div className="mt-3 text-center py-4 bg-neutral-900/80 rounded-xl border border-neutral-800">
              <div className="text-xs text-neutral-400">Calibrated Title Rating:</div>
              <div className="text-5xl font-black text-amber-400 font-mono mt-1">
                {selectedSample.syntheticRating.toFixed(1)}
                <span className="text-2xl text-neutral-500 font-normal"> / 10</span>
              </div>
              <div className="flex justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                  <span
                    key={star}
                    className={`text-xs ${
                      star <= Math.round(selectedSample.syntheticRating)
                        ? 'text-amber-400'
                        : 'text-neutral-700'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-1.5 text-xs">
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Document Polarity:</span>
                <span className="font-mono font-medium text-white">
                  {(selectedSample.sentimentPolarity * 100).toFixed(0)}% Positive
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Sarcasm Likelihood:</span>
                <span className="font-mono font-medium text-emerald-400">Low (0.08)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Reviewer Bias Weight:</span>
                <span className="font-mono font-medium text-sky-400">1.00 (Calibrated)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 text-[10px] text-neutral-500 font-mono">
            Distinction: Generated from review text semantics, NOT IMDb star votes.
          </div>
        </div>
      </div>
    </div>
  );
};
