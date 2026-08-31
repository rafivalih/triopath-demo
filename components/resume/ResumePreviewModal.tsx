'use client';

import { Download, X, ZoomIn, ZoomOut } from 'lucide-react';
import React from 'react';
import { ResumePreview } from './ResumePreview';

interface ResumePreviewModalProps {
	isOpen: boolean;
	onClose: () => void;
	onDownload: () => void;
}

export const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({
	isOpen,
	onClose,
	onDownload,
}) => {
	const [scale, setScale] = React.useState<number>(1);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
			{/* Modal Card */}
			<div className="relative flex h-[92vh] w-full max-w-5xl flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
				{/* Modal Top Bar */}
				<div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-3.5">
					<div className="flex items-center gap-3">
						<h3 className="text-sm font-bold text-white">Full Resume Document Preview</h3>
						<span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
							A4 Page Print Size
						</span>
					</div>

					{/* Zoom & Action Controls */}
					<div className="flex items-center gap-2">
						<div className="flex items-center rounded-lg bg-slate-800 p-0.5 border border-slate-700">
							<button
								type="button"
								onClick={() => setScale((prev) => Math.max(0.6, prev - 0.1))}
								className="p-1 text-slate-400 hover:text-white rounded"
								title="Zoom Out"
							>
								<ZoomOut className="h-4 w-4" />
							</button>
							<span className="px-2 text-[11px] font-mono text-slate-300">
								{Math.round(scale * 100)}%
							</span>
							<button
								type="button"
								onClick={() => setScale((prev) => Math.min(1.4, prev + 0.1))}
								className="p-1 text-slate-400 hover:text-white rounded"
								title="Zoom In"
							>
								<ZoomIn className="h-4 w-4" />
							</button>
						</div>

						<button
							type="button"
							onClick={onDownload}
							className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition"
						>
							<Download className="h-3.5 w-3.5" /> Download PDF
						</button>

						<button
							type="button"
							onClick={onClose}
							className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
							title="Close Preview"
						>
							<X className="h-5 w-5" />
						</button>
					</div>
				</div>

				{/* Modal Scrollable Canvas */}
				<div className="flex-1 overflow-auto bg-slate-900/60 p-6 flex justify-center items-start">
					<div
						style={{
							transform: `scale(${scale})`,
							transformOrigin: 'top center',
							transition: 'transform 0.15s ease-out',
						}}
						className="shadow-2xl rounded-sm"
					>
						<ResumePreview />
					</div>
				</div>
			</div>
		</div>
	);
};
