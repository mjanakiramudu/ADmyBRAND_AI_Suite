'use client';

import { 
  Globe, 
  Brain, 
  BarChart3, 
  Zap, 
  Users, 
  Eye,
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Globe,
    title: 'Omnichannel Campaign Booking',
    description: 'Manage Outdoor, TV, Digital, and Print ads from one dashboard.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'AI-Powered Planning',
    description: 'Smart media placement suggestions to maximize ROI.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track campaigns with live dashboards and heatmaps.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Programmatic Automation',
    description: 'AI auto-optimizes your campaigns 24/7.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Audience Targeting',
    description: 'Intelligent segmentation and hyper-local targeting.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Eye,
    title: 'Competitor Insights',
    description: 'Benchmark campaigns against industry leaders.',
    gradient: 'from-red-500 to-pink-500',
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card p-8 h-full hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <feature.icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
          {feature.title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed mb-6">
          {feature.description}
        </p>
        
        <div className="flex items-center text-blue-400 font-medium group-hover:text-purple-400 transition-colors">
          Learn more
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-24 bg-slate-900/50">
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
              ✨ Powerful Features
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Dominate Marketing</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered suite provides all the tools you need to create, manage, 
            and optimize campaigns across every marketing channel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}