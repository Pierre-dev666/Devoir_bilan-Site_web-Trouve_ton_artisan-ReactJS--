# Trouve Ton Artisan - React + Vite

Une application React moderne pour référencer des artisans, développée avec Vite, Tailwind CSS, React Router et ESLint.

## 📦 Technologies utilisées

- [React 19](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [ESLint](https://eslint.org/)

## 🚀 Démarrage rapide

### 1. Cloner le projet

```bash
git clone https://github.com/votre-utilisateur/trouve-ton-artisan.git
cd trouve-ton-artisan
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run start
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173) (port par défaut de Vite).

### 4. Lancer le linter

```bash
npm run lint
```

---

## 📁 Structure du projet

```
.
├── index.html               # Point d'entrée HTML
├── vite.config.js           # Configuration Vite
├── eslint.config.js         # Configuration ESLint
├── package.json             # Dépendances et scripts
├── public/                  # Dossier public (si utilisé)
└── src/
    ├── main.jsx             # Entrée React
    ├── App.jsx              # Composant principal
    ├── components/          # Composants réutilisables
    └── assets/              # Images, icônes, etc.
```

---

## 🔍 Scripts disponibles

| Script         | Description                                 |
|----------------|---------------------------------------------|
| `npm start`    | Démarre le serveur de développement         |
| `npm run build`| Génère les fichiers de production           |
| `npm run preview` | Prévisualise la build locale             |
| `npm run lint` | Lance le linter avec ESLint                 |

---

## 🧑‍💻 Développement

- L'entrée HTML est dans `index.html`
- Le code React commence par `src/main.jsx`
- React Router est utilisé pour la navigation
- Le style est entièrement géré avec Tailwind CSS

---

## 📝 Licence

Ce projet est sous licence MIT.
