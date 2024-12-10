export function SpinnerComponent(): JSX.Element {
  return (
    <div
      className="inline-block size-10 animate-spin rounded-full border-4 border-t-transparent text-primary-7"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Carregando...</span>
    </div>
  );
}
