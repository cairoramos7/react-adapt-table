import { BaseTable, type BaseTableProps } from './BaseTable';

export type TailwindTableProps<T> = Omit<BaseTableProps<T>, 'classNames'>;

export const TailwindTable = <T,>(props: TailwindTableProps<T>) => {
  const tailwindClasses = {
    table: "min-w-full divide-y divide-gray-300 dark:divide-gray-600 dark:bg-gray-800 border overflow-hidden rounded-lg",
    thead: "bg-gray-50 dark:bg-gray-700",
    th: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
    tbody: "divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800",
    tr: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
    td: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300",
    sortIcon: "ml-2 inline-block w-4 h-4"
  };

  return <BaseTable {...props} classNames={tailwindClasses} />;
};
