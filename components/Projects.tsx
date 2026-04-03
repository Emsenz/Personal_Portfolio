"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/app/lang-context";

interface Project {
  title: string;
  titleTR?: string;
  description: string;
  descriptionTR: string;
  year: string;
  github: string;
  live: string | null;
  image: string;
  imagePosition?: string;
  imageFit?: React.CSSProperties["objectFit"];
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Gezish AI",
    description:
      "AI-powered travel planner web application. Plan your trips intelligently with personalized itineraries, destination recommendations, and real-time travel insights.",
    descriptionTR:
      "Yapay zeka destekli seyahat planlama web uygulaması. Kişiselleştirilmiş güzergahlar, destinasyon önerileri ve gerçek zamanlı seyahat içgörüleriyle akıllıca plan yap.",
    year: "2026",
    github: "https://github.com/Emsenz/GezishAI",
    live: "https://gezish-ai.vercel.app/",
    image: "/gezish.png",
    tags: ["React", "AI-Integration", "JavaScript", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Zombie Defense Game (In Development)",
    titleTR: "Zombie Defense Game (Geliştirme Sürecinde)",
    description:
      "A 2D zombie survival game built with Flutter and the Flame engine. Features wave-based enemy AI, weapon systems, and smooth mobile gameplay mechanics.",
    descriptionTR:
      "Flutter ve Flame engine ile geliştirilmiş 2D zombi hayatta kalma oyunu. Dalga tabanlı düşman yapay zekası, silah sistemleri ve akıcı mobil oynanış mekaniği içerir.",
    year: "2025",
    github: "https://github.com/Emsenz/Zombie-Mobile-Game",
    live: null,
    image: "/zombie.jpg",
    tags: ["Flutter", "Flame", "Dart", "Game Dev"],
  },
  {
    title: "The Portfolio Website You Are Currently Viewing",
    titleTR: "Şu an incelediğiniz Portfolyo Websitesi",
    description:
      "Personal portfolio built with Next.js, Framer Motion, and Tailwind CSS. Features animated sections, a hover-preview project showcase, and an animated 3D character avatar of myself.",
    descriptionTR:
      "Next.js, Framer Motion ve Tailwind CSS ile oluşturulmuş kişisel portfolyo. Animasyonlu bölümler, hover önizlemeli proje vitrini ve 3D karakter avatarı içerir.",
    year: "2026",
    github: "https://github.com/Emsenz/Personal_Portfolio",
    live: "",
    image: "/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "ScanWiser (Group Project)",
    description:
      "Mobile Barcode Scanner Application for Product Price Comparison in Supermarkets. Allows users to scan product barcodes and compare prices across different supermarkets to find more affordable options.",
    descriptionTR:
      "Süpermarketlerde ürün fiyatı karşılaştırması için mobil barkod tarama uygulaması. Kullanıcıların barkod okutarak farklı marketlerdeki fiyatları karşılaştırmasını sağlar.",
    year: "2025",
    github: "https://github.com/Bekirmse/grad_qr_project",
    live: null,
    image: "/scanwiser.jpg",
    imageFit: "contain",
    tags: ["Flutter", "Dart", "Mobile App", "Firebase", "Git&GitHub Collaboration"],
  },
];

export default function Projects() {
  const { lang, t } = useLang();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="projects" className="py-28 px-6" ref={sectionRef}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-3">
            {t("projects_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("projects_title")}
          </h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Floating image preview */}
          <div
            className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
            style={{
              left: containerRef.current?.getBoundingClientRect().left ?? 0,
              top: containerRef.current?.getBoundingClientRect().top ?? 0,
              transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 120}px, 0)`,
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.85,
              transition:
                "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className="relative w-[280px] h-[180px] rounded-xl overflow-hidden"
              style={{
                background: hoveredIndex !== null && projects[hoveredIndex]?.imageFit === "contain"
                  ? "#f5f5f5"
                  : "var(--surface)",
              }}
            >
              {projects.map((project, index) => (
                <img
                  key={project.title}
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full transition-all duration-500 ease-out"
                  style={{
                    objectFit: project.imageFit ?? "cover",
                    objectPosition: project.imagePosition ?? "center",
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 1.1,
                    filter: hoveredIndex === index ? "none" : "blur(10px)",
                  }}
                />
              ))}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,10,6,0.3), transparent)",
                }}
              />
            </div>
          </div>

          {/* Project list */}
          <div className="space-y-0">
            {projects.map((project, index) => {
              const hasLive = !!project.live;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setIsVisible(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setIsVisible(false);
                  }}
                  className="group"
                >
                  <div
                    className="relative py-5 border-t transition-all duration-300 ease-out"
                    style={{ borderColor: "var(--glass-border)" }}
                  >
                    {/* Hover background */}
                    <div
                      className="absolute inset-0 -mx-4 px-4 rounded-lg transition-all duration-300 ease-out"
                      style={{
                        background:
                          hoveredIndex === index
                            ? "rgba(0,255,135,0.04)"
                            : "transparent",
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Title + arrow */}
                        <div className="inline-flex items-center gap-2">
                          <a
                            href={hasLive ? project.live! : project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h3 className="text-white font-medium text-lg tracking-tight">
                              <span className="relative">
                                {lang === "tr" && project.titleTR ? project.titleTR : project.title}
                                <span
                                  className="absolute left-0 -bottom-0.5 h-px transition-all duration-300 ease-out"
                                  style={{
                                    background: "var(--accent)",
                                    width:
                                      hoveredIndex === index ? "100%" : "0%",
                                  }}
                                />
                              </span>
                            </h3>
                          </a>
                          <ArrowUpRight
                            className="w-4 h-4 transition-all duration-300 ease-out"
                            style={{
                              color: "var(--accent)",
                              opacity: hoveredIndex === index ? 1 : 0,
                              transform:
                                hoveredIndex === index
                                  ? "translate(0,0)"
                                  : "translate(-6px, 6px)",
                            }}
                          />
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm mt-1 leading-relaxed transition-colors duration-300"
                          style={{
                            color:
                              hoveredIndex === index
                                ? "rgba(240,240,240,0.7)"
                                : "rgba(156,163,175,1)",
                          }}
                        >
                          {lang === "tr" ? project.descriptionTR : project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-xs px-2.5 py-1 rounded-md"
                              style={{
                                color: "var(--accent-dim)",
                                background: "rgba(16,185,129,0.08)",
                                border: "1px solid rgba(16,185,129,0.2)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right side: year + links */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span
                          className="text-xs font-mono tabular-nums transition-colors duration-300"
                          style={{
                            color:
                              hoveredIndex === index
                                ? "rgba(240,240,240,0.6)"
                                : "rgba(107,114,128,1)",
                          }}
                        >
                          {project.year}
                        </span>

                        {hasLive ? (
                          /* Gezish AI: both icons with labels */
                          <div className="flex items-center gap-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 transition-colors duration-200"
                              style={{
                                color:
                                  hoveredIndex === index
                                    ? "var(--accent)"
                                    : "rgba(107,114,128,1)",
                              }}
                              title="GitHub"
                            >
                              <GithubIcon size={20} />
                              <span
                                className="text-xs font-mono transition-all duration-300 overflow-hidden"
                                style={{
                                  maxWidth: hoveredIndex === index ? "60px" : "0px",
                                  opacity: hoveredIndex === index ? 1 : 0,
                                }}
                              >
                                GitHub
                              </span>
                            </a>
                            <a
                              href={project.live!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 transition-colors duration-200"
                              style={{
                                color:
                                  hoveredIndex === index
                                    ? "var(--accent)"
                                    : "rgba(107,114,128,1)",
                              }}
                              title="Live Site"
                            >
                              <ExternalLink size={20} />
                              <span
                                className="text-xs font-mono transition-all duration-300 overflow-hidden"
                                style={{
                                  maxWidth: hoveredIndex === index ? "60px" : "0px",
                                  opacity: hoveredIndex === index ? 1 : 0,
                                }}
                              >
                                Live
                              </span>
                            </a>
                          </div>
                        ) : (
                          /* Other projects: only GitHub */
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-200"
                            style={{
                              color:
                                hoveredIndex === index
                                  ? "var(--accent)"
                                  : "rgba(107,114,128,1)",
                            }}
                          >
                            <GithubIcon size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom border */}
            <div
              className="border-t"
              style={{ borderColor: "var(--glass-border)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
