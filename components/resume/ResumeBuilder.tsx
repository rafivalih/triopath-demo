// 'use client';

// import React, { useState } from 'react';
// import { useResume } from '@/context/ResumeContext';
// import { ResumeForm } from '@/components/resume/ResumeForm';
// import { ResumeTemplateRenderer } from '@/components/resume/ResumeTemplateRenderer';
// import { Eye, Download, X, ZoomIn, ZoomOut } from 'lucide-react';
// import Link from 'next/link';

// export const ResumeBuilder: React.FC = () => {
//   const { resumeData, activeTemplate, saveCurrentResume } = useResume();
//   const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);
//   const [zoomScale, setZoomScale] = useState<number>(1);

//   const handleDone = () => {
//     saveCurrentResume();
//   };

//   // 100% Vector ATS PDF Print Handler
//   const handleDownload = () => {
//     if (typeof window === 'undefined') return;

//     const originalTitle = document.title;
//     const name = resumeData?.personal?.fullName?.trim() || 'Resume';
//     document.title = `${name} - Resume`;

//     window.print();

//     setTimeout(() => {
//       document.title = originalTitle;
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] px-6 py-12 md:px-12">
//       {/* 1. Header Section */}
//       <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
//             Resume Builder
//           </h1>
//           <p className="mt-1 text-sm text-slate-500">
//             Fill in your details to create your professional resume
//           </p>
//         </div>

//         <div className="flex flex-wrap items-center gap-3">
//           {/* 👁️ VIEW PREVIEW BUTTON */}
//           <button
//             type="button"
//             onClick={() => setIsPreviewModalOpen(true)}
//             className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
//           >
//             <Eye className="h-4 w-4 text-slate-500" />
//             View
//           </button>

//           {/* 📥 DOWNLOAD PDF BUTTON */}
//           <button
//             type="button"
//             onClick={handleDownload}
//             className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
//           >
//             <Download className="h-4 w-4 text-slate-500" />
//             Download PDF
//           </button>

//           {/* DONE / SAVE BUTTON */}
//           <Link
//             href="/resume/my-resume"
//             onClick={handleDone}
//             className="rounded-xl bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
//           >
//             Done
//           </Link>
//         </div>
//       </div>

//       {/* 2. Main Workspace Grid */}
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
//         {/* Left Column: Form */}
//         <div className="lg:col-span-6">
//           <ResumeForm />
//         </div>

//         {/* Right Column: Live Preview Area */}
//         <div className="lg:col-span-6">
//           <div className="sticky top-6 flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
//             <div className="mb-4 flex items-center justify-between">
//               <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
//                 LIVE PREVIEW
//               </span>
//               <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                 A4 FORMAT
//               </span>
//             </div>

//             {/* Scrollable Container */}
//             <div className="h-[calc(100vh-210px)] overflow-y-auto overflow-x-auto rounded-xl border border-slate-200 bg-slate-100/70 p-4 [scrollbar-width:thin]">
//               <div className="mx-auto w-fit">
//                 <div id="resume-print-area" className="w-[210mm] min-h-[297mm] bg-white shadow-md">
//                   <ResumeTemplateRenderer
//                     templateId={activeTemplate}
//                     data={resumeData}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 3. FULL-SCREEN DOCUMENT PREVIEW MODAL */}
//       {isPreviewModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
//           <div className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
//             {/* Modal Topbar */}
//             <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-3.5">
//               <div className="flex items-center gap-3">
//                 <h3 className="text-sm font-bold text-white">Full Resume Document Inspection</h3>
//                 <span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
//                   A4 Page Print Size
//                 </span>
//               </div>

//               {/* Controls */}
//               <div className="flex items-center gap-2">
//                 <div className="flex items-center rounded-lg border border-slate-700 bg-slate-800 p-0.5">
//                   <button
//                     type="button"
//                     onClick={() => setZoomScale((prev) => Math.max(0.6, prev - 0.1))}
//                     className="p-1.5 text-slate-400 hover:text-white"
//                     title="Zoom Out"
//                   >
//                     <ZoomOut className="h-4 w-4" />
//                   </button>
//                   <span className="px-2 text-xs font-mono text-slate-300">
//                     {Math.round(zoomScale * 100)}%
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() => setZoomScale((prev) => Math.min(1.4, prev + 0.1))}
//                     className="p-1.5 text-slate-400 hover:text-white"
//                     title="Zoom In"
//                   >
//                     <ZoomIn className="h-4 w-4" />
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleDownload}
//                   className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition"
//                 >
//                   <Download className="h-3.5 w-3.5" />
//                   Download PDF
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setIsPreviewModalOpen(false)}
//                   className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
//                   title="Close Modal"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Modal Canvas */}
//             <div className="flex-1 overflow-auto bg-slate-900/60 p-6 flex justify-center items-start">
//               <div
//                 style={{
//                   transform: `scale(${zoomScale})`,
//                   transformOrigin: 'top center',
//                   transition: 'transform 0.15s ease-out',
//                 }}
//                 className="shadow-2xl"
//               >
//                 <div className="w-[210mm] min-h-[297mm] bg-white">
//                   <ResumeTemplateRenderer
//                     templateId={activeTemplate}
//                     data={resumeData}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResumeBuilder;

'use client';

import { Download, Eye, X, ZoomIn, ZoomOut } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { ResumeForm } from '@/components/resume/ResumeForm';
import { ResumeTemplateRenderer } from '@/components/resume/ResumeTemplateRenderer';
import { useResume } from '@/context/ResumeContext';

export const ResumeBuilder: React.FC = () => {
	const { resumeData, activeTemplate, saveCurrentResume } = useResume();
	const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);
	const [zoomScale, setZoomScale] = useState<number>(1);
	const [isDone, setIsDone] = useState<boolean>(false);

	const handleDone = () => {
		saveCurrentResume();
		setIsDone(true);
	};

	// Called whenever any input or element inside the form is clicked or focused
	const handleFormInteraction = () => {
		if (isDone) {
			setIsDone(false);
		}
	};

	// 100% Vector ATS PDF Print Handler
	const handleDownload = () => {
		if (typeof window === 'undefined') return;

		const originalTitle = document.title;
		const name = resumeData?.personal?.fullName?.trim() || 'Resume';
		document.title = `${name} - Resume`;

		window.print();

		setTimeout(() => {
			document.title = originalTitle;
		}, 1000);
	};

	return (
		<div className="min-h-screen bg-[#f8fafc] px-6 py-12 md:px-12">
			{/* 1. Header Section */}
			<div className="mx-auto mb-8 flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Resume Builder</h1>
					<p className="mt-1 text-sm text-slate-500">
						Fill in your details to create your professional resume
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-3">
					{/* WHEN IS DONE: Show VIEW and DOWNLOAD PDF buttons */}
					{isDone ? (
						<>
							{/* 👁️ VIEW PREVIEW BUTTON */}
							<button
								type="button"
								onClick={() => setIsPreviewModalOpen(true)}
								className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
							>
								<Eye className="h-4 w-4 text-slate-500" />
								View
							</button>

							{/* 📥 DOWNLOAD PDF BUTTON */}
							<button
								type="button"
								onClick={handleDownload}
								className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
							>
								<Download className="h-4 w-4 text-slate-500" />
								Download PDF
							</button>
						</>
					) : (
						/* WHEN NOT DONE: Show ONLY DONE button */
						<button
							type="button"
							onClick={handleDone}
							className="rounded-xl bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-95"
						>
							Done
						</button>
					)}
				</div>
			</div>

			{/* 2. Main Workspace Grid */}
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
				{/* Left Column: Form (Captures clicks/focus anywhere on inputs to restore Done state) */}
				<div
					className="lg:col-span-6"
					onFocusCapture={handleFormInteraction}
					onClickCapture={handleFormInteraction}
				>
					<ResumeForm />
				</div>

				{/* Right Column: Live Preview Area */}
				<div className="lg:col-span-6">
					<div className="sticky top-6 flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
						<div className="mb-4 flex items-center justify-between">
							<span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
								LIVE PREVIEW
							</span>
							<span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
								A4 FORMAT
							</span>
						</div>

						{/* Scrollable Container */}
						<div className="h-[calc(100vh-210px)] overflow-y-auto overflow-x-auto rounded-xl border border-slate-200 bg-slate-100/70 p-4 [scrollbar-width:thin]">
							<div className="mx-auto w-fit">
								<div id="resume-print-area" className="w-[210mm] min-h-[297mm] bg-white shadow-md">
									<ResumeTemplateRenderer templateId={activeTemplate} data={resumeData} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 3. FULL-SCREEN DOCUMENT PREVIEW MODAL */}
			{isPreviewModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
					<div className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
						{/* Modal Topbar */}
						<div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-3.5">
							<div className="flex items-center gap-3">
								<h3 className="text-sm font-bold text-white">Full Resume Document Inspection</h3>
								<span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
									A4 Page Print Size
								</span>
							</div>

							{/* Controls */}
							<div className="flex items-center gap-2">
								<div className="flex items-center rounded-lg border border-slate-700 bg-slate-800 p-0.5">
									<button
										type="button"
										onClick={() => setZoomScale((prev) => Math.max(0.6, prev - 0.1))}
										className="p-1.5 text-slate-400 hover:text-white"
										title="Zoom Out"
									>
										<ZoomOut className="h-4 w-4" />
									</button>
									<span className="px-2 text-xs font-mono text-slate-300">
										{Math.round(zoomScale * 100)}%
									</span>
									<button
										type="button"
										onClick={() => setZoomScale((prev) => Math.min(1.4, prev + 0.1))}
										className="p-1.5 text-slate-400 hover:text-white"
										title="Zoom In"
									>
										<ZoomIn className="h-4 w-4" />
									</button>
								</div>

								<button
									type="button"
									onClick={handleDownload}
									className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition"
								>
									<Download className="h-3.5 w-3.5" />
									Download PDF
								</button>

								<button
									type="button"
									onClick={() => setIsPreviewModalOpen(false)}
									className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
									title="Close Modal"
								>
									<X className="h-5 w-5" />
								</button>
							</div>
						</div>

						{/* Modal Canvas */}
						<div className="flex-1 overflow-auto bg-slate-900/60 p-6 flex justify-center items-start">
							<div
								style={{
									transform: `scale(${zoomScale})`,
									transformOrigin: 'top center',
									transition: 'transform 0.15s ease-out',
								}}
								className="shadow-2xl"
							>
								<div className="w-[210mm] min-h-[297mm] bg-white">
									<ResumeTemplateRenderer templateId={activeTemplate} data={resumeData} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResumeBuilder;
