// "use client";

// import React, { useState } from "react";
// import { Download, Save, Eye, Palette } from "lucide-react";
// import { useResume, ResumeProvider } from "@/context/ResumeContext";
// import Link from "next/link";

// interface ResumeActionsProps {
// 	onDownload: () => void;
// 	isDownloading?: boolean;
// }

// export const ResumeActions: React.FC<ResumeActionsProps> = ({
// 	onDownload,
// 	isDownloading = false,
// }) => {
// 	const { saveCurrentResume } = useResume();
// 	const [savedStatus, setSavedStatus] = useState(false);

// 	const handleSave = () => {
// 		saveCurrentResume();
// 		setSavedStatus(true);
// 		setTimeout(() => setSavedStatus(false), 2000);
// 	};

// 	return (
// 		<div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-white px-6 py-3">
// 			<div className="flex items-center gap-2">
// 				<Link
// 					href="/resume/templates"
// 					className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-slate-50"
// 				>
// 					<Palette className="h-4 w-4 text-accent" /> Change Template
// 				</Link>
// 				<Link
// 					href="/resume/my-resume"
// 					className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-slate-50"
// 				>
// 					<Eye className="h-4 w-4" /> My Resumes
// 				</Link>
// 			</div>

// 			<div className="flex items-center gap-2">
// 				<button
// 					type="button"
// 					onClick={handleSave}
// 					className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
// 				>
// 					<Save className="h-3.5 w-3.5 text-slate-500" />
// 					{savedStatus ? "Saved!" : "Save Progress"}
// 				</button>

// 				<button
// 					type="button"
// 					onClick={onDownload}
// 					disabled={isDownloading}
// 					className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-primary/90 disabled:opacity-50"
// 				>
// 					<Download className="h-3.5 w-3.5" />
// 					{isDownloading ? "Exporting PDF..." : "Download PDF"}
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

'use client';

import { Download, Eye, Palette, Save } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import { useResume } from '@/context/ResumeContext';

interface ResumeActionsProps {
	onDownload: () => void;
	isDownloading?: boolean;
}

export const ResumeActions: React.FC<ResumeActionsProps> = ({
	onDownload,
	isDownloading = false,
}) => {
	const { saveCurrentResume } = useResume();
	const [savedStatus, setSavedStatus] = useState(false);

	const handleSave = () => {
		saveCurrentResume();
		setSavedStatus(true);
		setTimeout(() => setSavedStatus(false), 2000);
	};

	return (
		<div className="mx-6 mt-[60px] mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-6 py-3 shadow-sm backdrop-blur-md">
			{/* Left Navigation Buttons */}
			<div className="flex items-center gap-2.5">
				<Link
					href="/resume/templates"
					className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
				>
					<Palette className="h-4 w-4 text-blue-600" />
					Change Template
				</Link>
				<Link
					href="/resume/my-resume"
					className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
				>
					<Eye className="h-4 w-4 text-slate-400" />
					My Resumes
				</Link>
			</div>

			{/* Right Action Buttons */}
			<div className="flex items-center gap-2.5">
				<button
					type="button"
					onClick={handleSave}
					className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
				>
					<Save className="h-4 w-4 text-slate-500" />
					{savedStatus ? 'Saved!' : 'Save Progress'}
				</button>

				<button
					type="button"
					onClick={onDownload}
					disabled={isDownloading}
					className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-600 disabled:opacity-50"
				>
					<Download className="h-4 w-4" />
					{isDownloading ? 'Exporting PDF...' : 'Download PDF'}
				</button>
			</div>
		</div>
	);
};
