import Image from 'next/image';

import { TitleComponent } from '@/components/shared/title/title.component';

export const contentRendererConfig = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h1-md"
      tag="h1"
      hasBarDecorator={false}
      hasDotDecorator={false}
      {...props}
    >
      {children}
    </TitleComponent>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h2-md"
      tag="h2"
      hasBarDecorator={false}
      hasDotDecorator={false}
      {...props}
    >
      {children}
    </TitleComponent>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h3-md"
      tag="h3"
      hasBarDecorator={false}
      hasDotDecorator={false}
      {...props}
    >
      {children}
    </TitleComponent>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h3-md"
      tag="h4"
      hasBarDecorator={false}
      hasDotDecorator={false}
      {...props}
    >
      {children}
    </TitleComponent>
  ),
  h5: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h3-md"
      tag="h5"
      hasBarDecorator={false}
      hasDotDecorator={false}
      {...props}
    >
      {children}
    </TitleComponent>
  ),
  h6: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h3-md"
      tag="h6"
      hasBarDecorator={false}
      hasDotDecorator={false}
      {...props}
    >
      {children}
    </TitleComponent>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-7 list-disc pl-5 text-base-white" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-7 list-decimal pl-5 text-base-white" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mb-2" {...props}>
      {children}
    </li>
  ),
  blockquote: ({
    children,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-7 border-l-4 border-primary-3 pl-4 text-lg italic text-base-7"
      {...props}
    >
      {children}
    </blockquote>
  ),
  img: ({
    src,
    alt,
    width = 980,
    height = 768,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      className="my-7 h-auto max-w-full rounded-lg"
      src={String(src)}
      alt={String(alt)}
      width={Number(width)}
      height={Number(height)}
      {...props}
    />
  ),
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-primary-5 hover:underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-base-14 p-1" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className="block w-full overflow-auto rounded-lg bg-base-16 p-4 text-base-white"
      {...props}
    >
      {children}
    </pre>
  ),
};
