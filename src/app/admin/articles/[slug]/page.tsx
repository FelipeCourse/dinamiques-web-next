import { revalidatePath } from 'next/cache';

import { getArticleBySlugHttp, getCategoriesHttp } from '@/http';

import {
  ContentWrapperHeaderComponent,
  ContentWrapperSectionComponent,
  ArticleFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

interface ArticleEditAdminPageProps {
  params: { slug: string };
}

export default async function ArticleEditAdminPage({
  params: { slug },
}: ArticleEditAdminPageProps): Promise<JSX.Element> {
  revalidatePath(`/admin/articles/${slug}`);

  const categories = await getCategoriesHttp();
  const categoriesData = categories?.data;
  const article = await getArticleBySlugHttp({ slug });
  const articleData = article?.data;

  const breadcrumbItems = [
    {
      label: 'artigos',
      path: '/admin/articles',
    },
    {
      label: 'editar',
      path: '',
    },
  ];

  return (
    <>
      <ContentWrapperHeaderComponent title="artigos">
        <NavigationBreadcrumbComponent
          className="m-0 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
      </ContentWrapperHeaderComponent>
      <ContentWrapperSectionComponent>
        <ArticleFormComponent
          categories={categoriesData}
          articleModel={articleData}
        />
      </ContentWrapperSectionComponent>
    </>
  );
}
