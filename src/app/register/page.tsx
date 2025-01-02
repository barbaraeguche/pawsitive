import { Metadata } from 'next';
import SignUpForm from '@/ui/auth/signup-form';

export const metadata: Metadata = { title: 'Register' };

export default function RegisterPage() {
	return (
		<SignUpForm/>
	);
}