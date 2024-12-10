import { ApiResponseModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface DeleteCategoryHttpRequest {
  id: string;
  accessToken: string;
}

type DeleteCategoryHttpResponse = ApiResponseModel | undefined;

export async function deleteCategoryHttp({
  id,
  accessToken,
}: DeleteCategoryHttpRequest): Promise<DeleteCategoryHttpResponse> {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
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
