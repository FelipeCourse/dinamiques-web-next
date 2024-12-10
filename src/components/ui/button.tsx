import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/libs';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-base-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-9 focus-visible:ring-offset-base-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'rounded-lg uppercase tracking-[0.044em] lg:text-lg lg:tracking-[0.056em]',
        ghost: 'rounded-sm',
        link: 'text-base-10 underline-offset-4 hover:underline lg:text-lg',
        admin: 'rounded-lg uppercase tracking-[0.044em]',
      },
      size: {
        default: 'px-4 py-3 lg:px-5',
        lg: 'px-5',
        icon: 'size-8 p-2',
      },
      color: {
        gray: 'bg-base-13 text-base-white hover:bg-base-13/70',
        primary: 'bg-primary-7 text-primary-8 hover:bg-primary-7/70',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button as ButtonComponent, buttonVariants };
