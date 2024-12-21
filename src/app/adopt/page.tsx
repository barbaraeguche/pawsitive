import { Metadata } from 'next';
import AdoptForm from '@/ui/adopt/adopt-form';

export const metadata: Metadata = {
	title: 'Rehome Your Pet'
};

export default function Page() {
	return (
		<main className="flex-1">
			<AdoptForm />
		</main>
	);
}