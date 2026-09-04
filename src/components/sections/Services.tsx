const services = [
	{
		number: "01",
		title: "Social Strategy",
		description:
			"A clear content direction built around your audience, goals, and next stage of growth.",
		tag: "Direction",
		icon: "share-2.svg",
	},
	{
		number: "02",
		title: "Content Systems",
		description:
			"Distinctive campaigns and repeatable visual systems that make every post feel unmistakably yours.",
		tag: "Creation",
		icon: "layout-grid.svg",
	},
	{
		number: "03",
		title: "Brand Presence",
		description:
			"A sharper digital identity that turns attention into trust across every important touchpoint.",
		tag: "Identity",
		icon: "eye.svg",
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className="relative overflow-hidden bg-[#F7F6F2] px-6 py-14 text-brand-text transition-colors duration-500 sm:px-8 sm:py-16 lg:px-12 lg:py-20 dark:bg-black dark:text-white"
		>
			<div
				className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand-orange/[0.09] blur-[140px] dark:bg-brand-orange/[0.12]"
				aria-hidden="true"
			/>

			<div
				className="pointer-events-none absolute -bottom-32 -left-24 h-[300px] w-[300px] rounded-full bg-brand-orange/[0.05] blur-[130px] dark:bg-brand-orange/[0.08]"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-[1440px]">
				<div className="scroll-reveal mb-10 flex flex-col gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-3xl">
						<div className="mb-6 flex items-center gap-3">
							<span className="h-px w-10 bg-brand-orange" />
							<span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-muted dark:text-white/50">
								What we do
							</span>
						</div>

						<h2 className="max-w-[10ch] text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.06em]">
							Make your next move <span className="text-brand-orange">matter.</span>
						</h2>
					</div>

					<p className="max-w-[28ch] text-lg leading-7 text-brand-muted dark:text-white/50 lg:pb-2">
						Focused creative support for brands ready to be seen, remembered,
						and chosen.
					</p>
				</div>

				<div className="grid gap-px overflow-hidden border border-brand-border bg-brand-border dark:border-white/15 dark:bg-white/15 md:grid-cols-3">
					{services.map((service, index) => (
						<article
							key={service.number}
							className={`scroll-reveal delay-${index + 1} group relative min-h-[320px] bg-white p-7 transition-colors duration-700 hover:bg-brand-orange/[0.08] dark:bg-[#111111] dark:hover:bg-brand-orange dark:duration-1000 sm:p-9 lg:min-h-[390px] lg:p-10`}
						>
							<div className="flex items-start justify-between">
								<div className="flex items-center gap-4">
									<span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-orange/30 text-brand-orange transition-all duration-700 group-hover:bg-brand-orange group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-brand-orange">
										<img
											src={`/svg/${service.icon}`}
											alt=""
											className="h-5 w-5 dark:[filter:brightness(0)_saturate(100%)_invert(43%)_sepia(96%)_saturate(2484%)_hue-rotate(343deg)_brightness(101%)_contrast(101%)]"
										/>
									</span>
									<span className="font-display text-3xl text-brand-orange transition-colors duration-700 group-hover:text-brand-text dark:group-hover:text-white dark:duration-1000">
										{service.number}
									</span>
								</div>
								<span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted transition-colors duration-700 group-hover:border-brand-orange group-hover:text-brand-orange dark:border-white/20 dark:text-white/45 dark:group-hover:border-white/50 dark:group-hover:text-white dark:duration-1000">
									{service.tag}
								</span>
							</div>

							<div className="absolute inset-x-7 bottom-7 sm:inset-x-9 sm:bottom-9 lg:inset-x-10 lg:bottom-10">
								<h3 className="mb-4 text-3xl font-semibold tracking-tight text-brand-text transition-colors duration-700 group-hover:text-brand-orange dark:text-white dark:group-hover:text-white dark:duration-1000 lg:text-4xl">
									{service.title}
								</h3>
								<p className="max-w-[30ch] text-sm leading-6 text-brand-muted transition-colors duration-700 group-hover:text-brand-muted dark:text-white/50 dark:group-hover:text-white/80 dark:duration-1000 sm:text-base">
									{service.description}
								</p>
								<span className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-lg text-brand-text transition-all duration-700 group-hover:translate-x-1 group-hover:border-brand-orange group-hover:bg-brand-orange/10 group-hover:text-brand-orange dark:border-white/20 dark:text-white dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-brand-orange dark:duration-1000">
									-&gt;
								</span>
							</div>
						</article>
					))}
				</div>

			</div>
		</section>
	);
}
