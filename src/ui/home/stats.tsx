'use client';

// import { useEffect } from 'react';
// import { incrementCount } from '@/lib/utils';

export default function StatsWrapper() {
	// useEffect(() => {
	// 	incrementCount();
	// }, []);
	
	return (
		<div className="text-center space-y-10">
			<h3 className="text-2xl">
				Our Stats & Impacts
			</h3>
			
			<div className="flex justify-center gap-x-24">
				<StatsCards percent={false}
				            target={927}
				            title="Pets Adopted in 2023 🏡"
				/>
				<StatsCards percent={false}
				            target={250}
				            title="Volunteers Across Our Shelters 🤝"
				/>
				<StatsCards percent={true}
				            target={95}
				            title="Pet Happiness Rating 😺🐕"
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
		<div>
			<span className="flex flex-col gap-y-4">
				<h3 data-percentage={percent} data-target={target} className="counter text-6xl font-bold">0</h3>
				{title}
			</span>
		</div>
	);
}