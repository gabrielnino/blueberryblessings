import React from 'react';

export default function Logo({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Double B Monogram - Top Loop (Intertwined) */}
      <path
        d="M 250,210 C 235,160 190,110 135,110 C 70,110 50,160 50,215 C 50,270 85,300 145,305 C 190,308 230,260 250,225 C 270,260 310,308 355,305 C 415,300 450,270 450,215 C 450,160 430,110 365,110 C 310,110 265,160 250,210 Z"
        stroke="#d4af37"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Outer Double B Monogram - Bottom Loop (Intertwined) */}
      <path
        d="M 250,225 C 230,265 190,390 135,390 C 70,390 50,340 50,285 C 50,230 85,200 145,195 C 190,192 230,240 250,275 C 270,240 310,192 355,195 C 415,200 450,230 450,285 C 450,340 430,390 365,390 C 310,390 270,265 250,225 Z"
        stroke="#d4af37"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Centered Drop shape */}
      <path
        d="M 250,235 C 225,280 200,340 250,375 C 300,340 275,280 250,235 Z"
        stroke="#d4af37"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#0a1931"
      />
      {/* Inside Sprout Leaf Stem */}
      <path
        d="M 250,350 L 250,290"
        stroke="#d4af37"
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* Little dot at the top of sprout */}
      <circle cx="250" cy="276" r="12" fill="#d4af37" />
      {/* Leaf pair 1 (Bottom) */}
      <path
        d="M 250,335 C 238,328 230,330 230,336 C 230,342 242,342 250,338"
        stroke="#d4af37"
        strokeWidth="10"
        fill="#d4af37"
      />
      <path
        d="M 250,335 C 262,328 270,330 270,336 C 270,342 258,342 250,338"
        stroke="#d4af37"
        strokeWidth="10"
        fill="#d4af37"
      />
      {/* Leaf pair 2 (Top) */}
      <path
        d="M 250,312 C 238,305 230,307 230,313 C 230,319 242,319 250,315"
        stroke="#d4af37"
        strokeWidth="10"
        fill="#d4af37"
      />
      <path
        d="M 250,312 C 262,305 270,307 270,313 C 270,319 258,319 250,315"
        stroke="#d4af37"
        strokeWidth="10"
        fill="#d4af37"
      />
    </svg>
  );
}
