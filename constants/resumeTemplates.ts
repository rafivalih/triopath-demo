export interface ResumeTemplateOption {
  id: string;
  name: string;
  description: string;
  badge?: string;
}

export const RESUME_TEMPLATES: ResumeTemplateOption[] = [
  {
    id: 'classic',
    name: 'Classic ATS',
    description: 'Single-column, clean ATS-compliant typography layout',
  },
  {
    id: 'modern',
    name: 'Modern Accent',
    description: 'Two-column layout with dark slate banner header',
  },
  {
    id: 'executive-edge',
    name: 'Executive Edge',
    description: 'Corporate two-column structure with deep navy palette',
  },
  {
    id: 'minimal-elite',
    name: 'Minimal Elite',
    description: 'Lightweight, typography-focused minimalist style',
  },
  {
    id: 'tech-professional',
    name: 'Tech Professional',
    description: 'Engineered layout focused on skills and code repositories',
  },
];