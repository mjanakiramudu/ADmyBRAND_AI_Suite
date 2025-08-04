'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Crown, Rocket, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface PricingTier {
  name: string;
  icon: React.ElementType;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  gradient: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    icon: Rocket,
    monthlyPrice: 29,
    yearlyPrice: 25,
    description: 'Perfect for startups and small businesses',
    features: [
      '3 campaigns per month',
      'Analytics dashboard',
      'Basic targeting',
      'Email support',
      'Campaign templates',
    ],
    cta: 'Start Free Trial',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Growth',
    icon: Zap,
    monthlyPrice: 79,
    yearlyPrice: 67,
    description: 'For growing businesses and marketing teams',
    features: [
      '10 campaigns per month',
      'AI automation',
      'Advanced targeting',
      'Priority support',
      'A/B testing',
      'Custom reporting',
      'API access',
    ],
    popular: true,
    cta: 'Get Started',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Enterprise',
    icon: Crown,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Custom solutions for large organizations',
    features: [
      'Unlimited campaigns',
      'Dedicated AI consultant',
      'White-label solution',
      '24/7 phone support',
      'Custom integrations',
      'Advanced security',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

function PricingCard({ tier, index, isYearly }: { tier: PricingTier; index: number; isYearly: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const price = tier.monthlyPrice === 0 ? 'Custom' : 
    isYearly ? `$${tier.yearlyPrice}` : `$${tier.monthlyPrice}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group ${tier.popular ? 'transform scale-105' : ''}`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="glass-card px-4 py-2">
            <span className="text-sm font-medium gradient-text">Most Popular</span>
          </div>
        </div>
      )}
      
      <div className={`glass-card p-8 h-full hover:scale-105 transition-all duration-300 ${
        tier.popular ? 'gradient-border' : ''
      }`}>
        <div className="text-center mb-8">
          <div className={`w-16 h-16 bg-gradient-to-r ${tier.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
            <tier.icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
          <p className="text-slate-400 mb-6">{tier.description}</p>
          
          <div className="mb-6">
            <span className="text-4xl font-bold">
              {price}
            </span>
            {tier.monthlyPrice > 0 && (
              <span className="text-slate-400 ml-2">
                /{isYearly ? 'year' : 'month'}
              </span>
            )}
          </div>
          
          {tier.monthlyPrice > 0 && isYearly && (
            <div className="text-sm text-green-400 mb-4">
              Save ${(tier.monthlyPrice - tier.yearlyPrice) * 12}/year
            </div>
          )}
        </div>

        <ul className="space-y-4 mb-8">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Button 
          className="w-full" 
          variant={tier.popular ? 'default' : 'secondary'}
        >
          {tier.cta}
        </Button>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="glass-card inline-block px-4 py-2 mb-6">
            <span className="text-sm font-medium gradient-text">
              💰 Simple Pricing
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your
            <br />
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`transition-colors ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`transition-colors ${isYearly ? 'text-white' : 'text-slate-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-sm text-green-400 font-medium">Save 20%</span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard 
              key={tier.name} 
              tier={tier} 
              index={index} 
              isYearly={isYearly}
            />
          ))}
        </div>
      </div>
    </section>
  );
}