# React Flexi Table

A flexible React table component with support for Tailwind CSS and Bootstrap.

## Installation

```bash
npm install react-adapt-table
# or
yarn add react-adapt-table
```

## Usage

### Using with Tailwind CSS

Import `TailwindTable` and use it within your Tailwind-configured project.

```jsx
import { TailwindTable } from 'react-adapt-table';
// Ensure Tailwind is configured in your project

const columns = [
  { title: 'ID', key: 'id', dataIndex: 'id', sortable: true },
  { title: 'Name', key: 'name', dataIndex: 'name', sortable: true },
  { title: 'Role', key: 'role', dataIndex: 'role' },
];

const data = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  // ...
];

function App() {
  const [sortColumn, setSortColumn] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (key) => {
    // Implement your sorting logic here
    const direction = sortColumn === key && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(key);
    setSortDirection(direction);
    // sortData(key, direction); 
  };

  return (
    <TailwindTable 
      columns={columns} 
      data={data} 
      onSort={handleSort}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
    />
  );
}
```

### Using with Bootstrap

Import `BootstrapTable`.

```jsx
import { BootstrapTable } from 'react-adapt-table';
import 'bootstrap/dist/css/bootstrap.min.css';

// Logic is identical to the Tailwind example
function App() {
  // ... state and sort logic
  return (
     <BootstrapTable 
      columns={columns} 
      data={data} 
      onSort={handleSort}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
    />
  );
}
```

## Properties

### Table Props (`TailwindTableProps` & `BootstrapTableProps`)

| Property | Type | Required | Description |
|---|---|---|---|
| `columns` | `Column<T>[]` | **Yes** | Array of column definitions |
| `data` | `T[]` | No | Array of data objects to display |
| `empty` | `() => ReactNode` | No | Render function for empty state |
| `onSort` | `(key: string) => void` | No | Callback fired when a sortable header is clicked |
| `sortColumn` | `string` | No | The key of the currently sorted column (for visual highlighting) |
| `sortDirection` | `'asc' \| 'desc'` | No | Direction of the sort indicator |

### `Column<T>` Interface

| Property | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | **Yes** | Text displayed in the header |
| `key` | `string` | **Yes** | Unique identifier for the column |
| `dataIndex` | `keyof T` | No | Key of the data object to display in this column |
| `render` | `(text, record) => ReactNode` | No | Custom render function for the cell |
| `className` | `string` | No | CSS class map for the column cells |
| `sortable` | `boolean` | No | Enable sorting for this column (default: false, requires `onSort` on table) |

## Development

```bash
# Clone the repository
git clone https://github.com/cairoramos7/react-adapt-table.git

# Install dependencies
npm install

# Run the development server (Demo App)
npm run dev

# Build the package
npm run build
```

## License

MIT