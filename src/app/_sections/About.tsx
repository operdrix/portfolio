'use client';

import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { personalInfo } from '@/data/personal';
import { motion } from 'framer-motion';
import { Award, Calendar, Github, Linkedin, Mail, MapPin, User } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Années d'expérience", value: "5+" },
    { label: "Projets réalisés", value: "20+" },
    { label: "Technologies maîtrisées", value: "15+" },
    { label: "Formation", value: "Master 2" }
  ];

  const highlights = [
    "Développement d'applications web modernes avec React et Next.js",
    "Expertise en bases de données PostgreSQL et MariaDB",
    "Déploiement et CI/CD avec Docker et GitHub Actions",
    "Travail en environnement industriel (EDF - Centrale Nucléaire)",
    "Formation spécialisée en Ingénierie du Web (EDSGI Lyon)"
  ];

  return (
    <Section id="about" className="bg-gradient-to-b from-background to-muted/20 relative z-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          À propos de moi
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Informations personnelles */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Card glass className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Informations personnelles</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">github.com/{personalInfo.github}</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">linkedin.com/in/{personalInfo.linkedin}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">37 ans</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Master 2 Ingénierie du Web - EDSGI Lyon</span>
              </div>
            </div>
          </Card>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Description et highlights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <Card glass className="p-8">
            <h3 className="text-2xl font-bold mb-6">Mon parcours</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {personalInfo.about}
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Points forts :</h4>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Carte de présentation EDF */}
          <Card className="p-6 border-l-4 border-primary">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Actuellement chez EDF</h4>
                <p className="text-sm text-muted-foreground">
                  Développeur web à la centrale nucléaire du Bugey,
                  je combine expertise technique et rigueur industrielle
                  pour créer des applications robustes et sécurisées.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default About; 