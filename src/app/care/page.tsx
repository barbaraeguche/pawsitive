import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pet Care'
};

export default function Page() {
	return (
		<main className="flex-1 flex flex-col p-2 md:p-8 bg-blue-50 gap-y-8 last-of-type:mb-20">
			<div>
				<h3 className="text-xl font-bold mb-2">A. Care Tips for Cats</h3>
				<ul className="list-decimal ml-10 space-y-4">
					<li>
						Nutrition
						<ul className="list-disc ml-10">
							<li>Balanced Diet: Feed high-quality cat food tailored to the cat’s age (kitten, adult, or senior).</li>
							<li>Hydration: Ensure fresh, clean water is always available.</li>
							<li>Treats: Limit treats to less than 10% of the daily caloric intake.</li>
						</ul>
					</li>
					
					<li>
						Environment
						<ul className="list-disc ml-10">
							<li>Litter Box: Clean daily and place in a quiet, accessible location.</li>
							<li>Scratching Posts: Provide sturdy posts to protect furniture and keep claws healthy.</li>
							<li>Safe Space: Create a cozy area where the cat can relax undisturbed.</li>
						</ul>
					</li>
					
					<li>
						Grooming
						<ul className="list-disc ml-10">
							<li>Brushing: Regularly brush to reduce shedding and prevent matting.</li>
							<li>Nail Clipping: Trim nails as needed, typically every 2-3 weeks.</li>
							<li>Dental Care: Use cat-safe toothpaste and brushes to maintain oral health.</li>
						</ul>
					</li>
					
					<li>
						Health
						<ul className="list-disc ml-10">
							<li>Veterinary Visits: Schedule annual check-ups and keep vaccinations up to date.</li>
							<li>Parasite Prevention: Protect against fleas, ticks, and worms.</li>
							<li>Spaying/Neutering: Consider this to prevent health issues and overpopulation.</li>
						</ul>
					</li>
					
					<li>
						Stimulation
						<ul className="list-disc ml-10">
							<li>Toys: Rotate interactive toys to keep the cat mentally stimulated.</li>
							<li>Exercise: Encourage active play daily to maintain a healthy weight.</li>
							<li>Outdoor Safety: If allowed outside, supervise or use a secure harness and leash.</li>
						</ul>
					</li>
				</ul>
			</div>
			
			<div>
				<h3 className="text-xl font-bold mb-2">B. Care Tips for Dogs</h3>
				<ul className="list-decimal ml-10 space-y-4">
					<li>
						Nutrition
						<ul className="list-disc ml-10">
							<li>Balanced Diet: Choose high-quality dog food appropriate for the dog’s age, size, and breed.</li>
							<li>Hydration: Provide access to fresh water at all times.</li>
							<li>Treats: Offer treats in moderation and ensure they are dog-safe.</li>
						</ul>
					</li>
					
					<li>
						Exercise
						<ul className="list-disc ml-10">
							<li>Daily Walks: Walk at least once or twice daily based on breed and energy level.</li>
							<li>Playtime: Engage in fetch, tug-of-war, or other activities to burn energy.</li>
							<li>Training: Incorporate basic commands during play for mental and physical stimulation.</li>
						</ul>
					</li>
					
					<li>
						Grooming
						<ul className="list-disc ml-10">
							<li>Bathing: Bathe as needed based on breed and lifestyle, using dog-safe shampoo.</li>
							<li>Brushing: Brush regularly to reduce shedding and maintain coat health.</li>
							<li>Nail Care: Trim nails every 4-6 weeks to prevent overgrowth.</li>
						</ul>
					</li>
					
					<li>
						Health
						<ul className="list-disc ml-10">
							<li>Veterinary Visits: Ensure regular check-ups and vaccinations.</li>
							<li>Parasite Prevention: Use veterinarian-recommended flea, tick, and heartworm preventatives.</li>
							<li>Spaying/Neutering: Helps prevent certain diseases and unwanted litters.</li>
						</ul>
					</li>
					
					<li>
						Environment
						<ul className="list-disc ml-10">
							<li>Comfortable Space: Provide a cozy bed and safe area to rest.</li>
							<li>Safety at Home: Remove toxic plants and secure household items that could be chewed.</li>
							<li>Socialization: Introduce to various environments, people, and other animals to build confidence.</li>
						</ul>
					</li>
					
					<li>
						Training and Behavior
						<ul className="list-disc ml-10">
							<li>Positive Reinforcement: Reward good behavior with treats and praise.</li>
							<li>Consistency: Maintain a routine to establish security and trust.</li>
							<li>Crate Training: Use crates for training and as a safe retreat.</li>
						</ul>
					</li>
				</ul>
			</div>
			
			<p className="italic">
				<b>Final Note: {' '}</b>
				Loving care, regular attention, and understanding their needs will help your pets thrive. Remember, every pet is unique and may have individual preferences or requirements.
				</p>
		</main>
	);
}