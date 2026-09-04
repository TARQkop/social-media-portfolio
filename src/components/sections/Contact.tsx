import { useState, type FormEvent } from "react";

export default function Contact() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitted(true);
	};

	return (
		<section
			id="contact"
			className="relative overflow-hidden bg-[#F7F6F2] px-6 py-14 text-brand-text transition-colors duration-500 sm:px-8 sm:py-16 lg:px-12 lg:py-20 dark:bg-black dark:text-white"
		>
			<div
				className="pointer-events-none absolute -right-40 top-16 h-[420px] w-[420px] rounded-full bg-brand-orange/[0.09] blur-[130px] dark:bg-brand-orange/[0.12]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute -left-48 bottom-0 h-[360px] w-[360px] rounded-full border border-brand-border dark:border-white/[0.07]"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-[1440px]">
				<div className="scroll-reveal mb-10 max-w-3xl lg:mb-14">
					<div className="mb-6 flex items-center gap-3">
						<span className="h-px w-10 bg-brand-orange" />
						<span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted dark:text-white/50">
							Start a conversation
						</span>
					</div>
					<h2 className="max-w-[14ch] text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
						Let&apos;s build something <span className="text-brand-orange">great.</span>
					</h2>
					<p className="mt-5 max-w-[45ch] text-base leading-6 text-brand-muted dark:text-white/55 sm:text-lg">
						Have a project in mind, or just want to say hello? Tell me a little
						about it and I&apos;ll get back to you soon.
					</p>
				</div>

				<div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
					<div className="scroll-reveal delay-1 flex flex-col justify-between gap-12">
						<div className="space-y-7">
							<a
								href="mailto:hello@tariq.dev"
								className="group block border-b border-brand-border pb-5 transition-colors hover:border-brand-orange dark:border-white/15"
							>
								<span className="mb-2 block text-xs uppercase tracking-[0.18em] text-brand-muted dark:text-white/40">
									Email
								</span>
								<span className="flex items-center justify-between text-lg font-medium">
									hello@tariq.dev
									<span className="text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
										↗
									</span>
								</span>
							</a>
							<div className="border-b border-brand-border pb-5 dark:border-white/15">
								<span className="mb-2 block text-xs uppercase tracking-[0.18em] text-brand-muted dark:text-white/40">
									Based in
								</span>
								<span className="text-lg font-medium">Amman, Jordan</span>
							</div>

							<div>
								<span className="mb-4 block text-xs uppercase tracking-[0.18em] text-brand-muted dark:text-white/40">
									Find me online
								</span>
								<div className="flex items-center gap-3">
									<a
										href="https://instagram.com/tariq.dev"
										target="_blank"
										rel="noreferrer"
										aria-label="Instagram"
										title="Instagram"
										className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border text-brand-text/65 transition-all hover:border-brand-orange hover:bg-brand-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange dark:border-white/15 dark:text-white/65"
									>
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
											<rect x="3" y="3" width="18" height="18" rx="5" />
											<circle cx="12" cy="12" r="4" />
											<circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
										</svg>
									</a>
									<a
										href="https://t.me/tariqdev"
										target="_blank"
										rel="noreferrer"
										aria-label="Telegram"
										title="Telegram"
										className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border text-brand-text/65 transition-all hover:border-brand-orange hover:bg-brand-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange dark:border-white/15 dark:text-white/65"
									>
										<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
											<path d="M21.8 4.3 18.7 19c-.2 1-1 1.3-1.8.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2L6.5 12.9 1.9 11.5c-1-.3-1-1 .2-1.5L20 3c.8-.3 1.9.2 1.8 1.3Z" />
										</svg>
									</a>
									<a
										href="https://wa.me/962000000000"
										target="_blank"
										rel="noreferrer"
										aria-label="WhatsApp"
										title="WhatsApp"
										className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border text-brand-text/65 transition-all hover:border-brand-orange hover:bg-brand-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange dark:border-white/15 dark:text-white/65"
									>
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
											<path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.1-4.2A8.5 8.5 0 1 1 20.5 11.5Z" />
											<path d="M8.4 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.4 2.3l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5 0 .3-.1.8-.3 1-.2.3-.7.5-1.1.5-2.5-.1-5.9-3.4-6-6 0-.5.2-1 .4-1.3Z" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						<p className="max-w-[25ch] text-sm leading-6 text-brand-muted dark:text-white/40">
							Available for selected freelance projects and creative collaborations.
						</p>
					</div>

					<form
						className="scroll-reveal delay-2 border border-brand-border bg-white p-6 shadow-[0_24px_70px_rgba(17,17,17,0.06)] sm:p-7 lg:p-8 dark:border-white/15 dark:bg-white/5 dark:shadow-none"
						onSubmit={handleSubmit}
					>
						<div className="grid gap-7 sm:grid-cols-2">
							<label className="group block">
								<span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted dark:text-white/45">
									Your name
								</span>
								<input
									required
									name="name"
									type="text"
									placeholder="John Doe"
									className="w-full border-b border-brand-border bg-transparent pb-3 text-base text-brand-text outline-none placeholder:text-brand-muted/60 transition-colors focus:border-brand-orange dark:border-white/20 dark:text-white dark:placeholder:text-white/25"
								/>
							</label>
							<label className="group block">
								<span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted dark:text-white/45">
									Email address
								</span>
								<input
									required
									name="email"
									type="email"
									placeholder="john@example.com"
									className="w-full border-b border-brand-border bg-transparent pb-3 text-base text-brand-text outline-none placeholder:text-brand-muted/60 transition-colors focus:border-brand-orange dark:border-white/20 dark:text-white dark:placeholder:text-white/25"
								/>
							</label>
						</div>

						<label className="mt-8 block">
							<span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted dark:text-white/45">
								Tell me about your project
							</span>
							<textarea
								required
								name="message"
								rows={4}
								placeholder="A short description of what you are building..."
								className="w-full resize-none border-b border-brand-border bg-transparent pb-3 text-base text-brand-text outline-none placeholder:text-brand-muted/60 transition-colors focus:border-brand-orange dark:border-white/20 dark:text-white dark:placeholder:text-white/25"
							/>
						</label>

						<div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
							<button
								type="submit"
								className="inline-flex items-center justify-center gap-3 self-start bg-brand-orange px-6 py-4 text-sm font-bold text-white transition-all hover:bg-brand-text hover:text-white hover:shadow-[0_12px_35px_rgba(255,90,54,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2] dark:hover:bg-white dark:hover:text-black dark:focus-visible:ring-offset-black"
							>
								Send message <span aria-hidden="true">↗</span>
							</button>
							{isSubmitted && (
								<p className="text-sm text-brand-orange" role="status">
									Thanks, I&apos;ll be in touch soon.
								</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
