import { NextRequest, NextResponse } from 'next/server';

import { isTokenExpired } from './shared/utils';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const pathname = request.nextUrl.pathname;
  let isJwtExpired = false;

  if (accessToken) {
    isJwtExpired = isTokenExpired(accessToken);
  }

  if (isJwtExpired) {
    const response = NextResponse.json({
      isAuthenticated: false,
    });

    response.cookies.delete('accessToken');

    return response;
  }

  if (
    (!accessToken && pathname.startsWith('/admin')) ||
    (isJwtExpired && pathname.startsWith('/admin'))
  ) {
    return NextResponse.redirect(new URL('/blog', request.url));
  }

  if (accessToken && !isJwtExpired && pathname === '/admin') {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
