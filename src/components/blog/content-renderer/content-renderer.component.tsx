import ReactMarkdown from 'react-markdown';

import { contentRendererConfig } from './content-renderer.config';

interface ContentRendererComponentProps {
  content: string;
}

export function ContentRendererComponent({
  content,
}: ContentRendererComponentProps): JSX.Element {
  return (
    <ReactMarkdown components={contentRendererConfig}>{content}</ReactMarkdown>
  );
}
