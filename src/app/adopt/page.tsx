import { Metadata } from 'next';
import Form from '@/ui/adopt/adopt-form';

export const metadata: Metadata = {
	title: 'Adopt a Pet'
};

export default function AdoptPage() {
	return (
		<div>
			<Form />
		</div>
	);
}