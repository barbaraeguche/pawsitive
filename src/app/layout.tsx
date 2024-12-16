import { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/ui/globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s',
		default: 'Paw Squad',
	},
	description: ''
}

export default function RootLayout({ children } : Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				{children}
			</body>
		</html>
	);
}