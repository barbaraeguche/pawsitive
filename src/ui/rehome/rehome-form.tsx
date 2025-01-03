'use client';
import { useActionState } from 'react';
import { PetState } from '@/lib/definitions';
import { rehomePet } from '@/lib/action';
import Input from '@/ui/input';
import Button from '@/ui/button';
import FormError from '@/ui/form-error';
import Headings from '@/components/headings';

export default function Form() {
	const initialState: PetState = { values: {}, errors: {}, message: null };
	const [state, formAction, isPending] = useActionState(rehomePet, initialState);
	
	return (
		<div className="px-1.5 !mt-12 !mb-32 space-y-12">
			<Headings title="Rehome Your Beloved Pet"/>
			<form action={formAction}>
				<div
					className="mx-auto max-w-[600px] rounded-lg bg-gray-50/50 p-3 md:p-5 space-y-4 border border-brown-80 shadow-md shadow-brown-80/25">
					{/* pet name */}
					<div>
						<label htmlFor="name" className="mb-1 block text-sm">Pet Name</label>
						<Input id="name"
						       name="name"
						       disabled={isPending}
						       aria-describedby="name-error"
						       defaultValue={state.values?.name}
						       placeholder="Enter your pet's name"
						/>
						<div id="name-error" aria-live="polite" aria-atomic="true">
							{state.errors?.name?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</div>
					
					{/* pet type */}
					<fieldset>
						<legend className="mb-1 block text-sm">Pet Type</legend>
						<div aria-describedby="type-error"
						     className="flex gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2"
						>
							{/* cat */}
							<div>
								<input id="cat"
								       name="type"
								       type="radio"
								       value="cat"
								       disabled={isPending}
								       defaultChecked={state.values?.type === 'cat'}
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
								       disabled={isPending}
								       defaultChecked={state.values?.type === 'dog'}
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="dog" className="text-sm ml-2 cursor-pointer">Dog</label>
							</div>
						</div>
						<div id="type-error" aria-live="polite" aria-atomic="true">
							{state.errors?.type?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</fieldset>
					
					{/* pet breed */}
					<div>
						<label htmlFor="breed" className="mb-1 block text-sm">Pet Breed</label>
						<Input id="breed"
						       name="breed"
						       disabled={isPending}
						       aria-describedby="breed-error"
						       defaultValue={state.values?.breed}
						       placeholder="Enter your pet's breed"
						/>
						<div id="breed-error" aria-live="polite" aria-atomic="true">
							{state.errors?.breed?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</div>
					
					{/* pet gender */}
					<fieldset>
						<legend className="mb-1 block text-sm">Pet Gender</legend>
						<div aria-describedby="gender-error"
						     className="flex gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2"
						>
							{/* male */}
							<div>
								<input id="male"
								       name="gender"
								       type="radio"
								       value="male"
								       disabled={isPending}
								       defaultChecked={state.values?.gender === 'male'}
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
								       disabled={isPending}
								       defaultChecked={state.values?.gender === 'female'}
								       className="size-3.5 cursor-pointer accent-celeste"
								/>
								<label htmlFor="female" className="text-sm ml-2 cursor-pointer">Female</label>
							</div>
						</div>
						<div id="gender-error" aria-live="polite" aria-atomic="true">
							{state.errors?.gender?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</fieldset>
					
					{/* pet age */}
					<div>
						<label htmlFor="age" className="mb-1 block text-sm">Pet Age</label>
						<Input id="age"
						       name="age"
						       disabled={isPending}
						       aria-describedby="age-error"
						       defaultValue={state.values?.age}
						       placeholder="e.g., 5month(s) or 1yr or 2yr(s) 3month(s)"
						/>
						<div id="age-error" aria-live="polite" aria-atomic="true">
							{state.errors?.age?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</div>
					
					{/* pet compatibility */}
					<fieldset>
						<legend className="mb-1 block text-sm">Pet Compatibility</legend>
						<div aria-describedby="compatibility-error"
						     className="grid grid-cols-2 sm:flex sm:gap-x-8 rounded-md border border-brown-80 bg-white px-2.5 py-2"
						>
							{/* dogs */}
							<div>
								<input id="dogs"
								       name="compatibility"
								       type="checkbox"
								       value="dogs"
								       disabled={isPending}
								       className="size-3.5 cursor-pointer accent-celeste"
								       defaultChecked={state.values?.compatibility?.includes('dogs')}
								/>
								<label htmlFor="dogs" className="text-sm ml-2 cursor-pointer">Dogs</label>
							</div>
							
							{/* cats */}
							<div>
								<input id="cats"
								       name="compatibility"
								       type="checkbox"
								       value="cats"
								       disabled={isPending}
								       className="size-3.5 cursor-pointer accent-celeste"
								       defaultChecked={state.values?.compatibility?.includes('cats')}
								/>
								<label htmlFor="cats" className="text-sm ml-2 cursor-pointer">Cats</label>
							</div>
							
							{/* kids */}
							<div>
								<input id="kids"
								       name="compatibility"
								       type="checkbox"
								       value="kids"
								       disabled={isPending}
								       className="size-3.5 cursor-pointer accent-celeste"
								       defaultChecked={state.values?.compatibility?.includes('kids')}
								/>
								<label htmlFor="kids" className="text-sm ml-2 cursor-pointer">Kids</label>
							</div>
						</div>
						<div id="compatibility-error" aria-live="polite" aria-atomic="true">
							{state.errors?.compatibility?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</fieldset>
					
					{/* pet image */}
					<div>
						<label htmlFor="image" className="mb-2 block text-sm">Pet Image</label>
						<div className="relative h-20 rounded-md border-[1.75px] border-dashed border-brown-80 bg-white">
							<Input id="image"
							       name="image"
							       type="file"
							       disabled={isPending}
							       accept="image/jpeg, image/png"
							       aria-describedby="image-error"
							       defaultValue={state.values?.image}
							       className="hidden"
							/>
							{/* centered label content */}
							<label htmlFor="image"
							       className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
								<p className="text-sm">Select a file</p>
								<span className="mt-1 text-xs text-gray-500">Accepted types: JPG, PNG</span>
							</label>
						</div>
						<div id="image-error" aria-live="polite" aria-atomic="true">
							{state.errors?.image?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</div>
					
					{/* pet comments */}
					<div>
						<label htmlFor="comments" className="mb-1 block text-sm">Comments</label>
						<textarea id="comments"
						          name="comments"
						          disabled={isPending}
						          aria-describedby="comments-error"
						          rows={4} cols={30} maxLength={150}
						          defaultValue={state.values?.comments}
						          placeholder="Tell us more about your pet, max 150 words"
						          className="align-top resize-none w-full rounded-md p-2 border border-brown-80 text-sm placeholder:text-gray-500 focus:placeholder:text-gray-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brown transition-colors"
						/>
						<div id="comments-error" aria-live="polite" aria-atomic="true">
							{state.errors?.comments?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</div>
					
					{/* database error if any */}
					<div aria-description="db-error" aria-live="polite" aria-atomic="true">
						<FormError message={state.message}/>
					</div>
					
					{/* buttons */}
					<div className="!mt-8 flex gap-x-3">
						<Button type="reset"
						        intent="refresh"
						        className="w-1/3"
						>
							Clear
						</Button>
						
						<Button type="submit"
						        disabled={isPending}
						        className="w-2/3 disabled:bg-brown-80/10 disabled:text-brown disabled:cursor-default"
						>
							Rehome
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}