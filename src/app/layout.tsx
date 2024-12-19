import { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/ui/globals.css';
import { poppins } from '@/ui/fonts';

import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: {
		template: '%s | Paw Squad',
		default: 'Paw Squad',
	},
	description: ''
};

export default function RootLayout({ children } : Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} h-screen flex flex-col antialiased`}>
				<Header />
				{children}
			  <Footer />
			</body>
		</html>
	);
}