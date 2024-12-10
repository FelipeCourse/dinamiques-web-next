import { ApiResponseModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface Category {
  name: string;
  color: string;
}

interface CreateCategoryHttpRequest {
  accessToken: string;
  category: Category;
}

type CreateCategoryHttpResponse = ApiResponseModel | undefined;

export async function createCategoryHttp({
  accessToken,
  category,
}: CreateCategoryHttpRequest): Promise<CreateCategoryHttpResponse> {
  const url = `${API_URL}/categories`;
  const response = await fetch(url, {
    method: 'POST',
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
