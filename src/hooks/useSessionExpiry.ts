'use client';
import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export const useSessionExpiry = () => {
	const { data: session } = useSession();
	
	useEffect(() => {
		if (!session?.expires) return;
		
		// calculate time until session expires (15 minutes from now)
		const loginTime = Date.now();
		const expireTime = loginTime + (15 * 60 * 1000); // 15 minutes in milliseconds
		const timeUntilExpiry = expireTime - loginTime;
		
		// set timer to logout when session expires
		const timer = setTimeout(async () => {
			await signOut({
				redirectTo: '/'
			});
		}, timeUntilExpiry);
		
		// cleanup timer if component unmounts
		return () => clearTimeout(timer);
	}, [session]);
};