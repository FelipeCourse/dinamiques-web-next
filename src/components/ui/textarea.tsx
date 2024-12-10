import * as React from 'react';

import { cn } from '@/shared/libs';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[5rem] w-full rounded-md border border-base-14 bg-base-15 px-4 py-3 lg:px-5 lg:py-4 text-sm lg:text-lg ring-offset-primary-7 placeholder:text-base-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-14 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea as TextareaComponent };
