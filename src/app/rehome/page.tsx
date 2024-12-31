import { Metadata } from 'next';
import Form from '@/ui/rehome/rehome-form';

export const metadata: Metadata = { title: 'Rehome Your Pet' };

export default function RehomePage() {
	return (
		<div>
			<Form/>
		</div>
	);
}