import { StarsCanvas } from '@/canvas';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Footer,
  Projects,
  Social,
} from '@/components';

export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Social />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Footer />
        </div>
      </div>
    </>
  );
}
