import { ArticleModel } from '@/shared/models';

import { DataTableComponent } from '@/components';

import {
  articlesTableColumns,
  ArticlesTableColumns,
} from './articles-table-columns.component';

interface ArticlesTableComponentProps {
  articles: ArticleModel[];
}

export function ArticlesTableComponent({
  articles,
}: ArticlesTableComponentProps): JSX.Element {
  const articlesTableData: ArticlesTableColumns[] = [];

  articles?.map(({ id, teacher, category, article }) => {
    return articlesTableData.push({
      id,
      category: category.name,
      teacher: teacher.name,
      title: article.title,
      slug: article.slug,
      publishedLastDate: article.publishedLastDate,
      isPublished: article.isPublished,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      createdBy: article.createdBy,
      updatedBy: article.updatedBy,
    });
  });

  return (
    <DataTableComponent
      columns={articlesTableColumns}
      data={articlesTableData}
      filter={{ placeholdder: 'título', term: 'title' }}
    />
  );
}
