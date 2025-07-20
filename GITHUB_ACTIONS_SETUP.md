# 🚀 Configuration GitHub Actions pour Déploiement VPS

## 📋 Prérequis

### 1. Secrets GitHub à configurer

Allez dans votre repository GitHub → Settings → Secrets and variables → Actions, puis ajoutez ces secrets :

#### 🔐 Secrets EmailJS
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

#### 🌐 Secrets VPS
```
VPS_HOST=ip_ou_domaine_de_votre_vps
VPS_USERNAME=deploy
VPS_PORT=22
VPS_PASSWORD=mot_de_passe_du_user_deploy
```

### 2. Configuration SSH sur le VPS

#### Vérifier l'authentification par mot de passe :
```bash
# Sur le VPS, vérifier que l'authentification par mot de passe est activée
sudo nano /etc/ssh/sshd_config

# S'assurer que cette ligne est présente et non commentée :
# PasswordAuthentication yes
```

#### Redémarrer SSH si nécessaire :
```bash
sudo systemctl restart sshd
```

### 3. Préparation du VPS

#### Créer le dossier de déploiement :
```bash
sudo mkdir -p /opt/portfolio-app
sudo chown deploy:deploy /opt/portfolio-app
```

#### Installer Docker et Docker Compose :
```bash
# Si pas déjà installé
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker deploy
```

## 🔄 Workflows

### Branche `dev` → Tests et Build
- ✅ Linting
- ✅ Type checking  
- ✅ Build de l'application
- 📦 Upload des artifacts

### Branche `main` → Déploiement VPS
- 🏗️ Build de l'application
- 📤 Copie des fichiers vers `/opt/portfolio-app`
- 🐳 Build et démarrage Docker
- ✅ Vérification de santé
- 🔄 Sauvegarde automatique

## 🚀 Utilisation

### Développement :
```bash
git checkout dev
# Faire vos modifications
git add .
git commit -m "feat: nouvelle fonctionnalité"
git push origin dev
```

### Déploiement :
```bash
git checkout main
git merge dev
git push origin main
# Le déploiement se lance automatiquement
```

## 📊 Monitoring

### Vérifier le statut :
```bash
# Sur le VPS
cd /opt/portfolio-app
docker-compose ps
docker-compose logs -f portfolio
```

### Health check :
```bash
curl http://localhost:3002/api/health
```

## 🔧 Dépannage

### Problèmes courants :

1. **Erreur SSH** : Vérifier le mot de passe dans les secrets et l'authentification par mot de passe
2. **Permissions** : Vérifier que le user `deploy` a les droits
3. **Port occupé** : Vérifier qu'aucune autre app n'utilise le port 3002
4. **Build échoué** : Vérifier les variables d'environnement EmailJS

### Logs GitHub Actions :
- Aller dans l'onglet "Actions" de votre repository
- Cliquer sur le workflow en cours
- Voir les logs détaillés de chaque étape 