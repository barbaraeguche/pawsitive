import { Metadata } from 'next';
import { getAuthUserId, getRehomedPets } from '@/lib/data';
import { Pet } from '@/lib/definitions';
import PetCard from '@/ui/pet-card';
import Headings from '@/components/headings';

export const metadata: Metadata = { title: 'Rehomed Pets' };

export default async function RehomedPage() {
	// get the user's id;
	const userId = await getAuthUserId();
	const rehomedPets: Pet[] | string = await getRehomedPets(userId);
	
	return (
		<div className="!mt-top !mb-bottom space-y-6 md:space-y-12">
			<Headings title="Your Rehoming Journey"/>
			{typeof rehomedPets === 'string' ? (
				<div className="flex justify-center">
					<span className="!mt-16 toGrid:!mt-36">{rehomedPets}</span>
				</div>
			) : rehomedPets.length === 0 ? (
				<div className="flex justify-center">
					<span className="!mt-16 toGrid:!mt-36">You have not rehomed any pets at this time.</span>
				</div>
			) : (
				<PetCard pets={rehomedPets}/>
			)}
		</div>
	);
}