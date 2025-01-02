import { CircleAlert } from 'lucide-react';

export default function FormError({ message }: {
	message: string;
}) {
	if (!message || message.includes('Missing')) return;
	
	return (
		<div className="w-full flex items-center rounded-md px-2 py-4 h-3 text-sm bg-rose-300 gap-x-2">
			<CircleAlert className="size-4"/>
			<span>{message}</span>
		</div>
	);
}