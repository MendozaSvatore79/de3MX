import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import Mission from '@/components/Mission';
import OurMissionSection from '@/components/OurMissionSection';
import Technologies from '@/components/Technologies';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <Mission />
      <div className="pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <OurMissionSection />
      </div>
      <div className="pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <Technologies />
      </div>
      <div className="pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <Clients />
      </div>
      <div className="pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <Services />
      </div>
      <div className="pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <Reviews />
      </div>
      <div className="pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <Contact />
      </div>
      <div className="pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <Footer />
      </div>
    </div>
  );
}
