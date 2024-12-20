import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'p-4 rounded-md', {
		variants: {
			intent: {
				primary: "bg-blue-500 hover:bg-blue-700 text-white",
				secondary: "bg-red-500 hover:bg-red-700 text-white",
			}
		},
		defaultVariants: {
			intent: "primary"
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