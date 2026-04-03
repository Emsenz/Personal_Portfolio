"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { useLang } from "@/app/lang-context";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Emsenz",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emir-sezgin-861343335/",
      icon: LinkedinIcon,
    },
    {
      label: "Email",
      href: "mailto:emir.sezgin.2003@hotmail.com",
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      {/* Decorative large bg text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter"
          style={{ color: "rgba(0,255,135,0.02)" }}
        >
          HI
        </span>
      </div>

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,135,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-3">
            {t("contact_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            {t("contact_title")}
          </h2>
        </motion.div>

        {/* Social cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="glass-card flex items-center gap-3 px-8 py-4 rounded-full text-base text-gray-400 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200 hover:scale-105"
            >
              <s.icon size={20} />
              {s.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-24 text-center"
      >
        <p className="font-mono text-gray-600 text-xs">
          {t("contact_built")}{" "}
          <span className="text-[var(--accent)]">Emir Sezgin</span> — 2026
        </p>
      </motion.div>
    </section>
  );
}
