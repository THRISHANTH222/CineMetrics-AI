import React from 'react';
import { Check, X, Shield, Cpu, Sparkles, Database } from 'lucide-react';

export const ImdbVsAiMatrix: React.FC = () => {
  const comparisons = [
    {
      dimension: 'Primary Input Modality',
      imdb: 'Numerical 1 to 10 Star integer votes submitted by registered users.',
      ai: 'Unstructured natural language review paragraphs and aspect phrases.',
      verdict: 'IMDb measures quantitative actions; AI interprets qualitative prose.'
    },
    {
      dimension: 'Mathematical Engine',
      imdb: 'Proprietary statistical weighted averages and Bayesian shrinkage (m=25,000 for Top 250).',
      ai: 'Deep Transformer attention heads (RoBERTa / BERT) + Aspect-Based Opinion Mining.',
      verdict: 'Statistics vs. Neural Attention.'
    },
    {
      dimension: 'Role of Written User Reviews',
      imdb: 'Explicitly EXCLUDED from title rating computation; displayed only for public reading.',
      ai: 'The central mathematical training and inference signal for generating the score.',
      verdict: 'IMDb separates text from score math; AI derives score directly from text.'
    },
    {
      dimension: 'Anti-Manipulation Strategy',
      imdb: 'Voter velocity tracking, account age verification, IP clustering, and outlier trimming.',
      ai: 'Semantic repetition detection, synthetic LLM perplexity checks, and account bias calibration.',
      verdict: 'IMDb tracks behavior logs; AI tracks linguistic fingerprints.'
    },
    {
      dimension: 'Explainability & Feedback',
      imdb: 'Black-box summary number (e.g., 7.8★). User cannot deduce which specific elements failed.',
      ai: 'Transparent aspect radar: reveals 9.2 for cinematography alongside 5.1 for screenplay.',
      verdict: 'AI provides actionable "Why" diagnostics.'
    },
    {
      dimension: 'Computational Scalability',
      imdb: 'Extremely lightweight: sub-millisecond database updates across millions of daily votes.',
      ai: 'Computationally heavy: requires multi-core GPU inference per parsed review document.',
      verdict: 'IMDb scales effortlessly; AI requires GPU inference budgets.'
    },
    {
      dimension: 'Actor Popularity Metrics',
      imdb: 'STARmeter tracks clickstream page views and search queries updated weekly on Mondays.',
      ai: 'Evaluates audience sentiment toward actor performances across review text passages.',
      verdict: 'STARmeter is search buzz; AI measures critical audience acclaim.'
    }
  ];

  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <h4 className="text-base font-semibold text-white">
            Head-to-Head: What IMDb Actually Does vs. What an AI System Could Do
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            Explicitly contrasting official documented facts against proposed modern NLP architectures.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-neutral-800 bg-neutral-950/80">
              <th className="py-3 px-3.5 font-semibold text-neutral-400 uppercase tracking-wider text-[11px] w-1/4">
                Evaluation Dimension
              </th>
              <th className="py-3 px-3.5 font-semibold text-amber-400 uppercase tracking-wider text-[11px] w-3/8">
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  Official IMDb Production Engine
                </div>
              </th>
              <th className="py-3 px-3.5 font-semibold text-sky-400 uppercase tracking-wider text-[11px] w-3/8">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Proposed AI / NLP Architecture
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/80">
            {comparisons.map((row, idx) => (
              <tr key={idx} className="hover:bg-neutral-950/40 transition-colors">
                <td className="py-3 px-3.5 font-medium text-white align-top">
                  <div>{row.dimension}</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">{row.verdict}</div>
                </td>
                <td className="py-3 px-3.5 text-neutral-300 align-top leading-relaxed bg-amber-500/[0.02]">
                  {row.imdb}
                </td>
                <td className="py-3 px-3.5 text-neutral-300 align-top leading-relaxed bg-sky-500/[0.02]">
                  {row.ai}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Synthesis Footnote */}
      <div className="mt-4 p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
        <span>
          <strong>Academic Note:</strong> IMDb does not disclose using LLMs or BERT for title scores or STARmeter. AI suggestions represent academic modeling.
        </span>
        <span className="font-mono text-amber-400">Classroom Comparison</span>
      </div>
    </div>
  );
};
