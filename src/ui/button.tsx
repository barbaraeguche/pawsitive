import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'text-white flex items-center justify-center rounded-lg px-3 py-5 h-5 text-[15px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-colors', {
		variants: {
			intent: {
				primary: "bg-brown hover:bg-brown-80 active:bg-brown-100",
				danger: "bg-red-500 hover:bg-red-600 active:bg-red-700",
				// dangerGhost: "border border-red-600 bg-white text-red-600 hover:bg-red-100 active:bg-red-200",
				refresh: "text-gray-600 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border border-gray-400"
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