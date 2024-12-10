import { ApiResponseModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface Article {
  id?: string;
  categoryId: string;
  title: string;
  summary: string;
  readingTime: number;
  content: string;
  highlightImageUrl?: string;
  isPublished?: boolean;
}

interface UpdateArticleHttpRequest {
  accessToken: string;
  article: Article;
}

type UpdateArticleHttpResponse = ApiResponseModel | undefined;

export async function updateArticleHttp({
  accessToken,
  article,
}: UpdateArticleHttpRequest): Promise<UpdateArticleHttpResponse> {
  const url = `${API_URL}/articles/${article.id}`;

  delete article.id;

  const response = await fetch(url, {
    method: 'PUT',
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
