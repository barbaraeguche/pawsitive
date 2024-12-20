import Link from 'next/link';

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4 sticky top-0 backdrop-blur bg-rose-50">
			<h1 className="font-bold italic">
				<Link href="/">Paw Squad</Link>
			</h1>
			
			<nav className="space-x-20">
				<Link href='/care'>Care</Link>
				<Link href='/rehome'>Rehome</Link>
				<Link href='/adopt'>Adopt</Link>
			</nav>
			
			<span className="">
				<Link href="#">My Account</Link>
			</span>
		</header>
	);
}