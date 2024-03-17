import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import '@/styles/globals.css';

import { SiteHeader } from '@/components/layouts/site-header';
import { ThemeProvider } from '@/components/providers';
import { cn } from '@/lib/utils';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'A starter template with Next.js, TypeScript, and shadcn/ui',
  title: 'Next.js + TypeScript + shadcn/ui Starter',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-denim-100 antialiased transition dark:bg-denim-950',
          figtree.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
