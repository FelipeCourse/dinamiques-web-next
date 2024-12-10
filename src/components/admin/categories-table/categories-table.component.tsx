import { CategoryModel } from '@/shared/models';
import { handleSortingDescendingByDate } from '@/shared/utils';

import { DataTableComponent } from '@/components';

import { categoriesTableColumns } from './categories-table-columns.component';

interface CategoriesTableComponentProps {
  categories: CategoryModel[];
}

export function CategoriesTableComponent({
  categories,
}: CategoriesTableComponentProps): JSX.Element {
  let categoriesSortingDescendingByCreatedDate: CategoryModel[] = [];

  if (categories?.length) {
    categoriesSortingDescendingByCreatedDate = handleSortingDescendingByDate(
      categories,
      (category: CategoryModel) => category.createdAt,
    );
  }

  return (
    <DataTableComponent
      columns={categoriesTableColumns}
      data={categoriesSortingDescendingByCreatedDate}
      filter={{ placeholdder: 'nome', term: 'name' }}
    />
  );
}
