# React Flexi Table

A flexible React table component with support for Tailwind CSS and Bootstrap.

## Installation

```bash
npm install react-adapt-table
# or
yarn add react-adapt-table
```

## Usage

### Example with Tailwind CSS

```jsx
import { Table } from 'react-adapt-table';
import 'tailwindcss/tailwind.css'; // Make sure to import Tailwind in your project

// Your data
const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Mary', age: 25 },
  { id: 3, name: 'Peter', age: 35 },
];

// Column configuration
const columns = [
  {
    title: 'ID',
    key: 'id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    key: 'age',
    dataIndex: 'age',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <button className="text-blue-500 hover:text-blue-700">
        Edit
      </button>
    ),
  },
];

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Table columns={columns} data={data} variant="tailwind" />
    </div>
  );
}
```

### Example with Bootstrap

```jsx
import { Table } from 'react-adapt-table';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap in your project

// ... same data and columns code from the previous example

function App() {
  return (
    <div className="container p-4">
      <h1 className="mb-4">User List</h1>
      <Table columns={columns} data={data} variant="bootstrap" />
    </div>
  );
}
```

## Properties

| Property | Type | Required | Default | Description |
|-------------|------|-------------|--------|-------------|
| columns | Column<T>[] | Yes | - | Table column configuration |
| data | T[] | No | - | Array of data to be displayed |
| empty | () => ReactNode | No | - | Function that returns content to be displayed when there is no data |
| variant | 'tailwind' \| 'bootstrap' | No | 'tailwind' | Defines the visual style of the table |

### Column<T> Interface

| Property | Type | Required | Description |
|-------------|------|-------------|-------------|
| title | string | Yes | Column title |
| key | string | Yes | Unique column key |
| dataIndex | keyof T | No | Key in the data object corresponding to this column |
| render | (text: any, record: T) => ReactNode | No | Function for custom rendering of cell content |
| className | string | No | Additional CSS classes to apply to the column |

## Development

```bash
# Clone the repository
git clone https://github.com/your-username/react-adapt-table.git

# Install dependencies
npm install

# Run the development server
npm run dev

# Build the package for publication
npm run build
```

## License

MIT