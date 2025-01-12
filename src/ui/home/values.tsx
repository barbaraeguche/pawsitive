'use client';
import { motion } from 'framer-motion';
import { HandHeart, Recycle, HousePlus } from 'lucide-react';
import clsx from 'clsx';
import Headings from '@/components/headings';

const values = {
	'Compassionate Care': HandHeart,
	'Zero Waste Initiatives': Recycle,
	'Forever Homes': HousePlus,
	
};

export default function Values() {
	return (
		<motion.div initial={{ opacity: 0, y: 50 }}
		            animate={{ opacity: 1, y: 0 }}
		            transition={{ duration: 0.3 }}
		            className={'space-y-12'}
		>
			<Headings title={'What We Stand For'}/>
			<div className={'text-justify px-8 grid gap-6 sm:grid-cols-2 sm:px-5 lg:grid-cols-3 lg:gap-10 mx-auto max-w-[1440px]'}>
				<ValueCards title={'Compassionate Care'}
				            text={'Every animal is treated with kindness, love, and respect. From their first steps into our sanctuary to finding their forever home, we ensure their comfort and happiness.'}
				/>
				<ValueCards title={'Zero Waste Initiatives'}
				            text={'We are committed to sustainable practices, using eco-friendly supplies and reducing waste wherever possible, to protect our planet for future generations.'}
				/>
				<ValueCards title={'Forever Homes'}
				            text={'Our adoption process ensures that every pet goes to a loving home where they’ll be cherished for a lifetime. We match each pet with the perfect family, ensuring their well-being.'}
				/>
			</div>
		</motion.div>
	);
}

function ValueCards({title, text}: {
	title: 'Compassionate Care' | 'Zero Waste Initiatives' | 'Forever Homes',
	text: string
}) {
	const Icon = values[title];
	
	return (
		<div className={'space-y-6'}>
			<div className={'space-y-3'}>
				<Icon className={clsx(
					'mx-auto size-9', {
						'text-red-700': title === 'Compassionate Care',
						'text-green-700': title === 'Zero Waste Initiatives',
						'text-brown-100': title === 'Forever Homes',
					}
				)}
				/>
				<h4 className={'text-center text-[16px]'}>{title}</h4>
			</div>
			<p className={'mx-auto'}>{text}</p>
		</div>
	);
}