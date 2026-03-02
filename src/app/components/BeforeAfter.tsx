import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';

const beforePoints = [
  'Using 4-6 disconnected tools',
  'Manual campaign creation per location',
  'No visibility into ad performance',
  'Customers fall through the cracks',
  'Inconsistent branding across locations',
  '$3,000+ monthly tool costs',
];

const afterPoints = [
  'One unified platform',
  'Deploy campaigns to all locations instantly',
  'Real-time ROI tracking per dollar spent',
  'Automated retention campaigns',
  'Brand consistency with local flexibility',
  'Average $800/month total cost',
];

const metrics = [
  { label: 'Repeat Customer Rate', before: '18%', after: '49%', change: '+172%' },
  { label: 'Marketing Efficiency', before: '1.8x ROI', after: '5.2x ROI', change: '+189%' },
  { label: 'Time Saved Per Week', before: '0hrs', after: '12hrs', change: '12hrs' },
];

export function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="results" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Stop guessing. Start growing.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Here's what changes when you move from fragmented tools to Bryant
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900">Before Bryant</h3>
            </div>
            <ul className="space-y-4">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">With Bryant</h3>
              </div>
              <ul className="space-y-4">
                {afterPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-100">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Average results across 100+ restaurant groups</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm text-neutral-600 mb-4">{metric.label}</div>
                <div className="flex items-end gap-4 mb-3">
                  <div>
                    <div className="text-xs text-neutral-500 mb-1">Before</div>
                    <div className="text-2xl font-semibold text-neutral-400">{metric.before}</div>
                  </div>
                  <div className="flex-1 border-t border-dashed border-neutral-300 mb-3" />
                  <div>
                    <div className="text-xs text-neutral-500 mb-1">After</div>
                    <div className="text-2xl font-semibold text-neutral-900">{metric.after}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-2 rounded-lg inline-block">
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
