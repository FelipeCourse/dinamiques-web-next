import { ApiResponseModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface DeleteArticleHttpRequest {
  id: string;
  accessToken: string;
}

type DeleteArticleHttpResponse = ApiResponseModel | undefined;

export async function deleteArticleHttp({
  id,
  accessToken,
}: DeleteArticleHttpRequest): Promise<DeleteArticleHttpResponse> {
  const response = await fetch(`${API_URL}/articles/${id}`, {
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
