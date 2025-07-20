'use client';

import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { experiences } from '@/data/personal';
import { motion } from 'framer-motion';
import { Building, Calendar, Clock, MapPin } from 'lucide-react';

const Experience = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <Section id="experience" className="bg-gradient-to-b from-background to-muted/20 relative z-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          Mon expérience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
        />
      </div>

      <div className="relative">
        {/* Ligne de timeline */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Point de timeline */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

              {/* Carte d'expérience */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <Card glass className="p-6">
                  {/* En-tête */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Logo de l'entreprise */}
                      {experience.logo && (
                        <div className="w-12 h-12 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center flex-shrink-0">
                          <img
                            src={experience.logo}
                            alt={`Logo ${experience.company}`}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      )}

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Badge "Actuel" */}
                    {experience.current && (
                      <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                        <span className="text-xs font-medium text-primary">Actuel</span>
                      </div>
                    )}
                  </div>

                  {/* Dates */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(experience.startDate)} - {
                        experience.current
                          ? 'Présent'
                          : experience.endDate
                            ? formatDate(experience.endDate)
                            : ''
                      }
                    </span>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies && experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                        className="px-3 py-1 bg-muted/50 border border-border/50 rounded-full text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section formation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20"
      >
        <Card glass className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Formation</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Mastère</h4>
              <p className="text-muted-foreground mb-2">Ingénierie du Web</p>
              <p className="text-sm text-muted-foreground">École ESGI Lyon</p>
              <p className="text-xs text-muted-foreground">2023 - 2025</p>
              <p className="text-xs text-primary mt-1">En alternance</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Bachelor</h4>
              <p className="text-muted-foreground mb-2">Ingénierie du Web</p>
              <p className="text-sm text-muted-foreground">École ESGI Lyon</p>
              <p className="text-xs text-muted-foreground">2022 - 2023</p>
              <p className="text-xs text-primary mt-1">En alternance</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Experience; 