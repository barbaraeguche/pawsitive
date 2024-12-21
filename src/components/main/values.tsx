import { HandHeart, Recycle, HousePlus } from 'lucide-react';

export default function Values() {
	return (
		<section className="px-16 text-center space-y-8">
			<h3 className="text-2xl">
				OUR CORE VALUES
			</h3>
			
			<div className="flex text-justify gap-x-16">
				<div className="w-1/3 space-y-5">
					<div className="text-center space-y-3">
						<HandHeart className="mx-auto size-9"/>
						<h4>Compassionate Care</h4>
					</div>
					<p>
						Every animal is treated with kindness, love, and respect. From their first steps into our sanctuary to
						finding their forever home, we ensure their comfort and happiness.
					</p>
				</div>
				
				<div className="w-1/3 space-y-5">
					<div className="text-center space-y-3">
						<Recycle className="mx-auto size-9"/>
						<h4>Zero Waste Initiatives</h4>
					</div>
					<p>
						We are committed to sustainable practices, using eco-friendly supplies and reducing waste wherever possible,
						to protect our planet for future generations.
					</p>
				</div>
				
				<div className="w-1/3 space-y-5">
					<div className="text-center space-y-3">
						<HousePlus className="mx-auto size-9"/>
						<h4>Forever Homes</h4>
					</div>
					<p>
						Our adoption process ensures that every pet goes to a loving home where they’ll be cherished for a lifetime.
						We match each pet with the perfect family, ensuring their happiness and well-being.
					</p>
				</div>
			</div>
		</section>
	);
}