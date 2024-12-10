import { ApiResponseWithDataModel, CategoryModel } from '@/shared/models';

import { API_URL } from '../api-client/api-client.http';

interface GetCategoryByIdHttpRequest {
  id: string;
}

type GetCategoryByIdHttpResponse =
  | Partial<ApiResponseWithDataModel<CategoryModel>>
  | undefined;

export async function getCategoryByIdHttp({
  id,
}: GetCategoryByIdHttpRequest): Promise<GetCategoryByIdHttpResponse> {
  const response = await fetch(`${API_URL}/categories/${id}`);
  const {
    statusCode,
    error,
    message,
    data,
  }: ApiResponseWithDataModel<CategoryModel> = await response.json();

  if (!response.ok) {
    return {
      statusCode,
      error,
      message,
    };
  }

  return { statusCode, error, message, data };
}
