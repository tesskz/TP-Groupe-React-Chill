# 🍴 Recettes-de-cuisine

Application web de recettes de cuisine réalisée avec **React**, **TypeScript**, **Vite** et **React Router**.

L'application permet de consulter des recettes, de voir leur détail, de consulter un annuaire d'utilisateurs et de se connecter avec un compte présent dans un fichier JSON.

---

## 🚀 Technologies utilisées

* **React**
* **TypeScript**
* **Vite**
* **React Router**
* **CSS**
* **JSON** pour les données des recettes et des utilisateurs

---

## 📋 Fonctionnalités

### 🏠 Accueil

La page d'accueil affiche la liste des recettes disponibles.

Chaque recette contient :

* Une image
* Un nom
* Le temps de préparation
* Un lien vers sa page détaillée

Les recettes sont récupérées depuis `recipes.json`.

---

### 🍕 Détail d'une recette

Chaque recette possède une page dédiée.

La page affiche :

* L'image de la recette
* Le nom
* Le temps de préparation
* Le temps de cuisson
* La liste des ingrédients
* Les instructions

La recette affichée est récupérée grâce à son `id` dans l'URL.

Exemple :

```text
/recipe/1
```

---

### 👥 Annuaire

La page **Annuaire** affiche les utilisateurs présents dans `users.json`.

Pour chaque utilisateur, on affiche :

* Sa photo
* Son username

Chaque profil est cliquable.

Route :

```text
/annuaire
```

---

### 👤 Profil public

Un utilisateur peut également avoir une page de profil public.

Route :

```text
/user/:id
```

Cette page utilise l'ID de l'utilisateur pour rechercher ses informations dans `users.json`.

---

### 🔐 Connexion

La page de connexion permet de se connecter avec un compte présent dans `users.json`.

L'utilisateur renseigne :

* Son username
* Son mot de passe

Les informations sont comparées avec les utilisateurs présents dans le fichier JSON.

Si les informations sont correctes, l'utilisateur est redirigé vers :

```text
/profile/me
```

---

### 🙍 Profil personnel

La page `/profile/me` affiche les informations de l'utilisateur actuellement connecté.

L'utilisateur connecté est transmis à la page grâce au `state` de React Router.

La page affiche notamment :

* Photo
* Prénom
* Nom
* ID
* Username
* Email
* Mot de passe (caché) ex : "******"
* Téléphone
* Âge
* Genre
* Date de naissance
* Rôle
* Adresse
* Ville
* Code postal
* Pays
* Entreprise
* Département
* Poste

Route :

```text
/profile/me
```

---

## 📁 Structure du projet

```text
src/
│
├── components/
│   ├── Menu.tsx
│   ├── Menu.css
│   ├── RecipeDetail.tsx
│   ├── RecipeDetail.css
│   ├── Annuaire.tsx
│   ├── Annuaire.css
│   ├── Error.tsx
│   ├── User.tsx
│   ├── User.css
│   ├── Profile.tsx
│   ├── Profile.css
│   ├── Login.tsx
│   └── Login.css
│
├── App.tsx
├── App.css
├── main.tsx
├── recipes.json
├── users.json
└── index.css
```

---

## 🗂️ Données

### `recipes.json`

Ce fichier contient les recettes de l'application.

Exemple :

```json
{
  "recipes": [
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese"
      ],
      "instructions": [
        "Preheat the oven.",
        "Roll out the pizza dough.",
        "Bake the pizza."
      ]
    }
  ]
}
```

### `users.json`

Ce fichier contient les utilisateurs de l'application.

Chaque utilisateur possède des informations personnelles ainsi que des informations concernant son adresse et son entreprise.

Exemple :

```json
{
  "users": [
    {
      "id": 34,
      "firstName": "Jotaro",
      "lastName": "Kujo",
      "username": "jotarokujo",
      "email": "jotaro.kujo@x.dummyjson.com",
      "password": "jotaro123",
      "phone": "+81 3-1234-0003",
      "age": 17,
      "gender": "male",
      "birthDate": "1970-02-15",
      "image": "https://dummyjson.com/icon/jotarokujo/128",
      "role": "user",
      "address": {
        "address": "Kujo Family Residence",
        "city": "Tokyo",
        "postalCode": "100-0001",
        "country": "Japan"
      },
      "company": {
        "name": "Kujo Family",
        "department": "Marine Biology",
        "title": "Student"
      }
    }
  ]
}
```

---

## 🛣️ Routes

| Route         | Page           | Description                    |
| ------------- | -------------- | ------------------------------ |
| `/`           | Accueil        | Liste des recettes             |
| `/recipe/:id` | Détail recette | Affiche une recette            |
| `/annuaire`   | Annuaire       | Liste des utilisateurs         |
| `/user/:id`   | Profil public  | Affiche un utilisateur         |
| `/login`      | Connexion      | Connexion avec un compte JSON  |
| `/profile/me` | Mon profil     | Affiche l'utilisateur connecté |

---

## 🔄 Fonctionnement de la connexion

Le fonctionnement est volontairement simple :

```text
Utilisateur
    ↓
Page /login
    ↓
Username + Password
    ↓
Recherche dans users.json
    ↓
Utilisateur trouvé ?
    ↓
   Oui
    ↓
navigate("/profile/me", { state: user })
    ↓
Page /profile/me
    ↓
useLocation()
    ↓
Affichage du profil
```

Le `state` permet de transmettre directement l'utilisateur connecté à la page `/profile/me`.

---

## 🎨 Design

L'application utilise un design simple et cohérent :

* Fond gris clair
* Cartes blanches
* Bordures arrondies
* Ombres légères
* Grilles pour les recettes et les utilisateurs
* Effets `hover` sur les cartes
* Navigation commune avec le composant `Menu`

---

## ⚙️ Installation

Cloner le projet puis installer les dépendances :

```bash
npm install
```

---

## ▶️ Lancer le projet

Pour lancer le serveur de développement :

```bash
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite dans le terminal.

---

## 🏗️ Build

Pour créer une version de production :

```bash
npm run build
```

Pour tester la version de production :

```bash
npm run preview
```

---

## 👨‍💻 Auteur

Projet réalisé avec React + TypeScript.

**Joffret Kévin**

---

## 📌 Remarque

Ce projet est un projet d'apprentissage de **React**, **TypeScript**, **React Router**, des composants et de la gestion de données avec des fichiers JSON.

```
