'use client';
import { useDebouncedCallback } from 'use-debounce';
import { useNavigationParams } from '@/hooks/useNavigationParams';

export const useDebounce = () => {
	const { replace, pathname, searchParams } = useNavigationParams();
	
	const handleFilter = useDebouncedCallback((name: string, value: string, type?: string) => {
		const params = new URLSearchParams(searchParams!);
		
		if (type === 'checkbox') {
			if (params.has(name, value)) params.delete(name, value)
			else params.append(name, value);
		} else {
			if (value) params.set(name, value)
			else params.delete(name);
		}
		
		replace(`${pathname}?${params.toString()}`);
	}, 300);
	
	return { handleFilter };
}