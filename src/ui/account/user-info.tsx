'use client';
import { useState, useEffect } from 'react';
import { getAuthUserId, getUserCredentials } from '@/lib/data';
import { User } from '@/lib/definitions';
import Input from '@/ui/input';
import Headings from '@/components/headings';

export default function UserInfo() {
	const [user, setUser] = useState<User>({ id: '', name: '', email: '', rehomeCount: 0, adoptCount: 0 });
	
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userId = await getAuthUserId();
				const user = await getUserCredentials(userId);
				setUser(user!);
			} catch (err) {
				console.error(`Error fetching user information: ${err}`);
			}
		};
		
		fetchUser();
	}, []);
	
	return (
		<div className="px-1.5 !mt-top !mb-bottom space-y-12">
			<Headings title="Account Information"/>
			<div className="mx-auto max-w-[400px] sm:max-w-[600px] rounded-lg bg-gray-50/50 p-3 md:p-5 space-y-4 border border-brown-80 shadow-md shadow-brown-80/25">
				{/* user name */}
				<div>
					<label htmlFor="name" className="mb-1 block text-sm">Name</label>
					<Input readOnly
					       id="name"
					       defaultValue={user.name}
					       placeholder="Fetching user name..."
					       className="focus-visible:outline-transparent"
					/>
				</div>
					
				{/* user email */}
				<div>
					<label htmlFor="email" className="mb-1 block text-sm">Email</label>
					<Input readOnly
					       id="email"
					       defaultValue={user.email}
					       placeholder="Fetching user email..."
					       className="focus-visible:outline-transparent"
					/>
				</div>
					
				{/* user rehome count */}
				<div className="flex items-center gap-x-3">
					<label htmlFor="rehome-count" className="mb-1 block text-sm text-nowrap">Rehome Count:</label>
					<Input readOnly
					       id="rehome-count"
					       value={user.rehomeCount}
					       className="focus-visible:outline-transparent"
					/>
				</div>
					
				{/* user adopt count */}
				<div className="flex items-center gap-x-6">
					<label htmlFor="adopt-count" className="mb-1 block text-sm text-nowrap">Adopt Count:</label>
					<Input readOnly
					       id="adopt-count"
					       value={user.adoptCount}
					       className="focus-visible:outline-transparent"
					/>
				</div>
			</div>
		</div>
	);
}