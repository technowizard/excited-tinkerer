import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { defaultMetadata } from '~/site.config';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: defaultMetadata.description,
  robots: {
    follow: true,
    index: true,
  },
  title: {
    absolute: defaultMetadata.title,
    template: `%s | ${defaultMetadata.title}`,
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://stats.fdhl.dev/script.js"
          data-website-id="a56df3d3-60a7-4bd5-ba81-225b31e71070"
        ></script>
      </head>
      <body
        className={cn(
          'bg-denim-50 antialiased transition dark:bg-denim-950',
          figtree.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
