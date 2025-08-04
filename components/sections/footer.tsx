'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('✅ Subscribed successfully!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const navigationLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '#demo' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info & Logo */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">ADmyBRAND</span>
            </motion.div>
            
            <p className="text-slate-400 leading-relaxed">
              Your Virtual Marketing Assistant powered by AI. Transform your advertising 
              campaigns with intelligent automation and data-driven insights.
            </p>
            
            <div className="space-y-2">
              <p className="text-slate-300 font-medium">Contact Us</p>
              <a 
                href="mailto:hello@admybrand.ai" 
                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@admybrand.ai
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-md font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-slate-400 mb-6">
              Get the latest updates on new features, AI improvements, and marketing insights.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates"
                  className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-slate-400"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2025 ADmyBRAND AI Suite. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}