import Image from 'next/image';
import Headings from '@/components/headings';
import Button from '@/ui/button';

import ValuesWrapper from '@/ui/home/values';
import StatsWrapper from '@/ui/home/stats';
import TestimonialWrapper from '@/ui/home/testimonials';

export default function RootPage() {
	return (
		<div className="space-y-32 p-16">
			{/* banner */}
			<section className="!mt-5 flex">
				<div className="flex">
					<ImageWrapper image="/right.jpg" />
					<ImageWrapper image="/right.png" />
					<ImageWrapper image="/bestie.jpg" />
				</div>
				
				<div className="my-auto">
					<Headings title="Find Your Perfect Furry Friend!"/>
					<div>
						<p>
							At Paw Squad, we connect loving families with pets in need of a forever home. Whether you&rsquo;re looking
							for a playful puppy or a calm senior companion, we’re here to help you find your perfect match and create a lasting bond.
						</p>
						
						<Button className="w-full text-dough bg-brown-100">
							Meet Your New Best Friend
						</Button>
					</div>
				</div>
			</section>
			
			{/* about */}
			<section className="flex gap-20 text-center mx-auto max-w-5xl">
				<div className="my-auto">
					<Headings title="Our Mission: Happy Pets, Happy Families!"/>
				</div>
				
				<div className="space-y-3 text-justify">
					<p>
						At Paw Squad, we connect rescued pets with loving families, offering them a safe and nurturing environment.
						From playful kittens to loyal pups, our dedicated team ensures every pet receives the care, attention, and training they need to thrive.
					</p>
					<p>
						Each adoption is a life-changing experience, building lasting bonds between pets and their new families.
						We envision a world where every pet is cherished, and we invite you to be part of that vision by helping us make a difference in the lives of animals and the families who welcome them.
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

function ImageWrapper({ image }: {
	image: string
}) {
	return (
		<div className="blob-outline object-cover">
			<Image src={image} alt="dog 2" height={250} width={370} />
		</div>
	);
}