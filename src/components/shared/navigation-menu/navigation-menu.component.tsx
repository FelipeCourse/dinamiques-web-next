'use client';

import { useEffect, useState } from 'react';

import {
  MobileMenuButtonComponent,
  NavigationMenuLinkComponent,
} from '@/components';

export const NAVIGATION_MENU_ITEMS = [
  {
    label: 'blog',
    path: '/blog',
  },
  {
    label: 'sobre',
    path: '#',
  },
];

interface NavigationMenuComponentProps {
  buttonSigninOrEnterAdminComponent: JSX.Element;
}

export function NavigationMenuComponent({
  buttonSigninOrEnterAdminComponent,
}: NavigationMenuComponentProps): JSX.Element {
  const [showNavigationMenu, setShowNavigationMenu] = useState<boolean>(false);

  const handleShowNavigationMenu = () => {
    setShowNavigationMenu(!showNavigationMenu);
  };

  useEffect(() => {
    document.body.style.overflowY = showNavigationMenu ? 'hidden' : 'auto';
  }, [showNavigationMenu]);

  const navigationMenuState = { showNavigationMenu, handleShowNavigationMenu };

  return (
    <>
      <MobileMenuButtonComponent navigationMenuState={navigationMenuState} />
      <nav
        className={`${showNavigationMenu ? 'block' : 'hidden'} absolute left-0 top-[5.188rem] z-50 size-full bg-base-15 py-5 md:hidden`}
      >
        <ul>
          {NAVIGATION_MENU_ITEMS.map((menuItem) => (
            <NavigationMenuLinkComponent
              menuItem={menuItem}
              key={menuItem.label}
              onClick={() => setShowNavigationMenu(false)}
            />
          ))}
          <li className="border-t border-base-14 p-5">
            {buttonSigninOrEnterAdminComponent}
          </li>
        </ul>
      </nav>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center md:gap-5">
          {NAVIGATION_MENU_ITEMS.map((menuItem) => (
            <NavigationMenuLinkComponent
              key={menuItem.label}
              menuItem={menuItem}
            />
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">{buttonSigninOrEnterAdminComponent}</div>
    </>
  );
}
