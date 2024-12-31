'use client';
import { Heart, HomeIcon, History } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
	{ name: 'Home', href: '/account', icon: HomeIcon },
	{ name: 'Adopted', href: '/account/adopted', icon: Heart },
	{ name: 'Rehomed', href: '/account/rehomed', icon: History }
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
					      aria-labelledby={link.name}
					      className={clsx(
						      'grow flex items-center justify-center h-12 gap-x-2 p-4 rounded-md bg-gray-50 hover:bg-dough/30 md:justify-start',
						      { 'bg-dough/30': link.href === pathname }
					      )}
					>
						<Icon className="w-5"/>
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</nav>
	);
}