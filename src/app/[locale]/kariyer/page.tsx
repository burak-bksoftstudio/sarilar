import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Users, Target, Heart } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CareerForm from './CareerForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'career' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

interface CareerPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CareerPage({ params }: CareerPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'career' });

  const features = [
    {
      icon: Users,
      title: locale === 'tr' ? 'Takım Çalışması' : 'Team Work',
      description: locale === 'tr'
        ? 'Birlikte çalışarak büyük işler başarıyoruz'
        : 'We achieve great things by working together',
    },
    {
      icon: Target,
      title: locale === 'tr' ? 'Kariyer Gelişimi' : 'Career Growth',
      description: locale === 'tr'
        ? 'Sürekli öğrenme ve gelişim fırsatları'
        : 'Continuous learning and development opportunities',
    },
    {
      icon: Heart,
      title: locale === 'tr' ? 'Çalışan Refahı' : 'Employee Wellbeing',
      description: locale === 'tr'
        ? 'Çalışanlarımızın mutluluğu önceliğimiz'
        : 'Our employees happiness is our priority',
    },
  ];

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

      {/* Company Culture */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {locale === 'tr' ? 'Neden Sarılar?' : 'Why Sarılar?'}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                {t('description')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6 group-hover:bg-gold transition-colors">
                      <Icon className="w-8 h-8 text-gold group-hover:text-slate-900 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {t('applyTitle')}
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <CareerForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
