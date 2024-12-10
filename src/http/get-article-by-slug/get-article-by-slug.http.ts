import { ApiResponseWithDataModel, ArticleModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface GetArticleBySlugHttpRequest {
  slug: string;
}

type GetArticleBySlugHttpResponse =
  | Partial<ApiResponseWithDataModel<ArticleModel>>
  | undefined;

export async function getArticleBySlugHttp({
  slug,
}: GetArticleBySlugHttpRequest): Promise<GetArticleBySlugHttpResponse> {
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

  const article = data.find(({ article: resource }) => resource.slug === slug);

  return { statusCode, error, message, data: article };
}
