'use client'; // once submitted, cannot be changed
import Input from '@/ui/input';
import Button from '@/ui/button';

export default function RehomeForm() {
	return (
		<form>
			<div className="rounded-md bg-gray-50 p-4 md:p-6 mx-auto w-[95%] max-w-[600px] space-y-4">
				{/* pet type */}
				<fieldset>
					<legend className="mb-2 block text-sm font-medium">
						Pet Type
					</legend>
					<div className="flex gap-x-8 rounded-md border border-gray-200 bg-white p-2.5">
						{/* cat */}
						<div>
							<input id="cat"
							       name="type"
							       type="radio"
							       value="cat"
							       className="size-3.5 cursor-pointer border-gray-300 bg-gray-100 focus-visible:ring-2 accent-blue-700"
							/>
							<label htmlFor="cat" className="ml-2 cursor-pointer">
								Cat
							</label>
						</div>
						
						{/* dog */}
						<div>
							<input id="dog"
							       name="type"
							       type="radio"
							       value="dog"
							       className="size-3.5 cursor-pointer border-gray-300 bg-gray-100 focus-visible:ring-2 accent-blue-700"
							/>
							<label htmlFor="dog" className="ml-2 cursor-pointer">
								Dog
							</label>
						</div>
					</div>
				</fieldset>
				
				{/* pet breed */}
				<div>
					<label htmlFor="breed"
					       className="mb-2 block text-sm font-medium"
					>
						Pet Breed
					</label>
					<Input id="breed"
					       name="breed"
					       placeholder="Enter your pet's breed"
					/>
				</div>
				
				{/* pet age - consider two inputs, one for year, the other for months */}
				<div>
					<label htmlFor="age"
					       className="mb-2 block text-sm font-medium"
					>
						Pet Age
					</label>
					<Input id="age"
					       name="age"
					       placeholder="e.g., 2yrs 3mnths or 15mnths"
					/>
				</div>
				
				{/* pet gender */}
				<fieldset>
					<legend className="mb-2 block text-sm font-medium">
						Pet Gender
					</legend>
					<div className="flex gap-x-8 rounded-md border border-gray-200 bg-white p-2.5">
						{/* male */}
						<div>
							<input id="male"
							       name="gender"
							       type="radio"
							       value="male"
							       className="size-3.5 cursor-pointer border-gray-300 bg-gray-100 focus-visible:ring-2 accent-blue-700"
							/>
							<label htmlFor="male" className="ml-2 cursor-pointer">
								Male
							</label>
						</div>
						
						{/* female */}
						<div>
							<input id="female"
							       name="gender"
							       type="radio"
							       value="female"
							       className="size-3.5 cursor-pointer border-gray-300 bg-gray-100 focus-visible:ring-2 accent-blue-700"
							/>
							<label htmlFor="female" className="ml-2 cursor-pointer">
								Female
							</label>
						</div>
					</div>
				</fieldset>
				
				{/* pet compatibility */}
				<fieldset>
					<legend className="mb-2 block text-sm font-medium">
						Pet Compatibility
					</legend>
					<div className="grid grid-cols-2 md:flex md:gap-x-8 rounded-md border border-gray-200 bg-white p-2.5">
						{/* dogs */}
						<div>
							<input id="dogs"
							       name="compatibility"
							       type="checkbox"
							       value="dogs"
							       className="size-3.5 cursor-pointer border-gray-300 bg-gray-100 focus-visible:ring-2 accent-blue-700"
							/>
							<label htmlFor="dogs" className="ml-2 cursor-pointer">
								Dogs
							</label>
						</div>
						
						{/* cats */}
						<div>
							<input id="cats"
							       name="compatibility"
							       type="checkbox"
							       value="cats"
							       className="size-3.5 cursor-pointer border-gray-300 bg-gray-100 focus-visible:ring-2 accent-blue-700"
							/>
							<label htmlFor="cats" className="ml-2 cursor-pointer">
								Cats
							</label>
						</div>
						
						{/* small kids */}
						<div>
							<input id="small kids"
							       name="compatibility"
							       type="checkbox"
							       value="small kids"
							       className="size-3.5 cursor-pointer border-gray-300 bg-gray-100 focus-visible:ring-2 accent-blue-700"
							/>
							<label htmlFor="small kids" className="ml-2 cursor-pointer">
								Small kids
							</label>
						</div>
					</div>
				</fieldset>
				
				{/* comments on pet */}
				<div>
					<label htmlFor="comments"
					       className="mb-2 block text-sm font-medium"
					>
						Comments
					</label>
					<textarea id="comments"
					          name="comments"
					          rows={4} cols={30} maxLength={200}
					          placeholder="Tell us more about your pet"
					          className="resize-none w-full rounded-md p-2 border border-gray-200 placeholder:text-sm placeholder:text-gray-500 focus:placeholder:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600 transition-colors"
					/>
				</div>
				
				{/* pet rehomer - might get this information from the authentication */}
				<div>
					<label htmlFor="rehomer"
					       className="mb-2 block text-sm font-medium"
					>
						Email
					</label>
					<Input id="rehomer"
					       name="rehomer"
					       type="email"
					       placeholder="Enter your email"
					/>
				</div>
				
				<Button className="w-full">
					Rehome
				</Button>
			</div>
		</form>
	);
}