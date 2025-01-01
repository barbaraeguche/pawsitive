'use client';
import { Eye, EyeClosed } from 'lucide-react';
import Headings from '@/components/headings';
import Input from '@/ui/input';
import Button from '@/ui/button';

export default function LoginForm() {
	const { state, isPending } = { state: {
		values: { name: '', email: '', password: '' },
    errors: { name: [], email: [], password: [] },
    message: null,
		}, isPending: false };
	
	function viewPassword(e: HTMLInputElement) {
		return e.type === 'password' ? <EyeClosed/> : <Eye/>;
	}
	
	return (
		<div className="px-1.5 !mt-12 !mb-32 space-y-12">
			<Headings title="Rehome Your Beloved Pet"/>
			<form>
				<div className="mx-auto max-w-[600px] rounded-lg bg-gray-50/50 p-3 md:p-5 space-y-4 border border-brown-80 shadow-md shadow-brown-80/25">
					{/* name */}
					<div>
						<label htmlFor="name" className="mb-1 block text-sm">Full Name</label>
						<Input id="name"
						       name="name"
						       aria-describedby="name-error"
						       defaultValue={state.values?.name}
						       placeholder="Enter your full name"
						/>
						<div id="name-error" aria-live="polite" aria-atomic="true">
							{state.errors?.name?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</div>
					
					{/* email */}
					<div>
						<label htmlFor="email" className="mb-1 block text-sm">Email</label>
						<Input id="email"
						       name="email"
						       type="email"
						       aria-describedby="email-error"
						       defaultValue={state.values?.email}
						       placeholder="Enter your email address"
						/>
						<div id="email-error" aria-live="polite" aria-atomic="true">
							{state.errors?.email?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
					</div>
					
					{/* password */}
					<div>
						<label htmlFor="password" className="mb-1 block text-sm">Password</label>
						<div className="bg-celeste">
							<Input id="password"
							       name="password"
							       type="password"
							       aria-describedby="password-error"
							       defaultValue={state.values?.password}
							       placeholder="******"
							/>
							<EyeClosed className="absolute top-1/2 right-1"/>
						</div>
						<div id="password-error" aria-live="polite" aria-atomic="true">
							{state.errors?.password?.map((error: string) => (
								<p key={error} className="mt-1 text-sm text-red-600">
									{error}
								</p>
							))}
						</div>
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