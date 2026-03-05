import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Linkedin } from "lucide-react";
import { NavLink } from "./NavLink";
import { useLanguage, availableLanguages } from "../i18n";

// nav label texts are hardcoded per requirement
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { language: lang, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="font-mono text-sm font-semibold text-primary tracking-wider"
        >
          {"<Hassaan Javed />"}
        </NavLink>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <NavLink
                to={link.to}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                activeClassName="text-primary"
              >
                <span className="text-primary mr-1">0{i + 1}.</span>
                {link.label}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <button
              onClick={() => setResumeOpen((prev) => !prev)}
              className="font-mono text-xs border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors duration-200 flex items-center gap-1"
            >
              Resume
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${resumeOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-52 rounded border border-border bg-background/95 backdrop-blur-md shadow-lg overflow-hidden z-50"
                >
                  <a
                    href="/Hassaan Javed MERN Stack .pdf"
                    download="Hassaan_Javed_CV.pdf"
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 font-mono text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-150"
                  >
                    <FileText size={13} />
                    Download CV
                  </a>
                  <a
                    href="/Hassaan_Javed_MERN_Linkedin_CV.pdf"
                    download="Hassaan_Javed_LinkedIn_CV.pdf"
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 font-mono text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-150"
                  >
                    <Linkedin size={13} />
                    Download LinkedIn Profile
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          {/* language selector */}
          <select
            value={lang}
            onChange={(e) => {
              const newLang = e.target.value as typeof lang;
              setLanguage(newLang);
            }}
            className="ml-4 font-mono text-xs border border-primary text-primary px-2 py-1 rounded bg-background/20"
          >
            {availableLanguages.map((l) => (
              <option key={l} value={l}>
                {l.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
