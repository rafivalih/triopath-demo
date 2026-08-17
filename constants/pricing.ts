import type { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'profile-foundation',
    name: 'Profile Foundation',
    icon: 'Sparkles',
    description: 'Perfect for getting started with professional career branding.',
    features: [
      'Professional resume review',
      'LinkedIn profile optimization',
      'Basic career assessment',
      'Email support',
      '1 career consultation session',
    ],
  },
  {
    id: 'career-boost',
    name: 'Career Boost',
    icon: 'TrendingUp',
    description: 'Accelerate your job search with optimized materials and guidance.',
    features: [
      'ATS-optimized resume',
      'Cover letter template',
      'Job search strategy session',
      '2 mock interview sessions',
      'Skill gap analysis',
      'Priority email support',
    ],
  },
  {
    id: 'guided-job-hunt',
    name: 'Guided Job Hunt',
    icon: 'Target',
    description: 'Complete job search support with dedicated career guidance.',
    features: [
      'Everything in Career Boost',
      'Dedicated career coach',
      'Weekly job matching reports',
      '5 mock interview sessions',
      'Salary negotiation coaching',
      'Application tracking dashboard',
      'Priority support',
    ],
    popular: true,
  },
  {
    id: 'accelerated-growth',
    name: 'Accelerated Growth',
    icon: 'Rocket',
    description: 'Comprehensive career development for ambitious professionals.',
    features: [
      'Everything in Guided Job Hunt',
      'Personal branding strategy',
      'Portfolio development guidance',
      'Industry mentor matching',
      'Unlimited mock interviews',
      'Career transition support',
      'Priority support',
    ],
  },
  {
    id: 'career-mastery',
    name: 'Career Mastery',
    icon: 'Crown',
    description: 'Premium end-to-end career management for senior professionals.',
    features: [
      'Everything in Accelerated Growth',
      'Executive coaching sessions',
      'Personal brand building',
      'Network expansion strategy',
      'Leadership development plan',
      'Quarterly career reviews',
      'Dedicated account manager',
      '24/7 priority support',
    ],
  },
];

export const pricingByRegion = {
  USA: {
    'profile-foundation': 29,
    'career-boost': 59,
    'guided-job-hunt': 99,
    'accelerated-growth': 149,
    'career-mastery': 249,
  },
  India: {
    'profile-foundation': 2499,
    'career-boost': 4999,
    'guided-job-hunt': 8999,
    'accelerated-growth': 13999,
    'career-mastery': 21999,
  },
};
