'use client';
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useAdoptStore } from '@/store/adoptStore';
import { capitalizeFirstLetter } from '@/lib/utils';
import { getAuthUserId, prismaAdoptPet } from '@/lib/data';
import Button from '@/ui/button';
import FormError from '@/ui/form-error';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogTrigger,
	DialogClose
} from '@/ui/shadcn/dialog';

export default function AdoptButton({ petId, petName }: {
	petId: string,
	petName: string
}) {
	const [userId, setUserId] = useState<string>('');
	const [isAdopting, setIsAdopting] = useState<boolean>(false);
	const [error, setError] = useState<string>();
	const triggerAdopt = useAdoptStore((state) => state.triggerAdopt);
	
	useEffect(() => {
		// this prevents the margin and padding from swapping values when the dialog opens.
		document.body.style.cssText = "padding: 0px !important; margin: auto !important;";
		
		const fetchUser = async () => {
			const user = await getAuthUserId();
			setUserId(user);
		};
		fetchUser();
		
		return () => { document.body.style.cssText = ""; } // this restores the page content after the dialog is closed
	}, []);
	
	const handleAdopt = async () => {
		if (!userId) return;
		
		try {
			setIsAdopting(true);
			
			const response = await prismaAdoptPet(petId, userId);
			// if (response) {
			// 	setError(response);
			// 	return;  // don't trigger zustand
			// }
			
			triggerAdopt(); // trigger zustand context update to reflect adoption
		} catch (err) {
			console.error(`Error adopting pet: ${err}`);
		} finally {
			setIsAdopting(false);
		}
	};
	
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="absolute top-1 right-1">
					<Heart className="block w-4"/>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Adopt {capitalizeFirstLetter(petName)}</DialogTitle>
					<DialogDescription>
						This action <span className="text-red-600 underline">cannot</span> be undone. Once you adopt {petName},
						they will be <span className="underline">permanently</span> added to your profile. Click confirm to proceed.
					</DialogDescription>
				</DialogHeader>
				{error && <FormError message={error}/>}
				<DialogFooter>
					<DialogClose asChild>
						<Button intent="primary"
						        onClick={handleAdopt}
						        disabled={isAdopting || !!error}
						>
							Confirm
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}