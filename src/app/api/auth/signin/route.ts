import { NextResponse } from 'next/server';

import { ApiResponseWithDataModel, AuthModel } from '@/shared/models';

export async function POST(request: Request) {
  const API_URL = process.env.NEXT_PUBLIC_DINAMIQUES_API;
  const { email, password } = await request.json();

  try {
    const response = await fetch(`${API_URL}/users/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return response;
    }

    const { data }: ApiResponseWithDataModel<AuthModel> = await response.json();
    const nextResponse = NextResponse.json({
      ...data,
    });

    nextResponse.cookies.set('accessToken', data!.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    return nextResponse;
  } catch (error: unknown) {
    return NextResponse.json({ error });
  }
}
