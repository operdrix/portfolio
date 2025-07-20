'use client';

import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { skills } from '@/data/personal';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Server,
  Settings,
  TrendingUp,
  Zap
} from 'lucide-react';

const Skills = () => {
  const categories = {
    frontend: { icon: Code, label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { icon: Server, label: 'Backend', color: 'from-purple-500 to-pink-500' },
    database: { icon: Database, label: 'Base de données', color: 'from-green-500 to-emerald-500' },
    devops: { icon: Settings, label: 'DevOps', color: 'from-orange-500 to-red-500' },
    other: { icon: Zap, label: 'Autres', color: 'from-indigo-500 to-purple-500' }
  };

  const getCategorySkills = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const ProgressBar = ({ level, name }: { level: number; name: string }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  );

  return (
    <Section id="skills" className="bg-gradient-to-b from-muted/20 to-background relative z-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          Mes compétences
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
        />
      </div>

      {/* Statistiques globales */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 w-full"
      >
        <Card className="text-center p-6">
          <div className="flex items-center justify-center mb-3">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <div className="text-2xl font-bold text-primary mb-1">
            {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
          </div>
          <div className="text-sm text-muted-foreground">Niveau moyen</div>
        </Card>

        <Card className="text-center p-6">
          <div className="flex items-center justify-center mb-3">
            <Code className="w-8 h-8 text-secondary" />
          </div>
          <div className="text-2xl font-bold text-secondary mb-1">
            {skills.filter(s => s.category === 'frontend').length}
          </div>
          <div className="text-sm text-muted-foreground">Technologies Frontend</div>
        </Card>

        <Card className="text-center p-6">
          <div className="flex items-center justify-center mb-3">
            <Server className="w-8 h-8 text-accent" />
          </div>
          <div className="text-2xl font-bold text-accent mb-1">
            {skills.filter(s => s.category === 'backend').length}
          </div>
          <div className="text-sm text-muted-foreground">Technologies Backend</div>
        </Card>

        <Card className="text-center p-6">
          <div className="flex items-center justify-center mb-3">
            <Database className="w-8 h-8 text-primary" />
          </div>
          <div className="text-2xl font-bold text-primary mb-1">
            {skills.filter(s => s.category === 'database').length}
          </div>
          <div className="text-sm text-muted-foreground">Bases de données</div>
        </Card>
      </motion.div>

      {/* Compétences par catégorie */}
      <div className="grid lg:grid-cols-2 gap-8 w-full">
        {Object.entries(categories).map(([categoryKey, category]) => {
          const categorySkills = getCategorySkills(categoryKey);
          if (categorySkills.length === 0) return null;

          const IconComponent = category.icon;

          return (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card glass className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    <IconComponent className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.label}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ProgressBar level={skill.level} name={skill.name} />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Compétences spéciales */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16"
      >
        <Card glass className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Expertise spécialisée</h3>
          <div className="grid md:grid-cols-3 gap-6 w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Développement Web</h4>
              <p className="text-sm text-muted-foreground">
                Applications React/Next.js performantes avec TypeScript et Tailwind CSS
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Architecture Data</h4>
              <p className="text-sm text-muted-foreground">
                Conception et optimisation de bases de données PostgreSQL et MariaDb
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">DevOps & CI/CD</h4>
              <p className="text-sm text-muted-foreground">
                Déploiement automatisé avec Docker et GitHub Actions
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Skills; 