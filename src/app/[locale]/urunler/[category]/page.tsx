export const dynamic = "force-dynamic";
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/lib/data/categories';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Download, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: 'Not Found' };
  }

  return {
    title: category.name[locale as 'tr' | 'en'],
    description: `${category.name[locale as 'tr' | 'en']} - Sarılar Boya ve İnşaat`,
  };
}

interface CategoryPageProps {
  params: Promise<{ locale: string; category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const t = await getTranslations({ locale, namespace: 'products' });

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={category.image}
            alt={category.name[locale as 'tr' | 'en']}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        <div className="relative container mx-auto px-4">
          <AnimatedSection>
            <Link
              href={`/${locale}/urunler`}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-gold mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('title')}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name[locale as 'tr' | 'en']}
            </h1>
            <p className="text-slate-300 text-lg">
              {category.brands.length} {t('brands')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Brands with Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {category.brands.map((brand, brandIndex) => (
              <AnimatedSection key={brand.id} delay={brandIndex * 0.1}>
                <div id={brand.slug} className="scroll-mt-24">
                  {/* Brand Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center p-3">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={70}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{brand.name}</h2>
                        <p className="text-slate-500">
                          {brand.products.length > 0 ? `${brand.products.length} ürün` : ''}
                        </p>
                      </div>
                    </div>

                    {/* Catalogs */}
                    {brand.catalogs && brand.catalogs.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {brand.catalogs.map((catalog, catIndex) => (
                          <a
                            key={catIndex}
                            href={catalog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold hover:bg-gold hover:text-slate-900 rounded-lg text-sm font-medium transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Katalog {brand.catalogs && brand.catalogs.length > 1 ? catIndex + 1 : ''}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Product Gallery */}
                  {brand.products.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                      {brand.products.map((product) => (
                        <div
                          key={product.id}
                          className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-white"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-xl">
                      <p className="text-slate-500">
                        {locale === 'tr' ? 'Ürün görselleri için kataloğu indirebilirsiniz.' : 'Download the catalog for product images.'}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
