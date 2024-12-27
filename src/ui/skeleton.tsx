import Button from '@/ui/button';

const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

function PetCardMobileSkeleton({ isAdopting }: {
	isAdopting?: boolean
}) {
	return (
		<div className={`${shimmer} relative border border-brown-80 rounded-lg flex flex-col shadow-xl shadow-brown-80/30 `}>
			<div className="bg-red-200 relative h-[220px] rounded-t-md"/>
			<div className="p-2 my-1.5 text-center break-words">
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-4"/>
				<p className="mt-2 flex flex-col">
					<span className="bg-gray-200 w-4"/>
					<span className="bg-gray-200 w-6"/>
				</p>
			</div>
			{isAdopting && <AdoptButtonSkeleton/>}
		</div>
	);
}

function PetCardDesktopSkeleton({ isAdopting }: {
	isAdopting?: boolean
}) {
	return (
		<div className={`${shimmer} relative border border-brown-80 rounded-md flex gap-x-4 shadow-xl shadow-brown-80/30 bg-gray-100`}>
			<div className="relative size-[190px] rounded-tl-md rounded-bl-md" />
			<div className="py-2 mr-4 my-auto text-justify break-words">
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-4"/>
				<div className="bg-gray-200 w-6"/>
			</div>
			{isAdopting && <AdoptButtonSkeleton/>}
		</div>
	);
}

export default function PetCardsSkeleton({isAdopting}: {
	isAdopting?: boolean
}) {
	return (
		<div className="!mt-6 !mb-28 space-y-6 md:space-y-12">
			{/* default format */}
			<div className="block card:hidden">
				<div className="grid sm:grid-cols-2 gap-5 mx-auto max-w-[300px] sm:max-w-[620px]">
					<PetCardMobileSkeleton isAdopting={isAdopting} />
					<PetCardMobileSkeleton isAdopting={isAdopting} />
					<PetCardMobileSkeleton isAdopting={isAdopting} />
					<PetCardMobileSkeleton isAdopting={isAdopting} />
					<PetCardMobileSkeleton isAdopting={isAdopting} />
				</div>
			</div>
			
			{/* medium format */}
			<div className="hidden card:block">
				<div className="grid grid-cols-1 toGrid:grid-cols-2 gap-3 mx-auto max-w-[717px] toGrid:max-w-[1450px]">
					<PetCardDesktopSkeleton isAdopting={isAdopting} />
					<PetCardDesktopSkeleton isAdopting={isAdopting} />
					<PetCardDesktopSkeleton isAdopting={isAdopting} />
					<PetCardDesktopSkeleton isAdopting={isAdopting} />
					<PetCardDesktopSkeleton isAdopting={isAdopting} />
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
		</Button>
	);
}