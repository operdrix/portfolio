'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Grille de fond */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </motion.div>

      {/* Cercles flottants */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Cercle 1 */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cercle 2 */}
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Cercle 3 */}
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </motion.div>

      {/* Lignes de connexion */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M10,50 Q25,25 50,50 T90,50"
            stroke="url(#gradient1)"
            strokeWidth="0.1"
            fill="none"
            opacity="0.3"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M10,30 Q50,10 90,30 T10,70 Q50,90 90,70"
            stroke="url(#gradient2)"
            strokeWidth="0.1"
            fill="none"
            opacity="0.2"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default ParallaxBackground; 