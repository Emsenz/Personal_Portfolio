"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, GraduationCap, Code2, FolderGit2, Globe } from "lucide-react";
import { useLang } from "@/app/lang-context";

export default function CV() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, lang } = useLang();

  const stats = [
    { icon: FolderGit2, value: "4",  label: lang === "tr" ? "Proje" : "Projects" },
    { icon: Code2,      value: "15+", label: lang === "tr" ? "Teknoloji" : "Technologies" },
    { icon: Globe,      value: "2",  label: lang === "tr" ? "Dil" : "Languages" },
    { icon: GraduationCap, value: "2",    label: lang === "tr" ? "Sertifika" : "Certificates" },
  ];

  return (
    <section id="cv" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,135,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
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
              {t("cv_label")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t("cv_title")}
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

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT — CV Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glow behind mockup */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(0,255,135,0.08) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Paper mockup */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, var(--surface) 0%, var(--background) 100%)",
                border: "1px solid var(--glass-border)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,135,0.05)",
              }}
            >
              {/* Mockup top bar */}
              <div
                className="px-6 py-4 flex items-center gap-2 border-b"
                style={{ borderColor: "var(--glass-border)" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[rgba(0,255,135,0.3)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[rgba(0,255,135,0.15)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[rgba(0,255,135,0.08)]" />
                <span className="ml-3 font-mono text-xs text-gray-600">emir_sezgin_cv.pdf</span>
              </div>

              {/* Mockup content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6 pb-6 border-b" style={{ borderColor: "var(--glass-border)" }}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-1">Emir Sezgin</h3>
                      <p className="text-[var(--accent)] text-sm font-mono">
                        {lang === "tr" ? "Yazılım Mühendisi" : "Software Engineer"}
                      </p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg"
                      style={{
                        background: "rgba(0,255,135,0.1)",
                        border: "1px solid rgba(0,255,135,0.2)",
                        color: "var(--accent)",
                      }}
                    >
                      ES
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["emir.sezgin.2003@hotmail.com", "github.com/Emsenz"].map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs text-gray-500 px-2 py-1 rounded"
                        style={{ background: "var(--glass)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education section */}
                <div className="mb-5">
                  <p className="font-mono text-[var(--accent)] text-xs uppercase tracking-widest mb-3">
                    {t("cv_education_label")}
                  </p>
                  <div className="flex items-start gap-3">
                    <div
                      className="w-1 self-stretch rounded-full shrink-0 mt-1"
                      style={{ background: "var(--accent)", minHeight: "40px" }}
                    />
                    <div>
                      <p className="text-white text-sm font-semibold">{t("cv_education_school")}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{t("cv_education_dept")}</p>
                    </div>
                  </div>
                </div>

                {/* Fake skeleton lines */}
                <div className="space-y-2 mt-6">
                  <p className="font-mono text-[var(--accent)] text-xs uppercase tracking-widest mb-3">
                    {lang === "tr" ? "Projeler" : "Projects"}
                  </p>
                  {[85, 70, 60, 75].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full"
                      style={{
                        width: `${w}%`,
                        background: "rgba(0,255,135,0.07)",
                      }}
                    />
                  ))}
                </div>

                {/* Blur overlay — bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Stats + Download */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="glass-card rounded-2xl p-5 flex flex-col gap-3 hover:border-[var(--accent)] transition-all duration-300 group relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(to right, transparent, rgba(0,255,135,0.4), transparent)" }}
                  />
                  <div className="p-2 rounded-lg bg-[rgba(0,255,135,0.08)] w-fit group-hover:bg-[rgba(0,255,135,0.15)] transition-colors duration-300">
                    <stat.icon size={16} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-white text-2xl font-bold">{stat.value}</p>
                    <p className="text-gray-500 text-xs font-mono mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download button card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--accent)] transition-all duration-300 group relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(0,255,135,0.5), transparent)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "rgba(0,255,135,0.02)" }}
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                {lang === "tr"
                  ? "CV'imi indirmek için aşağıdaki butona tıklayın."
                  : "Click the button below to download my CV."}
              </p>
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 w-full"
                style={{
                  background: "var(--accent)",
                  color: "#030a06",
                  boxShadow: "0 0 30px rgba(0,255,135,0.2)",
                }}
              >
                <Download size={18} />
                {t("cv_download")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
