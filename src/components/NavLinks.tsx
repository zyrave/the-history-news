'use client';

import { categories } from '@/config/constants';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.split('/').pop() === path;

  return (
    <nav className="grid grid-cols-4 mx-auto max-w-6xl gap-4 border-b pb-10 text-xs md:grid-cols-7 md:text-sm">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
