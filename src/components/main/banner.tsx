import Image from 'next/image';

export default function Banner() {
	return (
		//try to make into one image
		<section className="flex flex-col text-center">
			<h2 className="bg-green-50">
				Find Your Perfect Furry Friend!
			</h2>
			<h4 className="italic bg-blue-50">
				Bring unconditional love into your home. Adopt a pet today and make a lifelong companion.
			</h4>
			<div className="flex mx-auto">
				<Image src="/left.jpg" alt="dog 1" height={300} width={420} />
				<Image src="/middle.jpg" alt="cat 1" height={300} width={420} />
				<Image src="/right.jpg" alt="dog 2" height={300} width={420} />
			</div>
		</section>
	);
}