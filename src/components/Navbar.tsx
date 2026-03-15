import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { language: lang, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="font-mono text-sm font-semibold text-primary tracking-wider"
        >
          {"<Hassaan Javed />"}
        </NavLink>

        {/* Desktop nav */}
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
          <a
            href="/Hassaan_Javed_MERN_Stack.pdf"
            download="Hassaan_Javed_MERN_Stack.pdf"
            className="font-mono text-xs border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors duration-200 flex items-center gap-1"
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
            className="ml-4 font-mono text-xs border border-primary text-primary px-2 py-1 rounded bg-background/20"
          >
            {availableLanguages.map((l) => (
              <option key={l} value={l}>
                {l.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-primary p-2"
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
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="section-container flex flex-col gap-4 py-6">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  activeClassName="text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-primary mr-1">0{i + 1}.</span>
                  {link.label}
                </NavLink>
              ))}
              <a
                href="/Hassaan_Javed_MERN_Stack.pdf"
                download="Hassaan_Javed_MERN_Stack.pdf"
                className="font-mono text-sm border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors duration-200 flex items-center gap-1 w-fit"
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
                className="font-mono text-sm border border-primary text-primary px-2 py-1 rounded bg-background/20 w-fit"
              >
                {availableLanguages.map((l) => (
                  <option key={l} value={l}>
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
