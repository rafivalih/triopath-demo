'use client';

import { gsap } from 'gsap';
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import React, {
	type CSSProperties,
	type KeyboardEvent,
	type MouseEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

export interface AccordionGalleryItem {
	image: string;
	label?: string;
	link?: string;
	alt?: string;
}

export interface AccordionGalleryProps {
	items?: AccordionGalleryItem[];

	defaultIndex?: number;

	accentColor?: string;
	overlayColor?: string;
	textColor?: string;

	height?: number;
	gap?: number;
	radius?: number;

	expandRatio?: number;

	orientation?: 'horizontal' | 'vertical';

	duration?: number;
	ease?: string;

	parallax?: number;
	tilt?: number;
	stagger?: number;

	trigger?: 'hover' | 'click';

	showLabels?: boolean;
	grayscale?: boolean;

	className?: string;
}

/* =========================================================
   DEFAULT ITEMS
========================================================= */

const DEFAULT_ITEMS: AccordionGalleryItem[] = [
	{
		image: 'https://picsum.photos/id/1015/900/1200',
		label: 'Canyon',
		link: '#',
	},
	{
		image: 'https://picsum.photos/id/1018/900/1200',
		label: 'Ridgeline',
		link: '#',
	},
	{
		image: 'https://picsum.photos/id/1039/900/1200',
		label: 'Falls',
		link: '#',
	},
	{
		image: 'https://picsum.photos/id/1043/900/1200',
		label: 'Harbour',
		link: '#',
	},
	{
		image: 'https://picsum.photos/id/1044/900/1200',
		label: 'Skyline',
		link: '#',
	},
];

/* =========================================================
   COMPONENT
========================================================= */

const AccordionGallery: React.FC<AccordionGalleryProps> = ({
	items = DEFAULT_ITEMS,

	defaultIndex = 0,

	accentColor = '#ffffff',
	overlayColor = '#060010',
	textColor = '#9CA3AF',

	height = 500,
	gap = 10,
	radius = 18,

	expandRatio = 0.52,

	orientation = 'horizontal',

	duration = 0.6,
	ease = 'power3.out',

	parallax = 0.5,
	tilt = 8,
	stagger = 0.06,

	trigger = 'hover',

	showLabels = true,
	grayscale = true,

	className = '',
}) => {
	/* =======================================================
     BASIC VALUES
  ======================================================= */

	const count = items.length;

	const vertical = orientation === 'vertical';

	const initialIndex = count > 0 ? Math.min(Math.max(defaultIndex, 0), count - 1) : 0;

	/* =======================================================
     DESKTOP / TABLET ACTIVE PANEL
  ======================================================= */

	const [activeIndex, setActiveIndex] = useState(initialIndex);

	/* =======================================================
     MOBILE SLIDER INDEX
  ======================================================= */

	const [mobileIndex, setMobileIndex] = useState(initialIndex);

	/* =======================================================
     REFS
  ======================================================= */

	const accordionRef = useRef<HTMLDivElement>(null);

	const mobileRef = useRef<HTMLDivElement>(null);

	const panelRefs = useRef<(HTMLElement | null)[]>([]);

	const mediaRefs = useRef<(HTMLElement | null)[]>([]);

	const labelRefs = useRef<(HTMLElement | null)[]>([]);

	const labelBarRefs = useRef<(HTMLElement | null)[]>([]);

	const timelineRef = useRef<gsap.core.Timeline | null>(null);

	const firstRenderRef = useRef(true);

	/* =======================================================
     REDUCED MOTION
  ======================================================= */

	const reducedMotionRef = useRef(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

		const updatePreference = () => {
			reducedMotionRef.current = mediaQuery.matches;
		};

		updatePreference();

		mediaQuery.addEventListener('change', updatePreference);

		return () => {
			mediaQuery.removeEventListener('change', updatePreference);
		};
	}, []);

	/* =======================================================
     MOBILE → SCROLL TO SLIDE
  ======================================================= */

	const goToMobileSlide = useCallback(
		(index: number) => {
			if (!mobileRef.current) {
				return;
			}

			if (count === 0) {
				return;
			}

			const safeIndex = Math.max(0, Math.min(index, count - 1));

			const container = mobileRef.current;

			const slideWidth = container.clientWidth;

			container.scrollTo({
				left: safeIndex * slideWidth,
				behavior: 'smooth',
			});

			setMobileIndex(safeIndex);
		},
		[count],
	);

	/* =======================================================
     MOBILE NEXT
  ======================================================= */

	const nextMobileSlide = useCallback(() => {
		if (count === 0) {
			return;
		}

		const next = mobileIndex >= count - 1 ? 0 : mobileIndex + 1;

		goToMobileSlide(next);
	}, [mobileIndex, count, goToMobileSlide]);

	/* =======================================================
     MOBILE PREVIOUS
  ======================================================= */

	const previousMobileSlide = useCallback(() => {
		if (count === 0) {
			return;
		}

		const previous = mobileIndex <= 0 ? count - 1 : mobileIndex - 1;

		goToMobileSlide(previous);
	}, [mobileIndex, count, goToMobileSlide]);

	/* =======================================================
     MOBILE SCROLL DETECTION

     This makes finger swipe update the dots/index.
  ======================================================= */

	const handleMobileScroll = useCallback(() => {
		if (!mobileRef.current) {
			return;
		}

		const container = mobileRef.current;

		const slideWidth = container.clientWidth;

		if (slideWidth <= 0) {
			return;
		}

		const newIndex = Math.round(container.scrollLeft / slideWidth);

		if (newIndex !== mobileIndex && newIndex >= 0 && newIndex < count) {
			setMobileIndex(newIndex);
		}
	}, [mobileIndex, count]);

	/* =======================================================
     ACCORDION LAYOUT
  ======================================================= */

	const updateAccordion = useCallback(
		(animate: boolean) => {
			if (count === 0) {
				return;
			}

			const panels = panelRefs.current;

			if (!panels.length) {
				return;
			}

			/*
			 * Expanded panel ratio.
			 */
			const ratio = Math.min(Math.max(expandRatio, 0.2), 0.8);

			/*
			 * Calculate flex-grow.
			 */
			const expandedGrow = count > 1 ? (ratio * (count - 1)) / (1 - ratio) : 1;

			/*
			 * Kill previous animation.
			 */
			timelineRef.current?.kill();

			const shouldAnimate = animate && !reducedMotionRef.current;

			const animationDuration = shouldAnimate ? duration : 0;

			const timeline = gsap.timeline();

			panels.forEach((panel, index) => {
				if (!panel) {
					return;
				}

				const isActive = index === activeIndex;

				const media = mediaRefs.current[index];

				const label = labelRefs.current[index];

				const labelBar = labelBarRefs.current[index];

				/*
				 * Tilt direction.
				 */
				const rotation = isActive ? 0 : index < activeIndex ? tilt : -tilt;

				/*
				 * Panel rotation.
				 */
				const transform = vertical
					? {
							rotateX: -rotation,
						}
					: {
							rotateY: rotation,
						};

				/*
				 * Panel width expansion.
				 */
				timeline.to(
					panel,
					{
						flexGrow: isActive ? expandedGrow : 1,

						...transform,

						duration: animationDuration,

						ease,
					},
					0,
				);

				/*
				 * Image.
				 */
				if (media) {
					const distance = activeIndex - index;

					const imageShift = distance * parallax * 4;

					const grayAmount = grayscale ? (isActive ? 0 : 1) : 0;

					timeline.to(
						media,
						{
							xPercent: -50,
							yPercent: -50,

							x: vertical ? 0 : isActive ? 0 : imageShift,

							y: vertical ? (isActive ? 0 : imageShift) : 0,

							filter: `grayscale(${grayAmount})`,

							duration: animationDuration,

							ease,
						},
						0,
					);
				}

				/*
				 * Label.
				 */
				if (showLabels && label && labelBar) {
					timeline.to(
						[labelBar, label],
						{
							opacity: isActive ? 1 : 0,

							x: isActive ? 0 : -12,

							duration: shouldAnimate ? duration * 0.7 : 0,

							ease,

							stagger: reducedMotionRef.current ? 0 : stagger,
						},
						0,
					);
				}
			});

			timelineRef.current = timeline;
		},
		[
			activeIndex,
			count,
			expandRatio,
			duration,
			ease,
			grayscale,
			parallax,
			showLabels,
			stagger,
			tilt,
			vertical,
		],
	);

	/* =======================================================
     RUN ACCORDION ANIMATION
  ======================================================= */

	useEffect(() => {
		updateAccordion(!firstRenderRef.current);

		firstRenderRef.current = false;
	}, [activeIndex, updateAccordion]);

	/* =======================================================
     CLEANUP GSAP
  ======================================================= */

	useEffect(() => {
		return () => {
			timelineRef.current?.kill();
		};
	}, []);

	/* =======================================================
     HOVER
  ======================================================= */

	const handlePanelMouseEnter = (index: number) => {
		if (trigger === 'hover') {
			setActiveIndex(index);
		}
	};

	/* =======================================================
     CLICK
  ======================================================= */

	const handlePanelClick = (index: number, event: MouseEvent) => {
		/*
		 * First click activates
		 * an inactive panel.
		 */
		if (index !== activeIndex) {
			event.preventDefault();

			setActiveIndex(index);
		}

		/*
		 * If already active,
		 * allow the link to open.
		 */
	};

	/* =======================================================
     KEYBOARD
  ======================================================= */

	const handlePanelKeyDown = (index: number, event: KeyboardEvent) => {
		if (count === 0) {
			return;
		}

		if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
			event.preventDefault();

			setActiveIndex((index + 1) % count);
		}

		if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
			event.preventDefault();

			setActiveIndex((index - 1 + count) % count);
		}
	};

	/* =======================================================
     EMPTY
  ======================================================= */

	if (count === 0) {
		return null;
	}

	/* =======================================================
     MOBILE CURRENT ITEM
  ======================================================= */

	const currentMobileItem = items[mobileIndex];

	/* =======================================================
     RENDER
  ======================================================= */

	return (
		<>
			{/* =====================================================
          MOBILE ONLY
          
          One image visible.
          Horizontal swipe works.
          Arrows work.
      ====================================================== */}

			<div className="relative block sm:hidden">
				<div
					ref={mobileRef}
					onScroll={handleMobileScroll}
					className="
            flex
            w-full
            snap-x
            snap-mandatory
            overflow-x-auto
            scroll-smooth
            overscroll-x-contain
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
					style={{
						WebkitOverflowScrolling: 'touch',
					}}
				>
					{items.map((item, index) => {
						const itemHasLink = Boolean(item.link);

						return (
							<div
								key={`${index}-${item.label || 'item'}`}
								className="
                    relative
                    min-w-full
                    shrink-0
                    snap-center
                    overflow-hidden
                  "
								style={{
									borderRadius: `${radius}px`,
								}}
							>
								{/* IMAGE */}

								{itemHasLink ? (
									<a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
										<img
											src={item.image}
											alt={item.alt || item.label || ''}
											draggable={false}
											className="
                          h-[500px]
                          w-full
                          select-none
                          object-cover
                          object-top
                        "
										/>
									</a>
								) : (
									<img
										src={item.image}
										alt={item.alt || item.label || ''}
										draggable={false}
										className="
                        h-[500px]
                        w-full
                        select-none
                        object-cover
                        object-top
                      "
									/>
								)}

								{/* OVERLAY */}

								<div
									className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
								/>

								{/* LABEL */}

								{showLabels && item.label && (
									<div
										className="
                        pointer-events-none
                        absolute
                        bottom-6
                        left-5
                        right-5
                        z-10
                        flex
                        items-center
                        gap-3
                      "
									>
										<span
											className="
                            h-7
                            w-[3px]
                            shrink-0
                            rounded-full
                          "
											style={{
												backgroundColor: accentColor,
											}}
										/>

										<span
											className="
                            text-base
                            font-semibold
                            text-white
                            drop-shadow-lg
                          "
											style={{
												color: textColor,
											}}
										>
											{item.label}
										</span>
									</div>
								)}
							</div>
						);
					})}
				</div>

				{/* ===================================================
            MOBILE LEFT BUTTON
        ==================================================== */}

				<button
					type="button"
					onClick={previousMobileSlide}
					aria-label="Previous showcase"
					className="
            absolute
            left-3
            top-1/2
            z-20
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-slate-200/80
            bg-white/95
            text-slate-900
            shadow-xl
            backdrop-blur
            transition-all
            duration-200
            active:scale-95
          "
				>
					<ChevronLeft className="h-5 w-5" />
				</button>

				{/* ===================================================
            MOBILE RIGHT BUTTON
        ==================================================== */}

				<button
					type="button"
					onClick={nextMobileSlide}
					aria-label="Next showcase"
					className="
            absolute
            right-3
            top-1/2
            z-20
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-slate-200/80
            bg-white/95
            text-slate-900
            shadow-xl
            backdrop-blur
            transition-all
            duration-200
            active:scale-95
          "
				>
					<ChevronRight className="h-5 w-5" />
				</button>

				{/* ===================================================
            MOBILE DOTS
        ==================================================== */}

				<div
					className="
            absolute
            bottom-4
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-1.5
          "
				>
					{items.map((_, index) => (
						<button
							key={index}
							type="button"
							onClick={() => goToMobileSlide(index)}
							aria-label={`Go to showcase ${index + 1}`}
							className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${index === mobileIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}
                `}
						/>
					))}
				</div>
			</div>

			{/* =====================================================
          TABLET + LAPTOP + DESKTOP
          
          Accordion
      ====================================================== */}

			<div className="hidden sm:block">
				<div
					ref={accordionRef}
					className={`
            flex
            w-full
            max-w-full
            [perspective:1400px]
            ${vertical ? 'flex-col' : 'flex-row'}
            ${className}
          `}
					style={{
						gap: `${gap}px`,
						height: vertical ? `${Math.round(height * 1.5)}px` : `${height}px`,
					}}
					role="list"
					aria-label="Showcase gallery"
				>
					{items.map((item, index) => {
						const isActive = index === activeIndex;

						const Tag = item.link ? 'a' : 'div';

						return (
							<Tag
								key={`${index}-${item.label || 'item'}`}
								ref={(element: HTMLElement | null) => {
									panelRefs.current[index] = element;
								}}
								href={item.link || undefined}
								target={item.link ? '_blank' : undefined}
								rel={item.link ? 'noopener noreferrer' : undefined}
								onClick={(event) => handlePanelClick(index, event)}
								onMouseEnter={() => handlePanelMouseEnter(index)}
								onFocus={() => setActiveIndex(index)}
								onKeyDown={(event) => handlePanelKeyDown(index, event)}
								role="listitem"
								tabIndex={0}
								aria-current={isActive ? 'true' : undefined}
								aria-label={item.label || `Showcase item ${index + 1}`}
								className="
                    group
                    relative
                    block
                    min-h-0
                    min-w-0
                    flex-[1_1_0]
                    cursor-pointer
                    overflow-hidden
                    bg-black
                    outline-none
                    no-underline
                    [transform-style:preserve-3d]
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-black
                  "
								style={
									{
										borderRadius: `${radius}px`,
										willChange: 'flex-grow, transform',
									} as CSSProperties
								}
							>
								{/* =========================================
                      IMAGE WRAPPER
                  ========================================== */}

								<span
									className="
                      absolute
                      inset-0
                      block
                      overflow-hidden
                    "
									style={{
										borderRadius: 'inherit',
									}}
								>
									<span
										ref={(element) => {
											mediaRefs.current[index] = element;
										}}
										className="
                        absolute
                        left-1/2
                        top-1/2
                        block
                        h-full
                        w-full
                      "
										style={{
											transform: 'translate(-50%, -50%)',
											willChange: 'transform, filter',
										}}
									>
										<img
											src={item.image}
											alt={item.alt || item.label || ''}
											draggable={false}
											className="
                          block
                          h-full
                          w-full
                          select-none
                          object-cover
                          object-center
                          [-webkit-user-drag:none]
                        "
										/>
									</span>

									{/* IMAGE OVERLAY */}

									<span
										className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/65
                        via-black/5
                        to-transparent
                      "
										aria-hidden="true"
									/>

									{/* INACTIVE DARKNESS */}

									{!isActive && (
										<span
											className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-black/30
                        "
											aria-hidden="true"
										/>
									)}
								</span>

								{/* =========================================
                      ACTIVE LABEL
                  ========================================== */}

								{showLabels && item.label && (
									<span
										className="
                          pointer-events-none
                          absolute
                          bottom-5
                          left-5
                          right-5
                          z-10
                          flex
                          items-center
                          gap-3
                        "
										aria-hidden="true"
									>
										{/* Accent bar */}

										<span
											ref={(element) => {
												labelBarRefs.current[index] = element;
											}}
											className="
                            h-7
                            w-[3px]
                            shrink-0
                            rounded-full
                            opacity-0
                          "
											style={{
												backgroundColor: accentColor,
											}}
										/>

										{/* Label */}

										<span
											ref={(element) => {
												labelRefs.current[index] = element;
											}}
											className="
                            max-w-full
                            overflow-hidden
                            text-ellipsis
                            whitespace-nowrap
                            text-[clamp(1rem,1.4vw,1.4rem)]
                            font-semibold
                            tracking-wide
                            text-white
                            opacity-0
                            [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]
                          "
											style={{
												color: textColor,
											}}
										>
											{item.label}
										</span>
									</span>
								)}
								{item.link && (
									<span
										className="
      pointer-events-none
      absolute
      bottom-4
      right-4
      z-30

      flex
      items-center
      gap-1.5

      rounded-full
      border
      border-white/20
      bg-black/50
      px-3
      py-1.5

      text-xs
      font-medium
      text-white

      opacity-0
      translate-y-2

      backdrop-blur-md
      shadow-lg

      transition-all
      duration-300
      ease-out

      group-hover:translate-y-0
      group-hover:opacity-100
    "
									>
										<span>View</span>

										<ArrowUpRight
											className="
        h-3.5
        w-3.5
        transition-transform
        duration-300
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
      "
										/>
									</span>
								)}
							</Tag>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default AccordionGallery;
