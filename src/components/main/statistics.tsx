'use client';
// import { useEffect } from 'react';
// import { incrementCount } from '@/lib/utils';

export default function Statistics() {
	// useEffect(() => {
	// 	incrementCount();
	// }, []);
	
	return (
		<section className="text-center space-y-10">
			<h3 className="text-2xl">
				OUR STATS & IMPACTS
			</h3>
			
			<div className="flex justify-center gap-x-24">
				<h3 className="flex flex-col gap-y-4">
					<span data-percentage={false} data-target={927} className="counter text-6xl font-bold">
						0
					</span>
					Pets Adopted in 2023 🏡
				</h3>
				
				<h3 className="flex flex-col gap-y-4">
					<span data-percentage={false} data-target={250} className="counter text-6xl font-bold">
						0
					</span>
					Volunteers Across Our Shelters 🤝
				</h3>
				
				<h3 className="flex flex-col gap-y-4">
					<span data-percentage={true} data-target={95} className="counter text-6xl font-bold">
						0%
					</span>
					Pet Happiness Rating 😺🐕
				</h3>
			</div>
		</section>
	);
}



// counters.forEach((counter) => {
// 	const updateCount = () => {
// 		const target = Number(counter.getAttribute('data-target'));
// 		const count = Number(counter.innerHTML);
// 		const increment = target / 200;
//
// 		if (count < target) {
// 			counter.innerHTML = String(Math.ceil(count + increment));
// 			setTimeout(updateCount, 20);
// 		} else  {
// 			counter.innerHTML = String(target);
// 		}
// 	};
//
// 	updateCount();
// });