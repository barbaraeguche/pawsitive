import { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/ui/globals.css';
import { lora } from '@/ui/fonts';
import { SessionProvider } from '@/components/session-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: {
		template: '%s | Pawsitive',
		default: 'Pawsitive'
	},
	description: 'a friendly pet adoption application built with nextjs.',
	icons: { icon: '/pets.png' }
};

export default function RootLayout({ children } : Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en" className={'overflow-y-auto'}>
			<body className={`${lora.className} p-0 m-0 box-border text-base flex flex-col h-screen mx-auto max-w-[2000px] overflow-y-auto antialiased`}>
				<SessionProvider>
					<Header/>
					<main className={'flex-1'}>
						{children}
					</main>
					<Footer/>
				</SessionProvider>
			</body>
		</html>
	);
}