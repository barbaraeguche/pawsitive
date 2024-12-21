import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'text-white flex items-center rounded-lg px-3 py-5 h-5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors', {
		variants: {
			intent: {
				primary: "bg-blue-500 hover:bg-blue-700 active:bg-blue-900 focus-visible:accent-lime-400",
				secondary: "bg-red-500 hover:bg-red-700 active:bg-red-900 focus-visible:accent-lime-400",
			}
		},
		defaultVariants: {
			intent: "secondary"
		}
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
	  VariantProps<typeof buttonVariants> {
	className?: string;
}

export default function Button({ intent, className, children, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={cn(buttonVariants({ intent }), className)}
		>
			{children}
		</button>
	);
}