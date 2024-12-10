import Link from 'next/link';

import { cn } from '@/shared/libs';

import { buttonVariants } from '@/components';

const FOOTER_LINKS = [
  {
    label: 'Termos de uso',
    path: '#',
  },
  {
    label: 'Anuncie',
    path: '#',
  },
];

export const FOOTER_RIGHTS = `© ${new Date().getFullYear()} Dinamiques. Alguns direitos reservados.`;

export function FooterComponent(): JSX.Element {
  return (
    <footer className="container mt-13 flex max-w-screen-xl flex-col gap-y-5 border-t border-t-base-15 py-6 text-center text-sm text-base-9 md:flex-row md:items-center md:justify-between lg:mt-15 lg:py-9 lg:text-lg">
      <ul className="flex justify-center divide-x divide-base-14">
        {FOOTER_LINKS.map((footerLink) => (
          <li className="px-3 text-base-7" key={footerLink.label}>
            <Link
              className={cn(
                `${buttonVariants({ variant: 'link' })} font-normal !p-0`,
              )}
              href={footerLink.path}
            >
              {footerLink.label}
            </Link>
          </li>
        ))}
      </ul>
      <p>{FOOTER_RIGHTS}</p>
    </footer>
  );
}
