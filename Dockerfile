# Dockerfile pour le portfolio Next.js
FROM node:22-alpine AS base

# Installer les dépendances nécessaires et mettre à jour les packages
RUN apk add --no-cache libc6-compat && \
    apk update && \
    apk upgrade && \
    rm -rf /var/cache/apk/*

# Étape de dépendances
FROM base AS deps
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Étape de build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables d'environnement pour le build
ENV NEXT_TELEMETRY_DISABLED=1

# Build de l'application
RUN npm run build

# Étape de production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Créer un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires
COPY --from=builder /app/public ./public

# Copier les fichiers de build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Exposer le port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Démarrer l'application
USER nextjs
CMD ["node", "server.js"] 