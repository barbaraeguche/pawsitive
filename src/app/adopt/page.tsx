import { Metadata } from 'next';
import { getAuthUserId } from '@/lib/data';
import Form from '@/ui/adopt/adopt-form';
import AvailablePets from '@/components/available-pets';

export const metadata: Metadata = { title: 'Adopt a Pet' };

export default async function AdoptPage(props: {
	searchParams?: Promise<{
		type?: string,
		breed?: string,
		gender?: string,
		age?: string,
		compatibility?: Array<'dogs' | 'cats' | 'kids'>
	}>
}) {
	const userId = await getAuthUserId();
	const searchParams = await props.searchParams;
	
	const type = searchParams?.type || '';
	const breed = searchParams?.breed || '';
	const gender = searchParams?.gender || '';
	const age = searchParams?.age || '';
	const compatibility = searchParams?.compatibility ? (
		Array.isArray(searchParams.compatibility) ? searchParams.compatibility : [searchParams.compatibility]
	) : [];
	
	return (
		<div className={'!mt-top !mb-bottom flex flex-col gap-y-9 toGrid:flex-row'}>
			<div className={'w-full toGrid:w-1/4'}>
				<Form/>
			</div>
			<div className={'px-1.5 md:px-0 w-full toGrid:w-3/4 toGrid:mr-3 [1937px]:mr-0'}>
				<AvailablePets userId={userId} type={type} breed={breed} gender={gender} age={age} compatibility={compatibility}/>
			</div>
		</div>
	);
}