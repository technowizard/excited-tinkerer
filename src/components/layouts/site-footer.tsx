import { cn } from '@/lib/utils';
import Link from 'next/link';

interface FooterNavItemProps {
  href: string;
  label: string;
}

const FooterNavItem = ({ href, label }: FooterNavItemProps) => {
  return (
    <Link
      className={cn(
        'font-semibold text-denim-900 transition hover:text-denim-600 dark:text-denim-50 dark:hover:text-denim-300',
      )}
      href={href}
    >
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export function SiteFooter() {
  return (
    <footer className="container mx-auto mb-8 w-full max-w-6xl">
      <hr className="mb-8 border-denim-600 dark:border-denim-50/50" />
      <section className="grid flex-1 grid-cols-1 items-center gap-4 px-8 sm:grid-cols-2">
        <div className="flex-1 space-x-3 text-center md:space-x-6 md:text-left">
          <FooterNavItem href="/about" label="About" />
          <FooterNavItem href="/articles" label="Articles" />
          <FooterNavItem href="/projects" label="Projects" />
        </div>
        <div className="text-center font-medium text-denim-600 dark:text-denim-50 md:text-right">
          &copy; {new Date().getFullYear()} Muhammad Fadhil
        </div>
      </section>
    </footer>
  );
}
