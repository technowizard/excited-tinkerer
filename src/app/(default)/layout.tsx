
import '@/styles/globals.css';

import { SiteFooter } from '@/components/layouts/site-footer';
import { SiteHeader } from '@/components/layouts/site-header';
import { ThemeProvider } from '@/components/providers';

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}
