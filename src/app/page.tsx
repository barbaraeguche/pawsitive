'use client';
import { ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import Introduction from '@/ui/home/intro';
import About from '@/ui/home/about';
import Values from '@/ui/home/values';
import Statistics from '@/ui/home/stats';
import Testimonials from '@/ui/home/testimonials';

export default function RootPage() {
	return (
		<div className={'!mt-top !mb-bottom space-y-20'}>
			<AnimateInView><Introduction/></AnimateInView>
			<AnimateInView><About/></AnimateInView>
			<AnimateInView><Values/></AnimateInView>
			<AnimateInView><Statistics/></AnimateInView>
			<AnimateInView><Testimonials/></AnimateInView>
		</div>
	);
}

const AnimateInView = ({ children }: {
	children: ReactNode
}) => {
	const ref = useRef(null);
	
	return (
		<motion.div ref={ref}
		            initial={{ opacity: 0, y: 50 }}
		            whileInView={{ opacity: 1, y: 0 }}
		            viewport={{ amount: 0.2, once: true }}
		            transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};