import Banner from '@/components/main/banner';
import About from '@/components/main/about';
import Values from '@/components/main/values';
import Statistics from '@/components/main/statistics';
import Testimonials from '@/components/main/testimonials';

export default function Page() {
	return (
		<main className="flex-1 space-y-24 bg-blue-50 mt-5 mb-20">
			<Banner />
      <About />
      <Values />
      <Statistics />
			<Testimonials />
		</main>
	);
}