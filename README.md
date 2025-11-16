# SportSee

Application de suivi sportif développée avec React et Vite.

## Installation

Installez les dépendances avec npm :

```bash
npm install
```

## Utilisation

Lancez l'application en mode développement :

```bash
npm run dev
```

L'application utilise React Router pour la navigation.

Les données sont actuellement mockées (fichier `src/data/apiMock.js`), avec un switch possible pour basculer vers l'API (dans `src/services/apiService.js`).

Pour les tests, deux utilisateurs sont disponibles :
- [Utilisateur 12](http://localhost:5173/12)
- [Utilisateur 18](http://localhost:5173/18)

Accédez à la racine `/` pour utiliser l'utilisateur par défaut (12).

Note : Cette configuration est temporaire pour les tests, en attendant la mise en place de l'authentification.
