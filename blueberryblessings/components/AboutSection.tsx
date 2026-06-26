import React from 'react';
import Image from 'next/image';
import blueberryHarvest from '@/public/blueberry_harvest.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white text-slate-800 flex justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
        
        {/* Left Column: Image (5 cols) */}
        <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
          <Image
            src={blueberryHarvest}
            alt="Harvesting fresh organic blueberries"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right Column: Narrative (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="inline-block mb-3 text-xs font-semibold tracking-wider text-brand-gold uppercase">
            Harvest Season 2026
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-deep mb-6">
            Starting Saturday, June 27th!
          </h2>
          
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              Dear friend of our farm, we are excited to welcome you back for another season of fresh, spray-free blueberries and to share some exciting new developments taking place at our farm.
            </p>
            <p>
              We've been working diligently to prepare for another wonderful blueberry season and have been carefully monitoring the berries as they ripen in the summer sunshine. 
              The crop is looking excellent, and we are hoping to begin harvesting our first variety of the season this coming weekend.
            </p>
            <p>
              The earliest harvests often produce some of the most flavorful berries of the year and are eagerly anticipated by many of our returning friends. To enjoy some of the best berries this season has to offer, we encourage you to place your order early before the busiest part of the harvest season begins!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
