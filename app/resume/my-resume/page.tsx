// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { useResume } from '@/context/ResumeContext';
// import { Edit3, Trash2, Plus, Clock } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// export default function MyResumePage() {
//   const { savedResumes, loadResume, deleteResume } = useResume();
//   const router = useRouter();

//   const handleEdit = (id: string) => {
//     loadResume(id);
//     router.push('/resume/builder');
//   };

//   return (
//     <div className="mx-auto max-w-6xl px-4 py-16 pt-32 sm:px-6 lg:px-8">
//       <div className="flex items-center justify-between border-b border-border pb-5">
//         <div>
//           <h1 className="text-2xl font-bold text-primary">My Resumes</h1>
//           <p className="text-xs text-muted-foreground">Manage and edit your saved resumes.</p>
//         </div>
//         <Link
//           href="/resume/templates"
//           className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary/90"
//         >
//           <Plus className="h-4 w-4" /> Create New
//         </Link>
//       </div>

//       <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//         {savedResumes.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col justify-between rounded-xl border border-border bg-white p-5 shadow-sm"
//           >
//             <div>
//               <h3 className="font-bold text-primary">{item.title}</h3>
//               <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
//                 <Clock className="h-3.5 w-3.5" /> Updated {new Date(item.updatedAt).toLocaleDateString()}
//               </p>
//             </div>
//             <div className="mt-6 flex items-center justify-between border-t border-border pt-3">
//               <button
//                 type="button"
//                 onClick={() => handleEdit(item.id)}
//                 className="inline-flex items-center gap-1 text-xs font-semibold text-accent"
//               >
//                 <Edit3 className="h-3.5 w-3.5" /> Edit
//               </button>
//               <button
//                 type="button"
//                 onClick={() => deleteResume(item.id)}
//                 className="text-xs text-rose-500 hover:text-rose-700"
//               >
//                 <Trash2 className="h-3.5 w-3.5" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }























'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useResume } from '@/context/ResumeContext';
import { Plus, Clock, Edit3, Trash2 } from 'lucide-react'; // Ensure Edit3 is imported

export default function MyResumePage() {
  const router = useRouter();
  const { savedResumes, loadResume, deleteResume } = useResume();

  const handleEdit = (id: string) => {
    loadResume(id);
    router.push('/resume/builder');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 mt-[90px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">My Saved Resumes</h1>
          <p className="text-xs text-muted-foreground">Manage and edit your saved resumes.</p>
        </div>
        <Link
          href="/resume/templates"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary/90 transition"
        >
          <Plus className="h-4 w-4" /> Create New
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {savedResumes.map((item, idx) => {
          // Provide fallback values so TypeScript never receives undefined
          const resumeId = item.id || `saved-${idx}`;
          const dateStr = item.updatedAt
            ? new Date(item.updatedAt).toLocaleDateString()
            : new Date().toLocaleDateString();

          return (
            <div
              key={resumeId}
              className="flex flex-col justify-between rounded-xl border border-border bg-white p-5 shadow-sm "
            >
              <div>
                <h3 className="font-bold text-primary">{item.title || 'Untitled Resume'}</h3>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> Updated {dateStr}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-3">
                <button
                  type="button"
                  onClick={() => handleEdit(resumeId)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                >
                  <Edit3 className="h-3.5 w-3.5" /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => deleteResume(resumeId)}
                  className="text-xs text-rose-500 hover:text-rose-700 transition"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}