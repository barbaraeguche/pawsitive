import { Metadata } from 'next';
import { ReactNode } from 'react';
import Sidenav from '@/ui/account/sidenav';

export const metadata: Metadata = {
	title: {
		template: '%s | My Account',
		default: 'My Account'
	},
	description: ''
};

export default function AccountLayout({ children }: {
	children: ReactNode
}) {
	return (
		<div className="flex h-screen overflow-hidden">
			<div className="w-64">
				<Sidenav />
			</div>
			<div className="grow p-3 md:p-5 overflow-y-auto">{children}</div>
		</div>
	);
}