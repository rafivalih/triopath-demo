// "use client";

// import React from "react";
// import { ResumeData } from "@/types/resume";

// // 1. Classic & ATS-Friendly Templates
// import { ClassicTemplate } from "./templates/ClassicTemplate";
// import { CompactProfessional } from "./templates/CompactProfessional";

// // 2. Corporate & Executive Templates
// import { ProfessionalCorporate } from "./templates/ProfessionalCorporate";
// import { CorporateStandard } from "./templates/CorporateStandard";
// import { ExecutiveEdge } from "./templates/ExecutiveEdge";
// import { CareerPro } from "./templates/CareerPro";
// import { EliteProfessional } from "./templates/EliteProfessional";

// // 3. Modern & Forward Templates
// import { ModernTemplate } from "./templates/ModernClassic";
// import { FutureForward } from "./templates/FutureForward";

// // 4. Minimalist & Elegant Templates
// import { MinimalElite } from "./templates/MinimalElite";
// import { ElegantProfessional } from "./templates/ElegantProfessional";
// import { CleanEdge } from "./templates/CleanEdge";

// // 5. Tech & Creative Templates
// import { TechProfessional } from "./templates/TechProfessional";
// import { ModernTech } from "./templates/ModernTech";
// import { CreativeProfessional } from "./templates/CreativeProfessional";

// // 6. Role-Specific Career Templates
// import { FrontendDeveloper } from "./templates/career-templates/FrontendDeveloper";
// import { BackendDeveloper } from "./templates/career-templates/BackendDeveloper";
// import { FullStackDeveloper } from "./templates/career-templates/FullStackDeveloper";

// interface ResumeTemplateRendererProps {
//   templateId: string;
//   data: ResumeData;
// }

// export const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({
//   templateId,
//   data,
// }) => {
//   switch (templateId) {
//     // 1. Classic Professional Resume
//     case "classic-professional":
//     case "classic":
//     case "ats-classic":
//       return <ClassicTemplate data={data} />;

//     // 2. Professional Corporate Resume
//     case "professional-corporate":
//       return <ProfessionalCorporate data={data} />;

//     // 3. Modern Professional Resume
//     case "modern-professional":
//     case "modern":
//     case "modern-classic":
//       return <ModernTemplate data={data} />;

//     // 4. Minimalist Resume
//     case "minimalist-resume":
//     case "minimal-elite":
//     case "elegant-career":
//       return <MinimalElite data={data} />;

//     // 5. Executive Leadership Resume
//     case "executive-leadership":
//     case "executive-edge":
//     case "corporate-rise":
//       return <ExecutiveEdge data={data} />;

//     // 6. Corporate Standard Resume
//     case "corporate-standard":
//       return <CorporateStandard data={data} />;

//     // 7. Technical Professional Resume
//     case "technical-professional":
//     case "tech-professional":
//       return <TechProfessional data={data} />;

//     // 8. Compact Professional Resume
//     case "compact-professional":
//       return <CompactProfessional data={data} />;

//     // 9. Elegant Professional Resume
//     case "elegant-professional":
//       return <ElegantProfessional data={data} />;

//     // 10. Creative Professional Resume
//     case "creative-professional":
//       return <CreativeProfessional data={data} />;

//     // 11. Career Pro Resume
//     case "career-pro":
//       return <CareerPro data={data} />;

//     // 12. Modern Tech Resume
//     case "modern-tech":
//       return <ModernTech data={data} />;

//     // 13. Clean Edge Resume
//     case "clean-edge":
//       return <CleanEdge data={data} />;

//     // 14. Future Forward Resume
//     case "future-forward":
//       return <FutureForward data={data} />;

//     // 15. Elite Professional Resume
//     case "elite-professional":
//     case "professional-prime":
//       return <EliteProfessional data={data} />;

//     // ==========================================
//     // Role-Specific Career Templates
//     // ==========================================
//     // 16. Frontend Developer
//     case "frontend-developer":
//     case "frontend":
//       return <FrontendDeveloper data={data} />;

//     // 17. Backend Developer
//     case "backend-developer":
//     case "backend":
//       return <BackendDeveloper data={data} />;

//     // 18. Full Stack Developer
//     case "fullstack-developer":
//     case "fullstack":
//       return <FullStackDeveloper data={data} />;

//     // 19. Software Developer
//     case "software-developer":
//     case "software":
//       return <FullStackDeveloper data={data} />;

//     // 20. QA Tester
//     case "qa-tester":
//     case "qa-engineer":
//       return <BackendDeveloper data={data} />;

//     // 21. Data Analyst
//     case "data-analyst":
//       return <FrontendDeveloper data={data} />;

//     // 22. Data Scientist
//     case "data-scientist":
//       return <BackendDeveloper data={data} />;

//     // 23. AI/ML Engineer
//     case "aiml-engineer":
//     case "ai-engineer":
//       return <FullStackDeveloper data={data} />;

//     // 24. Cybersecurity Engineer
//     case "cybersecurity-engineer":
//     case "security-engineer":
//       return <BackendDeveloper data={data} />;

//     // Default Fallback
//     default:
//       return <ClassicTemplate data={data} />;
//   }
// };

// export default ResumeTemplateRenderer;

'use client';

import type React from 'react';
import type { ResumeData } from '@/types/resume';
import { CareerPro } from './templates/CareerPro';
// 1. Classic & ATS-Friendly Templates
import { ClassicTemplate } from './templates/ClassicTemplate';
import { CleanEdge } from './templates/CleanEdge';
import { CompactProfessional } from './templates/CompactProfessional';
import { CorporateStandard } from './templates/CorporateStandard';
import { CreativeProfessional } from './templates/CreativeProfessional';
import AIMLEngineer from './templates/career-templates/AIMLEngineer';
import { BackendDeveloper } from './templates/career-templates/BackendDeveloper';
import CyberSecurityEngineer from './templates/career-templates/CybersecurityEngineer';
import DataAnalyst from './templates/career-templates/DataAnalyst';
import DataScientist from './templates/career-templates/DataScientist';
// 6. Role-Specific Career Templates
import { FrontendDeveloper } from './templates/career-templates/FrontendDeveloper';
import { FullStackDeveloper } from './templates/career-templates/FullStackDeveloper';
import QATester from './templates/career-templates/QATester';
import { SoftwareDeveloper } from './templates/career-templates/SoftwareDeveloper';
import { ElegantProfessional } from './templates/ElegantProfessional';
import { EliteProfessional } from './templates/EliteProfessional';
import { ExecutiveEdge } from './templates/ExecutiveEdge';
import { FutureForward } from './templates/FutureForward';
// 4. Minimalist & Elegant Templates
import { MinimalElite } from './templates/MinimalElite';
// 3. Modern & Forward Templates
import { ModernTemplate } from './templates/ModernClassic';
import { ModernTech } from './templates/ModernTech';
// 2. Corporate & Executive Templates
import { ProfessionalCorporate } from './templates/ProfessionalCorporate';
// 5. Tech & Creative Templates
import { TechProfessional } from './templates/TechProfessional';

interface ResumeTemplateRendererProps {
	templateId: string;
	data: ResumeData;
}

export const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({
	templateId,
	data,
}) => {
	switch (templateId) {
		// 1. Classic Professional Resume
		case 'classic-professional':
		case 'classic':
		case 'ats-classic':
			return <ClassicTemplate data={data} />;

		// 2. Professional Corporate Resume
		case 'professional-corporate':
			return <ProfessionalCorporate data={data} />;

		// 3. Modern Professional Resume
		case 'modern-professional':
		case 'modern':
		case 'modern-classic':
			return <ModernTemplate data={data} />;

		// 4. Minimalist Resume
		case 'minimalist-resume':
		case 'minimal-elite':
		case 'elegant-career':
			return <MinimalElite data={data} />;

		// 5. Executive Leadership Resume
		case 'executive-leadership':
		case 'executive-edge':
		case 'corporate-rise':
			return <ExecutiveEdge data={data} />;

		// 6. Corporate Standard Resume
		case 'corporate-standard':
			return <CorporateStandard data={data} />;

		// 7. Technical Professional Resume
		case 'technical-professional':
		case 'tech-professional':
			return <TechProfessional data={data} />;

		// 8. Compact Professional Resume
		case 'compact-professional':
			return <CompactProfessional data={data} />;

		// 9. Elegant Professional Resume
		case 'elegant-professional':
			return <ElegantProfessional data={data} />;

		// 10. Creative Professional Resume
		case 'creative-professional':
			return <CreativeProfessional data={data} />;

		// 11. Career Pro Resume
		case 'career-pro':
			return <CareerPro data={data} />;

		// 12. Modern Tech Resume
		case 'modern-tech':
			return <ModernTech data={data} />;

		// 13. Clean Edge Resume
		case 'clean-edge':
			return <CleanEdge data={data} />;

		// 14. Future Forward Resume
		case 'future-forward':
			return <FutureForward data={data} />;

		// 15. Elite Professional Resume
		case 'elite-professional':
		case 'professional-prime':
			return <EliteProfessional data={data} />;

		// ==========================================
		// Role-Specific Career Templates
		// ==========================================
		// 16. Frontend Developer
		case 'frontend-developer':
		case 'frontend':
			return <FrontendDeveloper data={data} />;

		// 17. Backend Developer
		case 'backend-developer':
		case 'backend':
			return <BackendDeveloper data={data} />;

		// 18. Full Stack Developer
		case 'fullstack-developer':
		case 'fullstack':
			return <FullStackDeveloper data={data} />;

		// 19. Software Developer
		case 'software-developer':
		case 'software':
			return <SoftwareDeveloper data={data} />;

		// 20. QA Tester
		case 'qa-tester':
		case 'qa-engineer':
			return <QATester data={data} />;

		// 21. Data Analyst
		case 'data-analyst':
			return <DataAnalyst data={data} />;

		// 22. Data Scientist
		case 'data-scientist':
			return <DataScientist data={data} />;

		// 23. AI/ML Engineer
		case 'aiml-engineer':
		case 'ai-engineer':
			return <AIMLEngineer data={data} />;

		// 24. Cybersecurity Engineer
		case 'cybersecurity-engineer':
		case 'security-engineer':
			return <CyberSecurityEngineer data={data} />;

		// Default Fallback
		default:
			return <ClassicTemplate data={data} />;
	}
};

export default ResumeTemplateRenderer;
