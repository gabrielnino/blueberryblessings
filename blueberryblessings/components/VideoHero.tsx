'use client';

import { useState, useEffect } from 'react';

// To change the background video in the future, simply update this YouTube video ID.
// Make sure the video is public or unlisted, and allows embedding.
const YOUTUBE_VIDEO_ID = 'civWjg2_Ww4';

export default function VideoHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Fallback: force show the video after 1.5 seconds in case the browser
    // doesn't fire the iframe onLoad event reliably.
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-blue-deep text-white">
      {/* 1. Video Background Container (z-0 / base layer) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Fallback Background (Deep Blue) */}
        <div className="absolute inset-0 bg-brand-blue-deep" />
        
        {/* YouTube Video iframe Embed */}
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          title="Blueberry Fields Background Video"
          allow="autoplay; encrypted-media"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] transition-opacity duration-1000 ease-out border-0 ${
            isVideoLoaded ? 'opacity-70' : 'opacity-0'
          }`}
          onLoad={() => setIsVideoLoaded(true)}
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* 2. Premium Dark Blue Semi-Transparent Overlay (z-10 / middle layer) */}
      {/* Positioned above the video to ensure text readability */}
      <div className="absolute inset-0 bg-brand-blue-deep/60 z-10 pointer-events-none" />

      {/* 3. Centered Content Container (z-20 / top layer) */}
      {/* Explicitly set to z-20 so it renders on top of the overlay and video */}
      <div className="relative z-20 max-w-5xl px-6 md:px-12 text-center flex flex-col items-center justify-center select-text">
        
        {/* Accent Tagline Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-blue-accent/65 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-brand-gold animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
          British Columbia Blueberry Industry
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-white animate-fade-in-up animation-delay-200">
          Growing Together for a <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-gold">
            Stronger Blueberry Future
          </span>
        </h1>

        {/* Subtitle / Supporting copy */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-200/90 font-light leading-relaxed animate-fade-in-up animation-delay-400">
          Supporting growers, strengthening communities, and celebrating British Columbia’s blueberry industry.
        </p>

        {/* Call to Actions (Buttons) */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto animate-fade-in-up animation-delay-400">
          <a
            href="#learn-more"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-blue-deep font-semibold text-center transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-gold/20"
          >
            Learn More
          </a>
          <a
            href="#join"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-center border-2 border-white/60 hover:border-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Join the Community
          </a>
        </div>
      </div>

      {/* Subtle background highlight for extra premium feeling (z-10 / middle layer) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue-light/10 blur-[120px] rounded-full pointer-events-none z-10" />
    </div>
  );
}
