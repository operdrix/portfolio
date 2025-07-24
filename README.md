# 🚀 Portfolio Olivier PERDRIX

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/operdrix/portfolio?logo=github)](https://github.com/operdrix/portfolio/releases)
[![CI Lint & Build](https://github.com/operdrix/portfolio/actions/workflows/lint-build.yml/badge.svg)](https://github.com/operdrix/portfolio/actions/workflows/lint-build.yml)
[![Production Release & Deploy](https://github.com/operdrix/portfolio/actions/workflows/release.yml/badge.svg)](https://github.com/operdrix/portfolio/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Un portfolio moderne et futuriste développé avec Next.js, TypeScript et Tailwind CSS.

---
## ✨ Fonctionnalités

- 📱 **Responsive** - Optimisé pour tous les appareils
- ⚡ **Performance** - Chargement rapide avec Next.js 15
- 🎭 **Animations** - Animations fluides avec Framer Motion
- 🔍 **SEO Optimisé** - Metadata, sitemap et robots.txt
- 🌙 **Thème Sombre** - Interface adaptée aux préférences système
- 📊 **Analytics Ready** - Prêt pour l'intégration d'analytics

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 15.4.2
- **Language** : TypeScript
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Déploiement** : Github Action

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/operdrix/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📁 Structure du Projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── sections/          # Sections du portfolio
│   │   │   ├── Hero.tsx       # Section d'accueil
│   │   │   ├── About.tsx      # Section à propos
│   │   │   ├── Skills.tsx     # Section compétences
│   │   │   ├── Experience.tsx # Section expérience
│   │   │   ├── Projects.tsx   # Section projets
│   │   │   └── Contact.tsx    # Section contact
│   │   ├── globals.css        # Styles globaux
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Page d'accueil
│   ├── components/
│   │   ├── ui/                # Composants UI de base
│   │   │   ├── Button.tsx     # Composant bouton
│   │   │   ├── Card.tsx       # Composant carte
│   │   │   └── Section.tsx    # Composant section
│   │   ├── navigation.tsx     # Navigation principale
│   │   ├── Footer.tsx         # Pied de page
│   │   ├── LoadingSpinner.tsx # Spinner de chargement
│   │   └── ParallaxBackground.tsx # Effets parallaxe
│   ├── data/
│   │   └── personal.ts        # Données personnelles
│   └── types/
│       └── index.ts           # Types TypeScript
└── public/                    # Assets statiques
```

## 🎨 Palette de Couleurs

- **Primaire** : `#00D4FF` (Bleu électrique)
- **Secondaire** : `#8B5CF6` (Violet néon)
- **Accent** : `#10B981` (Vert cyber)
- **Fond** : `#0A0A0A` (Noir profond)
- **Texte** : `#FFFFFF` (Blanc pur)

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env.local` à partir de `.env.example` et modifier les clés

### Personnalisation

1. **Données personnelles** : Modifier `src/data/personal.ts`
2. **Couleurs** : Modifier `src/app/globals.css`
3. **SEO** : Modifier `src/app/layout.tsx`

## 🚀 Déploiement

Le déploiement en production est totalement automatisé grâce à **GitHub Actions** et **Docker**.

### 🚦 **Workflow CI/CD**

- **Lint & Build** : sur chaque PR et push (`.github/workflows/lint-build.yml`)
- **Release & Déploiement** : à chaque création de tag (`.github/workflows/release.yml`)
    - Build et push de l'image Docker (taguée)
    - Déploiement automatique sur VPS via SSH

### 🔒 **Secrets nécessaires (à configurer sur GitHub)**

- `DOCKERHUB_USERNAME` / `DOCKERHUB_TOKEN` : accès au Docker Hub pour push/pull l'image
- `DEPLOY_HOST` / `DEPLOY_PORT` : IP/port du VPS cible
- `DEPLOY_USER` / `DEPLOY_SSH_KEY` : utilisateur et clé privée SSH pour déploiement
- `APP_PORT` : port d'exposition sur le VPS

### 📦 **Versionnage & Release**

- **Créer une release** :  
  1. Exécuter la commande ./release.sh 1.2.3
  2. L'image Docker est taguée et déployée automatiquement

### 💡 **Pour personnaliser votre déploiement**  
Voir les secrets et les fichiers `.github/workflows/`

---


## 📄 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Auteur

**Olivier PERDRIX**
- GitHub : [@operdrix](https://github.com/operdrix)
- LinkedIn : [olivier-perdrix](https://linkedin.com/in/olivier-perdrix)
- Email : olivierperdrix_at_live.fr

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
