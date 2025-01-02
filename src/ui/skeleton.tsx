import Button from '@/ui/button';

const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-brown-80/5 before:to-transparent isolate overflow-hidden shadow-xl shadow-brown-80/15 before:border-t before:border-brown-80/30';

function PetCardMobileSkeleton({ isAdopting }: {
	isAdopting?: boolean
}) {
	return (
		<div className={`${shimmer} relative rounded-lg flex flex-col bg-dough/50`}>
			<div className="h-[220px] rounded-t-md bg-brown-80/5"/>
			<div className="p-2 my-1.5 space-y-2">
				<div className="h-2 w-2/5 rounded-md bg-brown-80/20"/>
				<div className="h-2 w-4/5 rounded-md bg-brown-80/30"/>
				<div className="h-2 w-3/5 rounded-md bg-brown-80/30"/>
				<div className="mt-2 flex flex-col items-center space-y-1">
					<div className="h-2 w-1/5 rounded-md bg-brown-80/40"/>
					<div className="h-6 w-full rounded-md bg-brown-80/30"/>
				</div>
			</div>
			{isAdopting && <AdoptButtonSkeleton/>}
		</div>
	);
}

function PetCardDesktopSkeleton({ isAdopting }: {
	isAdopting?: boolean
}) {
	return (
		<div className={`${shimmer} relative rounded-md flex gap-x-4 bg-dough/50`}>
			<div className="size-[190px] rounded-tl-md rounded-bl-md bg-brown-80/5"/>
			<div className="py-2 mr-4 my-auto w-[65%] space-y-2">
				<div className="h-2 w-1/5 rounded-md bg-brown-80/20"/>
				<div className="h-2 w-3/5 rounded-md bg-brown-80/30"/>
				<div className="h-2 w-2/5 rounded-md bg-brown-80/30"/>
				<div className="h-2 w-4/5 rounded-md bg-brown-80/30"/>
				<div className="h-8 w-full rounded-md bg-brown-80/20"/>
			</div>
			{isAdopting && <AdoptButtonSkeleton/>}
		</div>
	);
}

export default function PetCardsSkeleton({ isAdopting }: {
	isAdopting?: boolean
}) {
	return (
		<div className="!mt-6 !mb-28 space-y-6 md:space-y-12">
			{/* default format */}
			<div className="block card:hidden">
				<div className="grid sm:grid-cols-2 gap-5 mx-auto max-w-[300px] sm:max-w-[620px]">
					<PetCardMobileSkeleton isAdopting={isAdopting}/>
					<PetCardMobileSkeleton isAdopting={isAdopting}/>
					<PetCardMobileSkeleton isAdopting={isAdopting}/>
					<PetCardMobileSkeleton isAdopting={isAdopting}/>
					<PetCardMobileSkeleton isAdopting={isAdopting}/>
				</div>
			</div>
			
			{/* medium format */}
			<div className="hidden card:block">
				<div className="grid grid-cols-1 toGrid:grid-cols-2 gap-3 mx-auto max-w-[717px] toGrid:max-w-[1450px]">
					<PetCardDesktopSkeleton isAdopting={isAdopting}/>
					<PetCardDesktopSkeleton isAdopting={isAdopting}/>
					<PetCardDesktopSkeleton isAdopting={isAdopting}/>
					<PetCardDesktopSkeleton isAdopting={isAdopting}/>
					<PetCardDesktopSkeleton isAdopting={isAdopting}/>
				</div>
			</div>
		</div>
	);
}

function AdoptButtonSkeleton() {
	return (
		<Button intent="skeleton"
		        className="absolute top-1 right-1"
		>
			<div className="block w-5 card:hidden"/>
			<div className="hidden card:block card:w-12"/>
		</Button>
	);
}