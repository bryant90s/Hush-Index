import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cta" className="py-20 lg:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl tracking-tight text-white mb-6">
            Ready to fill more seats?
          </h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Join 2,400+ locations using Bryant to turn one-time diners into regulars. Start your free 14-day trial—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-all hover:scale-105 flex items-center justify-center gap-2 group font-medium">
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-all flex items-center justify-center gap-2 font-medium">
              <Calendar size={20} />
              Book a Demo
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              14-day free trial
            </div>
            <div className="hidden sm:block w-1 h-1 bg-neutral-600 rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              No credit card required
            </div>
            <div className="hidden sm:block w-1 h-1 bg-neutral-600 rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Cancel anytime
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-neutral-800"
        >
          <p className="text-neutral-500 text-sm mb-6">Trusted by leading restaurant brands</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {['Flavor & Co', 'Terra Kitchen', 'Urban Grill', 'Harvest Table', 'Bistro Group'].map((brand, index) => (
              <div key={index} className="text-neutral-400 font-medium text-lg">
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
