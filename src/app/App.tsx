import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BeforeAfter } from './components/BeforeAfter';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <BeforeAfter />
      <SocialProof />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
