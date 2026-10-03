import React from 'react';
import { UserCheck, Users, ShieldAlert, CheckCircle2, XCircle, Filter } from 'lucide-react';

export const AudienceSamplingVisual: React.FC = () => {
  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <h4 className="text-base font-semibold text-white">
            Audience Sampling & Ballot Safeguards Architecture
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            How IMDb filters raw user submissions into a protected weighted vote average.
          </p>
        </div>
        <div className="text-xs text-neutral-400">
          Source: <span className="font-mono text-amber-400">IMDb Help FAQ (Ratings)</span>
        </div>
      </div>

      {/* 3-Column Pipeline: Ingestion -> Filter -> Score */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Column 1: Raw Submission Pool */}
        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-sky-400" />
            <h5 className="text-sm font-semibold text-white">1. Voluntary Input Pool</h5>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Registered IMDb users submit a 1 to 10 integer vote. Sampling is voluntary (self-selected), not a random survey.
          </p>
          <div className="p-3 bg-neutral-900/80 rounded-lg border border-neutral-800 space-y-2 text-xs">
            <div className="text-neutral-300 font-medium">Included in Mathematical Input:</div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Registered User 1–10 Star Vote</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Voter Account Metadata (Age/History)</span>
            </div>
          </div>
        </div>

        {/* Column 2: Anti-Stuffing & Weighting Filters */}
        <div className="bg-neutral-950 p-4 rounded-xl border border-amber-500/40 space-y-3 relative">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <h5 className="text-sm font-semibold text-amber-400">2. Proprietary Weighting</h5>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Not all votes have equal impact. Algorithms neutralize artificial attempts to depress or inflate titles.
          </p>
          <div className="p-3 bg-neutral-900/80 rounded-lg border border-neutral-800 space-y-2 text-xs">
            <div className="text-neutral-300 font-medium">Filter Mechanics:</div>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <UserCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>"Regular Voter" Weight Bonus</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Velocity / IP Cluster Dampening</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <Filter className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Extreme Outlier Trimming (1 & 10)</span>
            </div>
          </div>
        </div>

        {/* Column 3: The Strict Separation */}
        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-3">
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-rose-400" />
            <h5 className="text-sm font-semibold text-white">3. Excluded Elements</h5>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            IMDb explicitly excludes non-vote elements from calculating the public 1–10 star headline rating.
          </p>
          <div className="p-3 bg-neutral-900/80 rounded-lg border border-neutral-800 space-y-2 text-xs">
            <div className="text-rose-400 font-medium">NOT Used to Compute Score:</div>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Written User Reviews (Text)</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Critic Reviews (Metascore)</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Box Office Earnings & Awards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Banner */}
      <div className="mt-5 p-3.5 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>
            <strong>Result:</strong> IMDb publishes a <em>weighted vote average</em>, not an arithmetic mean.
          </span>
        </div>
        <span className="text-[11px] text-neutral-500 hidden sm:inline">
          Exact weights proprietary to prevent gaming
        </span>
      </div>
    </div>
  );
};
