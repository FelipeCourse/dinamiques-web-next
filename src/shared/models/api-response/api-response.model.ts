interface ApiResponseBaseModel {
  statusCode: number;
  error?: string;
  message?: string;
}

export type ApiResponseModel = ApiResponseBaseModel;

export interface ApiResponseWithDataModel<T> extends ApiResponseBaseModel {
  data: T;
}
