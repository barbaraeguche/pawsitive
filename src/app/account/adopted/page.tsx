import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My Account'
};

export default function AdoptedPage() {
	return (
		<span>
			pets i adopted
		</span>
	);
}