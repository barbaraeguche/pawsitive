// an array of routes that are accessible to the public, of which do not require authentication.
export const publicRoutes: string[] = [ '/', '/care' ];

// an array of routes that are used for authentication. after authentication, users will be redirected to /account.
export const authRoutes: string[] = [ '/login', '/register' ];

// routes that start with this prefix are used for api authentication.
export const apiAuthPrefix = '/api/auth';

// this is the default page that authenticated users will be redirected to.
export const default_login_redirect = '/account';