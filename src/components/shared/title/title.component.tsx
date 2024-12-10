import { cva } from 'class-variance-authority';
import { ComponentProps, ElementType } from 'react';

import { cn } from '@/shared/libs';

const titleVariant = cva('w-full break-words font-semibold uppercase', {
  variants: {
    tag: {
      h1: 'xs:text-h1-xs sm:max-w-[35rem] md:max-w-[51.25rem] md:text-h1-md lg:text-h1-lg',
      h2: 'xs:text-h2-xs md:text-h2-md lg:text-h2-lg',
      h3: 'xs:text-h3-xs md:text-h3-md lg:text-h3-lg',
      h4: 'xs:text-h3-xs md:text-h3-md lg:text-h3-lg',
      h5: 'xs:text-h3-xs md:text-h3-md lg:text-h3-lg',
      h6: 'xs:text-h3-xs md:text-h3-md lg:text-h3-lg',
    },
    decorator: {
      true: 'relative ps-4 before:absolute before:left-0 before:h-full before:w-[0.25rem] before:bg-primary-7',
    },
  },
  defaultVariants: {
    tag: 'h1',
  },
});

interface TitleComponentProps extends ComponentProps<'h1'> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  hasBarDecorator?: boolean;
  hasDotDecorator?: boolean;
  children: React.ReactNode;
}

export function TitleComponent({
  tag,
  hasBarDecorator = true,
  hasDotDecorator = true,
  children,
  ...props
}: TitleComponentProps): JSX.Element {
  const Element = tag as ElementType;
  const title = titleVariant({ tag, decorator: hasBarDecorator });

  return (
    <Element {...props} className={cn(title, props.className)}>
      {children}
      {hasDotDecorator && (
        <span className="animate-pulse text-primary-7">.</span>
      )}
    </Element>
  );
}
