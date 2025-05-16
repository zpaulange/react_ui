# datatable

Ce projet est une application React utilisant Vite et TypeScript.  
Il propose un composant DataTable avec filtres dynamiques, pagination, et un composant Select personnalisable.

---

## Démarrage rapide

1. **Installation des dépendances**

```sh
npm install
```

2. **Lancement du serveur de développement**

```sh
npm run dev
```

3. **Build de production**

```sh
npm run build
```

4. **Lint du code**

```sh
npm run lint
```

5. **Prévisualisation du build**

```sh
npm run preview
```

---

## Structure du projet

- `src/ui/Select/Select.tsx` : Composant Select personnalisable.
- `src/ui/DataTable/DataTable.tsx` : Composant DataTable avec filtres dynamiques et pagination.
- `src/ui/Pagination/Pagination.tsx` : Composant Pagination réutilisable.
- `src/App.tsx` : Exemple d'utilisation des composants.
- `src/assets/styles/scss/` : Styles SCSS globaux et modules.

---

## Utilisation des composants

### 1. Composant Select

```tsx
import Select from './ui/Select/Select'

const options = [
  { label: 'Option 1', value: 'option1', statusColor: 'red', count: 5 },
  { label: 'Option 2', value: 'option2', statusColor: 'green', count: 10 }
]

<Select
  options={options}
  onSelect={option => console.log(option)}
  label={{ title: "Statut", name: "status" }}
  isLabel={true}
  isValue={false}
  statusColors={true}
  count={true}
/>
```

#### Props du composant Select

| Prop         | Type                                   | Description                                      |
|--------------|----------------------------------------|--------------------------------------------------|
| options      | `{ label: string, value: any, statusColor?: string, count?: number }[]` | Les options à afficher dans le select            |
| onSelect     | `(option: any) => void`                | Callback lors de la sélection                    |
| label        | `{ title: string, name: string }`      | Label affiché au-dessus du select                |
| isLabel      | `boolean`                              | Affiche le label à côté de la value              |
| isValue      | `boolean`                              | Affiche la value à côté du label                 |
| statusColors | `boolean`                              | Affiche un indicateur de couleur                 |
| count        | `boolean`                              | Affiche un compteur à côté de chaque option      |
| className    | `string`                               | Classe CSS personnalisée                         |
| disabled     | `boolean`                              | Désactive le select                              |
| value        | `any`                                  | Valeur sélectionnée (contrôlé)                   |

---

### 2. Composant DataTable

```tsx
import DataTable from './ui/DataTable/DataTable'

const data = [
  { id: 1, name: 'John Doe', status: 2, age: 25, country: 'Benin' },
  // ...
]

const thead = ["ID", "Name", "Status", "Age", "Country"]

const filterConfig = [
  { key: "status", isLabel: true, statusColors: true, count: true },
  { key: "country", isLabel: true, isValue: false }
]

const statusLabels = {
  0: { label: "Locked", count: 2, color: "#bdbdbd" },
  1: { label: "Pending", count: 6, color: "#fbc02d" },
  2: { label: "Active", count: 7, color: "#43a047" },
  3: { label: "Blocked", count: 10, color: "#e53935" },
}

const extraSelects = [
  {
    label: { title: "Année", name: "year" },
    options: [
      { value: "2020", label: "2020" },
      { value: "2021", label: "2021" },
      // ...
    ],
    onSelect: (option) => setSelectedFilters(prev => ({ ...prev, year: option })),
    isLabel: true
  }
];

<DataTable
  data={data}
  thead={thead}
  renderRow={renderRow}
  selectedFilters={selectedFilters}
  setSelectedFilters={setSelectedFilters}
  filterConfig={filterConfig}
  statusLabels={statusLabels}
  extraSelects={extraSelects}
  rowsPerPage={8}
  className="ma-table"
  loading={false}
/>
```

#### Props du composant DataTable

| Prop                | Type                                                        | Description                                         |
|---------------------|-------------------------------------------------------------|-----------------------------------------------------|
| data                | `any[]`                                                     | Les données à afficher                              |
| thead               | `string[]`                                                  | Les titres des colonnes                             |
| renderRow           | `(item: any, idx: number) => React.ReactNode`               | Fonction personnalisée pour le rendu d'une ligne    |
| selectedFilters     | `{ [key: string]: any }`                                    | Filtres sélectionnés                                |
| setSelectedFilters  | `React.Dispatch<React.SetStateAction<{ [key: string]: any }>>` | Setter pour les filtres sélectionnés             |
| filterConfig        | `{ key: string, isLabel?: boolean, isValue?: boolean, statusColors?: boolean, count?: boolean }[]` | Configuration des filtres dynamiques |
| statusLabels        | `{ [key: string]: { label: string, count: number, color: string } }` | Labels, couleurs et compteurs pour les statuts |
| extraSelects        | `Array<{ label: { title: string, name: string }, options: Array<{ label: string, value: any }>, onSelect: (option: any) => void, isLabel?: boolean, isValue?: boolean, statusColors?: boolean, count?: boolean }>` | Liste de Selects personnalisés à afficher en plus des filtres dynamiques |
| rowsPerPage         | `number`                                                    | Nombre de lignes par page (défaut : 8)              |
| className           | `string`                                                    | Classe CSS personnalisée                            |
| loading             | `boolean`                                                   | Affiche un loader si true                           |

---

### 3. Composant Pagination

Pagination est utilisé en interne par DataTable mais peut aussi être utilisé séparément.

```tsx
import Pagination from './ui/Pagination/Pagination'

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={page => setCurrentPage(page)}
  className="ma-pagination"
/>
```

#### Props du composant Pagination

| Prop         | Type                   | Description                        |
|--------------|------------------------|------------------------------------|
| currentPage  | `number`               | Page courante                      |
| totalPages   | `number`               | Nombre total de pages              |
| onPageChange | `(page: number) => void` | Callback lors du changement de page |
| className    | `string`               | Classe CSS personnalisée           |

---

## Scripts utiles

- `npm run dev` : démarre le serveur de développement
- `npm run build` : build de production
- `npm run preview` : prévisualisation du build
- `npm run lint` : lint du code

---

## Technologies

- React
- TypeScript
- Vite
- SCSS

---

## Licence

MIT