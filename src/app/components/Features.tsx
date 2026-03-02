import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Users, BarChart3, Zap, MessageSquare, Calendar } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Unified Marketing',
    description: 'Launch campaigns across SMS, email, and social from one place. No more logging into 6 different tools.',
    mockup: 'campaign',
  },
  {
    icon: Users,
    title: 'Smart Loyalty',
    description: 'Automatically reward repeat customers and identify high-value segments across all locations.',
    mockup: 'loyalty',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'See exactly which marketing drives revenue. Track per-location, per-campaign, per-dollar spent.',
    mockup: 'analytics',
  },
  {
    icon: Zap,
    title: 'Automated Retention',
    description: 'Win back lapsed customers with triggered campaigns based on visit patterns and preferences.',
    mockup: 'automation',
  },
  {
    icon: MessageSquare,
    title: 'Review Management',
    description: 'Monitor and respond to reviews from Google, Yelp, and more in a single dashboard.',
    mockup: 'reviews',
  },
  {
    icon: Calendar,
    title: 'Multi-Location Sync',
    description: 'Deploy consistent branding and messaging while allowing local customization when needed.',
    mockup: 'locations',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 h-full">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
            <Icon className="w-6 h-6 text-neutral-700 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
            <p className="text-neutral-600">{feature.description}</p>
          </div>
        </div>

        {/* UI Mockup */}
        <div className="mt-6 bg-neutral-50 rounded-lg p-4 border border-neutral-200">
          <UIMockup type={feature.mockup} />
        </div>
      </div>
    </motion.div>
  );
}

function UIMockup({ type }: { type: string }) {
  switch (type) {
    case 'campaign':
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs">📱</div>
            <div className="flex-1 h-3 bg-neutral-200 rounded" />
            <div className="w-16 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center">Live</div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-2 bg-neutral-300 rounded" />
            <div className="flex-1 h-2 bg-neutral-200 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 bg-gradient-to-br from-neutral-200 to-neutral-100 rounded" />
            <div className="h-12 bg-gradient-to-br from-neutral-300 to-neutral-200 rounded" />
            <div className="h-12 bg-gradient-to-br from-neutral-200 to-neutral-100 rounded" />
          </div>
        </div>
      );
    case 'loyalty':
      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full" />
              <div className="h-3 w-24 bg-neutral-300 rounded" />
            </div>
            <div className="text-xs font-semibold text-purple-600">⭐ Gold</div>
          </div>
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-purple-400" />
          </div>
          <div className="flex justify-between text-xs text-neutral-500">
            <span>12 visits</span>
            <span>Next reward: 3 visits</span>
          </div>
        </div>
      );
    case 'analytics':
      return (
        <div className="space-y-3">
          <div className="flex items-end gap-1.5 h-24">
            {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-neutral-900 to-neutral-700 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs text-neutral-500">Revenue Impact</div>
            <div className="text-sm font-semibold text-green-600">+$23.4K</div>
          </div>
        </div>
      );
    case 'automation':
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs">⚡</div>
            <div className="flex-1 h-2.5 bg-neutral-300 rounded" />
          </div>
          <div className="ml-3 border-l-2 border-neutral-200 pl-3 space-y-2">
            <div className="h-2 w-32 bg-neutral-200 rounded" />
            <div className="h-2 w-40 bg-neutral-200 rounded" />
            <div className="h-2 w-36 bg-neutral-200 rounded" />
          </div>
          <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Active
          </div>
        </div>
      );
    case 'reviews':
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="text-yellow-400 text-sm">★</div>
              ))}
            </div>
            <div className="text-xs text-neutral-500">2h ago</div>
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-neutral-300 rounded w-full" />
            <div className="h-2 bg-neutral-200 rounded w-5/6" />
          </div>
          <div className="pt-2 border-t border-neutral-200">
            <div className="h-6 bg-neutral-900 rounded text-white text-xs flex items-center justify-center">
              Reply
            </div>
          </div>
        </div>
      );
    case 'locations':
      return (
        <div className="space-y-2">
          {['Downtown', 'Westside', 'Airport'].map((loc, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-white rounded border border-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="text-xs font-medium">{loc}</div>
              </div>
              <div className="text-xs text-neutral-500">Synced</div>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Built specifically for multi-location restaurants. No bloated features. No wasted budget. Just what drives repeat business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
