'use client'; // once submitted, cannot be changed

import Headings from '@/components/headings';
import ClearButton from '@/ui/adopt/clear-button';

import Input from '@/ui/input';
import Button from '@/ui/button';

export default function Form() {
	return (
		<div className="px-1.5 !mt-12 !mb-32 space-y-12">
			<Headings title="Adopt a Pet, Bring Joy"/>
			<form>
				<div className="mx-auto max-w-[600px] rounded-lg bg-gray-50/50 p-3 md:p-5 space-y-4 border border-brown-80 shadow-md shadow-brown-80/25">
					{/* pet type */}
					<fieldset>
						<div className="mt-0 flex justify-between">
							<legend className="mb-1 block text-sm">Pet Type</legend>
							<ClearButton selector="input[name='type']"/>
						</div>
						<div className="flex gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2">
							{/* cat */}
							<div>
								<input id="cat"
								       name="type"
								       type="radio"
								       value="cat"
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="cat" className="text-sm ml-2 cursor-pointer">Cat</label>
							</div>
							
							{/* dog */}
							<div>
								<input id="dog"
								       name="type"
								       type="radio"
								       value="dog"
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="dog" className="text-sm ml-2 cursor-pointer">Dog</label>
							</div>
						</div>
					</fieldset>
					
					{/* pet breed */}
					<div>
						<label htmlFor="breed" className="mb-1 block text-sm">Pet Breed</label>
						<Input id="breed"
						       name="breed"
						       placeholder="Enter your pet's breed"
						/>
					</div>
					
					{/* pet gender */}
					<fieldset>
						<div className="!mt-0 flex justify-between">
							<legend className="mb-1 block text-sm">Pet Gender</legend>
							<ClearButton selector="input[name='gender']"/>
						</div>
						<div className="flex gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2">
							{/* male */}
							<div>
								<input id="male"
								       name="gender"
								       type="radio"
								       value="male"
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="male" className="text-sm ml-2 cursor-pointer">Male</label>
							</div>
							
							{/* female */}
							<div>
								<input id="female"
								       name="gender"
								       type="radio"
								       value="female"
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="female" className="text-sm ml-2 cursor-pointer">Female</label>
							</div>
						</div>
					</fieldset>
					
					{/* pet age */}
					<div>
						<label htmlFor="age" className="mb-1 block text-sm">Pet Age</label>
						<Input id="age"
						       name="age"
						       placeholder="e.g., 2yrs 3months or 15months"
						/>
					</div>
					
					{/* pet compatibility */}
					<fieldset>
						<legend className="mb-1 block text-sm">Pet Compatibility</legend>
						<div className="grid grid-cols-2 sm:flex sm:gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2">
							{/* dogs */}
							<div>
								<input id="dogs"
								       name="compatibility"
								       type="checkbox"
								       value="dogs"
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="dogs" className="text-sm ml-2 cursor-pointer">Dogs</label>
							</div>
							
							{/* cats */}
							<div>
								<input id="cats"
								       name="compatibility"
								       type="checkbox"
								       value="cats"
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="cats" className="text-sm ml-2 cursor-pointer">Cats</label>
							</div>
							
							{/* small kids */}
							<div>
								<input id="small kids"
								       name="compatibility"
								       type="checkbox"
								       value="small kids"
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="small kids" className="text-sm ml-2 cursor-pointer">Small kids</label>
							</div>
						</div>
					</fieldset>
					
					{/* buttons */}
					<Button type="reset" intent="refresh" className="w-full !mt-8">
						Clear
					</Button>
				</div>
			</form>
		</div>
	);
}