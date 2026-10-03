import React, { useState } from 'react';
import { Globe, Clock, ShieldCheck, TrendingDown, Eye } from 'lucide-react';

export const ReleaseTimelineVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: 'T - 16h: Global Timezone Lead',
      subtitle: 'Asia-Pacific Theatrical Screenings',
      detail: 'Theatres in Sydney, Auckland, Tokyo, and Mumbai finish public screenings 12–16 hours before US East Coast Friday opening.',
      icon: Globe,
      status: 'Early International Cohort'
    },
    {
      id: 2,
      title: 'T - 5h: Thursday Previews & Festivals',
      subtitle: 'Early Access & Industry Screenings',
      detail: 'Modern releases hold Thursday 3:00 PM / 7:00 PM preview showings. Thousands of superfans and press exit theaters with smartphones in hand.',
      icon: Clock,
      status: 'High Volume Ingestion'
    },
    {
      id: 3,
      title: 'T + 0h: Threshold Gate Reached',
      subtitle: 'Volume Check & Bot Neutralization',
      detail: 'Once the volume of verified regular voter submissions passes IMDb’s secret statistical threshold, the system computes the weighted average.',
      icon: ShieldCheck,
      status: 'Publication Gate Unlocked'
    },
    {
      id: 4,
      title: 'T + 2h: Public Rating Appears',
      subtitle: 'The "Honeymoon" Phase (Initial Skew)',
      detail: 'Opening scores skew high (often 8.6–9.1) due to self-selected enthusiasts who rushed opening night. System monitors for coordinated brigading.',
      icon: Eye,
      status: 'Headline Score Published'
    },
    {
      id: 5,
      title: 'T + 14d: Regression to Consensus',
      subtitle: 'Long-Tail Natural Normalization',
      detail: 'As hundreds of thousands of general casual moviegoers vote, the initial fan euphoria normalizes toward long-term consensus (e.g. 7.6–7.9).',
      icon: TrendingDown,
      status: 'Consensus Equilibrium'
    }
  ];

  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <h4 className="text-base font-semibold text-white">
            The 2–3 Hour Release Anatomy: Timeline & Threshold Gate
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            How timezones, early access screenings, and statistical publication gates work together.
          </p>
        </div>
        <div className="text-xs text-amber-400 font-mono">
          Stage {activeStep} of 5
        </div>
      </div>

      {/* Interactive Horizontal Timeline Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-5">
        {steps.map((s) => {
          const Icon = s.icon;
          const isActive = s.id === activeStep;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`p-3 rounded-lg border text-left transition-all ${
                isActive
                  ? 'bg-amber-500/10 border-amber-500/80 shadow-lg shadow-amber-500/10'
                  : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-neutral-400'}`} />
                <span className={`text-[10px] font-mono ${isActive ? 'text-amber-300' : 'text-neutral-500'}`}>
                  {s.id <= 2 ? 'PRE-RELEASE' : s.id === 3 ? 'RELEASE' : 'POST-RELEASE'}
                </span>
              </div>
              <div className={`text-xs font-semibold leading-snug ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                {s.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Visual Canvas */}
      <div className="mt-5 p-5 bg-neutral-950 rounded-xl border border-neutral-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-amber-400 mb-1">
              {steps[activeStep - 1].subtitle}
            </div>
            <h5 className="text-lg font-bold text-white">
              {steps[activeStep - 1].title}
            </h5>
            <p className="text-sm text-neutral-300 mt-2 max-w-2xl leading-relaxed">
              {steps[activeStep - 1].detail}
            </p>
          </div>
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-xs space-y-1.5 shrink-0 min-w-[200px]">
            <div className="text-neutral-400 font-medium">Pipeline Status:</div>
            <div className="text-amber-400 font-mono font-semibold">
              {steps[activeStep - 1].status}
            </div>
            <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400">
              {activeStep <= 2 && 'Ratings withheld; database accumulating early logs.'}
              {activeStep === 3 && 'Threshold check passed: minimum regular voter count met.'}
              {activeStep >= 4 && 'Dynamic weight adjustment running in production.'}
            </div>
          </div>
        </div>

        {/* Visual Graph: Honeymoon Curve */}
        <div className="mt-6 pt-5 border-t border-neutral-800/80">
          <div className="flex justify-between items-center text-xs text-neutral-400 mb-2">
            <span>Observed Rating Trajectory Over Time (The Honeymoon Curve)</span>
            <span className="font-mono text-neutral-400">Typical Opening: 8.8 → Day 14: 7.7</span>
          </div>
          <div className="relative h-20 w-full bg-neutral-900/60 rounded-lg border border-neutral-800/80 overflow-hidden flex items-end px-4 py-2">
            <svg viewBox="0 0 600 70" className="w-full h-full" preserveAspectRatio="none">
              {/* Curve path */}
              <path
                d="M 10,20 Q 90,12 180,24 T 360,42 T 590,48"
                fill="none"
                stroke="#F5C518"
                strokeWidth="2.5"
              />
              {/* Fill below */}
              <path
                d="M 10,20 Q 90,12 180,24 T 360,42 T 590,48 L 590,70 L 10,70 Z"
                fill="url(#curveGlow)"
              />
              <defs>
                <linearGradient id="curveGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5C518" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Points */}
              <circle cx="10" cy="20" r="4" fill="#F5C518" />
              <circle cx="180" cy="24" r="4" fill="#F5C518" />
              <circle cx="360" cy="42" r="4" fill="#38BDF8" />
              <circle cx="590" cy="48" r="4" fill="#38BDF8" />
            </svg>
          </div>
          <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
            <span>T+2h (Premiere: 8.9★)</span>
            <span>T+24h (First Weekend: 8.4★)</span>
            <span>T+7d (General Public: 7.9★)</span>
            <span>T+30d (Equilibrium: 7.7★)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
