"use client";

import React from 'react';
import { cn } from '../utils/cn';

export interface Column<T> {
  title: string;
  key: string;
  dataIndex?: keyof T;
  render?: (text: T[keyof T], record: T) => React.ReactNode;
  className?: string;
  sortable?: boolean;
}

export interface TableClassNames {
  table?: string;
  thead?: string;
  th?: string;
  tbody?: string;
  tr?: string;
  td?: string;
  sortIcon?: string;
}

export interface BaseTableProps<T> {
  columns: Column<T>[];
  data?: T[];
  empty?: () => React.ReactNode;
  classNames: TableClassNames;
  onSort?: (key: string) => void;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
}

export const BaseTable = <T,>({ 
  columns, 
  data, 
  empty,
  classNames,
  onSort,
  sortColumn,
  sortDirection
}: BaseTableProps<T>) => {
  if (!data?.length) {
    return empty ? empty() : null;
  }

  const handleSort = (key: string) => {
    if (onSort) {
      onSort(key);
    }
  };

  const renderSortIcon = (columnKey: string) => {
    if (sortColumn !== columnKey) return <span className={cn(classNames.sortIcon, "opacity-30")}>⇅</span>;
    return (
      <span className={classNames.sortIcon}>
        {sortDirection === 'asc' ? '↑' : '↓'}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className={classNames.table}>
        <thead className={classNames.thead}>
          <tr>
            {columns.map((col) => {
              const isSortable = col.sortable !== false && !!onSort;
              return (
                <th
                  key={col.key}
                  className={cn(
                    classNames.th, 
                    col.className,
                    isSortable && "cursor-pointer select-none hover:text-gray-700 dark:hover:text-white"
                  )}
                  onClick={() => isSortable && handleSort(col.key)}
                >
                  <div className="flex items-center">
                    {col.title}
                    {isSortable && renderSortIcon(col.key)}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={classNames.tbody}>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className={classNames.tr}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(classNames.td, col.className)}
                >
                  {col.render
                    ? col.render(col.dataIndex ? item[col.dataIndex] : undefined as T[keyof T], item)
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
