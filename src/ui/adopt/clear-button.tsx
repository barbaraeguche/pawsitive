import Button from '@/ui/button';

export default function ClearButton({ selector }: {
	selector: string;
}) {
	return (
		<Button intent="primary"
		        type="button"
		        onClick={() => {
			        const radioButtons = document.querySelectorAll(selector) as NodeListOf<HTMLInputElement>;
			        radioButtons.forEach((radio) => {
				        if (radio.checked) {
					        radio.checked = false;
				        }
			        });
		        }}
		>
			Clear
		</Button>
	);
}