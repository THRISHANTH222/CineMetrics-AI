import React, { useState } from 'react';
import { Layers, Heart, Target, ChevronRight } from 'lucide-react';

export const NlpVennHierarchy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'classification' | 'sentiment' | 'opinion'>('all');

  const pillars = [
    {
      id: 'classification',
      title: '1. Text Classification',
      role: 'The Parent Discipline (The Big Box)',
      simpleDefinition: 'Sorting any text into predefined categories.',
      movieExample: 'Is this review discussing "Sci-Fi" or "Romance"? Does it contain "Spoilers" or "Spam"?',
      icon: Layers,
      color: 'sky'
    },
    {
      id: 'sentiment',
      title: '2. Sentiment Analysis',
      role: 'The Emotional Polarity Subfield',
      simpleDefinition: 'Determining if the reviewer felt happy, sad, angry, or disappointed.',
      movieExample: 'Overall tone: "Positive" (80%), "Negative" (15%), or "Neutral" (5%).',
      icon: Heart,
      color: 'amber'
    },
    {
      id: 'opinion',
      title: '3. Opinion Mining ("Opinion Mind")',
      role: 'Aspect-Based Sentiment Extraction (The Deep Why)',
      simpleDefinition: 'Extracting WHICH specific element the audience liked or hated.',
      movieExample: '"Cinematography: +0.9 (Loved it), Screenplay: -0.8 (Hated it), Music: +0.5 (Decent)".',
      icon: Target,
      color: 'emerald'
    }
  ];

  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <h4 className="text-base font-semibold text-white">
            Connecting the NLP Lexicon: Classification vs. Sentiment vs. Opinion Mining
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            Understanding the hierarchy from broad document sorting to fine-grained aspect opinions.
          </p>
        </div>
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800 text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'all' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'}`}
          >
            All 3
          </button>
          <button
            onClick={() => setActiveTab('classification')}
            className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'classification' ? 'bg-sky-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'}`}
          >
            Classification
          </button>
          <button
            onClick={() => setActiveTab('sentiment')}
            className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'sentiment' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'}`}
          >
            Sentiment
          </button>
          <button
            onClick={() => setActiveTab('opinion')}
            className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'opinion' ? 'bg-emerald-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'}`}
          >
            Opinion Mind
          </button>
        </div>
      </div>

      {/* Visual Nested Boxes Graphic */}
      <div className="mt-5 p-6 bg-neutral-950 rounded-xl border border-neutral-800 flex flex-col items-center">
        {/* Layer 1: Outer Text Classification */}
        <div
          className={`w-full max-w-2xl p-4 rounded-xl border transition-all ${
            activeTab === 'all' || activeTab === 'classification'
              ? 'border-sky-500/60 bg-sky-950/20'
              : 'border-neutral-800 opacity-40'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-sky-400 font-mono font-medium mb-3">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> TEXT CLASSIFICATION (Parent Domain)
            </span>
            <span className="text-[11px] text-neutral-400">Classifies any text into buckets</span>
          </div>

          {/* Layer 2: Middle Sentiment Analysis */}
          <div
            className={`p-4 rounded-lg border transition-all ${
              activeTab === 'all' || activeTab === 'sentiment'
                ? 'border-amber-500/60 bg-amber-950/20'
                : 'border-neutral-800 opacity-40'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-amber-400 font-mono font-medium mb-3">
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" /> SENTIMENT ANALYSIS (Valence & Emotion)
              </span>
              <span className="text-[11px] text-neutral-400">Positive vs Negative vs Neutral</span>
            </div>

            {/* Layer 3: Inner Opinion Mining */}
            <div
              className={`p-4 rounded-lg border transition-all ${
                activeTab === 'all' || activeTab === 'opinion'
                  ? 'border-emerald-500/80 bg-emerald-950/30'
                  : 'border-neutral-800 opacity-40'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-emerald-400 font-mono font-medium mb-2">
                <span className="flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" /> OPINION MINING / "OPINION MIND" (Aspect-Based)
                </span>
                <span className="text-[11px] text-neutral-400">Targets: Acting, Plot, Sound, Visuals</span>
              </div>
              <p className="text-xs text-neutral-300 italic">
                "The visuals were stunning (+), but the dialogue was painfully clunky (-)."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Explanatory Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-5">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className={`p-4 rounded-xl border bg-neutral-950/70 transition-all ${
                activeTab === p.id ? 'border-amber-400 shadow-md shadow-amber-400/10' : 'border-neutral-800'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-amber-400" />
                <h5 className="text-sm font-bold text-white">{p.title}</h5>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mb-2">{p.role}</div>
              <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                {p.simpleDefinition}
              </p>
              <div className="pt-2.5 border-t border-neutral-800/80 text-[11px] text-neutral-400">
                <strong className="text-neutral-200">Movie Example:</strong> {p.movieExample}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
