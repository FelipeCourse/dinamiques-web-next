import * as React from 'react';

import { cn } from '@/shared/libs';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'md:hover:bg-base-15 flex w-full rounded-sm lg:rounded-md border border-base-14 bg-base-15 px-4 py-3 lg:px-5 lg:py-4 text-sm lg:text-lg ring-offset-primary-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-base-14 placeholder:text-base-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-14 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input as InputComponent };
