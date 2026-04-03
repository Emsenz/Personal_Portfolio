"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/app/lang-context";

const techIcons = [
  { label: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { label: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { label: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const firstNameLetters = "Emir".split("");
const lastNameLetters = "Sezgin".split("");

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="min-h-screen mesh-bg flex flex-col items-center justify-center relative px-6">
      {/* Glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,135,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl w-full">
        {/* Text side */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[var(--accent)] text-sm mb-4 tracking-widest uppercase"
          >
            {t("hero_greeting")}
          </motion.p>

          {/* Animated name — letter by letter */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-none tracking-tight">
            <span className="inline-block">
              {firstNameLetters.map((letter, i) => (
                <motion.span
                  key={`first-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="inline-block text-white"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <br />
            <span className="inline-block">
              {lastNameLetters.map((letter, i) => (
                <motion.span
                  key={`last-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.07 }}
                  className="inline-block text-[var(--accent)]"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl"
          >
            {t("hero_desc")}
          </motion.p>

          {/* Tech icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="flex items-center justify-center md:justify-start gap-4 flex-wrap"
          >
            {techIcons.map((icon, i) => (
              <motion.div
                key={icon.label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 1.1 + i * 0.07 }}
                title={icon.label}
                className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <img src={icon.src} alt={icon.label} className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Avatar video side with glow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="shrink-0 flex items-center justify-center relative"
        >
          {/* Rotating glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "calc(100% + 20px)",
              height: "calc(100% + 20px)",
              background:
                "conic-gradient(from 0deg, transparent 60%, rgba(0,255,135,0.5) 80%, rgba(0,255,135,0.9) 90%, rgba(0,255,135,0.5) 100%, transparent 110%)",
              borderRadius: "50%",
              filter: "blur(3px)",
            }}
          />
          {/* Static soft glow behind */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "calc(100% + 40px)",
              height: "calc(100% + 40px)",
              background: "radial-gradient(circle, rgba(0,255,135,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          <div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden"
            style={{
              border: "2px solid var(--glass-border)",
            }}
          >
            <video
              src="/avatar.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 37%" }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-[var(--accent)] opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
