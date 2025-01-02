import { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';
import {
	apiAuthPrefix, publicRoutes, authRoutes, default_login_redirect
} from '@/lib/routes';

export const authConfig = {
	pages: {
		newUser: '/register',
		signIn: '/login',
		signOut: '/account'
	},
	providers: [/* add to auth.ts as it's a non-node.js file */],
	callbacks: {
		authorized({ auth, request: { nextUrl }}) {
			const isLoggedIn = !!auth?.user;
			
			const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
			const isAuthRoute = authRoutes.includes(nextUrl.pathname);
			const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
			
			// if needed api route for next-auth
			if (isApiAuthRoute) return true;
			
			// if user is on an auth route
			if (isAuthRoute) {
				if (isLoggedIn) return NextResponse.redirect(new URL(default_login_redirect, nextUrl));
				return true;
			}
			
			// if not logged in and not on a public route
			if (!isLoggedIn && !isPublicRoute) return NextResponse.redirect(new URL('/login', nextUrl));
			
			// every other route
			return true;
		}
	}
} satisfies NextAuthConfig;