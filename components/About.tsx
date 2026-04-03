"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Gamepad2 } from "lucide-react";
import { useLang } from "@/app/lang-context";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const highlights = [
    { icon: GraduationCap, title: t("about_card1_title"), desc: t("about_card1_desc"), num: "01" },
    { icon: Code2,         title: t("about_card2_title"), desc: t("about_card2_desc"), num: "02" },
    { icon: Gamepad2,      title: t("about_card3_title"), desc: t("about_card3_desc"), num: "03" },
  ];

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,135,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-3">
              {t("about_label")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t("about_title")}
            </h2>
          </div>
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 h-px mb-4 origin-left hidden md:block"
            style={{ background: "linear-gradient(to right, var(--glass-border), transparent)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div
              className="pl-5 border-l-2 space-y-5"
              style={{ borderColor: "var(--accent)" }}
            >
              <p className="text-gray-400 leading-relaxed">{t("about_p2")}</p>
              <p className="text-gray-400 leading-relaxed">{t("about_p3")}</p>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-[var(--accent)] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Top gradient accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }}
                />

                <div className="p-2.5 rounded-xl bg-[rgba(0,255,135,0.08)] group-hover:bg-[rgba(0,255,135,0.15)] transition-colors duration-300">
                  <item.icon size={22} className="text-[var(--accent)]" />
                </div>

                <div className="flex-1">
                  <p className="text-white font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Number badge */}
                <span className="font-mono text-xs text-gray-700 group-hover:text-gray-500 transition-colors duration-300 self-start pt-1">
                  {item.num}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
