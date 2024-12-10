import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dinamiques - Conhecimento ao Alcance de Todos',
    short_name: 'Dinamiques',
    description:
      'Dinamiques é um blog acadêmico que aborda diversos temas educacionais, proporcionando conteúdo acessível e eficiente para quem busca aprender e se atualizar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#141414',
    theme_color: '#f2c72c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
