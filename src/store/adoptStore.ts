import { create } from 'zustand';

interface AdoptState {
	filterTrigger: number;
	triggerAdopt: () => void;
}

export const useAdoptStore = create<AdoptState>((set) => ({
	filterTrigger: 0,
	triggerAdopt: () => set((state) => ({ filterTrigger: state.filterTrigger + 1 }))
}));