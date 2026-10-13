import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useLanguage, availableLanguages } from "../i18n";
import { cn } from "@/lib/utils";

// nav label texts are hardcoded per requirement
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

const linkCls = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative font-mono text-xs transition-colors duration-200 pb-1",
    isActive ? "text-ember-deep" : "text-ink/60 hover:text-ember-deep"
  );

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language: lang, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-paper/85 backdrop-blur-md border-b border-ink/10 shadow-[0_8px_24px_-16px_rgba(26,22,17,0.25)]"
          : "bg-transparent"
      )}
    >
      <div className="section-container flex items-center justify-between h-16">
        <RouterNavLink
          to="/"
          className="font-display italic text-lg text-ink hover:text-ember-deep transition-colors"
        >
          Hassaan Javed
        </RouterNavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <RouterNavLink to={link.to} className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className="text-ember-deep/70 mr-1">0{i + 1}.</span>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-ember"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </>
                )}
              </RouterNavLink>
            </motion.div>
          ))}
          <a
            href="/Hassaan_Javed_MERN_Stack.pdf"
            download="Hassaan_Javed_MERN_Stack.pdf"
            className="font-mono text-xs border border-ink/20 text-ink px-4 py-2 rounded-full hover:border-ember hover:text-ember-deep transition-colors duration-200 flex items-center gap-1.5"
          >
            <FileText size={13} />
            Download CV
          </a>
          {/* language selector */}
          <select
            value={lang}
            onChange={(e) => {
              const newLang = e.target.value as typeof lang;
              setLanguage(newLang);
            }}
            aria-label="Language"
            className="ml-2 font-mono text-xs border border-ink/20 text-ink px-2 py-1.5 rounded-full bg-transparent cursor-pointer"
          >
            {availableLanguages.map((l) => (
              <option key={l} value={l} className="bg-paper">
                {l.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-ink p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-paper/95 backdrop-blur-md border-b border-ink/10"
          >
            <div className="section-container flex flex-col gap-4 py-6">
              {navLinks.map((link, i) => (
                <RouterNavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "font-mono text-sm transition-colors duration-200",
                      isActive ? "text-ember-deep" : "text-ink/60 hover:text-ember-deep"
                    )
                  }
                >
                  <span className="text-ember-deep/70 mr-1">0{i + 1}.</span>
                  {link.label}
                </RouterNavLink>
              ))}
              <a
                href="/Hassaan_Javed_MERN_Stack.pdf"
                download="Hassaan_Javed_MERN_Stack.pdf"
                className="font-mono text-sm border border-ink/20 text-ink px-4 py-2 rounded-full hover:border-ember hover:text-ember-deep transition-colors duration-200 flex items-center gap-1.5 w-fit"
                onClick={() => setMenuOpen(false)}
              >
                <FileText size={14} />
                Download CV
              </a>
              <select
                value={lang}
                onChange={(e) => {
                  const newLang = e.target.value as typeof lang;
                  setLanguage(newLang);
                  setMenuOpen(false);
                }}
                aria-label="Language"
                className="font-mono text-sm border border-ink/20 text-ink px-2 py-1.5 rounded-full bg-transparent w-fit"
              >
                {availableLanguages.map((l) => (
                  <option key={l} value={l} className="bg-paper">
                    {l.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
