'use client';

import { useToast } from '@/data/hooks';

import {
  ToastCloseComponent,
  ToastComponent,
  ToastDescriptionComponent,
  ToastProvider,
  ToastTitleComponent,
  ToastViewportComponent,
} from '@/components/ui/toast';

export function ToasterComponent() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <ToastComponent key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitleComponent>{title}</ToastTitleComponent>}
              {description && (
                <ToastDescriptionComponent>
                  {description}
                </ToastDescriptionComponent>
              )}
            </div>
            {action}
            <ToastCloseComponent />
          </ToastComponent>
        );
      })}
      <ToastViewportComponent />
    </ToastProvider>
  );
}
