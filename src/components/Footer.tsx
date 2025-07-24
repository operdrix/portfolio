'use client';

import { personalInfo, socialLinks } from '@/data/personal';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Heart, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informations personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OP</span>
              </div>
              <span className="font-bold text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Développeur web passionné spécialisé dans les technologies modernes.
              Actuellement chez EDF, je combine expertise technique et rigueur industrielle.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Navigation</h3>
            <div className="space-y-2">
              {[
                { name: 'Accueil', href: '#home' },
                { name: 'À propos', href: '#about' },
                { name: 'Compétences', href: '#skills' },
                { name: 'Expérience', href: '#experience' },
                { name: 'Projets', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact et réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                github.com/{personalInfo.github}
              </a>
              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/{personalInfo.linkedin}
              </a>
            </div>

            {/* Liens sociaux */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name === 'GitHub' && <Github size={20} />}
                  {link.name === 'LinkedIn' && <Linkedin size={20} />}
                  {link.name === 'Email' && <Mail size={20} />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Séparateur */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"
        />

        {/* Copyright et bouton retour en haut */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground flex-wrap"
          >
            <span>© {currentYear} {personalInfo.name}. Tous droits réservés.</span>
            <span className="flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-red-500" /> en France
              <div className="inline-flex ml-1 relative">
                <svg className="w-6 h-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] dark:drop-shadow-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    fill="url(#frenchFlag)"
                  />
                  <defs>
                    <linearGradient id="frenchFlag" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="33%" stopColor="#2563eb" />
                      <stop offset="33%" stopColor="#ffffff" />
                      <stop offset="66%" stopColor="#ffffff" />
                      <stop offset="66%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            Retour en haut
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 