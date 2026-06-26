import React from 'react';

export default function OrderSection() {
  return (
    <section id="order" className="py-20 px-6 md:px-12 bg-white text-slate-800 flex justify-center">
      <div className="max-w-5xl w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider text-brand-gold uppercase mb-2">
            Ordering Process
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-deep">
            How to Place Your Order
          </h2>
          <p className="mt-4 text-slate-600 text-sm">
            Orders are filled in the order they are received. Early ordering is highly recommended, especially for larger quantities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Requirements (7 cols) */}
          <div className="md:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-serif font-bold text-brand-blue-deep mb-6">
              📋 Information to Provide
            </h3>
            
            <p className="text-xs text-slate-500 mb-6">
              Please include the following details in your email or text message to help us prepare your pickup:
            </p>

            <ul className="space-y-4">
              {[
                { label: 'First & Last Name', desc: 'For reservation tracking.' },
                { label: 'Cell Number', desc: 'For pickup coordinates and notifications.' },
                { label: 'Email Address', desc: 'For order confirmation and receipt.' },
                { label: 'Quantity Requested', desc: 'Specify pounds (lbs), fresh boxes, or frozen bags.' },
                { label: 'Preferred Pickup Timeframe', desc: 'Let us know when you plan to arrive.' },
                { label: 'Dates You\'ll Be Away in the Summer', desc: 'Helps us schedule harvesting slots.' },
                { label: 'Bringing Your Own Containers?', desc: 'Greatly appreciated for custom fresh orders.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 leading-none mb-1">{item.label}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-100 text-xs text-amber-900/80 leading-relaxed">
              <strong>💳 Payment Preference:</strong> We prefer payment by <strong>cash</strong> whenever possible. If cash is not convenient, we are happy to accept <strong>eTransfers</strong>.
            </div>
          </div>

          {/* Right Column: Contact & Hours (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Contact Card 1: Text / Call */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold">Contact Method A</span>
              <h4 className="text-base font-serif font-bold text-brand-blue-deep mt-1 mb-2">Cell & Text Messages</h4>
              <a 
                href="tel:6048089060" 
                className="text-xl font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-200 block mb-2"
              >
                📲 604-808-9060
              </a>
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong>Texts preferred.</strong> Please leave a voice message if you are not tech-savvy.
              </p>
            </div>

            {/* Contact Card 2: Email */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold">Contact Method B</span>
              <h4 className="text-base font-serif font-bold text-brand-blue-deep mt-1 mb-2">Email Orders & eTransfers</h4>
              <a 
                href="mailto:tastyblueberries@gmail.com" 
                className="text-sm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-200 break-words block mb-2"
              >
                ✉️ tastyblueberries@gmail.com
              </a>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send your order details and secure eTransfers to this address.
              </p>
            </div>

            {/* Farm Hours Card */}
            <div className="bg-[#0a1931] p-6 rounded-2xl text-white shadow-sm">
              <h4 className="text-base font-serif font-bold text-brand-gold mb-3">🕒 Farm Hours</h4>
              <p className="text-2xl font-bold font-serif mb-1">12 PM - 9 PM</p>
              <p className="text-xs text-slate-300 mb-4">Every day (weather permitting)</p>
              
              <div className="text-[11px] text-slate-300/90 leading-relaxed space-y-2 border-t border-slate-700/50 pt-3">
                <p>
                  🌧️ <strong>Weather Notice:</strong> Harvesting schedules depend on weather conditions. If rain is forecast or has recently occurred, please contact us in advance to confirm harvesting.
                </p>
                <p>
                  🚗 <strong>Special Arrangements:</strong> If you require pickup outside of regular hours, let us know ahead of time and we will do our best to accommodate you.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
