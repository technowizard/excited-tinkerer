import { MainNavbar } from './main-nav';

export function SiteHeader() {
  return (
    <header className="w-full">
      <div className="container flex h-16 max-w-6xl items-center">
        <MainNavbar />
      </div>
    </header>
  );
}
