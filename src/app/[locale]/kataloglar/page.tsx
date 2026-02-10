import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Download, FileText } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { catalogs } from '@/lib/data/catalogs';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'catalogs' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

interface CatalogsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CatalogsPage({ params }: CatalogsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'catalogs' });

  // Group catalogs by brand
  const catalogsByBrand = catalogs.reduce((acc, catalog) => {
    if (!acc[catalog.brand]) {
      acc[catalog.brand] = [];
    }
    acc[catalog.brand].push(catalog);
    return acc;
  }, {} as Record<string, typeof catalogs>);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/parallax.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Catalogs by Brand */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {Object.entries(catalogsByBrand).map(([brand, brandCatalogs], brandIndex) => (
              <AnimatedSection key={brand} delay={brandIndex * 0.1}>
                <div className="border-b border-slate-200 pb-8 last:border-b-0">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gold rounded-full" />
                    {brand}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {brandCatalogs.map((catalog) => (
                      <a
                        key={catalog.id}
                        href={catalog.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                            <FileText className="w-6 h-6 text-red-600 group-hover:text-slate-900 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-900 mb-1 truncate">
                              {catalog.name}
                            </h3>
                            <p className="text-sm text-slate-500">PDF</p>
                          </div>
                          <Download className="w-5 h-5 text-slate-400 group-hover:text-gold transition-colors flex-shrink-0" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
