'use client';

import { CardProps } from '@/types';
import { motion } from 'framer-motion';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glass = false
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300 w-full';

  const glassClasses = glass
    ? 'glass border border-white/10'
    : 'bg-muted/50 border border-border/50';

  const hoverClasses = hover
    ? 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]'
    : '';

  const classes = `${baseClasses} ${glassClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={classes}
    >
      {children}
    </motion.div>
  );
};

export default Card; 