'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

type AdoptContextType = {
	filterTrigger: number;
  triggerAdopt: () => void;
};

const AdoptContext = createContext<AdoptContextType | undefined>(undefined);

export function AdoptProvider({ children } : {
	children: ReactNode
}) {
	const [filterTrigger, setFilterTrigger] = useState<number>(0);
	
	const triggerAdopt = () => setFilterTrigger((prev) => prev + 1);
	
	return (
		<AdoptContext.Provider value={{ filterTrigger, triggerAdopt }}>
			{children}
		</AdoptContext.Provider>
	);
}

export const useAdoptContext = () => {
	const context = useContext(AdoptContext);
	if (!context) {
		throw new Error('useAdoptContext must be used within an AdoptProvider');
	}
	return context;
};