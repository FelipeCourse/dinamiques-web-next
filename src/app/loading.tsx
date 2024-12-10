import { SpinnerComponent } from '@/components';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SpinnerComponent />
    </div>
  );
}
