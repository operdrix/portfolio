'use client';

import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-105 focus:ring-primary',
    secondary: 'bg-gradient-to-r from-secondary to-accent text-white hover:shadow-lg hover:shadow-secondary/25 hover:scale-105 focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 focus:ring-primary',
    ghost: 'text-primary hover:bg-primary/10 hover:scale-105 focus:ring-primary'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {buttonContent}
    </button>
  );
};

export default Button; 