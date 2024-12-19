import { Poppins, Nunito, Merriweather } from 'next/font/google';

export const poppins = Poppins({
	weight: '400',
	subsets: ['latin']
});

export const nunito = Nunito({
	weight: '400',
	subsets: ['latin']
});

export const merriWeather = Merriweather({
	weight: '400',
	style: ['italic'],
  subsets: ['latin']
});