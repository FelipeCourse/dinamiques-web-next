import { ComponentProps } from 'react';

interface ContentWrapperHeaderComponentProps extends ComponentProps<'header'> {
  title: string;
  children?: React.ReactNode;
}

export function ContentWrapperHeaderComponent({
  title,
  children,
}: ContentWrapperHeaderComponentProps): JSX.Element {
  return (
    <header className="grid p-5">
      <h1 className="mb-3 border-b border-base-14 pb-2 font-semibold uppercase tracking-wide text-base-white">
        {title}
      </h1>
      {children}
    </header>
  );
}

interface ContentWrapperSectionComponentProps
  extends ComponentProps<'section'> {
  children: React.ReactNode;
}

export function ContentWrapperSectionComponent({
  children,
}: ContentWrapperSectionComponentProps): JSX.Element {
  return <section className="grid p-5">{children}</section>;
}
