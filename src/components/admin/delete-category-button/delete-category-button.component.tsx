/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { deleteCategoryAction } from '@/actions';

import { toast } from '@/data/hooks';

import { AlertDialogActionComponent } from '@/components';

interface DeleteCategoryButtonComponentProps {
  id: string;
}

export function DeleteCategoryButtonComponent({
  id,
}: DeleteCategoryButtonComponentProps): JSX.Element {
  const handleDeleteCategory = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('id', id);

    try {
      const response = await deleteCategoryAction(formData);

      if (response.success) {
        toast({
          title: 'Sucesso!',
          description: response.message ?? 'Categoria removida com sucesso.',
          variant: 'success',
        });
      } else {
        toast({
          title: 'Erro!',
          description:
            response.message ?? 'Não foi possível remover a categoria.',
          variant: 'destructive',
        });
      }
    } catch (error: unknown) {
      toast({
        title: 'Erro!',
        description:
          'Um erro inesperado ocorreu ao tentar remover a categoria. Tente novamente mais tarde.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleDeleteCategory}>
      <input type="hidden" name="id" value={id} />
      <AlertDialogActionComponent type="submit">
        Continuar
      </AlertDialogActionComponent>
    </form>
  );
}
