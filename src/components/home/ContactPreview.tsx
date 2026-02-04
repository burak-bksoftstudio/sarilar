'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { company } from '@/lib/data/company';

interface ContactPreviewProps {
  locale: string;
}

export default function ContactPreview({ locale }: ContactPreviewProps) {
  const t = useTranslations('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactItems = [
    {
      icon: MapPin,
      label: t('address'),
      value: company.address,
    },
    {
      icon: Phone,
      label: t('phone'),
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: t('email'),
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: company.whatsapp,
      href: company.whatsappLink,
      isExternal: true,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              {t('title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
              {t('getInTouch')}
            </h2>

            <div className="space-y-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg group-hover:bg-gold group-hover:text-slate-900 transition-colors">
                      <Icon className="w-5 h-5 text-gold group-hover:text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                      <p className="text-slate-900 font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                );

                if (item.href) {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="block hover:translate-x-1 transition-transform"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={index}>{content}</div>;
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <Link href={`/${locale}/iletisim`}>
                <Button>{t('sendMessage')}</Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.1!2d36.3295!3d41.2847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40887f5b5f5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSamsun%2C%20Turkey!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sarılar Boya Konum"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
