import { cn } from '@/shared/libs';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-base-10', className)}
      {...props}
    />
  );
}

export { Skeleton as SkeletonComponent };