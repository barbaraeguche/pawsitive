'use client';

import {
	Heart, HomeIcon
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
	{ name: 'Adopted', href: '/account/adopted', icon: Heart },
	{ name: 'Rehomed', href: '/account/rehomed', icon: HomeIcon }
];

export default function NavLinks() {
	const pathname = usePathname();
	
	return (
		<nav>
			{links.map((link) => {
				const NavIcon = link.icon;
				return (
					<Link key={link.name}
					      href={link.href}
					      className={clsx(
						      // ' h-[48px] grow bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
						      'flex items-center justify-center gap-2 rounded-md',
						      { '': link.href === pathname }
					      )}
					>
						<NavIcon className="w-6" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</nav>
	);
}