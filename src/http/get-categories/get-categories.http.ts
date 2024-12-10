import { ApiResponseWithDataModel, CategoryModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

type GetCategoriesHttpResponse =
  | Partial<ApiResponseWithDataModel<CategoryModel[]>>
  | undefined;

export async function getCategoriesHttp(): Promise<GetCategoriesHttpResponse> {
  const response = await fetch(`${API_URL}/categories`);
  const {
    statusCode,
    error,
    message,
    data,
  }: ApiResponseWithDataModel<CategoryModel[]> = await response.json();

  if (!response.ok) {
    return {
      statusCode,
      error,
      message,
    };
  }

  return { statusCode, error, message, data };
}
