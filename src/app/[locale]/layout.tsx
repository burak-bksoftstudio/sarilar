import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Sarılar Boya ve İnşaat',
    template: '%s | Sarılar Boya ve İnşaat',
  },
  description: 'Sarılar Boya ve İnşaat - Samsun\'un öncü yapı malzemeleri tedarikçisi. Granit, seramik, vitrifiye, boya ve daha fazlası.',
  keywords: ['sarılar boya', 'inşaat malzemeleri', 'samsun', 'seramik', 'vitrifiye', 'boya', 'parke'],
  authors: [{ name: 'Sarılar Boya ve İnşaat' }],
  creator: 'Sarılar Boya ve İnşaat',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.sarilarboya.com.tr',
    title: 'Sarılar Boya ve İnşaat',
    description: 'Samsun\'un öncü yapı malzemeleri tedarikçisi',
    siteName: 'Sarılar Boya',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'tr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={locale} />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
