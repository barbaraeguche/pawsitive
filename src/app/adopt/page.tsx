import { Metadata } from 'next';
import { AdoptProvider } from '@/hooks/adopt-context';
import Form from '@/ui/adopt/adopt-form';
import AvailablePets from '@/components/available-pets';

export const metadata: Metadata = { title: 'Adopt a Pet' };

export default async function AdoptPage(props: {
	searchParams?: Promise<{
		type?: string,
		breed?: string,
		gender?: string,
		age?: string,
		compatibility?: string[]
	}>
}) {
	const searchParams = await props.searchParams;
	
	const type = searchParams?.type || '';
	const breed = searchParams?.breed || '';
	const gender = searchParams?.gender || '';
	const age = searchParams?.age || '';
	const compatibility = searchParams?.compatibility ? (
		Array.isArray(searchParams?.compatibility) ? searchParams.compatibility : [searchParams?.compatibility]
	) : [];
	
	return (
		<div className="!mt-12 !mb-32 flex flex-col gap-y-9 toGrid:flex-row">
			<div className="w-full toGrid:w-1/3 toRow:w-1/4">
				<Form />
			</div>
			<div className="px-1.5 md:px-0 w-full toGrid:w-2/3 toGrid:mr-3 toRow:w-3/4 [1937px]:mr-0">
				<AdoptProvider>
					<AvailablePets type={type} breed={breed} gender={gender} age={age} compatibility={compatibility} />
				</AdoptProvider>
			</div>
		</div>
	);
}