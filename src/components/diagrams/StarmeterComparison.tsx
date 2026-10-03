import React, { useState } from 'react';
import { Award, Flame, Search, TrendingUp, HelpCircle, Users } from 'lucide-react';

interface ActorProfile {
  name: string;
  role: string;
  starMeterRank: number;
  oscarWins: number;
  weeklyPageViews: number;
  recentTrigger: string;
  type: 'viral_breakout' | 'oscar_veteran' | 'box_office_star';
}

const SAMPLE_ACTORS: ActorProfile[] = [
  {
    name: 'Maya R. (Breakout Lead)',
    role: 'Lead in trending Netflix sci-fi series',
    starMeterRank: 1,
    oscarWins: 0,
    weeklyPageViews: 2450000,
    recentTrigger: 'Viral trailer drop + Season premiere on Friday',
    type: 'viral_breakout'
  },
  {
    name: 'Julian Vance (Method Legend)',
    role: '3-time Academy Award Best Actor Winner',
    starMeterRank: 482,
    oscarWins: 3,
    weeklyPageViews: 64000,
    recentTrigger: 'Between film projects; no active promotional press',
    type: 'oscar_veteran'
  },
  {
    name: 'Elena Rostova (Marvel Star)',
    role: 'Co-lead in upcoming summer blockbuster',
    starMeterRank: 4,
    oscarWins: 0,
    weeklyPageViews: 1820000,
    recentTrigger: 'Super Bowl teaser debut + Comic-Con panel',
    type: 'box_office_star'
  }
];

export const StarmeterComparison: React.FC = () => {
  const [selectedActor, setSelectedActor] = useState<ActorProfile>(SAMPLE_ACTORS[0]);
  const [searchBoost, setSearchBoost] = useState<number>(50);

  // Dynamic rank calculation based on simulated page views
  const dynamicViews = Math.round(selectedActor.weeklyPageViews * (searchBoost / 50));
  const dynamicRank = Math.max(1, Math.round(selectedActor.starMeterRank / (searchBoost / 50)));

  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 md:p-6 text-neutral-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <h4 className="text-base font-semibold text-white">
            IMDbPro STARmeter: Popularity vs. Quality Distinction
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            Why #1 means "Most Searched This Week", NOT "Best Actor on Earth".
          </p>
        </div>
        <div className="text-xs text-neutral-400 font-mono">
          Updated Weekly on Mondays
        </div>
      </div>

      {/* Profile Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        {SAMPLE_ACTORS.map((actor) => (
          <button
            key={actor.name}
            onClick={() => setSelectedActor(actor)}
            className={`p-3.5 rounded-lg border text-left transition-all ${
              selectedActor.name === actor.name
                ? 'bg-amber-500/10 border-amber-500/80'
                : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-neutral-400">STARmeter Rank</span>
              <span className={`text-base font-extrabold font-mono ${actor.starMeterRank === 1 ? 'text-amber-400' : 'text-neutral-300'}`}>
                #{actor.starMeterRank}
              </span>
            </div>
            <div className="font-semibold text-sm text-white mt-1">{actor.name}</div>
            <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{actor.role}</div>
          </button>
        ))}
      </div>

      {/* Deep-Dive Inspection Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 bg-neutral-950 p-5 rounded-xl border border-neutral-800 items-center">
        {/* Left: Popularity Metrics */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400">BEHAVIORAL TRAFFIC METRIC</span>
            <span className="text-xs text-neutral-400 font-mono">200M+ Monthly Visitors</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-semibold text-white">Simulated Search Surge:</span>
              <span className="text-xs font-mono text-amber-400">{searchBoost}% intensity</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              value={searchBoost}
              onChange={(e) => setSearchBoost(Number(e.target.value))}
              className="w-full accent-amber-400 bg-neutral-800 h-2 rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500">
              <span>Quiet off-season</span>
              <span>Baseline</span>
              <span>Viral teaser premiere</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
              <div className="text-[11px] text-neutral-400">Calculated Rank:</div>
              <div className="text-2xl font-black text-amber-400 font-mono mt-0.5">
                #{dynamicRank}
              </div>
            </div>
            <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
              <div className="text-[11px] text-neutral-400">Weekly Page Views:</div>
              <div className="text-lg font-bold text-white font-mono mt-0.5">
                {dynamicViews.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="text-xs text-neutral-300 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/80">
            <strong className="text-neutral-100">Weekly Catalyst:</strong> {selectedActor.recentTrigger}
          </div>
        </div>

        {/* Right: The Quality vs Popularity Duality */}
        <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-4 lg:pt-0 lg:pl-6 space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-sky-400" />
            <h5 className="text-sm font-semibold text-white">Artistic Quality vs. Traffic</h5>
          </div>

          <div className="space-y-2 text-xs text-neutral-300">
            <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
              <span className="text-neutral-400">Oscar / Emmy Accolades:</span>
              <span className="font-mono font-semibold text-sky-400">
                {selectedActor.oscarWins > 0 ? `${selectedActor.oscarWins} Academy Awards` : '0 Academy Awards'}
              </span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
              <span className="text-neutral-400">Public Language Model Used:</span>
              <span className="font-mono text-rose-400">None Disclosed (Zero NLP)</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
              <span className="text-neutral-400">Primary Determining Factor:</span>
              <span className="font-mono text-amber-400">User Clickstream & Search Queries</span>
            </div>
          </div>

          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-neutral-300 space-y-1">
            <div className="font-medium text-amber-400 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Assignment Key Distinction:</span>
            </div>
            <p className="text-[11px] leading-relaxed text-neutral-300">
              IMDb does NOT evaluate acting technique, monologue delivery, or artistic nuance to rank actors. STARmeter is an attention index. A teen in a viral TikTok or trailer can beat Daniel Day-Lewis purely on page views.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
