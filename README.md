# Recettes de cuisine — TP de groupe

Plateforme communautaire de recettes construite avec React, TypeScript, Vite, React Router et Redux Toolkit.
Les donnees proviennent de l'API publique DummyJSON (https://dummyjson.com).

## Repartition du TP

On travaille à 3 avec des features précises à compléter par personne:
   
    Dylan: - Recettes / Favoris / Citation du jour
    
    Ranya: - Authentification & Espace membres
    
    Abdelmalek: - Blog / Commentaires / Design
    

## Installation

```bash
npm install
npm run dev
```

L'application demarre sur http://localhost:5173

## Architecture

| Dossier | Role |
|---|---|
| `src/pages/` | une vue par route |
| `src/components/` | composants reutilisables |
| `src/routes/` | carte des routes et gardes (GuestRoute, PrivateRoute) |
| `src/store/` | store Redux et reducers (un fichier par domaine) |
| `src/types/` | interfaces TypeScript |

Les appels reseau sont centralises dans `src/main.tsx` : les donnees sont chargees une seule fois
au demarrage, rangees dans le store, puis lues par les composants avec `useSelector`.
Le reducer `loading` passe a `false` quand tous les chargements sont resolus ; les gardes de route
l'attendent avant de rediriger.

## Routes

| Route | Vue | Acces |
|---|---|---|
| `/` | catalogue des recettes | public |
| `/recipes/:id` | fiche recette | public |
| `/users` | annuaire des membres | public |
| `/users/:id` | fiche membre | public |
| `/posts` | blog | public |
| `/posts/:id` | article et commentaires | public |
| `/login` | connexion | visiteurs uniquement |
| `/profile` | profil du membre connecte | membres uniquement |
| `/favoris` | recettes favorites | membres uniquement |
| `*` | page 404 | public |

## Repartition du travail

| Etudiant | Perimetre |
|---|---|
| Abdelmalek Ahmed-Messaoud | Socle Redux (store, reducers, types, chargements API, gardes de route), catalogue de recettes, favoris, widget citation du jour |
| _a completer_ | Authentification (login, token, deconnexion), annuaire, profil prive, menu contextuel |
| _a completer_ | Blog et commentaires (listing, detail, ajout et suppression avec mise a jour optimiste), page 404, charte graphique |

## Choix techniques

- **Redux Toolkit** pour l'etat global : les donnees chargees une fois sont accessibles partout sans nouvel appel reseau.
- **Un reducer par domaine** (`auth`, `user`, `recipe`, `favorite`, `post`, `comment`, `quote`, `loading`) pour que chaque membre de l'equipe travaille dans son propre fichier.
- **axios** pour les appels HTTP.
- **Gardes de route** (`GuestRoute`, `PrivateRoute`) basees sur le reducer `loading` afin d'eviter une redirection prematuree au rechargement de la page.
