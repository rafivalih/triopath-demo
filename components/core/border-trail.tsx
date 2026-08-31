'use client';

import { motion, type Transition } from 'framer-motion';
import type React from 'react';
import { cn } from '@/lib/utils';

export type BorderTrailProps = {
	className?: string;
	size?: number;
	transition?: Transition;
	delay?: number;
	onAnimationComplete?: () => void;
	style?: React.CSSProperties;
};

export function BorderTrail({
	className,
	size = 60,
	transition,
	delay,
	onAnimationComplete,
	style,
}: BorderTrailProps) {
	const BASE_TRANSITION: Transition = {
		repeat: Infinity,
		repeatType: 'loop',
		duration: 5,
		ease: 'linear',
		delay: delay,
	};

	return (
		<div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
			<motion.div
				className={cn('absolute aspect-square bg-zinc-500', className)}
				style={{
					width: size,
					offsetPath: 'rect(0% 100% 100% 0% round 16px)',
					...style,
				}}
				animate={{
					offsetDistance: ['0%', '100%'],
				}}
				transition={transition ?? BASE_TRANSITION}
				onAnimationComplete={onAnimationComplete}
			/>
		</div>
	);
}
