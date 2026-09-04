import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (isPaused) return;

		const interval = window.setInterval(() => {
			setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
		}, 6000);

		return () => window.clearInterval(interval);
	}, [activeIndex, isPaused]);

	const activeTestimonial = testimonials[activeIndex];

	return (
		<section
			id="results"
			className="relative overflow-hidden bg-[#F7F6F2] px-6 py-14 text-brand-text transition-colors duration-500 sm:px-8 sm:py-16 lg:px-12 lg:py-20 dark:bg-black dark:text-white"
		>
			<div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/[0.08] blur-[160px] dark:bg-brand-orange/[0.1]" aria-hidden="true" />
			<div className="pointer-events-none absolute -right-32 top-24 h-[280px] w-[280px] rounded-full bg-brand-orange/[0.06] blur-[120px] dark:bg-brand-orange/[0.08]" aria-hidden="true" />

			<div className="relative mx-auto max-w-[1440px]">
				<div className="scroll-reveal mb-9 flex flex-col gap-7 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
					<div>
						<div className="mb-6 flex items-center gap-3">
							<span className="h-px w-8 bg-brand-orange sm:w-10" />
							<span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted dark:text-white/50">
								Client voices
							</span>
						</div>

						<h2 className="max-w-[13ch] text-[clamp(2.8rem,12vw,4.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em] lg:text-7xl">
							The work speaks <span className="text-brand-orange">loudest.</span>
						</h2>
					</div>

					<p className="max-w-[30ch] text-[20px] leading-6 text-brand-muted dark:text-white/45">
						The people we work with tell the story better than we ever could.
					</p>
				</div>

				<div
					className="scroll-reveal delay-2 relative border border-brand-border bg-white shadow-[0_24px_70px_rgba(17,17,17,0.07)] dark:border-white/10 dark:bg-white/5 dark:shadow-none"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					onFocus={() => setIsPaused(true)}
					onBlur={(event) => {
						if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
							setIsPaused(false);
						}
					}}
				>
					<div className="absolute left-0 top-0 h-1 w-24 bg-brand-orange" aria-hidden="true" />

					<div className="grid min-h-[410px] gap-8 p-7 sm:p-10 lg:min-h-[430px] lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-14">
						<article
							key={activeTestimonial.name}
							className="testimonial-slide flex min-h-[350px] flex-col justify-between sm:min-h-[370px]"
							aria-live="polite"
						>
							<div className="flex items-start justify-between">
								<span className="font-display text-8xl leading-[0.7] text-brand-orange">“</span>
								<span className="text-sm font-semibold tracking-[0.18em] text-brand-muted dark:text-white/35">
									0{activeIndex + 1} / 0{testimonials.length}
								</span>
							</div>

							<blockquote className="flex min-h-[170px] max-w-[28ch] items-center text-[clamp(1.6rem,3.5vw,2.9rem)] font-medium leading-[1.15] tracking-tight text-brand-text dark:text-white sm:min-h-[190px]">
								{activeTestimonial.quote}
							</blockquote>

							<footer className="flex items-center gap-5">
								<img
									src={activeTestimonial.avatar}
									alt={activeTestimonial.name}
									className="h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover shadow-sm dark:border-white/15"
								/>
								<div className="space-y-1">
									<cite className="block text-sm font-bold not-italic text-brand-text dark:text-white">{activeTestimonial.name}</cite>
									<span className="text-xs text-brand-muted dark:text-white/45">{activeTestimonial.role}, {activeTestimonial.company}</span>
								</div>
							</footer>
						</article>

						<div className="flex flex-col justify-between border-t border-brand-border pt-6 dark:border-white/10 lg:w-56 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
							<div className="flex items-center justify-between gap-6 lg:justify-end">
								<div className="flex items-center gap-2" aria-label="Choose testimonial">
									{testimonials.map((testimonial, index) => (
										<button
											key={testimonial.name}
											type="button"
											onClick={() => setActiveIndex(index)}
											className={`h-2 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black ${index === activeIndex ? "w-8 bg-brand-orange" : "w-2 bg-brand-border dark:bg-white/25"}`}
											aria-label={`Show testimonial ${index + 1}`}
											aria-pressed={index === activeIndex}
										/>
									))}
								</div>

								<div className="flex gap-2">
									<button
										type="button"
										onClick={() => setActiveIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length)}
										className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border text-lg text-brand-text transition-all hover:border-brand-orange hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 dark:border-white/15 dark:text-white dark:focus-visible:ring-offset-black"
										aria-label="Previous testimonial"
									>
										&lt;
									</button>
									<button
										type="button"
										onClick={() => setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length)}
										className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-text bg-brand-text text-lg text-white transition-all hover:border-brand-orange hover:bg-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 dark:border-white dark:bg-white dark:text-black dark:focus-visible:ring-offset-black"
										aria-label="Next testimonial"
									>
										&gt;
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style>{`
				@keyframes testimonial-enter {
					from {
						opacity: 0;
						transform: translate3d(22px, 0, 0) scale(0.985);
					}
					to {
						opacity: 1;
						transform: translate3d(0, 0, 0) scale(1);
					}
				}

				.testimonial-slide {
					animation: testimonial-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
				}

				@media (prefers-reduced-motion: reduce) {
					.testimonial-slide {
						animation: none;
					}
				}
			`}</style>
		</section>
	);
}
