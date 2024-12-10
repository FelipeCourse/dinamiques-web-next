import { render, screen } from '@testing-library/react';

import { SpinnerComponent } from '@/components';

describe('SpinnerComponent unit tests', () => {
  it('should render the spinner component', () => {
    render(<SpinnerComponent />);
    const spinner = screen.getByRole('status', { name: /loading/i });
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass(
      'inline-block size-10 animate-spin rounded-full border-4 border-t-transparent text-primary-7',
    );
  });

  it('should have the correct aria-label', () => {
    render(<SpinnerComponent />);
    const spinner = screen.getByRole('status', { name: /loading/i });
    expect(spinner).toHaveAttribute('aria-label', 'loading');
  });

  it('should have the correct sr-only text for screen readers', () => {
    render(<SpinnerComponent />);
    const srText = screen.getByText('Carregando...');
    expect(srText).toBeInTheDocument();
    expect(srText).toHaveClass('sr-only');
  });
});
