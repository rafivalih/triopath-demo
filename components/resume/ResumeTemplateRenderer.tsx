// 'use client';

// import React from 'react';
// import { ResumeData } from '@/types/resume';

// // 1. Classic & ATS-Friendly Templates
// import { ClassicTemplate } from './templates/ClassicTemplate';
// import { CompactProfessional } from './templates/CompactProfessional';

// // 2. Corporate & Executive Templates
// import { ProfessionalCorporate } from './templates/ProfessionalCorporate';
// import { CorporateStandard } from './templates/CorporateStandard';
// import { ExecutiveEdge } from './templates/ExecutiveEdge';
// import { CareerPro } from './templates/CareerPro';
// import { EliteProfessional } from './templates/EliteProfessional';

// // 3. Modern & Forward Templates
// import { ModernTemplate } from './templates/ModernClassic';
// import { FutureForward } from './templates/FutureForward';

// // 4. Minimalist & Elegant Templates
// import { MinimalElite } from './templates/MinimalElite';
// import { ElegantProfessional } from './templates/ElegantProfessional';
// import { CleanEdge } from './templates/CleanEdge';

// // 5. Tech & Creative Templates
// import { TechProfessional } from './templates/TechProfessional';
// import { ModernTech } from './templates/ModernTech';
// import { CreativeProfessional } from './templates/CreativeProfessional';
// import { FrontendDeveloper } from './templates/career-templates/FrontendDeveloper';

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
//     case 'classic-professional':
//     case 'classic':
//     case 'ats-classic':
//       return <ClassicTemplate data={data} />;

//     // 2. Professional Corporate Resume
//     case 'professional-corporate':
//       return <ProfessionalCorporate data={data} />;

//     // 3. Modern Professional Resume
//     case 'modern-professional':
//     case 'modern':
//     case 'modern-classic':
//       return <ModernTemplate data={data} />;

//     // 4. Minimalist Resume
//     case 'minimalist-resume':
//     case 'minimal-elite':
//     case 'elegant-career':
//       return <MinimalElite data={data} />;

//     // 5. Executive Leadership Resume
//     case 'executive-leadership':
//     case 'executive-edge':
//     case 'corporate-rise':
//       return <ExecutiveEdge data={data} />;

//     // 6. Corporate Standard Resume
//     case 'corporate-standard':
//       return <CorporateStandard data={data} />;

//     // 7. Technical Professional Resume
//     case 'technical-professional':
//     case 'tech-professional':
//       return <TechProfessional data={data} />;

//     // 8. Compact Professional Resume
//     case 'compact-professional':
//       return <CompactProfessional data={data} />;

//     // 9. Elegant Professional Resume
//     case 'elegant-professional':
//       return <ElegantProfessional data={data} />;

//     // 10. Creative Professional Resume
//     case 'creative-professional':
//       return <CreativeProfessional data={data} />;

//     // 11. Career Pro Resume
//     case 'career-pro':
//       return <CareerPro data={data} />;

//     // 12. Modern Tech Resume
//     case 'modern-tech':
//       return <ModernTech data={data} />;

//     // 13. Clean Edge Resume
//     case 'clean-edge':
//       return <CleanEdge data={data} />;

//     // 14. Future Forward Resume
//     case 'future-forward':
//       return <FutureForward data={data} />;

//     // 15. Elite Professional Resume
//     case 'elite-professional':
//     case 'professional-prime':
//       return <EliteProfessional data={data} />;

//     case 'frontend-developer':
//   return <FrontendDeveloper data={data} />;


//     // Default Fallback
//     default:
//       return <ClassicTemplate data={data} />;
//   }
// };

// export default ResumeTemplateRenderer;

























'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

// 1. Classic & ATS-Friendly Templates
import { ClassicTemplate } from './templates/ClassicTemplate';
import { CompactProfessional } from './templates/CompactProfessional';

// 2. Corporate & Executive Templates
import { ProfessionalCorporate } from './templates/ProfessionalCorporate';
import { CorporateStandard } from './templates/CorporateStandard';
import { ExecutiveEdge } from './templates/ExecutiveEdge';
import { CareerPro } from './templates/CareerPro';
import { EliteProfessional } from './templates/EliteProfessional';

// 3. Modern & Forward Templates
import { ModernTemplate } from './templates/ModernClassic';
import { FutureForward } from './templates/FutureForward';

// 4. Minimalist & Elegant Templates
import { MinimalElite } from './templates/MinimalElite';
import { ElegantProfessional } from './templates/ElegantProfessional';
import { CleanEdge } from './templates/CleanEdge';

// 5. Tech & Creative Templates
import { TechProfessional } from './templates/TechProfessional';
import { ModernTech } from './templates/ModernTech';
import { CreativeProfessional } from './templates/CreativeProfessional';

// 6. Role-Specific Career Templates
import { FrontendDeveloper } from './templates/career-templates/FrontendDeveloper';
import { BackendDeveloper } from './templates/career-templates/BackendDeveloper';

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

    // 16. Frontend Developer Resume
    case 'frontend-developer':
    case 'frontend':
      return <FrontendDeveloper data={data} />;

    // 17. Backend Developer Resume
    case 'backend-developer':
    case 'backend':
      return <BackendDeveloper data={data} />;

    // Default Fallback
    default:
      return <ClassicTemplate data={data} />;
  }
};

export default ResumeTemplateRenderer;