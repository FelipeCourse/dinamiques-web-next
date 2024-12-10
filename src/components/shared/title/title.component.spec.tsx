import { render, screen } from '@testing-library/react';

import { TitleComponent } from '@/components';

describe('TitleComponent unit tests', () => {
  it('should renders the title with the correct tag', () => {
    render(<TitleComponent tag="h1">Test Title</TitleComponent>);
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
  });

  it('should renders the title with h2 tag when specified', () => {
    render(<TitleComponent tag="h2">Test Title</TitleComponent>);
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
  });

  it('should renders the title with h3 tag when specified', () => {
    render(<TitleComponent tag="h3">Test Title</TitleComponent>);
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H3');
  });

  it('should applies the bar decorator when hasBarDecorator is true', () => {
    render(
      <TitleComponent tag="h1" hasBarDecorator={true}>
        Test Title
      </TitleComponent>,
    );
    const title = screen.getByText('Test Title');
    expect(title).toHaveClass(
      'relative ps-4 before:absolute before:left-0 before:h-full before:w-[0.25rem] before:bg-primary-7',
    );
  });

  it('should not apply the bar decorator when hasBarDecorator is false', () => {
    render(
      <TitleComponent tag="h1" hasBarDecorator={false}>
        Test Title
      </TitleComponent>,
    );
    const title = screen.getByText('Test Title');
    expect(title).not.toHaveClass(
      'relative ps-4 before:absolute before:left-0 before:h-full before:w-[0.25rem] before:bg-primary-7',
    );
  });

  it('should renders the dot decorator when hasDotDecorator is true', () => {
    render(
      <TitleComponent tag="h1" hasDotDecorator={true}>
        Test Title
      </TitleComponent>,
    );
    const dot = screen.getByText('.');
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass('animate-pulse text-primary-7');
  });

  it('should not render the dot decorator when hasDotDecorator is false', () => {
    render(
      <TitleComponent tag="h1" hasDotDecorator={false}>
        Test Title
      </TitleComponent>,
    );
    const dot = screen.queryByText('.');
    expect(dot).toBeNull();
  });

  it('should renders the title with custom classes', () => {
    render(
      <TitleComponent tag="h1" className="text-primary-4">
        Test Title
      </TitleComponent>,
    );
    const title = screen.getByText('Test Title');
    expect(title).toHaveClass('text-primary-4');
  });
});
