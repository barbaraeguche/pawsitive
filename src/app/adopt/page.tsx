import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Adopt a Pet'
};


export default function Page() {
	return (
		<main className="flex-1">
			<span>Adopt page</span>
		</main>
	);
}