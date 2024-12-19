import Link from 'next/link';

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4 bg-blue-200">
			<h1 className="">
				<Link href="/">Paw Squad</Link>
			</h1>
			
			<nav className="space-x-10">
				<Link href='/care'>Care</Link>
				<Link href='/rehome'>Rehome</Link>
				<Link href='/adopt'>Adopt</Link>
			</nav>
			
			<span className="">
				<Link href="/account">My Account</Link>
			</span>
		</header>
	);
}