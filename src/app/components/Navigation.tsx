import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-neutral-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold text-neutral-900">Bryant</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="px-5 py-2.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden py-4 border-t border-neutral-200 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-left px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="mx-4 px-5 py-2.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
