'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export const useNavigationParams = () => {
	const { replace } = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	
	return { replace, pathname, searchParams };
};