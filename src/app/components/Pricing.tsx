import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'For single or small restaurant groups',
    monthlyPrice: 299,
    annualPrice: 249,
    locations: 'Up to 3 locations',
    features: [
      'Unified marketing dashboard',
      'Email & SMS campaigns',
      'Basic loyalty program',
      'Performance analytics',
      'Review monitoring',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    description: 'For growing multi-location brands',
    monthlyPrice: 699,
    annualPrice: 599,
    locations: 'Up to 15 locations',
    features: [
      'Everything in Starter',
      'Advanced segmentation',
      'Automated retention campaigns',
      'Multi-location sync',
      'Custom branding',
      'Priority support',
      'Dedicated account manager',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large restaurant enterprises',
    monthlyPrice: null,
    annualPrice: null,
    locations: 'Unlimited locations',
    features: [
      'Everything in Growth',
      'White-label options',
      'Custom integrations',
      'Advanced analytics & reporting',
      'Multi-brand support',
      '24/7 phone support',
      'Custom onboarding',
      'SLA guarantee',
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            No hidden fees. No per-message charges. Just straightforward pricing that scales with your business.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-neutral-100 rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full transition-all ${
                !isAnnual
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Annual
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'border-2 border-neutral-900 shadow-xl'
                  : 'border border-neutral-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-neutral-900 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  {plan.monthlyPrice ? (
                    <>
                      <span className="text-5xl font-semibold text-neutral-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-neutral-600">/mo</span>
                    </>
                  ) : (
                    <span className="text-5xl font-semibold text-neutral-900">Custom</span>
                  )}
                </div>
                <p className="text-sm text-neutral-600 mt-2">{plan.locations}</p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all mb-6 ${
                  plan.popular
                    ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                    : 'border-2 border-neutral-300 text-neutral-900 hover:border-neutral-900'
                }`}
              >
                {plan.monthlyPrice ? 'Start Free Trial' : 'Contact Sales'}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600">
            All plans include a 14-day free trial. No credit card required.{' '}
            <a href="#" className="text-neutral-900 underline hover:no-underline">
              See full comparison
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
