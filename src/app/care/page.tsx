import { Metadata } from 'next';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/shadcn/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/shadcn/card";
import Headings from '@/components/headings';
import { auth } from '../../../auth';

export const metadata: Metadata = { title: 'Pet Care' };

const catCare = [
	{ title: 'Nutrition', content: 'Feed high-quality cat food based on age, ensure fresh water is always available, and limit treats to less than 10% of daily calories.' },
	{ title: 'Environment', content: 'Clean the cat’s space daily, provide sturdy posts for claw health, and create a quiet, cozy area for relaxation.' },
	{ title: 'Grooming', content: 'Brush regularly to reduce shedding, trim nails every 2-3 weeks, and maintain oral health with cat-safe toothpaste and brushes.' },
	{ title: 'Health', content: 'Schedule annual check-ups, keep vaccinations up to date, and protect against fleas, ticks, and worms.' },
	{ title: 'Stimulation', content: 'Rotate interactive toys, encourage daily play to maintain weight, and supervise outdoor time with a harness or leash.' },
];
const dogCare = [
	{ title: 'Nutrition', content: 'Choose high-quality dog food suited for age, size, and breed, provide fresh water, and offer treats in moderation.' },
	{ title: 'Exercise', content: 'Walk daily based on breed and energy, play fetch or tug-of-war, and incorporate basic commands for stimulation.' },
	{ title: 'Grooming', content: 'Bathe as needed with dog-safe shampoo, brush regularly, and trim nails every 4-6 weeks to prevent overgrowth.' },
	{ title: 'Health', content: 'Ensure regular check-ups and vaccinations, use flea, tick, and heartworm preventatives, and prevent diseases and unwanted litters.' },
	{ title: 'Environment', content: 'Provide a cozy resting area, remove toxic plants and chewed items, and introduce the dog to new environments and people for confidence.' },
	{ title: 'Training and Behavior', content: 'Reinforce good behavior with rewards, establish a routine for trust, and use crates for training and safety.' }
];

export default async function CarePage() {
	const session = await auth();
	
	return (
		<div className="max-w-3xl mx-auto !mt-12 !mb-32 space-y-12">
			{JSON.stringify(session)}
			
			{/*<Headings title="Pet Wellness Handbook"/>*/}
			
			{/*<Tabs defaultValue="cats" className="px-2">*/}
			{/*	<TabsList className="w-full mb-4">*/}
			{/*		<TabsTrigger value="cats" className="w-1/2 text-[15px] data-[state=active]:border data-[state=active]:border-brown-80 transition-colors">Cats</TabsTrigger>*/}
			{/*		<TabsTrigger value="dogs" className="w-1/2 text-[15px] data-[state=active]:border data-[state=active]:border-brown-80 transition-colors">Dogs</TabsTrigger>*/}
			{/*	</TabsList>*/}
			{/*	*/}
			{/*	<TabsContent value="cats">*/}
			{/*		<CardWrapper array={catCare}/>*/}
			{/*	</TabsContent>*/}
			{/*	*/}
			{/*	<TabsContent value="dogs">*/}
			{/*		<CardWrapper array={dogCare}/>*/}
			{/*	</TabsContent>*/}
			{/*</Tabs>*/}
			
			{/*<p className="italic px-2 text-justify">*/}
			{/*	<b>Final Note: {' '}</b>*/}
			{/*	Loving care, regular attention, and understanding their needs will help your pets thrive.*/}
			{/*	Remember, every pet is unique and may have individual preferences or requirements.*/}
			{/*</p>*/}
		</div>
	);
}

function CardWrapper({ array }: {
	array: { title: string, content: string }[]
}) {
	return (
		<div className="grid gap-y-1.5">
			{array.map((section, index) => (
				<Card key={index} className="border border-brown-80">
					<CardHeader>
						<CardTitle className="tracking-widest">{section.title}</CardTitle>
					</CardHeader>
					<CardContent className="text-justify">
						<p>{section.content}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}