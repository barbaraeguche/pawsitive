'use client';
import { useNavigationParams } from '@/hooks/useNavigationParams';
import { useDebounce } from '@/hooks/useDebounce';
import Input from '@/ui/input';
import Button from '@/ui/button';
import ClearButton from '@/ui/adopt/clear-button';
import Headings from '@/components/headings';

export default function Form() {
	const { replace, pathname, searchParams } = useNavigationParams();
	const { handleFilter } = useDebounce();
	
	return (
		<div className={'px-1.5 md:px-6 space-y-6 md:space-y-12'}>
			<Headings title={'Adopt a Pet, Bring Joy Home'}/>
			<form method={'get'}>
				<div className={'mx-auto max-w-[400px] sm:max-w-[600px] rounded-lg bg-gray-50/50 p-3 md:p-5 space-y-4 border border-brown-80 shadow-md shadow-brown-80/25'}>
					{/* pet type */}
					<fieldset>
						<div className={'mt-0 flex justify-between'}>
							<legend className={'mb-1 block text-sm'}>Pet Type</legend>
							<ClearButton selector={'input[name=\'type\']'}/>
						</div>
						<div className={'flex gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2'}>
							{/* cat */}
							<div>
								<input id={'cat'}
								       name={'type'}
								       type={'radio'}
								       value={'cat'}
								       onChange={(e) => handleFilter('type', e.target.value)}
								       className={'size-3.5 cursor-pointer accent-celeste'}
								/>
								<label htmlFor={'cat'} className={'text-sm ml-2 cursor-pointer'}>Cat</label>
							</div>
							
							{/* dog */}
							<div>
								<input id={'dog'}
								       name={'type'}
								       type={'radio'}
								       value={'dog'}
								       onChange={(e) => handleFilter('type', e.target.value)}
								       className={'size-3.5 cursor-pointer accent-celeste'}
								/>
								<label htmlFor={'dog'} className={'text-sm ml-2 cursor-pointer'}>Dog</label>
							</div>
						</div>
					</fieldset>
					
					{/* pet breed */}
					<div>
						<label htmlFor={'breed'} className={'mb-1 block text-sm'}>Pet Breed</label>
						<Input id={'breed'}
						       name={'breed'}
						       placeholder={'Enter your pet\'s breed'}
						       defaultValue={searchParams?.get('breed')?.toString()}
						       onChange={(e) => handleFilter('breed', e.target.value)}
						/>
					</div>
					
					{/* pet gender */}
					<fieldset>
						<div className={'!mt-0 flex justify-between'}>
							<legend className={'mb-1 block text-sm'}>Pet Gender</legend>
							<ClearButton selector={'input[name=\'gender\']'}/>
						</div>
						<div className={'flex gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2'}>
							{/* male */}
							<div>
								<input id={'male'}
								       name={'gender'}
								       type={'radio'}
								       value={'male'}
								       onChange={(e) => handleFilter('gender', e.target.value)}
								       className={'size-3.5 cursor-pointer accent-celeste'}
								/>
								<label htmlFor={'male'} className={'text-sm ml-2 cursor-pointer'}>Male</label>
							</div>
							
							{/* female */}
							<div>
								<input id={'female'}
								       name={'gender'}
								       type={'radio'}
								       value={'female'}
								       onChange={(e) => handleFilter('gender', e.target.value)}
								       className={'size-3.5 cursor-pointer accent-celeste'}
								/>
								<label htmlFor={'female'} className={'text-sm ml-2 cursor-pointer'}>Female</label>
							</div>
						</div>
					</fieldset>
					
					{/* pet age */}
					<div>
						<label htmlFor={'age'} className={'mb-1 block text-sm'}>Pet Age</label>
						<Input id={'age'}
						       name={'age'}
						       placeholder={'e.g., 5month(s) or 1yr or 2yr(s) 3month(s)'}
						       defaultValue={searchParams?.get('age')?.toString()}
						       onChange={(e) => handleFilter('age', e.target.value)}
						/>
					</div>
					
					{/* pet compatibility */}
					<fieldset>
						<legend className={'mb-1 block text-sm'}>Pet Compatibility</legend>
						<div className={'grid grid-cols-2 sm:flex sm:gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2'}>
							{/* dogs */}
							<div>
								<input id={'dogs'}
								       name={'compatibility'}
								       type={'checkbox'}
								       value={'dogs'}
								       onChange={(e) => handleFilter('compatibility', e.target.value, 'checkbox')}
								       className={'size-3.5 cursor-pointer accent-celeste'}
								/>
								<label htmlFor={'dogs'} className={'text-sm ml-2 cursor-pointer'}>Dogs</label>
							</div>
							
							{/* cats */}
							<div>
								<input id={'cats'}
								       name={'compatibility'}
								       type={'checkbox'}
								       value={'cats'}
								       onChange={(e) => handleFilter('compatibility', e.target.value, 'checkbox')}
								       className={'size-3.5 cursor-pointer accent-celeste'}
								/>
								<label htmlFor={'cats'} className={'text-sm ml-2 cursor-pointer'}>Cats</label>
							</div>
							
							{/* kids */}
							<div>
								<input id={'kids'}
								       name={'compatibility'}
								       type={'checkbox'}
								       value={'kids'}
								       onChange={(e) => handleFilter('compatibility', e.target.value, 'checkbox')}
								       className={'size-3.5 cursor-pointer accent-celeste'}
								/>
								<label htmlFor={'kids'} className={'text-sm ml-2 cursor-pointer'}>Kids</label>
							</div>
						</div>
					</fieldset>
					
					{/* buttons */}
					<Button type={'reset'}
					        intent={'refresh'}
					        className={'w-full !mt-8'}
					        onClick={() => replace(`${pathname}`)}
					>
						Clear
					</Button>
				</div>
			</form>
		</div>
	);
}