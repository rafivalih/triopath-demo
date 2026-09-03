// import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { siteConfig } from "@/constants/site";
// import logo from "../../app/images/favicon.png";
// import PrivacyPolicy from "@/components/ui/PrivacyPolicy";
// import TermsAndCondition from "@/components/ui/TermsAndCondition";
// import { NewsletterForm } from "./NewsletterForm";

// export function Footer() {
// 	return (
// 		<footer className="navy-gradient relative overflow-hidden text-white">
// 			<div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
// 			<div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

// 			<div className="relative mx-auto max-w-[1400px] px-4 pb-6 pt-16 sm:px-6 lg:px-8">
// 				<div className="grid grid-cols-2 gap-2 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
// 					{/* Logo / About */}
// 					<div className="col-span-2 lg:col-span-1">
// 						<Link href="/" className="flex items-center gap-2.5">
// 							<Image
// 								src={logo}
// 								alt="TRIOPATH logo"
// 								width={24}
// 								height={24}
// 								className="h-6 w-6 object-contain"
// 							/>

// 							<span className="text-lg font-bold tracking-[0.12em]">
// 								TRIOPATH
// 							</span>
// 						</Link>

// 						<p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
// 							{siteConfig.tagline} Empowering professionals and connecting
// 							exceptional talent with meaningful opportunities.
// 						</p>

// 						<Link
// 							href="/about"
// 							className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-accent"
// 						>
// 							Discover our story
// 							<ArrowUpRight className="h-4 w-4" />
// 						</Link>
// 					</div>

// 					{/* Quick Links */}
// 					<div className="col-span-1 lg:col-span-1 mb-8">
// 						<h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/50">
// 							Quick Links
// 						</h3>

// 						<ul className="space-y-3 text-sm text-white/70">
// 							<li>
// 								<Link href="/" className="transition-colors hover:text-white">
// 									Home
// 								</Link>
// 							</li>

// 							<li>
// 								<Link
// 									href="/about"
// 									className="transition-colors hover:text-white"
// 								>
// 									Who We Are
// 								</Link>
// 							</li>

// 							<li>
// 								<Link
// 									href="/services/career-acceleration"
// 									className="transition-colors hover:text-white"
// 								>
// 									Services
// 								</Link>
// 							</li>

// 							<li>
// 								<Link
// 									href="/insights"
// 									className="transition-colors hover:text-white"
// 								>
// 									Insights
// 								</Link>
// 							</li>

// 							<li>
// 								<Link
// 									href="/pricing"
// 									className="transition-colors hover:text-white"
// 								>
// 									Pricing
// 								</Link>
// 							</li>

// 							<li>
// 								<Link
// 									href="/contact"
// 									className="transition-colors hover:text-white"
// 								>
// 									Contact
// 								</Link>
// 							</li>

// 							<li>
// 								<Link
// 									href="/#FAQ"
// 									className="transition-colors hover:text-white"
// 								>
// 									FAQ's
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>

// 					{/* Our Contact */}
// 					<div className="col-span-1 lg:col-span-1">
// 						<h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/50">
// 							Our Contact
// 						</h3>

// 						<ul className="space-y-4 text-sm text-white/70">
// 							<li className="flex gap-3">
// 								<Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

// 								<a
// 									href={`tel:${siteConfig.contact.usaPhone}`}
// 									className="break-words hover:text-white"
// 								>
// 									{siteConfig.contact.usaPhone}
// 									<span className="block text-xs text-white/40">USA</span>
// 								</a>
// 							</li>

// 							<li className="flex gap-3">
// 								<Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

// 								<a
// 									href={`tel:${siteConfig.contact.indiaPhone}`}
// 									className="break-words hover:text-white"
// 								>
// 									{siteConfig.contact.indiaPhone}
// 									<span className="block text-xs text-white/40">India</span>
// 								</a>
// 							</li>

// 							<li className="flex gap-3">
// 								<Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

// 								<a
// 									href={`mailto:${siteConfig.contact.usaEmail}`}
// 									className="break-all hover:text-white"
// 								>
// 									{siteConfig.contact.usaEmail}
// 								</a>
// 							</li>
// 						</ul>
// 					</div>

// 					{/* Newsletter */}
// 					<div className="col-span-2 lg:col-span-1">
// 						<h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
// 							Stay in the loop
// 						</h3>

// 						<p className="mb-5 text-sm leading-relaxed text-white/60">
// 							Practical career insights, delivered monthly.
// 						</p>

// 						<NewsletterForm />

// 						<div className="mt-5 flex items-center gap-3 text-white/50">
// 							<MapPin className="h-4 w-4 text-accent" />

// 							<span className="text-xs">Hyderabad · San Francisco</span>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Bottom */}
// 				<div className="flex flex-col gap-4 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
// 					<p>Copyright © 2025 TRIOPATH Careers. All Rights Reserved.</p>

// 					<div className="flex gap-5">
// 						<Link href="/privacy-policy" className="hover:text-white">
// 							Privacy Policy
// 						</Link>

// 						<Link href="/terms-and-condition" className="hover:text-white">
// 							Terms & Condition
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }




"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/constants/site";
import logo from "../../app/images/favicon.png";
import PrivacyPolicy from "@/components/ui/PrivacyPolicy";
import TermsAndCondition from "@/components/ui/TermsAndCondition";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
	const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
	const [showTerms, setShowTerms] = useState(false);

	return (
		<>
			<footer className="navy-gradient relative overflow-hidden text-white">
				<div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

				<div className="relative mx-auto max-w-[1400px] px-4 pb-6 pt-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 gap-2 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
						{/* Logo / About */}
						<div className="col-span-2 lg:col-span-1">
							<Link href="/" className="flex items-center gap-2.5">
								<Image
									src={logo}
									alt="TRIOPATH logo"
									width={24}
									height={24}
									className="h-6 w-6 object-contain"
								/>

								<span className="text-lg font-bold tracking-[0.12em]">
									TRIOPATH
								</span>
							</Link>

							<p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
								{siteConfig.tagline} Empowering professionals and connecting
								exceptional talent with meaningful opportunities.
							</p>

							<Link
								href="/about"
								className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-accent"
							>
								Discover our story
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</div>

						{/* Quick Links */}
						<div className="col-span-1 mb-8 lg:col-span-1">
							<h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/50">
								Quick Links
							</h3>

							<ul className="space-y-3 text-sm text-white/70">
								<li>
									<Link
										href="/"
										className="transition-colors hover:text-white"
									>
										Home
									</Link>
								</li>

								<li>
									<Link
										href="/about"
										className="transition-colors hover:text-white"
									>
										Who We Are
									</Link>
								</li>

								<li>
									<Link
										href="/services/career-acceleration"
										className="transition-colors hover:text-white"
									>
										Services
									</Link>
								</li>

								<li>
									<Link
										href="/insights"
										className="transition-colors hover:text-white"
									>
										Insights
									</Link>
								</li>

								<li>
									<Link
										href="/pricing"
										className="transition-colors hover:text-white"
									>
										Pricing
									</Link>
								</li>

								<li>
									<Link
										href="/contact"
										className="transition-colors hover:text-white"
									>
										Contact
									</Link>
								</li>

								<li>
									<Link
										href="/#FAQ"
										className="transition-colors hover:text-white"
									>
										FAQ's
									</Link>
								</li>
							</ul>
						</div>

						{/* Our Contact */}
						<div className="col-span-1 lg:col-span-1">
							<h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/50">
								Our Contact
							</h3>

							<ul className="space-y-4 text-sm text-white/70">
								<li className="flex gap-3">
									<Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

									<a
										href={`tel:${siteConfig.contact.usaPhone}`}
										className="break-words hover:text-white"
									>
										{siteConfig.contact.usaPhone}
										<span className="block text-xs text-white/40">USA</span>
									</a>
								</li>

								<li className="flex gap-3">
									<Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

									<a
										href={`tel:${siteConfig.contact.indiaPhone}`}
										className="break-words hover:text-white"
									>
										{siteConfig.contact.indiaPhone}
										<span className="block text-xs text-white/40">India</span>
									</a>
								</li>

								<li className="flex gap-3">
									<Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

									<a
										href={`mailto:${siteConfig.contact.usaEmail}`}
										className="break-all hover:text-white"
									>
										{siteConfig.contact.usaEmail}
									</a>
								</li>
							</ul>
						</div>

						{/* Newsletter */}
						<div className="col-span-2 lg:col-span-1">
							<h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
								Stay in the loop
							</h3>

							<p className="mb-5 text-sm leading-relaxed text-white/60">
								Practical career insights, delivered monthly.
							</p>

							<NewsletterForm />

							<div className="mt-5 flex items-center gap-3 text-white/50">
								<MapPin className="h-4 w-4 text-accent" />

								<span className="text-xs">Hyderabad · Wyoming</span>
							</div>
						</div>
					</div>

					{/* Bottom */}
					<div className="flex flex-col gap-4 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
					<span className="flex gap-5">
						<p >Copyright © 2025 </p>
						<p>	TRIOPATH Careers. All Rights Reserved.</p>
					</span>

						<div className="flex gap-5">
							{/* Privacy Policy */}
							<button
								type="button"
								onClick={() => setShowPrivacyPolicy(true)}
								className="transition-colors hover:text-white"
							>
								Privacy Policy
							</button>

							{/* Terms & Condition */}
							<button
								type="button"
								onClick={() => setShowTerms(true)}
								className="transition-colors hover:text-white"
							>
								Terms & Condition
							</button>
						</div>
					</div>
				</div>
			</footer>

			{/* Privacy Policy Modal */}
			{showPrivacyPolicy && (
				<PrivacyPolicy
					onClose={() => setShowPrivacyPolicy(false)}
				/>
			)}

			{/* Terms & Conditions Modal */}
			{showTerms && (
				<TermsAndCondition
					onClose={() => setShowTerms(false)}
				/>
			)}
		</>
	);
}