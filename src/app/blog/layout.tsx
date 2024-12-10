import type { Metadata } from 'next';

import {
  ButtonSigninOrEnterAdminComponent,
  FooterComponent,
  HeaderComponent,
} from '@/components';

export const metadata: Metadata = {
  title: 'Dinamiques - Conhecimento ao Alcance de Todos',
  description:
    'Dinamiques é um blog acadêmico que aborda diversos temas educacionais, proporcionando conteúdo acessível e eficiente para quem busca aprender e se atualizar.',
};

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  const buttonSigninOrEnterAdminComponent =
    await ButtonSigninOrEnterAdminComponent();

  return (
    <>
      <HeaderComponent
        buttonSigninOrEnterAdminComponent={buttonSigninOrEnterAdminComponent}
      />
      {children}
      <FooterComponent />
    </>
  );
}
