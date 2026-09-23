# 🍴 Recettes-de-cuisine

Application web de recettes de cuisine réalisée avec **React**, **TypeScript**, **Vite**, **React Router** et **Redux Toolkit**.

L'application permet de consulter des recettes, de voir leur détail, de consulter un annuaire d'utilisateurs, de lire un blog et de se connecter avec un compte de l'API DummyJSON.

---

## 👥 Répartition du TP

On travaille à 3 avec des features précises à compléter par personne:

    Dylan: - Recettes / Favoris / Citation du jour

    Ranya: - Blog / Commentaires / Design

    Abdelmalek: - Socle Redux / Authentification / Espace membres

---

## 🚀 Technologies utilisées

* **React**
* **TypeScript**
* **Vite**
* **React Router**
* **Redux Toolkit** pour l'état global
* **axios** pour les appels à l'API
* **CSS**
* **API DummyJSON** pour les données (https://dummyjson.com)

---

## ⚙️ Installation

Cloner le projet puis installer les dépendances :

```bash
npm install
```

## ▶️ Lancer le projet

```bash
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite dans le terminal.

## 🏗️ Build

```bash
npm run build
```

```bash
npm run preview
```

---

## 🛣️ Routes

| Route          | Page           | Accès                |
| -------------- | -------------- | -------------------- |
| `/`            | Accueil        | Public               |
| `/recipes/:id` | Détail recette | Public               |
| `/users`       | Annuaire       | Public               |
| `/users/:id`   | Profil public  | Public               |
| `/posts`       | Blog           | Public               |
| `/posts/:id`   | Détail article | Public               |
| `/login`       | Connexion      | Visiteurs uniquement |
| `/profile`     | Mon profil     | Membres uniquement   |
| `/favoris`     | Mes favoris    | Membres uniquement   |
| `*`            | Erreur 404     | Public               |

---

## 📁 Structure du projet

```text
src/
│
├── pages/          une page par route
├── components/     composants réutilisables (Menu...)
├── routes/         liste des routes + GuestRoute et PrivateRoute
├── store/          store Redux
│   └── reducers/   un fichier par donnée (auth, user, recipe, favorite, post, comment, quote, loading)
├── types/          les interfaces TypeScript
├── main.tsx        appels à l'API au démarrage
└── index.css
```

---

## 🗂️ Données

Les données ne viennent plus de fichiers JSON mais de l'API DummyJSON :

| Donnée         | Endpoint                          |
| -------------- | --------------------------------- |
| Utilisateurs   | `https://dummyjson.com/users`     |
| Recettes       | `https://dummyjson.com/recipes`   |
| Articles       | `https://dummyjson.com/posts`     |
| Commentaires   | `https://dummyjson.com/comments`  |
| Citations      | `https://dummyjson.com/quotes`    |

Tous les appels sont faits une seule fois dans `main.tsx` au démarrage, puis rangés dans le store.
Les composants ne font aucun appel réseau : ils lisent le store avec `useSelector`.

---

## 🔄 Fonctionnement de la connexion

```text
Utilisateur
    ↓
Page /login
    ↓
Username + Password
    ↓
POST https://dummyjson.com/auth/login
    ↓
Token reçu → localStorage
    ↓
GET /auth/me avec le token
    ↓
dispatch(setLoggedUser(user))
    ↓
Page /profile
```

Le token est gardé dans le `localStorage`, donc la connexion est conservée
même après un rechargement de la page : au démarrage, `main.tsx` rappelle
`/auth/me` avec ce token.

La déconnexion vide le store et supprime le token.

Compte de test : `emilys` / `emilyspass`

---

## 🔐 Routes protégées

Deux composants dans `routes/` :

* `PrivateRoute` : réservé aux membres connectés (`/profile`, `/favoris`), sinon redirection vers `/login`
* `GuestRoute` : réservé aux visiteurs (`/login`), sinon redirection vers `/profile`

Comme l'utilisateur est récupéré en asynchrone au démarrage, un reducer `loading`
permet d'attendre la fin des appels avant de rediriger.

---

## 🎨 Design

* Fond gris clair
* Cartes blanches
* Bordures arrondies
* Grilles pour les recettes et les utilisateurs
* Effets `hover` sur les cartes
* Navigation commune avec le composant `Menu`, qui change selon que l'on est connecté ou non

---

## 👨‍💻 Auteurs

Projet réalisé avec React + TypeScript.

**Dylan**, **Ranya** et **Abdelmalek**
