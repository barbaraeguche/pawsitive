import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'text-brown-100 flex items-center justify-center rounded-lg px-3 py-5 h-5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-colors', {
		variants: {
			intent: {
				primary: "text-dough bg-brown hover:bg-brown-80 active:bg-brown-100",
				danger: "bg-ember hover:bg-ember-80 active:bg-ember-100",
				refresh: "bg-meadow hover:bg-meadow-80 active:bg-meadow-100"
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