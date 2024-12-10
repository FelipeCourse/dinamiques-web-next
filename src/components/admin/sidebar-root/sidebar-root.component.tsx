'use client';

import {
  AcademicCapIcon,
  ArrowLeftEndOnRectangleIcon,
  DocumentTextIcon,
  HomeIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/data/contexts';
import { useToast } from '@/data/hooks';

import {
  SidebarComponent,
  SidebarContentComponent,
  SidebarFooterComponent,
  SidebarGroupComponent,
  SidebarGroupContentComponent,
  SidebarGroupLabelComponent,
  SidebarHeaderComponent,
  SidebarMenuButtonComponent,
  SidebarMenuComponent,
  SidebarMenuItemComponent,
} from '@/components';

const ADMIN_SIDEBAR_ITEMS = [
  {
    label: 'categorias',
    path: '/admin/categories',
    icon: TagIcon,
  },
  {
    label: 'artigos',
    path: '/admin/articles',
    icon: DocumentTextIcon,
  },
];

export function SidebarRootComponent(): JSX.Element {
  const { toast } = useToast();
  const router = useRouter();
  const { userData } = useAuthContext();

  const handleLogout = async () => {
    const response = await fetch('/api/auth/signout', {
      method: 'POST',
    });

    if (response.ok) {
      toast({
        title: 'Sucesso!',
        description: 'Sessão encerrada com sucesso.',
        variant: 'success',
      });

      router.push('/blog');
    }
  };

  return (
    <SidebarComponent>
      <SidebarHeaderComponent />
      <SidebarContentComponent>
        <SidebarMenuComponent>
          <SidebarMenuItemComponent className="capitalize">
            <SidebarMenuButtonComponent asChild>
              <Link href="/admin">
                <HomeIcon /> Início
              </Link>
            </SidebarMenuButtonComponent>
          </SidebarMenuItemComponent>
          <SidebarMenuItemComponent className="capitalize">
            <SidebarMenuButtonComponent asChild>
              <Link href="/blog">
                <AcademicCapIcon /> Blog
              </Link>
            </SidebarMenuButtonComponent>
          </SidebarMenuItemComponent>
        </SidebarMenuComponent>
        <SidebarGroupComponent>
          <SidebarGroupLabelComponent>Gestão</SidebarGroupLabelComponent>
          <SidebarGroupContentComponent>
            <SidebarMenuComponent>
              {ADMIN_SIDEBAR_ITEMS.map((item) => (
                <SidebarMenuItemComponent
                  className="capitalize"
                  key={item.label}
                >
                  <SidebarMenuButtonComponent asChild>
                    <Link href={item.path}>
                      <item.icon />
                      {item.label}
                    </Link>
                  </SidebarMenuButtonComponent>
                </SidebarMenuItemComponent>
              ))}
            </SidebarMenuComponent>
          </SidebarGroupContentComponent>
        </SidebarGroupComponent>
      </SidebarContentComponent>
      <SidebarFooterComponent className="flex-row justify-between px-2 text-sm">
        <span>{userData.username}</span>
        <button type="button" onClick={handleLogout}>
          <ArrowLeftEndOnRectangleIcon className="size-5" />
        </button>
      </SidebarFooterComponent>
    </SidebarComponent>
  );
}
