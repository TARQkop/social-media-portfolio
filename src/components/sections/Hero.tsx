export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F7F6F2] transition-colors duration-500 dark:bg-black"
    >
      {/* ==================================================
          # STAR MOTION ANIMATIONS
      ================================================== */}
      <style>{`
        @keyframes starFloat1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.28;
          }

          50% {
            transform: translate3d(18px, -14px, 0) scale(1.3);
            opacity: 0.7;
          }
        }

        @keyframes starFloat2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.22;
          }

          50% {
            transform: translate3d(-16px, 12px, 0) scale(1.22);
            opacity: 0.65;
          }
        }

        @keyframes starFloat3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.18;
          }

          50% {
            transform: translate3d(10px, 18px, 0) scale(1.35);
            opacity: 0.6;
          }
        }

        @keyframes glowFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(24px, -16px, 0) scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-star,
          .hero-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* ==================================================
          # BACKGROUND
      ================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Main central glow */}
        <div
          className="
            hero-glow absolute left-1/2 top-[48%]
            h-[520px] w-[520px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-brand-orange/[0.13]
            blur-[160px]
            sm:h-[720px] sm:w-[720px]
            dark:bg-brand-orange/[0.14]
          "
          style={{
            animation: "glowFloat 12s ease-in-out infinite",
          }}
        />

        {/* Glow behind headline */}
        <div
          className="
            hero-glow absolute left-1/2 top-[42%]
            h-[260px] w-[700px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-brand-orange/[0.12]
            blur-[110px]
            sm:h-[320px] sm:w-[850px]
            dark:bg-brand-orange/[0.10]
          "
          style={{
            animation: "glowFloat 9s ease-in-out infinite reverse",
          }}
        />

        {/* Top-left orange glow */}
        <div
          className="
            hero-glow absolute -left-24 top-20
            h-[320px] w-[320px]
            rounded-full
            bg-brand-orange/[0.07]
            blur-[130px]
            dark:bg-brand-orange/[0.10]
          "
          style={{
            animation: "glowFloat 14s ease-in-out infinite",
          }}
        />

        {/* Top-right orange glow */}
        <div
          className="
            hero-glow absolute -right-20 top-10
            h-[340px] w-[340px]
            rounded-full
            bg-brand-orange/[0.08]
            blur-[140px]
            dark:bg-brand-orange/[0.12]
          "
          style={{
            animation: "glowFloat 16s ease-in-out infinite reverse",
          }}
        />

        {/* Bottom-left glow */}
        <div
          className="
            hero-glow absolute -left-24 bottom-0
            h-[300px] w-[300px]
            rounded-full
            bg-brand-orange/[0.06]
            blur-[130px]
            dark:bg-brand-orange/[0.08]
          "
          style={{
            animation: "glowFloat 13s ease-in-out infinite",
          }}
        />

        {/* Bottom-right glow */}
        <div
          className="
            hero-glow absolute -right-24 bottom-0
            h-[300px] w-[300px]
            rounded-full
            bg-brand-orange/[0.05]
            blur-[130px]
            dark:bg-brand-orange/[0.08]
          "
          style={{
            animation: "glowFloat 15s ease-in-out infinite reverse",
          }}
        />

        {/* ==================================================
            # FLOATING GRAY PARTICLES
        ================================================== */}

        <span
          className="hero-star absolute left-[6%] top-[14%] h-1 w-1 rounded-full bg-neutral-400/[0.35] dark:bg-white/[0.45]"
          style={{
            animation: "starFloat1 6s ease-in-out infinite",
          }}
        />

        <span
          className="hero-star absolute left-[11%] top-[28%] h-1.5 w-1.5 rounded-full bg-neutral-400/[0.25] dark:bg-white/30"
          style={{
            animation: "starFloat2 8s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />

        <span
          className="hero-star absolute left-[16%] top-[61%] h-1 w-1 rounded-full bg-neutral-400/30 dark:bg-white/40"
          style={{
            animation: "starFloat3 7s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />

        <span
          className="hero-star absolute left-[24%] top-[78%] h-1.5 w-1.5 rounded-full bg-neutral-400/[0.25] dark:bg-white/30"
          style={{
            animation: "starFloat1 9s ease-in-out infinite",
            animationDelay: "2.5s",
          }}
        />

        <span
          className="hero-star absolute left-[34%] top-[18%] h-1 w-1 rounded-full bg-neutral-400/30 dark:bg-white/40"
          style={{
            animation: "starFloat2 7.5s ease-in-out infinite",
            animationDelay: "1.2s",
          }}
        />

        <span
          className="hero-star absolute left-[44%] top-[10%] h-1 w-1 rounded-full bg-neutral-400/[0.25] dark:bg-white/[0.35]"
          style={{
            animation: "starFloat3 6.5s ease-in-out infinite",
            animationDelay: ".5s",
          }}
        />

        <span
          className="hero-star absolute right-[44%] top-[70%] h-1 w-1 rounded-full bg-neutral-400/[0.25] dark:bg-white/[0.35]"
          style={{
            animation: "starFloat1 8.5s ease-in-out infinite",
            animationDelay: "1.8s",
          }}
        />

        {/* ==================================================
            # ORANGE PARTICLES
        ================================================== */}

        <span
          className="
            hero-star absolute right-[35%] top-[22%]
            h-1.5 w-1.5 rounded-full
            bg-brand-orange/60
            shadow-[0_0_12px_rgba(255,90,54,0.3)]
            dark:bg-brand-orange/[0.75]
            dark:shadow-[0_0_14px_rgba(255,90,54,0.5)]
          "
          style={{
            animation: "starFloat2 7.5s ease-in-out infinite",
            animationDelay: "1.1s",
          }}
        />

        <span
          className="
            hero-star absolute left-[10%] top-[47%]
            h-1.5 w-1.5 rounded-full
            bg-brand-orange/70
            shadow-[0_0_12px_rgba(255,90,54,0.35)]
            dark:bg-brand-orange/80
            dark:shadow-[0_0_14px_rgba(255,90,54,0.55)]
          "
          style={{
            animation: "starFloat2 6s ease-in-out infinite",
            animationDelay: "1.8s",
          }}
        />

        <span
          className="
            hero-star absolute right-[31%] top-[76%]
            h-1.5 w-1.5 rounded-full
            bg-brand-orange/50
            shadow-[0_0_12px_rgba(255,90,54,0.2)]
            dark:bg-brand-orange/70
            dark:shadow-[0_0_12px_rgba(255,90,54,0.4)]
          "
          style={{
            animation: "starFloat1 7s ease-in-out infinite",
            animationDelay: "2.2s",
          }}
        />

        <span
          className="
            hero-star absolute right-[7%] top-[82%]
            h-1 w-1 rounded-full
            bg-brand-orange/40
            shadow-[0_0_9px_rgba(255,90,54,0.18)]
            dark:bg-brand-orange/50
            dark:shadow-[0_0_9px_rgba(255,90,54,0.35)]
          "
          style={{
            animation: "starFloat2 9s ease-in-out infinite",
            animationDelay: "2.8s",
          }}
        />

        <span
          className="hero-star absolute left-[19%] top-[21%] h-1 w-1 rounded-full bg-brand-orange/60 shadow-[0_0_10px_rgba(255,90,54,0.3)] dark:bg-brand-orange/[0.75] dark:shadow-[0_0_12px_rgba(255,90,54,0.5)]"
          style={{ animation: "starFloat1 7s ease-in-out infinite", animationDelay: ".5s" }}
        />

        <span
          className="hero-star absolute left-[27%] top-[55%] h-1 w-1 rounded-full bg-brand-orange/55 shadow-[0_0_10px_rgba(255,90,54,0.28)] dark:bg-brand-orange/70 dark:shadow-[0_0_12px_rgba(255,90,54,0.45)]"
          style={{ animation: "starFloat3 8s ease-in-out infinite", animationDelay: "2.1s" }}
        />

        <span
          className="hero-star absolute left-[38%] top-[78%] h-1.5 w-1.5 rounded-full bg-brand-orange/60 shadow-[0_0_12px_rgba(255,90,54,0.3)] dark:bg-brand-orange/[0.75] dark:shadow-[0_0_14px_rgba(255,90,54,0.5)]"
          style={{ animation: "starFloat2 9s ease-in-out infinite", animationDelay: "1.4s" }}
        />

        <span
          className="hero-star absolute left-[53%] top-[14%] h-1 w-1 rounded-full bg-brand-orange/55 shadow-[0_0_10px_rgba(255,90,54,0.3)] dark:bg-brand-orange/70 dark:shadow-[0_0_12px_rgba(255,90,54,0.45)]"
          style={{ animation: "starFloat1 7.5s ease-in-out infinite", animationDelay: ".9s" }}
        />

        <span
          className="hero-star absolute right-[41%] top-[46%] h-1.5 w-1.5 rounded-full bg-brand-orange/[0.65] shadow-[0_0_12px_rgba(255,90,54,0.32)] dark:bg-brand-orange/80 dark:shadow-[0_0_14px_rgba(255,90,54,0.52)]"
          style={{ animation: "starFloat3 6.5s ease-in-out infinite", animationDelay: "2.3s" }}
        />

        <span
          className="hero-star absolute right-[27%] top-[27%] h-1 w-1 rounded-full bg-brand-orange/60 shadow-[0_0_10px_rgba(255,90,54,0.28)] dark:bg-brand-orange/[0.75] dark:shadow-[0_0_12px_rgba(255,90,54,0.48)]"
          style={{ animation: "starFloat1 8s ease-in-out infinite", animationDelay: "1.1s" }}
        />

        <span
          className="hero-star absolute right-[19%] top-[66%] h-1.5 w-1.5 rounded-full bg-brand-orange/60 shadow-[0_0_12px_rgba(255,90,54,0.3)] dark:bg-brand-orange/[0.75] dark:shadow-[0_0_14px_rgba(255,90,54,0.5)]"
          style={{ animation: "starFloat2 7s ease-in-out infinite", animationDelay: "2.6s" }}
        />

        <span
          className="hero-star absolute right-[9%] top-[38%] h-1 w-1 rounded-full bg-brand-orange/[0.65] shadow-[0_0_10px_rgba(255,90,54,0.3)] dark:bg-brand-orange/[0.75] dark:shadow-[0_0_12px_rgba(255,90,54,0.5)]"
          style={{ animation: "starFloat3 9s ease-in-out infinite", animationDelay: ".8s" }}
        />

        {/* ==================================================
            # SOFT PARTICLES
        ================================================== */}

        <span
          className="hero-star absolute left-[14%] top-[39%] h-2.5 w-2.5 rounded-full bg-brand-orange/[0.10] blur-[2px] shadow-[0_0_25px_rgba(255,90,54,0.2)] dark:bg-brand-orange/20"
          style={{
            animation: "starFloat3 10s ease-in-out infinite",
            animationDelay: "1.3s",
          }}
        />

        <span
          className="hero-star absolute right-[15%] top-[30%] h-3 w-3 rounded-full bg-brand-orange/[0.10] blur-[2px] shadow-[0_0_28px_rgba(255,90,54,0.2)] dark:bg-brand-orange/20"
          style={{
            animation: "starFloat1 11s ease-in-out infinite reverse",
            animationDelay: "2s",
          }}
        />

        <span
          className="hero-star absolute left-[72%] top-[78%] h-2.5 w-2.5 rounded-full bg-brand-orange/[0.08] blur-[2px] shadow-[0_0_24px_rgba(255,90,54,0.18)] dark:bg-brand-orange/[0.15]"
          style={{
            animation: "starFloat2 12s ease-in-out infinite",
            animationDelay: ".8s",
          }}
        />

        {/* ==================================================
            # VERY SUBTLE GRID
        ================================================== */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.018)_1px,transparent_1px)]
            bg-[size:80px_80px]
            dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          "
        />

        {/* ==================================================
            # SOFT VIGNETTE
        ================================================== */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_34%,rgba(40,35,30,0.07)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.72)_100%)]
          "
        />
      </div>

      {/* SOFT BLEND INTO THE NEXT SECTION */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24
          bg-gradient-to-b from-transparent via-[#F7F6F2]/80 to-[#F7F6F2]
          dark:via-black/80 dark:to-black
        "
        aria-hidden="true"
      />

      {/* ==================================================
          # HERO CONTENT
      ================================================== */}
      <div className="page-reveal relative z-20 mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-6 pb-16 pt-[110px] text-center sm:px-8 sm:pt-[120px] lg:px-12" style={{ animationDelay: "140ms" }}>

        {/* ==================================================
            # EYEBROW
        ================================================== */}
        <div className="mb-7 flex items-center justify-center gap-3 sm:mb-9">
          <span
            className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-orange shadow-[0_0_16px_rgba(255,90,54,0.55)]"
            aria-hidden="true"
          />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/50 sm:text-xs lg:text-sm dark:text-white/60">
            Social Media • Creative • Strategy
          </span>
        </div>

        {/* ==================================================
            # MAIN HEADLINE
        ================================================== */}
        <h1 className="max-w-[1100px] font-extrabold leading-[0.9] tracking-[-0.06em] text-black transition-colors duration-500 dark:text-white">
          <span className="block text-[clamp(3.2rem,7vw,7rem)]">
            We Make Brands
          </span>

          <span className="mt-2 block text-[clamp(2.9rem,6vw,6rem)] text-brand-orange drop-shadow-[0_0_35px_rgba(255,90,54,0.14)] sm:mt-3 dark:drop-shadow-[0_0_35px_rgba(255,90,54,0.22)]">
            Impossible to Ignore.
          </span>
        </h1>

        {/* ==================================================
            # DESCRIPTION
        ================================================== */}
        <p className="mt-8 max-w-[560px] text-sm leading-7 text-black/50 sm:mt-10 sm:text-base sm:leading-8 lg:text-lg dark:text-white/55">
          We turn attention into growth through bold ideas,
          creative content, and social media strategy.
        </p>

        {/* ==================================================
            # ACTIONS
        ================================================== */}
        <div className="mt-9 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row">
          <a
            href="#work"
            className="
              inline-flex items-center justify-center gap-3
              rounded-full
              bg-black px-7 py-4
              text-sm font-semibold text-white
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-brand-orange
              hover:shadow-[0_14px_45px_rgba(255,90,54,0.24)]
              sm:px-8 sm:text-base
              dark:bg-white
              dark:text-black
              dark:hover:bg-brand-orange
              dark:hover:text-white
            "
          >
            View Our Work

            <span aria-hidden="true" className="text-lg">
              ↗
            </span>
          </a>

          <a
            href="#work"
            className="group flex items-center gap-3"
          >
            <span
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-black/12
                text-black
                transition-all duration-300
                group-hover:border-brand-orange
                group-hover:bg-brand-orange
                group-hover:text-white
                dark:border-white/20
                dark:text-white
              "
            >
              ↓
            </span>

            <span
              className="
                text-sm font-semibold
                text-black/70
                transition-colors duration-300
                group-hover:text-brand-orange
                sm:text-base
                dark:text-white/80
                dark:group-hover:text-white
              "
            >
              Explore
            </span>
          </a>
        </div>

        {/* ==================================================
            # BOTTOM META
        ================================================== */}
        <div className="absolute bottom-7 left-6 right-6 flex flex-col items-center gap-2 sm:bottom-8 sm:flex-row sm:justify-between sm:text-left lg:left-12 lg:right-12">
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-black/28 sm:text-[10px] dark:text-white/35">
            Creative Social Media Agency
          </span>

          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-black/28 sm:text-[10px] dark:text-white/35">
            Based in Duhok • Iraq
          </span>
        </div>
      </div>
    </section>
  );
}

