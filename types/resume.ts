// types/resume.ts

import { StaticImageData } from "next/image";

export interface SkillCategory {
	id: string;
	category: string;
	skills: string[];
}

export interface Certificate {
	id: string;
	name: string; // Certification Title
	issuer: string; // Organization
	issueDate?: string; // Issue Date (e.g., "SEPT 2025")
	expirationDate?: string; // Expiration Date
	doesNotExpire?: boolean; // Checkbox state
	credentialId?: string; // Credential ID (Optional)
	credentialUrl?: string; // Credential URL
}

export interface ExperienceItem {
	id: string;
	company: string;
	role: string;
	location: string;
	startDate: string;
	endDate: string;
	current?: boolean;
	description: string;
}

export interface EducationItem {
	id: string;
	institution: string;
	degree: string;
	fieldOfStudy: string;
	location?: string;
	startDate: string;
	endDate: string;
	score?: string;
}

export interface ProjectItem {
	id: string;
	name: string;
	technologies: string;
	link?: string;
	description: string;
}

export interface PersonalInfo {
	fullName: string;
	jobTitle: string;
	email: string;
	phone: string;
	location: string;
	website?: string;
	linkedin?: string;
	github?: string;
	summary: string;
}

export interface ResumeData {
	id?: string;
	title?: string;
	updatedAt?: string;
	templateId?: string;
	personal: PersonalInfo;
	experience: ExperienceItem[];
	education: EducationItem[];
	skills: SkillCategory[] | any[];
	projects: ProjectItem[];
	certificates?: Certificate[];
}

// export interface ResumeTemplateMeta {
// 	id: string;
// 	name: string;
// 	description: string;
// 	category: string;
// 	accentColor?: string;
// 	isPopular?: boolean;
// }


export interface ResumeTemplateMeta {
	id: string;
	name: string;
	description: string;
	category: string;
	image: StaticImageData;
	accentColor?: string;
	isPopular?: boolean;
}