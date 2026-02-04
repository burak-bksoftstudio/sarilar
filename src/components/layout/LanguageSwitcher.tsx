'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');

    if (segments[1] === 'tr' || segments[1] === 'en') {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <div className="flex items-center bg-slate-100 rounded-full p-1">
      <motion.button
        onClick={() => switchLocale('tr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          locale === 'tr'
            ? 'bg-gold text-slate-900'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        TR
      </motion.button>
      <motion.button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-gold text-slate-900'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  );
}
