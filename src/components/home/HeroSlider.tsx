'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  brand: string;
  link?: string;
}

interface HeroSliderProps {
  locale: string;
}

export default function HeroSlider({ locale }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: Slide[] = [
    {
      id: 1,
      image: '/images/slider/orka.jpg',
      brand: 'Orka',
      link: `/${locale}/urunler`,
    },
    {
      id: 2,
      image: '/images/slider/ideal-standart.jpg',
      brand: 'Ideal Standard',
      link: `/${locale}/urunler`,
    },
    {
      id: 3,
      image: '/images/slider/luxsera.png',
      brand: 'Luxsera',
      link: `/${locale}/urunler`,
    },
    {
      id: 4,
      image: '/images/slider/luxsera-yeni.png',
      brand: 'Luxsera Yeni Ürünler',
      link: `/${locale}/urunler`,
    },
    {
      id: 5,
      image: '/images/slider/saremica.png',
      brand: 'Saremica',
      link: `/${locale}/urunler`,
    },
    {
      id: 6,
      image: '/images/slider/yurtbay.png',
      brand: 'Yurtbay Seramik',
      link: `/${locale}/urunler`,
    },
    {
      id: 7,
      image: '/images/slider/ege-seramik.jpg',
      brand: 'Ege Seramik',
      link: `/${locale}/urunler`,
    },
    {
      id: 8,
      image: '/images/slider/ng-kutahya.jpg',
      brand: 'NG Kütahya',
      link: `/${locale}/urunler`,
    },
    {
      id: 9,
      image: '/images/slider/roca.png',
      brand: 'Roca',
      link: `/${locale}/urunler`,
    },
    {
      id: 10,
      image: '/images/slider/agt.jpg',
      brand: 'AGT',
      link: `/${locale}/urunler`,
    },
    {
      id: 11,
      image: '/images/slider/artemis.jpg',
      brand: 'Artemis',
      link: `/${locale}/urunler`,
    },
    {
      id: 12,
      image: '/images/slider/idevit.png',
      brand: 'Idevit',
      link: `/${locale}/urunler`,
    },
    {
      id: 13,
      image: '/images/slider/jotun.jpg',
      brand: 'Jotun',
      link: `/${locale}/urunler`,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900" style={{ aspectRatio: '1920/573' }}>
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Link href={slide.link || '#'} className="block w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.brand}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </Link>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-gold hover:text-slate-900 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-gold hover:text-slate-900 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-gold w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
