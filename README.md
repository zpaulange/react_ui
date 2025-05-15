# datatable

Ce projet est une application React utilisant Vite et TypeScript, proposant notamment un composant Select personnalisable.

## Démarrage rapide

1. **Installation des dépendances**

```sh
npm install
```

2. **Lancement du serveur de développement**

```sh
npm run dev
```

## Structure du projet

- `src/ui/Select/Select.tsx` : Composant Select personnalisable avec recherche, couleurs de statut et compte.
- `src/ui/Select/select.module.scss` : Styles SCSS associés au composant Select.
- `src/App.tsx` : Exemple d'utilisation du composant Select.
- `src/assets/styles/scss/_variables.scss` : Variables SCSS globales.

## Utilisation du composant Select

Exemple d'import et d'utilisation :

```tsx
import Select from './ui/Select/Select'

const options = [
  { label: 'Option 1', value: 'option1', statusColor: 'red', count: 5 },
  { label: 'Option 2', value: 'option2', statusColor: 'green', count: 10 }
]

<Select
  options={options}
  onSelect={option => console.log(option)}
  statusColors={true}
  count={true}
/>
```

### Props disponibles

- `options` : tableau d'options `{ label, value, statusColor?, count? }`
- `onSelect(option)` : callback lors de la sélection
- `isLabel` : affiche le label à côté de la valeur
- `statusColors` : affiche un indicateur de couleur
- `count` : affiche un compteur

## Scripts utiles

- `npm run dev` : démarre le serveur de développement

## Technologies

- React 19
- TypeScript
- Vite
- SCSS

## Licence

MIT