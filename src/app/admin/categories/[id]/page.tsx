import { revalidatePath } from 'next/cache';

import { getCategoryByIdHttp } from '@/http';

import {
  ContentWrapperHeaderComponent,
  ContentWrapperSectionComponent,
  CategoryFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

interface CategoryEditAdminPageProps {
  params: { id: string };
}

export default async function CategoryEditAdminPage({
  params: { id },
}: CategoryEditAdminPageProps): Promise<JSX.Element> {
  revalidatePath(`/admin/categories/${id}`);

  const category = await getCategoryByIdHttp({ id });
  const categoryData = category?.data;

  const breadcrumbItems = [
    {
      label: 'categorias',
      path: '/admin/categories',
    },
    {
      label: 'editar',
      path: '',
    },
  ];

  return (
    <>
      <ContentWrapperHeaderComponent title="categorias">
        <NavigationBreadcrumbComponent
          className="m-0 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
      </ContentWrapperHeaderComponent>
      <ContentWrapperSectionComponent>
        <CategoryFormComponent category={categoryData} />
      </ContentWrapperSectionComponent>
    </>
  );
}
