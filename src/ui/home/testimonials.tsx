import Image from 'next/image';

export default function TestimonialWrapper() {
	return (
		<div className="px-16 space-y-8">
			<h3 className="text-2xl text-center">
				Our Customers
			</h3>
			
			<div className="flex gap-x-16">
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
		<div className="w-1/4 space-y-8">
			<div className="flex justify-center">
				<Image src={image}
				       alt={name}
				       width={192}
				       height={192}
				       className="size-48 rounded-full align-middle overflow-hidden"
				/>
			</div>
			<div className="w-[95%] space-y-3">
				<p className="text-justify">{text}</p>
				<p className="text-center italic">{name}</p>
			</div>
		</div>
	);
}