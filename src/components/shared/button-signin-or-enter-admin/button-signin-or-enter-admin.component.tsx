'use server';

import { cookies } from 'next/headers';
import Link from 'next/link';

import { cn } from '@/shared/libs';

import { buttonVariants } from '../../ui/button';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';

export async function ButtonSigninOrEnterAdminComponent(): Promise<JSX.Element> {
  const accesToken = cookies().get('accessToken')?.value;

  return accesToken ? (
    <Link
      className={cn(buttonVariants({ color: 'primary' }), 'w-full')}
      href="/admin"
    >
      Entrar
    </Link>
  ) : (
    <SigninDialogComponent />
  );
}
