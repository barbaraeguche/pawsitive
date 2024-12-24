'use client';

import {
	Heart, HomeIcon, Stamp
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
	{ name: 'Home', href: '/account', icon: Stamp },
	{ name: 'Adopted', href: '/account/adopted', icon: Heart },
	{ name: 'Rehomed', href: '/account/rehomed', icon: HomeIcon }
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<nav>
			{links.map((link) => {
				const Icon = link.icon;
				return (
					<Link key={link.name}
					      href={link.href}
					      className={clsx(
						      'flex items-center justify-center h-12 gap-2 p-4 rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 md:justify-start',
						      { 'bg-sky-100 text-blue-600': link.href === pathname }
					      )}
					>
						<Icon className="w-5" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</nav>
	);
}