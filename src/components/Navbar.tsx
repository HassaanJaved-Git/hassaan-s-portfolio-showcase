import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-mono text-sm font-semibold text-primary tracking-wider">
          {"<Hassaan Javed />"}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="text-primary mr-1">0{i + 1}.</span>
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/Hassaan Javed MERN Stack .pdf"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-xs border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors duration-200"
          >
            Resume
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
