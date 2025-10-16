import Link from 'next/link';
import { crimsonPro, montserrat } from '@/ui/fonts';
import MobileNav from '@/ui/mobile-nav';

const mainLinks = [
	{ name: 'Care', href: '/care' },
	{ name: 'Rehome', href: '/rehome' },
	{ name: 'Adopt', href: '/adopt' }
];

export default function Header() {
	return (
		<header className={`${montserrat.className} text-[16px] z-50 p-1.5 sticky top-0 border-b border-b-brown-100 bg-dough`}>
			{/* mobile format */}
			<div className={'flex items-center justify-between sm:hidden'}>
				<SiteName/>
				<MobileNav mainLinks={mainLinks}/>
			</div>
			
			{/* desktop format */}
			<div className={'hidden sm:flex items-center justify-between'}>
				<SiteName/>
				
				<nav className={'space-x-9 md:space-x-16 lg:space-x-24 toGrid:space-x-32'}>
					{mainLinks.map((link) => (
						<Link key={link.name}
						      href={link.href}
						      className={'px-2 py-0.5 border-x border-transparent hover:border-brown rounded-lg transition-colors'}
						>
							{link.name}
						</Link>
					))}
				</nav>
				
				<p className={'px-1.5 py-0.5 border-x border-transparent hover:border-brown rounded-lg transition-colors'}>
					<Link href={'/account'}>My Account</Link>
				</p>
			</div>
		</header>
	);
}

function SiteName() {
	return (
		<h1 className={`${crimsonPro.className} text-2xl md:text-3xl xl:text-4xl`}>
			<Link href={'/'}>PAWSITIVE</Link>
		</h1>
	);
}