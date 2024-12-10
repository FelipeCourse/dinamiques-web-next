'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { createCategoryHttp } from '@/http';

import { categorySchema } from '@/components/admin/category-form/category.schema';

export async function createCategoryAction(formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries());
  const categorySchemaValidation = categorySchema.safeParse(formDataObject);
  const category = categorySchemaValidation.data!;

  if (!categorySchemaValidation.success) {
    const errors = categorySchemaValidation.error.flatten().fieldErrors;

    return { success: false, message: 'Erro na validação de dados', errors };
  }

  delete category.id;
  delete category.isActive;

  try {
    const accessToken = cookies().get('accessToken')?.value;

    if (!accessToken) {
      return {
        message: 'Um erro inesperado ocorreu!',
      };
    }

    const response = await createCategoryHttp({
      accessToken,
      category,
    });

    if (response?.error) {
      return { success: false, message: response?.message };
    }

    revalidatePath('/admin/categories');
    revalidatePath('/admin/articles/add');

    return { success: true, message: response?.message };
  } catch (error) {
    return { success: false, message: null, error };
  }
}
