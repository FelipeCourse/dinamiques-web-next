/* eslint-disable @typescript-eslint/no-unused-vars */
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { verifyToken } from '@/shared/utils';

export function GET() {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.json({ isAuthenticated: false });
  }

  try {
    const userData = verifyToken(accessToken);

    return NextResponse.json({ isAuthenticated: true, userData });
  } catch (error: unknown) {
    return NextResponse.json({ isAuthenticated: false });
  }
}
