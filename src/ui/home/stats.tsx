'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { incrementCount } from '@/lib/utils';
import Headings from '@/components/headings';

export default function Statistics() {
	const statsRef = useRef<HTMLDivElement>(null);
	const inView = useInView(statsRef, { once: true, amount: 0.3 });
	
	useEffect(() => {
		if (inView) {
      incrementCount();
    }
	}, [inView]);
	
	return (
		<div className="text-center space-y-12">
			<Headings title="Measuring Our Success"/>
			<div ref={statsRef}
			     className="px-2 grid gap-y-10 sm:flex justify-center sm:gap-x-12 md:gap-x-32"
			>
				<StatsCards percent={false}
				            target={627}
				            title="Pets Adopted in 2023"
				/>
				<StatsCards percent={false}
				            target={250}
				            title="Volunteers Across Our Shelters"
				/>
				<StatsCards percent={true}
				            target={95}
				            title="Pet Happiness Rating"
				/>
			</div>
		</div>
	);
}

function StatsCards({ percent, target, title }: {
	percent: boolean,
	target: number,
	title: string
}) {
	return (
		<span className="flex flex-col gap-y-4">
			<h3 data-percentage={percent} data-target={target} className="counter text-5xl sm:text-6xl font-bold">
				0
			</h3>
			{title}
		</span>
	);
}