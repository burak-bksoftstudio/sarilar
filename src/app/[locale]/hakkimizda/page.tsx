export const dynamic = "force-dynamic";
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Award, Shield, Lightbulb } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Counter from '@/components/ui/Counter';
import { company } from '@/lib/data/company';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const tStats = await getTranslations({ locale, namespace: 'stats' });

  const values = [
    {
      icon: Award,
      title: t('quality'),
      description: t('qualityDesc'),
    },
    {
      icon: Shield,
      title: t('trust'),
      description: t('trustDesc'),
    },
    {
      icon: Lightbulb,
      title: t('innovation'),
      description: t('innovationDesc'),
    },
  ];

  return (
    <>
      {/* Hero with Parallax */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/parallax.jpg"
            alt={t('title')}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/proje.jpg"
                    alt={t('ourStory')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-gold rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight" delay={0.2}>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                {t('corporate')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                {t('ourStory')}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t('ourStoryText')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('description')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: company.stats.years, suffix: '+', label: tStats('years') },
              { value: company.stats.products, suffix: '+', label: tStats('products') },
              { value: company.stats.brands, suffix: '+', label: tStats('brands') },
              { value: company.stats.customers, suffix: '+', label: tStats('customers') },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('ourValues')}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6 group-hover:bg-gold transition-colors">
                      <Icon className="w-8 h-8 text-gold group-hover:text-slate-900 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <Image
                src="/images/sarilar_logo.png"
                alt={company.name}
                width={200}
                height={80}
                className="mx-auto mb-8"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {company.name}
              </h3>
              <p className="text-slate-600 mb-2">{company.address}</p>
              <p className="text-slate-600 mb-2">{company.phone}</p>
              <p className="text-slate-600">{company.email}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
