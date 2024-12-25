import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({className, ...rest}: InputProps) {
	return (
		<input {...rest}
		       className={clsx(
						 'w-full rounded-md p-2 border border-brown-80 text-sm placeholder:text-gray-500 focus:placeholder:text-gray-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brown transition-colors',
			       className
		       )}
		/>
	);
}