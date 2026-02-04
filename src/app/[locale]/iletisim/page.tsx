import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from './ContactForm';
import { company } from '@/lib/data/company';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const contactInfo = [
    {
      icon: MapPin,
      label: tCommon('address'),
      value: company.address,
    },
    {
      icon: Phone,
      label: tCommon('phone'),
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: tCommon('email'),
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {t('getInTouch')}
                </h2>
              </AnimatedSection>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <AnimatedSection key={index} delay={index * 0.1}>
                      <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-gold/10 transition-colors group">
                        <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg group-hover:bg-gold transition-colors">
                          <Icon className="w-5 h-5 text-gold group-hover:text-slate-900" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                          <p className="text-slate-900 font-medium">{item.value}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    );
                  }

                  return content;
                })}
              </div>

              {/* Company Info */}
              <AnimatedSection delay={0.5}>
                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{t('companyName')}</h3>
                  <p className="text-slate-400 text-sm">{t('addressText')}</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection animation="slideInRight" delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {t('formTitle')}
                </h3>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
