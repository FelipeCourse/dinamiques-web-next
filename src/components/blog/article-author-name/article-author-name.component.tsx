import { ComponentProps } from 'react';

import { cn } from '@/shared/libs';

interface ArticleAuthorNameComponentProps extends ComponentProps<'h3'> {
  tag: 'h3';
  authorName: string;
}

export function ArticleAuthorNameComponent({
  tag,
  authorName,
  ...props
}: ArticleAuthorNameComponentProps): JSX.Element {
  const Element = tag as React.ElementType;

  return (
    <Element
      {...props}
      className={cn('text-sm font-semibold text-base-4', props.className)}
    >
      <span itemProp="name">{authorName}</span>
    </Element>
  );
}
