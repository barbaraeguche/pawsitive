import { Metadata } from 'next';
import { getUserCredentials, getAdoptedPets } from '@/lib/data';
import { Pet } from '@/lib/definitions';
import PetCard from '@/ui/pet-card';
import Headings from '@/components/headings';

export const metadata: Metadata = { title: 'Adopted Pets' };

export default async function AdoptedPage() {
	// get the user's id;
	const userId = (await getUserCredentials())?.user?.id!;
	const adoptedPets: Pet[] | string = await getAdoptedPets(userId);
	
	return (
		<div className="!mt-6 !mb-28 space-y-6 md:space-y-12">
			<Headings title="Adoption Chronicles"/>
			{typeof adoptedPets === 'string' ? (
				<div className="flex justify-center">
					<span className="!mt-16 toGrid:!mt-36 text-base">{adoptedPets}</span>
				</div>
			) : adoptedPets.length === 0 ? (
				<div className="flex justify-center">
					<span className="!mt-16 toGrid:!mt-36 text-base">You have not adopted any pets at this time.</span>
				</div>
			) : (
				<PetCard pets={adoptedPets} />
			)}
		</div>
	);
}