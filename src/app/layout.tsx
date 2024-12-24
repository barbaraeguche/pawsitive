import '@/ui/globals.css';

import { Metadata } from 'next';
import { ReactNode } from 'react';
import { nunito } from '@/ui/fonts';

import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: {
		template: '%s | Paw Squad',
		default: 'Paw Squad'
	},
	description: ''
};

export default function RootLayout({ children } : Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.className} p-0 m-0 box-border flex flex-col h-screen antialiased`}>
				<Header/>
				<main className="flex-1 mb-32">
					{children}
				</main>
				<Footer/>
			</body>
		</html>
	);
}
//max-w-[1440px] mx-auto