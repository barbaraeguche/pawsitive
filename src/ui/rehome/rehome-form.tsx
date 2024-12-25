'use client'; // once submitted, cannot be changed

// import { PawPrint } from 'lucide-react';

import Headings from '@/components/headings';
import Input from '@/ui/input';
import Button from '@/ui/button';

export default function Form() {
	return (
		<div className="mx-auto max-w-[600px] !mt-12 !mb-32 space-y-12">
			<Headings title="Find a New Home for Your Pet" />
			<form>
				<div className="rounded-lg bg-gray-50 p-3 md:p-5 w-[95%] mx-auto space-y-4">
					{/* pet type */}
					<fieldset>
						<legend className="mb-1 block text-sm">Pet Type</legend>
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
						<legend className="mb-1 block text-sm">Pet Gender</legend>
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
					
					{/* pet image */}
					<div>
						<label htmlFor="image" className="mb-2 block text-sm">Pet Image</label>
						<div className="relative h-20 rounded-md border-[1.75px] border-dashed border-brown-80 bg-white">
							<Input id="image"
							       name="image"
							       type="file"
							       accept="image/jpeg, image/png"
							       className="hidden"
							/>
							{/* centered label content */}
							<label htmlFor="image" className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
								<p className="text-sm">Select a file</p>
								<span className="mt-1 text-xs text-gray-500">Accepted types: JPG, PNG</span>
							</label>
						</div>
					</div>
					
					{/* comments on pet */}
					<div>
						<label htmlFor="comments" className="mb-1 block text-sm">Comments</label>
						<textarea id="comments"
						          name="comments"
						          rows={4} cols={30} maxLength={200}
						          placeholder="Tell us more about your pet, max 200 words"
						          className="resize-none w-full rounded-md p-2 border border-brown-80 text-sm placeholder:text-gray-500 focus:placeholder:text-gray-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brown transition-colors"
						/>
					</div>
					
					{/* pet rehomer - might get this information from the authentication instead */}
					<div>
						<label htmlFor="rehomer" className="mb-1 block text-sm">Email</label>
						<Input id="rehomer"
						       name="rehomer"
						       type="email"
						       placeholder="Enter your email"
						/>
					</div>
					
					{/* buttons */}
					<div className="!mt-8 flex gap-x-3">
						<Button type="reset" intent="dangerGhost" className="w-1/3">
							Cancel
						</Button>
						
						<Button className="w-2/3">
							Rehome
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}