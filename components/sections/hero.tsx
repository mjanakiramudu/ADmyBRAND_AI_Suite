'use client';

import { Button } from '@/components/ui/button';
import { Play, Rocket, Sparkles, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const floatingIcons = [
    { icon: Target, delay: 0 },
    { icon: TrendingUp, delay: 0.5 },
    { icon: Sparkles, delay: 1 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="glass-card inline-block px-4 py-2 mb-6">
              <span className="text-sm font-medium gradient-text">
                🚀 Introducing AI-Powered Marketing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet{' '}
              <span className="gradient-text">ADmyBRAND AI Suite</span>
              <br />
              Your Virtual Marketing Assistant
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Book, manage, and optimize ad campaigns across any channel—powered by AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Button size="lg" className="group">
              <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Get Started
            </Button>
            <Button variant="secondary" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero Animation/Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Floating icons animation */}
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${20 + index * 30}%`,
                      top: `${30 + (index % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      delay: item.delay,
                      repeat: Infinity,
                    }}
                  >
                    <div className="glass w-16 h-16 rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </motion.div>
                ))}
                
                {/* Central dashboard mockup */}
                <div className="text-center">
                  <div className="w-32 h-32 glass rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="w-16 h-16 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">AI Dashboard</h3>
                  <p className="text-slate-400">Marketing Intelligence at Your Fingertips</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}