import { ReactNode } from 'react';
import Sidenav from '@/ui/account/sidenav';

export default function AccountLayout({ children }: {
	children: ReactNode
}) {
	return (
		<div className="flex h-screen bg-blue-100">
			<div className="w-64">
				<Sidenav />
			</div>
			<div className="">{children}</div>
		</div>
	);
}