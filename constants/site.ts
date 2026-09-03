

export const siteConfig = {
	name: 'TRIOPATH',
	fullName: 'TRIOPATH Careers',
	tagline: 'Paths for Careers That Move Forward.',
	description:
		'TRIOPATH Careers provides career acceleration, recruitment, staffing, and resume optimization services. The best career agency for students and professionals.',
	url: 'https://triopathcareers.com',
	seoBrandPhrase: 'Triopath Careers Future of Every Candidate',

	contact: {
		hrEmail: 'hema.triopath@gmail.com',
		usaEmail: 'contact@triopathcareers.com',
		indiaEmail: 'india@triopathcareers.com',
		usaPhone: '+1 6303487139',
		indiaPhone: '+91 91214 44844',
	},

	locations: {
		hyderabad: 'HITECH City, Hyderabad, Telangana, India',
		usa: 'Wyoming, USA',
	},

	social: {
		linkedin: 'https://www.linkedin.com/company/triopathcareers/',
		email: 'mailto:contact@triopathcareers.com',
		whatsapp: 'https://wa.me/919876543210',
		facebook: 'https://www.facebook.com/share/1JhRjKndRV/?mibextid=wwXIfr',
		instagram: 'https://www.instagram.com/triopath__careers',
		github: 'https://github.com/triopathsessions-DDD',
		youtube:'www.youtube.com/@TriopathCareers',
	},

	mapUrls: {
		hyderabad:
			'https://www.google.com/maps?q=4th+Floor,+Capital+Tower,+BZ+Space,+N+Convention+Rd,+Surya+Enclave,+HITEC+City,+Hyderabad,+Telangana+500084&output=embed',

		usa:
			'https://www.google.com/maps?q=Wyoming,+USA&output=embed',
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
				description:
					'Career guidance, resume optimization, interview prep',
			},
			{
				label: 'Recruitment & Staffing Services',
				href: '/services/recruitment-staffing',
				description:
					'Talent sourcing, candidate screening, technical hiring',
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
	// {
	// 	label: 'Resume ',
	// 	href: '/resume',
	// 	dropdown: [
	// 		{
	// 			label: 'Browser Templates',
	// 			href: '/resume/templates',
	// 			description: 'Premium notes for every course',
	// 		},
	// 		{
	// 			label: 'Open Editor',
	// 			href: '/resume/builder',
	// 			description: 'Real reviews from real candidates',
	// 		},
	// 		{
	// 			label: 'Know Instructions',
	// 		href: '/resume/instructions',
	// 			description: 'Real reviews from real candidates',
	// 		},
	// 	],
	// },


	{
	label: 'Resume ',
	href: '/resume',
	dropdown: [
		{
			label: 'Browser Templates',
			href: '/resume/templates',
			description: 'Choose resume that fits your style',
		},
		{
			label: 'Open Editor',
			href: '/resume/builder',
			description: 'Build your resume with our editor',
		},
		{
			label: 'Know Instructions',
			href: '/resume/instructions',
			description: 'Learn the key guidelines for an  resume',
		},
	],
},

	// { label: 'Resume', href: '/resume' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'Contact Us', href: '/contact' },
];