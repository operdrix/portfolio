#!/bin/bash

# Script de déploiement pour le portfolio
# Usage: ./deploy.sh

set -e  # Arrêter en cas d'erreur

echo "🚀 Déploiement du portfolio..."

# Vérifier que Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé"
    exit 1
fi

# Vérifier que le fichier .env existe
if [ ! -f .env ]; then
    echo "❌ Le fichier .env n'existe pas"
    echo "📝 Créez un fichier .env avec vos variables EmailJS"
    exit 1
fi

# Arrêter les containers existants
echo "🛑 Arrêt des containers existants..."
docker-compose down

# Nettoyer les images non utilisées (optionnel)
read -p "🧹 Nettoyer les images Docker non utilisées ? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🧹 Nettoyage des images..."
    docker system prune -f
fi

# Build et démarrer les containers
echo "🔨 Build et démarrage des containers..."
docker-compose up -d --build

# Attendre que l'application soit prête
echo "⏳ Attente du démarrage de l'application..."
sleep 10

# Vérifier que l'application fonctionne
echo "🔍 Vérification de l'application..."
if curl -f http://localhost:3002/health > /dev/null 2>&1; then
    echo "✅ Application déployée avec succès !"
    echo "🌐 Accessible sur : http://localhost:3002"
    echo "🏥 Health check : http://localhost:3002/health"
else
    echo "❌ L'application ne répond pas"
    echo "📋 Logs de l'application :"
    docker-compose logs portfolio
    exit 1
fi

# Afficher les logs
echo "📋 Logs récents :"
docker-compose logs --tail=20 portfolio

echo "🎉 Déploiement terminé !"
echo "💡 Pour voir les logs en temps réel : docker-compose logs -f portfolio" 