'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { company, socialLinks } from '@/lib/data/company';
import { categories } from '@/lib/data/categories';

interface FooterProps {
  locale: string;
}

const iconMap: Record<string, React.ElementType> = {
  Facebook,
  Instagram,
  Youtube,
};

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('common');

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/sarilar_logo.png"
              alt="Sarılar Boya"
              width={150}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-400 text-sm mb-4">{company.name}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gold" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-gold" />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-gold" />
                <span>{company.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-slate-400 hover:text-gold transition-colors text-sm">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/hakkimizda`} className="text-slate-400 hover:text-gold transition-colors text-sm">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/kataloglar`} className="text-slate-400 hover:text-gold transition-colors text-sm">
                  {t('catalogs')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/kariyer`} className="text-slate-400 hover:text-gold transition-colors text-sm">
                  {t('career')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/iletisim`} className="text-slate-400 hover:text-gold transition-colors text-sm">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('products')}</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/${locale}/urunler/${category.slug}`}
                    className="text-slate-400 hover:text-gold transition-colors text-sm"
                  >
                    {category.name[locale as 'tr' | 'en']}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('followUs')}</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-gold hover:text-slate-900 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <span className="text-lg">📱</span>
                {t('whatsapp')}: {company.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} {company.shortName}. {t('copyright')}
            </p>
            <div className="flex gap-4">
              <a
                href={company.b2bLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                {t('dealerLogin')}
              </a>
              <a
                href={company.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                {t('onlinePayment')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
