import { Metadata } from 'next';
import { ReactNode } from 'react';
import Sidenav from '@/ui/account/sidenav';

export const metadata: Metadata = {
	title: {
		template: '%s | My Account',
		default: 'My Account'
	}
};

export default function AccountLayout({ children }: {
	children: ReactNode
}) {
	return (
		<div className="h-screen flex flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-row md:w-60">
				<Sidenav/>
			</div>
			<div className="grow p-3 md:p-5 overflow-y-auto">{children}</div>
		</div>
	);
}