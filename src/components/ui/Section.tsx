'use client';

import { SectionProps } from '@/types';
import { motion } from 'framer-motion';

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = ''
}) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 w-full ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section; 