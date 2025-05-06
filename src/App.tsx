import { useState } from 'react';
import { Table, type Column } from './lib';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const App = () => {
  // Sample data
  const [users] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  ]);

  // Column definition
  const columns: Column<User>[] = [
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
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={() => alert(`Edit user: ${record.name}`)}
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">React Flexi Table Demo</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tailwind Variant</h2>
        <Table
          columns={columns}
          data={users}
          variant="tailwind"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Bootstrap Variant</h2>
        <Table
          columns={columns}
          data={users}
          variant="bootstrap"
        />
      </div>
    </div>
  );
};

export default App;