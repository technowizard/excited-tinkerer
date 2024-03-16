import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'A starter template with Next.js, TypeScript, and shadcn/ui',
  title: 'Next.js + TypeScript + shadcn/ui Starter',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
