import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({className, ...rest}: InputProps) {
	return (
		<input {...rest}
		       className={clsx(
						 'w-full rounded-md p-2 border border-gray-200 placeholder:text-sm placeholder:text-gray-500 focus:placeholder:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600 transition-colors',
			       className
		       )}
		/>
	);
}