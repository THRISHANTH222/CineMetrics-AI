import React, { useState } from 'react';
import { Cpu, Zap, GitBranch, Sparkles } from 'lucide-react';

export const ClassicalVsTransformerVisual: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'naive_bayes' | 'svm' | 'bilstm' | 'roberta'>('roberta');

  const models = {
    naive_bayes: {
      name: 'Naive Bayes (Multinomial NB)',
      family: 'Classical Probabilistic ML',
      speed: '< 2 ms / 1,000 reviews',
      compute: 'Very Low (Runs on single low-end CPU)',
      representation: 'Bag-of-Words / TF-IDF Word Counts',
      coreEquation: 'P(Class | Words) ∝ P(Class) ∏ P(word_i | Class)',
      strength: 'Blazing fast baseline, requires virtually zero training hardware.',
      weakness: 'Completely ignores word order: cannot distinguish "not great" from "great, not".'
    },
    svm: {
      name: 'Support Vector Machine (LinearSVC)',
      family: 'Classical Geometric ML',
      speed: '< 15 ms / 1,000 reviews',
      compute: 'Low (CPU memory bounded)',
      representation: 'High-Dimensional Sparse TF-IDF Vectors',
      coreEquation: 'min ||w||² subject to y_i(w · x_i + b) ≥ 1',
      strength: 'Finds optimal hyperplane with maximum margin, highly effective on sparse text.',
      weakness: 'Still treats words as independent bags of tokens without syntactic context.'
    },
    bilstm: {
      name: 'Bidirectional LSTM (BiLSTM)',
      family: 'Recurrent Deep Learning (2015 era)',
      speed: '~ 350 ms / 1,000 reviews',
      compute: 'Moderate (GPU recommended)',
      representation: 'Dense Word Embeddings (Word2Vec / GloVe)',
      coreEquation: 'h_t = [fwd_LSTM(x_t), bwd_LSTM(x_t)] with forget gates',
      strength: 'Maintains hidden state memory to respect word sequences and negations.',
      weakness: 'Slow sequential computation; memory fades over lengthy 500+ word reviews.'
    },
    roberta: {
      name: 'RoBERTa / Google BERT',
      family: 'Transformer Self-Attention (Modern SOTA)',
      speed: '~ 80 ms (batched GPU inference)',
      compute: 'High (requires modern GPU/TPU accelerator)',
      representation: 'Dynamic Contextual Byte-Pair Embeddings',
      coreEquation: 'Attention(Q, K, V) = softmax(Q·Kᵀ / √d_k) · V',
      strength: 'Reads sentences in both directions simultaneously; excels at sarcasm and movie slang.',
      weakness: 'Computationally heavier; needs fine-tuning on labeled movie sentiment sets.'
    }
  };

  const current = models[selectedModel];

  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <h4 className="text-base font-semibold text-white">
            Model Evolution: Classical ML vs. Recurrence vs. Transformers
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            Comparing computational speed, representations, and linguistic comprehension.
          </p>
        </div>
      </div>

      {/* Model Selection Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        {(Object.keys(models) as Array<keyof typeof models>).map((key) => {
          const m = models[key];
          const isSelected = selectedModel === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedModel(key)}
              className={`p-3 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'bg-amber-500/10 border-amber-500/80 shadow-md shadow-amber-500/10'
                  : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="text-[10px] font-mono text-neutral-400">{m.family.split(' ')[0]}</div>
              <div className={`text-xs font-semibold mt-0.5 truncate ${isSelected ? 'text-amber-400' : 'text-neutral-200'}`}>
                {m.name.split(' ')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Model Inspection Panel */}
      <div className="mt-5 p-5 bg-neutral-950 rounded-xl border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Specs */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 font-semibold">{current.family}</span>
            <span className="text-xs font-mono text-sky-400">{current.speed}</span>
          </div>

          <h5 className="text-lg font-bold text-white">{current.name}</h5>

          <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 font-mono text-xs text-amber-300">
            <div className="text-[10px] text-neutral-400 font-sans mb-0.5">Core Mathematical Mechanism:</div>
            {current.coreEquation}
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 bg-neutral-900/60 rounded border border-neutral-800">
              <span className="text-neutral-400 text-[11px] block">Text Representation:</span>
              <span className="text-neutral-200 font-medium">{current.representation}</span>
            </div>
            <div className="p-2.5 bg-neutral-900/60 rounded border border-neutral-800">
              <span className="text-neutral-400 text-[11px] block">Compute Budget:</span>
              <span className="text-neutral-200 font-medium">{current.compute}</span>
            </div>
          </div>
        </div>

        {/* Right Strengths / Trade-offs */}
        <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-4 lg:pt-0 lg:pl-6 space-y-3 text-xs">
          <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
            <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Primary Advantage:
            </div>
            <p className="text-neutral-300 leading-relaxed text-[11px]">{current.strength}</p>
          </div>

          <div className="p-3 bg-rose-950/20 border border-rose-500/30 rounded-lg">
            <div className="font-semibold text-rose-400 mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> Critical Vulnerability:
            </div>
            <p className="text-neutral-300 leading-relaxed text-[11px]">{current.weakness}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
