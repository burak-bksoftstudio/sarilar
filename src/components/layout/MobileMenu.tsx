'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { categories } from '@/lib/data/categories';
import { company } from '@/lib/data/company';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
  navLinks: { href: string; label: string; hasDropdown?: boolean }[];
}

export default function MobileMenu({ isOpen, onClose, locale, navLinks }: MobileMenuProps) {
  const t = useTranslations('common');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <span className="text-lg font-bold text-slate-900">Menu</span>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-slate-700" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
              {navLinks.map((link) => (
                <div key={link.href} className="border-b border-slate-100 last:border-b-0">
                  {link.hasDropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between py-4 cursor-pointer text-slate-900 font-medium">
                        {link.label}
                        <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="pb-4 pl-4 space-y-2">
                        {categories.map((category) => (
                          <Link
                            key={category.id}
                            href={`/${locale}/urunler/${category.slug}`}
                            onClick={onClose}
                            className="block py-2 text-slate-600 hover:text-gold transition-colors"
                          >
                            {category.name[locale as 'tr' | 'en']}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-4 text-slate-900 font-medium hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="p-4 border-t border-slate-100">
              <a
                href={company.b2bLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold text-slate-900 text-center py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors"
              >
                {t('dealerLogin')}
              </a>
            </div>

            {/* Contact Info */}
            <div className="p-4 bg-slate-50">
              <p className="text-sm text-slate-600 mb-2">{t('phone')}: {company.phone}</p>
              <p className="text-sm text-slate-600 mb-2">{t('whatsapp')}: {company.whatsapp}</p>
              <p className="text-sm text-slate-600">{t('email')}: {company.email}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
