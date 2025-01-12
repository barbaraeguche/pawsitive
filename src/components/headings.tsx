import { montserrat } from '@/ui/fonts';

export default function Headings({ title }: {
	title: string
}) {
	return (
		<h3 className={`${montserrat.className} text-xl sm:text-2xl text-center`}>{title}</h3>
	);
}