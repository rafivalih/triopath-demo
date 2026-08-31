
	'use client';

	import { ArrowRight, Check, Sparkles } from 'lucide-react';
	import Image from 'next/image';
	import type React from 'react';
	import type { ResumeTemplateMeta } from '@/types/resume';

	interface ResumeTemplateCardProps {
		template: ResumeTemplateMeta;
		isSelected?: boolean;
		onSelect: (id: string) => void;
	}

	export const ResumeTemplateCard: React.FC<ResumeTemplateCardProps> = ({
		template,
		isSelected = false,
		onSelect,
	}) => {
		return (
			<article
				className={`
			group flex h-full w-full flex-col overflow-hidden
			rounded-2xl border bg-white
			transition-all duration-300 ease-out
			${
						isSelected
							? 'border-blue-500 shadow-[0_0_0_2px_rgba(59,130,246,0.14),0_10px_30px_rgba(15,23,42,0.08)]'
							: 'border-slate-200 shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg'
					}
		`}
			>
				{/* Resume Preview */}
				<div className="relative mx-4 mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
					<div className="relative aspect-[794/1123] w-full overflow-hidden">
						<Image
							src={template.image}
							alt={`${template.name} resume template`}
							fill
							quality={90}
							className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.012] "
							sizes="
				(max-width: 767px) 100vw,	
				(max-width: 1079px) 50vw,
				(max-width: 1399px) 33vw,
				25vw
				"
						/>

						{/* Category */}
						<div className="absolute left-3 top-3 z-10">
							<span className="inline-flex items-center rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide leading-none text-slate-700 shadow-sm backdrop-blur">
								{template.category}
							</span>
						</div>

						{/* Popular */}
						{template.isPopular && !isSelected && (
							<div className="absolute right-3 top-3 z-10">
								<span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/95 px-3 py-1.5 text-[10px] font-semibold leading-none text-blue-600 shadow-sm backdrop-blur">
									<Sparkles className="h-3.5 w-3.5" />
									Popular
								</span>
							</div>
						)}

						{/* Selected */}
						{isSelected && (
							<div className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
								<Check className="h-4 w-4 stroke-[3]" />
							</div>
						)}
					</div>
				</div>

				{/* Details */}
				<div className="flex flex-1 flex-col px-4 pb-4 pt-4">
					<h3 className="text-[18px] font-semibold leading-6 text-slate-950">{template.name}</h3>

					<p className="mt-1.5 min-h-[48px] text-[14px] leading-6 text-slate-500">
						{template.description}
					</p>

					{/* Tags */}
					<div className="mt-3 flex min-h-[25px] flex-wrap gap-1.5">
						<span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
							ATS-Friendly
						</span>

						<span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
							{template.category}
						</span>
					</div>

					{/* Button */}
					<div className="mt-auto pt-4">
						<button
							type="button"
							onClick={() => onSelect(template.id)}
							aria-pressed={isSelected}
							className={`
				flex h-11 w-full items-center justify-center gap-2
				rounded-xl text-[14px] font-semibold
				transition-all duration-200
				${
									isSelected
										? 'bg-blue-500 text-white shadow-sm hover:bg-blue-600'
										: 'border border-slate-200 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
								}
				`}
						>
							{isSelected ? (
								<>
									<Check className="h-4 w-4 stroke-[2.5]" />
									Selected
								</>
							) : (
								<>
									Select Template
									<ArrowRight className="h-4 w-4" />
								</>
							)}
						</button>
					</div>
				</div>
			</article>
		);
	};

	export default ResumeTemplateCard;
