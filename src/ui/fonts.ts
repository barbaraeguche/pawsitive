import { Lora, Newsreader, Croissant_One } from 'next/font/google';

export const croissantOne = Croissant_One({
	weight: '400',
	subsets: ['latin']
});

export const lora = Lora({
	weight: '400',
	subsets: ['latin']
});

export const newsreader = Newsreader({
	weight: '400',
	style: ['normal', 'italic'],
	subsets: ['latin']
});