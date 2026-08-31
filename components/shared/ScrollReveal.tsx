// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// interface ScrollRevealProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Tracks scroll progress of this specific container in the viewport
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["0 1", "1.2 1"], // Triggers as the element enters from bottom
//   });

//   // Transform scale (starts slightly smaller and zooms forward)
//   const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);

//   // Transform opacity (fades in as it moves forward)
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

//   // Optional: Add a subtle upward translation
//   const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

//   return (
//     <motion.div
//       ref={containerRef}
//       style={{
//         scale,
//         opacity,
//         y,
//       }}
//       className={`transition-shadow duration-500 ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// }

'use client';

import { motion } from 'framer-motion';

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 35,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{
				once: true,
				amount: 0.15,
			}}
			transition={{
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1],
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
