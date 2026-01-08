import { BaseTable, type BaseTableProps } from './BaseTable';

export type BootstrapTableProps<T> = Omit<BaseTableProps<T>, 'classNames'>;

export const BootstrapTable = <T,>(props: BootstrapTableProps<T>) => {
  const bootstrapClasses = {
    table: "table table-striped table-bordered table-hover mb-0",
    thead: "thead-dark",
    th: "text-uppercase align-middle",
    tbody: "",
    tr: "",
    td: "align-middle",
    sortIcon: "ms-2 d-inline-block"
  };

  return <BaseTable {...props} classNames={bootstrapClasses} />;
};
