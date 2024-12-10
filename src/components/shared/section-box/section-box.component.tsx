import { ComponentProps, ElementType } from 'react';

import { cn } from '@/shared/libs';

interface SectionBoxComponentProps extends ComponentProps<'section'> {
  tag: 'section' | 'article' | 'aside' | 'div';
  hasContainer?: boolean;
  children: React.ReactNode;
}

export function SectionBoxComponent({
  tag,
  hasContainer = true,
  children,
  ...props
}: SectionBoxComponentProps): JSX.Element {
  const Element = tag as ElementType;

  return (
    <Element
      {...props}
      className={cn(
        `py-13 lg:py-14 ${hasContainer && 'container flex flex-col max-w-screen-xl items-center'}`,
        props.className,
      )}
    >
      {children}
    </Element>
  );
}
