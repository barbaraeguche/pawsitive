import { montserrat } from '@/ui/fonts';

export default function Footer() {
	return (
		<footer className={`${montserrat.className} text-center p-1.5 border-t border-t-brown-100 bg-dough`}>
			<span>&copy; 2024 Pawsitive. All Rights Reserved.</span>
		</footer>
	);
}