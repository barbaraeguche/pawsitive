import { CircleAlert } from 'lucide-react';

export default function FormError({ message }: {
	message: string | null | undefined;
}) {
	if (!message) return;
	
	return (
		<div aria-description="Form error"
		     className="w-full flex items-center rounded-md px-2 py-4 h-3 text-base bg-rose-100 text-rose-700 gap-x-2"
		>
			<CircleAlert className="size-4"/>
			<span>{message}</span>
		</div>
	);
}