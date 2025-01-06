'use client';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { useSessionExpiry } from '@/hooks/useSessionExpiry';

function SessionExpiryCheck() {
	useSessionExpiry();
	return null;
}

export function SessionProvider({ children }: {
	children: ReactNode
}) {
	return (
		<NextAuthSessionProvider>
			<SessionExpiryCheck/>
			{children}
		</NextAuthSessionProvider>
	);
}