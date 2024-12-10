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
  DeleteArticleButtonComponent,
} from '@/components';

export type ArticlesTableColumns = {
  id: string;
  category: string;
  teacher: string;
  title: string;
  slug: string;
  publishedLastDate: Date;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export const articlesTableColumns: ColumnDef<ArticlesTableColumns>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <ButtonComponent
          className="!px-0 py-6"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Categoria
          <ArrowsUpDownIcon className="ml-2 size-4" />
        </ButtonComponent>
      );
    },
  },
  {
    accessorKey: 'teacher',
    header: ({ column }) => {
      return (
        <ButtonComponent
          className="!px-0 py-6"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Docente
          <ArrowsUpDownIcon className="ml-2 size-4" />
        </ButtonComponent>
      );
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <ButtonComponent
          className="!px-0 py-6"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Título
          <ArrowsUpDownIcon className="ml-2 size-4" />
        </ButtonComponent>
      );
    },
  },
  {
    accessorKey: 'publishedLastDate',
    header: ({ column }) => {
      return (
        <ButtonComponent
          className="!px-0 py-6"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Data da última publicação
          <ArrowsUpDownIcon className="ml-2 size-4" />
        </ButtonComponent>
      );
    },
    cell: ({ row }) => {
      const article = row.original;

      return <>{formattedDateAuditFields(article.publishedLastDate)}</>;
    },
  },
  {
    accessorKey: 'isPublished',
    header: ({ column }) => {
      return (
        <ButtonComponent
          className="!px-0 py-6"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Publicado
          <ArrowsUpDownIcon className="ml-2 size-4" />
        </ButtonComponent>
      );
    },
    cell: ({ row }) => {
      const article = row.original;

      return (
        <span
          className={article.isPublished ? 'text-success-4' : 'text-error-4'}
        >
          {article.isPublished ? 'sim' : 'não'}
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
      const article = row.original;

      return <>{formattedDateAuditFields(article.createdAt)}</>;
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Atualizado em',
    cell: ({ row }) => {
      const article = row.original;

      return <>{formattedDateAuditFields(article.updatedAt)}</>;
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
      const article = row.original;

      return (
        <div className="flex justify-end">
          <Link
            className="inline-flex p-2"
            href={`/admin/articles/${article.slug}`}
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
      const article = row.original;

      return (
        <button className="p-2">
          <AlertDialogComponent>
            <AlertDialogTriggerComponent asChild>
              <TrashIcon className="size-4 text-error-3" />
            </AlertDialogTriggerComponent>
            <AlertDialogBoxComponent
              title="Tem certeza que deseja remover?"
              description={`O artigo "${article.title}" será permanentemente removido.`}
            >
              <DeleteArticleButtonComponent id={article.id} />
            </AlertDialogBoxComponent>
          </AlertDialogComponent>
        </button>
      );
    },
  },
];
