import { getCategoriesHttp } from '@/http';

import {
  ContentWrapperHeaderComponent,
  ContentWrapperSectionComponent,
  ArticleFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default async function ArticleAddAdminPage(): Promise<JSX.Element> {
  const categories = await getCategoriesHttp();
  const categoriesData = categories?.data;

  const breadcrumbItems = [
    {
      label: 'artigos',
      path: '/admin/articles',
    },
    {
      label: 'adicionar',
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
        <ArticleFormComponent categories={categoriesData} />
      </ContentWrapperSectionComponent>
    </>
  );
}
