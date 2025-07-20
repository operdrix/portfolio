# Déploiement VPS avec Reverse Proxy

## 🚀 **Configuration pour VPS**

### 📋 **Prérequis VPS**
- Docker installé
- Docker Compose installé
- Reverse proxy configuré (Nginx, Traefik, etc.)
- Port 3002 disponible

### 🔧 **Configuration**

#### 1. **Variables d'environnement**
Créez un fichier `.env` à la racine :
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

#### 2. **Configuration du Reverse Proxy**
Votre reverse proxy doit pointer vers `localhost:3002`

**Exemple Nginx :**
```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    
    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Exemple Traefik :**
```yaml
services:
  portfolio:
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portfolio.rule=Host(`votre-domaine.com`)"
      - "traefik.http.services.portfolio.loadbalancer.server.port=3002"
```

### 🐳 **Déploiement**

#### **Déploiement automatique**
```bash
# Rendre le script exécutable (si pas déjà fait)
chmod +x deploy.sh

# Déployer
./deploy.sh
```

#### **Déploiement manuel**
```bash
# Build et démarrer
docker-compose up -d --build

# Vérifier le statut
docker-compose ps

# Voir les logs
docker-compose logs -f portfolio
```

### 🔍 **Vérification**

#### **Health Check**
```bash
# Vérifier que l'application répond
curl http://localhost:3002/health

# Réponse attendue :
# {"status":"healthy","timestamp":"2024-01-01T12:00:00.000Z","uptime":123.456}
```

#### **Test complet**
```bash
# Test de l'application
curl -I http://localhost:3002

# Test du reverse proxy
curl -I http://votre-domaine.com
```

### 🔄 **Mise à jour**

#### **Déploiement continu**
```bash
# Pull des dernières modifications
git pull origin main

# Redéploiement
./deploy.sh
```

#### **Rollback rapide**
```bash
# Revenir à une version précédente
git checkout <commit-hash>

# Redéployer
./deploy.sh
```

### 📊 **Monitoring**

#### **Logs en temps réel**
```bash
# Logs de l'application
docker-compose logs -f portfolio

# Logs avec timestamps
docker-compose logs -f -t portfolio
```

#### **Statut des containers**
```bash
# Statut
docker-compose ps

# Ressources utilisées
docker stats portfolio-app
```

#### **Health check automatique**
```bash
# Script de monitoring
while true; do
    if ! curl -f http://localhost:3002/health > /dev/null 2>&1; then
        echo "$(date): Application down, redémarrage..."
        docker-compose restart portfolio
    fi
    sleep 60
done
```

### 🚨 **Dépannage**

#### **Problèmes courants**

1. **Port 3002 déjà utilisé**
   ```bash
   # Vérifier le port
   netstat -tulpn | grep :3002
   
   # Tuer le processus
   sudo kill -9 <PID>
   ```

2. **Variables d'environnement manquantes**
   ```bash
   # Vérifier les variables
   docker-compose config
   
   # Rebuild
   docker-compose up -d --build
   ```

3. **Reverse proxy ne fonctionne pas**
   ```bash
   # Tester directement l'application
   curl http://localhost:3002
   
   # Vérifier la configuration du reverse proxy
   sudo nginx -t  # pour Nginx
   ```

#### **Logs d'erreur**
```bash
# Logs d'erreur
docker-compose logs portfolio | grep error

# Logs de build
docker-compose logs portfolio | grep "npm run build"

# Logs de démarrage
docker-compose logs portfolio | grep "started server"
```

### 🔒 **Sécurité**

#### **Firewall**
```bash
# Ouvrir seulement le port 3002 en local
sudo ufw allow from 127.0.0.1 to any port 3002

# Ou bloquer complètement l'accès externe
sudo ufw deny 3002
```

#### **Utilisateur non-root**
L'application s'exécute déjà avec l'utilisateur `nextjs` (UID 1001)

### 📈 **Performance**

#### **Optimisations automatiques**
- ✅ **Standalone mode** : Next.js optimisé
- ✅ **Multi-stage build** : Images plus petites
- ✅ **Health checks** : Surveillance automatique
- ✅ **Restart policy** : Redémarrage automatique

#### **Monitoring des ressources**
```bash
# Utilisation CPU/Mémoire
docker stats portfolio-app

# Espace disque
docker system df
```

### 🔄 **Maintenance**

#### **Nettoyage périodique**
```bash
# Nettoyer les images non utilisées
docker system prune -a

# Nettoyer les volumes non utilisés
docker volume prune
```

#### **Backup**
```bash
# Backup de la configuration
tar czf portfolio-backup-$(date +%Y%m%d).tar.gz .env docker-compose.yml

# Backup des logs
docker-compose logs portfolio > portfolio-logs-$(date +%Y%m%d).log
```

## 🎯 **Résultat**

Votre portfolio est maintenant :
- ✅ **Déployé sur le port 3002** pour votre reverse proxy
- ✅ **Script de déploiement automatique** (`./deploy.sh`)
- ✅ **Health checks** intégrés
- ✅ **Logs centralisés** et monitoring
- ✅ **Sécurisé** avec utilisateur non-root
- ✅ **Optimisé** pour la production

Votre application est prête pour votre VPS ! 🚀 