// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { ResumeData } from '@/types/resume';
// import { INITIAL_RESUME_DATA } from '@/constants/resumeTemplates';

// interface ResumeContextType {
//   resumeData: ResumeData;
//   setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
//   activeTemplate: string;
//   setActiveTemplate: (templateId: string) => void;
//   savedResumes: ResumeData[];
//   saveCurrentResume: () => void;
//   loadResume: (id: string) => void;
//   deleteResume: (id: string) => void;
// }

// const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// export function ResumeProvider({ children }: { children: React.ReactNode }) {
//   const [resumeData, setResumeData] = useState<ResumeData>(INITIAL_RESUME_DATA);
//   const [activeTemplate, setActiveTemplate] = useState<string>('modern-classic');
//   const [savedResumes, setSavedResumes] = useState<ResumeData[]>([]);

//   // Load saved resumes from LocalStorage on mount
//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem('resumex_saved_resumes');
//       if (stored) {
//         setSavedResumes(JSON.parse(stored));
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   }, []);

//   const saveCurrentResume = () => {
//     const updated: ResumeData = {
//       ...resumeData,
//       templateId: activeTemplate,
//       updatedAt: new Date().toISOString(),
//     };

//     setSavedResumes((prev) => {
//       const exists = prev.some((r) => r.id === updated.id);
//       const nextList = exists
//         ? prev.map((r) => (r.id === updated.id ? updated : r))
//         : [updated, ...prev];
//       localStorage.setItem('resumex_saved_resumes', JSON.stringify(nextList));
//       return nextList;
//     });
//   };

//   const loadResume = (id: string) => {
//     const item = savedResumes.find((r) => r.id === id);
//     if (item) {
//       setResumeData(item);
//       setActiveTemplate(item.templateId || 'modern-classic');
//     }
//   };

//   const deleteResume = (id: string) => {
//     setSavedResumes((prev) => {
//       const filtered = prev.filter((r) => r.id !== id);
//       localStorage.setItem('resumex_saved_resumes', JSON.stringify(filtered));
//       return filtered;
//     });
//   };

//   return (
//     <ResumeContext.Provider
//       value={{
//         resumeData,
//         setResumeData,
//         activeTemplate,
//         setActiveTemplate,
//         savedResumes,
//         saveCurrentResume,
//         loadResume,
//         deleteResume,
//       }}
//     >
//       {children}
//     </ResumeContext.Provider>
//   );
// }

// export function useResume() {
//   const context = useContext(ResumeContext);
//   if (!context) {
//     throw new Error('useResume must be used within a ResumeProvider');
//   }
//   return context;
// }

// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { ResumeData } from '@/types/resume';

// export const EMPTY_RESUME_DATA: ResumeData = {
//   id: 'resume-draft',
//   title: 'Untitled Resume',
//   updatedAt: new Date().toISOString(),
//   templateId: 'modern-classic',
//   personal: {
//     fullName: '',
//     jobTitle: '',
//     email: '',
//     phone: '',
//     location: '',
//     website: '',
//     linkedin: '',
//     github: '',
//     summary: '',
//   },
//   experience: [],
//   education: [],
//   skills: [],
//   projects: [],
// };

// interface ResumeContextType {
//   resumeData: ResumeData;
//   setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
//   activeTemplate: string;
//   setActiveTemplate: (templateId: string) => void;
//   savedResumes: ResumeData[];
//   saveCurrentResume: () => void;
//   loadResume: (id: string) => void;
//   deleteResume: (id: string) => void;
//   clearResume: () => void;
// }

// const ResumeContext = createContext<ResumeContextType | undefined>(undefined);
// const [activeTemplate, setActiveTemplate] = useState<string>("classic");

// const DRAFT_STORAGE_KEY = 'resumex_active_draft';
// const SAVED_STORAGE_KEY = 'resumex_saved_resumes';

// export function ResumeProvider({ children }: { children: React.ReactNode }) {
//   const [resumeData, setResumeData] = useState<ResumeData>(EMPTY_RESUME_DATA);
//   const [activeTemplate, setActiveTemplate] = useState<string>('modern-classic');
//   const [savedResumes, setSavedResumes] = useState<ResumeData[]>([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   // 1. Load active draft & saved resumes on mount
//   useEffect(() => {
//     try {
//       const activeDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
//       if (activeDraft) {
//         const parsed = JSON.parse(activeDraft);
//         setResumeData(parsed);
//         if (parsed.templateId) {
//           setActiveTemplate(parsed.templateId);
//         }
//       }

//       const storedList = localStorage.getItem(SAVED_STORAGE_KEY);
//       if (storedList) {
//         setSavedResumes(JSON.parse(storedList));
//       }
//     } catch (err) {
//       console.error('Error loading resume storage:', err);
//     } finally {
//       setIsLoaded(true);
//     }
//   }, []);

//   // 2. Auto-save current progress as the user types
//   useEffect(() => {
//     if (!isLoaded) return;
//     try {
//       localStorage.setItem(
//         DRAFT_STORAGE_KEY,
//         JSON.stringify({ ...resumeData, templateId: activeTemplate })
//       );
//     } catch (err) {
//       console.error('Error auto-saving resume:', err);
//     }
//   }, [resumeData, activeTemplate, isLoaded]);

//   const saveCurrentResume = () => {
//     const updated: ResumeData = {
//       ...resumeData,
//       id: resumeData.id && resumeData.id !== 'resume-draft' ? resumeData.id : Date.now().toString(),
//       templateId: activeTemplate,
//       updatedAt: new Date().toISOString(),
//     };

//     setSavedResumes((prev) => {
//       const exists = prev.some((r) => r.id === updated.id);
//       const nextList = exists
//         ? prev.map((r) => (r.id === updated.id ? updated : r))
//         : [updated, ...prev];
//       localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(nextList));
//       return nextList;
//     });
//   };

//   const loadResume = (id: string) => {
//     const item = savedResumes.find((r) => r.id === id);
//     if (item) {
//       setResumeData(item);
//       setActiveTemplate(item.templateId || 'modern-classic');
//     }
//   };

//   const deleteResume = (id: string) => {
//     setSavedResumes((prev) => {
//       const filtered = prev.filter((r) => r.id !== id);
//       localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(filtered));
//       return filtered;
//     });
//   };

//   const clearResume = () => {
//     setResumeData(EMPTY_RESUME_DATA);
//     localStorage.removeItem(DRAFT_STORAGE_KEY);
//   };

//   return (
//     <ResumeContext.Provider
//       value={{
//         resumeData,
//         setResumeData,
//         activeTemplate,
//         setActiveTemplate,
//         savedResumes,
//         saveCurrentResume,
//         loadResume,
//         deleteResume,
//         clearResume,
//       }}
//     >
//       {children}
//     </ResumeContext.Provider>
//   );
// }

// export function useResume() {
//   const context = useContext(ResumeContext);
//   if (!context) {
//     throw new Error('useResume must be used within a ResumeProvider');
//   }
//   return context;
// }

// export default ResumeProvider;

'use client';

import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import type { ResumeData } from '@/types/resume';

export const EMPTY_RESUME_DATA: ResumeData = {
	id: 'resume-draft',
	title: 'Untitled Resume',
	updatedAt: new Date().toISOString(),
	templateId: 'classic',
	personal: {
		fullName: '',
		jobTitle: '',
		email: '',
		phone: '',
		location: '',
		website: '',
		linkedin: '',
		github: '',
		summary: '',
	},
	experience: [],
	education: [],
	skills: [],
	projects: [],
};

interface ResumeContextType {
	resumeData: ResumeData;
	setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
	activeTemplate: string;
	setActiveTemplate: (templateId: string) => void;
	savedResumes: ResumeData[];
	saveCurrentResume: () => void;
	loadResume: (id: string) => void;
	deleteResume: (id: string) => void;
	clearResume: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

const DRAFT_STORAGE_KEY = 'resumex_active_draft';
const SAVED_STORAGE_KEY = 'resumex_saved_resumes';

export function ResumeProvider({ children }: { children: React.ReactNode }) {
	const [resumeData, setResumeData] = useState<ResumeData>(EMPTY_RESUME_DATA);
	const [activeTemplate, setActiveTemplate] = useState<string>('classic');
	const [savedResumes, setSavedResumes] = useState<ResumeData[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);

	// 1. Load active draft & saved resumes on mount
	useEffect(() => {
		try {
			const activeDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
			if (activeDraft) {
				const parsed = JSON.parse(activeDraft);
				setResumeData(parsed);
				if (parsed.templateId) {
					setActiveTemplate(parsed.templateId);
				}
			}

			const storedList = localStorage.getItem(SAVED_STORAGE_KEY);
			if (storedList) {
				setSavedResumes(JSON.parse(storedList));
			}
		} catch (err) {
			console.error('Error loading resume storage:', err);
		} finally {
			setIsLoaded(true);
		}
	}, []);

	// 2. Auto-save current progress as the user types
	useEffect(() => {
		if (!isLoaded) return;
		try {
			localStorage.setItem(
				DRAFT_STORAGE_KEY,
				JSON.stringify({ ...resumeData, templateId: activeTemplate }),
			);
		} catch (err) {
			console.error('Error auto-saving resume:', err);
		}
	}, [resumeData, activeTemplate, isLoaded]);

	const saveCurrentResume = () => {
		const updated: ResumeData = {
			...resumeData,
			id: resumeData.id && resumeData.id !== 'resume-draft' ? resumeData.id : Date.now().toString(),
			templateId: activeTemplate,
			updatedAt: new Date().toISOString(),
		};

		setSavedResumes((prev) => {
			const exists = prev.some((r) => r.id === updated.id);
			const nextList = exists
				? prev.map((r) => (r.id === updated.id ? updated : r))
				: [updated, ...prev];
			localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(nextList));
			return nextList;
		});
	};

	const loadResume = (id: string) => {
		const item = savedResumes.find((r) => r.id === id);
		if (item) {
			setResumeData(item);
			setActiveTemplate(item.templateId || 'classic');
		}
	};

	const deleteResume = (id: string) => {
		setSavedResumes((prev) => {
			const filtered = prev.filter((r) => r.id !== id);
			localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(filtered));
			return filtered;
		});
	};

	const clearResume = () => {
		setResumeData(EMPTY_RESUME_DATA);
		localStorage.removeItem(DRAFT_STORAGE_KEY);
	};

	return (
		<ResumeContext.Provider
			value={{
				resumeData,
				setResumeData,
				activeTemplate,
				setActiveTemplate,
				savedResumes,
				saveCurrentResume,
				loadResume,
				deleteResume,
				clearResume,
			}}
		>
			{children}
		</ResumeContext.Provider>
	);
}

export function useResume() {
	const context = useContext(ResumeContext);
	if (!context) {
		throw new Error('useResume must be used within a ResumeProvider');
	}
	return context;
}

export default ResumeProvider;
