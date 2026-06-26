import VideoHero from '@/components/VideoHero';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-brand-blue-deep min-h-screen">
      {/* Fullscreen Video Hero Section */}
      <VideoHero />
      
      {/* Core values / Info section */}
      <section id="learn-more" className="py-24 px-6 md:px-12 bg-white text-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-deep tracking-tight">
              Nurturing British Columbia's Blueberry Legacy
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              From family-owned farms to global tables, British Columbia is proud to be one of the largest highbush blueberry growing regions in the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-blue-accent/10 flex items-center justify-center text-brand-blue-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-blue-deep mb-3">Grower Support</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Providing tools, educational resources, and agricultural research to help farmers maximize crop health, yield, and sustainability.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-blue-accent/10 flex items-center justify-center text-brand-blue-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-blue-deep mb-3">Community Growth</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Strengthening ties through local events, school meal programs, and sustainable farming initiatives that benefit British Columbia families.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-blue-accent/10 flex items-center justify-center text-brand-blue-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-blue-deep mb-3">Industry Leadership</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Driving innovation, high-quality production standards, and global marketing to safeguard the economic prosperity of BC agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-brand-blue-deep text-slate-400 border-t border-brand-blue-accent/30 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-semibold text-white tracking-wide uppercase">BC Blueberry Growers</span>
            <span className="text-xs">© {new Date().getFullYear()} Blueberry Blessings. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
