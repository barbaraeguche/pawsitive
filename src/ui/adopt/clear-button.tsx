'use client';
import { Undo } from 'lucide-react';
import { useNavigationParams } from '@/hooks/useNavigationParams';
import Button from '@/ui/button';

export default function ClearButton({ selector }: {
	selector: string;
}) {
	const { replace, pathname, searchParams } = useNavigationParams();
	const params = new URLSearchParams(searchParams!);
	const firstIndex = selector.indexOf("'") + 1;
	const toDelete = selector.substring(firstIndex, selector.indexOf("'", firstIndex));
	
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
							params.delete(toDelete);
							replace(`${pathname}?${params.toString()}`);
		        }}
		>
			<Undo className="size-4" />
		</Button>
	);
}