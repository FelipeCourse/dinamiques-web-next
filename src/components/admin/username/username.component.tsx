'use server';

import { headers } from 'next/headers';

export async function UsernameComponent(): Promise<JSX.Element> {
  const requestHeaders = headers();
  const host = requestHeaders.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const currentUrl = `${protocol}://${host}`;

  const response = await fetch(`${currentUrl}/api/auth/check`);
  const data = await response.json();

  return <span>{data.userData}</span>;
}
