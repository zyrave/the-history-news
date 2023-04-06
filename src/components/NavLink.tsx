import Link from 'next/link';

type Props = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => (
  <Link
    href={`/news/${category}`}
    className={`nav-link ${
      isActive &&
      'text-lg font-bold underline decoration-orange-400 underline-offset-4'
    }`}
  >
    {category}
  </Link>
);

export default NavLink;
