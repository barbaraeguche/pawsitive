import Introduction from '@/ui/home/intro';
import About from '@/ui/home/about';
import Values from '@/ui/home/values';
import Statistics from '@/ui/home/stats';
import Testimonials from '@/ui/home/testimonials';

export default function RootPage() {
	return (
		<div className={'!mt-top !mb-bottom space-y-20'}>
			<Introduction/>
			<About/>
			<Values/>
			<Statistics/>
			<Testimonials/>
		</div>
	);
}