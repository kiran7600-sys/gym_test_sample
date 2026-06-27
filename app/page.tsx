import Hero from '@/components/sections/Hero';
import BrandTicker from '@/components/sections/BrandTicker';
import About from '@/components/sections/About';
import Equipment from '@/components/sections/Equipment';
import Membership from '@/components/sections/Membership';
import Trainers from '@/components/sections/Trainers';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandTicker />
      <About />
      <Equipment />
      <Membership />
      <Trainers />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
