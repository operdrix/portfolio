'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { personalInfo, socialLinks } from '@/data/personal';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

    // Vérification des variables d'environnement
    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setSubmitMessage('Configuration EmailJS manquante. Veuillez vérifier les variables d\'environnement.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        e.currentTarget,
        publicKey
      );

      console.log('EmailJS result:', result);

      // Si on arrive ici sans erreur, c'est que l'email a été envoyé avec succès
      setSubmitStatus('success');
      setSubmitMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');

      // Reset du formulaire avec vérification de sécurité
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-background to-muted/20 relative z-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          Contactez-moi
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 w-full">
        {/* Informations de contact */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Card glass className="p-8">
            <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Je suis toujours intéressé par de nouvelles opportunités et collaborations.
              N'hésitez pas à me contacter !
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/10">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-accent/10">
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Disponibilité</p>
                  <p className="text-muted-foreground">Ouvert aux nouvelles opportunités</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Liens sociaux */}
          <Card glass className="p-6">
            <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name === 'GitHub' && <Github size={24} />}
                  {link.name === 'LinkedIn' && <Linkedin size={24} />}
                  {link.name === 'Email' && <Mail size={24} />}
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card glass className="p-8">
            <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6 w-full">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>

              {/* Message de statut */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-sm ${submitStatus === 'success'
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </Card>
        </motion.div>
      </div>

      {/* Call to action final */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16"
      >
        <Card glass className="p-8">
          <h3 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Que ce soit pour un projet freelance, un poste permanent ou simplement
            pour échanger sur le développement web, je suis toujours ouvert aux nouvelles opportunités !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href={`mailto:${personalInfo.email}`}>
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un email
            </Button>
            <Button variant="outline" size="lg" href={`https://linkedin.com/in/${personalInfo.linkedin}`}>
              <Linkedin className="w-5 h-5 mr-2" />
              Me connecter sur LinkedIn
            </Button>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Contact; 