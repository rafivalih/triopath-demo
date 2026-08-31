// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { RESUME_TEMPLATES } from "@/constants/resumeTemplates";
// import { useResume } from "@/context/ResumeContext";
// import { ResumeTemplateCard } from "@/components/resume/ResumeTemplateCard";
// import { Sparkles, Layers, ShieldCheck, Check } from "lucide-react";

// const CATEGORIES = [
// 	"All",
// 	"Modern",
// 	"ATS",
// 	"Executive",
// 	"Minimalist",
// 	"Creative",
// ] as const;

// export default function TemplatesPage() {
// 	const router = useRouter();
// 	const { activeTemplate, setActiveTemplate } = useResume();
// 	const [selectedCategory, setSelectedCategory] = useState<string>("All");

// 	const filteredTemplates =
// 		selectedCategory === "All"
// 			? RESUME_TEMPLATES
// 			: RESUME_TEMPLATES.filter((tpl) => tpl.category === selectedCategory);

// 	const handleSelectTemplate = (templateId: string) => {
// 		setActiveTemplate(templateId);
// 		router.push("/resume/builder");
// 	};

// 	return (
// 		<div className="min-h-screen bg-slate-50/50 pb-20 pt-28">
// 			{/* Header Section */}
// 			<section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
// 				<div className="relative mx-auto max-w-4xl text-center">
// 					<div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-blue-50/60 px-3.5 py-1 text-xs font-semibold text-blue-600">
// 						<Sparkles className="h-3.5 w-3.5 text-blue-500" />
// 						10+ Professional & ATS-Ready Designs
// 					</div>

// 					<h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
// 						Choose Your Resume Template
// 					</h1>
// 					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
// 						Select a tailored layout approved by hiring managers and optimized
// 						for applicant tracking systems (ATS). You can switch designs inside
// 						the editor at any time.
// 					</p>

// 					{/* Value Badges */}
// 					<div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-600">
// 						<span className="flex items-center gap-1.5">
// 							<Check className="h-4 w-4 text-emerald-600" /> Free PDF Export
// 						</span>
// 						<span className="flex items-center gap-1.5">
// 							<ShieldCheck className="h-4 w-4 text-emerald-600" /> 100% ATS
// 							Compliant
// 						</span>
// 						<span className="flex items-center gap-1.5">
// 							<Layers className="h-4 w-4 text-emerald-600" /> Real-time Live
// 							Preview
// 						</span>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Category Filter Tabs */}
// 			<div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
// 				<div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
// 					{CATEGORIES.map((cat) => (
// 						<button
// 							key={cat}
// 							type="button"
// 							onClick={() => setSelectedCategory(cat)}
// 							className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
// 								selectedCategory === cat
// 									? "bg-slate-900 text-white shadow-sm"
// 									: "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
// 							}`}
// 						>
// 							{cat}
// 						</button>
// 					))}
// 				</div>

// 				{/* Template Grid */}
// 				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// 					{filteredTemplates.map((template) => (
// 						<ResumeTemplateCard
// 							key={template.id}
// 							template={template}
// 							isSelected={activeTemplate === template.id}
// 							onSelect={handleSelectTemplate}
// 						/>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { RESUME_TEMPLATES, ResumeTemplateOption } from "@/constants/resumeTemplates";
// import { useResume } from "@/context/ResumeContext";
// import { ResumeTemplateCard } from "@/components/resume/ResumeTemplateCard";
// import { Sparkles, Layers, ShieldCheck, Check } from "lucide-react";

// const CATEGORIES = [
//   "All",
//   "Modern",
//   "ATS",
//   "Executive",
//   "Minimalist",
//   "Creative",
// ] as const;

// type CategoryType = (typeof CATEGORIES)[number];

// export default function TemplatesPage() {
//   const router = useRouter();
//   const { activeTemplate, setActiveTemplate } = useResume();
//   const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

//   const filteredTemplates =
//     selectedCategory === "All"
//       ? RESUME_TEMPLATES
//       : RESUME_TEMPLATES.filter((tpl: ResumeTemplateOption) => {
//           return tpl.category?.toLowerCase() === selectedCategory.toLowerCase();
//         });

//   const handleSelectTemplate = (templateId: string) => {
//     setActiveTemplate(templateId);
//     router.push("/resume/builder");
//   };

//   return (
//     <div className="min-h-screen bg-slate-50/50 pb-20 pt-28">
//       {/* Header Section */}
//       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
//         <div className="relative mx-auto max-w-4xl text-center">
//           <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-blue-50/60 px-3.5 py-1 text-xs font-semibold text-blue-600">
//             <Sparkles className="h-3.5 w-3.5 text-blue-500" />
//             10+ Professional & ATS-Ready Designs
//           </div>

//           <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//             Choose Your Resume Template
//           </h1>
//           <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
//             Select a tailored layout approved by hiring managers and optimized
//             for applicant tracking systems (ATS). You can switch designs inside
//             the editor at any time.
//           </p>

//           {/* Value Badges */}
//           <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-600">
//             <span className="flex items-center gap-1.5">
//               <Check className="h-4 w-4 text-emerald-600" /> Free PDF Export
//             </span>
//             <span className="flex items-center gap-1.5">
//               <ShieldCheck className="h-4 w-4 text-emerald-600" /> 100% ATS
//               Compliant
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Layers className="h-4 w-4 text-emerald-600" /> Real-time Live
//               Preview
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Category Filter Tabs */}
//       <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
//           {CATEGORIES.map((cat) => (
//             <button
//               key={cat}
//               type="button"
//               onClick={() => setSelectedCategory(cat)}
//               className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
//                 selectedCategory === cat
//                   ? "bg-slate-900 text-white shadow-sm"
//                   : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Template Grid */}
//         <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredTemplates.map((template: ResumeTemplateOption) => (
//             <ResumeTemplateCard
//               key={template.id}
//               template={template}
//               isSelected={activeTemplate === template.id}
//               onSelect={handleSelectTemplate}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { Check, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ResumeTemplateCard } from '@/components/resume/ResumeTemplateCard';
import { RESUME_TEMPLATES } from '@/constants/resumeTemplates';
import { useResume } from '@/context/ResumeContext';
import type { ResumeTemplateMeta } from '@/types/resume';

const CATEGORIES = ['All', 'Modern', 'ATS', 'Executive', 'Minimalist', 'Creative'] as const;

type CategoryType = (typeof CATEGORIES)[number];

export default function TemplatesPage() {
	const router = useRouter();
	const { activeTemplate, setActiveTemplate } = useResume();
	const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

	const filteredTemplates =
		selectedCategory === 'All'
			? RESUME_TEMPLATES
			: RESUME_TEMPLATES.filter((tpl: ResumeTemplateMeta) => {
					return tpl.category?.toLowerCase() === selectedCategory.toLowerCase();
				});

	const handleSelectTemplate = (templateId: string) => {
		setActiveTemplate(templateId);
		router.push('/resume/builder');
	};

	return (
		<div className="min-h-screen bg-slate-50/50 pb-20 pt-28">
			{/* Header Section */}
			<section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
				<div className="relative mx-auto max-w-4xl text-center">
					<div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-blue-50/60 px-3.5 py-1 text-xs font-semibold text-blue-600">
						<Sparkles className="h-3.5 w-3.5 text-blue-500" />
						15+ Professional & ATS-Ready Designs
					</div>

					<h1 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl lg:text-5xl">
						Choose Your Resume Template
					</h1>
					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
						Select a tailored layout approved by hiring managers and optimized for applicant
						tracking systems (ATS). You can switch designs inside the editor at any time.
					</p>

					{/* Value Badges */}
					<div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-600">
						<span className="flex items-center gap-1.5">
							<Check className="h-4 w-4 text-emerald-600" /> Free PDF Export
						</span>
						<span className="flex items-center gap-1.5">
							<ShieldCheck className="h-4 w-4 text-emerald-600" /> 100% ATS Compliant
						</span>
						<span className="flex items-center gap-1.5">
							<Layers className="h-4 w-4 text-emerald-600" /> Real-time Live Preview
						</span>
					</div>
				</div>
			</section>

			{/* Category Filter Tabs */}
			<div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
					{CATEGORIES.map((cat) => (
						<button
							key={cat}
							type="button"
							onClick={() => setSelectedCategory(cat)}
							className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
								selectedCategory === cat
									? 'bg-slate-900 text-white shadow-sm'
									: 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Template Grid */}
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{filteredTemplates.map((template: ResumeTemplateMeta) => (
						<ResumeTemplateCard
							key={template.id}
							template={template}
							isSelected={activeTemplate === template.id}
							onSelect={handleSelectTemplate}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
