import Image from 'next/image';
import ValuesWrapper from '@/ui/home/values';
import StatsWrapper from '@/ui/home/stats';
import TestimonialWrapper from '@/ui/home/testimonials';

export default function RootPage() {
	return (
		<div className="space-y-24">
			{/* banner */}
			<section className="flex flex-col text-center">
				<h3 className="">
					Find Your Perfect Furry Friend!
				</h3>
				<h4 className="italic">
					Bring unconditional love into your home. Adopt a pet today and make a lifelong companion.
				</h4>
				<div className="flex mx-auto">
					<Image src="/left.jpg" alt="dog 1" height={300} width={420}/>
					<Image src="/middle.jpg" alt="cat 1" height={300} width={420}/>
					<Image src="/right.jpg" alt="dog 2" height={300} width={420}/>
				</div>
			</section>
			
			{/* about */}
			<section className="flex gap-32 text-center mx-auto max-w-5xl">
				<h3 className="text-2xl my-auto">
					Our Mission: Happy Pets, Happy Families!
				</h3>
				<div className="space-y-5 text-justify">
		      <p>
			      At Paw Squad, we believe every pet deserves a loving home. Our sanctuary is dedicated to connecting rescued
			      pets with compassionate families. From cuddly kittens to loyal pups, every adoption is a new chapter of love and care.
		      </p>
						
					<p>
			      Join us in making a difference for pets in need.
		      </p>
				</div>
			</section>
			
			{/* core values */}
			<ValuesWrapper/>
			{/* statistics */}
			<StatsWrapper/>
			{/* testimonials */}
			<TestimonialWrapper/>
		</div>
	);
}