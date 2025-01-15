import Image from 'next/image';
import Headings from '@/components/headings';

export default function Testimonials() {
	return (
		<div className={'space-y-12'}>
			<Headings title={'Hear From Our Community'}/>
			<div className={'px-8 grid gap-10 sm:grid-cols-2 sm:px-5 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-[1440px]'}>
				<TestimonialCards image={'/emma.jpg'}
				                  text={'Adopting was the best decision we ever made. Max has brought so much joy into our lives!'}
				                  name={'Emma J.'}
				/>
				<TestimonialCards image={'/sarah.jpg'}
				                  text={'The staff was so friendly and supportive. They helped us find the perfect match for our family.'}
				                  name={'Sarah T.'}
				/>
				<TestimonialCards image={'/daniel.jpg'}
				                  text={'I never imagined my life with a rescue pet could be so fulfilling. Luna has changed everything.'}
				                  name={'Daniel P.'}
				/>
				<TestimonialCards image={'/lisa.jpg'}
				                  text={'I was nervous about adopting, now, Charlie is my best friend, and I can’t imagine life without him!'}
				                  name={'Lisa M.'}
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
		<div className={'flex flex-col items-center gap-y-6'}>
			<Image src={image}
			       alt={name}
			       width={180}
			       height={180}
			       className={'size-36 sm:size-40 lg:size-44 xl:size-48 rounded-full align-middle overflow-hidden'}
			/>
			<div className={'w-[75%] sm:w-full space-y-4'}>
				<p className={'text-justify'}>{text}</p>
				<p className={'text-center italic font-bold'}>{name}</p>
			</div>
		</div>
	);
}