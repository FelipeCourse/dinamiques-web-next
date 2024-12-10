/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createCategoryAction, updateCategoryAction } from '@/actions';

import { toast } from '@/data/hooks';

import { CategoryModel } from '@/shared/models';

import {
  ButtonComponent,
  FormComponent,
  FormControlComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
  FormMessageComponent,
  InputComponent,
  SwitchComponent,
} from '@/components';

import { categorySchema } from './category.schema';

interface CategoryFormComponentProps {
  category?: CategoryModel;
}

export function CategoryFormComponent({
  category,
}: CategoryFormComponentProps): JSX.Element {
  const router = useRouter();
  const categoriesForm = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      id: category?.id || '',
      name: category?.name || '',
      color: category?.color || '#000',
      isActive: category?.isActive ?? true,
    },
  });
  const { setValue, getValues } = categoriesForm;
  const [categoryColor, setCategoryColor] = useState<string>(
    getValues('color'),
  );

  const handleSubmit = async (
    categorySchemaData: z.infer<typeof categorySchema>,
  ): Promise<void> => {
    const formData = new FormData();

    Object.entries(categorySchemaData).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    try {
      const response = category
        ? await updateCategoryAction(formData)
        : await createCategoryAction(formData);

      if (response.success) {
        toast({
          title: 'Sucesso!',
          description:
            response.message ??
            `Categoria ${category ? 'editada' : 'criada'} com sucesso.`,
          variant: 'success',
        });

        router.push('/admin/categories');
      } else {
        toast({
          title: 'Erro!',
          description:
            response.message ??
            `Não foi possível ${category ? 'editar' : 'criar'} a categoria.`,
          variant: 'destructive',
        });
      }
    } catch (error: unknown) {
      toast({
        title: 'Erro!',
        description: `Um erro inesperado ocorreu ao tentar ${category ? 'editar' : 'criar'} a categoria. Tente novamente mais tarde.`,
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    setValue('color', categoryColor);
  }, [categoryColor, setValue]);

  return (
    <FormComponent {...categoriesForm}>
      <form
        className="grid space-y-8"
        onSubmit={categoriesForm.handleSubmit(handleSubmit)}
      >
        {categoriesForm.getValues('id') && (
          <FormFieldComponent
            control={categoriesForm.control}
            name="id"
            render={({ field }) => (
              <FormItemComponent hidden>
                <FormLabelComponent>Id</FormLabelComponent>
                <FormControlComponent>
                  <InputComponent placeholder="Id" {...field} />
                </FormControlComponent>
                <FormMessageComponent />
              </FormItemComponent>
            )}
          />
        )}
        <FormFieldComponent
          control={categoriesForm.control}
          name="name"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Nome</FormLabelComponent>
              <FormControlComponent>
                <InputComponent
                  placeholder="Digite o nome"
                  maxLength={50}
                  {...field}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={categoriesForm.control}
          name="color"
          render={() => (
            <FormItemComponent>
              <FormLabelComponent>Cor</FormLabelComponent>
              <FormControlComponent>
                <HexColorPicker
                  color={categoryColor}
                  onChange={(newColor) => setCategoryColor(newColor)}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={categoriesForm.control}
          name="isActive"
          render={({ field }) => (
            <FormItemComponent className="flex items-center gap-2">
              <FormLabelComponent>Ativo</FormLabelComponent>
              <FormControlComponent>
                <SwitchComponent
                  className="!my-0"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={!category}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <ButtonComponent
          className="w-full sm:w-max sm:justify-self-end"
          color="primary"
          type="submit"
        >
          {category ? 'Salvar' : 'Adicionar'}
        </ButtonComponent>
      </form>
    </FormComponent>
  );
}
