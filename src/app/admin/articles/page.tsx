import Link from 'next/link';

import { getArticlesHttp } from '@/http';

import { cn } from '@/shared/libs';

import {
  ArticlesTableComponent,
  buttonVariants,
  ContentWrapperHeaderComponent,
  ContentWrapperSectionComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default async function ArticlesAdminPage(): Promise<JSX.Element> {
  const articles = await getArticlesHttp();
  const articlesData = articles?.data;

  const breadcrumbItems = [
    {
      label: 'artigos',
      path: '',
    },
  ];

  return (
    <>
      <ContentWrapperHeaderComponent title="artigos">
        <NavigationBreadcrumbComponent
          className="m-0 mb-3 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
        <Link
          className={cn(
            buttonVariants({ variant: 'admin', color: 'primary' }),
            'justify-self-end',
          )}
          href="/admin/articles/add"
        >
          Adicionar
        </Link>
      </ContentWrapperHeaderComponent>
      <ContentWrapperSectionComponent>
        {articlesData?.length ? (
          <ArticlesTableComponent articles={articlesData} />
        ) : (
          <p>Não há artigos disponíveis no momento.</p>
        )}
      </ContentWrapperSectionComponent>
    </>
  );
}
