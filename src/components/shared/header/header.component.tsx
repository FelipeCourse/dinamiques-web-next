import { LogoComponent, NavigationMenuComponent } from '@/components';

interface HeaderComponentProps {
  buttonSigninOrEnterAdminComponent: JSX.Element;
}

export function HeaderComponent({
  buttonSigninOrEnterAdminComponent,
}: HeaderComponentProps): JSX.Element {
  return (
    <header className="border-b border-b-base-14 bg-base-15">
      <div className="container flex max-w-screen-xl items-center justify-between py-5 lg:py-6">
        <LogoComponent />
        <NavigationMenuComponent
          buttonSigninOrEnterAdminComponent={buttonSigninOrEnterAdminComponent}
        />
      </div>
    </header>
  );
}
