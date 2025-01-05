'use client';
import { useSessionExpiry } from '@/hooks/useSessionExpiry';
import UserInfo from '@/ui/account/user-info';

export default function AccountPage() {
	useSessionExpiry();
	return (
		<UserInfo/>
	);
}