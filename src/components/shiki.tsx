import 'server-only';

import type { ComponentProps } from 'react';

import DOMPurify from 'isomorphic-dompurify';
import { codeToHtml } from 'shiki';

type ShikiProps = Omit<ComponentProps<'div'>, 'children'> & {
  code: string;
  language: string;
};

export async function Shiki(props: ShikiProps) {
  const { code, language, ...otherProps } = props;

  const transformedCode = await codeToHtml(code, {
    lang: language,
    theme: 'dracula',
  });

  return (
    <div
      {...otherProps}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(transformedCode) }}
    />
  );
}
