'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { getUserInformation } from '@/lib/data';
import { User } from '@/lib/definitions';
import Input from '@/ui/input';
import Headings from '@/components/headings';

export default function UserInfo({ userId }: {
	userId: string
}) {
	const defaultValue: User = { id: '', name: '', email: '', rehomeCount: 0, adoptCount: 0 };
	const [user, setUser] = useState<User>(defaultValue);
	
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const user = await getUserInformation(userId);
				setUser(user ? user : defaultValue);
			} catch (err) {
				console.error(`Error fetching user information: ${err}`);
			}
		};
		
		fetchUser();
	}, [userId]);
	
	return (
		<div className={'!mt-top !mb-bottom space-y-6 md:space-y-12'}>
			<Headings title={'Account Information'}/>
			<div className={'mx-auto sm:max-w-[600px] rounded-lg bg-gray-50/50 p-3 md:p-5 space-y-4 border border-brown-80 shadow-md shadow-brown-80/25'}>
				{/* user name */}
				<div>
					<label htmlFor={'name'} className={'mb-1 block text-sm'}>Name</label>
					<Input readOnly
					       id={'name'}
					       value={user.name}
					       placeholder={'Fetching user name...'}
					       className={'focus-visible:outline-transparent'}
					/>
				</div>
				
				{/* user email */}
				<div>
					<label htmlFor={'email'} className={'mb-1 block text-sm'}>Email</label>
					<Input readOnly
					       id={'email'}
					       value={user.email}
					       placeholder={'Fetching user email...'}
					       className={'focus-visible:outline-transparent'}
					/>
				</div>
				
				{/* user rehome count - max 6 pets */}
				<div className={'flex items-center gap-x-3'}>
					<label htmlFor={'rehome-count'} className={'mb-1 block text-sm text-nowrap'}>Rehome Count:</label>
					<Input readOnly
					       id={'rehome-count'}
					       value={user.rehomeCount}
					       className={clsx(
						       'focus-visible:outline-transparent',
						       { 'text-red-600': user.rehomeCount === 6 }
					       )}
					/>
				</div>
				
				{/* user adopt count - max 4 pets */}
				<div className={'flex items-center gap-x-6'}>
					<label htmlFor={'adopt-count'} className={'mb-1 block text-sm text-nowrap'}>Adopt Count:</label>
					<Input readOnly
					       id={'adopt-count'}
					       value={user.adoptCount}
					       className={clsx(
						       'focus-visible:outline-transparent ',
						       { 'text-red-600': user.adoptCount === 4 }
					       )}
					/>
				</div>
			</div>
			<p className={'italic text-sm text-justify mx-auto sm:max-w-[600px]'}>
				<b>Important Note: {' '}</b>
				You can only rehome a <span className={'text-red-600 underline'}>maximum of 6</span> pets, and adopt a <span className={'text-red-600 underline'}>maximum of 4</span>.
			</p>
		</div>
	);
}