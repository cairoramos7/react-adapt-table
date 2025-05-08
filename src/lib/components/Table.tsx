import React from 'react';
import { cn } from '../utils/cn';

export interface Column<T> {
  title: string;
  key: string;
  dataIndex?: keyof T;
  render?: (text: T[keyof T], record: T) => React.ReactNode;
  className?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data?: T[];
  empty?: () => React.ReactNode;
  variant?: 'tailwind' | 'bootstrap';
}

export const Table = <T,>({ 
  columns, 
  data, 
  empty,
  variant = 'tailwind' 
}: TableProps<T>) => {
  if (!data?.length) {
    return empty ? empty() : null;
  }

  // Specific classes for Tailwind
  const tailwindClasses = {
    table: "min-w-full divide-y divide-gray-300 dark:divide-gray-600 dark:bg-gray-800 border overflow-hidden rounded-lg",
    thead: "",
    th: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
    tbody: "divide-y divide-gray-200 dark:divide-gray-700",
    tr: "",
    td: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300"
  };

  // Specific classes for Bootstrap
  const bootstrapClasses = {
    table: "table table-striped table-bordered table-hover",
    thead: "thead-dark",
    th: "text-uppercase",
    tbody: "",
    tr: "",
    td: ""
  };

  // Selects the class set based on the variant
  const classes = variant === 'tailwind' ? tailwindClasses : bootstrapClasses;

  return (
    <div className="overflow-x-auto">
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(classes.th, col.className)}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className={classes.tr}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(classes.td, col.className)}
                >
                  {col.render && col.dataIndex
                    ? col.render(item[col.dataIndex], item)
                    : col.dataIndex && item[col.dataIndex] !== undefined
                    ? String(item[col.dataIndex])
                    : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};