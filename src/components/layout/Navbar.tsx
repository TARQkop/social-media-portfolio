import { useEffect, useState } from "react";

// # Navigation Links
const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  // # Mobile Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // # Scroll State
  const [isScrolled, setIsScrolled] = useState(false);

  // # Theme State
  const [isDark, setIsDark] = useState(true);

  // # Load Saved Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // # Track Page Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // # Toggle Theme
  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // # Close Mobile Menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="page-reveal fixed inset-x-0 top-0 z-50">
      {/* ==================================================
          # NAVBAR
      ================================================== */}
      <nav
        className={`
          mx-auto flex max-w-[1440px] items-center justify-between
          px-6 transition-all duration-500
          sm:px-8 lg:px-12
          ${isScrolled
            ? "h-[72px] border-b border-black/10 bg-[#FAFAF7]/85 shadow-[0_10px_30px_rgba(17,17,17,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/75"
            : "h-[88px] bg-transparent"
          }
        `}
      >
        {/* ==================================================
            # BRAND
        ================================================== */}
        <a
          href="#"
          onClick={closeMenu}
          className="group relative z-[60] flex items-center gap-3"
          aria-label="VYRA — Home"
        >
          <img
            src="/icon/images.png"
            alt="VYRA"
            className={`object-contain transition-all duration-500 group-hover:rotate-12 ${
              isScrolled ? "h-10 w-10" : "h-12 w-12"
            }`}
          />

          <span
            className="font-display text-2xl font-bold tracking-wide text-black transition-colors duration-300 group-hover:text-brand-orange dark:text-white dark:group-hover:text-brand-orange"
          >
            VYRA
          </span>
        </a>

        {/* ==================================================
            # DESKTOP NAVIGATION
        ================================================== */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                group relative
                text-[17px] font-medium
                text-black/55
                transition-colors duration-300
                hover:text-brand-orange
                dark:text-white/65
                dark:hover:text-brand-orange
              "
            >
              {link.label}

              {/* Hover underline */}
              <span
                className="
                  absolute -bottom-2 left-0 h-[2px] w-0
                  rounded-full
                  bg-brand-orange
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* ==================================================
            # DESKTOP ACTIONS
        ================================================== */}
        <div className="hidden items-center gap-3 md:flex">
        <button
        type="button"
        onClick={toggleTheme}
        className="
            group flex h-11 w-11 items-center justify-center
            rounded-full
            border border-black/10
            bg-white/70
            text-black/70
            backdrop-blur-sm
            transition-all duration-300
            hover:border-brand-orange
            hover:bg-brand-orange
            hover:text-white
            hover:shadow-[0_8px_24px_rgba(255,90,54,0.22)]
            dark:border-white/15
            dark:bg-white/5
            dark:text-white/80
            dark:hover:border-brand-orange
            dark:hover:bg-brand-orange
            dark:hover:text-white
            dark:hover:shadow-[0_8px_24px_rgba(255,90,54,0.22)]
        "
        aria-label={
            isDark ? "Switch to light mode" : "Switch to dark mode"
        }
        title={isDark ? "Light mode" : "Dark mode"}
        >
        {isDark ? (
            /* Sun */
            <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="
                h-5 w-5
                transition-transform duration-500
                group-hover:rotate-90
            "
            >
            <circle cx="12" cy="12" r="3.5" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m17.66 6.34 1.41-1.41" />
            </svg>
        ) : (
            /* Moon */
            <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="
                h-5 w-5
                transition-transform duration-500
                group-hover:-rotate-12
            "
            >
            <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.8 6.8 0 0 0 21 12.8Z" />
            </svg>
        )}
        </button>


          {/* Let's Talk */}
          <a
            href="#contact"
            className="
              flex items-center gap-2 rounded-full
              bg-black px-6 py-3.5
              text-[15px] font-semibold text-white
              transition-all duration-300
              hover:bg-brand-orange
              hover:shadow-[0_8px_30px_rgba(255,120,40,0.25)]
              dark:bg-white dark:text-black
              dark:hover:bg-brand-orange dark:hover:text-white
            "
          >
            Let's Talk

            <span aria-hidden="true" className="text-base">
              ↗
            </span>
          </a>
        </div>

        {/* ==================================================
            # MOBILE ACTIONS
        ================================================== */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="
              relative z-[60]
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-black/10
              bg-white/70
              text-black
              backdrop-blur-sm
              transition-all duration-300
              hover:border-brand-orange
              hover:bg-brand-orange
              hover:text-white
              hover:shadow-[0_8px_24px_rgba(255,90,54,0.22)]
              dark:border-white/20
              dark:bg-white/5
              dark:text-white
              dark:hover:border-brand-orange
              dark:hover:bg-brand-orange
              dark:hover:text-white
              dark:hover:shadow-[0_8px_24px_rgba(255,90,54,0.22)]
            "
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m17.66 6.34-1.41-1.41" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.8 6.8 0 0 0 21 12.8Z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              relative z-[60]
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-black/10
              bg-white/70
              text-black
              backdrop-blur-sm
              transition-all duration-300
              hover:border-brand-orange
              hover:bg-brand-orange
              hover:text-white
              dark:border-white/20
              dark:bg-white/5
              dark:text-white
            "
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  isMenuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  isMenuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* ==================================================
          # FULL SCREEN MOBILE MENU
      ================================================== */}
      <div
        className={`
          fixed inset-0 z-50
          transition-all duration-500
          md:hidden
          ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }
          ${
            isDark
              ? "bg-black"
              : "bg-[#FAFAF7]"
          }
        `}
      >
        <div className="flex min-h-screen flex-col px-6 pb-8 pt-[110px] sm:px-8">
          {/* Navigation Links */}
          <div className="flex flex-1 flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`
                  group flex items-center justify-between
                  border-b py-6
                  ${
                    isDark
                      ? "border-white/10"
                      : "border-black/10"
                  }
                `}
              >
                {/* Link Label */}
                <span
                  className={`
                    text-4xl font-semibold tracking-tight
                    transition-all duration-300
                    group-hover:translate-x-2
                    group-hover:text-brand-orange
                    sm:text-5xl
                    ${
                      isDark
                        ? "text-white"
                        : "text-black"
                    }
                  `}
                >
                  {link.label}
                </span>

                {/* Arrow */}
                <span
                  className={`
                    text-2xl
                    transition-all duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-brand-orange
                    ${
                      isDark
                        ? "text-white/40"
                        : "text-black/40"
                    }
                  `}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="
              flex items-center justify-center gap-3
              rounded-full
              bg-brand-orange
              px-6 py-5
              text-base font-semibold text-white
              shadow-[0_10px_35px_rgba(255,120,40,0.18)]
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_14px_45px_rgba(255,120,40,0.28)]
            "
          >
            Let's Talk

            <span aria-hidden="true" className="text-lg">
              ↗
            </span>
          </a>

          {/* Mobile Footer */}
          <p
            className={`
              mt-5 text-center text-xs font-medium
              uppercase tracking-[0.2em]
              ${isDark ? "text-white/35" : "text-black/35"}
            `}
          >
            Social Media • Creative • Strategy
          </p>
        </div>
      </div>
    </header>
  );
}
/* # Theme Toggle */