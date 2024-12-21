'use client'; // once submitted, cannot be changed
import Input from '@/ui/input';

export default function RehomeForm() {
	return (
		<form>
			<div className="space-y-4">
				{/* pet type */}
				<fieldset>
					<legend className="">
						Pet Type
					</legend>
					<div className="">
						{/* cat */}
						<div>
							<input id="cat"
							       name="type"
							       type="radio"
							       value="cat"
							       className=""
							/>
							<label htmlFor="cat"
							       className=""
							>
								Cat
							</label>
						</div>
						
						{/* dog */}
						<div>
							<input id="dog"
							       name="type"
							       type="radio"
							       value="dog"
							       className=""
							/>
							<label htmlFor="dog"
							       className=""
							>
								Dog
							</label>
						</div>
					</div>
				</fieldset>
				
				{/* pet breed */}
				<div>
					<label htmlFor="breed"
					       className=""
					>
						Pet Breed
					</label>
					<Input id="breed"
					       name="breed"
					       placeholder="Enter your pet's breed"
					       className=""
					/>
				</div>
				
				{/* pet age - consider two inputs, one for year, the other for months */}
				<div>
					<label htmlFor="age"
					       className=""
					>
						Pet Age
					</label>
					<Input id="age"
					       name="age"
					       placeholder="e.g., 2yrs 3mnths or 15mnths"
					       className=""
					/>
				</div>
				
				{/* pet gender */}
				<fieldset>
					<legend className="">
						Pet Gender
					</legend>
					<div className="">
						{/* male */}
						<div>
							<input id="male"
							       name="gender"
							       type="radio"
							       value="male"
							       className=""
							/>
							<label htmlFor="male"
							       className=""
							>
								Male
							</label>
						</div>
						
						{/* female */}
						<div>
							<input id="female"
							       name="gender"
							       type="radio"
							       value="female"
							       className=""
							/>
							<label htmlFor="female"
							       className=""
							>
								Female
							</label>
						</div>
					</div>
				</fieldset>
				
				{/* pet compatibility */}
				<fieldset>
					<legend className="">
						Pet Compatibility
					</legend>
					<div className="">
						{/* dogs */}
						<div>
							<input id="dogs"
							       name="compatibility"
							       type="checkbox"
							       value="dogs"
							       className=""
							/>
							<label htmlFor="dogs"
							       className=""
							>
								Dogs
							</label>
						</div>
						
						{/* cats */}
						<div>
							<input id="cats"
							       name="compatibility"
							       type="checkbox"
							       value="cats"
							       className=""
							/>
							<label htmlFor="cats"
							       className=""
							>
								Cats
							</label>
						</div>
						
						{/* small kids */}
						<div>
							<input id="small kids"
							       name="compatibility"
							       type="checkbox"
							       value="small kids"
							       className=""
							/>
							<label htmlFor="small kids"
							       className=""
							>
								Small kids
							</label>
						</div>
					</div>
				</fieldset>
				
				{/* comments on pet */}
				<div>
					<label htmlFor="comments"
					       className=""
					>
						Comments
					</label>
					<textarea id="comments"
					          name="comments"
					          rows={4} cols={30} maxLength={300}
                    className="resize-none"
                    placeholder="Tell us more about your pet"
					/>
				</div>
				
				{/* pet rehomer - might get this information from the authentication */}
				<div>
					<label htmlFor="rehomer"
                 className=""
          >
            Email
          </label>
          <Input id="rehomer"
                 name="rehomer"
                 type="email"
                 placeholder="Enter your email"
                 className=""
          />
				</div>
			</div>
		</form>
	);
}