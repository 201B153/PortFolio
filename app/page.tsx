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
import LazyLoadComponent from '@/wrapper/lazyLoading';

export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <LazyLoadComponent>
          <Experience />
        </LazyLoadComponent>
        <Tech />
        <Projects />
        <Social />
        <div className="relative z-0">
          <Contact />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Footer />
        </div>
      </div>
    </>
  );
}
