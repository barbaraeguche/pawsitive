import { LogOut } from 'lucide-react';
import NavLinks from '@/ui/account/nav-links';

export default function Sidenav() {
	return (
		<div className="flex flex-col">
			<div />
			<div className="flex  md:flex-col">
				<NavLinks />
				<div className="hidden md:block"/>
				<form>
					<button className="flex items-center justify-center gap-2 rounded-md">
						<LogOut className="w-6" />
						<span className="hidden md:block">Sign Out</span>
					</button>
				</form>
			</div>
		</div>
	);
}