import React from 'react';

export default function PricingSection() {
  return (
    <section id="shop" className="py-20 px-6 md:px-12 bg-[#fdfaf5] text-slate-800 flex justify-center border-t border-b border-brand-gold/15">
      <div className="max-w-5xl w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider text-brand-gold uppercase mb-2">
            In-Season Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-deep">
            Fresh & Frozen Blueberries
          </h2>
          <p className="mt-4 text-slate-600 text-sm">
            Handpicked daily, 100% spray-free, and prepared with care for our local community.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Card 1: Fresh Blueberries */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col h-full">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest bg-emerald-50 self-start px-3 py-1 rounded-full mb-4">
              Picked Daily & Spray-Free
            </span>
            <h3 className="text-2xl font-serif font-bold text-brand-blue-deep mb-6">
              Fresh Blueberries
            </h3>
            
            <div className="space-y-6 flex-1">
              {/* Per Pound Pricing */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-800">Regular Orders</h4>
                  <p className="text-xs text-slate-500">Orders under 100 lbs</p>
                </div>
                <span className="text-2xl font-bold text-brand-blue-deep font-serif">$3.95<span className="text-sm font-sans font-normal text-slate-500">/lb</span></span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-800">Bulk Orders</h4>
                  <p className="text-xs text-slate-500">Orders of 100 lbs or more</p>
                </div>
                <span className="text-2xl font-bold text-brand-gold font-serif">$3.75<span className="text-sm font-sans font-normal text-slate-500">/lb</span></span>
              </div>

              {/* Box Packages */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-800">5 lb Blueberry Box</h4>
                  <p className="text-xs text-slate-500">Contains ~4.4 lbs of berries + reusable box</p>
                </div>
                <span className="text-2xl font-bold text-brand-blue-deep font-serif">$20</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-800">10 lb Blueberry Box</h4>
                  <p className="text-xs text-slate-500">Contains ~9.3 lbs of berries + reusable box</p>
                </div>
                <span className="text-2xl font-bold text-brand-blue-deep font-serif">$40</span>
              </div>
            </div>

            {/* Eco Info Box */}
            <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-800 mb-1">♻️ Eco-Friendly Packaging</p>
              Our cardboard blueberry boxes are reusable and refillable. Bring them back on your next visit to help reduce waste and speed up pickup. For large custom orders, please bring your own boxes or containers.
            </div>
          </div>

          {/* Card 2: Frozen Blueberries */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col h-full md:mt-0">
            <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest bg-sky-50 self-start px-3 py-1 rounded-full mb-4">
              Individually Quick Frozen (IQF)
            </span>
            <h3 className="text-2xl font-serif font-bold text-brand-blue-deep mb-6">
              Frozen Blueberries
            </h3>
            
            <div className="space-y-6 flex-1">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-800">4 lb Bag Package</h4>
                  <p className="text-xs text-slate-500">Sorted to strict quality standards</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-brand-blue-deep font-serif">$18<span className="text-sm font-sans font-normal text-slate-500">/each</span></span>
                  <p className="text-[10px] text-slate-400">Equivalent to $4.50/lb</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-sky-50/50 border border-sky-100/50 text-xs text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-800 mb-1">⏱️ Special In-Season Pricing</p>
              This pricing is guaranteed during the harvest season. Prices are subject to increase after September.
            </div>

            {/* Preparation Tip */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-800 mb-1">💡 Preparation & Storage</p>
              Berries are sorted and frozen individually for easy measuring. To serve, simply remove the desired amount from the freezer, rinse lightly with cold water, and enjoy in smoothies, baking, or oatmeal.
            </div>

            {/* Image Placeholder container */}
            <div className="mt-6 rounded-xl overflow-hidden aspect-[16/6] border border-slate-100 shadow-inner">
              <img
                src="/blueberry_muffins.jpg"
                alt="Delicious muffins made with frozen blueberries"
                className="w-full h-full object-cover grayscale-[20%] opacity-90"
              />
            </div>
          </div>

        </div>

        {/* Combine & Save Note */}
        <p className="mt-8 text-center text-xs text-slate-500">
          💡 <strong>Pro Tip:</strong> Prepay and combine orders with friends or family to qualify for the <strong>$3.75/lb Bulk Pricing</strong>.
        </p>

      </div>
    </section>
  );
}
