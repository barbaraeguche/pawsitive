# paw squad 🐾
paw squad is a pet adoption platform where users can adopt and rehome pets seamlessly. 
it features authentication, session management, and state management to ensure a smooth user experience, 
powered by prisma db for efficient data handling.

## features 👾
- **pet care tips:** provides useful tips on how to take care of adopted pets.
- **adopt and rehome pets:** users can adopt up to 4 pets and rehome up to 6 pets.
- **authentication and authorization:** next-auth credentials authentication with cookies set to expire after 15 minutes. authorization is required for adoption, rehoming, and account pages.
- **adoption and rehoming history:** track pets you've adopted or rehomed.
- **restrictions:** users cannot adopt a pet they rehomed.
- **state management:** global state management using zustand that triggers a fetch request for available pets when adoption occurs.
- **automatic session expiry:** logs users out after 15 minutes of login time.

## what I learned 💭
- **multipage website development:** learned how to build and structure a website with multiple pages.
- **authentication and authorization:** implemented next-auth credentials authentication, cookies, and authorization for secure access.
- **shadcn usage:** explored and utilized shadcn for UI components.
- **global state management:** managed state effectively using zustand.
- **form validation:** applied zod schemas for form validation.
- **middleware and configuration:** set up middleware, auth.config, and authentication workflows.

## limitations 🚨
- **pet options:** currently only supports cats and dogs that are at least a month old (due to zod validation). 
- **layout constraint:** does not take up full browser width (maximum width of 2000px). 
- **authentication providers:** does not support third-party login providers like github or google.

## improvements 🌱
- **payment integration:** add real-time payments (e.g., stripe) for adoptions.
- **customer support:** implement a contact system for better user satisfaction and faster service.
- **authentication upgrades:** email verification, support additional login providers and a "remember me" feature.

## session expiry hook 🪝
this hook ensures users are automatically logged out 15 minutes after **every** reload.
```typescript
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
	if (!session?.expires) return null;
	return new Date(session.expires).getTime() - Date.now();
  }, [session, status]);
	
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
```

the provider wraps the entire application to enable session tracking and automatic logout.
```typescript jsx
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
```

## .env file 📄
this project requires an `.env` file in the root directory. rename the `.env.example` file to `.env`, and update it with the necessary values. ensure this file is configured properly and not committed to version control.

## running the project 🏁
to get the project up and running on your local machine, follow these steps:

- **ensure [node.js](https://nodejs.org/en) is installed:** this project uses node v22
- **clone the repository:**
```bash
git clone https://github.com/barbaraeguche/paw-squad.git
```
- **navigate to the project directory:**
```bash
cd paw-squad
```
- **install dependencies:**
```bash
pnpm install
```
- **run the project:**
```bash
next dev
# or
pnpm run dev
```
- open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## gallery 📸
<details>
  <summary>showcase</summary>

</details>