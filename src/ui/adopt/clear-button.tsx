import { Undo } from 'lucide-react';
import Button from '@/ui/button';

export default function ClearButton({ selector }: {
	selector: string;
}) {
	return (
		<Button intent="refresh"
		        type="button"
		        className="p-2 border-0 bg-transparent text-gray-600"
		        aria-label="Clear selected options"
		        onClick={() => {
			        const radioButtons = document.querySelectorAll(selector) as NodeListOf<HTMLInputElement>;
			        radioButtons.forEach((radio) => {
				        if (radio.checked) {
					        radio.checked = false;
				        }
			        });
		        }}
		>
			<Undo className="size-4" />
		</Button>
	);
}