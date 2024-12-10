import Link from 'next/link';

import { getCategoriesHttp } from '@/http';

import { cn } from '@/shared/libs';

import {
  ContentWrapperHeaderComponent,
  ContentWrapperSectionComponent,
  buttonVariants,
  CategoriesTableComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default async function CategoriesAdminPage(): Promise<JSX.Element> {
  const categories = await getCategoriesHttp();
  const categoriesData = categories?.data;

  const breadcrumbItems = [
    {
      label: 'categorias',
      path: '',
    },
  ];

  return (
    <>
      <ContentWrapperHeaderComponent title="categorias">
        <NavigationBreadcrumbComponent
          className="m-0 mb-3 md:m-0 lg:m-0"
          breadcrumbItems={breadcrumbItems}
        />
        <Link
          className={cn(
            buttonVariants({ variant: 'admin', color: 'primary' }),
            'justify-self-end',
          )}
          href="/admin/categories/add"
        >
          Adicionar
        </Link>
      </ContentWrapperHeaderComponent>
      <ContentWrapperSectionComponent>
        {categoriesData?.length ? (
          <CategoriesTableComponent categories={categoriesData} />
        ) : (
          <p>Não há categorias disponíveis no momento.</p>
        )}
      </ContentWrapperSectionComponent>
    </>
  );
}
