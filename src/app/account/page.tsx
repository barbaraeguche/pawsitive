import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My Account'
};

export default function AccountPage() {
	return (
		<div className="flex flex-col">
			<span>account page</span>
		</div>
	);
}