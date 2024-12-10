'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ComponentProps } from 'react';

import { useArticleContext } from '@/data/contexts';

import { cn } from '@/shared/libs';

import { InputComponent } from '@/components';

export function SearchInputComponent({
  ...props
}: ComponentProps<'input'>): JSX.Element {
  const { searchQuery, handleArticlesFilter } = useArticleContext();

  return (
    <>
      <InputComponent
        {...props}
        className={cn(props.className)}
        type="search"
        placeholder="Buscar por título ou conteúdo"
        value={searchQuery}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleArticlesFilter(event.target.value)
        }
      />
      <MagnifyingGlassIcon className="absolute right-4 top-1/2 size-[1.042rem] -translate-y-1/2 text-primary-3 lg:right-5 lg:size-[1.34rem]" />
    </>
  );
}
