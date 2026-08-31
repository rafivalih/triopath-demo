'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';
import { createPortal } from 'react-dom';

type ProofModalProps = {
	proof: string | StaticImageData;
	children: React.ReactNode;
};

export default function ProofModal({
	proof,
	children,
}: ProofModalProps) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return;

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setOpen(false);
			}
		};

		document.addEventListener('keydown', handleEscape);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = '';
		};
	}, [open]);

	const modal = open ? (
		<div
			className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4"
			onClick={() => setOpen(false)}
		>
			<div
				className="relative max-h-[90vh] max-w-[90vw]"
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type="button"
					onClick={() => setOpen(false)}
					aria-label="Close proof"
					className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
				>
					<X className="h-5 w-5" />
				</button>

				<Image
					src={proof}
					alt="Review proof"
					width={1200}
					height={1200}
					className="block max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
					priority
				/>
			</div>
		</div>
	) : null;

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="border-0 bg-transparent p-0"
			>
				{children}
			</button>

			{typeof document !== 'undefined' &&
				createPortal(modal, document.body)}
		</>
	);
}