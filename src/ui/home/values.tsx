import {
	HandHeart, Recycle, HousePlus
} from 'lucide-react';
import Headings from '@/components/headings';

const values = {
	'Compassionate Care': HandHeart,
	'Zero Waste Initiatives': Recycle,
	'Forever Homes': HousePlus,
};

export default function ValuesWrapper() {
	return (
		<div className="space-y-12">
			<Headings title="What We Stand For" />
			
			<div className="flex text-justify mx-auto gap-x-12 max-w-[1440px]">
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

function ValueCards({ title, text }: {
	title: 'Compassionate Care' | 'Zero Waste Initiatives' | 'Forever Homes',
  text: string
}) {
	const Icon = values[title];
	return (
		<div className="w-1/3 space-y-5">
			<div className="text-center space-y-3">
				<Icon className="mx-auto size-8"/>
				<h4>{title}</h4>
			</div>
			<p>{text}</p>
		</div>
	);
}