export const siteConfig = {
  name: 'TRIOPATH',
  fullName: 'TRIOPATH Careers',
  tagline: 'Paths for Careers That Move Forward.',
  description:
    'TRIOPATH Careers provides career acceleration, recruitment, staffing, and resume optimization services. The best career agency for students and professionals.',
  url: 'https://triopathcareers.com',
  seoBrandPhrase: 'Triopath Careers Future of Every Candidate',
  contact: {
    hrEmail: 'hr@triopathcareers.com',
    usaEmail: 'contact@triopathcareers.com',
    indiaEmail: 'india@triopathcareers.com',
    usaPhone: '+1 (415) 555-0192',
    indiaPhone: '+91 98765 43210',
  },
  locations: {
    usa: 'San Francisco, CA, USA',
    hyderabad: 'HITECH City, Hyderabad, Telangana, India',
    bengaluru: 'Hebbal, Bengaluru, Karnataka, India',
  },
  social: {
    linkedin: 'https://linkedin.com',
    email: 'mailto:contact@triopathcareers.com',
    whatsapp: 'https://wa.me/919876543210',
    x: 'https://x.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    github: 'https://github.com',
  },
  mapUrls: {
    hyderabad:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7!2d78.3772!3d17.4435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzM2LjYiTiA3OMKwMjInMjEuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    bengaluru:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5946!3d13.0358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzA4LjkiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/about' },
  {
    label: 'Services',
    href: '/services/career-acceleration',
    dropdown: [
      {
        label: 'Triopath Career Acceleration Services',
        href: '/services/career-acceleration',
        description: 'Career guidance, resume optimization, interview prep',
      },
      {
        label: 'Recruitment & Staffing Services',
        href: '/services/recruitment-staffing',
        description: 'Talent sourcing, candidate screening, technical hiring',
      },
    ],
  },
  { label: 'Insights', href: '/insights' },
  {
    label: 'More ',
    href: '/study-materials',
    dropdown: [
      {
        label: 'Study Materials Store',
        href: '/study-materials',
        description: 'Premium notes for every course',
      },
      {
        label: 'Success Stories',
        href: '/success-stories',
        description: 'Real reviews from real candidates',
      },
    ],
  },
  { label: 'Resume', href: '/resume' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact Us', href: '/contact' },
];
