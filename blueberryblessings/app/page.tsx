import VideoHero from '@/components/VideoHero';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-[#0a1931]">
      {/* 1. Fullscreen Video Hero with Header */}
      <VideoHero />
      
      {/* 2. Three-Card Sections (Cream background from mockup) */}
      <section id="content" className="py-20 px-6 md:px-12 bg-[#fdfaf5] text-slate-800 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Our Harvest */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src="/blueberry_harvest.jpg" 
                  alt="Harvesting organic blueberries"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-semibold text-brand-gold mb-4">
                  Our Harvest
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  We handpick each berry at the peak of ripeness in our fields to ensure you receive only the finest quality nature has to offer.
                </p>
              </div>
            </div>

            {/* Card 2: Natural Delights */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src="/blueberry_muffins.jpg" 
                  alt="Freshly baked blueberry muffins"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-semibold text-brand-gold mb-4">
                  Natural Delights
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Savor our freshly baked goods, made daily with organic blueberries, local grains, and wholesome ingredients.
                </p>
              </div>
            </div>

            {/* Card 3: Visit Us */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Scalable vector SVG Map mimicking the mockup */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#f4f6f0]">
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
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-semibold text-brand-gold mb-4">
                  Visit Us
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  333 Calaraluira Street,<br />
                  Suresalla, TA 22528
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Footer Section (Dark Blue bar with gold borders and social icons) */}
      <footer className="py-8 bg-[#0a1931] border-t border-b border-brand-gold/30 text-brand-gold text-sm w-full flex justify-center z-20">
        <div className="max-w-6xl w-full flex flex-col items-center gap-4">
          {/* Social Icons in Gold */}
          <div className="flex gap-8 justify-center">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-200"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          {/* Small Copyright */}
          <span className="text-[10px] tracking-widest uppercase text-brand-gold/60">
            © {new Date().getFullYear()} Blueberry Blessings. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
