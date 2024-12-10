'use client';

import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

import { cn } from '@/shared/libs';

import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbLinkComponent,
  BreadcrumbListComponent,
} from '@/components';

export interface NavigationBreadcrumbComponentProps
  extends ComponentProps<'nav'> {
  breadcrumbItems: { label: string; path: string }[];
}

export function NavigationBreadcrumbComponent({
  breadcrumbItems,
  ...props
}: NavigationBreadcrumbComponentProps): JSX.Element {
  const currentPathname = usePathname();

  const currentPathnameParts = currentPathname
    .split('/')
    .filter((segment) => segment.length > 0);

  const urlLabelsAndPathnames = currentPathnameParts.map(
    (pathnamePart, index) => {
      const path = `/${currentPathnameParts.slice(0, index + 1).join('/')}`;

      return {
        label: pathnamePart === 'admin' ? 'início' : pathnamePart,
        path,
      };
    },
  );

  return (
    <BreadcrumbComponent
      className={cn('mb-4 md:ms-8 lg:ms-11', props.className)}
    >
      <BreadcrumbListComponent>
        <BreadcrumbItemComponent>
          <BreadcrumbLinkComponent href={urlLabelsAndPathnames[0].path}>
            {urlLabelsAndPathnames[0].label}
          </BreadcrumbLinkComponent>
        </BreadcrumbItemComponent>
        {breadcrumbItems.map((breadcrumbItem, index) => {
          const isLastBreadcrumbItem = index === breadcrumbItems.length - 1;

          return (
            <BreadcrumbItemComponent
              className={`${isLastBreadcrumbItem && 'text-primary-3'}`}
              key={breadcrumbItem.label}
            >
              {isLastBreadcrumbItem ? (
                breadcrumbItem.label
              ) : (
                <BreadcrumbLinkComponent href={breadcrumbItem.path}>
                  {breadcrumbItem.label}
                </BreadcrumbLinkComponent>
              )}
            </BreadcrumbItemComponent>
          );
        })}
      </BreadcrumbListComponent>
    </BreadcrumbComponent>
  );
}
