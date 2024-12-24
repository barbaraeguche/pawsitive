import { LogOut } from 'lucide-react';
import NavLinks from '@/ui/account/nav-links';

export default function Sidenav() {
	return (
		<div className="flex flex-col h-full space-y-1.5">
			<NavLinks />
			<div className="hidden md:block rounded-md grow w-full bg-gray-50" />
			<form>
				<button className="w-full flex items-center justify-center h-12 gap-2 p-4 rounded-md bg-gray-50 hover:bg-red-100 hover:text-red-600 md:justify-start">
					<LogOut className="w-5"/>
					<p className="hidden md:block">Sign Out</p>
				</button>
			</form>
		</div>
	);
}