import VideoHero from '@/components/VideoHero';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import OrderSection from '@/components/OrderSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-[#0a1931]">
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
