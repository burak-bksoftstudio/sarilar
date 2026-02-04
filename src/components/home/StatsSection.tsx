'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Package, Award, Users } from 'lucide-react';
import Counter from '@/components/ui/Counter';
import { company } from '@/lib/data/company';

export default function StatsSection() {
  const t = useTranslations('stats');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Calendar,
      value: company.stats.years,
      suffix: '+',
      label: t('years'),
    },
    {
      icon: Package,
      value: company.stats.products,
      suffix: '+',
      label: t('products'),
    },
    {
      icon: Award,
      value: company.stats.brands,
      suffix: '+',
      label: t('brands'),
    },
    {
      icon: Users,
      value: company.stats.customers,
      suffix: '+',
      label: t('customers'),
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
