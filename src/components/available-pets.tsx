'use client';
import { Fragment, useState, useEffect, useMemo } from 'react';
import { useAdoptStore } from '@/store/adoptStore';
import { base64ToImage } from '@/lib/utils';
import { prismaGetAvailablePets } from '@/lib/data';
import { Pet } from '@/lib/definitions';
import PetCard from '@/ui/pet-card';
import PetCardsSkeleton from '@/ui/skeleton';
import Headings from '@/components/headings';

export default function AvailablePets({ userId, type, breed, gender, age, compatibility }: {
	userId: string,
	type: string,
	breed: string,
	gender: string,
	age: string,
	compatibility: Pet['compatibility']
}) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [allPets, setAllPets] = useState<Pet[]>([]);
	const filterTrigger = useAdoptStore((state) => state.filterTrigger);
	
	// rather than ping the db on every update, fetch once and filter
	useEffect(() => {
		const loadAvailablePets = async () => {
			setIsLoading(true); // start loading
			
			try {
				const pets = await prismaGetAvailablePets(userId);
				// process all images at once and update the state with processed pets
				const processImage = await Promise.all(
					pets.map(async (pet) => ({
						...pet,
						image: await base64ToImage(pet.image)
					}))
				);
				setAllPets(processImage);
			} catch (err) {
				console.error(`Failed to process image for pet`, err);
			} finally {
				setIsLoading(false); // stop loading once fetched
			}
		};
		
		loadAvailablePets();
	}, [userId, filterTrigger]);
	
	const filteredPets = useMemo(() => {
		if (!allPets.length) return [];
		// return filtered pets based on the form input
		return allPets.filter((pet) => {
			return (
				(!type || pet.type === type) &&
				(!breed || pet.breed.includes(breed)) &&
				(!gender || pet.gender === gender) &&
				(!age || pet.age.includes(age)) &&
				(!compatibility || compatibility.every((comp) => pet.compatibility.includes(comp)))
			);
		});
	}, [allPets, type, breed, gender, age, compatibility]);
	
	return (
		<Fragment>
			<Headings title={'Our Available Pets'}/>
			{isLoading ? (
				<PetCardsSkeleton isAdopting={true}/>
			) : (
				filteredPets.length === 0 ? (
					<div className={'flex justify-center'}>
						<span className={'!mt-16 toGrid:!mt-36'}>No available matching pets.</span>
					</div>
				) : (
					<PetCard pets={filteredPets} isAdopting={true}/>
				)
			)}
		</Fragment>
	);
}