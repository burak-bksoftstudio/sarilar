import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import PartnersCarousel from '@/components/home/PartnersCarousel';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';
import ContactPreview from '@/components/home/ContactPreview';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <>
      <HeroSlider locale={locale} />
      <AboutSection locale={locale} />
      <CategoryGrid locale={locale} />
      <StatsSection />
      <PartnersCarousel />
      <CTASection locale={locale} />
      <ContactPreview locale={locale} />
    </>
  );
}
