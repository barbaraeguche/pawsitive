import Image from 'next/image';

import { capitalizeFirstLetter } from '@/lib/utils';
import { PetRecord, AvailablePetsRecord } from '@/lib/definitions';
import AdoptButton from '@/ui/adopt/adopt-button';

export default function PetCard({ pets, isAdopting }: {
	pets: PetRecord[] | AvailablePetsRecord[],
	isAdopting?: boolean
}) {
	return (
		<div className="!mt-6 !mb-28 space-y-6 md:space-y-12">
			{/* default format */}
			<div className="block card:hidden">
				<div className="grid sm:grid-cols-2 gap-5 mx-auto max-w-[300px] sm:max-w-[620px]">
					{pets.map((pet) => (
						<div key={pet.id}
						     className="relative border border-brown-80 rounded-lg flex flex-col shadow-xl shadow-brown-80/15 bg-dough/35"
						>
							<div className="relative h-[220px]">
								<Image src={pet.image!} alt={pet.image!} fill className="rounded-t-md"/>
							</div>
							<div className="p-2 my-1.5 text-center break-words">
								<AdjustTextSize type="Type: " value={capitalizeFirstLetter(pet.type)} />
								<AdjustTextSize type="Breed: " value={pet.breed!} />
								<AdjustTextSize type="Gender: " value={capitalizeFirstLetter(pet.gender)} />
								<AdjustTextSize type="Age: " value={pet.age!} />
								<AdjustTextSize type="Compatibility: " value={capitalizeFirstLetter(pet.compatibility.join(', '))} />
								<p className="mt-2 flex flex-col">
									<span className="underline text-[15px]">Comments</span>
									<span className="text-justify px-3 text-sm">{pet.comments}</span>
								</p>
							</div>
							{isAdopting && <AdoptButton />}
						</div>
					))}
				</div>
			</div>
			
			{/* medium format */}
			<div className="hidden card:block">
				<div className="grid grid-cols-1 toGrid:grid-cols-2 gap-3 mx-auto max-w-[717px] toGrid:max-w-[1450px]">
					{pets.map((pet) => (
						<div key={pet.id}
						     className="relative border border-brown-80 rounded-md flex gap-x-4 shadow-xl shadow-brown-80/15 bg-dough/35"
						>
							<div className="relative size-[190px]">
								<Image src={pet.image!} alt={pet.image!} fill className="rounded-tl-md rounded-bl-md"/>
							</div>
							<div className="py-2 mr-4 my-auto text-justify break-words">
								<AdjustTextSize type="Type: " value={capitalizeFirstLetter(pet.type)} />
								<AdjustTextSize type="Breed: " value={pet.breed!} />
								<AdjustTextSize type="Gender: " value={capitalizeFirstLetter(pet.gender)} />
								<AdjustTextSize type="Age: " value={pet.age!} />
								<AdjustTextSize type="Compatibility: " value={capitalizeFirstLetter(pet.compatibility.join(', '))} />
								<AdjustTextSize type="Comments: " value={pet.comments!} />
							</div>
							{isAdopting && <AdoptButton />}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function AdjustTextSize({ type, value }: {
	type: string
	value: string
}) {
	return (
		<p>
			<span className="text-[15px]">{type}</span>
			<span className="text-sm">{value}</span>
		</p>
	);
}