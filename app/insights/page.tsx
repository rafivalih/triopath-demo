import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BorderTrail } from '@/components/core/border-trail';
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal';
import { blogPosts } from '@/constants/blogs';

export const metadata: Metadata = {
	title: 'Insights',
	description:
		'Career development insights, resume optimization tips, interview preparation guides, and AI in careers from TRIOPATH Careers.',
};

export default function InsightsPage() {
	const [featured, ...rest] = blogPosts;

	const getImageSrc = (img: string | { src: string }) => (typeof img === 'string' ? img : img.src);

	return (
		<div className="pt-[90px]">
			<section className="premium-page-hero1 relative overflow-hidden py-14 sm:py-20">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<Reveal>
						<p className="mb-4 mt-10 text-sm font-semibold uppercase tracking-wider text-accent">
							Insights
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
							Ideas to move your career forward.
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							Expert insights on career development, resume optimization, job searching, interview
							preparation, and the future of work.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="section-tight bg-white">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					{/* Featured Card */}
					<Reveal>
						<Link
							href={`/insights/${featured.slug}`}
							className="group relative grid items-center gap-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-[#f8fafc] p-5 transition-all duration-300 hover:shadow-premium sm:p-8 lg:grid-cols-2"
						>
							{/* Revolving blue-400 border trail */}
							<BorderTrail
								className="bg-gradient-to-l from-blue-400 via-blue-500 to-transparent blur-[1px]"
								size={120}
								transition={{
									repeat: Infinity,
									repeatType: 'loop',
									duration: 1,
									ease: 'linear',
								}}
								style={{
									offsetPath: 'rect(0% 100% 100% 0% round 24px)',
								}}
							/>

							<div className="overflow-hidden rounded-2xl">
								<img
									src={getImageSrc(featured.image)}
									alt={featured.title}
									className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[320px]"
								/>
							</div>
							<div>
								<span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
									{featured.category}
								</span>
								<h2 className="mt-4 text-2xl font-bold tracking-tight text-primary transition-colors group-hover:text-accent sm:text-3xl">
									{featured.title}
								</h2>
								<p className="mt-4 text-base leading-relaxed text-muted-foreground">
									{featured.description}
								</p>
								<div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
									<span className="flex items-center gap-1.5">
										<Calendar className="h-3.5 w-3.5" />{' '}
										{new Date(featured.date).toLocaleDateString('en-US', {
											month: 'long',
											day: 'numeric',
											year: 'numeric',
										})}
									</span>
									<span className="flex items-center gap-1.5">
										<Clock className="h-3.5 w-3.5" /> {featured.readTime}
									</span>
								</div>
								<span className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
									Read article{' '}
									<ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</span>
							</div>
						</Link>
					</Reveal>

					{/* Grid Cards */}
					<Stagger>
						<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
							{rest.map((post) => (
								<StaggerItem key={post.slug}>
									<Link
										href={`/insights/${post.slug}`}
										className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
									>
										{/* Revolving blue-400 border trail */}
										<BorderTrail
											className="bg-gradient-to-l from-blue-400 via-blue-500 to-transparent blur-[1px]"
											size={80}
											transition={{
												repeat: Infinity,
												repeatType: 'loop',
												duration: 5,
												ease: 'linear',
											}}
											style={{
												offsetPath: 'rect(0% 100% 100% 0% round 16px)',
											}}
										/>

										<div>
											<div className="overflow-hidden rounded-t-2xl">
												<img
													src={getImageSrc(post.image)}
													alt={post.title}
													className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
												/>
											</div>
											<div className="p-5">
												<span className="inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
													{post.category}
												</span>
												<h3 className="mt-3 font-bold text-primary transition-colors group-hover:text-accent">
													{post.title}
												</h3>
												<p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
													{post.description}
												</p>
											</div>
										</div>

										<div className="p-5 pt-0">
											<div className="mt-2 flex items-center justify-between">
												<span className="flex items-center gap-1.5 text-xs text-muted-foreground">
													<Calendar className="h-3 w-3" />{' '}
													{new Date(post.date).toLocaleDateString('en-US', {
														month: 'short',
														day: 'numeric',
													})}
												</span>
												<span className="flex items-center gap-1.5 text-xs text-muted-foreground">
													<Clock className="h-3 w-3" /> {post.readTime}
												</span>
											</div>
											<span className="mt-4 inline-flex items-center text-xs font-semibold text-accent">
												Read More{' '}
												<ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
											</span>
										</div>
									</Link>
								</StaggerItem>
							))}
						</div>
					</Stagger>
				</div>
			</section>
		</div>
	);
}
