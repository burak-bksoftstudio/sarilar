'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, fadeIn, slideInLeft, slideInRight, scaleIn } from '@/lib/utils/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
  once?: boolean;
  threshold?: number;
}

const animationVariants: Record<string, Variants> = {
  fadeUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
};

export default function AnimatedSection({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  once = true,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const variants = animationVariants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
