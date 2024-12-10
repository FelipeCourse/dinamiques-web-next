import {
  ContentWrapperHeaderComponent,
  ContentWrapperSectionComponent,
  CategoryFormComponent,
  NavigationBreadcrumbComponent,
} from '@/components';

export default function CategoryAddAdminPage(): JSX.Element {
  const breadcrumbItems = [
    {
      label: 'categorias',
      path: '/admin/categories',
    },
    {
      label: 'adicionar',
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
        <CategoryFormComponent />
      </ContentWrapperSectionComponent>
    </>
  );
}
