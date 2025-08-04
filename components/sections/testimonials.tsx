'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah L.',
    role: 'Startup Founder',
    company: 'TechFlow',
    content: 'ADmyBRAND cut our offline ad costs by 30% with smarter placements. The AI recommendations were spot-on and saved us countless hours of manual optimization.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    name: 'Raj P.',
    role: 'Marketing Head',
    company: 'GrowthCorp',
    content: 'We launched cross-channel campaigns in minutes—all from one dashboard. The automation features are incredible and the results speak for themselves.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    name: 'Emily K.',
    role: 'Growth Manager', 
    company: 'ScaleUp Inc',
    content: "The AI Suite's insights boosted our ROI instantly. The competitor analysis feature alone is worth the subscription price. Highly recommended!",
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-slate-900/50">
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
              💬 Customer Stories
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Customers
            <br />
            <span className="gradient-text">Are Saying</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing 
            with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="glass-card p-8 md:p-12 relative"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-slate-200 mb-8 italic leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Avatar and Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-slate-400">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}