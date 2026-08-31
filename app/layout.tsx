// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Navbar } from "@/components/layout/Navbar";

// import ResumeProvider from "@/components/resume/ResumeProvider";
// import { Footer } from "@/components/layout/Footer";
// import logo from "../app/images/favicon.png";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// export const metadata: Metadata = {
// 	title: {
// 		default: "Triopath Careers | Paths for Careers That Move Forward",
// 		template: "%s | TRIOPATH Careers",
// 	},
// 	description:
// 		"TRIOPATH Careers helps professionals accelerate their careers through expert guidance, resume optimization, recruitment, and meaningful opportunities.",
// 	keywords: [
// 		"career guidance",
// 		"resume optimization",
// 		"recruitment and staffing",
// 		"career agency",
// 		"job finding",
// 		"resume builder",
// 		"best Career guidance",
// 		"Top Careers Agency",
// 	],
// 	openGraph: {
// 		title: "TRIOPATH Careers | Paths for Careers That Move Forward",
// 		description: "The future of every candidate starts with the right path.",
// 		type: "website",
// 		siteName: "TRIOPATH Careers",
// 		images: [
// 			{
// 				url: logo.src,
// 				width: 1200,
// 				height: 630,
// 				alt: "TRIOPATH Careers",
// 			},
// 		],
// 	},
// 	twitter: {
// 		card: "summary_large_image",
// 		title: "TRIOPATH Careers",
// 		description: "Paths for Careers That Move Forward.",
// 	},
// 	robots: { index: true, follow: true },
// };

// export default function RootLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<html lang="en">
// 			<body className={inter.className}>
// 				<ResumeProvider>
// 					<Navbar />
// 					<main className="min-h-screen">{children}</main>
// 					<Footer />
// 				</ResumeProvider>
// 			</body>
// 		</html>
// 	);
// }

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConditionalFooter } from '@/components/layout/ConditionalFooter';
import { Navbar } from '@/components/layout/Navbar';
import ResumeProvider from '@/components/resume/ResumeProvider';
import logo from '../app/images/favicon.png';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: {
		default: 'Triopath Careers | Paths for Careers That Move Forward',
		template: '%s | TRIOPATH Careers',
	},
	description:
		'TRIOPATH Careers helps professionals accelerate their careers through expert guidance, resume optimization, recruitment, and meaningful opportunities.',
	keywords: [
		'career guidance',
		'resume optimization',
		'recruitment and staffing',
		'career agency',
		'job finding',
		'resume builder',
		'best Career guidance',
		'Top Careers Agency',
	],
	openGraph: {
		title: 'TRIOPATH Careers | Paths for Careers That Move Forward',
		description: 'The future of every candidate starts with the right path.',
		type: 'website',
		siteName: 'TRIOPATH Careers',
		images: [
			{
				url: logo.src,
				width: 1200,
				height: 630,
				alt: 'TRIOPATH Careers',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TRIOPATH Careers',
		description: 'Paths for Careers That Move Forward.',
	},
	robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ResumeProvider>
					{/* Navbar shows on all pages */}
					<Navbar />
					<main className="min-h-screen">{children}</main>
					{/* Footer is hidden only on /resume/builder */}
					<ConditionalFooter />
				</ResumeProvider>
			</body>
		</html>
	);
}
