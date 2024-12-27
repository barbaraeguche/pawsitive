import { Heart } from 'lucide-react';
// import { useAdoptContext } from '@/hooks/adopt-context';
import Button from '@/ui/button';

export default function AdoptButton() {
	// const { triggerAdopt } = useAdoptContext();
	
	return (
		// <form action={() => {
		// 	triggerAdopt();
		// 	triggerAdopt();
		// }}>
			<Button className="absolute top-1 right-1">
				<span className="hidden card:block">Adopt</span>
				<Heart className="block card:hidden"/>
			</Button>
		// </form>
	);
}