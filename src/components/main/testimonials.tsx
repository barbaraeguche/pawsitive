import TestimonialCards from '@/ui/main/testimonial-cards';

export default function Testimonials() {
	return (
		<section className="px-16 space-y-8">
			<h3 className="text-2xl text-center">
				Hear from some of our customers
			</h3>
			
			<div className="flex">
				<TestimonialCards image="/left.jpg"
				                  text="Adopting from Whisker Cove was the best decision we ever made. Max has brought so much joy into our lives!"
				                  name="Emma J."
				/>
				
				<TestimonialCards image="/middle.jpg"
				                  text="The staff was so friendly and supportive. They helped us find the perfect match for our family."
				                  name="Sarah & Tom"
				/>
				
				<TestimonialCards image="/right.jpg"
				                  text="I never imagined my life with a rescue pet could be so fulfilling. Luna has changed everything."
				                  name="Daniel P."
				/>
			</div>
		</section>
	);
}