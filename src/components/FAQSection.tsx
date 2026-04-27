'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = { q: string; a: string };

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          viewport={{ once: true }}
          className="bg-dark-100/80 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors"
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-semibold pr-4">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-brand/50 flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`}
            />
          </button>
          <motion.div
            initial={false}
            animate={{ height: openIdx === i ? 'auto' : 0, opacity: openIdx === i ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
