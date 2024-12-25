import { lora } from '@/ui/fonts';

export default function Footer() {
	return (
		<footer className={`${lora.className} text-center p-2 border-t border-t-brown-100 bg-dough`}>
			<span>&copy; 2024 Paw Squad. All Rights Reserved.</span>
		</footer>
	);
}