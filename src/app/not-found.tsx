'use client';

import Link from 'next/link';

import { cn } from '@/shared/libs';

import {
  buttonVariants,
  FOOTER_RIGHTS,
  NAVIGATION_MENU_ITEMS,
} from '@/components';

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <header className="text-center">
        <h1 className="animate-pulse text-h1-lg font-extrabold text-base-white">
          4<span className="text-primary-7">0</span>4
          <span className="text-primary-7">!</span>
        </h1>
        <h2 className="mb-4 mt-2 text-h3-lg font-semibold text-base-1">
          Página não encontrada
        </h2>
        <p>
          A página que você está procurando não existe ou não está mais
          disponível.
        </p>
      </header>

      <section className="mb-13 mt-9">
        <h3 className="text-xl font-semibold text-base-4">
          Aqui estão algumas sugestões:
        </h3>
        <nav className="mt-4 text-lg">
          <ul className="flex justify-center divide-x divide-base-14">
            {NAVIGATION_MENU_ITEMS.map((menuItem) => (
              <li className="px-3" key={menuItem.label}>
                <Link
                  className={cn(
                    `${buttonVariants({ variant: 'link' })} text-md text-base-6 font-normal !p-0`,
                  )}
                  href={menuItem.path}
                >
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <footer className="text-center text-sm text-base-9">
        <p>{FOOTER_RIGHTS}</p>
      </footer>
    </main>
  );
}
