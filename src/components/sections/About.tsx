const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=90",
    title: "Brand Identity",
    category: "Creative Direction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=90",
    title: "Digital Campaign",
    category: "Social Media",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=90",
    title: "Visual Identity",
    category: "Brand Strategy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1000&q=90",
    title: "Creative Campaign",
    category: "Content Creation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1000&q=90",
    title: "Brand Story",
    category: "Creative Content",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=90",
    title: "Social Strategy",
    category: "Digital Marketing",
  },
];

// Duplicate the collection once so the marquee can loop seamlessly:
// the track scrolls from 0% to -50%, landing exactly on the start
// of the (identical) second half.
const track = [...projects, ...projects];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden bg-[#F7F6F2]
        py-16 sm:py-20 lg:py-24
        transition-colors duration-500
        dark:bg-black
      "
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/[0.07] blur-[160px] dark:bg-brand-orange/[0.1]"
        aria-hidden="true"
      />

      {/* =========================
          SECTION HEADER
      ========================== */}
      <div className="mx-auto mb-12 max-w-[1440px] px-6 sm:mb-14 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
          <div>
            {/* Eyebrow — a hairline rule instead of a tracked-out label */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-8 bg-brand-orange sm:w-10" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted dark:text-white/50">
                Selected work
              </span>
            </div>

            {/* Heading — one consistent serif treatment, no partial color accent */}
            <h2
              className="
                max-w-[13ch]
                text-[clamp(2.8rem,12vw,4.5rem)] font-extrabold
                leading-[0.92]
                tracking-[-0.045em]
                text-brand-text
                sm:max-w-[11ch]
                lg:text-7xl
                dark:text-white
              "
            >
              Ideas made to <span className="text-brand-orange">stand out.</span>
            </h2>
          </div>

          {/* Description */}
          <p
            className="
              max-w-[30ch]
              text-[20px] leading-6
              text-brand-muted
              dark:text-white/45
            "
          >
            Creative work, visual identities.
          </p>
        </div>
      </div>

      {/* =========================
          INFINITE GALLERY
      ========================== */}
      <div
        className="group/slider relative w-full overflow-hidden"
        role="region"
        aria-label="Selected work gallery"
      >
        {/* LEFT FADE */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-0 z-30
            w-16
            bg-gradient-to-r
            from-[#F7F6F2]
            via-[#F7F6F2]/90
            to-transparent
            sm:w-32
            dark:from-black
            dark:via-black/90
          "
        />

        {/* RIGHT FADE */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 right-0 z-30
            w-16
            bg-gradient-to-l
            from-[#F7F6F2]
            via-[#F7F6F2]/90
            to-transparent
            sm:w-32
            dark:from-black
            dark:via-black/90
          "
        />

        {/* MOVING TRACK */}
        <div
          className="
            flex w-max gap-6
            pr-6
            animate-infinite-scroll
            group-hover/slider:[animation-play-state:paused]
          "
        >
          {track.map((project, index) => {
            const isDuplicate = index >= projects.length;
            const originalIndex = index % projects.length;

            return (
              <article
                key={`${project.title}-${index}`}
                // Duplicated copies exist purely to make the loop seamless;
                // hide them from assistive tech so nothing is announced twice.
                aria-hidden={isDuplicate}
                className="
                  group/card
                  relative
                  h-[340px]
                  w-[260px]
                  shrink-0
                  overflow-hidden
                  rounded-md
                  border border-brand-border
                  bg-brand-white
                  sm:h-[400px]
                  sm:w-[320px]
                  lg:h-[460px]
                  lg:w-[360px]
                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={isDuplicate ? "" : `${project.category} — ${project.title}`}
                  className="
                    h-full w-full
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover/card:scale-105
                  "
                  loading={index < projects.length ? "eager" : "lazy"}
                />

                {/* BASELINE + HOVER GRADIENT, for legibility of the plate */}
                <div
                  className="
                    absolute inset-x-0 bottom-0 h-2/5
                    bg-gradient-to-t from-black/20 to-transparent
                    opacity-50
                    transition-opacity
                    duration-500
                    group-hover/card:opacity-90
                  "
                />

                {/* PLATE NUMBER — editorial catalog index, part of content not decoration */}
                <div
                  className="
                    absolute left-4 top-4
                    rounded-full border border-white/25 bg-black/20 px-3 py-1.5
                    text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80
                    backdrop-blur-md
                    sm:left-5 sm:top-5
                  "
                >
                  N&deg; {String(originalIndex + 1).padStart(2, "0")}
                </div>

                {/* CAPTION PLATE — always visible so the work remains scannable on touch devices */}
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    bg-gradient-to-t from-black/70 via-black/20 to-transparent
                    px-5 pb-5 pt-20
                    sm:px-6 sm:pb-6 sm:pt-24
                  "
                >
                  <div
                    className="
                      flex items-center justify-between
                      gap-4
                    "
                  >
                    <div>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>

                    {/* ARROW */}
                    <div
                      className="
                        flex h-10 w-10
                        shrink-0
                        items-center justify-center
                        rounded-full
                        bg-brand-orange
                        text-brand-white
                        transition-transform
                        duration-500
                        group-hover/card:rotate-45
                      "
                    >
                      <span className="text-lg" aria-hidden="true">↗</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* =========================
          BOTTOM META
      ========================== */}
      <div className="mx-auto mt-12 max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between border-t border-brand-border pt-6 dark:border-white/10">
          <span className="text-xs text-brand-muted dark:text-white/40">
            Creative, Social, Branding
          </span>
          <span className="text-xs text-brand-muted dark:text-white/40">
            Explore selected work
          </span>
        </div>
      </div>

      {/* =========================
          ANIMATION
      ========================== */}
      <style>{`
        @keyframes infinite-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 46s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-infinite-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}