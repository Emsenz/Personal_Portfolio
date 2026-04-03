"use client";

import { createContext, useContext, useState } from "react";

type Lang = "en" | "tr";

const translations = {
  en: {
    // Navbar
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_cv: "CV",
    nav_contact: "Contact",

    // Hero
    hero_greeting: "Hello, world! I'm",
    hero_desc:
      "Final year Software Engineering student — building mobile apps, games & AI-powered web experiences.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact Me",

    // About
    about_label: "01. About",
    about_title: "Developer. Student. Creator.",
    about_p1:
      "I'm Emir Sezgin, a final year Software Engineering student with a strong passion for building things that live on mobile, web, and beyond.",
    about_p2:
      "I enjoy crafting smooth mobile experiences with Flutter, building AI-powered web applications, and diving into game development using the Flame engine. I love turning ideas into products that actually work.",
    about_p3:
      "When I'm not coding, I'm exploring new tech, contributing to side projects, and leveling up my craft.",
    about_card1_title: "Education",
    about_card1_desc: "Final year Software Engineering student",
    about_card2_title: "Focus",
    about_card2_desc: "Mobile development, Web Development & AI integrations",
    about_card3_title: "Passion",
    about_card3_desc: "Mobile Game development",

    // Skills
    skills_label: "02. Skills",
    skills_title: "What I work with",
    skills_cat1: "Mobile",
    skills_cat2: "Web & AI",
    skills_cat3: "Backend & Tools",

    // Projects
    projects_label: "03. Projects",
    projects_title: "Things I've built",
    proj1_desc:
      "AI-powered travel planner web application. Plan your trips intelligently with personalized itineraries, destination recommendations, and real-time travel insights.",
    proj2_desc:
      "A 2D zombie survival game built with Flutter and the Flame engine. Features wave-based enemy AI, weapon systems, and smooth mobile gameplay mechanics.",
    proj3_desc:
      "Personal portfolio built with Next.js, Framer Motion, and Tailwind CSS. Features animated sections, a hover-preview project showcase, and an animated 3D character avatar of myself.",
    proj4_desc:
      "Mobile Barcode Scanner Application for Product Price Comparison in Supermarkets. Allows users to scan product barcodes and compare prices across different supermarkets to find more affordable options.",

    // CV
    cv_label: "04. CV",
    cv_title: "Resume",
    cv_education_label: "Education",
    cv_education_school: "Eastern Mediterranean University",
    cv_education_dept: "Software Engineering",
    cv_education_year: "2021 — 2026",
    cv_education_status: "Final Year",
    cv_languages_label: "Languages",
    cv_lang1: "Turkish — Native",
    cv_lang2: "English — Professional",
    cv_download: "Download CV",
    cv_open_label: "Open to opportunities",

    // Contact
    contact_label: "05. Contact",
    contact_title: "Get in touch",
    contact_desc:
      "I'm currently open to new opportunities. Whether you have a project idea, a job offer, or just want to say hi — my inbox is open.",
    contact_cta: "Say Hello",
    contact_built: "Built by",
  },
  tr: {
    // Navbar
    nav_about: "Hakkımda",
    nav_skills: "Beceriler",
    nav_projects: "Projeler",
    nav_cv: "CV",
    nav_contact: "İletişim",

    // Hero
    hero_greeting: "Merhaba, dünya! Ben",
    hero_desc:
      "Son sınıf Yazılım Mühendisliği öğrencisi — mobil uygulamalar, oyunlar ve yapay zeka destekli web deneyimleri geliştiriyorum.",
    hero_cta_projects: "Projeleri Gör",
    hero_cta_contact: "İletişime Geç",

    // About
    about_label: "01. Hakkımda",
    about_title: "Geliştirici. Öğrenci. Yaratıcı.",
    about_p1:
      "Ben Emir Sezgin; mobil, web ve farklı platformlarda katma değer sağlayan çözümler üretme tutkusuna sahip bir Yazılım Mühendisliği son sınıf öğrencisiyim.",
    about_p2:
      "Flutter ile akıcı mobil deneyimler oluşturmayı, yapay zeka destekli web uygulamaları geliştirmeyi ve Flame engine ile oyun geliştirmeye dalmayı seviyorum. Fikirleri gerçekten çalışan ürünlere dönüştürmek benim için en büyük motivasyon.",
    about_p3:
      "Kod yazmadığım zamanlarda yeni teknolojiler keşfediyor, yan projelere katkıda bulunuyor ve kendimi geliştiriyorum.",
    about_card1_title: "Eğitim",
    about_card1_desc: "Doğu Akdeniz Üniversitesinde son sınıf Yazılım Mühendisliği öğrencisi",
    about_card2_title: "Odak",
    about_card2_desc: "Mobil geliştirme, Web & Yapay Zeka entegrasyonları",
    about_card3_title: "Tutku",
    about_card3_desc: "Flutter & Flame ile mobil oyun geliştirme",

    // Skills
    skills_label: "02. Beceriler",
    skills_title: "Çalıştığım teknolojiler",
    skills_cat1: "Mobil",
    skills_cat2: "Web & Yapay Zeka",
    skills_cat3: "Backend & Araçlar",

    // Projects
    projects_label: "03. Projeler",
    projects_title: "Geliştirdiklerim",
    proj1_desc:
      "Yapay zeka destekli seyahat planlama web uygulaması. Kişiselleştirilmiş güzergahlar, destinasyon önerileri ve gerçek zamanlı seyahat içgörüleriyle akıllıca plan yap.",
    proj2_desc:
      "Flutter ve Flame engine ile geliştirilmiş 2D zombi hayatta kalma oyunu. Dalga tabanlı düşman yapay zekası, silah sistemleri ve akıcı mobil oynanış mekaniği içerir.",
    proj3_desc:
      "Next.js, Framer Motion ve Tailwind CSS ile oluşturulmuş kişisel portfolyo. Animasyonlu bölümler, hover önizlemeli proje vitrini ve 3D karakter avatarı içerir.",
    proj4_desc:
      "Süpermarketlerde ürün fiyatı karşılaştırması için mobil barkod tarama uygulaması. Kullanıcıların barkod okutarak farklı marketlerdeki fiyatları karşılaştırmasını sağlar.",

    // CV
    cv_label: "04. CV",
    cv_title: "Özgeçmiş",
    cv_education_label: "Eğitim",
    cv_education_school: "Doğu Akdeniz Üniversitesi",
    cv_education_dept: "Yazılım Mühendisliği",
    cv_education_year: "2021 — 2026",
    cv_education_status: "Son Sınıf",
    cv_languages_label: "Diller",
    cv_lang1: "Türkçe — Anadil",
    cv_lang2: "İngilizce — Profesyonel",
    cv_download: "CV İndir",
    cv_open_label: "Yeni fırsatlara açık",

    // Contact
    contact_label: "05. İletişim",
    contact_title: "Benimle İletişime geç",
    contact_desc:
      "Şu an yeni fırsatlara açığım. Bir proje fikrin, iş teklifin ya da sadece merhaba demek istiyorsan — gelen kutum açık.",
    contact_cta: "Merhaba De",
    contact_built: "Geliştiren",
  },
} as const;

type TranslationKey = keyof typeof translations.en;

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");

  const t = (key: TranslationKey) => translations[lang][key];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
