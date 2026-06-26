import VideoHero from '@/components/VideoHero';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import OrderSection from '@/components/OrderSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Blueberry Blessings',
    description: 'Blueberry Blessings is a premium spray-free blueberry farm in Suresalla, British Columbia, offering handpicked fresh and frozen blueberries directly to the community.',
    logo: 'https://blueberryblessings.ca/icon.svg',
    image: 'https://blueberryblessings.ca/blueberry_basket.jpg',
    telephone: '604-808-9060',
    email: 'tastyblueberries@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '333 Calaraluira Street',
      addressLocality: 'Suresalla',
      addressRegion: 'BC',
      postalCode: 'TA 22528',
      addressCountry: 'CA',
    },
    url: 'https://blueberryblessings.ca',
    hasMap: 'https://cutt.ly/1TCnpf',
    priceRange: '$',
    paymentAccepted: 'Cash, eTransfer',
    currenciesAccepted: 'CAD',
    sameAs: [
      'https://facebook.com',
      'https://instagram.com',
      'https://youtube.com'
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '12:00',
      closes: '21:00',
    },
  };

  return (
    <main className="flex-1 flex flex-col min-h-screen bg-[#0a1931]">
      {/* JSON-LD Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Fullscreen Video Hero with Header */}
      <VideoHero />
      
      {/* 2. About & 2026 Harvest Season Section */}
      <AboutSection />
      
      {/* 3. Products & Pricing Section */}
      <PricingSection />
      
      {/* 4. Ordering Guidelines & Contact Details */}
      <OrderSection />
      
      {/* 5. Google Maps Location Section */}
      <MapSection />
      
      {/* 6. Footer bar */}
      <Footer />
    </main>
  );
}
