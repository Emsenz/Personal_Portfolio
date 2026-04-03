"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/app/lang-context";
import { Smartphone, Globe, Wrench } from "lucide-react";

const skillIcons: Record<string, string> = {
  Flutter:       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Dart:          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  Firebase:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Firestore:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Firebase & Firestore": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Next.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  React:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TypeScript:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind CSS":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  HTML:          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS:           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Git:           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub:        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Python:        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Flame Engine": "https://user-images.githubusercontent.com/6718144/101553774-3bc7b000-39ad-11eb-8a6a-de2daa31bd64.png",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const skillGroups = [
    {
      icon: Smartphone,
      category: t("skills_cat1"),
      color: "rgba(0,255,135,0.12)",
      skills: ["Flutter", "Dart", "Flame Engine", "Firebase"],
    },
    {
      icon: Globe,
      category: t("skills_cat2"),
      color: "rgba(0,200,255,0.08)",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: Wrench,
      category: t("skills_cat3"),
      color: "rgba(180,100,255,0.08)",
      skills: ["Node.js", "Git", "GitHub", "Python", "Firebase & Firestore"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,135,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-3">
              {t("skills_label")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t("skills_title")}
            </h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 h-px mb-4 origin-left hidden md:block"
            style={{ background: "linear-gradient(to right, var(--glass-border), transparent)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="glass-card rounded-2xl p-6 hover:border-[var(--accent)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Card background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: group.color }}
              />
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(0,255,135,0.5), transparent)" }}
              />

              {/* Card header */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[rgba(0,255,135,0.08)] group-hover:bg-[rgba(0,255,135,0.15)] transition-colors duration-300">
                    <group.icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-[var(--accent)] font-mono text-sm uppercase tracking-widest">
                    {group.category}
                  </h3>
                </div>
                {/* Skill count badge */}
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    color: "var(--accent)",
                    background: "rgba(0,255,135,0.08)",
                    border: "1px solid rgba(0,255,135,0.2)",
                  }}
                >
                  {group.skills.length}
                </span>
              </div>

              {/* Skill list with icons */}
              <div className="relative flex flex-col gap-2">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.15 + si * 0.06 + 0.2 }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group/skill cursor-default"
                    style={{ background: "rgba(0,255,135,0.03)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,255,135,0.08)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,255,135,0.03)")}
                  >
                    {skillIcons[skill] ? (
                      <img
                        src={skillIcons[skill]}
                        alt={skill}
                        className="w-5 h-5 object-contain shrink-0"
                        style={{ filter: skill === "GitHub" ? "invert(1)" : undefined }}
                      />
                    ) : (
                      <div
                        className="w-5 h-5 rounded shrink-0"
                        style={{ background: "rgba(0,255,135,0.2)" }}
                      />
                    )}
                    <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
