"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLang } from "@/app/lang-context";
import { useTheme } from "@/app/theme-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_skills"), href: "#skills" },
    { label: t("nav_projects"), href: "#projects" },
    { label: t("nav_cv"), href: "#cv" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-card border-b py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-1 select-none"
            whileHover={{ scale: 1.04 }}
          >
            <span className="font-mono text-white font-bold text-lg tracking-tight">
              emir
            </span>
            <span
              className="font-mono font-bold text-lg tracking-tight"
              style={{ color: "var(--accent)" }}
            >
              .dev
            </span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-gray-300 hover:text-[var(--accent)] transition-colors duration-200 relative group font-medium"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Language toggle */}
            <div
              className="flex items-center rounded-full p-0.5 gap-0.5"
              style={{
                background: "rgba(0,255,135,0.06)",
                border: "1px solid var(--glass-border)",
              }}
            >
              {(["tr", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest transition-all duration-200"
                  style={{
                    background: lang === l ? "var(--accent)" : "transparent",
                    color: lang === l ? "#030a06" : "rgba(156,163,175,1)",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                background: "rgba(0,255,135,0.06)",
                border: "1px solid var(--glass-border)",
                color: "var(--accent)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{
                background: "rgba(0,255,135,0.06)",
                border: "1px solid var(--glass-border)",
                color: "var(--accent)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>

            <motion.button
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{
                background: "rgba(0,255,135,0.06)",
                border: "1px solid var(--glass-border)",
                color: "var(--accent)",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 md:hidden glass-card border-b px-6 py-4"
          >
            <ul className="flex flex-col gap-4 mb-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-gray-300 hover:text-[var(--accent)] transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language toggle */}
            <div
              className="flex items-center rounded-full p-0.5 gap-0.5 w-fit"
              style={{
                background: "rgba(0,255,135,0.06)",
                border: "1px solid var(--glass-border)",
              }}
            >
              {(["tr", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMenuOpen(false); }}
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest transition-all duration-200"
                  style={{
                    background: lang === l ? "var(--accent)" : "transparent",
                    color: lang === l ? "#030a06" : "rgba(156,163,175,1)",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
