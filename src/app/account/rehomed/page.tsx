import { Metadata } from 'next';
import Headings from '@/components/headings';
// import PetCard from '@/ui/account/pet-card';

export const metadata: Metadata = { title: 'Rehomed Pets' };

export default function RehomedPage() {
	return (
		<div className="!mt-6 !mb-28 space-y-6 md:space-y-12">
			<Headings title="Our Rehoming Journey"/>
			{/*<PetCard pets={} />*/}
		</div>
	);
}