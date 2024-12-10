import { ComponentProps } from 'react';

interface MobileMenuButtonComponentProps {
  navigationMenuState: {
    showNavigationMenu: boolean;
    handleShowNavigationMenu: () => void;
  };
}

export function MobileMenuButtonComponent(
  {
    navigationMenuState: { showNavigationMenu, handleShowNavigationMenu },
  }: MobileMenuButtonComponentProps,
  props: ComponentProps<'svg'>,
): JSX.Element {
  return (
    <button
      className="group flex h-[2.625rem] items-center justify-center rounded-sm border border-base-14 bg-base-15 px-2 py-4 md:hidden"
      onClick={handleShowNavigationMenu}
    >
      {!showNavigationMenu ? (
        <svg
          className="size-6 transition-colors duration-150 group-hover:text-primary-7"
          width={26}
          height={18}
          viewBox="0 0 26 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.25 1.563C.25.976.726.5 1.313.5h23.375a1.063 1.063 0 010 2.125H1.313A1.063 1.063 0 01.25 1.562zM.25 9c0-.587.476-1.063 1.063-1.063h23.375a1.063 1.063 0 010 2.125H1.313A1.063 1.063 0 01.25 9zm11.688 7.438c0-.587.475-1.063 1.062-1.063h11.688a1.063 1.063 0 010 2.125H13a1.063 1.063 0 01-1.063-1.063z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className="size-6 transition-colors duration-150 group-hover:text-primary-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          {...props}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
}
