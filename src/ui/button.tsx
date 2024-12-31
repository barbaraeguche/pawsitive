import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'flex items-center justify-center rounded-lg px-3 py-5 h-5 text-[15px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-colors', {
		variants: {
			intent: {
				primary: "text-white bg-brown hover:bg-brown-80 active:bg-brown-100",
				danger: "text-black bg-gray-50 hover:bg-red-100 hover:text-red-600",
				refresh: "text-gray-600 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border border-gray-400",
				skeleton: "bg-brown-80/10"
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