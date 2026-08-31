export interface Service {
	id: string;
	icon: string;
	title: string;
	description: string;
	features: string[];
}

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	content: string;
	category: string;
	date: string;
	author: string;
	image: string;
	readTime: string;
}

export interface StudyMaterial {
	id: string;
	title: string;
	category: string;
	description: string;
	icon: string;
	pages: number;
	rating: number;
	// price:number;
	price: string | number;
	originalPrice: number;
}

export interface Review {
	id: string;
	name: string;
	role: string;
	message: string;
	rating: number;
	proofUrl: string;
	accentColor: string;
}

export interface ResumeTemplate {
	id: string;
	name: string;
	description: string;
	preview: string;
	accent: string;
}

export interface PricingPlan {
	id: string;
	name: string;
	icon: string;
	description: string;
	features: string[];
	popular?: boolean;
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface Job {
	id: string;
	title: string;
	company: string;
	location: string;
	type: string;
	experience: string;
	salary: string;
	skills: string[];
	description: string;
	postedDate: string;
}
