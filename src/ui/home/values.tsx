import { HandHeart, Recycle, HousePlus } from 'lucide-react';
import Headings from '@/components/headings';
import clsx from 'clsx';

const values = {
	'Compassionate Care': HandHeart,
	'Zero Waste Initiatives': Recycle,
	'Forever Homes': HousePlus,
};

export default function ValuesWrapper() {
	return (
		<div className="space-y-12">
			<Headings title="What We Stand For"/>
			
			<div className="text-justify px-2 grid gap-y-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-x-12 mx-auto max-w-[1440px]">
				<ValueCards title="Compassionate Care"
				            text="Every animal is treated with kindness, love, and respect. From their first steps into our sanctuary to finding their forever home, we ensure their comfort and happiness."
				/>
				<ValueCards title="Zero Waste Initiatives"
				            text="We are committed to sustainable practices, using eco-friendly supplies and reducing waste wherever possible, to protect our planet for future generations."
				/>
				<ValueCards title="Forever Homes"
				            text="Our adoption process ensures that every pet goes to a loving home where they’ll be cherished for a lifetime. We match each pet with the perfect family, ensuring their happiness and well-being."
				/>
			</div>
		</div>
	);
}

function ValueCards({title, text}: {
	title: 'Compassionate Care' | 'Zero Waste Initiatives' | 'Forever Homes',
	text: string
}) {
	const Icon = values[title];
	return (
		<div className="space-y-5 ">
			<div className="text-center space-y-3">
				<Icon className={clsx(
					'mx-auto size-8',
					{
						'text-red-700' : title === 'Compassionate Care',
						'text-green-700' : title === 'Zero Waste Initiatives',
						'text-brown-100' : title === 'Forever Homes',
					}
				)}
				/>
				<h4>{title}</h4>
			</div>
			<p className="w-[75%] sm:w-full mx-auto">{text}</p>
		</div>
	);
}