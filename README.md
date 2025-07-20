# 🚀 Portfolio Olivier PERDRIX

Un portfolio moderne et futuriste développé avec Next.js, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités

- 🎨 **Design Futuriste** - Interface moderne avec animations fluides
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
- **Déploiement** : Vercel (recommandé)

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
├── public/                    # Assets statiques
└── TODO.md                    # Plan d'action
```

## 🎨 Palette de Couleurs

- **Primaire** : `#00D4FF` (Bleu électrique)
- **Secondaire** : `#8B5CF6` (Violet néon)
- **Accent** : `#10B981` (Vert cyber)
- **Fond** : `#0A0A0A` (Noir profond)
- **Texte** : `#FFFFFF` (Blanc pur)

## 📱 Sections du Portfolio

### 🏠 Hero Section
- Introduction avec animations futuristes
- Badge de disponibilité
- Liens sociaux animés
- Particules flottantes

### 👤 À Propos
- Informations personnelles
- Statistiques (expérience, projets)
- Points forts
- Présentation EDF

### 💻 Compétences
- Barres de progression animées
- Catégorisation par domaine
- Statistiques globales
- Expertise spécialisée

### 📈 Expérience
- Timeline moderne
- Expérience EDF actuelle
- Formation EDSGI Lyon
- Technologies utilisées

### 🚀 Projets
- Cartes de projets avec hover effects
- Projets mis en avant
- Liens GitHub et demo
- Technologies par projet

### 📞 Contact
- Formulaire de contact
- Informations de contact
- Liens sociaux
- Call to action

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://olivier-perdrix.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Personnalisation

1. **Données personnelles** : Modifier `src/data/personal.ts`
2. **Couleurs** : Modifier `src/app/globals.css`
3. **SEO** : Modifier `src/app/layout.tsx`

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Autres Plateformes

Le projet peut être déployé sur :
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Olivier PERDRIX**
- GitHub : [@operdrix](https://github.com/operdrix)
- LinkedIn : [olivier-perdrix](https://linkedin.com/in/olivier-perdrix)
- Email : olivier.perdrix@example.com

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icônes
- [Vercel](https://vercel.com/) - Déploiement

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
