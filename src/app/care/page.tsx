import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pet Care'
};

export default function Page() {
	return (
		<main className="flex-1">
			<span>Care page</span>
		</main>
	);
}