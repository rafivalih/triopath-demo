// import { ResumeTemplateMeta } from "@/types/resume";
// import classictemplate from "@/app/images/resumeTemplateImg/classictemplate.png"
// import professionalcorporate from "@/app/images/resumeTemplateImg/professionalcorporate.png"
// import modernprofesstional from "@/app/images/resumeTemplateImg/modernprofessional.png"
// import minimalist from "@/app/images/resumeTemplateImg/minimalist.png"
// import executiveleadership from "@/app/images/resumeTemplateImg/executiveleadership.png"
// import coropratestandard from "@/app/images/resumeTemplateImg/corporatestandard.png"

// export const RESUME_TEMPLATES: ResumeTemplateMeta[] = [
//   // 1. Classic Professional Resume
//   {
//     id: "classic-professional",
//     name: "Classic Professional",
//     description: "Traditional single-column layout optimized for strict ATS scanning and clean typography",
//   image: classictemplate,
//       category: "ATS",
//     accentColor: "#0f172a",
//     isPopular: true,
//   },

//   // 2. Professional Corporate Resume
//   {
//     id: "professional-corporate",
//     name: "Professional Corporate",
//     description: "Authoritative corporate format featuring solid navy headers and formal dividers",
//     category: "Corporate",
//     accentColor: "#1e3a8a",
//     image: professionalcorporate,
//     isPopular: true,
//   },

//   // 3. Modern Professional Resume
//   {
//     id: "modern-professional",
//     name: "Modern Professional",
//     description: "Contemporary layout with dark slate accents, clean headers, and balanced spacing",
//     category: "Modern",
//     image :modernprofesstional,
//     accentColor: "#1e293b",
//     isPopular: true,
//   },

//   // 4. Minimalist Resume
//   {
//     id: "minimalist-resume",
//     name: "Minimalist",
//     description: "Clean, distraction-free aesthetic with refined letter spacing and centered headers",
//     category: "Minimalist",
//         image :{minimalist},
//     accentColor: "#475569",
//     isPopular: false,
//   },

//   // 5. Executive Leadership Resume
//   {
//     id: "executive-leadership",
//     name: "Executive Leadership",
//     description: "Two-column executive design featuring a dedicated dark sidebar for key competencies",
//     category: "Executive",
//     image:executiveleadership,
//     accentColor: "#2563eb",
//     isPopular: false,
//   },

//   // 6. Corporate Standard Resume
//   {
//     id: "corporate-standard",
//     name: "Corporate Standard",
//     description: "Time-tested corporate standard layout built for mid to senior-level professionals",
//     category: "Corporate",
//     image:coropratestandard,
//     accentColor: "#334155",
//     isPopular: false,
//   },

//   // 7. Technical Professional Resume
//   {
//     id: "technical-professional",
//     name: "Technical Professional",
//     description: "Developer-focused monospace layout showcasing technical stack, repositories, and projects",
//     category: "Creative",
//     accentColor: "#0d9488",
//     isPopular: false,
//   },

//   // 8. Compact Professional Resume
//   {
//     id: "compact-professional",
//     name: "Compact Professional",
//     description: "High-density single-page structure designed for extensive experience and bullet points",
//     category: "ATS",
//     accentColor: "#18181b",
//     isPopular: false,
//   },

//   // 9. Elegant Professional Resume
//   {
//     id: "elegant-professional",
//     name: "Elegant Professional",
//     description: "Sophisticated typography-led layout tailored for consultancy, legal, and academic roles",
//     category: "Minimalist",
//     accentColor: "#3b82f6",
//     isPopular: false,
//   },

//   // 10. Creative Professional Resume
//   {
//     id: "creative-professional",
//     name: "Creative Professional",
//     description: "Dynamic design highlighting portfolios, design skills, and key project metrics",
//     category: "Creative",
//     accentColor: "#7c3aed",
//     isPopular: false,
//   },

//   // 11. Career Pro Resume
//   {
//     id: "career-pro",
//     name: "Career Pro",
//     description: "Structured career advancement format emphasizing leadership and measurable impact",
//     category: "Executive",
//     accentColor: "#0284c7",
//     isPopular: false,
//   },

//   // 12. Modern Tech Resume
//   {
//     id: "modern-tech",
//     name: "Modern Tech",
//     description: "Sleek terminal-inspired layout highlighting engineering skills, GitHub links, and tooling",
//     category: "Creative",
//     accentColor: "#059669",
//     isPopular: false,
//   },

//   // 13. Clean Edge Resume
//   {
//     id: "clean-edge",
//     name: "Clean Edge",
//     description: "Sharp border-defined sections with high-legibility sans-serif hierarchy",
//     category: "Minimalist",
//     accentColor: "#64748b",
//     isPopular: false,
//   },

//   // 14. Future Forward Resume
//   {
//     id: "future-forward",
//     name: "Future Forward",
//     description: "Modernized structure with tech-forward accents and prominent project highlights",
//     category: "Modern",
//     accentColor: "#4f46e5",
//     isPopular: false,
//   },

//   // 15. Elite Professional Resume
//   {
//     id: "elite-professional",
//     name: "Elite Professional",
//     description: "Premium executive layout crafted for directors, principals, and department heads",
//     category: "Executive",
//     accentColor: "#0f766e",
//     isPopular: false,
//   },

//   // ==========================================
//   // ROLE-SPECIFIC CAREER TEMPLATES (16 - 24)
//   // ==========================================
//   // 16. Frontend Developer
//   {
//     id: "frontend-developer",
//     name: "Frontend Developer",
//     description: "Modern UI/UX focused blueprint highlighting React, Next.js, and web technologies",
//     category: "Technical",
//     accentColor: "#0284c7",
//     isPopular: true,
//   },

//   // 17. Backend Developer
//   {
//     id: "backend-developer",
//     name: "Backend Developer",
//     description: "Engineered layout emphasizing API architecture, distributed systems, and databases",
//     category: "Technical",
//     accentColor: "#081432",
//     isPopular: true,
//   },

//   // 18. Full Stack Developer
//   {
//     id: "fullstack-developer",
//     name: "Full Stack Developer",
//     description: "End-to-end framework featuring timeline nodes, metric stats bar, and multi-tier stack",
//     category: "Technical",
//     accentColor: "#4338ca",
//     isPopular: true,
//   },

//   // 19. Software Developer
//   {
//     id: "software-developer",
//     name: "Software Developer",
//     description: "Clean systems layout highlighting algorithms, OOP patterns, and full software lifecycle",
//     category: "Technical",
//     accentColor: "#2563eb",
//     isPopular: false,
//   },

//   // 20. QA Tester
//   {
//     id: "qa-tester",
//     name: "QA Tester / Automation Engineer",
//     description: "Quality assurance layout focusing on automated testing, CI/CD pipelines, and bug metrics",
//     category: "Technical",
//     accentColor: "#059669",
//     isPopular: false,
//   },

//   // 21. Data Analyst
//   {
//     id: "data-analyst",
//     name: "Data Analyst",
//     description: "Analytics-driven template spotlighting SQL, BI dashboards, data warehousing, and ETL",
//     category: "Technical",
//     accentColor: "#d97706",
//     isPopular: false,
//   },

//   // 22. Data Scientist
//   {
//     id: "data-scientist",
//     name: "Data Scientist",
//     description: "Advanced analytics format highlighting statistical modeling, big data pipelines, and research",
//     category: "Technical",
//     accentColor: "#0284c7",
//     isPopular: false,
//   },

//   // 23. AI/ML Engineer
//   {
//     id: "aiml-engineer",
//     name: "AI / ML Engineer",
//     description: "Specialized layout showcasing LLMs, deep learning models, MLOps, and neural architectures",
//     category: "Technical",
//     accentColor: "#7c3aed",
//     isPopular: false,
//   },

//   // 24. Cybersecurity Engineer
//   {
//     id: "cybersecurity-engineer",
//     name: "Cybersecurity Engineer",
//     description: "Security-first format structured around threat modeling, penetration testing, and compliance",
//     category: "Technical",
//     accentColor: "#dc2626",
//     isPopular: false,
//   },
// ];

import type { ResumeTemplateMeta } from '@/types/resume';

// ==========================================
// RESUME TEMPLATE IMAGES
// ==========================================

import aimlengineer from '@/app/images/resumeTemplateImg/aimlengineer.png';
import backenddeveloper from '@/app/images/resumeTemplateImg/backenddeveloper.png';
import careerpro from '@/app/images/resumeTemplateImg/careerpro.png';
import classictemplate from '@/app/images/resumeTemplateImg/classictemplate.png';
import cleanedge from '@/app/images/resumeTemplateImg/cleanedge.png';
import compactprofessional from '@/app/images/resumeTemplateImg/compactprofessional.png';
import coropratestandard from '@/app/images/resumeTemplateImg/corporatestandard.png';
import creativeprofessional from '@/app/images/resumeTemplateImg/creativeprofessional.png';
import cybersecurity from '@/app/images/resumeTemplateImg/cybersecurity.png';
import dataanalyst from '@/app/images/resumeTemplateImg/dataanalyst.png';
import datascientist from '@/app/images/resumeTemplateImg/datascientist.png';
import elegantprofessional from '@/app/images/resumeTemplateImg/elegantprofessional.png';
import eliteprofessional from '@/app/images/resumeTemplateImg/eliteprofessional.png';
import executiveleadership from '@/app/images/resumeTemplateImg/executiveleadership.png';
import frontenddeveloper from '@/app/images/resumeTemplateImg/frontenddeveloper.png';
import fullstackdeveloper from '@/app/images/resumeTemplateImg/fullstackdeveloper.png';
import futureforward from '@/app/images/resumeTemplateImg/futureforward.png';
import minimalist from '@/app/images/resumeTemplateImg/minimalist.png';
import modernprofesstional from '@/app/images/resumeTemplateImg/modernprofessional.png';
import moderntech from '@/app/images/resumeTemplateImg/moderntech.png';
import professionalcorporate from '@/app/images/resumeTemplateImg/professionalcorporate.png';
import qatester from '@/app/images/resumeTemplateImg/qatester.png';
import softwaredeveloper from '@/app/images/resumeTemplateImg/softwaredeveloper.png';
import technicalprofessional from '@/app/images/resumeTemplateImg/technicalprofessional.png';

// ==========================================
// RESUME TEMPLATES
// ==========================================

export const RESUME_TEMPLATES: ResumeTemplateMeta[] = [
	// ==========================================
	// 1 - 6. PROFESSIONAL TEMPLATES
	// ==========================================

	{
		id: 'classic-professional',
		name: 'Classic Professional',
		description:
			'Traditional single-column layout optimized for strict ATS scanning and clean typography',
		image: classictemplate,
		category: 'ATS',
		accentColor: '#0f172a',
		isPopular: true,
	},

	{
		id: 'professional-corporate',
		name: 'Professional Corporate',
		description: 'Authoritative corporate format featuring solid navy headers and formal dividers',
		image: professionalcorporate,
		category: 'Corporate',
		accentColor: '#1e3a8a',
		isPopular: true,
	},

	{
		id: 'modern-professional',
		name: 'Modern Professional',
		description: 'Contemporary layout with dark slate accents, clean headers, and balanced spacing',
		image: modernprofesstional,
		category: 'Modern',
		accentColor: '#1e293b',
		isPopular: true,
	},

	{
		id: 'minimalist-resume',
		name: 'Minimalist',
		description:
			'Clean, distraction-free aesthetic with refined letter spacing and centered headers',
		image: minimalist,
		category: 'Minimalist',
		accentColor: '#475569',
		isPopular: false,
	},

	{
		id: 'executive-leadership',
		name: 'Executive Leadership',
		description:
			'Two-column executive design featuring a dedicated dark sidebar for key competencies',
		image: executiveleadership,
		category: 'Executive',
		accentColor: '#2563eb',
		isPopular: false,
	},

	{
		id: 'corporate-standard',
		name: 'Corporate Standard',
		description:
			'Time-tested corporate standard layout built for mid to senior-level professionals',
		image: coropratestandard,
		category: 'Corporate',
		accentColor: '#334155',
		isPopular: false,
	},

	// ==========================================
	// 7 - 15. GENERAL PROFESSIONAL TEMPLATES
	// ==========================================

	{
		id: 'technical-professional',
		name: 'Technical Professional',
		description:
			'Developer-focused monospace layout showcasing technical stack, repositories, and projects',
		image: technicalprofessional,
		category: 'Creative',
		accentColor: '#0d9488',
		isPopular: false,
	},

	{
		id: 'compact-professional',
		name: 'Compact Professional',
		description:
			'High-density single-page structure designed for extensive experience and bullet points',
		image: compactprofessional,
		category: 'ATS',
		accentColor: '#18181b',
		isPopular: false,
	},

	{
		id: 'elegant-professional',
		name: 'Elegant Professional',
		description:
			'Sophisticated typography-led layout tailored for consultancy, legal, and academic roles',
		image: elegantprofessional,
		category: 'Minimalist',
		accentColor: '#3b82f6',
		isPopular: false,
	},

	{
		id: 'creative-professional',
		name: 'Creative Professional',
		description: 'Dynamic design highlighting portfolios, design skills, and key project metrics',
		image: creativeprofessional,
		category: 'Creative',
		accentColor: '#7c3aed',
		isPopular: false,
	},

	{
		id: 'career-pro',
		name: 'Career Pro',
		description:
			'Structured career advancement format emphasizing leadership and measurable impact',
		image: careerpro,
		category: 'Executive',
		accentColor: '#0284c7',
		isPopular: false,
	},

	{
		id: 'modern-tech',
		name: 'Modern Tech',
		description:
			'Sleek terminal-inspired layout highlighting engineering skills, GitHub links, and tooling',
		image: moderntech,
		category: 'Creative',
		accentColor: '#059669',
		isPopular: false,
	},

	{
		id: 'clean-edge',
		name: 'Clean Edge',
		description: 'Sharp border-defined sections with high-legibility sans-serif hierarchy',
		image: cleanedge,
		category: 'Minimalist',
		accentColor: '#64748b',
		isPopular: false,
	},

	{
		id: 'future-forward',
		name: 'Future Forward',
		description: 'Modernized structure with tech-forward accents and prominent project highlights',
		image: futureforward,
		category: 'Modern',
		accentColor: '#4f46e5',
		isPopular: false,
	},

	{
		id: 'elite-professional',
		name: 'Elite Professional',
		description: 'Premium executive layout crafted for directors, principals, and department heads',
		image: eliteprofessional,
		category: 'Executive',
		accentColor: '#0f766e',
		isPopular: false,
	},

	// ==========================================
	// 16 - 24. ROLE-SPECIFIC CAREER TEMPLATES
	// ==========================================

	{
		id: 'frontend-developer',
		name: 'Frontend Developer',
		description: 'Modern UI/UX focused blueprint highlighting React, Next.js, and web technologies',
		image: frontenddeveloper,
		category: 'Technical',
		accentColor: '#0284c7',
		isPopular: true,
	},

	{
		id: 'backend-developer',
		name: 'Backend Developer',
		description:
			'Engineered layout emphasizing API architecture, distributed systems, and databases',
		image: backenddeveloper,
		category: 'Technical',
		accentColor: '#081432',
		isPopular: true,
	},

	{
		id: 'fullstack-developer',
		name: 'Full Stack Developer',
		description:
			'End-to-end framework featuring timeline nodes, metric stats bar, and multi-tier stack',
		image: fullstackdeveloper,
		category: 'Technical',
		accentColor: '#4338ca',
		isPopular: true,
	},

	{
		id: 'software-developer',
		name: 'Software Developer',
		description:
			'Clean systems layout highlighting algorithms, OOP patterns, and full software lifecycle',
		image: softwaredeveloper,
		category: 'Technical',
		accentColor: '#2563eb',
		isPopular: false,
	},

	{
		id: 'qa-tester',
		name: 'QA Tester / Automation Engineer',
		description:
			'Quality assurance layout focusing on automated testing, CI/CD pipelines, and bug metrics',
		image: qatester,
		category: 'Technical',
		accentColor: '#059669',
		isPopular: false,
	},

	{
		id: 'data-analyst',
		name: 'Data Analyst',
		description:
			'Analytics-driven template spotlighting SQL, BI dashboards, data warehousing, and ETL',
		image: dataanalyst,
		category: 'Technical',
		accentColor: '#d97706',
		isPopular: false,
	},

	{
		id: 'data-scientist',
		name: 'Data Scientist',
		description:
			'Advanced analytics format highlighting statistical modeling, big data pipelines, and research',
		image: datascientist,
		category: 'Technical',
		accentColor: '#0284c7',
		isPopular: false,
	},

	{
		id: 'aiml-engineer',
		name: 'AI / ML Engineer',
		description:
			'Specialized layout showcasing LLMs, deep learning models, MLOps, and neural architectures',
		image: aimlengineer,
		category: 'Technical',
		accentColor: '#7c3aed',
		isPopular: false,
	},

	{
		id: 'cybersecurity-engineer',
		name: 'Cybersecurity Engineer',
		description:
			'Security-first format structured around threat modeling, penetration testing, and compliance',
		image: cybersecurity,
		category: 'Technical',
		accentColor: '#dc2626',
		isPopular: false,
	},
];
