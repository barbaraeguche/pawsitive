import Image from 'next/image';
import Headings from '@/components/headings';

export default function TestimonialWrapper() {
	return (
		<div className="space-y-12 !mb-40">
			<Headings title="Hear From Our Community" />
			
			<div className="flex mx-auto gap-x-12 max-w-[1440px]">
				<TestimonialCards image="/emma.jpg"
				                  text="Adopting was the best decision we ever made. Max has brought so much joy into our lives!"
				                  name="Emma J."
				/>
				<TestimonialCards image="/sarah.jpg"
				                  text="The staff was so friendly and supportive. They helped us find the perfect match for our family."
				                  name="Sarah T."
				/>
				<TestimonialCards image="/daniel.jpg"
				                  text="I never imagined my life with a rescue pet could be so fulfilling. Luna has changed everything."
				                  name="Daniel P."
				/>
				<TestimonialCards image="/lisa.jpg"
				                  text="I was nervous about adopting, now, Charlie is my best friend, and I can’t imagine life without him!"
				                  name="Lisa M."
				/>
			</div>
		</div>
	);
}

function TestimonialCards({ image, text, name }: {
	image: string,
	text: string,
	name: string
}) {
	return (
		<div className="flex flex-col items-center w-1/4 space-y-8">
			<Image src={image}
			       alt={name}
			       width={192}
			       height={192}
			       className="size-48 rounded-full align-middle overflow-hidden"
			/>
			<div className="w-[95%] space-y-3">
				<p className="text-justify">{text}</p>
				<p className="text-center italic">{name}</p>
			</div>
		</div>
	);
}