'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { projects } from '@/data/personal';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, Globe, Star } from 'lucide-react';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card glass className="p-6 h-full group">
        {/* Image du projet */}
        <div className="relative mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 h-48">
          {project.image ? (
            <img
              src={project.image}
              alt={`Capture d'écran du projet ${project.title}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Code className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Image du projet</p>
              </div>
            </div>
          )}

          {/* Overlay avec liens */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-6 h-6 text-white" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Contenu */}
        <div className="space-y-4">
          {/* En-tête */}
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full">
                <Star className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-primary">Featured</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
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

          {/* Boutons d'action */}
          <div className="flex gap-3 pt-4">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.githubUrl}
                className="flex-1"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                size="sm"
                href={project.liveUrl}
                className="flex-1"
              >
                <Globe className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <Section id="projects" className="bg-gradient-to-b from-muted/20 to-background relative z-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          Mes projets
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
        />
      </div>

      {/* Projets mis en avant */}
      {featuredProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Projets mis en avant</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Autres projets */}
      {otherProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Autres projets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16"
      >
        <Card glass className="p-8">
          <h3 className="text-2xl font-bold mb-4">Envie de collaborer ?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Je suis toujours ouvert à de nouveaux projets et opportunités.
            N'hésitez pas à me contacter pour discuter de vos idées !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="#contact">
              Me contacter
            </Button>
            <Button variant="outline" size="lg" href={`https://github.com/${projects[0]?.githubUrl?.split('/')[3] || 'operdrix'}`}>
              <Github className="w-5 h-5 mr-2" />
              Voir plus sur GitHub
            </Button>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Projects; 