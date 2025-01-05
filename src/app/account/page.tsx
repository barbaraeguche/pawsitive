'use server';
import { getAuthUserId } from '@/lib/data';
import UserInfo from '@/ui/account/user-info';

export default async function AccountPage() {
	const userId = await getAuthUserId();
	
	return (
		<UserInfo userId={userId}/>
	);
}