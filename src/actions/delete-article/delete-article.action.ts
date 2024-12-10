'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { deleteArticleHttp } from '@/http';

export async function deleteArticleAction(formData: FormData) {
  try {
    const accessToken = cookies().get('accessToken')?.value;
    const id = formData.get('id')!.toString();

    if (!accessToken) {
      return {
        message: 'Um erro inesperado ocorreu!',
      };
    }

    const response = await deleteArticleHttp({ id, accessToken });

    if (response?.error) {
      return { success: false, message: response?.message };
    }

    revalidatePath('/admin/articles');

    return { success: true, message: response?.message };
  } catch (error) {
    return { success: false, error };
  }
}
