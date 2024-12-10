import { ApiResponseWithDataModel, ArticleModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface GetRecommendedArticlesByCategoryHttpRequest {
  categoryName: string;
  excludeId: string;
}

type GetRecommendedArticlesByCategoryHttpResponse =
  | Partial<ApiResponseWithDataModel<ArticleModel[]>>
  | undefined;

export async function getRecommendedArticlesByCategoryHttp({
  categoryName,
  excludeId,
}: GetRecommendedArticlesByCategoryHttpRequest): Promise<GetRecommendedArticlesByCategoryHttpResponse> {
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

  const recommendedArticles = data?.filter(
    (article) =>
      article.category.name === categoryName && article.id !== excludeId,
  );

  return { statusCode, error, message, data: recommendedArticles };
}
