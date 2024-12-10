import { ComponentProps } from 'react';

import { cn } from '@/shared/libs';

export function SectionDecoratorComponent({
  ...props
}: ComponentProps<'svg'>): JSX.Element {
  return (
    <svg
      {...props}
      className={cn(
        'absolute inset-x-0 bottom-0 z-[2] max-h-[9.25rem] w-full',
        props.className,
      )}
      width={1600}
      viewBox="0 0 1600 148"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M1600 148.002H0l1600-148v148z" fill="inhreit" />
    </svg>
  );
}
