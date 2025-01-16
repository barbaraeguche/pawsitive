import Headings from '@/components/headings';

export default function About() {
	return (
		<section className={'px-8 md:px-6 flex flex-col md:flex-row gap-x-16 gap-y-8 mx-auto max-w-5xl'}>
			<div className={'my-auto'}>
				<Headings title={'Our Mission: Happy Pets, Happy Families!'}/>
			</div>
			<div className={'space-y-3 text-justify'}>
				<p>
					At Paw Squad, we connect rescued pets with loving families, offering them a safe and nurturing environment.
					From playful kittens to loyal pups, our dedicated team ensures every pet receives the care, attention, and
					training they need to thrive.
				</p>
				<p>
					Each adoption is a life-changing experience, building lasting bonds between pets and their new families.
					We envision a world where every pet is cherished, and we invite you to be part of that vision by helping us
					make a difference in the lives of animals and the families who welcome them.
				</p>
			</div>
		</section>
	);
}