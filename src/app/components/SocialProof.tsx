import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Bryant paid for itself in the first month. We went from 22% repeat rate to 41% in 90 days. The automated win-back campaigns alone recovered $68K in lost revenue.",
    author: "Marcus Chen",
    role: "Director of Operations",
    company: "Flavor & Co (14 locations)",
    image: "https://images.unsplash.com/photo-1763867641258-c8ea40860f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjB0YWJsZXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjIzOTg1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote: "We were bleeding money on Facebook ads with zero tracking. Bryant showed us exactly which campaigns drove actual visits. Cut our ad spend by 40% while doubling foot traffic.",
    author: "Sarah Martinez",
    role: "Owner & CEO",
    company: "Terra Kitchen (8 locations)",
    image: "https://images.unsplash.com/photo-1642337707259-0fdcc8fd06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRpdmVyc2UlMjByZXN0YXVyYW50JTIwc3RhZmZ8ZW58MXx8fHwxNzcyMjM5ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote: "Finally, one system that works. No more switching between Mailchimp, Toast, Square, and three other platforms. My managers actually use it because it's dead simple.",
    author: "David Park",
    role: "Franchise Owner",
    company: "Urban Grill Group (22 locations)",
    image: "https://images.unsplash.com/photo-1770509634681-be8be680968a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzcyMjM5ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const stats = [
  { value: '2,400+', label: 'Restaurant Locations' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '38%', label: 'Avg. Repeat Rate Increase' },
  { value: '$127K', label: 'Avg. Annual Revenue Lift' },
];

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-semibold text-neutral-900 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight text-center mb-6">
            Built for operators, by operators
          </h2>
          <p className="text-xl text-neutral-600 text-center max-w-3xl mx-auto mb-16">
            See what restaurant groups are saying about Bryant
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                    <div className="text-sm text-neutral-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
