import Image from 'next/image';

export default function TestimonialCards({ image, text, name }: {
	image: string,
  text: string,
  name: string
}) {
	return (
		<div className="p-3 border-2 text-center border-rose-400">
			{/* make the image circular */}
			<div className="rounded-[50%] object-cover border-2 text-green-500">
				hi
				{/*<Image src={image}*/}
				{/*       alt={`${name}'s photo`}*/}
				{/*       width={150}*/}
				{/*       height={150}*/}
				{/*       className="rounded-full"*/}
        {/*/>*/}
			</div>
			
			{/* text and name */}
			<div className="">
				<p>
					{text}
				</p>
				<p>
					{name}
				</p>
			</div>
		</div>
	);
}