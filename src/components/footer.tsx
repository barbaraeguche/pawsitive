import { montserrat } from '@/ui/fonts';

export default function Footer() {
	return (
		<footer className={`${montserrat.className} text-center p-1 border-t border-t-brown-100 bg-dough`}>
			<span>&copy; 2024 Paw Squad. All Rights Reserved.</span>
		</footer>
	);
}