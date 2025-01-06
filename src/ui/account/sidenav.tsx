import { signOut } from '../../../auth';
import { LogOut } from 'lucide-react';
import Button from '@/ui/button';
import NavLinks from '@/ui/account/nav-links';

export default function Sidenav() {
	return (
		<div className="grow h-full flex space-x-1.5 md:space-x-0 md:space-y-1.5 md:flex-col">
			<NavLinks/>
			<div className="hidden md:block rounded-md grow w-full bg-gray-50"/>
			<form action={async () => {
				'use server';
				await signOut({
					redirectTo: '/'
				});
			}}>
				<Button type="submit"
				        intent="danger"
				        aria-label="Sign Out"
				        className="grow w-full h-12 p-4 rounded-md md:justify-start"
				>
					<LogOut className="w-5"/>
					<p className="hidden md:block">Sign Out</p>
				</Button>
			</form>
		</div>
	);
}