import { ApiResponseWithDataModel, AuthModel } from '@/shared/models';

interface SigninHttpRequest {
  values: {
    email: string;
    password: string;
  };
}

type SigninHttpResponse = AuthModel;

export async function signinHttp({
  values,
}: SigninHttpRequest): Promise<SigninHttpResponse> {
  const response = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const { statusCode, error, message }: ApiResponseWithDataModel<AuthModel> =
      await response.json();

    throw {
      statusCode,
      error,
      message,
    };
  }

  return response.json();
}
