'use client';

import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How quickly can I launch a campaign?',
    answer: 'Within minutes using our AI-assisted flow. Our platform automates the complex setup process, analyzes your target audience, and suggests optimal placements across channels. Most campaigns go live within 5-10 minutes of creation.',
  },
  {
    question: 'Which media channels are supported?',
    answer: 'We support all major channels including Outdoor (billboards, transit), TV (cable, streaming), Digital (social media, display, search), Influencer marketing, Radio, Print, and emerging channels like podcast advertising and connected TV.',
  },
  {
    question: 'Can I integrate with my existing CRM?',
    answer: 'Yes, we offer seamless integration with popular CRMs like Salesforce, HubSpot, and Pipedrive via our robust API. You can also import data manually through CSV uploads or connect using Zapier for additional automation.',
  },
  {
    question: 'How accurate are ROI predictions?',
    answer: 'Our AI models achieve 85-90% accuracy in ROI predictions and improve continuously with each campaign. The system learns from your specific industry, audience behavior, and campaign performance to provide increasingly precise forecasts.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 chat support for all plans, priority email support for Growth users, and dedicated phone support for Enterprise customers. Our team includes marketing experts who can provide strategic guidance beyond technical assistance.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with access to all Starter plan features. No credit card required to start. You can launch up to 2 campaigns and access our full analytics dashboard to experience the platform firsthand.',
  },
];

function FAQAccordion({ item, index, isOpen, onToggle }: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="text-lg font-semibold pr-8">{item.question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-blue-400" />
          ) : (
            <Plus className="w-6 h-6 text-blue-400" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-slate-300 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="glass-card inline-block px-4 py-2 mb-6">
            <span className="text-sm font-medium gradient-text">
              ❓ Got Questions?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite.
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}