// 'use client';

// import { useState } from 'react';
// import { Download, Search, Star } from 'lucide-react';
// import { SectionHeading } from '@/components/shared/SectionHeading';
// import { Reveal } from '@/components/shared/Reveal';
// import { Icon } from '@/components/shared/Icon';
// import { studyMaterials } from '@/constants/studyMaterials';

// export default function StudyMaterialsPage() {
//   const [query, setQuery] = useState('');
//   const [activeCategory, setActiveCategory] = useState('All');

//   const categories = ['All', ...Array.from(new Set(studyMaterials.map((m) => m.category)))];
//   const filtered = studyMaterials.filter((m) => {
//     const matchesQuery = m.title.toLowerCase().includes(query.toLowerCase()) || m.description.toLowerCase().includes(query.toLowerCase()) || m.category.toLowerCase().includes(query.toLowerCase());
//     const matchesCategory = activeCategory === 'All' || m.category === activeCategory;
//     return matchesQuery && matchesCategory;
//   });

//   return (
//     <div className="pt-[84px]">
//       <section className="premium-page-hero relative overflow-hidden py-14 sm:py-20">
//         <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
//         <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
//           <Reveal>
//             <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Study Materials Store</p>
//             <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Best notes for every course.</h1>
//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Comprehensive, well-structured study materials to help you prepare for exams, interviews, and certifications.</p>
//           </Reveal>
//         </div>
//       </section>

//       <section className="section-tight bg-white">
//         <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
//             <div className="lg:sticky lg:top-28 lg:self-start">
//               <div className="rounded-2xl border border-border bg-[#f8fafc] p-5">
//                 <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 focus-within:border-accent">
//                   <Search className="h-4 w-4 text-muted-foreground" />
//                   <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search notes..." aria-label="Search study materials" className="w-full bg-transparent text-sm focus:outline-none" />
//                 </div>
//                 <div className="mt-5">
//                   <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Categories</p>
//                   <div className="flex flex-wrap gap-2">
//                     {categories.map((cat) => (
//                       <button key={cat} type="button" onClick={() => setActiveCategory(cat)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-muted-foreground hover:bg-secondary'}`}>
//                         {cat}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <p className="mb-4 text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? 'result' : 'results'} found</p>
//               {filtered.length === 0 ? (
//                 <div className="rounded-2xl border border-border bg-[#f8fafc] p-12 text-center">
//                   <p className="text-base text-muted-foreground">No study materials found. Try a different search.</p>
//                 </div>
//               ) : (
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   {filtered.map((material) => (
//                     <Reveal key={material.id}>
//                       <div className="group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-premium">
//                         <div className="flex items-start justify-between">
//                           <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
//                             <Icon name={material.icon} className="h-5 w-5" />
//                           </div>
//                           <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
//                             <Star className="h-3.5 w-3.5 fill-amber-400" /> {material.rating}
//                           </span>
//                         </div>
//                         <span className="mt-4 inline-block rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">{material.category}</span>
//                         <h3 className="mt-3 font-bold text-primary">{material.title}</h3>
//                         <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{material.description}</p>
//                         <div className="mt-4 flex items-center justify-between">
//                           <span className="text-xs text-muted-foreground">{material.pages} pages</span>
//                           <button type="button" className=" inline-flex items-center rounded-lg bg-primary px-3.5 py-3 text-xs font-semibold text-white transition-colors hover:bg-primary/90 hover:bg-[#5368df]/90 hover:text-">
//                             <span className="slide-hover-label inline-flex items-center gap-1.5"><Download className="h-3.5 w-3.5" /> Download</span>
//                           </button>
//                         </div>
//                       </div>
//                     </Reveal>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { Download, Search, Star } from 'lucide-react';
// import { SectionHeading } from '@/components/shared/SectionHeading';
// import { Reveal } from '@/components/shared/Reveal';
// import { Icon } from '@/components/shared/Icon';
// import { BorderTrail } from "@/components/core/border-trail";
// import { studyMaterials } from '@/constants/studyMaterials';

// export default function StudyMaterialsPage() {
//   const [query, setQuery] = useState('');
//   const [activeCategory, setActiveCategory] = useState('All');

//   const categories = ['All', ...Array.from(new Set(studyMaterials.map((m) => m.category)))];
//   const filtered = studyMaterials.filter((m) => {
//     const matchesQuery =
//       m.title.toLowerCase().includes(query.toLowerCase()) ||
//       m.description.toLowerCase().includes(query.toLowerCase()) ||
//       m.category.toLowerCase().includes(query.toLowerCase());
//     const matchesCategory = activeCategory === 'All' || m.category === activeCategory;
//     return matchesQuery && matchesCategory;
//   });

//   return (
//     <div className="pt-[84px]">
//       <section className="studymaterial relative overflow-hidden py-14 sm:py-20">
//         <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
//         <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
//           <Reveal>
//             <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
//               Study Materials Store
//             </p>
//             <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
//               Best notes for every course.
//             </h1>
//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
//               Comprehensive, well-structured study materials to help you prepare for exams,
//               interviews, and certifications.
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       <section className="section-tight bg-white">
//         <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
//             {/* Sidebar Filter */}
//             <div className="lg:sticky lg:top-28 lg:self-start">
//               <div className="rounded-2xl border border-border bg-[#f8fafc] p-5">
//                 <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 focus-within:border-accent">
//                   <Search className="h-4 w-4 text-muted-foreground" />
//                   <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Search notes..."
//                     aria-label="Search study materials"
//                     className="w-full bg-transparent text-sm focus:outline-none"
//                   />
//                 </div>
//                 <div className="mt-5">
//                   <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
//                     Categories
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {categories.map((cat) => (
//                       <button
//                         key={cat}
//                         type="button"
//                         onClick={() => setActiveCategory(cat)}
//                         className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
//                           activeCategory === cat
//                             ? 'bg-primary text-white'
//                             : 'bg-white text-muted-foreground hover:bg-secondary'
//                         }`}
//                       >
//                         {cat}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Study Cards Grid */}
//             <div>
//               <p className="mb-4 text-sm text-muted-foreground">
//                 {filtered.length} {filtered.length === 1 ? 'result' : 'results'} found
//               </p>
//               {filtered.length === 0 ? (
//                 <div className="rounded-2xl border border-border bg-[#f8fafc] p-12 text-center">
//                   <p className="text-base text-muted-foreground">
//                     No study materials found. Try a different search.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   {filtered.map((material, index) => (
//                     <Reveal key={material.id}>
//                       <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-premium">
//                         {/* BorderTrail applied to the first 10 cards */}
//                         {index < 10 && (
//                           <BorderTrail
//                             className="bg-gradient-to-l from-blue-400 via-blue-500 to-transparent blur-[1px]"
//                             size={70}
//                             transition={{
//                               repeat: Infinity,
//                               repeatType: 'loop',
//                               duration: 3,
//                               ease: 'linear',
//                             }}
//                             style={{
//                               offsetPath: 'rect(0% 100% 100% 0% round 16px)',
//                             }}
//                           />
//                         )}

//                         <div>
//                           <div className="flex items-start justify-between">
//                             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
//                               <Icon name={material.icon} className="h-5 w-5" />
//                             </div>
//                             <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
//                               <Star className="h-3.5 w-3.5 fill-amber-400" /> {material.rating}
//                             </span>
//                           </div>
//                           <span className="mt-4 inline-block rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
//                             {material.category}
//                           </span>
//                           <h3 className="mt-3 font-bold text-primary">{material.title}</h3>
//                           <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                             {material.description}
//                           </p>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between pt-2">
//                           <span className="text-xs text-muted-foreground">
//                             {material.pages} pages
//                           </span>
//                           <button
//                             type="button"
//                             className="inline-flex items-center rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary/90"
//                           >
//                             <span className="inline-flex items-center gap-1.5">
//                               <Download className="h-3.5 w-3.5" /> Download
//                             </span>
//                           </button>
//                         </div>
//                       </div>
//                     </Reveal>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';

import { Download, Search, Star } from 'lucide-react';
import { useState } from 'react';
import { BorderTrail } from '@/components/core/border-trail';
import { Icon } from '@/components/shared/Icon';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { studyMaterials } from '@/constants/studyMaterials';

export default function StudyMaterialsPage() {
	const [query, setQuery] = useState('');
	const [activeCategory, setActiveCategory] = useState('All');

	const categories = ['All', ...Array.from(new Set(studyMaterials.map((m) => m.category)))];
	const filtered = studyMaterials.filter((m) => {
		const matchesQuery =
			m.title.toLowerCase().includes(query.toLowerCase()) ||
			m.description.toLowerCase().includes(query.toLowerCase()) ||
			m.category.toLowerCase().includes(query.toLowerCase());
		const matchesCategory = activeCategory === 'All' || m.category === activeCategory;
		return matchesQuery && matchesCategory;
	});

	return (
		<div className="pt-[84px]">
			<section className="studymaterial relative overflow-hidden py-14 sm:py-20">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<Reveal>
						<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent mt-10">
							Study Materials Store
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
							Best notes for every course.
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							Comprehensive, well-structured study materials to help you prepare for exams,
							interviews, and certifications.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="section-tight bg-white">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-[300px_1fr]">
						{/* Sidebar Filter */}
						<div className="lg:sticky lg:top-28 lg:self-start">
							<div className="rounded-2xl border border-border bg-[#f8fafc] p-5">
								<div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 focus-within:border-accent">
									<Search className="h-4 w-4 text-muted-foreground" />
									<input
										type="text"
										value={query}
										onChange={(e) => setQuery(e.target.value)}
										placeholder="Search notes..."
										aria-label="Search study materials"
										className="w-full bg-transparent text-sm focus:outline-none"
									/>
								</div>
								<div className="mt-5">
									<p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
										Categories
									</p>
									<div className="flex flex-wrap gap-2">
										{categories.map((cat) => (
											<button
												key={cat}
												type="button"
												onClick={() => setActiveCategory(cat)}
												className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
													activeCategory === cat
														? 'bg-primary text-white'
														: 'bg-white text-muted-foreground hover:bg-secondary'
												}`}
											>
												{cat}
											</button>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Study Cards Grid */}
						<div>
							<p className="mb-4 text-sm text-muted-foreground">
								{filtered.length} {filtered.length === 1 ? 'result' : 'results'} found
							</p>
							{filtered.length === 0 ? (
								<div className="rounded-2xl border border-border bg-[#f8fafc] p-12 text-center">
									<p className="text-base text-muted-foreground">
										No study materials found. Try a different search.
									</p>
								</div>
							) : (
								<div className="grid gap-5 sm:grid-cols-2">
									{filtered.map((material, index) => (
										<Reveal key={material.id}>
											<div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-premium">
												{/* BorderTrail applied to first 10 cards */}
												{index < 10 && (
													// <BorderTrail
													// 	className="bg-gradient-to-l from-blue-400 via-blue-500 to-transparent blur-[1px]"
													// 	size={70}
													// 	transition={{
													// 		repeat: Infinity,
													// 		repeatType: "loop",
													// 		duration: 3,
													// 		ease: "linear",
													// 	}}
													// 	style={{
													// 		offsetPath: "rect(0% 100% 100% 0% round 16px)",
													// 	}}
													// />
													<BorderTrail
														className="bg-gradient-to-l from-blue-400 via-blue-500 to-transparent blur-[1px]"
														size={70}
														transition={{
															repeat: Infinity,
															repeatType: 'loop',
															duration: 3,
															ease: 'linear',
														}}
														style={{
															offsetPath: 'rect(0% 100% 100% 0% round 16px)',
														}}
													/>
												)}

												<div>
													<div className="flex items-start justify-between">
														<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
															<Icon name={material.icon} className="h-5 w-5" />
														</div>
														<span className="flex items-center gap-1 text-xs font-medium text-amber-500">
															<Star className="h-3.5 w-3.5 fill-amber-400" /> {material.rating}
														</span>
													</div>
													<span className="mt-4 inline-block rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
														{material.category}
													</span>
													<h3 className="mt-3 font-bold text-primary">{material.title}</h3>
													<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
														{material.description}
													</p>
												</div>

												{/* Footer: Pages & Rates (Discount + Original) & Download Action */}
												<div className="mt-4 flex items-center justify-between pt-2">
													{/* Pages + Price Section */}
													<div className="flex items-center gap-3">
														<span className="text-xs text-muted-foreground">
															{material.pages} pages
														</span>
														<span className="h-3 w-px bg-border" />

														<div className="flex items-baseline gap-1.5">
															{/* Active Price (Free or Numeric) */}
															<span className="text-sm font-bold capitalize text-emerald-400">
																{typeof material.price === 'number'
																	? `$${material.price.toFixed(2)}`
																	: material.price}
															</span>

															{/* Strikethrough Original Price */}
															{material.originalPrice && (
																<span className="text-xs text-slate-400 line-through">
																	${material.originalPrice.toFixed(2)}
																</span>
															)}
														</div>
													</div>

													{/* Download Button */}
													<button
														type="button"
														className="inline-flex items-center rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary/90"
													>
														<span className="inline-flex items-center gap-1.5">
															<Download className="h-3.5 w-3.5" /> Download
														</span>
													</button>
												</div>
											</div>
										</Reveal>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
