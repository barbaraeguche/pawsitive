import { Metadata } from 'next';
import { getUserCredentials, getRehomedPets } from '@/lib/data';
import { Pet } from '@/lib/definitions';
import PetCard from '@/ui/pet-card';
import Headings from '@/components/headings';

export const metadata: Metadata = { title: 'Rehomed Pets' };

export default async function RehomedPage() {
	// get the user's id;
	const userId = await getUserCredentials();
	const rehomedPets: Pet[] | string = await getRehomedPets(userId);
	
	return (
		<div className="!mt-6 !mb-28 space-y-6 md:space-y-12">
			<Headings title="Your Rehoming Journey"/>
			{typeof rehomedPets === 'string' ? (
				<div className="flex justify-center">
					<span className="!mt-16 toGrid:!mt-36 text-base">{rehomedPets}</span>
				</div>
			) : rehomedPets.length === 0 ? (
				<div className="flex justify-center">
					<span className="!mt-16 toGrid:!mt-36 text-base">You have not rehomed any pets at this time.</span>
				</div>
			) : (
				<PetCard pets={rehomedPets} />
			)}
		</div>
	);
}