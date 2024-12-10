'use client';

import {
  Cog8ToothIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { useState } from 'react';

import {
  ButtonComponent,
  DropdownMenuCheckboxItemComponent,
  DropdownMenuComponent,
  DropdownMenuContentComponent,
  DropdownMenuTriggerComponent,
  InputComponent,
  TableBodyComponent,
  TableCellComponent,
  TableComponent,
  TableHeadComponent,
  TableHeaderComponent,
  TableRowComponent,
} from '@/components/';

interface DataTableComponentProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter: {
    placeholdder: string;
    term: string;
  };
}

export function DataTableComponent<TData, TValue>({
  columns,
  data,
  filter,
}: DataTableComponentProps<TData, TValue>): JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    createdBy: false,
    updatedBy: false,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <form className="relative w-full max-w-[27.5rem] md:self-start">
          <InputComponent
            type="search"
            placeholder={`Buscar por ${filter.placeholdder}`}
            value={
              (table.getColumn(filter.term)?.getFilterValue() as string) ?? ''
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              table.getColumn(filter.term)?.setFilterValue(event.target.value)
            }
          />
          <MagnifyingGlassIcon className="absolute right-4 top-1/2 size-[1.042rem] -translate-y-1/2 text-primary-3 lg:right-5 lg:size-[1.34rem]" />
        </form>
        <DropdownMenuComponent>
          <DropdownMenuTriggerComponent asChild>
            <ButtonComponent className="text-md" variant="ghost">
              <Cog8ToothIcon className="!size-[1.042rem] text-primary-4 lg:!size-[1.34rem]" />
              Colunas
            </ButtonComponent>
          </DropdownMenuTriggerComponent>
          <DropdownMenuContentComponent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItemComponent
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItemComponent>
                );
              })}
          </DropdownMenuContentComponent>
        </DropdownMenuComponent>
      </div>
      <TableComponent className="capitalize">
        <TableHeaderComponent>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRowComponent
              className="border-primary-4 hover:bg-transparent"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHeadComponent key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHeadComponent>
                );
              })}
            </TableRowComponent>
          ))}
        </TableHeaderComponent>
        <TableBodyComponent>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRowComponent
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCellComponent key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCellComponent>
                ))}
              </TableRowComponent>
            ))
          ) : (
            <TableRowComponent>
              <TableCellComponent
                className="h-12 text-center"
                colSpan={columns.length}
              >
                Não há registros disponíveis no momento.
              </TableCellComponent>
            </TableRowComponent>
          )}
        </TableBodyComponent>
      </TableComponent>
      <div className="flex items-center justify-end space-x-2 py-4">
        <ButtonComponent
          variant="ghost"
          size="default"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </ButtonComponent>
        <ButtonComponent
          variant="ghost"
          size="default"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próximo
        </ButtonComponent>
      </div>
    </>
  );
}
