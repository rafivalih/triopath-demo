

// 'use client';

// import React, { useState } from 'react';
// import { useResume } from '@/context/ResumeContext';
// import { RESUME_TEMPLATES } from '@/constants/resumeTemplates';
// import { SkillCategory, Certificate } from '@/types/resume';
// import {
//   User,
//   FileText,
//   GraduationCap,
//   Code2,
//   Briefcase,
//   FolderGit2,
//   Award,
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Github,
//   Globe,
//   Plus,
//   Trash2,
//   CheckCircle2,
//   ExternalLink,
// } from 'lucide-react';

// type TabType =
//   | 'personal'
//   | 'summary'
//   | 'education'
//   | 'skills'
//   | 'experience'
//   | 'projects'
  
//   | 'certificates';

// const TABS = [
//   { id: 'personal', label: 'Personal', icon: User },
//   { id: 'summary', label: 'Summary', icon: FileText },
//   { id: 'education', label: 'Education', icon: GraduationCap },
//   { id: 'skills', label: 'Skills', icon: Code2 },
//   { id: 'experience', label: 'Experience', icon: Briefcase },
//   { id: 'projects', label: 'Projects', icon: FolderGit2 },
//   { id: 'certificates', label: 'Certificates', icon: Award },
// ] as const;

// export const ResumeForm: React.FC = () => {
//   const { resumeData, setResumeData, activeTemplate, setActiveTemplate } = useResume();
//   const [activeTab, setActiveTab] = useState<TabType>('personal');

//   // --- 1. Personal Info Handlers ---
//   const handlePersonalChange = (field: string, value: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       personal: {
//         ...prev.personal,
//         [field]: value,
//       },
//     }));
//   };

//   // --- 2. Skills & Category Handlers ---
//   const getNormalizedSkillCategories = (): SkillCategory[] => {
//     if (!resumeData.skills || !Array.isArray(resumeData.skills)) return [];
//     return resumeData.skills.map((item: any, idx: number): SkillCategory => {
//       if (typeof item === 'object' && item !== null) {
//         return {
//           id: item.id || `cat-${idx}-${Date.now()}`,
//           category: item.category || 'Skills',
//           skills: Array.isArray(item.skills)
//             ? item.skills
//             : typeof item.skills === 'string'
//             ? item.skills.split(',').map((s: string) => s.trim()).filter(Boolean)
//             : [],
//         };
//       }
//       if (typeof item === 'string') {
//         const [cat, sk] = item.includes(':') ? item.split(/:(.+)/) : ['Skills', item];
//         return {
//           id: `cat-${idx}-${Date.now()}`,
//           category: cat.trim(),
//           skills: sk ? sk.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
//         };
//       }
//       return { id: `cat-${idx}`, category: 'Skills', skills: [] };
//     });
//   };

//   const handleAddSkillCategory = (categoryTitle = 'New Category') => {
//     const current = getNormalizedSkillCategories();
//     const newCat: SkillCategory = {
//       id: Date.now().toString(),
//       category: categoryTitle,
//       skills: [],
//     };
//     setResumeData((prev) => ({
//       ...prev,
//       skills: [...current, newCat],
//     }));
//   };

//   const handleUpdateCategoryTitle = (idx: number, newTitle: string) => {
//     const current = getNormalizedSkillCategories();
//     current[idx].category = newTitle;
//     setResumeData((prev) => ({ ...prev, skills: current }));
//   };

//   const handleRemoveCategory = (idx: number) => {
//     const current = getNormalizedSkillCategories();
//     setResumeData((prev) => ({
//       ...prev,
//       skills: current.filter((_, i) => i !== idx),
//     }));
//   };

//   const handleMoveCategory = (fromIdx: number, toIdx: number) => {
//     const current = getNormalizedSkillCategories();
//     if (toIdx < 0 || toIdx >= current.length) return;
//     const temp = current[fromIdx];
//     current[fromIdx] = current[toIdx];
//     current[toIdx] = temp;
//     setResumeData((prev) => ({ ...prev, skills: current }));
//   };

//   const handleAddSkillToCategory = (catIdx: number, skillName: string) => {
//     const clean = skillName.trim();
//     if (!clean) return;
//     const current = getNormalizedSkillCategories();
//     if (!current[catIdx].skills.includes(clean)) {
//       current[catIdx].skills.push(clean);
//       setResumeData((prev) => ({ ...prev, skills: current }));
//     }
//   };

//   const handleRemoveSkillFromCategory = (catIdx: number, skillIdx: number) => {
//     const current = getNormalizedSkillCategories();
//     current[catIdx].skills = current[catIdx].skills.filter((_, idx) => idx !== skillIdx);
//     setResumeData((prev) => ({ ...prev, skills: current }));
//   };

//   // --- 3. Experience Handlers ---
//   const handleAddExperience = () => {
//     setResumeData((prev) => ({
//       ...prev,
//       experience: [
//         ...prev.experience,
//         {
//           id: Date.now().toString(),
//           company: '',
//           role: '',
//           location: '',
//           startDate: '',
//           endDate: '',
//           current: false,
//           description: '',
//         },
//       ],
//     }));
//   };

//   const handleUpdateExperience = (id: string, field: string, value: any) => {
//     setResumeData((prev) => ({
//       ...prev,
//       experience: prev.experience.map((exp) =>
//         exp.id === id ? { ...exp, [field]: value } : exp
//       ),
//     }));
//   };

//   const handleRemoveExperience = (id: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       experience: prev.experience.filter((exp) => exp.id !== id),
//     }));
//   };

//   // --- 4. Education Handlers ---
//   const handleAddEducation = () => {
//     setResumeData((prev) => ({
//       ...prev,
//       education: [
//         ...prev.education,
//         {
//           id: Date.now().toString(),
//           institution: '',
//           degree: '',
//           fieldOfStudy: '',
//           location: '',
//           startDate: '',
//           endDate: '',
//           score: '',
//         },
//       ],
//     }));
//   };

//   const handleUpdateEducation = (id: string, field: string, value: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       education: prev.education.map((edu) =>
//         edu.id === id ? { ...edu, [field]: value } : edu
//       ),
//     }));
//   };

//   const handleRemoveEducation = (id: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       education: prev.education.filter((edu) => edu.id !== id),
//     }));
//   };

//   // --- 5. Project Handlers ---
//   const handleAddProject = () => {
//     setResumeData((prev) => ({
//       ...prev,
//       projects: [
//         ...prev.projects,
//         {
//           id: Date.now().toString(),
//           name: '',
//           technologies: '',
//           link: '',
//           description: '',
//         },
//       ],
//     }));
//   };

//   const handleUpdateProject = (id: string, field: string, value: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       projects: prev.projects.map((proj) =>
//         proj.id === id ? { ...proj, [field]: value } : proj
//       ),
//     }));
//   };

//   const handleRemoveProject = (id: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       projects: prev.projects.filter((proj) => proj.id !== id),
//     }));
//   };

//   // --- 6. Certificate Handlers ---
//   const handleAddCertificate = () => {
//     setResumeData((prev) => ({
//       ...prev,
//       certificates: [
//         ...(prev.certificates || []),
//         {
//           id: Date.now().toString(),
//           name: '',
//           issuer: '',
//           credentialId: '',
//           credentialUrl: '',
//           issueDate: '',
//           expirationDate: '',
//           doesNotExpire: false,
//         },
//       ],
//     }));
//   };

//   const handleUpdateCertificate = (id: string, field: string, value: any) => {
//     setResumeData((prev) => ({
//       ...prev,
//       certificates: (prev.certificates || []).map((cert) =>
//         cert.id === id ? { ...cert, [field]: value } : cert
//       ),
//     }));
//   };

//   const handleRemoveCertificate = (id: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       certificates: (prev.certificates || []).filter((cert) => cert.id !== id),
//     }));
//   };

//   const skillCategories = getNormalizedSkillCategories();

//   return (
//     <div className="space-y-6 p-6">
//       {/* 1. TEMPLATE SELECTOR */}
//       <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
//         <div className="mb-3">
//           <h2 className="text-base font-bold text-slate-900">Choose Template</h2>
//           <p className="text-xs text-slate-500">
//             Scroll to explore all {RESUME_TEMPLATES?.length || 5} templates
//           </p>
//         </div>

//         <div className="flex gap-3 overflow-x-auto pb-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
//           {(RESUME_TEMPLATES || []).map((tpl) => {
//             const isSelected = activeTemplate === tpl.id;
//             return (
//               <button
//                 key={tpl.id}
//                 type="button"
//                 onClick={() => setActiveTemplate(tpl.id)}
//                 className={`relative flex min-w-[160px] max-w-[180px] shrink-0 flex-col justify-between rounded-xl border p-3 text-left transition-all duration-200 ${
//                   isSelected
//                     ? 'border-blue-600 bg-blue-50/20 ring-2 ring-blue-500/20'
//                     : 'border-slate-200/90 bg-white hover:border-blue-300 hover:bg-slate-50/50'
//                 }`}
//               >
//                 {isSelected && (
//                   <div className="absolute right-2.5 top-2.5">
//                     <CheckCircle2 className="h-4 w-4 fill-blue-600 text-white" />
//                   </div>
//                 )}
//                 <div>
//                   <h3 className="pr-4 text-xs font-bold text-slate-900">{tpl.name}</h3>
//                   <p className="mt-1 line-clamp-2 text-[11px] leading-tight text-slate-500">
//                     {tpl.description}
//                   </p>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* 2. MAIN FORM TABS CARD */}
//       <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
//         {/* Navigation Tabs */}
//         <div className="mb-6 rounded-xl border border-slate-200/80 bg-slate-50/70 p-1">
//           <div className="flex items-center gap-1 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
//             {TABS.map((tab) => {
//               const Icon = tab.icon;
//               const isActive = activeTab === tab.id;
//               return (
//                 <button
//                   key={tab.id}
//                   type="button"
//                   onClick={() => setActiveTab(tab.id as TabType)}
//                   className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
//                     isActive
//                       ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/60'
//                       : 'text-slate-600 hover:bg-white/60 hover:text-slate-900'
//                   }`}
//                 >
//                   <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* --- PERSONAL TAB --- */}
//         {activeTab === 'personal' && (
//           <div className="space-y-5">
//             <div>
//               <h2 className="text-base font-bold text-slate-900">Personal Information</h2>
//               <p className="text-xs text-slate-500">
//                 Add your contact details and professional links
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                   <User className="h-3.5 w-3.5 text-slate-400" /> Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Rafivali Shaik"
//                   value={resumeData.personal.fullName}
//                   onChange={(e) => handlePersonalChange('fullName', e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                   <Briefcase className="h-3.5 w-3.5 text-slate-400" /> Job Title
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Frontend Developer"
//                   value={resumeData.personal.jobTitle}
//                   onChange={(e) => handlePersonalChange('jobTitle', e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                   <Mail className="h-3.5 w-3.5 text-slate-400" /> Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="rafivalihshaik@gmail.com"
//                   value={resumeData.personal.email}
//                   onChange={(e) => handlePersonalChange('email', e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                   <Phone className="h-3.5 w-3.5 text-slate-400" /> Phone
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="+919392473521"
//                   value={resumeData.personal.phone}
//                   onChange={(e) => handlePersonalChange('phone', e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                   <MapPin className="h-3.5 w-3.5 text-slate-400" /> Location
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Tadipatri, Andhra Pradesh"
//                   value={resumeData.personal.location}
//                   onChange={(e) => handlePersonalChange('location', e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                   <Linkedin className="h-3.5 w-3.5 text-slate-400" /> LinkedIn URL
//                 </label>
//                 <input
//                   type="url"
//                   placeholder="https://www.linkedin.com/in/..."
//                   value={resumeData.personal.linkedin || ''}
//                   onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                   <Github className="h-3.5 w-3.5 text-slate-400" /> GitHub URL
//                 </label>
//                 <input
//                   type="url"
//                   placeholder="https://github.com/..."
//                   value={resumeData.personal.github || ''}
//                   onChange={(e) => handlePersonalChange('github', e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                   <Globe className="h-3.5 w-3.5 text-slate-400" /> Portfolio / Website URL
//                 </label>
//                 <input
//                   type="url"
//                   placeholder="https://yourportfolio.com"
//                   value={resumeData.personal.website || ''}
//                   onChange={(e) => handlePersonalChange('website', e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* --- SUMMARY TAB --- */}
//         {activeTab === 'summary' && (
//           <div className="space-y-4">
//             <div>
//               <h2 className="text-base font-bold text-slate-900">Professional Summary</h2>
//               <p className="text-xs text-slate-500">
//                 Write 2-4 sentences highlighting your background and primary tech strengths.
//               </p>
//             </div>
//             <textarea
//               rows={6}
//               placeholder="e.g. Passionate Frontend Developer experienced in building responsive, scalable React applications..."
//               value={resumeData.personal.summary}
//               onChange={(e) => handlePersonalChange('summary', e.target.value)}
//               className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs leading-relaxed text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
//             />
//           </div>
//         )}

//         {/* --- EDUCATION TAB --- */}
//         {activeTab === 'education' && (
//           <div className="space-y-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-base font-bold text-slate-900">Education</h2>
//                 <p className="text-xs text-slate-500">Add your degrees and academic history</p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleAddEducation}
//                 className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition"
//               >
//                 <Plus className="h-3.5 w-3.5" /> Add Degree
//               </button>
//             </div>

//             {resumeData.education.length === 0 ? (
//               <p className="py-6 text-center text-xs text-slate-400">
//                 No education added yet. Click &quot;Add Degree&quot; above.
//               </p>
//             ) : (
//               <div className="space-y-4">
//                 {resumeData.education.map((edu, idx) => (
//                   <div
//                     key={edu.id || idx}
//                     className="relative space-y-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveEducation(edu.id)}
//                       className="absolute right-3 top-3 text-slate-400 hover:text-red-500"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                     <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                       <input
//                         type="text"
//                         placeholder="Institution (e.g. Parul University)"
//                         value={edu.institution}
//                         onChange={(e) =>
//                           handleUpdateEducation(edu.id, 'institution', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Degree (e.g. B.Tech)"
//                         value={edu.degree}
//                         onChange={(e) =>
//                           handleUpdateEducation(edu.id, 'degree', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Field of Study (e.g. Computer Science)"
//                         value={edu.fieldOfStudy}
//                         onChange={(e) =>
//                           handleUpdateEducation(edu.id, 'fieldOfStudy', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       <input
//                         type="text"
//                         placeholder="location"
//                         value={edu.fieldOfStudy}
//                         onChange={(e) =>
//                           handleUpdateEducation(edu.id, 'fieldOfStudy', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       <div className="grid grid-cols-2 gap-2">
//                         <input
//                           type="text"
//                           placeholder="Start (2022)"
//                           value={edu.startDate}
//                           onChange={(e) =>
//                             handleUpdateEducation(edu.id, 'startDate', e.target.value)
//                           }
//                           className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                         />
//                         <input
//                           type="text"
//                           placeholder="End (2026)"
//                           value={edu.endDate}
//                           onChange={(e) =>
//                             handleUpdateEducation(edu.id, 'endDate', e.target.value)
//                           }
//                           className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* --- SKILLS TAB: REORDERABLE DYNAMIC CATEGORIES --- */}
//         {activeTab === 'skills' && (
//           <div className="space-y-5">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <div>
//                 <h2 className="text-base font-bold text-slate-900">Skills & Competencies</h2>
//                 <p className="text-xs text-slate-500">
//                   Create custom skill categories, add items, and adjust section order using ↑ and ↓.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => handleAddSkillCategory()}
//                 className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
//               >
//                 <Plus className="h-3.5 w-3.5" /> Add Category
//               </button>
//             </div>

//             {/* Category Quick Presets */}
//             <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
//               <p className="text-[11px] font-semibold text-slate-600 mb-2">
//                 Quick Category Suggestions (Click to add):
//               </p>
//               <div className="flex flex-wrap gap-1.5">
//                 {[
//                   'Programming Languages',
//                   'Technologies',
//                   'Frameworks & Libraries',
//                   'Web Technologies',
//                   'Core Concepts',
//                   'Tools & Platforms',
//                   'Databases & Cloud',
//                   'Testing & QA',
//                   'Soft Skills',
//                 ].map((preset) => (
//                   <button
//                     key={preset}
//                     type="button"
//                     onClick={() => handleAddSkillCategory(preset)}
//                     className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600 transition"
//                   >
//                     + {preset}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* List of categories with move up/down */}
//             {skillCategories.length === 0 ? (
//               <div className="rounded-xl border border-dashed border-slate-300 py-8 text-center">
//                 <p className="text-xs text-slate-400">
//                   No skill categories created yet. Click &quot;Add Category&quot; or choose a suggestion above.
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {skillCategories.map((cat: SkillCategory, catIdx: number) => (
//                   <div
//                     key={cat.id || catIdx}
//                     className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3"
//                   >
//                     {/* Header Bar */}
//                     <div className="flex items-center justify-between gap-2">
//                       <div className="flex-1 max-w-sm">
//                         <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5 block">
//                           Category Title
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="e.g. Programming Languages"
//                           value={cat.category}
//                           onChange={(e) => handleUpdateCategoryTitle(catIdx, e.target.value)}
//                           className="w-full font-bold text-xs rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-1.5 text-slate-900 focus:bg-white focus:border-blue-500 outline-none"
//                         />
//                       </div>

//                       {/* Reorder and Delete Controls */}
//                       <div className="flex items-center gap-1">
//                         <button
//                           type="button"
//                           title="Move Up"
//                           disabled={catIdx === 0}
//                           onClick={() => handleMoveCategory(catIdx, catIdx - 1)}
//                           className={`p-1.5 rounded-lg border text-xs font-bold transition ${
//                             catIdx === 0
//                               ? 'border-slate-100 text-slate-300 cursor-not-allowed'
//                               : 'border-slate-200 text-slate-700 hover:bg-slate-100'
//                           }`}
//                         >
//                           ↑
//                         </button>

//                         <button
//                           type="button"
//                           title="Move Down"
//                           disabled={catIdx === skillCategories.length - 1}
//                           onClick={() => handleMoveCategory(catIdx, catIdx + 1)}
//                           className={`p-1.5 rounded-lg border text-xs font-bold transition ${
//                             catIdx === skillCategories.length - 1
//                               ? 'border-slate-100 text-slate-300 cursor-not-allowed'
//                               : 'border-slate-200 text-slate-700 hover:bg-slate-100'
//                           }`}
//                         >
//                           ↓
//                         </button>

//                         <button
//                           type="button"
//                           title="Delete Category"
//                           onClick={() => handleRemoveCategory(catIdx)}
//                           className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition ml-1"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </div>

//                     {/* Skill Input Row */}
//                     <div>
//                       <div className="flex gap-2">
//                         <input
//                           type="text"
//                           id={`skill-input-${catIdx}`}
//                           placeholder={`Add skill to ${cat.category || 'this category'} (Enter or comma)...`}
//                           onKeyDown={(e) => {
//                             if (e.key === 'Enter' || e.key === ',') {
//                               e.preventDefault();
//                               const target = e.currentTarget;
//                               const val = target.value.trim().replace(/^,|,$/g, '');
//                               if (val) {
//                                 handleAddSkillToCategory(catIdx, val);
//                                 target.value = '';
//                               }
//                             }
//                           }}
//                           className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-blue-500 focus:bg-white"
//                         />

//                         <button
//                           type="button"
//                           onClick={() => {
//                             const input = document.getElementById(
//                               `skill-input-${catIdx}`
//                             ) as HTMLInputElement;
//                             if (input && input.value.trim()) {
//                               handleAddSkillToCategory(catIdx, input.value);
//                               input.value = '';
//                             }
//                           }}
//                           className="rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition"
//                         >
//                           Add
//                         </button>
//                       </div>

//                       {/* Skill Tags */}
//                       {cat.skills && cat.skills.length > 0 && (
//                         <div className="flex flex-wrap gap-1.5 pt-2.5">
//                           {cat.skills.map((skill: string, sIdx: number) => (
//                             <span
//                               key={sIdx}
//                               className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-800"
//                             >
//                               {skill}
//                               <button
//                                 type="button"
//                                 onClick={() => handleRemoveSkillFromCategory(catIdx, sIdx)}
//                                 className="text-slate-400 hover:text-red-500 font-bold"
//                               >
//                                 ×
//                               </button>
//                             </span>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* --- EXPERIENCE TAB --- */}
//         {activeTab === 'experience' && (
//           <div className="space-y-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-base font-bold text-slate-900">Experience</h2>
//                 <p className="text-xs text-slate-500">Add internships or job roles</p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleAddExperience}
//                 className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition"
//               >
//                 <Plus className="h-3.5 w-3.5" /> Add Experience
//               </button>
//             </div>

//             {resumeData.experience.length === 0 ? (
//               <p className="py-6 text-center text-xs text-slate-400">
//                 No experience added yet. Click &quot;Add Experience&quot; above.
//               </p>
//             ) : (
//               <div className="space-y-4">
//                 {resumeData.experience.map((exp) => (
//                   <div
//                     key={exp.id}
//                     className="relative space-y-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveExperience(exp.id)}
//                       className="absolute right-3 top-3 text-slate-400 hover:text-red-500"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                     <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                       <input
//                         type="text"
//                         placeholder="Company"
//                         value={exp.company}
//                         onChange={(e) =>
//                           handleUpdateExperience(exp.id, 'company', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Role / Title"
//                         value={exp.role}
//                         onChange={(e) =>
//                           handleUpdateExperience(exp.id, 'role', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Location"
//                         value={exp.location}
//                         onChange={(e) =>
//                           handleUpdateExperience(exp.id, 'location', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       {/* <div className="grid grid-cols-2 gap-2">
//                         <input
//                           type="text"
//                           placeholder="Start Date (optional)"
//                           value={exp.startDate}
//                           onChange={(e) =>
//                             handleUpdateExperience(exp.id, 'startDate', e.target.value)
//                           }
//                           className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                         />
//                         <input
//                           type="text"
//                           placeholder="End Date"
//                           value={exp.endDate}
//                           onChange={(e) =>
//                             handleUpdateExperience(exp.id, 'endDate', e.target.value)
//                           }
//                           className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                         />
//                       </div> */}
//                     </div>
//                     <textarea
//                       rows={3}
//                       placeholder="Describe your contributions & impact..."
//                       value={exp.description}
//                       onChange={(e) =>
//                         handleUpdateExperience(exp.id, 'description', e.target.value)
//                       }
//                       className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-xs text-slate-800"
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* --- PROJECTS TAB --- */}
//         {activeTab === 'projects' && (
//           <div className="space-y-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-base font-bold text-slate-900">Projects</h2>
//                 <p className="text-xs text-slate-500">Showcase top portfolio projects</p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleAddProject}
//                 className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition"
//               >
//                 <Plus className="h-3.5 w-3.5" /> Add Project
//               </button>
//             </div>

//             {resumeData.projects.length === 0 ? (
//               <p className="py-6 text-center text-xs text-slate-400">
//                 No projects added yet. Click &quot;Add Project&quot; above.
//               </p>
//             ) : (
//               <div className="space-y-4">
//                 {resumeData.projects.map((proj) => (
//                   <div
//                     key={proj.id}
//                     className="relative space-y-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveProject(proj.id)}
//                       className="absolute right-3 top-3 text-slate-400 hover:text-red-500"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                     <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                       <input
//                         type="text"
//                         placeholder="Project Name (e.g. ResumeX)"
//                         value={proj.name}
//                         onChange={(e) =>
//                           handleUpdateProject(proj.id, 'name', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Technologies (e.g. React, Tailwind)"
//                         value={proj.technologies}
//                         onChange={(e) =>
//                           handleUpdateProject(proj.id, 'technologies', e.target.value)
//                         }
//                         className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                       <input
//                         type="url"
//                         placeholder="Live / Repo Link"
//                         value={proj.link || ''}
//                         onChange={(e) =>
//                           handleUpdateProject(proj.id, 'link', e.target.value)
//                         }
//                         className="col-span-1 sm:col-span-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
//                       />
//                     </div>
//                     <textarea
//                       rows={2}
//                       placeholder="Key achievements or features built..."
//                       value={proj.description}
//                       onChange={(e) =>
//                         handleUpdateProject(proj.id, 'description', e.target.value)
//                       }
//                       className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-xs text-slate-800"
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* --- CERTIFICATES TAB --- */}
//         {activeTab === 'certificates' && (
//           <div className="space-y-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-base font-bold text-slate-900">Certifications</h2>
//                 <p className="text-xs text-slate-500">Add your professional certifications</p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleAddCertificate}
//                 className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
//               >
//                 <Plus className="h-3.5 w-3.5" /> Add Certification
//               </button>
//             </div>

//             {(!resumeData.certificates || resumeData.certificates.length === 0) ? (
//               <div className="rounded-xl border border-dashed border-slate-300 py-8 text-center">
//                 <p className="text-xs text-slate-400">
//                   No certifications added yet. Click &quot;Add Certification&quot; above.
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {resumeData.certificates.map((cert: Certificate, idx: number) => (
//                   <div
//                     key={cert.id || idx}
//                     className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4"
//                   >
//                     {/* Header Badge & Delete Button */}
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-semibold text-slate-600">
//                         Certification {idx + 1}
//                       </span>
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveCertificate(cert.id)}
//                         className="text-slate-400 hover:text-red-500 transition"
//                         title="Remove Certification"
//                       >
//                         <Trash2 className="h-4 w-4" />
//                       </button>
//                     </div>

//                     {/* Title & Organization */}
//                     <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                       <div>
//                         <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                           Certification Title
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="e.g. React JS Certificate"
//                           value={cert.name}
//                           onChange={(e) =>
//                             handleUpdateCertificate(cert.id, 'name', e.target.value)
//                           }
//                           className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
//                         />
//                       </div>

//                       <div>
//                         <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                           Organization
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="e.g. GeeksforGeeks"
//                           value={cert.issuer}
//                           onChange={(e) =>
//                             handleUpdateCertificate(cert.id, 'issuer', e.target.value)
//                           }
//                           className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
//                         />
//                       </div>
//                     </div>

//                     {/* Credential ID & URL */}
//                     <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                       <div>
//                         <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                           Credential ID <span className="font-normal text-slate-400">(Optional)</span>
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="ABC123XYZ"
//                           value={cert.credentialId || ''}
//                           onChange={(e) =>
//                             handleUpdateCertificate(cert.id, 'credentialId', e.target.value)
//                           }
//                           className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
//                         />
//                       </div>

//                       <div>
//                         <label className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-slate-700">
//                           <ExternalLink className="h-3 w-3 text-slate-400" /> Credential URL
//                         </label>
//                         <input
//                           type="url"
//                           placeholder="https://media.geeksforgeeks.org/courses/..."
//                           value={cert.credentialUrl || ''}
//                           onChange={(e) =>
//                             handleUpdateCertificate(cert.id, 'credentialUrl', e.target.value)
//                           }
//                           className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
//                         />
//                       </div>
//                     </div>

//                     {/* Issue Date & Expiration Date */}
//                     <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                       <div>
//                         <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                           Issue Date
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="SEPT 2025"
//                           value={cert.issueDate || ''}
//                           onChange={(e) =>
//                             handleUpdateCertificate(cert.id, 'issueDate', e.target.value)
//                           }
//                           className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
//                         />
//                       </div>

//                       <div>
//                         <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                           Expiration Date
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Jan 2026"
//                           disabled={cert.doesNotExpire}
//                           value={cert.doesNotExpire ? '' : cert.expirationDate || ''}
//                           onChange={(e) =>
//                             handleUpdateCertificate(cert.id, 'expirationDate', e.target.value)
//                           }
//                           className={`w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs outline-none transition ${
//                             cert.doesNotExpire
//                               ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
//                               : 'bg-slate-50/50 text-slate-800 focus:border-blue-500 focus:bg-white'
//                           }`}
//                         />
//                       </div>
//                     </div>

//                     {/* Checkbox: Does not expire */}
//                     <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer select-none">
//                       <input
//                         type="checkbox"
//                         checked={cert.doesNotExpire || false}
//                         onChange={(e) =>
//                           handleUpdateCertificate(cert.id, 'doesNotExpire', e.target.checked)
//                         }
//                         className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
//                       />
//                       <span>This certification does not expire</span>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumeForm;





























'use client';

import React, { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { RESUME_TEMPLATES } from '@/constants/resumeTemplates';
import { SkillCategory, Certificate } from '@/types/resume';
import {
  User,
  FileText,
  GraduationCap,
  Code2,
  Briefcase,
  FolderGit2,
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Plus,
  Trash2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

type TabType =
  | 'personal'
  | 'summary'
  | 'education'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'certificates';

const TABS = [
  { id: 'personal', label: 'Personal', icon: User },
  { id: 'summary', label: 'Summary', icon: FileText },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certificates', label: 'Certificates', icon: Award },
] as const;

export const ResumeForm: React.FC = () => {
  const { resumeData, setResumeData, activeTemplate, setActiveTemplate } = useResume();
  const [activeTab, setActiveTab] = useState<TabType>('personal');

  // --- 1. Personal Info Handlers ---
  const handlePersonalChange = (field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  // --- 2. Skills & Category Handlers ---
  const getNormalizedSkillCategories = (): SkillCategory[] => {
    if (!resumeData.skills || !Array.isArray(resumeData.skills)) return [];
    return resumeData.skills.map((item: any, idx: number): SkillCategory => {
      if (typeof item === 'object' && item !== null) {
        return {
          id: item.id || `cat-${idx}-${Date.now()}`,
          category: item.category || 'Skills',
          skills: Array.isArray(item.skills)
            ? item.skills
            : typeof item.skills === 'string'
            ? item.skills.split(',').map((s: string) => s.trim()).filter(Boolean)
            : [],
        };
      }
      if (typeof item === 'string') {
        const [cat, sk] = item.includes(':') ? item.split(/:(.+)/) : ['Skills', item];
        return {
          id: `cat-${idx}-${Date.now()}`,
          category: cat.trim(),
          skills: sk ? sk.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
        };
      }
      return { id: `cat-${idx}`, category: 'Skills', skills: [] };
    });
  };

  const handleAddSkillCategory = (categoryTitle = 'New Category') => {
    const current = getNormalizedSkillCategories();
    const newCat: SkillCategory = {
      id: Date.now().toString(),
      category: categoryTitle,
      skills: [],
    };
    setResumeData((prev) => ({
      ...prev,
      skills: [...current, newCat],
    }));
  };

  const handleUpdateCategoryTitle = (idx: number, newTitle: string) => {
    const current = getNormalizedSkillCategories();
    current[idx].category = newTitle;
    setResumeData((prev) => ({ ...prev, skills: current }));
  };

  const handleRemoveCategory = (idx: number) => {
    const current = getNormalizedSkillCategories();
    setResumeData((prev) => ({
      ...prev,
      skills: current.filter((_, i) => i !== idx),
    }));
  };

  const handleMoveCategory = (fromIdx: number, toIdx: number) => {
    const current = getNormalizedSkillCategories();
    if (toIdx < 0 || toIdx >= current.length) return;
    const temp = current[fromIdx];
    current[fromIdx] = current[toIdx];
    current[toIdx] = temp;
    setResumeData((prev) => ({ ...prev, skills: current }));
  };

  const handleAddSkillToCategory = (catIdx: number, skillName: string) => {
    const clean = skillName.trim();
    if (!clean) return;
    const current = getNormalizedSkillCategories();
    if (!current[catIdx].skills.includes(clean)) {
      current[catIdx].skills.push(clean);
      setResumeData((prev) => ({ ...prev, skills: current }));
    }
  };

  const handleRemoveSkillFromCategory = (catIdx: number, skillIdx: number) => {
    const current = getNormalizedSkillCategories();
    current[catIdx].skills = current[catIdx].skills.filter((_, idx) => idx !== skillIdx);
    setResumeData((prev) => ({ ...prev, skills: current }));
  };

  // --- 3. Experience Handlers ---
  const handleAddExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now().toString(),
          company: '',
          role: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    }));
  };

  const handleUpdateExperience = (id: string, field: string, value: any) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const handleRemoveExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  // --- 4. Education Handlers ---
  const handleAddEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now().toString(),
          institution: '',
          degree: '',
          fieldOfStudy: '',
          location: '',
          startDate: '',
          endDate: '',
          score: '',
        },
      ],
    }));
  };

  const handleUpdateEducation = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const handleRemoveEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  // --- 5. Project Handlers ---
  const handleAddProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: Date.now().toString(),
          name: '',
          technologies: '',
          link: '',
          description: '',
        },
      ],
    }));
  };

  const handleUpdateProject = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    }));
  };

  const handleRemoveProject = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
  };

  // --- 6. Certificate Handlers ---
  const handleAddCertificate = () => {
    setResumeData((prev) => ({
      ...prev,
      certificates: [
        ...(prev.certificates || []),
        {
          id: Date.now().toString(),
          name: '',
          issuer: '',
          credentialId: '',
          credentialUrl: '',
          issueDate: '',
          expirationDate: '',
          doesNotExpire: false,
        },
      ],
    }));
  };

  const handleUpdateCertificate = (id: string, field: string, value: any) => {
    setResumeData((prev) => ({
      ...prev,
      certificates: (prev.certificates || []).map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      ),
    }));
  };

  const handleRemoveCertificate = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      certificates: (prev.certificates || []).filter((cert) => cert.id !== id),
    }));
  };

  const skillCategories = getNormalizedSkillCategories();

  return (
    <div className="space-y-6 p-6">
      {/* 1. TEMPLATE SELECTOR */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <div className="mb-3">
          <h2 className="text-base font-bold text-slate-900">Choose Template</h2>
          <p className="text-xs text-slate-500">
            Scroll to explore all {RESUME_TEMPLATES?.length || 5} templates
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {(RESUME_TEMPLATES || []).map((tpl) => {
            const isSelected = activeTemplate === tpl.id;
            return (
              <button
                key={tpl.id}
                type="button"
                onClick={() => setActiveTemplate(tpl.id)}
                className={`relative flex min-w-[160px] max-w-[180px] shrink-0 flex-col justify-between rounded-xl border p-3 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/20 ring-2 ring-blue-500/20'
                    : 'border-slate-200/90 bg-white hover:border-blue-300 hover:bg-slate-50/50'
                }`}
              >
                {isSelected && (
                  <div className="absolute right-2.5 top-2.5">
                    <CheckCircle2 className="h-4 w-4 fill-blue-600 text-white" />
                  </div>
                )}
                <div>
                  <h3 className="pr-4 text-xs font-bold text-slate-900">{tpl.name}</h3>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-tight text-slate-500">
                    {tpl.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. MAIN FORM TABS CARD */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
        {/* Navigation Tabs */}
        <div className="mb-6 rounded-xl border border-slate-200/80 bg-slate-50/70 p-1">
          <div className="flex items-center gap-1 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/60'
                      : 'text-slate-600 hover:bg-white/60 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- PERSONAL TAB --- */}
        {activeTab === 'personal' && (
          <div className="space-y-5">
            <div>
              <h2 className="text-base font-bold text-slate-900">Personal Information</h2>
              <p className="text-xs text-slate-500">
                Add your contact details and professional links
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <User className="h-3.5 w-3.5 text-slate-400" /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="Rafivali Shaik"
                  value={resumeData.personal.fullName}
                  onChange={(e) => handlePersonalChange('fullName', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Briefcase className="h-3.5 w-3.5 text-slate-400" /> Job Title
                </label>
                <input
                  type="text"
                  placeholder="Frontend Developer"
                  value={resumeData.personal.jobTitle}
                  onChange={(e) => handlePersonalChange('jobTitle', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Mail className="h-3.5 w-3.5 text-slate-400" /> Email
                </label>
                <input
                  type="email"
                  placeholder="rafivalihshaik@gmail.com"
                  value={resumeData.personal.email}
                  onChange={(e) => handlePersonalChange('email', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Phone className="h-3.5 w-3.5 text-slate-400" /> Phone
                </label>
                <input
                  type="tel"
                  placeholder="+919392473521"
                  value={resumeData.personal.phone}
                  onChange={(e) => handlePersonalChange('phone', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" /> Location
                </label>
                <input
                  type="text"
                  placeholder="Tadipatri, Andhra Pradesh"
                  value={resumeData.personal.location}
                  onChange={(e) => handlePersonalChange('location', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Linkedin className="h-3.5 w-3.5 text-slate-400" /> LinkedIn URL
                </label>
                <input
                  type="url"
                  placeholder="https://www.linkedin.com/in/..."
                  value={resumeData.personal.linkedin || ''}
                  onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Github className="h-3.5 w-3.5 text-slate-400" /> GitHub URL
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/..."
                  value={resumeData.personal.github || ''}
                  onChange={(e) => handlePersonalChange('github', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Globe className="h-3.5 w-3.5 text-slate-400" /> Portfolio / Website URL
                </label>
                <input
                  type="url"
                  placeholder="https://yourportfolio.com"
                  value={resumeData.personal.website || ''}
                  onChange={(e) => handlePersonalChange('website', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>
        )}

        {/* --- SUMMARY TAB --- */}
        {activeTab === 'summary' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">Professional Summary</h2>
              <p className="text-xs text-slate-500">
                Write 2-4 sentences highlighting your background and primary tech strengths.
              </p>
            </div>
            <textarea
              rows={6}
              placeholder="e.g. Passionate Frontend Developer experienced in building responsive, scalable React applications..."
              value={resumeData.personal.summary}
              onChange={(e) => handlePersonalChange('summary', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs leading-relaxed text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        )}

        {/* --- EDUCATION TAB --- */}
        {activeTab === 'education' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Education</h2>
                <p className="text-xs text-slate-500">Add your degrees and academic history</p>
              </div>
              <button
                type="button"
                onClick={handleAddEducation}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition"
              >
                <Plus className="h-3.5 w-3.5" /> Add Degree
              </button>
            </div>

            {resumeData.education.length === 0 ? (
              <p className="py-6 text-center text-xs text-slate-400">
                No education added yet. Click &quot;Add Degree&quot; above.
              </p>
            ) : (
              <div className="space-y-4">
                {resumeData.education.map((edu, idx) => (
                  <div
                    key={edu.id || idx}
                    className="relative space-y-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4"
                  >
                    <button
                      type="button"
                      onClick={() => handleRemoveEducation(edu.id)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Institution (e.g. Parul University)"
                        value={edu.institution}
                        onChange={(e) =>
                          handleUpdateEducation(edu.id, 'institution', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Degree (e.g. B.Tech)"
                        value={edu.degree}
                        onChange={(e) =>
                          handleUpdateEducation(edu.id, 'degree', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Field of Study (e.g. Computer Science)"
                        value={edu.fieldOfStudy}
                        onChange={(e) =>
                          handleUpdateEducation(edu.id, 'fieldOfStudy', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Location (e.g. Vadodara, Gujarat)"
                        value={edu.location || ''}
                        onChange={(e) =>
                          handleUpdateEducation(edu.id, 'location', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Start (2022)"
                          value={edu.startDate}
                          onChange={(e) =>
                            handleUpdateEducation(edu.id, 'startDate', e.target.value)
                          }
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                        />
                        <input
                          type="text"
                          placeholder="End (2026)"
                          value={edu.endDate}
                          onChange={(e) =>
                            handleUpdateEducation(edu.id, 'endDate', e.target.value)
                          }
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- SKILLS TAB: REORDERABLE DYNAMIC CATEGORIES --- */}
        {activeTab === 'skills' && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-base font-bold text-slate-900">Skills & Competencies</h2>
                <p className="text-xs text-slate-500">
                  Create custom skill categories, add items, and adjust section order using ↑ and ↓.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleAddSkillCategory()}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
              >
                <Plus className="h-3.5 w-3.5" /> Add Category
              </button>
            </div>

            {/* Category Quick Presets */}
            <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
              <p className="text-[11px] font-semibold text-slate-600 mb-2">
                Quick Category Suggestions (Click to add):
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Programming Languages',
                  'Technologies',
                  'Frameworks & Libraries',
                  'Web Technologies',
                  'Core Concepts',
                  'Tools & Platforms',
                  'Databases & Cloud',
                  'Testing & QA',
                  'Soft Skills',
                ].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleAddSkillCategory(preset)}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600 transition"
                  >
                    + {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* List of categories with move up/down */}
            {skillCategories.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 py-8 text-center">
                <p className="text-xs text-slate-400">
                  No skill categories created yet. Click &quot;Add Category&quot; or choose a suggestion above.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {skillCategories.map((cat: SkillCategory, catIdx: number) => (
                  <div
                    key={cat.id || catIdx}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3"
                  >
                    {/* Header Bar */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1 max-w-sm">
                        <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5 block">
                          Category Title
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Programming Languages"
                          value={cat.category}
                          onChange={(e) => handleUpdateCategoryTitle(catIdx, e.target.value)}
                          className="w-full font-bold text-xs rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-1.5 text-slate-900 focus:bg-white focus:border-blue-500 outline-none"
                        />
                      </div>

                      {/* Reorder and Delete Controls */}
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          title="Move Up"
                          disabled={catIdx === 0}
                          onClick={() => handleMoveCategory(catIdx, catIdx - 1)}
                          className={`p-1.5 rounded-lg border text-xs font-bold transition ${
                            catIdx === 0
                              ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          ↑
                        </button>

                        <button
                          type="button"
                          title="Move Down"
                          disabled={catIdx === skillCategories.length - 1}
                          onClick={() => handleMoveCategory(catIdx, catIdx + 1)}
                          className={`p-1.5 rounded-lg border text-xs font-bold transition ${
                            catIdx === skillCategories.length - 1
                              ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          ↓
                        </button>

                        <button
                          type="button"
                          title="Delete Category"
                          onClick={() => handleRemoveCategory(catIdx)}
                          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition ml-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Skill Input Row */}
                    <div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          id={`skill-input-${catIdx}`}
                          placeholder={`Add skill to ${cat.category || 'this category'} (Enter or comma)...`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ',') {
                              e.preventDefault();
                              const target = e.currentTarget;
                              const val = target.value.trim().replace(/^,|,$/g, '');
                              if (val) {
                                handleAddSkillToCategory(catIdx, val);
                                target.value = '';
                              }
                            }
                          }}
                          className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-blue-500 focus:bg-white"
                        />

                        <button
                          type="button"
                          onClick={() => {
                            const input = document.getElementById(
                              `skill-input-${catIdx}`
                            ) as HTMLInputElement;
                            if (input && input.value.trim()) {
                              handleAddSkillToCategory(catIdx, input.value);
                              input.value = '';
                            }
                          }}
                          className="rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition"
                        >
                          Add
                        </button>
                      </div>

                      {/* Skill Tags */}
                      {cat.skills && cat.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2.5">
                          {cat.skills.map((skill: string, sIdx: number) => (
                            <span
                              key={sIdx}
                              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-800"
                            >
                              {skill}
                              <button
                                type="button"
                                onClick={() => handleRemoveSkillFromCategory(catIdx, sIdx)}
                                className="text-slate-400 hover:text-red-500 font-bold"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- EXPERIENCE TAB --- */}
        {activeTab === 'experience' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Experience</h2>
                <p className="text-xs text-slate-500">Add internships or job roles</p>
              </div>
              <button
                type="button"
                onClick={handleAddExperience}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition"
              >
                <Plus className="h-3.5 w-3.5" /> Add Experience
              </button>
            </div>

            {resumeData.experience.length === 0 ? (
              <p className="py-6 text-center text-xs text-slate-400">
                No experience added yet. Click &quot;Add Experience&quot; above.
              </p>
            ) : (
              <div className="space-y-4">
                {resumeData.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative space-y-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4"
                  >
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(exp.id)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) =>
                          handleUpdateExperience(exp.id, 'company', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Role / Title"
                        value={exp.role}
                        onChange={(e) =>
                          handleUpdateExperience(exp.id, 'role', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={exp.location}
                        onChange={(e) =>
                          handleUpdateExperience(exp.id, 'location', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Start Date"
                          value={exp.startDate}
                          onChange={(e) =>
                            handleUpdateExperience(exp.id, 'startDate', e.target.value)
                          }
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                        />
                        <input
                          type="text"
                          placeholder="End Date"
                          value={exp.endDate}
                          onChange={(e) =>
                            handleUpdateExperience(exp.id, 'endDate', e.target.value)
                          }
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                        />
                      </div>
                    </div>
                    <textarea
                      rows={8}
                      placeholder="Describe your contributions & impact..."
                      value={exp.description}
                      onChange={(e) =>
                        handleUpdateExperience(exp.id, 'description', e.target.value)
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-xs text-slate-800"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- PROJECTS TAB --- */}
        {activeTab === 'projects' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Projects</h2>
                <p className="text-xs text-slate-500">Showcase top portfolio projects</p>
              </div>
              <button
                type="button"
                onClick={handleAddProject}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition"
              >
                <Plus className="h-3.5 w-3.5" /> Add Project
              </button>
            </div>

            {resumeData.projects.length === 0 ? (
              <p className="py-6 text-center text-xs text-slate-400">
                No projects added yet. Click &quot;Add Project&quot; above.
              </p>
            ) : (
              <div className="space-y-4">
                {resumeData.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="relative space-y-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4"
                  >
                    <button
                      type="button"
                      onClick={() => handleRemoveProject(proj.id)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Project Name (e.g. ResumeX)"
                        value={proj.name}
                        onChange={(e) =>
                          handleUpdateProject(proj.id, 'name', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Technologies (e.g. React, Tailwind)"
                        value={proj.technologies}
                        onChange={(e) =>
                          handleUpdateProject(proj.id, 'technologies', e.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                      <input
                        type="url"
                        placeholder="Live / Repo Link"
                        value={proj.link || ''}
                        onChange={(e) =>
                          handleUpdateProject(proj.id, 'link', e.target.value)
                        }
                        className="col-span-1 sm:col-span-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs"
                      />
                    </div>
                    <textarea
                      rows={7}
                      placeholder="Key achievements or features built..."
                      value={proj.description}
                      onChange={(e) =>
                        handleUpdateProject(proj.id, 'description', e.target.value)
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-xs text-slate-800"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- CERTIFICATES TAB --- */}
        {activeTab === 'certificates' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Certifications</h2>
                <p className="text-xs text-slate-500">Add your professional certifications</p>
              </div>
              <button
                type="button"
                onClick={handleAddCertificate}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
              >
                <Plus className="h-3.5 w-3.5" /> Add Certification
              </button>
            </div>

            {(!resumeData.certificates || resumeData.certificates.length === 0) ? (
              <div className="rounded-xl border border-dashed border-slate-300 py-8 text-center">
                <p className="text-xs text-slate-400">
                  No certifications added yet. Click &quot;Add Certification&quot; above.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {resumeData.certificates.map((cert: Certificate, idx: number) => (
                  <div
                    key={cert.id || idx}
                    className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4"
                  >
                    {/* Header Badge & Delete Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-600">
                        Certification {idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveCertificate(cert.id)}
                        className="text-slate-400 hover:text-red-500 transition"
                        title="Remove Certification"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Title & Organization */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                          Certification Title
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. React JS Certificate"
                          value={cert.name}
                          onChange={(e) =>
                            handleUpdateCertificate(cert.id, 'name', e.target.value)
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                          Organization
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. GeeksforGeeks"
                          value={cert.issuer}
                          onChange={(e) =>
                            handleUpdateCertificate(cert.id, 'issuer', e.target.value)
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Credential ID & URL */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                          Credential ID <span className="font-normal text-slate-400">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="ABC123XYZ"
                          value={cert.credentialId || ''}
                          onChange={(e) =>
                            handleUpdateCertificate(cert.id, 'credentialId', e.target.value)
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-slate-700">
                          <ExternalLink className="h-3 w-3 text-slate-400" /> Credential URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://media.geeksforgeeks.org/courses/..."
                          value={cert.credentialUrl || ''}
                          onChange={(e) =>
                            handleUpdateCertificate(cert.id, 'credentialUrl', e.target.value)
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Issue Date & Expiration Date */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                          Issue Date
                        </label>
                        <input
                          type="text"
                          placeholder="SEPT 2025"
                          value={cert.issueDate || ''}
                          onChange={(e) =>
                            handleUpdateCertificate(cert.id, 'issueDate', e.target.value)
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          placeholder="Jan 2026"
                          disabled={cert.doesNotExpire}
                          value={cert.doesNotExpire ? '' : cert.expirationDate || ''}
                          onChange={(e) =>
                            handleUpdateCertificate(cert.id, 'expirationDate', e.target.value)
                          }
                          className={`w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs outline-none transition ${
                            cert.doesNotExpire
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                              : 'bg-slate-50/50 text-slate-800 focus:border-blue-500 focus:bg-white'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Checkbox: Does not expire */}
                    <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={cert.doesNotExpire || false}
                        onChange={(e) =>
                          handleUpdateCertificate(cert.id, 'doesNotExpire', e.target.checked)
                        }
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>This certification does not expire</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeForm;