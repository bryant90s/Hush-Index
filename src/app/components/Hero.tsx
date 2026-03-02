import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-neutral-700">Trusted by 2,400+ locations</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6">
              Turn one-time diners into regulars
            </h1>

            <p className="text-xl text-neutral-600 mb-8 max-w-xl">
              Stop losing customers to disconnected tools. Bryant unifies marketing, loyalty, and retention across all your locations—so you spend less and fill more seats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-neutral-300 text-neutral-900 rounded-lg hover:border-neutral-900 transition-colors">
                See It In Action
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-semibold text-neutral-900">38%</div>
                <div className="text-sm text-neutral-600">Avg. repeat rate increase</div>
              </div>
              <div className="w-px h-12 bg-neutral-200" />
              <div>
                <div className="text-3xl font-semibold text-neutral-900">$127K</div>
                <div className="text-sm text-neutral-600">Avg. annual revenue lift</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
              <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1763054761278-38579ad7225e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBjdXN0b21lcnN8ZW58MXx8fHwxNzcyMjM5ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern restaurant interior"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-neutral-200 p-4 w-64"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-neutral-600">Customer Lifetime Value</span>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">+42%</span>
              </div>
              <div className="text-2xl font-semibold text-neutral-900">$2,847</div>
              <div className="mt-3 h-2 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neutral-900 to-neutral-600"
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-3xl -z-10 transform rotate-3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
