'use client';

import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useState } from 'react';

const ThemeToggle = () => {
  const { theme, resolvedTheme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: Array<{ value: 'light' | 'dark' | 'auto'; icon: React.ReactNode; label: string }> = [
    { value: 'light', icon: <Sun size={16} />, label: 'Clair' },
    { value: 'dark', icon: <Moon size={16} />, label: 'Sombre' },
    { value: 'auto', icon: <Monitor size={16} />, label: 'Auto' },
  ];

  const currentTheme = themes.find(t => t.value === theme);

  return (
    <div className="relative">
      {/* Bouton principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Changer le thème"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={resolvedTheme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {resolvedTheme === 'light' ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-blue-400" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Menu déroulant */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay pour fermer le menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu des thèmes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
              className="absolute right-0 top-12 w-32 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl z-50 overflow-hidden"
            >
              <div className="p-1">
                {themes.map((themeOption) => (
                  <motion.button
                    key={themeOption.value}
                    onClick={() => {
                      changeTheme(themeOption.value);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                      theme === themeOption.value
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center justify-center w-5 h-5">
                      {themeOption.icon}
                    </div>
                    <span className="font-medium">{themeOption.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
