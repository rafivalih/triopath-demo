'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';

export function ConditionalFooter() {
	const pathname = usePathname();

	// Hide only the Footer when on the builder page
	if (pathname?.startsWith('/resume/builder')) {
		return null;
	}

	return <Footer />;
}
