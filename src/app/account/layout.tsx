import { ReactNode } from 'react';
import Sidenav from '@/ui/account/sidenav';

export default function AccountLayout({ children }: {
	children: ReactNode
}) {
	return (
		<div className="flex h-full overflow-hidden">
			<div className="w-64">
				<Sidenav />
			</div>
			<div className="grow p-3 md:p-5 md:overflow-y-auto">{children}</div>
		</div>
	);
}