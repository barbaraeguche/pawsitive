import { Metadata } from 'next';
import RehomeForm from '@/ui/rehome/rehome-form';

export const metadata: Metadata = {
	title: 'Rehome Your Pet'
};

export default function Page() {
	return (
		<main className="flex-1">
			<RehomeForm />
		</main>
	);
}