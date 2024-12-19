import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Rehome Your Pet'
};

export default function Page() {
	return (
		<main className="flex-1">
			<span>Rehome page</span>
		</main>
	);
}