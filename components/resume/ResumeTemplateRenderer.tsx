//     'use client';

// import React from 'react';
// import { ResumeData } from '@/types/resume';

// // Template Imports
// import { ModernTemplate } from './templates/ModernClassic';
// import { ExecutiveEdge } from './templates/ExecutiveEdge';
// import { MinimalElite } from './templates/MinimalElite';
// import { ATSClassic } from './templates/ATSClassic';
// import { TechProfessional } from './templates/TechProfessional';

// // If you have created the remaining 5 templates, you can import them here:
// // import { ProfessionalPrime } from './templates/ProfessionalPrime';
// // import { CareerPro } from './templates/CareerPro';
// // import { CorporateRise } from './templates/CorporateRise';
// // import { ElegantCareer } from './templates/ElegantCareer';
// // import { FutureForward } from './templates/FutureForward';

// interface ResumeTemplateRendererProps {
//   templateId: string;
//   data: ResumeData;
// }

// export const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({
//   templateId,
//   data,
// }) => {
//   switch (templateId) {
//     case 'executive-edge':
//       return <ExecutiveEdge data={data} />;

//     case 'minimal-elite':
//       return <MinimalElite data={data} />;

//     case 'ats-classic':
//       return <ATSClassic data={data} />;

//     case 'tech-professional':
//       return <TechProfessional data={data} />;

//     case 'corporate-rise':
//       // Fallback to ExecutiveEdge if CorporateRise isn't created yet
//       return <ExecutiveEdge data={data} />;

//     case 'elegant-career':
//       // Fallback to MinimalElite if ElegantCareer isn't created yet
//       return <MinimalElite data={data} />;

//     case 'career-pro':
//     case 'future-forward':
//     case 'professional-prime':
//     case 'modern-classic':
//     default:
//       return <ModernTemplate data={data} />;
//   }
// };

// export default ResumeTemplateRenderer;
























'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

// Template Imports
import { ModernTemplate } from './templates/ModernClassic';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { ExecutiveEdge } from './templates/ExecutiveEdge';
import { MinimalElite } from './templates/MinimalElite';
import { ATSClassic } from './templates/ATSClassic';
import { TechProfessional } from './templates/TechProfessional';

// If you have created the remaining templates, import them here:
// import { ProfessionalPrime } from './templates/ProfessionalPrime';
// import { CareerPro } from './templates/CareerPro';
// import { CorporateRise } from './templates/CorporateRise';
// import { ElegantCareer } from './templates/ElegantCareer';
// import { FutureForward } from './templates/FutureForward';

interface ResumeTemplateRendererProps {
  templateId: string;
  data: ResumeData;
}

export const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({
  templateId,
  data,
}) => {
  switch (templateId) {
    // 1. Classic & ATS-Friendly Format
    case 'classic':
    case 'ats-classic':
      return <ClassicTemplate data={data} />;

    // 2. Executive / Corporate Styles
    case 'executive-edge':
    case 'corporate-rise':
      return <ExecutiveEdge data={data} />;

    // 3. Minimalist Styles
    case 'minimal-elite':
    case 'elegant-career':
      return <MinimalElite data={data} />;

    // 4. Tech / Developer Specific
    case 'tech-professional':
      return <TechProfessional data={data} />;

    // 5. Modern Templates & Default Fallback
    case 'modern':
    case 'modern-classic':
    case 'career-pro':
    case 'future-forward':
    case 'professional-prime':
    default:
      return <ModernTemplate data={data} />;
  }
};

export default ResumeTemplateRenderer;