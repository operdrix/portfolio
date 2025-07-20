# Configuration EmailJS avec Gmail

## 🚀 **Étapes de configuration (5 minutes) :**

### 1. **Créer un compte EmailJS**

1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez-vous à votre dashboard

### 2. **Configurer Gmail**

1. Dans EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Sélectionnez "Gmail"
4. Connectez-vous avec votre compte Gmail
5. **Notez le Service ID** (ex: `service_abc123`)

### 3. **Créer un template d'email**

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```html
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Sujet:</strong> {{subject}}</p>
<hr>
<h3>Message:</h3>
<p>{{message}}</p>
<hr>
<p><em>Message envoyé depuis votre portfolio</em></p>
```

4. **Notez le Template ID** (ex: `template_xyz789`)

### 4. **Récupérer votre clé publique**

1. Dans "Account" → "API Keys"
2. **Copiez votre Public Key** (ex: `user_def456`)

### 5. **Variables d'environnement**

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id_ici
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id_ici
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key_ici
```

**IMPORTANT** : Les variables doivent commencer par `NEXT_PUBLIC_` pour être accessibles côté client.

## 🎯 **Avantages EmailJS :**

- ✅ **Configuration en 5 minutes**
- ✅ **Gratuit** (200 emails/mois)
- ✅ **Pas de serveur** nécessaire
- ✅ **Sécurisé** avec clés API
- ✅ **Templates personnalisables**
- ✅ **Support Gmail, Outlook, etc.**

## 🔧 **Test**

1. Redémarrez votre serveur
2. Remplissez le formulaire
3. Vérifiez que l'email arrive dans votre Gmail

## 💰 **Tarifs**

- **Gratuit** : 200 emails/mois
- **Pro** : 1000 emails/mois ($15/mois)
- **Business** : 5000 emails/mois ($50/mois)

## 🚨 **Sécurité**

- Les clés sont publiques mais sécurisées
- EmailJS limite les abus automatiquement
- Vous pouvez révoquer les clés à tout moment

## 🎉 **Résultat**

Votre formulaire enverra des emails via Gmail sans aucune configuration complexe ! 