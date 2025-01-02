import Link from 'next/link';
import { croissantOne, lora } from '@/ui/fonts';
import MobileNavLink from '@/ui/home/mobile-nav-link';

const mainLinks = [
	{ name: 'Care', href: '/care' },
	{ name: 'Rehome', href: '/rehome' },
	{ name: 'Adopt', href: '/adopt' }
];

export default function Header() {
	return (
		<header className={`${lora.className} z-50 p-2 sticky top-0 border-b border-b-brown-100 bg-dough`}>
			{/* desktop format */}
			<div className="hidden sm:flex items-center justify-between">
				<SiteName/>
				
				<nav className="space-x-3 md:space-x-8 lg:space-x-16 toGrid:space-x-32">
					{mainLinks.map((link) => (
						<Link key={link.name}
						      href={link.href}
						      className="px-1.5 py-0.5 border-x border-transparent hover:border-brown rounded-lg transition-colors"
						>
							{link.name}
						</Link>
					))}
				</nav>
				
				<p className="px-1.5 py-0.5 border-x border-transparent hover:border-brown rounded-lg transition-colors">
					<Link href="/account">My Account</Link>
				</p>
			</div>
			
			{/* mobile format */}
			<div className="flex items-center justify-between sm:hidden">
				<SiteName/>
				<MobileNavLink mainLinks={mainLinks}/>
			</div>
		</header>
	);
}

function SiteName() {
	return (
		<h1 className={`${croissantOne.className} text-xl md:text-2xl lg:text-3xl`}>
			<Link href="/">PAW SQUAD</Link>
		</h1>
	);
}