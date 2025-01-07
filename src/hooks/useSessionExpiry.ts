'use client';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useCallback, useMemo } from 'react';

export const useSessionExpiry = () => {
	const { data: session, status, update } = useSession();
	
	const handleLogout = useCallback(async () => {
		await signOut({ redirectTo: '/' });
	}, []);
	
	// ensure session gets refreshed if unauthenticated
	useEffect(() => {
		if (status === "unauthenticated") {
			update().catch(console.error);
		}
	}, [status, update]);
	
	// compute session expiry time efficiently
	const timeUntilExpiry = useMemo(() => {
		console.log(session, status);
		if (!session?.expires) return null;
		return new Date(session.expires).getTime() - Date.now();
	}, [session, status, update]);
	
	useEffect(() => {
		// if no valid expiration timestamp, do nothing
		if (timeUntilExpiry === null) return;
		
		// if the session already expired, log out immediately
		if (timeUntilExpiry <= 0) {
			handleLogout();
			return;
		}
		
		// set a timer to log the user out when the session expires
		const timer = setTimeout(handleLogout, timeUntilExpiry);
		
		// cleanup the timer if the component unmounts or session changes
		return () => clearTimeout(timer);
	}, [timeUntilExpiry, handleLogout]);
};