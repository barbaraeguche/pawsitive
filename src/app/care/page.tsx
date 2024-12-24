import { Metadata } from 'next';
import {
	Tabs, TabsList, TabsTrigger, TabsContent
} from "@/ui/shadcn/tabs";
import {
	Card, CardHeader, CardTitle, CardContent
} from "@/ui/shadcn/card";
import { Cat, Dog } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Pet Care'
};

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

export default function CarePage() {
	return (
		<div className="max-w-3xl mx-auto">
			<h3 className="text-2xl text-center mb-6">Pet Care Guide</h3>
			
			<Tabs defaultValue="cats" className="w-full">
				<TabsList className="w-full mb-8">
					<TabsTrigger value="cats" className="w-1/2 flex items-center gap-x-2">
						<Cat className="size-5"/> Cats
					</TabsTrigger>
					<TabsTrigger value="dogs" className="w-1/2 flex items-center gap-x-2">
						<Dog className="size-5"/> Dogs
					</TabsTrigger>
				</TabsList>
				
				<TabsContent value="cats">
					<div className="grid gap-y-2">
						<CardWrapper array={catCare}/>
					</div>
				</TabsContent>
				
				<TabsContent value="dogs">
					<div className="grid gap-y-2">
						<CardWrapper array={dogCare}/>
					</div>
				</TabsContent>
			</Tabs>
			
			<p className="italic mt-56">
				<b>Final Note: {' '}</b>
				Loving care, regular attention, and understanding their needs will help your pets thrive. Remember, every pet is unique and may have individual preferences or requirements.
			</p>
		</div>
	);
}

function CardWrapper({array}: {
	array: { title: string, content: string }[]
}) {
	return (
		array.map((section, index) => (
			<Card key={index}>
				<CardHeader>
					<CardTitle>{section.title}</CardTitle>
				</CardHeader>
				<CardContent className="text-justify">
          <p>{section.content}</p>
        </CardContent>
			</Card>
		))
	);
}