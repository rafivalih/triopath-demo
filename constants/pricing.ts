
import type { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
	{
		id: 'career-boost',
		name: 'Career Boost',
		icon: 'TrendingUp',
		description:
			'Accelerate your job search with optimized materials and focused career guidance.',
		features: [
			'LinkedIn Optimization',
			'Resume Optimization',
			'Job Search Strategy Session',
			'Learning Roadmap',
			'Skill Gap Analysis',
			'Industry Role Overview',
			'Mock Interviews',
			'Career Growth Strategy',
			'Job Apply: Up to 300 Applications',
			'Whatsapp & Email Support',
			'24/7 Priority Support',
			'Basic Portfolio Application',
		],
	},
	{
		id: 'accelerated-growth',
		name: 'Accelerated Growth',
		icon: 'Rocket',
		description:
			'Comprehensive career support to help ambitious professionals grow with clarity and confidence.',
		features: [
			'Resume Optimization',
			'LinkedIn Optimization',
			'Github Optimization with Projects',
			'Career Growth Roadmap',
			'Skill Gap Analysis',
			'Project Guidance',
			'Interview Preparation',
			'Role-Specific Interview Questions',
			'Job Search Strategy',
			'Mock Interviews',
			'Professional Mentorship',
						'Job Apply: Up to 300 Applications',

			'whatsapp & Email Support',
			
			'24/7 Priority Support',
			' Professional Portfolio Application',
		],
		popular: true,
	},
	{
		id: 'career-mastery',
		name: 'Career Mastery',
		icon: 'Crown',
		description:
			'Premium end-to-end career support for professionals ready to take their career to the next level.',
		features: [
			'Resume Optimization',
			'LinkedIn Optimization',
			'Github Optimization with Projects',
			'Career Growth Roadmap',
			'Project Guidance',
			'Skill Gap Analysis',
			'Interview Preparation',
			'Role-Specific Interview Questions',
			'Job Search Strategy',
			'Mock Interviews',
			'Professional Mentorship',
			'Dedicated Recruiter',
			'Leadership Development Plan',
			'1-on-1   Master Guidance Classes',
			'Job Apply: Up to 300 Applications',
			'whatsapp & Email Support',
			'24/7 Priority Support',
			'Custom Client Portfolios',
		],
	},
];

export const pricingByRegion = {
	USA: {
		'career-boost': 199,
		'accelerated-growth': 249,
		'career-mastery': 499,
	},

	India: {
		'career-boost': 4999,
		'accelerated-growth': 13999,
		'career-mastery': 21999,
	},
};