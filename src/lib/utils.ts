import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
	return twMerge(clsx(args));
}

export const incrementCount = () => {
	const counters = document.querySelectorAll('.counter');
	counters.forEach((counter, index) => {
		const updateCount = () => {
			const target = Number(counter.getAttribute('data-target'));
			const count = index !== 2
				? Number(counter.innerHTML)
				: Number(counter.innerHTML.slice(0, -1));
			const increment = target / 200;
			
			if (count < target) {
				counter.innerHTML = index !== 2
					? `${Math.ceil(count + increment)}`
					: `${Math.ceil(count + increment)}%`;
				
				setTimeout(updateCount, 20);
			} else {
				counter.innerHTML = index !== 2 ? `${target}` : `${target}%`;
			}
		};
		
		updateCount();
	});
};