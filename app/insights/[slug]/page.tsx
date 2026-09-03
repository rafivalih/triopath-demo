import { ArrowLeft, ArrowRight, Calendar, Check, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ButtonHover from '@/components/shared/ButtonHover';
import { blogPosts } from '@/constants/blogs';

interface BlogPostPageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
	const post = blogPosts.find((item) => item.slug === params.slug);

	if (!post) {
		return {
			title: 'Article Not Found | TRIOPATH Careers',
		};
	}

	return {
		title: `${post.title} | TRIOPATH Careers`,
		description: post.description,
	};
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
	const post = blogPosts.find((item) => item.slug === params.slug);

	if (!post) {
		notFound();
	}

	const contentBlocks = post.content.split('\n\n');

	const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

	return (
		<div className="bg-white pt-28 font-['Google_Sans_Flex',sans-serif]">
			{/* =====================================================
          ARTICLE HEADER
      ===================================================== */}

			<section className="bg-white">
				<div className="mx-auto max-w-[1200px] px-4 pb-8 pt-10 sm:px-6 sm:pb-16 lg:px-8">
					{/* Breadcrumb */}
					<div className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
						<Link href="/insights" className="transition-colors hover:text-accent">
							Insights
						</Link>

						<span>/</span>

						<span className="truncate">{post.category}</span>
					</div>

					{/* Main Header */}
					<div className="mx-auto max-w-4xl text-center">
						<span className="inline-flex rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
							{post.category}
						</span>

						<h1 className="mt-6 text-[27px] font-bold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
							{post.title}
						</h1>

						<p className="mx-auto mt-6 max-w-3xl text-[15px] text-muted-foreground sm:text-[17px]">
							{post.description}
						</p>

						{/* Article Meta */}
						<div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
							<span className=" text-primary border-[1px] border-gray-300 p-[4px] rounded-lg  text-[17px]">
								{post.author}
							</span>

							<span className="hidden h-1 w-1 rounded-full bg-border sm:block" />

							<span className="flex items-center gap-1.5">
								<Calendar className="h-4 w-4" />

								{new Date(post.date).toLocaleDateString('en-US', {
									month: 'long',
									day: 'numeric',
									year: 'numeric',
								})}
							</span>

							<span className="hidden h-1 w-1 rounded-full bg-border sm:block" />

							<span className="flex items-center gap-1.5">
								<Clock className="h-4 w-4" />
								{post.readTime}
							</span>
						</div>
					</div>

					{/* Featured Image */}
					<div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl">
						<img
							src={post.image}
							alt={post.title}
							className="h-[300px] w-full object-cover sm:h-[430px] lg:h-[520px]"
						/>
					</div>
				</div>
			</section>

			{/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}

			<section className="bg-[#f8fafc]">
				<div className="mx-auto max-w-[1000px] px-4 py-1 sm:px-6 sm:py-20 lg:px-8">
					{/* Back Button */}
					<Link
						href="/insights"
						className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
					>
						<ArrowLeft className="h-4 w-4" />
						Back to Insights
					</Link>

					<article className="rounded-3xl border border-border bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12 lg:px-16 lg:py-14">
						{/* Article Introduction */}
						<div className="border-b border-border pb-8">
							<p className="text-xl font-semibold uppercase tracking-wider text-accent underline">
								Inside this article
							</p>

							<p className="mt-3 text-base leading-7 text-muted-foreground">
								Explore the key ideas, strategic frameworks, and career insights covered in this
								guide.
							</p>
						</div>

						{/* Article Body */}
						<div className="mt-10">
							{contentBlocks.map((block, index) => {
								const trimmedBlock = block.trim();

								/* =================================================
                   TRIOPATH SOLUTION CALLOUT CARD (HIGHLIGHTED)
                ================================================= */
								if (
									trimmedBlock.startsWith('## ') &&
									trimmedBlock.toLowerCase().includes('triopath')
								) {
									const heading = trimmedBlock.replace('## ', '');
									const nextBlock = contentBlocks[index + 1] || '';
									const isNextList =
										nextBlock.trim().startsWith('* ') || nextBlock.trim().startsWith('- ');

									return (
										<div
											key={index}
											className="my-10 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 sm:p-8 shadow-sm"
										>
											<div className="flex items-center gap-2.5">
												<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
													<ShieldCheck className="h-5 w-5" />
												</div>
												<span className="text-xs font-bold uppercase tracking-wider text-accent">
													TRIOPATH Platform Feature
												</span>
											</div>

											<h2 className="mt-3 text-xl font-bold tracking-tight text-primary sm:text-2xl">
												{heading}
											</h2>

											{!isNextList && nextBlock && (
												<p className="mt-3 text-[16px] leading-7 text-muted-foreground">
													{nextBlock}
												</p>
											)}

											<div className="mt-6 flex flex-wrap items-center gap-4">
												<Link
													href="/insights"
													className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 md:text-sm font-semibold text-white transition hover:bg-primary/90 sm:text-[8px]"
												>
													Explore Platform Tools
													<ArrowRight className="h-4 w-4" />
												</Link>
											</div>
										</div>
									);
								}

								// Skip standalone text block if already rendered inside the TRIOPATH callout
								const prevBlock = contentBlocks[index - 1] || '';
								if (
									prevBlock.trim().startsWith('## ') &&
									prevBlock.toLowerCase().includes('triopath') &&
									!trimmedBlock.startsWith('* ') &&
									!trimmedBlock.startsWith('- ')
								) {
									return null;
								}

								/* =================================================
                   STANDARD H2 HEADING
                ================================================= */
								if (trimmedBlock.startsWith('## ')) {
									const heading = trimmedBlock.replace('## ', '');

									if (heading === 'Keyword Strategy') {
										return (
											<div key={index} className="mt-14 grid items-center gap-8 lg:grid-cols-2">
												<div>
													<h2 className="text-xl font-bold tracking-tight text-primary sm:text-3xl">
														{heading}
													</h2>

													<div className="mt-3 h-1 w-10 rounded-full bg-accent" />

													<p className="mt-5 text-[17px] leading-8 text-muted-foreground">
														A strong resume should reflect the language and requirements used in the
														target job description. Identifying relevant keywords helps candidates
														present their skills and experience more clearly.
													</p>
												</div>

												<div className="overflow-hidden rounded-2xl">
													<img
														src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1000"
														alt="Professional reviewing career and recruitment documents"
														className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[340px]"
													/>
												</div>
											</div>
										);
									}

									return (
										<div key={index} className="mt-9 first:mt-0">
											<h2 className="text-lg font-bold tracking-tight text-primary sm:text-2xl">
												{heading}
											</h2>

											<div className="mt-[6px] h-1 w-10 rounded-full bg-accent" />
										</div>
									);
								}

								/* =================================================
                   BULLET LISTS (* or -)
                ================================================= */
								if (trimmedBlock.startsWith('- ') || trimmedBlock.startsWith('* ')) {
									const items = trimmedBlock
										.split('\n')
										.map((l) => l.trim())
										.filter((l) => l.startsWith('- ') || l.startsWith('* '));

									return (
										<ul
											key={index}
											className="my-7 space-y-3 rounded-2xl bg-slate-50/80 p-6 border border-slate-100"
										>
											{items.map((item, itemIdx) => {
												const cleanText = item
													.replace(/^[-*]\s+/, '')
													.replace(/\*\*(.*?)\*\*/g, '$1');

												return (
													<li
														key={itemIdx}
														className="flex gap-3 text-[16px] leading-7 text-muted-foreground"
													>
														<Check className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
														<span>{cleanText}</span>
													</li>
												);
											})}
										</ul>
									);
								}

								if (
									post.slug === 'future-of-ai-in-career-development' &&
									trimmedBlock.includes(
										"AI can analyze a candidate's resume alongside a job description",
									)
								) {
									return (
										<div key={index}>
											<p className="mb-6 text-[17px] leading-8 text-muted-foreground">
												{trimmedBlock}
											</p>

											<div className="my-10 overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
												<div className="border-b border-accent/10 px-6 py-5">
													<div className="flex items-center gap-3">
														<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
															<Sparkles className="h-5 w-5" />
														</div>

														<div>
															<p className="text-xs font-semibold uppercase tracking-wider text-accent">
																AI-powered analysis
															</p>

															<h3 className="mt-1 text-lg font-bold text-primary">
																How candidate matching works
															</h3>
														</div>
													</div>
												</div>

												<div className="grid gap-4 p-6 sm:grid-cols-3">
													<div className="rounded-xl border border-border bg-white p-5">
														<p className="text-sm font-semibold text-primary">Resume</p>
														<p className="mt-2 text-sm leading-6 text-muted-foreground">
															Skills, experience, qualifications and keywords are identified.
														</p>
													</div>

													<div className="rounded-xl border border-border bg-white p-5">
														<p className="text-sm font-semibold text-primary">Job Description</p>
														<p className="mt-2 text-sm leading-6 text-muted-foreground">
															Required skills, experience and role requirements are analyzed.
														</p>
													</div>

													<div className="rounded-xl border border-border bg-white p-5">
														<p className="text-sm font-semibold text-primary">Match Insights</p>
														<p className="mt-2 text-sm leading-6 text-muted-foreground">
															Matched skills, missing requirements and experience gaps are
															highlighted.
														</p>
													</div>
												</div>
											</div>
										</div>
									);
								}

								/* =================================================
                   NORMAL PARAGRAPH
                ================================================= */
								return (
									<p key={index} className="mb-6 text-[17px] leading-8 text-muted-foreground">
										{trimmedBlock}
									</p>
								);
							})}
						</div>

						{/* Article Bottom */}
						<div className="mt-14 border-t border-border pt-8">
							<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<p className="text-sm font-semibold text-primary">Found this article useful?</p>

									<p className="mt-1 text-sm text-muted-foreground">
										Explore more career and recruitment insights from TRIOPATH.
									</p>
								</div>

								<Link
									href="/insights"
									className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
								>
									More Insights
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</article>
				</div>
			</section>

			{/* =====================================================
          RELATED INSIGHTS
      ===================================================== */}

			<section className="bg-white">
				<div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wider text-accent">
								Keep exploring
							</p>

							<h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">
								Related Insights
							</h2>
						</div>

						<Link
							href="/insights"
							className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
						>
							View all insights
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>

					<div className="mt-8 grid gap-5 md:grid-cols-3">
						{relatedPosts.map((related) => (
							<Link
								key={related.slug}
								href={`/insights/${related.slug}`}
								className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-premium hover:border-[1px] hover:border-black"
							>
								<div className="overflow-hidden">
									<img
										src={related.image}
										alt={related.title}
										className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="p-5">
									<span className="inline-flex rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
										{related.category}
									</span>

									<h3 className="mt-3 line-clamp-2 font-bold text-primary">{related.title}</h3>

									<p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
										{related.description}
									</p>

									<div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
										<span>
											{new Date(related.date).toLocaleDateString('en-US', {
												month: 'short',
												day: 'numeric',
												year: 'numeric',
											})}
										</span>

										<span>{related.readTime}</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* =====================================================
          FINAL CTA
      ===================================================== */}

			<section className="px-4 pb-20 pt-4 sm:px-6 lg:px-8">
				<div className="navy-gradient relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16">
					<div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

					<div className="relative">
						<p className="text-sm font-semibold uppercase tracking-wider text-accent">
							TRIOPATH Careers
						</p>

						<h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to take the next step in your career?
						</h2>

						<p className="mx-auto mt-4 max-w-xl text-white/60">
							Explore opportunities, optimize your profile, and find the right path for your career.
						</p>

						{/* <Link
              href="/find-jobs"
              className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Explore Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link> */}

						<ButtonHover
							text="Explore Jobs"
							href="/find-jobs"
							className="w-[11.2rem] text-sm text-white mt-5"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
