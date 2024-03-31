import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type ProseArticleProps = ComponentProps<'article'>;

export default function ProseArticle({
  className,
  ...props
}: ProseArticleProps) {
  return (
    <article
      className={cn(
        'prose dark:prose-invert',

        'mx-auto max-w-4xl',

        'text-denim-600 dark:text-denim-50',

        'prose-h1:text-denim-600 prose-h2:text-denim-600 prose-h3:text-denim-600 prose-h4:text-denim-600 prose-h5:text-denim-600 prose-h6:text-denim-600 dark:prose-h1:text-denim-50 dark:prose-h2:text-denim-50 dark:prose-h3:text-denim-50 dark:prose-h4:text-denim-50 dark:prose-h5:text-denim-50 dark:prose-h6:text-denim-50',

        'prose-hr:border-denim-600 dark:prose-hr:border-denim-100',

        'prose-figcaption:text-center prose-strong:text-denim-600 prose-img:mx-auto prose-img:rounded dark:prose-strong:text-denim-50',

        "[&_blockquote_p]:before:content-[''] [&_blockquote_p]:after:content-['']",
        'prose-blockquote:text-denim-600 dark:prose-blockquote:text-denim-50',
        'prose-blockquote:border-l-denim-600 dark:prose-blockquote:border-l-denim-100',

        'marker:text-denim-600 dark:marker:text-denim-50',

        'prose-code:rounded prose-code:bg-denim-950 prose-code:px-2 prose-code:py-1 prose-code:text-denim-50 prose-code:dark:bg-slate-700 prose-code:dark:text-denim-50',

        className,
      )}
      {...props}
    />
  );
}
