'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function StatCounter({ value, duration = 0.8 }: { value: string; duration?: number }) {
	const ref = useRef<HTMLSpanElement>(null);

	// useInView triggers ONLY when user scrolls down to this bottom section
	const isInView = useInView(ref, { once: true, margin: '-50px' });

	const numericMatch = value.match(/[\d.]+/);
	const numericValue = numericMatch ? parseFloat(numericMatch[0]) : null;
	const prefix = value.split(/[\d.]+/)[0] || '';
	const suffix = value.split(/[\d.]+/)[1] || '';

	const [displayValue, setDisplayValue] = useState<string>(numericValue !== null ? '0' : value);

	useEffect(() => {
		if (numericValue === null || !isInView) return;

		const controls = animate(0, numericValue, {
			duration: duration,
			ease: 'easeOut',
			onUpdate(latest) {
				if (Number.isInteger(numericValue)) {
					setDisplayValue(Math.floor(latest).toLocaleString());
				} else {
					setDisplayValue(latest.toFixed(1));
				}
			},
		});

		return () => controls.stop();
	}, [isInView, numericValue, duration]);

	return (
		<span ref={ref}>{numericValue !== null ? `${prefix}${displayValue}${suffix}` : value}</span>
	);
}
