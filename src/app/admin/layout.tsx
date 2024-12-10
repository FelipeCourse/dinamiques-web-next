import { Metadata } from 'next';

import {
  SidebarProvider,
  SidebarRootComponent,
  SidebarTriggerComponent,
} from '@/components';

export const metadata: Metadata = {
  title: 'Dinamiques - Administração',
  description: 'Área administrativa do blog Dinamiques.',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <SidebarProvider>
      <SidebarRootComponent />
      <main className="w-full">
        <SidebarTriggerComponent className="bg-transparent" />
        {children}
      </main>
    </SidebarProvider>
  );
}
