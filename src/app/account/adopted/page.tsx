import { Metadata } from 'next';

import Headings from '@/components/headings';
// import PetCard from '@/ui/account/pet-card';

export const metadata: Metadata = { title: 'Adopted Pets' };

export default function AdoptedPage() {
	return (
		<div className="!mt-6 !mb-28 space-y-6 md:space-y-12">
			<Headings title="Adoption Chronicles" />
			{/*<PetCard pets={} />*/}
		</div>
	);
}