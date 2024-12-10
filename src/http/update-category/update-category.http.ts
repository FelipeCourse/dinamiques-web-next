import { ApiResponseModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface Category {
  id?: string;
  name: string;
  color: string;
  isActive?: boolean;
}

interface UpdateCategoryHttpRequest {
  accessToken: string;
  category: Category;
}

type UpdateCategoryHttpResponse = ApiResponseModel | undefined;

export async function updateCategoryHttp({
  accessToken,
  category,
}: UpdateCategoryHttpRequest): Promise<UpdateCategoryHttpResponse> {
  const url = `${API_URL}/categories/${category.id}`;

  delete category.id;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(category),
  });

  const { statusCode, error, message }: ApiResponseModel =
    await response.json();

  if (!response.ok) {
    return {
      statusCode,
      error,
      message,
    };
  }

  return { statusCode, error, message };
}
