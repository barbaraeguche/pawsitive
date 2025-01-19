'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Heart, HomeIcon, History } from 'lucide-react';

const links = [
	{ name: 'Home', href: '/account', icon: HomeIcon },
	{ name: 'Adopted', href: '/account/adopted', icon: Heart },
	{ name: 'Rehomed', href: '/account/rehomed', icon: History }
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<nav className={'flex w-full md:flex-col'}>
			{links.map((link) => {
				const Icon = link.icon;
				
				return (
					<Link key={link.name}
					      href={link.href}
					      aria-label={link.name}
					      className={clsx(
						      'grow flex items-center justify-center h-12 gap-x-2 p-4 rounded-md bg-gray-50 md:justify-start',
						      {
										'bg-brown/20 border-b border-brown-100 md:border-b-0 md:border-r-2': link.href === pathname,
							      'hover:bg-brown/5': link.href !== pathname
									}
					      )}
					>
						<Icon className={'w-5'}/>
						<p className={'hidden md:block'}>{link.name}</p>
					</Link>
				);
			})}
		</nav>
	);
}
