'use client';

import {
  ArrowsUpDownIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

import { formattedDateAuditFields } from '@/shared/libs';

import {
  AlertDialogBoxComponent,
  AlertDialogComponent,
  AlertDialogTriggerComponent,
  ButtonComponent,
  DeleteCategoryButtonComponent,
} from '@/components';

export type CategoriesTableColumns = {
  id: string;
  name: string;
  color: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export const categoriesTableColumns: ColumnDef<CategoriesTableColumns>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <ButtonComponent
          className="!px-0 py-6"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nome
          <ArrowsUpDownIcon className="ml-2 size-4" />
        </ButtonComponent>
      );
    },
  },
  {
    accessorKey: 'color',
    header: 'Cor',
  },
  {
    accessorKey: 'isActive',
    header: ({ column }) => {
      return (
        <ButtonComponent
          className="!px-0 py-6"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Ativo
          <ArrowsUpDownIcon className="ml-2 size-4" />
        </ButtonComponent>
      );
    },
    cell: ({ row }) => {
      const category = row.original;

      return (
        <span className={category.isActive ? 'text-success-4' : 'text-error-4'}>
          {category.isActive ? 'sim' : 'não'}
        </span>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <ButtonComponent
          className="!px-0 py-6"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Criado em
          <ArrowsUpDownIcon className="ml-2 size-4" />
        </ButtonComponent>
      );
    },
    cell: ({ row }) => {
      const category = row.original;

      return <>{formattedDateAuditFields(category.createdAt)}</>;
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Atualizado em',
    cell: ({ row }) => {
      const category = row.original;

      return <>{formattedDateAuditFields(category.updatedAt)}</>;
    },
  },
  {
    accessorKey: 'createdBy',
    header: 'Criado por',
  },
  {
    accessorKey: 'updatedBy',
    header: 'Atualizado por',
  },
  {
    id: 'edit',
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div className="flex justify-end">
          <Link
            className="inline-flex p-2"
            href={`/admin/categories/${category.id}`}
          >
            <PencilIcon className="size-4 text-primary-5" />
          </Link>
        </div>
      );
    },
  },
  {
    id: 'remove',
    cell: ({ row }) => {
      const category = row.original;

      return (
        <button className="p-2">
          <AlertDialogComponent>
            <AlertDialogTriggerComponent asChild>
              <TrashIcon className="size-4 text-error-3" />
            </AlertDialogTriggerComponent>
            <AlertDialogBoxComponent
              title="Tem certeza que deseja remover?"
              description={`A categoria "${category.name}" será permanentemente removida.`}
            >
              <DeleteCategoryButtonComponent id={category.id} />
            </AlertDialogBoxComponent>
          </AlertDialogComponent>
        </button>
      );
    },
  },
];
