import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...rest }, ref) {
	return (
		<input {...rest}
		       ref={ref}
		       className={clsx(
			       'w-full rounded-md p-2 border border-brown-80 text-sm disabled:disabled placeholder:text-gray-500 focus:placeholder:text-gray-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brown transition-colors',
			       className
		       )}
		/>
	);
})