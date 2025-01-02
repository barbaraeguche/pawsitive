'use client';
import Link from 'next/link';
import { useState, useActionState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { UserLoginState } from '@/lib/definitions';
import { loginUser } from '@/lib/action';
import Input from '@/ui/input';
import Button from '@/ui/button';
import AuthSeparator from '@/ui/auth/separator';
import FormError from '@/ui/auth/form-error';

export default function LoginForm() {
	const initialState: UserLoginState = { values: {}, errors: {}, message: null };
	const [state, formAction, isPending] = useActionState(loginUser, initialState);
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	
	return (
		<div className="px-1.5 !mt-12 !mb-32 space-y-12">
			<form action={formAction}>
				<div className="mx-auto max-w-[600px] rounded-lg bg-gray-50/50 p-3 md:p-5 space-y-4 border border-brown-80 shadow-md shadow-brown-80/25">
					<h4 className="text-xl">Log In to Account</h4>
					
					{/* providers */}
					<div className="flex w-full gap-x-2">
						<Button type="button" intent="refresh" className="w-full border-brown-80 ">
							with Google
						</Button>
						<Button type="button" intent="refresh" className="w-full border-brown-80">
							with Github
						</Button>
					</div>
					
					{/* separator */}
					<AuthSeparator/>
					
					{/* actual form */}
					<div className="space-y-4">
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
							<div className="relative">
								<Input id="password"
								       name="password"
								       type={`${isPasswordVisible ? 'text' : 'password'}`}
								       className="pr-10"
								       placeholder="******"
								       aria-describedby="password-error"
								       defaultValue={state.values?.password}
								/>
								<button onClick={() => setIsPasswordVisible((prev) => !prev)}
								        aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
								        className="text-gray-600 absolute w-4 top-1/2 -translate-y-1/2 right-3 flex"
								>
									{isPasswordVisible ? <Eye/> : <EyeClosed/>}
								</button>
							</div>
							<div id="password-error" aria-live="polite" aria-atomic="true">
								{state.errors?.password?.map((error: string) => (
									<p key={error} className="mt-1 text-sm text-red-600">
										{error}
									</p>
								))}
							</div>
						</div>
						
						<FormError message="Invalid credentials!"/>
						
						{/* submit button */}
						<Button type="submit"
						        disabled={isPending}
						        className="!mt-5 w-full disabled:bg-brown-80/10 disabled:text-brown disabled:cursor-default"
						>
							Log in
						</Button>
					</div>
					
					{/* link to register page */}
					<Link href="/register" className="flex justify-center hover:underline">
						Don&rsquo;t have an account?
					</Link>
				</div>
			</form>
		</div>
	);
}