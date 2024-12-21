import Image from 'next/image';

export default function TestimonialCards({ image, text, name }: {
	image: string,
	text: string,
	name: string
}) {
	return (
		<div className="w-1/4 space-y-5">
			<div className="flex flex-col items-center gap-y-8">
				{/* make the image circular */}
				<Image
					src={image}
					alt={`${name}'s photo`}
					width={192}
					height={192}
					className="size-48 rounded-full align-middle overflow-hidden"
				/>
				
				<p className="w-[95%] ">
					{text}
				</p>
			</div>
			
			<p className="w-[95%] text-center italic">
				{name}
			</p>
		</div>
	);
}