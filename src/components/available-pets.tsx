'use client';

import { Fragment, useState, useEffect } from 'react';
import { useAdoptContext } from '@/hooks/adopt-context';

import { AvailablePetsRecord } from '@/lib/definitions';
import PetCard from '@/ui/pet-card';
import Headings from '@/components/headings';

export default function AvailablePets({ type, breed, gender, age, compatibility }: AvailablePetsRecord) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [filteredPets, setFilteredPets] = useState<AvailablePetsRecord[]>([{
		id: '', type: '', breed: '', gender: '', age: '', compatibility: [], image: '/cat.jpg', comments: ''
	}]);
	const { filterTrigger } = useAdoptContext();
	
	useEffect(() => {
		const pets = [
			{
				id: "1",
				type: "dog",
				breed: "Golden Retriever",
				gender: "male",
				age: "2 years",
				compatibility: ["dogs", "cats", "small kids"],
				image: "/dog.jpg",
				comments: "Loves to play fetch and is great with children.",
			},
			{
				id: "2",
				type: "cat",
				breed: "Persian",
				gender: "female",
				age: "3 years",
				compatibility: ["cats", "small kids"],
				image: "/cat.jpg",
				comments: "Very calm and enjoys being groomed regularly.",
			},
			{
				id: "3",
				type: "dog",
				breed: "Bulldog",
				gender: "male",
				age: "4 years",
				compatibility: ["dogs", "small kids"],
				image: "/dog.jpg",
				comments: "Enjoys short walks and lounging indoors.",
			},
			{
				id: "4",
				type: "cat",
				breed: "Siamese",
				gender: "female",
				age: "1 year",
				compatibility: ["cats", "small kids"],
				image: "/cat.jpg",
				comments: "Playful and very curious about her surroundings.",
			},
			{
				id: "5",
				type: "dog",
				breed: "Beagle",
				gender: "male",
				age: "5 years",
				compatibility: ["dogs"],
				image: "/dog.jpg",
				comments: "Energetic and loves outdoor activities.",
			},
			{
				id: "6",
				type: "cat",
				breed: "Persian",
				gender: "female",
				age: "3 years",
				compatibility: ["cats", "small kids"],
				image: "/cat.jpg",
				comments: "Very calm and enjoys being groomed regularly.",
			},
			{
				id: "7",
				type: "dog",
				breed: "Golden Retriever",
				gender: "male",
				age: "2 years",
				compatibility: ["dogs", "cats", "small kids"],
				image: "/dog.jpg",
				comments: "Loves to play fetch and is great with children.",
			},
			{
				id: "8",
				type: "cat",
				breed: "Persian",
				gender: "female",
				age: "3 years",
				compatibility: ["cats", "small kids"],
				image: "/cat.jpg",
				comments: "Very calm and enjoys being groomed regularly.",
			},
			{
				id: "9",
				type: "dog",
				breed: "Bulldog",
				gender: "male",
				age: "4 years",
				compatibility: ["dogs", "small kids"],
				image: "/dog.jpg",
				comments: "Enjoys short walks and lounging indoors.",
			},
			{
				id: "10",
				type: "cat",
				breed: "Siamese",
				gender: "female",
				age: "1 year",
				compatibility: ["cats", "small kids"],
				image: "/cat.jpg",
				comments: "Playful and very curious about her surroundings.",
			},
		];

		setFilteredPets(pets.filter((pet) => {
			return (
				(!type || pet.type === type) &&
				(!breed || pet.breed.includes(breed.toLowerCase())) &&
				(!gender || pet.gender === gender) &&
				(!age || pet.age.includes(age.toLowerCase())) &&
				(!compatibility.length || compatibility.every((compat) => pet.compatibility.includes(compat)))
			);
		}));
	}, [filterTrigger, type, breed, gender, age, compatibility]);
	
	return (
		<Fragment>
			<Headings title="Our Available Pets" />
			{isLoading ? (
				<p className="text-[17px] tracking-[3px] animate-pulse">make here the skeleton...</p>
			) : (
				filteredPets.length === 0 ? (
					<div className="flex justify-center">
						<span className="!mt-16 toRow:!mt-36 text-base">No matching pets available</span>
					</div>
				) : (
					<PetCard pets={filteredPets} isAdopting={true} />
				)
			)}
		</Fragment>
	);
}