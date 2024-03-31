'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggleButton } from '../theme-toggle-button';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        isActive
          ? 'border-b-2 border-denim-600 font-semibold text-denim-600 dark:border-denim-300 dark:text-denim-300'
          : 'animated-underline underline-light dark:underline-dark font-normal text-denim-900 hover:text-denim-600 dark:text-denim-50 dark:hover:text-denim-300',
        'py-1.5',
      )}
      href={href}
    >
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export function MainNavbar() {
  return (
    <nav className="mx-auto flex w-full flex-row items-center justify-between">
      <div className="flex justify-between space-x-3 md:space-x-6">
        <NavItem href="/" label="Home" />
        <NavItem href="/articles" label="Articles" />
        <NavItem href="/projects" label="Projects" />
        <NavItem href="/about" label="About" />
      </div>
      <div>
        <ThemeToggleButton />
      </div>
    </nav>
  );
}
