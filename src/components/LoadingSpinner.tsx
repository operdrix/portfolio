'use client';

import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Cercle principal */}
        <motion.div
          className="w-16 h-16 border-4 border-muted rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* Cercle avec gradient */}
        <motion.div
          className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* Cercle secondaire */}
        <motion.div
          className="absolute inset-2 w-12 h-12 border-4 border-transparent border-b-secondary rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Point central */}
        <motion.div
          className="absolute inset-6 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      {/* Texte de chargement */}
      <motion.div
        className="absolute bottom-1/4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.p
          className="text-muted-foreground font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Chargement...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 