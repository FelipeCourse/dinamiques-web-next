import { ApiResponseWithDataModel, ArticleModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

type GetArticlesHttpResponse =
  | Partial<ApiResponseWithDataModel<ArticleModel[]>>
  | undefined;

export async function getArticlesHttp(): Promise<GetArticlesHttpResponse> {
  const response = await fetch(`${API_URL}/articles`);
  const {
    statusCode,
    error,
    message,
    data,
  }: ApiResponseWithDataModel<ArticleModel[]> = await response.json();

  if (!response.ok) {
    return {
      statusCode,
      error,
      message,
    };
  }

  return { statusCode, error, message, data };
}
