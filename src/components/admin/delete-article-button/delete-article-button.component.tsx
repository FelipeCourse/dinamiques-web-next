/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { deleteArticleAction } from '@/actions';

import { toast } from '@/data/hooks';

import { AlertDialogActionComponent } from '@/components';

interface DeleteArticleButtonComponentProps {
  id: string;
}

export function DeleteArticleButtonComponent({
  id,
}: DeleteArticleButtonComponentProps): JSX.Element {
  const handleDeleteArticle = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('id', id);

    try {
      const response = await deleteArticleAction(formData);

      if (response.success) {
        toast({
          title: 'Sucesso!',
          description: response.message ?? 'Artigo removido com sucesso.',
          variant: 'success',
        });
      } else {
        toast({
          title: 'Erro!',
          description: response.message ?? 'Não foi possível remover o artigo.',
          variant: 'destructive',
        });
      }
    } catch (error: unknown) {
      toast({
        title: 'Erro!',
        description:
          'Um erro inesperado ocorreu ao tentar remover o artigo. Tente novamente mais tarde.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleDeleteArticle}>
      <input type="hidden" name="id" value={id} />
      <AlertDialogActionComponent type="submit">
        Continuar
      </AlertDialogActionComponent>
    </form>
  );
}
