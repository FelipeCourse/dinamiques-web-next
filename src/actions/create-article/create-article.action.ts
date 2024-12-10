'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { createArticleHttp } from '@/http';

import { articleSchema } from '@/components/admin/article-form/article.schema';

export async function createArticleAction(formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries());
  const articleSchemaValidation = articleSchema.safeParse(formDataObject);
  const article = articleSchemaValidation.data!;

  if (!articleSchemaValidation.success) {
    const errors = articleSchemaValidation.error.flatten().fieldErrors;

    return { success: false, message: 'Erro na validação de dados', errors };
  }

  delete article.id;
  delete article.isPublished;

  if (!article.highlightImageUrl) {
    delete article.highlightImageUrl;
  }

  try {
    const accessToken = cookies().get('accessToken')?.value;

    if (!accessToken) {
      return {
        message: 'Um erro inesperado ocorreu!',
      };
    }

    const response = await createArticleHttp({
      accessToken,
      article,
    });

    if (response?.error) {
      return { success: false, message: response?.message };
    }

    revalidatePath('/admin/articles');

    return { success: true, message: response?.message };
  } catch (error) {
    return { success: false, message: null, error };
  }
}
