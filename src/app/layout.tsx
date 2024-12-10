import { Inter } from 'next/font/google';

import { AuthProvider, ReactQueryProvider } from '@/data/contexts';

import { ToasterComponent, ToastProvider } from '@/components';

import './styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-base-16 text-lg text-base-5 antialiased`}
      >
        <AuthProvider>
          <ReactQueryProvider>
            <ToastProvider>{children}</ToastProvider>
          </ReactQueryProvider>
        </AuthProvider>
        <ToasterComponent />
      </body>
    </html>
  );
}
