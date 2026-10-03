import React, { useState } from 'react';
import { Calculator, RotateCcw, HelpCircle, ArrowRight } from 'lucide-react';

interface Preset {
  name: string;
  v: number;
  R: number;
  m: number;
  C: number;
  desc: string;
}

const PRESETS: Preset[] = [
  {
    name: 'The Shawshank Redemption',
    v: 2900000,
    R: 9.3,
    m: 25000,
    C: 7.0,
    desc: 'Massive vote volume (v ≫ m) lets R dominate. Final score remains 9.3.'
  },
  {
    name: 'Indie Film with 8 Votes',
    v: 8,
    R: 10.0,
    m: 25000,
    C: 7.0,
    desc: 'Despite perfect 10/10 votes, m=25,000 pulls score down to ~7.001.'
  },
  {
    name: 'Mid-Tier Cult Film (15k votes)',
    v: 15000,
    R: 8.8,
    m: 25000,
    C: 7.0,
    desc: 'Below threshold: v/(v+m) is 37.5%, heavily shrunk toward C.'
  },
  {
    name: 'Old IMDb Era (m = 1,250)',
    v: 3000,
    R: 8.9,
    m: 1250,
    C: 7.0,
    desc: 'Historical threshold before IMDb raised m to prevent brigading.'
  }
];

export const BayesianCalculator: React.FC = () => {
  const [v, setV] = useState<number>(250000);
  const [R, setR] = useState<number>(8.6);
  const [m, setM] = useState<number>(25000);
  const [C, setC] = useState<number>(7.0);

  // Bayesian calculation
  const voteWeight = v / (v + m);
  const priorWeight = m / (v + m);
  const W = (voteWeight * R) + (priorWeight * C);

  const applyPreset = (p: Preset) => {
    setV(p.v);
    setR(p.R);
    setM(p.m);
    setC(p.C);
  };

  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5 h-5 text-amber-400" />
          <h4 className="text-base font-semibold text-white">
            Official IMDb Top 250 Bayesian Shrinkage Calculator
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>Formula:</span>
          <span className="font-mono text-amber-400 font-medium">W = [v/(v+m)]·R + [m/(v+m)]·C</span>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="mt-4">
        <div className="text-xs text-neutral-400 mb-2">Preset Scenarios:</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="text-left px-3 py-2 bg-neutral-950/70 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/40 rounded-lg text-xs transition-colors"
            >
              <div className="font-medium text-neutral-200 truncate">{preset.name}</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">v: {preset.v.toLocaleString()} · R: {preset.R}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Controls vs Result */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
        {/* Sliders Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Parameter v: Votes */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-300 font-medium">
                v (Movie Votes Count):
              </span>
              <span className="font-mono text-amber-400 font-semibold">
                {v.toLocaleString()} votes
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="1000000"
              step="100"
              value={v}
              onChange={(e) => setV(Number(e.target.value))}
              className="w-full accent-amber-400 bg-neutral-800 h-2 rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500">
              <span>1 vote (indie)</span>
              <span>25,000 (chart threshold)</span>
              <span>1,000,000+ (blockbuster)</span>
            </div>
          </div>

          {/* Parameter R: Observed Mean */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-300 font-medium">
                R (Movie Arithmetic Mean):
              </span>
              <span className="font-mono text-amber-400 font-semibold">
                {R.toFixed(1)} / 10.0
              </span>
            </div>
            <input
              type="range"
              min="1.0"
              max="10.0"
              step="0.1"
              value={R}
              onChange={(e) => setR(Number(e.target.value))}
              className="w-full accent-amber-400 bg-neutral-800 h-2 rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500">
              <span>1.0 (universally panned)</span>
              <span>7.0 (average)</span>
              <span>10.0 (unanimous praise)</span>
            </div>
          </div>

          {/* Parameter m: Minimum Threshold */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-300 font-medium">
                m (Minimum Votes Threshold for Top 250):
              </span>
              <span className="font-mono text-sky-400 font-semibold">
                {m.toLocaleString()} votes
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={m}
              onChange={(e) => setM(Number(e.target.value))}
              className="w-full accent-sky-400 bg-neutral-800 h-2 rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500">
              <span>1,000 (historical)</span>
              <span>25,000 (IMDb current standard)</span>
              <span>50,000 (strict)</span>
            </div>
          </div>

          {/* Parameter C: Site-Wide Prior */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-300 font-medium">
                C (Database Mean Prior):
              </span>
              <span className="font-mono text-neutral-300 font-semibold">
                {C.toFixed(1)} / 10.0
              </span>
            </div>
            <input
              type="range"
              min="5.0"
              max="8.0"
              step="0.1"
              value={C}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full accent-neutral-400 bg-neutral-800 h-2 rounded cursor-pointer"
            />
          </div>
        </div>

        {/* Output & Weight Breakdown Column */}
        <div className="lg:col-span-5 bg-neutral-950 p-5 rounded-xl border border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="text-xs text-neutral-400">Calculated Bayesian Rating (W):</div>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="text-4xl font-extrabold text-amber-400 font-mono">
                {W.toFixed(3)}
              </span>
              <span className="text-xs text-neutral-400">
                vs Raw R: <strong className="text-neutral-200 font-mono">{R.toFixed(1)}</strong>
              </span>
            </div>

            {/* Visual Weight Balance Bar */}
            <div className="mt-4 space-y-1.5">
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Movie Votes Share: <strong className="text-amber-400">{(voteWeight * 100).toFixed(1)}%</strong></span>
                <span>Prior C Share: <strong className="text-sky-400">{(priorWeight * 100).toFixed(1)}%</strong></span>
              </div>
              <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden flex">
                <div
                  className="bg-amber-400 h-full transition-all duration-200"
                  style={{ width: `${voteWeight * 100}%` }}
                />
                <div
                  className="bg-sky-500 h-full transition-all duration-200"
                  style={{ width: `${priorWeight * 100}%` }}
                />
              </div>
            </div>

            {/* Mathematical Step-by-Step Breakdown */}
            <div className="mt-4 p-3 bg-neutral-900/80 rounded-lg text-xs font-mono space-y-1 border border-neutral-800/80 text-neutral-300">
              <div className="text-[11px] text-neutral-400 font-sans font-medium mb-1">Calculation Breakdown:</div>
              <div>v/(v+m) = {v.toLocaleString()} / {(v + m).toLocaleString()} = <span className="text-amber-400">{voteWeight.toFixed(4)}</span></div>
              <div>m/(v+m) = {m.toLocaleString()} / {(v + m).toLocaleString()} = <span className="text-sky-400">{priorWeight.toFixed(4)}</span></div>
              <div className="pt-1 border-t border-neutral-800 text-amber-300">
                W = ({voteWeight.toFixed(4)} × {R}) + ({priorWeight.toFixed(4)} × {C}) = {W.toFixed(3)}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {v < m ? 'Low vote count: prior C has high influence, damping hype.' : 'High vote count: movie\'s authentic score R dominates.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
