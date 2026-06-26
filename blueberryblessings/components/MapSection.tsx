import React from 'react';

export default function MapSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-[#fdfaf5] text-slate-800 flex justify-center border-t border-brand-gold/15">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: SVG Map (7 cols) */}
        <div className="md:col-span-7 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100 relative bg-[#f4f6f0]">
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            {/* Grass/Background grid */}
            <rect width="400" height="300" fill="#f4f6f0" />
            
            {/* Styled roads */}
            <path d="M -20,120 L 420,120" stroke="#ffffff" strokeWidth="24" />
            <path d="M 130,-20 L 130,320" stroke="#ffffff" strokeWidth="24" />
            <path d="M 330,-20 L 210,320" stroke="#ffffff" strokeWidth="18" />
            
            {/* Styled Green Areas / Blocks */}
            <rect x="20" y="20" width="85" height="70" rx="8" fill="#e2ebd5" />
            <rect x="160" y="20" width="140" height="75" rx="8" fill="#e2ebd5" />
            <rect x="240" y="160" width="140" height="110" rx="8" fill="#e2ebd5" />
            <rect x="20" y="160" width="85" height="110" rx="8" fill="#e2ebd5" />

            {/* Pin marker shadow */}
            <ellipse cx="200" cy="140" rx="12" ry="5" fill="rgba(0,0,0,0.12)" />
            
            {/* Red pin marker */}
            <path 
              d="M 200,98 C 185,98 178,110 200,140 C 222,110 215,98 200,98 Z" 
              fill="#d9383a" 
            />
            <circle cx="200" cy="112" r="5" fill="#ffffff" />
          </svg>
        </div>

        {/* Right Column: Address & Google Maps link (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-center text-center md:text-left">
          <div className="text-xs font-semibold tracking-wider text-brand-gold uppercase mb-2">
            Location
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-blue-deep mb-6">
            Visit Our Farm
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Come visit us directly at the farm to pick up your daily harvested fresh blueberries! We are located in the heart of British Columbia's premier growing region.
          </p>

          <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm text-slate-700 text-sm leading-relaxed mb-8">
            📍 <strong>Farm Address:</strong><br />
            333 Calaraluira Street, Suresalla, TA 22528
          </div>

          <a
            href="https://cutt.ly/1TCnpf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-white uppercase text-xs font-semibold tracking-widest rounded-md text-center transition-all duration-300 shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/20 transform hover:-translate-y-[1px]"
          >
            🗺️ Open Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
