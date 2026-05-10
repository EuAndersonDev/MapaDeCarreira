'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '@/context/LanguageContext';
import { useReducedMotion } from 'framer-motion';

interface FlipCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay em segundos para stagger
}

export default function FlipCard({
  children,
  className = '',
  delay = 0
}: FlipCardProps) {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || reducedMotion) return;

    // Animar entrada do card usando GSAP Flip com matchMedia para prefers-reduced-motion
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      // Animar entrada do card usando GSAP Flip
      const ctx = gsap.context(() => {
        // Estado inicial: opacidade 0, ligeiramente escalado para baixo
        gsap.set(cardRef.current, {
          opacity: 0,
          scale: 0.95,
          y: 20
        });

        // Animar para estado final
        gsap.to(cardRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          delay: delay,
          ease: 'power3.out',
          overwrite: true
        });
      }, cardRef.current);

      // Cleanup function for this matchMedia query
      return () => {
        ctx.revert();
      };
    });

    // Cleanup
    return () => {
      // GSAP matchMedia cleanup is handled automatically
    };
  }, [children, locale, delay, reducedMotion]); // Re-run quando mudar conteúdo, locale, delay ou reducedMotion

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
}