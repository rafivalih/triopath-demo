import { cn } from '@/lib/utils';

interface SectionHeadingProps {
	eyebrow?: string;
	title: string;
	description?: string;
	align?: 'left' | 'center';
	className?: string;
	descriptionClassName?: string;
	light?: boolean;
}

export function SectionHeading({
	eyebrow,
	title,
	description,
	align = 'center',
	className,
	descriptionClassName,
	light = false,
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				'max-w-3xl',
				align === 'center' ? 'mx-auto text-center' : 'text-left',
				className,
			)}
		>
			{eyebrow && (
				<p
					className={cn(
						'mb-3 text-sm font-semibold uppercase tracking-wider',
						light ? 'text-accent-foreground/80' : 'text-accent',
					)}
				>
					{eyebrow}
				</p>
			)}

			<h2
				className={cn(
					'text-3xl font-bold tracking-tight sm:text-4xl',
					light ? 'text-white' : 'text-foreground',
				)}
			>
				{title}
			</h2>

			{description && (
				<p
					className={cn(
						'mt-4 text-lg leading-relaxed',
						light ? 'text-white/70' : 'text-muted-foreground',
						descriptionClassName,
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
}
