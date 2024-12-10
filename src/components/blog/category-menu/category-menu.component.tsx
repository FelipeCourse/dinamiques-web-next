'use client';

import { useCategoryContext } from '@/data/contexts';

import { CategoryModel } from '@/shared/models';

import {
  TabsComponent,
  TabsListComponent,
  TabsTriggerComponent,
} from '@/components';

interface CategoryMenuComponentProps {
  categories: CategoryModel[];
}

export function CategoryMenuComponent({
  categories,
}: CategoryMenuComponentProps): JSX.Element {
  const {
    allActiveCategories,
    handleCategoriesFilter: handleCategoryFilter,
    handleCategoriesAlphabetically,
  } = useCategoryContext();

  const categoriesAlphabeticalOrder =
    handleCategoriesAlphabetically(categories);

  return (
    <TabsComponent
      className="mx-auto w-full overflow-x-auto rounded-lg border border-base-14 bg-base-15 text-center"
      defaultValue={allActiveCategories.name}
    >
      <TabsListComponent>
        <TabsTriggerComponent
          key={allActiveCategories.id}
          value={allActiveCategories.name}
          style={{ borderColor: allActiveCategories.color }}
          onClick={() => handleCategoryFilter(allActiveCategories)}
        >
          {allActiveCategories.name}
        </TabsTriggerComponent>
        {categoriesAlphabeticalOrder.map((category) => (
          <TabsTriggerComponent
            key={category.id}
            value={category.name}
            style={{ borderColor: category.color }}
            onClick={() => handleCategoryFilter(category)}
          >
            {category.name}
          </TabsTriggerComponent>
        ))}
      </TabsListComponent>
    </TabsComponent>
  );
}
