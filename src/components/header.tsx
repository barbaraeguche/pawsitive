import { croissantOne, lora } from '@/ui/fonts';
import Link from 'next/link';

const links = [
	{ name: 'Care', href: '/care' },
	{ name: 'Rehome', href: '/rehome' },
	{ name: 'Adopt', href: '/adopt' },
];

export default function Header() {
	return (
		<header className={`${lora.className} flex items-center justify-between p-3 sticky top-0 border-b-1 border-b-brown-100 bg-dough backdrop-blur`}>
			<h1 className={`${croissantOne.className} text-3xl`}>
				<Link href="/">PAW SQUAD</Link>
			</h1>
			
			<nav className="space-x-32">
				{links.map(link => (
					<Link key={link.name}
					      href={link.href}
					      className="py-2 px-3 hover:bg-brown hover:text-dough rounded-lg transition-colors"
					>
            {link.name}
          </Link>
				))}
			</nav>
			
			<span className="py-2 px-3 hover:bg-brown hover:text-dough rounded-lg transition-colors">
				<Link href="/account">My Profile</Link>
			</span>
		</header>
	);
}