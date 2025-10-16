# Ivan Petrov - Portfolio

> Un portfolio Next.js moderne et interactif présentant l'expertise de Technical Product Specialist avec des animations de pointe et un design responsive.

[![Next.js](https://img.shields.io/badge/Next.js-13.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?style=flat&logo=react)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=flat)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.13-purple?style=flat)](https://www.framer.com/motion/)

[Démo en ligne](https://ivan-petrov-portfolio.vercel.app) • [Contact](#contact)

---

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Ce qui rend ce portfolio spécial](#ce-qui-rend-ce-portfolio-spécial)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [Stack technologique expliquée](#stack-technologique-expliquée)
- [Pourquoi ces technologies ?](#pourquoi-ces-technologies-)
- [Structure de l'application](#structure-de-lapplication)
- [Pages et fonctionnalités](#pages-et-fonctionnalités)
- [Fonctionnalités interactives en détail](#fonctionnalités-interactives-en-détail)
- [Systèmes d'animation](#systèmes-danimation)
- [Démarrage](#démarrage)
- [Variables d'environnement](#variables-denvironnement)
- [Scripts disponibles](#scripts-disponibles)
- [Déploiement](#déploiement)
- [Architecture du projet](#architecture-du-projet)
- [Contribution](#contribution)
- [Licence](#licence)

---

## 🎯 Vue d'ensemble

Cette application portfolio représente la transition d'**Ivan Petrov** de la vente automobile pour devenir **Technical Product Specialist** et **Solutions Engineer**. Construite avec des technologies web de pointe, elle démontre à la fois l'expertise technique et la sophistication du design.

### Objectif
- Présenter 5+ projets professionnels avec des métriques d'impact business
- Présenter les services : Stratégie Produit, Architecture de Solutions Techniques, Transformation Digitale
- Offrir une expérience utilisateur interactive et engageante
- Permettre un contact direct pour opportunités freelance/CDI

### Secteurs cibles
- FinTech
- SaaS
- E-commerce
- Solutions B2B

---

## ✨ Ce qui rend ce portfolio spécial

### 1. **Expérience d'animation premium**
- **Boutons magnétiques** qui s'attirent vers votre curseur grâce à GSAP
- **Modal de prévisualisation de projet personnalisé** qui suit le mouvement de la souris
- **Effets de parallaxe** sur les images et le texte
- **Transitions de page fluides** avec preloader animé
- **Animations déclenchées au scroll** qui révèlent le contenu progressivement

### 2. **Vitrine de projets interactive**
- **Bascule vue grille/liste** pour naviguer entre les projets
- **Modal de prévisualisation activé au survol** (desktop) montrant les miniatures des projets
- **Liens directs vers les projets** (mobile) pour un accès instantané
- **Cartes de technologies** avec descriptions détaillées dans des modals popup

### 3. **Contenu axé business**
- Métriques réelles : **+72% de génération de leads** pour le projet TotalEnergies
- **3 services principaux** clairement définis avec des sections animées
- **30+ technologies** présentées avec icônes et descriptions
- **Études de cas mises en avant** démontrant le ROI et l'impact business

### 4. **Design entièrement responsive**
- Design desktop-first avec adaptations tablette et mobile
- Interactions tactiles sur appareils mobiles
- Rendu conditionnel basé sur la taille d'écran
- Chargement d'images optimisé pour tous les appareils

---

## 🚀 Fonctionnalités principales

### Visuelles et interactives
- ✅ **Preloader animé** - Salutations multilingues avec morphing SVG
- ✅ **Effets de curseur personnalisé** - Prévisualisation de projet suivant la souris
- ✅ **Boutons magnétiques** - Attraction du curseur alimentée par GSAP
- ✅ **Défilement parallaxe** - Plusieurs couches se déplaçant à différentes vitesses
- ✅ **Défilement fluide** - Intégration de Locomotive Scroll
- ✅ **Bascule grille/liste** - Changer les modes d'affichage des projets
- ✅ **Navigation mobile** - Menu coulissant avec animation courbe

### Sections de contenu
- 🏠 **Page d'accueil** - Hero avec slider de nom animé
- 📖 **Page À propos** - Biographie, services, expertise, globe animé
- 💼 **Page Travaux** - Vitrine de projets avec détails technologiques
- 📧 **Page Contact** - Formulaire fonctionnel avec intégration email

### Techniques
- ⚡ **Next.js 13 App Router** - Routage moderne avec Server/Client Components
- 🎨 **Modules SCSS** - Style scopé aux composants
- 📧 **Intégration Nodemailer** - Emails du formulaire de contact
- 🔒 **Protection anti-spam Honeypot** - Sécurité du formulaire
- 🖼️ **Optimisation d'images** - Next.js Image avec traitement Sharp
- 📱 **Points de rupture responsive** - Mobile (<768px), Tablette (768-1023px), Desktop (≥1024px)

---

## 🛠️ Stack technologique expliquée

### Framework principal
- **[Next.js 13.4.10](https://nextjs.org/)** - Framework React avec App Router pour applications web modernes
  - Server Components pour performances optimales
  - Optimisation d'images intégrée
  - Routes API pour fonctionnalités backend

### Bibliothèques frontend
- **[React 18.2.0](https://reactjs.org/)** - Bibliothèque UI basée sur les composants
- **[Sass 1.83.1](https://sass-lang.com/)** - Préprocesseur CSS avec variables, imbrication et mixins
- **Modules SCSS** - Style scopé pour éviter les conflits de noms de classes

### Puissances d'animation
- **[GSAP 3.12.2](https://greensock.com/gsap/)** - Bibliothèque d'animation de niveau professionnel
  - **ScrollTrigger** - Animations basées sur le scroll
  - **quickTo()** - Effets de suivi de souris haute performance
  - **Timeline** - Contrôle d'animation séquencé

- **[Framer Motion 10.13.0](https://www.framer.com/motion/)** - Bibliothèque d'animation React
  - Animations déclaratives avec variants
  - Transitions de page
  - Transformations de scroll avec useScroll et useTransform

- **[Locomotive Scroll 5.0.0-beta.8](https://github.com/locomotivaproductions/locomotive-scroll)** - Défilement fluide avec effets avancés

### Backend et outils
- **[Nodemailer 6.9.16](https://nodemailer.com/)** - Envoi d'emails pour formulaire de contact
- **[Sharp 0.33.5](https://sharp.pixelplumbing.com/)** - Traitement d'images haute performance
- **[ESLint 8.45.0](https://eslint.org/)** - Qualité et cohérence du code

---

## 💡 Pourquoi ces technologies ?

### Next.js 13 - Le choix du framework moderne

**Raisons du choix :**
1. **App Router (nouvelle génération)**
   - Architecture plus claire avec dossiers dédiés par page
   - Server Components par défaut = moins de JavaScript côté client
   - Meilleure performance SEO grâce au rendu serveur

2. **Optimisation automatique**
   - Images optimisées automatiquement (WebP, responsive, lazy loading)
   - Code splitting automatique par route
   - Préchargement intelligent des pages

3. **Routes API intégrées**
   - Pas besoin de serveur backend séparé
   - Gestion du formulaire de contact directement dans l'app
   - Sécurisé : les clés API restent côté serveur

4. **Déploiement simplifié**
   - Vercel (créateurs de Next.js) offre déploiement en 1 clic
   - CI/CD automatique sur chaque push Git
   - Rollback instantané en cas de problème

**Alternative considérée :** Create React App
**Pourquoi Next.js gagne :** CRA nécessite configuration manuelle pour SSR, optimisation images, routing. Next.js offre tout cela out-of-the-box.

---

### GSAP - Le roi des animations web

**Raisons du choix :**
1. **Performance inégalée**
   - 60fps garantis même sur animations complexes
   - Optimisations GPU automatiques
   - `quickTo()` = mise à jour de valeurs ultra-rapide (parfait pour suivre le curseur)

2. **ScrollTrigger puissant**
   - Animations liées au scroll avec contrôle précis
   - Détection de direction de scroll
   - Parallaxe facile à implémenter

3. **Timeline sophistiquée**
   - Séquencer plusieurs animations
   - Contrôle précis du timing (pause, play, reverse)
   - Labels pour navigation dans l'animation

4. **Compatibilité navigateurs**
   - Fonctionne sur tous les navigateurs (même anciens)
   - Gestion automatique des préfixes CSS
   - Fallbacks intégrés

**Cas d'usage dans le portfolio :**
- Boutons magnétiques (attraction curseur avec elastic easing)
- Slider de nom animé (scroll horizontal infini)
- Modal de projet suivant la souris (quickTo pour fluidité)
- Bouton arrondi avec effet de remplissage

**Alternative considérée :** CSS animations seules
**Pourquoi GSAP gagne :** CSS limité pour animations complexes (pas de timeline, pas de contrôle programmatique, performances variables)

---

### Framer Motion - Animations déclaratives React

**Raisons du choix :**
1. **Syntaxe React-native**
   - Composants `<motion.div>` intégrés à JSX
   - Props pour animations (`whileHover`, `animate`, `exit`)
   - Logique d'animation proche du code React

2. **Variants puissants**
   - États d'animation nommés réutilisables
   - Propagation automatique aux enfants
   - Code plus lisible et maintenable

3. **Gestion scroll intégrée**
   - `useScroll()` pour progression de scroll
   - `useTransform()` pour mapper valeurs (0-1 → pixels, degrés, etc.)
   - Parallaxe en quelques lignes de code

4. **AnimatePresence**
   - Animations d'entrée/sortie de composants
   - Parfait pour preloader, modals, menus
   - Gestion automatique du démontage

**Cas d'usage dans le portfolio :**
- Preloader (slide up + fade out)
- Modal de projet (scale in/out)
- Navigation mobile (slide from right)
- Footer (rise up au scroll)
- Parallaxe images (transformation X selon scroll Y)

**Alternative considérée :** React Spring
**Pourquoi Framer Motion gagne :** Syntaxe plus simple, meilleure intégration avec variants, documentation supérieure.

---

### Locomotive Scroll - Défilement premium

**Raisons du choix :**
1. **Défilement fluide avec inertie**
   - Effet "smooth" comme sur Mac
   - Momentum naturel
   - Expérience haut de gamme

2. **Vitesses de scroll personnalisées**
   - Attribut `data-scroll-speed` sur chaque élément
   - Crée effet parallaxe facilement
   - Plusieurs couches à vitesses différentes

3. **Détection de scroll pour classes**
   - Ajoute classes CSS quand élément visible
   - Déclenche animations au bon moment
   - Parfait pour révélations progressives

4. **Compatible mobile**
   - Gestion tactile incluse
   - Détection automatique du device
   - Désactivation possible sur mobile si besoin

**Cas d'usage dans le portfolio :**
- Défilement global de l'application
- Effets parallaxe sur images
- Animations déclenchées à la visibilité

**Alternative considérée :** Scroll CSS natif `scroll-behavior: smooth`
**Pourquoi Locomotive gagne :** Plus de contrôle, effets avancés impossibles en CSS seul, cohérence cross-browser.

---

### SCSS Modules - Styling moderne

**Raisons du choix :**
1. **Scoping automatique**
   - Chaque composant a son propre namespace
   - Plus de conflits de noms de classes
   - `.button` dans Header ne clash pas avec `.button` dans Footer

2. **Features SCSS**
   - Variables pour couleurs, tailles, etc.
   - Nesting pour lisibilité
   - Mixins pour réutilisation
   - Calculs mathématiques

3. **Colocation avec composants**
   - `Component.jsx` + `style.module.scss` dans même dossier
   - Facile à trouver et maintenir
   - Import explicite = comprendre les dépendances

4. **Autoprefixing**
   - Next.js ajoute automatiquement préfixes navigateurs
   - `-webkit-`, `-moz-`, etc. gérés automatiquement
   - Compatibilité maximale

**Structure typique :**
```
Landing/
├── Landing.jsx
├── animation.js
└── style.module.scss
```

**Alternative considérée :** Tailwind CSS
**Pourquoi SCSS Modules gagne :** Plus de contrôle sur animations complexes, pas de classes utilitaires longues en JSX, meilleure organisation pour gros composants.

---

### Nodemailer - Envoi d'emails

**Raisons du choix :**
1. **Standard Node.js**
   - Bibliothèque la plus utilisée pour emails en Node
   - Mature et stable (depuis 2010)
   - Excellent support et documentation

2. **Flexible**
   - Support SMTP (Gmail, Outlook, services perso)
   - Templates HTML
   - Pièces jointes

3. **Sécurisé**
   - Route API Next.js = côté serveur uniquement
   - Credentials jamais exposés au client
   - Variables d'environnement

4. **Simple à configurer**
   ```javascript
   const transporter = nodemailer.createTransport({
     host: process.env.MAIL_HOST,
     port: 587,
     auth: {
       user: process.env.MAIL_USER,
       pass: process.env.MAIL_PASS
     }
   });
   ```

**Cas d'usage dans le portfolio :**
- Formulaire de contact envoie email à yohanpetrov@gmail.com
- Données du formulaire formatées en email HTML
- Confirmation de succès/erreur à l'utilisateur

**Alternative considérée :** SendGrid/Mailgun API
**Pourquoi Nodemailer gagne :** Gratuit, pas de limite d'envoi, contrôle total, peut changer de fournisseur SMTP facilement.

---

### Sharp - Optimisation d'images

**Raisons du choix :**
1. **Ultra rapide**
   - Bibliothèque C++ (libvips) sous le capot
   - 4-5x plus rapide que ImageMagick
   - Traitement asynchrone

2. **Utilisé par Next.js**
   - Next.js Image utilise Sharp automatiquement
   - Conversion WebP/AVIF
   - Redimensionnement responsive

3. **Qualité préservée**
   - Algorithmes de resize intelligents
   - Compression avec perte minimale
   - Support formats modernes (WebP, AVIF)

**Impact sur le portfolio :**
- Images projet réduites de 2-3 MB à 100-200 KB
- Chargement page 3-4x plus rapide
- Score Lighthouse amélioré (95+)

**Alternative considérée :** Traitement manuel Photoshop
**Pourquoi Sharp gagne :** Automatique, responsive automatique (plusieurs tailles), format moderne (WebP), lazy loading intégré.

---

## 📁 Structure de l'application

```
Ivan-Petrov-Portfolio/
├── app/                          # Répertoire Next.js 13 App Router
│   ├── layout.js                 # Layout racine avec fonts et metadata
│   ├── page.js                   # Page d'accueil (Landing)
│   ├── globals.scss              # Styles globaux
│   ├── about/
│   │   └── page.js               # Page À propos
│   ├── works/
│   │   └── page.js               # Page Travaux/Projets
│   ├── contact/
│   │   └── page.js               # Page Contact
│   └── api/
│       └── sendMail/
│           └── route.js          # Endpoint API email (POST)
│
├── src/
│   ├── components/               # Composants UI réutilisables
│   │   ├── About/                # Sections page À propos
│   │   │   ├── AboutHeader.jsx
│   │   │   ├── AboutImageSection.jsx
│   │   │   ├── AboutServices.jsx
│   │   │   ├── GlobeSection.jsx
│   │   │   └── *.module.scss
│   │   ├── Contact/              # Composant formulaire contact
│   │   │   ├── ContactSection.jsx
│   │   │   └── ContactSection.module.scss
│   │   ├── Description/          # Section à propos pour accueil
│   │   │   ├── Description.jsx
│   │   │   ├── animation.js
│   │   │   └── style.module.scss
│   │   ├── Footer/               # Footer avec CTA animé
│   │   │   ├── Footer.jsx
│   │   │   └── style.module.scss
│   │   ├── Header/               # En-tête navigation
│   │   │   ├── Header.jsx
│   │   │   ├── animation.js
│   │   │   ├── style.module.scss
│   │   │   └── nav/
│   │   │       ├── Navigation.jsx
│   │   │       ├── Link.jsx
│   │   │       └── Curve.jsx
│   │   ├── Landing/              # Section hero
│   │   │   ├── Landing.jsx
│   │   │   ├── animation.js
│   │   │   └── style.module.scss
│   │   ├── Preloader/            # Animation de chargement
│   │   │   ├── Preloader.jsx
│   │   │   ├── anim.js
│   │   │   └── style.module.scss
│   │   ├── Projects/             # Section projets accueil
│   │   │   ├── Projects.jsx
│   │   │   ├── components/
│   │   │   │   └── project/
│   │   │   │       └── Project.jsx
│   │   │   └── style.module.scss
│   │   ├── SlidingImages/        # Slider d'images parallaxe
│   │   │   ├── SlidingImages.jsx
│   │   │   └── style.module.scss
│   │   └── Works/                # Sections page travaux
│   │       ├── AboutWorks.jsx
│   │       ├── Modal.jsx
│   │       ├── WorksSection.jsx
│   │       └── *.module.scss
│   │
│   ├── common/                   # Composants utilitaires partagés
│   │   ├── Magnetic/
│   │   │   ├── Magnetic.jsx      # Effet magnétique GSAP
│   │   │   └── style.module.scss
│   │   └── RoundedButton/
│   │       ├── RoundedButton.jsx # Bouton animé
│   │       └── style.module.scss
│   │
│   └── hooks/                    # Hooks React personnalisés
│       └── useIsDesktop.js       # Hook de point de rupture responsive (1024px)
│
├── public/
│   ├── images/                   # Assets images statiques
│   │   ├── Projets (Burger, HiTech, Fitness, ELF, TotalEnergies)
│   │   ├── Icônes (GridBlack.png, ListWhite.png, etc.)
│   │   ├── Images de profil
│   │   └── Logos technologies (30+ icônes stack tech)
│   ├── favicon.ico
│   └── ...
│
├── node_modules/                 # Dépendances
├── .env.local                    # Variables d'environnement (pas dans repo)
├── .eslintrc.json                # Configuration ESLint
├── .gitignore                    # Règles d'ignore Git
├── next.config.js                # Configuration Next.js
├── package.json                  # Dépendances du projet
└── README.md                     # Ce fichier
```

---

## 📄 Pages et fonctionnalités

### 🏠 **Page d'accueil** (`/`)

**Objectif :** Première impression présentant le profil d'Ivan et projets sélectionnés

**Sections :**
1. **Preloader** (2 secondes)
   - Cycle de salutations : "Hello" → "Bonjour" → "Ciao" → "Привет" → "やあ" → "Привiт" → "Guten tag"
   - Animation de morphing de chemin SVG (courbes de Bézier s'aplatissent)
   - Glisse vers le haut et disparaît en fondu pour révéler le contenu

2. **Hero Landing**
   - Slider de nom répété animé : "Ivan Petrov - Ivan Petrov - Ivan Petrov..."
   - Animation horizontale déclenchée par le scroll (GSAP ScrollTrigger)
   - Slogan : "Technical Product Specialist | Solutions Engineer"
   - Statut de disponibilité actuel
   - Effets de parallaxe sur le texte

3. **Section Description/À propos**
   - Révélation de texte animé mot par mot (Framer Motion)
   - Mise en avant de réalisation clé : "+72% de leads" pour TotalEnergies
   - Bouton call-to-action "À propos" (effet magnétique)
   - Extrait biographique avec parcours professionnel

4. **Vitrine de projets**
   - **5 projets vedettes :**
     - Burger Town (Orange) - E-commerce MERN
     - Hi Tech Store (Gris clair) - MERN + Stripe + Redux
     - Fitness Pro (Vert) - Laravel/Angular
     - ELF.com (Noir) - CMS Drupal
     - TotalEnergies (Rouge) - Transformation digitale
   - **Desktop :** Curseur personnalisé + modal de prévisualisation activé au survol
   - **Mobile :** Liens directs cliquables vers projets
   - Bascule vue grille/liste
   - Modal affiche image projet avec label "Voir"

5. **Galerie d'images glissantes**
   - Deux sliders horizontaux se déplaçant en directions opposées
   - Effet parallaxe lié à la progression du scroll
   - Miniatures de projets en boucle continue

6. **Footer**
   - Call-to-action : "Travaillons ensemble"
   - Bouton contact avec effet magnétique
   - Animation basée sur le scroll (monte du bas)
   - Liens sociaux/contact

**Interactions clés :**
- Défilement fluide (Locomotive Scroll)
- Boutons magnétiques au survol
- Modal de projet suit le curseur
- Animations déclenchées par le scroll partout

---

### 📖 **Page À propos** (`/about`)

**Objectif :** Plongée en profondeur dans le parcours, l'expertise et l'offre de services d'Ivan

**Sections :**
1. **AboutHeader**
   - Titre : "Technical Product Specialist avec impact Business"
   - Sous-titre expliquant le double profil (tech + business)

2. **GlobeSection**
   - Visualisation globe CSS animé
   - Cercles concentriques avec perspective 3D
   - Fonctionnalité desktop uniquement

3. **AboutImageSection**
   - **Biographie complète**
     - Parcours de la vente automobile au développement web
     - Transition vers Technical Product Specialist
     - Philosophie et approche principales
   - **Image de profil**
     - Effet de scroll parallaxe
     - Photo professionnelle
   - **Compétences**
     - Planification de roadmap produit
     - Communication avec parties prenantes
     - Leadership technique
   - **Pourquoi je me démarque** (3 points clés avec icônes GIF animées)
     - Mentalité business-first
     - Polyvalence full-stack
     - Résultats mesurables
   - **Ce qui me motive**
     - Déclaration de mission
     - Valeurs et approche
   - **Expertise technique**
     - Frontend : React, Next.js, Vue, Angular
     - Backend : Node.js, PHP/Laravel
     - Méthodologies : Agile/Scrum, CI/CD

4. **AboutServices** - 3 services principaux
   - **01 : Stratégie Produit & Planification de Roadmap**
     - Implémentation Agile/Scrum
     - Framework OKR
     - Définition et suivi KPI
     - Icône : GIF animé

   - **02 : Architecture de Solutions Techniques**
     - Développement full-stack
     - Optimisation de performances
     - Design et intégration d'API
     - Configuration pipeline CI/CD
     - Icône : GIF animé

   - **03 : Transformation Digitale & Solutions Client**
     - Migrations complexes (Drupal, WordPress)
     - Gestion des parties prenantes
     - Livraison axée ROI
     - Gestion du changement
     - Icône : GIF animé

   - Points animés et effet de rétrécissement de cercle basé sur le scroll (desktop)

5. **Footer**
   - Identique à la page d'accueil

**Interactions clés :**
- Animations de fade-in au scroll (variants Framer Motion)
- Effets d'image parallaxe
- Cartes de service animées
- Ajustements de layout responsive

---

### 💼 **Page Travaux** (`/works`)

**Objectif :** Vitrine complète de tous les projets et technologies

**Sections :**
1. **WorksSection** - Grille/Liste de projets
   - Mêmes 5 projets que page d'accueil
   - Bascule entre vues grille et liste
   - Desktop : Survol affiche curseur personnalisé + modal
   - Mobile : Liens directs vers projets
   - Bouton CTA "Travaillons ensemble" en bas

2. **AboutWorks** - Détail des projets

   **A. Projets vedettes (4 études de cas)**
   - **TotalEnergies + ELF** - Cliquer pour voir modal
     - Migration Drupal 9/10
     - +72% génération de leads en 6 mois
     - 40% amélioration vitesse site
     - Tech : Drupal, PHP, MySQL, Twig
     - Image : Capture d'écran projet

   - **Burger Town** - Cliquer pour voir modal
     - Plateforme e-commerce stack MERN
     - Suivi de commande en temps réel
     - Dashboard admin
     - Tech : React, Node.js, Express, MongoDB, Redux

   - **Hi Tech Store** - Cliquer pour voir modal
     - E-commerce complet avec intégration paiement
     - Checkout Stripe
     - Gestion d'état Redux
     - Tests Jest
     - Tech : React, Node.js, MongoDB, Stripe, Redux, Jest

   - **Fitness Pro** - Cliquer pour voir modal
     - Plateforme de présentation produit
     - Backend Laravel + frontend Angular
     - API RESTful
     - Tech : Laravel, Angular, PostgreSQL

   **B. Grille de technologies (30+ technologies)**
   - **Frontend :** React, Vue, Angular, Next.js, Sass, Tailwind, Bootstrap, Twig
   - **Backend :** Node.js, PHP/Laravel, Express.js
   - **Bases de données :** MongoDB, PostgreSQL, MySQL
   - **Outils :** Jira, Confluence, Figma, Git, GitHub, Docker
   - **Tests :** Jest, Cypress, Postman
   - **Déploiement :** Vercel, Fly.io, AWS, Netlify
   - **Paiement :** Stripe
   - **CMS :** Drupal, WordPress

   - Chaque carte tech affiche icône + nom
   - **Cliquer pour ouvrir modal** avec description détaillée
   - Modal explique : ce que c'est, pourquoi c'est utilisé, bénéfices

   **C. Compétences & Expertise (liste de 10 points)**
   - Stratégie produit & planification roadmap
   - Design d'architecture technique
   - Développement full-stack (MERN, Drupal, Laravel)
   - Design et intégration d'API
   - Optimisation de performances
   - CI/CD & DevOps
   - Leadership Agile/Scrum
   - Communication avec parties prenantes
   - Prise de décision data-driven
   - Projets de transformation digitale

   **D. Ce qui motive mon travail**
   - Déclaration de mission
   - Valeurs principales
   - Approche des projets

3. **Footer**
   - Identique aux autres pages

**Interactions clés :**
- Bascule grille/liste avec échange d'icônes
- Popups modals de technologies (cliquer pour ouvrir/fermer)
- Modal de projet vedette (cliquer sur carte pour voir détails)
- États de survol sur toutes les cartes
- Animations conditionnelles (desktop vs mobile)

---

### 📧 **Page Contact** (`/contact`)

**Objectif :** Permettre communication directe pour opportunités business

**Layout :**
Layout responsive à deux colonnes (empilées sur mobile)

**Colonne gauche - Formulaire de contact :**
- **Nom** (requis, input texte)
- **Email** (requis, input email)
- **Organisation** (optionnel, input texte)
- **Services recherchés** (optionnel, input texte)
- **Message** (requis, textarea)
- **Champ Honeypot** (caché, protection anti-spam)
- **Bouton Envoyer** (effet magnétique)

**Comportement du formulaire :**
1. L'utilisateur remplit les champs
2. À l'envoi : valide champs requis (Nom, Email, Message)
3. Vérifie champ honeypot (si rempli = bot spam, abandonne)
4. Envoie requête POST à `/api/sendMail`
5. Email envoyé à `yohanpetrov@gmail.com` via Nodemailer
6. Succès : Alerte + formulaire se vide
7. Erreur : Alerte avec message d'erreur

**Colonne droite - Informations business :**
- **Photo de profil** (image d'Ivan)
- **Coordonnées**
  - Email : yohanpetrov@gmail.com
  - Téléphone : +33 6 18 02 64 70
- **Détails business**
  - Rôle : Technical Product Specialist / Solutions Engineer
  - Localisation : Paris, France
  - Focus : FinTech, SaaS, E-commerce, B2B
- **Engagez-moi via** (avec boutons liens magnétiques)
  - Comet
  - Malt
  - Little Big Connection
  - Upwork

**Footer :**
- Identique aux autres pages

**Interactions clés :**
- Boutons magnétiques sur tous les liens
- Validation de formulaire à l'envoi
- Envoi d'email en temps réel
- Layout responsive (empilé sur mobile)

---

## 🎨 Fonctionnalités interactives en détail

### 1. **Effet de bouton magnétique**

**Composant :** [`Magnetic.jsx`](src/common/Magnetic/Magnetic.jsx)

**Comment ça fonctionne :**
```javascript
// 1. Obtenir référence bouton et calculer sa position centrale
const magnetic = useRef(null);

// 2. Au mouvement de souris sur bouton :
const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const { height, width, left, top } = magnetic.current.getBoundingClientRect();
  const x = clientX - (left + width / 2);
  const y = clientY - (top + height / 2);

  // 3. Utiliser GSAP quickTo pour animation fluide haute performance
  // Force d'attraction 35%, easing élastique pour sensation élastique
  xTo(x * 0.35);
  yTo(y * 0.35);
}

// 4. Au départ souris : réinitialiser position
xTo(0);
yTo(0);
```

**Appliqué à :**
- Liens de navigation
- Bouton contact footer
- Bouton envoi formulaire
- Tous les boutons CTA
- Liens plateformes "Engagez-moi"

**Effet :** Le bouton semble magnétiquement attiré vers le curseur, créant une micro-interaction engageante

---

### 2. **Curseur personnalisé & Modal de prévisualisation de projet**

**Composant :** [`Projects.jsx`](src/components/Projects/Projects.jsx) & [`WorksSection.jsx`](src/components/Works/WorksSection.jsx)

**Comment ça fonctionne :**
```javascript
// 1. Suivre position souris globalement
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// 2. Au mouvement souris n'importe où sur page :
const handleMouseMove = (e) => {
  setMousePosition({ x: e.clientX, y: e.clientY });
}

// 3. Au survol de projet :
const manageModal = (active, index, x, y) => {
  setModal({ active, index });
  // Utiliser GSAP quickTo pour suivi fluide curseur (450ms)
  moveItems(x, y);
  moveCustomCursor(x, y);
}

// 4. Modal animé avec Framer Motion
<motion.div
  variants={scaleAnimation}
  animate={modal.active ? "enter" : "closed"}
  style={{ left: modalPosition.x, top: modalPosition.y }}
>
  {/* Afficher image prévisualisation projet */}
</motion.div>
```

**Comportement desktop :**
- Curseur personnalisé remplace pointeur par défaut au survol projet
- Modal de prévisualisation suit curseur en douceur
- Modal scale in/out avec animation élastique
- Affiche miniature projet avec fond codé par couleur
- Label "Voir" indique cliquabilité

**Comportement mobile :**
- Pas de curseur personnalisé (utilise comportement tactile par défaut)
- Les projets sont des liens directs cliquables
- Pas de modal au survol (améliore performances)

---

### 3. **Bascule vue grille/liste**

**Emplacement :** Projets (accueil) et page Travaux

**Implémentation :**
```javascript
// Gestion d'état
const [viewMode, setViewMode] = useState('grid');

// Fonction de bascule
const toggleView = () => {
  setViewMode(viewMode === 'grid' ? 'list' : 'grid');
}

// Rendu conditionnel
<div className={viewMode === 'grid' ? styles.gridLayout : styles.listLayout}>
  {projects.map((project) => (
    <ProjectItem project={project} viewMode={viewMode} />
  ))}
</div>
```

**Différences visuelles :**
- **Vue grille :**
  - 2-3 colonnes (responsive)
  - Grandes miniatures de projets
  - Titre sous l'image
  - Layout compact

- **Vue liste :**
  - Colonne unique
  - Titre projet + label "Design & Développement"
  - Layout plus propre, minimal
  - Meilleur pour scanner noms projets

**Boutons de bascule :**
- Desktop : Visibles en coin supérieur droit
- Icônes échangent : Icône grille ↔ Icône liste
- Style d'état actif (icônes noires vs blanches)
- Mobile : Cachés via CSS, défaut sur grille

---

### 4. **Animation de bouton arrondi**

**Composant :** [`RoundedButton.jsx`](src/common/RoundedButton/RoundedButton.jsx)

**Séquence d'animation :**
```javascript
// Créer timeline GSAP
timeline.current = gsap.timeline({ paused: true });

// Entrée survol : Cercle s'étend et monte
timeline.current
  .to('.circle', {
    top: "-25%",
    width: "150%",
    duration: 0.4,
    ease: "power3.in"
  }, "enter")
  .to('.circle', {
    top: "-150%",
    width: "125%",
    duration: 0.25
  }, "exit");

// À l'entrée souris : jouer timeline
button.addEventListener('mouseenter', () => {
  timeline.current.tweenFromTo('enter', 'exit');
});

// Au départ souris : inverser
button.addEventListener('mouseleave', () => {
  timeline.current.play();
});
```

**Effet visuel :**
- Cercle d'arrière-plan s'étend de 100% à 150% de largeur
- Se déplace du bas (0%) vers le haut (-150%)
- Crée effet liquide "remplissage puis débordement"
- Enveloppé dans composant `Magnetic` pour attraction curseur
- Easing élastique fluide

**Utilisé pour :**
- Bouton "À propos"
- CTA "Travaillons ensemble"
- Bouton envoi formulaire
- Tous les boutons d'action principaux

---

### 5. **Animations basées sur le scroll**

#### **A. Slider de nom Landing** (GSAP ScrollTrigger)

**Composant :** [`Landing.jsx`](src/components/Landing/Landing.jsx)

```javascript
// Créer texte de nom répété
const phrase = "Ivan Petrov -";
const repeatedText = Array(30).fill(phrase).join(" ");

// Animer au scroll
useEffect(() => {
  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    // Glisser gauche/droite selon direction scroll
    xPercent += 0.1 * direction;
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(slider.current, { xPercent });
    requestAnimationFrame(animate);
  }

  // Détecter direction scroll
  ScrollTrigger.create({
    onUpdate: (self) => {
      direction = self.direction === 1 ? -1 : 1;
    }
  });

  animate();
}, []);
```

**Effet :** Texte glissant horizontal continu qui inverse direction selon le scroll

---

#### **B. Transformation scroll Footer** (Framer Motion)

**Composant :** [`Footer.jsx`](src/components/Footer/Footer.jsx)

```javascript
// Suivre progression scroll
const { scrollYProgress } = useScroll({
  target: container,
  offset: ["start end", "end end"]
});

// Transformer valeurs selon scroll
const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

// Appliquer aux éléments
<motion.div style={{ y }}>Contenu footer monte</motion.div>
<motion.div style={{ x }}>Bouton glisse à droite</motion.div>
```

**Effet :**
- Footer monte de sous le viewport pendant que l'utilisateur scroll vers le bas
- Bouton CTA glisse vers la droite simultanément
- Révélation fluide style parallaxe

---

#### **C. Parallaxe images glissantes**

**Composant :** [`SlidingImages.jsx`](src/components/SlidingImages/SlidingImages.jsx)

```javascript
// Deux sliders se déplaçant en directions opposées
const slider1X = useTransform(scrollYProgress, [0, 1], [0, 150]);
const slider2X = useTransform(scrollYProgress, [0, 1], [0, -150]);

<motion.div style={{ x: slider1X }}>
  {/* Projets glissent à droite */}
</motion.div>
<motion.div style={{ x: slider2X }}>
  {/* Projets glissent à gauche */}
</motion.div>
```

**Effet :** Deux rangées d'images projet scrollent horizontalement en directions opposées pendant que l'utilisateur scroll verticalement

---

#### **D. Animation cercle services À propos**

**Composant :** [`AboutServices.jsx`](src/components/About/AboutServices.jsx)

```javascript
// Desktop uniquement
const isDesktop = useIsDesktop(1024);

if (isDesktop) {
  const circleHeight = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return <motion.div style={{ height: circleHeight }} />;
}
```

**Effet :** Cercle animé rétrécit de 50px à 0px pendant que l'utilisateur scroll dans section services

---

### 6. **Preloader / Transition de page**

**Composant :** [`Preloader.jsx`](src/components/Preloader/Preloader.jsx)

**Séquence d'animation :**
```javascript
// 1. Afficher salutations (7 langues, 150ms chacune, première pendant 1000ms)
const words = ["Hello", "Bonjour", "Ciao", "Привет", "やあ", "Привiт", "Guten tag"];

// 2. Morphing chemin SVG (courbes s'aplatissent)
const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width/2} ${height + 300} 0 ${height} L0 0`;
const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width/2} ${height} 0 ${height} L0 0`;

// Animer avec GSAP
gsap.to(path, {
  attr: { d: targetPath },
  duration: 0.75,
  ease: "power3.in"
});

// 3. Après 2 secondes : glisser vers le haut et disparaître en fondu
<motion.div
  variants={slideUp}
  initial="initial"
  exit="exit"
  animate={isLoading ? "initial" : "exit"}
/>
```

**Effet :**
- Salutation multilingue engageante
- Animation courbe SVG fluide
- Transition propre vers contenu page
- S'exécute à chaque chargement de page

---

### 7. **Navigation menu mobile**

**Composant :** [`Navigation.jsx`](src/components/Header/nav/Navigation.jsx)

**Comment ça fonctionne :**
```javascript
// Bouton menu (mobile uniquement)
<div className={styles.button} onClick={() => setIsActive(!isActive)}>
  <div className={styles.burger}></div>
</div>

// Navigation coulissante plein écran
<motion.div
  variants={menuSlide}
  initial="initial"
  animate={isActive ? "enter" : "exit"}
  className={styles.menu}
>
  {/* Liens navigation */}
</motion.div>

// Variants d'animation
const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};
```

**Fonctionnalités :**
- Icône burger menu (3 lignes)
- Glisse depuis le côté droit
- Couvre plein écran
- 4 liens navigation : Accueil, Travaux, À propos, Contact
- Lien actif mis en évidence
- Animation sortie SVG courbe (fioriture visuelle)
- Ferme automatiquement au clic sur lien

**Comportement desktop :**
- Bouton menu caché
- Liens navigation visibles dans en-tête
- Pas d'animation coulissante

---

## 🎬 Systèmes d'animation

### GSAP (GreenSock Animation Platform)

**Cas d'usage :**
1. **ScrollTrigger** - Animations liées au scroll
   - Mise à l'échelle bouton en-tête selon position scroll
   - Changement de direction slider nom landing
   - Animations section travaux

2. **quickTo()** - Mises à jour valeurs haute performance
   - Suivi curseur personnalisé (durée 450-800ms)
   - Suivi position modal
   - Attraction bouton magnétique (350ms avec easing élastique)

3. **Timeline** - Animations séquencées
   - Effet survol bouton arrondi (multi-étapes)
   - Morphing SVG preloader
   - Animations multi-éléments coordonnées

**Configuration GSAP :**
```javascript
// Bouton magnétique
gsap.quickTo(element, 'x', {
  duration: 0.8,
  ease: 'elastic.out(1, 0.3)'
});

// ScrollTrigger
ScrollTrigger.create({
  trigger: element,
  start: "0px 0px",
  onUpdate: (self) => {
    // Logique animation selon direction/progression scroll
  }
});

// Timeline
const tl = gsap.timeline({ paused: true });
tl.to(element, { y: -50, duration: 0.4, ease: "power3.in" })
  .to(element, { y: -150, duration: 0.25 });
```

---

### Framer Motion

**Cas d'usage :**
1. **Variants** - États d'animation nommés
   ```javascript
   const slideUp = {
     initial: { y: 0 },
     exit: { y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
   };

   const fadeInUpVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
   };

   const scaleAnimation = {
     initial: { scale: 0, x: "-50%", y: "-50%" },
     enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
     closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4 } }
   };
   ```

2. **useScroll & useTransform** - Transformations de valeurs liées au scroll
   ```javascript
   const { scrollYProgress } = useScroll({
     target: container,
     offset: ["start end", "end end"]
   });

   const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
   const x = useTransform(scrollYProgress, [0, 1], [0, 150]);
   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
   ```

3. **AnimatePresence** - Animations entrée/sortie
   ```javascript
   <AnimatePresence mode="wait">
     {isLoading && <Preloader />}
   </AnimatePresence>
   ```

4. **Animations survol** - États interactifs
   ```javascript
   <motion.div
     whileHover={{ scale: 1.05 }}
     transition={{ duration: 0.3 }}
   >
     Image
   </motion.div>
   ```

---

### Locomotive Scroll

**Objectif :** Défilement fluide avec momentum et effets de scroll personnalisés

**Implémentation :**
```javascript
// Envelopper app entière ou page
<div data-scroll-container>
  <div data-scroll-section>
    <div data-scroll data-scroll-speed="0.5">
      {/* Élément parallaxe lent */}
    </div>
    <div data-scroll data-scroll-speed="1.5">
      {/* Élément parallaxe rapide */}
    </div>
  </div>
</div>
```

**Bénéfices :**
- Défilement inertiel fluide
- Cohérence cross-browser
- Vitesse de scroll personnalisée par élément
- Bascules de classes déclenchées par scroll
- Compatible mobile

---

## 🚀 Démarrage

### Prérequis
- **Node.js** 14.x ou supérieur
- Gestionnaire de packages **npm** ou **yarn**
- **Git** pour contrôle de version

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/FreezyXV/Ivan-Petrov-Portfolio.git
   cd Ivan-Petrov-Portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   # Renommer .env.example en .env.local (si disponible)
   # Ou créer nouveau fichier .env.local
   ```

   Ajouter les variables suivantes :
   ```env
   # Configuration email (Nodemailer)
   MAIL_HOST=smtp.gmail.com
   MAIL_USER=votre-email@gmail.com
   MAIL_PASS=votre-mot-de-passe-app
   ```

   **Configuration Gmail :**
   - Activer l'authentification à 2 facteurs
   - Générer mot de passe d'application : [Compte Google → Sécurité → Mots de passe d'application](https://myaccount.google.com/apppasswords)
   - Utiliser le mot de passe 16 caractères généré comme `MAIL_PASS`

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Ouvrir le navigateur**
   - Naviguer vers [http://localhost:3000](http://localhost:3000)
   - Le portfolio devrait charger avec animation preloader

---

## 🔐 Variables d'environnement

Créer un fichier `.env.local` dans le répertoire racine :

```env
# Configuration Email (Requis pour formulaire contact)
MAIL_HOST=smtp.gmail.com          # Serveur SMTP
MAIL_PORT=587                      # Port TLS (optionnel, défaut 587)
MAIL_USER=votre-email@gmail.com   # Email expéditeur
MAIL_PASS=votre-mot-passe-app     # Mot de passe app (pas mot de passe régulier)

# Email destinataire (Optionnel, défaut yohanpetrov@gmail.com dans code)
CONTACT_EMAIL=destinataire@example.com
```

**Notes de sécurité :**
- ✅ `.env.local` est dans `.gitignore` (pas commité dans repo)
- ✅ Utiliser mots de passe app, pas mots de passe compte réguliers
- ✅ Ne jamais exposer credentials dans code côté client
- ✅ Route API email est côté serveur uniquement

---

## 📜 Scripts disponibles

### Développement
```bash
npm run dev
# Lance serveur développement Next.js sur http://localhost:3000
# Hot-reload activé (rafraîchissement auto sur changements code)
# Affiche messages erreur et avertissements détaillés
```

### Build de production
```bash
npm run build
# Crée build production optimisé dans dossier .next
# Minifie JavaScript et CSS
# Optimise images avec Sharp
# Génère HTML statique où possible
```

### Serveur de production
```bash
npm run start
# Sert build production sur http://localhost:3000
# Exécuter 'npm run build' d'abord
# Pas de hot-reload (mode production)
```

### Linting
```bash
npm run lint
# Lance ESLint sur tous fichiers JavaScript/JSX
# Vérifie qualité et cohérence code
# Rapporte erreurs et avertissements
```

### Corriger problèmes linting
```bash
npm run lint -- --fix
# Corrige automatiquement problèmes ESLint corrigeables
# Corrections manuelles requises pour problèmes complexes
```

---

## 🌐 Déploiement

### Vercel (Recommandé)

**Ce portfolio est déployé sur Vercel** - la façon la plus simple de déployer apps Next.js.

**Étapes :**
1. Pusher code vers dépôt GitHub
2. Aller sur [Vercel Dashboard](https://vercel.com/dashboard)
3. Cliquer "New Project"
4. Importer votre dépôt GitHub
5. Configurer :
   - **Framework Preset :** Next.js
   - **Root Directory :** `./` (défaut)
   - **Build Command :** `npm run build` (défaut)
   - **Output Directory :** `.next` (défaut)
6. Ajouter variables d'environnement :
   - `MAIL_HOST`
   - `MAIL_USER`
   - `MAIL_PASS`
7. Cliquer "Deploy"

**Déploiements automatiques :**
- Chaque push vers branche `main` déclenche nouveau déploiement
- Déploiements preview pour pull requests
- Rollback instantané disponible

**Domaine personnalisé :**
- Ajouter domaine personnalisé dans paramètres projet Vercel
- Mettre à jour enregistrements DNS comme indiqué
- Certificat SSL auto-généré

---

### Autres plateformes

#### Netlify
```bash
# Commande build
npm run build

# Répertoire publication
.next

# Ajouter variables d'environnement dans dashboard Netlify
```

#### AWS Amplify
```bash
# Suivre guide déploiement AWS Amplify
# Connecter dépôt GitHub
# Configurer paramètres build
# Ajouter variables d'environnement
```

#### Auto-hébergé
```bash
# Builder version production
npm run build

# Démarrer serveur
npm run start

# Utiliser PM2 pour gestion processus
pm2 start npm --name "ivan-portfolio" -- start

# Proxy inverse Nginx (port 3000 → 80/443)
```

---

## 🏗️ Architecture du projet

### Philosophie des composants

**Principes Atomic Design :**
- **Common** - Plus petits composants réutilisables (Magnetic, RoundedButton)
- **Components** - Sections plus grandes composées de composants common
- **Pages** - Pages complètes composées de multiples composants
- **Layouts** - Wrappers structure page

**Organisation fichiers :**
```
NomComposant/
├── NomComposant.jsx       # Composant React
├── style.module.scss      # Styles scopés
└── animation.js           # Logique animation (si complexe)
```

---

### Flux de données

**Données projet :**
- Stockées comme arrays/objects dans fichiers composant
- Pas de CMS externe (données statiques)
- Facile à mettre à jour directement dans code

**Soumission formulaire :**
```
ContactSection (Client)
  ↓ Requête POST
Route API /api/sendMail (Serveur)
  ↓ Nodemailer
Email envoyé au destinataire
  ↓ Réponse
Message Succès/Erreur (Client)
```

---

### Stratégie de styling

**Modules SCSS :**
```scss
// style.module.scss
.container {
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.button {
  background: var(--primary-color);

  &:hover {
    background: var(--primary-dark);
  }
}
```

**Usage :**
```jsx
import styles from './style.module.scss';

<div className={styles.container}>
  <button className={styles.button}>Cliquer</button>
</div>
```

**Bénéfices :**
- Noms classes scopés (pas de conflits)
- Variables pour cohérence
- Imbrication pour lisibilité
- Media queries inline
- Auto-préfixage pour compatibilité navigateurs

---

### Optimisations de performance

1. **Composant Next.js Image**
   - Optimisation images automatique
   - Chargement lazy sous le pli
   - Images responsive (srcset)
   - Format WebP quand supporté

2. **Code Splitting**
   - Imports dynamiques pour composants lourds
   - Splitting basé route (automatique)
   - Taille bundle initial réduite

3. **Server Components**
   - Zéro JavaScript envoyé pour contenu statique
   - Chargement page initial plus rapide
   - Bénéfices SEO

4. **Optimisation animation**
   - GSAP quickTo() pour suivi curseur 60fps
   - Transform/opacity pour accélération GPU
   - Animations conditionnelles (desktop vs mobile)
   - requestAnimationFrame pour boucles fluides

5. **Optimisation assets**
   - Sharp pour traitement images
   - CSS/JS minifié en production
   - Tree-shaking code inutilisé

---

## 🤝 Contribution

Ceci est un **projet portfolio personnel** appartenant à Ivan Petrov.

**Les contributions ne sont pas acceptées de tierces parties.**

Pour demandes ou opportunités collaboration, veuillez utiliser le [formulaire de contact](https://ivan-petrov-portfolio.vercel.app/contact).

---

## 📄 Licence

Ce projet est à **fins de démonstration personnelle uniquement**.

**Tous droits réservés** - Ivan Petrov

Veuillez nous contacter avant de réutiliser des composants majeurs ou d'étendre la base de code.

Aucune licence open-source explicite n'est attachée.

---

## 📞 Contact

**Ivan Petrov**

- **Email :** yohanpetrov@gmail.com
- **Téléphone :** +33 6 18 02 64 70
- **Portfolio :** [https://ivan-petrov-portfolio.vercel.app](https://ivan-petrov-portfolio.vercel.app)

**Plateformes freelance :**
- [Comet](https://www.comet.co/)
- [Malt](https://www.malt.fr/)
- [Little Big Connection](https://www.littlebigconnection.com/)
- [Upwork](https://www.upwork.com/)

---

## 🙏 Remerciements

**Technologies :**
- [Next.js](https://nextjs.org/) - Framework React
- [GSAP](https://greensock.com/gsap/) - Bibliothèque d'animation
- [Framer Motion](https://www.framer.com/motion/) - Bibliothèque d'animation React
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) - Défilement fluide
- [Nodemailer](https://nodemailer.com/) - Envoi d'emails
- [Vercel](https://vercel.com/) - Plateforme de déploiement

**Inspiration design :**
- Tendances design portfolio moderne
- Expériences web interactives
- Présentation axée business

---

**Fait avec ❤️ par Ivan Petrov** • **© 2025**
