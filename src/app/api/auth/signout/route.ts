import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({
    isAuthenticated: false,
  });

  response.cookies.delete('accessToken');

  return response;
}
