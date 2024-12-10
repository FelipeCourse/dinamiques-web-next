import { ApiResponseModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface Article {
  categoryId: string;
  title: string;
  summary: string;
  readingTime: number;
  content: string;
  highlightImageUrl?: string | undefined;
}

interface CreateArticleHttpRequest {
  accessToken: string;
  article: Article;
}

type CreateArticleHttpResponse = ApiResponseModel | undefined;

export async function createArticleHttp({
  accessToken,
  article,
}: CreateArticleHttpRequest): Promise<CreateArticleHttpResponse> {
  const url = `${API_URL}/articles`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(article),
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
