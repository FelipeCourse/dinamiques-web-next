import { ComponentProps } from 'react';

import {
  AlertDialogCancelComponent,
  AlertDialogContentComponent,
  AlertDialogDescriptionComponent,
  AlertDialogFooterComponent,
  AlertDialogHeaderComponent,
  AlertDialogTitleComponent,
} from '@/components';

interface AlertDialogBoxComponentProps extends ComponentProps<'div'> {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AlertDialogBoxComponent({
  title,
  description,
  children,
}: AlertDialogBoxComponentProps): JSX.Element {
  return (
    <AlertDialogContentComponent>
      <AlertDialogHeaderComponent>
        <AlertDialogTitleComponent>{title}</AlertDialogTitleComponent>
        <AlertDialogDescriptionComponent>
          {description}
        </AlertDialogDescriptionComponent>
      </AlertDialogHeaderComponent>
      <AlertDialogFooterComponent>
        <AlertDialogCancelComponent>Cancelar</AlertDialogCancelComponent>
        {children}
      </AlertDialogFooterComponent>
    </AlertDialogContentComponent>
  );
}
