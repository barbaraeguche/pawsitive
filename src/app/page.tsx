import Link from 'next/link';
import Image from 'next/image';
import Headings from '@/components/headings';
import Button from '@/ui/button';
import ValuesWrapper from '@/ui/home/values';
import StatsWrapper from '@/ui/home/stats';
import TestimonialWrapper from '@/ui/home/testimonials';

import LoginForm from '@/ui/login-form';

export default function RootPage() {
	return (
		<div className="space-y-24 !mt-12 !mb-32">
			<LoginForm/>
			
			
			
			
			
			
			
			
			
			{/*/!* banner *!/*/}
			{/*<section className="mx-auto flex flex-col gap-8 w-[90%] max-w-[420px] sm:max-w-[550px] md:max-w-[690px] lg:flex-row lg:gap-16 lg:max-w-6xl toGrid:gap-20 toGrid:max-w-[1400px]">*/}
			{/*	<div className="blob-outline flex justify-center space-x-1">*/}
			{/*		<ImageWrapper image="/cat.jpg" position="left"/>*/}
			{/*		<ImageWrapper image="/dog.jpg" position="right"/>*/}
			{/*	</div>*/}
			{/*	*/}
			{/*	<div className="m-auto space-y-5 w-full">*/}
			{/*		<Headings title="Find Your Perfect Furry Friend!"/>*/}
			{/*		<div className="space-y-3">*/}
			{/*			<p className="italic text-justify">*/}
			{/*				At Paw Squad, we connect loving families with pets in need of a forever home. Whether you&rsquo;re looking*/}
			{/*				for a playful puppy or a calm senior companion, we’re here to help you find your perfect match and create*/}
			{/*				a lasting bond.*/}
			{/*			</p>*/}
			{/*			<Button className="w-full">*/}
			{/*				<Link href="/adopt" className="w-full">*/}
			{/*					Meet Your New Best Friend*/}
			{/*				</Link>*/}
			{/*			</Button>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}
			
			{/*/!* about *!/*/}
			{/*<section className="px-8 md:px-6 flex flex-col md:flex-row gap-x-16 gap-y-8 mx-auto max-w-5xl">*/}
			{/*	<div className="my-auto">*/}
			{/*		<Headings title="Our Mission: Happy Pets, Happy Families!"/>*/}
			{/*	</div>*/}
			{/*	*/}
			{/*	<div className="space-y-3 text-justify">*/}
			{/*		<p>*/}
			{/*			At Paw Squad, we connect rescued pets with loving families, offering them a safe and nurturing environment.*/}
			{/*			From playful kittens to loyal pups, our dedicated team ensures every pet receives the care, attention, and*/}
			{/*			training they need to thrive.*/}
			{/*		</p>*/}
			{/*		<p>*/}
			{/*			Each adoption is a life-changing experience, building lasting bonds between pets and their new families.*/}
			{/*			We envision a world where every pet is cherished, and we invite you to be part of that vision by helping us*/}
			{/*			make a difference in the lives of animals and the families who welcome them.*/}
			{/*		</p>*/}
			{/*	</div>*/}
			{/*</section>*/}
			
			{/*/!* core values *!/*/}
			{/*<ValuesWrapper/>*/}
			{/*/!* statistics *!/*/}
			{/*<StatsWrapper/>*/}
			{/*/!* testimonials *!/*/}
			{/*<TestimonialWrapper/>*/}
		</div>
	);
}

function ImageWrapper({ image, position }: {
	image: string,
	position: 'left' | 'right'
}) {
	return (
		<div className={`${position} border-2 border-brown-100 size-[140px] sm:size-[200px] md:size-[260px] toGrid:size-[320px] overflow-hidden`}>
			<Image src={image}
			       alt={`${position === 'left' ? 'cat.jpg' : 'dog.jpg'}`}
			       width={420}
			       height={420}
			       className={`${position === 'left' && '-translate-y-6'}`}
			/>
		</div>
	);
}