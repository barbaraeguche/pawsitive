import { croissantOne, lora } from '@/ui/fonts';
import Link from 'next/link';

const links = [
	{ name: 'Care', href: '/care' },
	{ name: 'Rehome', href: '/rehome' },
	{ name: 'Adopt', href: '/adopt' },
];

export default function Header() {
	return (
		<header className={`${lora.className} z-50 flex items-center justify-between p-2 sticky top-0 border-b border-b-brown-100 bg-dough backdrop-blur`}>
			<h1 className={`${croissantOne.className} text-3xl`}>
				<Link href="/">PAW SQUAD</Link>
			</h1>
			
			<nav className="space-x-32">
				{links.map(link => (
					<Link key={link.name}
					      href={link.href}
					      className="px-1.5 py-0.5 border-x border-transparent hover:border-brown rounded-lg transition-colors"
					>
            {link.name}
          </Link>
				))}
			</nav>
			
			<span className="px-1.5 py-0.5 border-x border-transparent hover:border-brown rounded-lg transition-colors">
				<Link href="/account">My Profile</Link>
			</span>
		</header>
	);
}