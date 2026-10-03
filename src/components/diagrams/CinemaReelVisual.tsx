import React from 'react';

export const CinemaReelVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-6 bg-gradient-to-br from-neutral-900/90 via-neutral-950 to-black rounded-xl border border-neutral-800/80 overflow-hidden">
      {/* Background Projector Light Cone */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

      {/* SVG Canvas for Cinema & Neural Matrix */}
      <svg
        viewBox="0 0 700 420"
        className="w-full h-auto max-h-[380px] drop-shadow-2xl select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="50%" stopColor="#F5C518" />
            <stop offset="100%" stopColor="#B38600" />
          </linearGradient>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="70%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <radialGradient id="projectorBeam" cx="15%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#F5C518" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#F5C518" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Projector Beam Cone */}
        <polygon points="90,130 680,20 680,390" fill="url(#projectorBeam)" />

        {/* Neural Network Pathways in Beam */}
        <g stroke="#F5C518" strokeOpacity="0.3" strokeDasharray="3 3">
          <line x1="90" y1="130" x2="310" y2="100" />
          <line x1="90" y1="130" x2="340" y2="180" />
          <line x1="90" y1="130" x2="300" y2="280" />
          <line x1="310" y1="100" x2="520" y2="80" />
          <line x1="340" y1="180" x2="550" y2="190" />
          <line x1="300" y1="280" x2="530" y2="310" />
        </g>

        {/* 35mm Film Strip Curve Left */}
        <g transform="translate(40, 60)">
          {/* Projector Lens Outer */}
          <rect x="0" y="40" width="60" height="70" rx="6" fill="#18181B" stroke="#F5C518" strokeWidth="2" />
          <circle cx="50" cy="75" r="28" fill="#27272A" stroke="#F5C518" strokeWidth="2.5" />
          <circle cx="50" cy="75" r="14" fill="#09090B" stroke="#FFF2A3" strokeWidth="1.5" />

          {/* Film Reel Sprocket Wheel Top */}
          <circle cx="20" cy="-10" r="38" fill="#18181B" stroke="#71717A" strokeWidth="2" />
          <circle cx="20" cy="-10" r="8" fill="#F5C518" />
          <circle cx="20" cy="-28" r="4" fill="#3F3F46" />
          <circle cx="20" cy="8" r="4" fill="#3F3F46" />
          <circle cx="2" cy="-10" r="4" fill="#3F3F46" />
          <circle cx="38" cy="-10" r="4" fill="#3F3F46" />
        </g>

        {/* Neural Nodes Floating in Cinema Light */}
        {/* Node 1: Fast Release Timing */}
        <g transform="translate(290, 85)">
          <rect x="-15" y="-15" width="130" height="42" rx="8" fill="#18181B" stroke="#F5C518" strokeWidth="1.5" />
          <circle cx="0" cy="6" r="6" fill="#F5C518" />
          <text x="14" y="11" fill="#F4F4F5" fontSize="12" fontWeight="600" fontFamily="sans-serif">2–3h Fast Gate</text>
        </g>

        {/* Node 2: Bayesian Top 250 */}
        <g transform="translate(320, 165)">
          <rect x="-15" y="-15" width="150" height="42" rx="8" fill="#18181B" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="0" cy="6" r="6" fill="#38BDF8" />
          <text x="14" y="11" fill="#F4F4F5" fontSize="12" fontWeight="600" fontFamily="sans-serif">Bayesian Shrinkage</text>
        </g>

        {/* Node 3: STARmeter */}
        <g transform="translate(280, 265)">
          <rect x="-15" y="-15" width="135" height="42" rx="8" fill="#18181B" stroke="#F5C518" strokeWidth="1.5" />
          <circle cx="0" cy="6" r="6" fill="#F5C518" />
          <text x="14" y="11" fill="#F4F4F5" fontSize="12" fontWeight="600" fontFamily="sans-serif">STARmeter Click</text>
        </g>

        {/* Transformer Neural Layer Right */}
        <g transform="translate(500, 40)">
          <rect x="0" y="20" width="170" height="290" rx="12" fill="#121217" stroke="#27272A" strokeWidth="1.5" />
          
          <text x="20" y="52" fill="#F5C518" fontSize="13" fontWeight="700" fontFamily="sans-serif">
            TRANSFORMER AI
          </text>
          <text x="20" y="70" fill="#A1A1AA" fontSize="10" fontFamily="sans-serif">
            Aspect Opinion Extraction
          </text>

          {/* Aspect Bars */}
          <g transform="translate(20, 90)">
            <text x="0" y="12" fill="#E4E4E7" fontSize="11" fontFamily="sans-serif">Direction</text>
            <rect x="0" y="18" width="130" height="6" rx="3" fill="#27272A" />
            <rect x="0" y="18" width="112" height="6" rx="3" fill="url(#goldGrad)" />
            <text x="116" y="12" fill="#F5C518" fontSize="10" fontWeight="600" fontFamily="monospace">9.2</text>
          </g>

          <g transform="translate(20, 132)">
            <text x="0" y="12" fill="#E4E4E7" fontSize="11" fontFamily="sans-serif">Acting & Cast</text>
            <rect x="0" y="18" width="130" height="6" rx="3" fill="#27272A" />
            <rect x="0" y="18" width="100" height="6" rx="3" fill="url(#cyanGrad)" />
            <text x="116" y="12" fill="#38BDF8" fontSize="10" fontWeight="600" fontFamily="monospace">8.5</text>
          </g>

          <g transform="translate(20, 174)">
            <text x="0" y="12" fill="#E4E4E7" fontSize="11" fontFamily="sans-serif">Cinematography</text>
            <rect x="0" y="18" width="130" height="6" rx="3" fill="#27272A" />
            <rect x="0" y="18" width="124" height="6" rx="3" fill="url(#goldGrad)" />
            <text x="116" y="12" fill="#F5C518" fontSize="10" fontWeight="600" fontFamily="monospace">9.6</text>
          </g>

          <g transform="translate(20, 216)">
            <text x="0" y="12" fill="#E4E4E7" fontSize="11" fontFamily="sans-serif">Screenplay</text>
            <rect x="0" y="18" width="130" height="6" rx="3" fill="#27272A" />
            <rect x="0" y="18" width="82" height="6" rx="3" fill="#E11D48" />
            <text x="116" y="12" fill="#FB7185" fontSize="10" fontWeight="600" fontFamily="monospace">6.8</text>
          </g>

          {/* Rating Badge */}
          <g transform="translate(20, 255)">
            <rect x="0" y="0" width="130" height="34" rx="6" fill="#F5C518" />
            <text x="16" y="22" fill="#09090B" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              SYNTHETIC 8.5★
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
