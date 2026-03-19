"use client";

import Image from "next/image";
import { useState } from "react";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";
import RippleGrid from "@/components/RippleGrid";
import ScrollVelocity from "@/components/ScrollVelocity";
import TrueFocus from "@/components/TrueFocus";
import {
  SiJavascript,
  SiLaravel,
  SiNestjs,
  SiPhp,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const services = [
  {
    title: "Pengembangan Frontend React.js",
    meta: "UI dashboard dan sistem internal",
    icon: "FE",
  },
  {
    title: "Backend API Nest.js",
    meta: "RBAC, CRUD, dan integrasi data",
    icon: "BE",
  },
  {
    title: "Database Management",
    meta: "PostgreSQL, MySQL, HeidiSQL",
    icon: "DB",
  },
];

const timeline = [
  {
    id: "edu-2023",
    role: "Mahasiswa D3 Teknik Informatika",
    company: "Universitas Dian Nuswantoro",
    period: "2023 - Sekarang",
    side: "left",
    bullets: [
      "Sedang menempuh pendidikan D3 Teknik Informatika",
      "IPK sementara 3.41",
      "Fokus pada pengembangan aplikasi web",
    ],
  },
  {
    id: "intern-pertamina-2025",
    role: "Staff IT (Web Programmer) - Magang",
    company: "PT Pertamina Lubricants",
    period: "September 2025 - Januari 2026",
    side: "right",
    bullets: [
      "Membangun sistem dashboard management BBM",
      "Mengembangkan dan memelihara aplikasi web internal",
      "Kolaborasi dengan tim IT untuk fitur baru",
      "Mendukung operasional sistem informasi perusahaan",
    ],
  },
  {
    id: "project-asset-2025",
    role: "Web Developer (Project-Based)",
    company: "Asset & Plant Management System",
    period: "September 2025 - Januari 2026",
    side: "left",
    bullets: [
      "Plant Map Management System (React.js & Nest.js)",
      "IT Asset Management System dengan dashboard monitoring",
      "Fitur RBAC, bulk import CSV, overtime, dan laporan Excel",
    ],
  },
];

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.localStorage.getItem("portfolio-theme") === "light";
  });

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const next = !prev;
      window.localStorage.setItem("portfolio-theme", next ? "light" : "dark");
      return next;
    });
  };

  const techLogos: LogoItem[] = [
    {
      node: <SiVuedotjs className="ref-tech-brand-icon" />,
      title: "Vue.js",
      ariaLabel: "Vue.js",
    },
    {
      node: <SiJavascript className="ref-tech-brand-icon" />,
      title: "JavaScript",
      ariaLabel: "JavaScript",
    },
    {
      node: <SiTypescript className="ref-tech-brand-icon" />,
      title: "TypeScript",
      ariaLabel: "TypeScript",
    },
    {
      node: <SiNestjs className="ref-tech-brand-icon" />,
      title: "NestJS",
      ariaLabel: "NestJS",
    },
    {
      node: <SiPhp className="ref-tech-brand-icon" />,
      title: "PHP",
      ariaLabel: "PHP",
    },
    {
      node: <SiLaravel className="ref-tech-brand-icon" />,
      title: "Laravel",
      ariaLabel: "Laravel",
    },
    {
      node: <SiReact className="ref-tech-brand-icon" />,
      title: "ReactJS",
      ariaLabel: "ReactJS",
    },
  ];

  const loopLogos: LogoItem[] = [...techLogos, ...techLogos];

  return (
    <main
      className={`portfolio-page ${isLightMode ? "theme-light" : "theme-dark"}`}
    >
      {/* HEADER NAV SEPERTI REFERENSI */}
      <header className="ref-nav">
        <div className="ref-nav-logo">
          <TrueFocus
            sentence="Aldi Vandiaz"
            separator=" "
            blurAmount={1.6}
            borderColor={isLightMode ? "#258f90" : "#cfe1f1"}
            glowColor={
              isLightMode
                ? "rgba(37, 143, 144, 0.35)"
                : "rgba(207, 225, 241, 0.4)"
            }
            animationDuration={0.45}
            pauseBetweenAnimations={1.15}
            className="ref-nav-focus"
            wordClassName="ref-nav-focus-word"
          />
        </div>
        <div className="ref-nav-actions">
          <button
            className={`ref-theme-toggle ${isLightMode ? "is-on" : ""}`}
            aria-label="Toggle Theme"
            aria-pressed={isLightMode}
            onClick={toggleTheme}
            type="button"
          >
            <span className="ref-theme-knob" />
          </button>
          <div className="ref-lang">
            <span className="ref-flag" aria-hidden="true">
              o
            </span>{" "}
            ID
          </div>
        </div>
      </header>

      <section className="hero-ref">
        {/* BACKGROUND LINGKARAN & BINTANG CENTER */}
        <div className="ref-center-visual">
          <div className="ref-circle-backdrop">
            <div className="ref-ripple-wrap">
              <RippleGrid
                enableRainbow={false}
                gridColor={isLightMode ? "#144f57" : "#ffffff"}
                rippleIntensity={0.05}
                gridSize={10}
                gridThickness={15}
                mouseInteraction
                mouseInteractionRadius={1.2}
                opacity={isLightMode ? 0.65 : 0.8}
              />
            </div>
          </div>
          <Image
            src="/aldi-bg.png"
            alt="Aldi Vandiaz Maulana"
            fill
            priority
            className="ref-person"
          />
        </div>

        <div className="ref-hero-content">
          <div className="ref-left">
            <span className="ref-saya">Saya</span>
            <h1 className="ref-name">Aldi Vandiaz</h1>
            <div className="ref-line" />
            <p className="ref-bio-main">
              Sebagai mahasiswa dari Fakultas Ilmu Komputer dengan pengalaman 2
              tahun di bidang Frontend, Program Studi D-3 Teknik Informatika di
              Universitas Dian Nuswantoro, saya memiliki semangat dan motivasi
              tinggi, selalu mencari tantangan baru, serta berinisiatif. Mahir
              dalam membuat situs web responsif menggunakan HTML dan CSS, saya
              juga memiliki keahlian dalam bahasa pemrograman JavaScript dan
              PHP.
            </p>
          </div>

          <div className="ref-right">
            <h2 className="ref-role">Web Programmer</h2>
            <ul className="ref-role-desc">
              <li>
                Saya memiliki passion dalam menciptakan aplikasi yang stabil dan
                terukur.
              </li>
              <li>
                Selalu bersemangat untuk mempelajari teknologi baru dan problem
                solving.
              </li>
            </ul>

            <div className="ref-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ref-social-circle"
                title="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="tech-icon"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/aldi-vandiaz-maulana-5450012a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="ref-social-circle"
                title="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="tech-icon"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ref-social-circle"
                title="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="tech-icon"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="https://github.com/aldievanz"
                target="_blank"
                rel="noopener noreferrer"
                className="ref-social-circle"
                title="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="tech-icon"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM TECH DOCK */}
        <div className="ref-tech-dock">
          <LogoLoop
            logos={loopLogos}
            speed={82}
            logoHeight={36}
            gap={48}
            pauseOnHover
            fadeOut={false}
            ariaLabel="Tech stack loop"
            className="ref-tech-loop"
            renderItem={(item, key) => (
              <div className="ref-tech-item" key={key} title={item.title}>
                {"node" in item ? item.node : null}
              </div>
            )}
          />
        </div>

        <div className="hero-bottom-wave" aria-hidden="true">
          <span className="wave-layer wave-layer-back" />
          <span className="wave-layer wave-layer-front" />
        </div>
      </section>

      <section className="skills section-pattern" id="about">
        <div className="skills-grid">
          <div className="skills-left">
            <h2>Apa Yang Saya Bisa Lakukan?</h2>
            <p>
              Saya fokus membangun aplikasi web modern dengan alur kerja
              terstruktur dari desain database, pengembangan frontend, hingga
              integrasi API. Saya terbiasa mengerjakan sistem internal dengan
              kebutuhan data yang dinamis dan role-based access.
            </p>
            <div className="stats-row">
              <div>
                <strong>2</strong>
                <span>Proyek Selesai</span>
              </div>
              <div>
                <strong>6 Bulan</strong>
                <span>Pengalaman Magang</span>
              </div>
            </div>
          </div>

          <div className="skills-right">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="skill-cards">
          <article>
            <span className="card-dot" />
            <h3>Pemrograman Web</h3>
            <p>
              Menguasai Java, JavaScript/TypeScript, PHP, HTML, CSS, dan XML
              untuk membangun aplikasi web yang terstruktur, responsif, dan
              mudah dikembangkan.
            </p>
          </article>
          <article>
            <span className="card-dot" />
            <h3>Cloud, Tools, dan Kolaborasi</h3>
            <p>
              Menggunakan GitHub, Git, Postman, Axios, VS Code, serta memahami
              dasar cloud platform seperti GCP, AWS Fundamental, dan deployment
              ke Vercel.
            </p>
          </article>
        </div>
      </section>

      <section className="portfolio">
        <div className="section-head">
          <h2>Portofolio Terbaik Pilihan Saya</h2>
          <p>
            Dua proyek utama berikut dikerjakan pada masa magang dan
            project-based development dengan fokus pada manajemen data,
            monitoring operasional, dan keamanan akses pengguna.
          </p>
        </div>

        <div className="portfolio-grid">
          <article className="project-card">
            <div className="project-meta">React.js & Nest.js</div>
            <h3>Plant Map Management System</h3>
            <p>
              Sistem pemetaan dan monitoring lokasi plant/unit produksi dengan
              fitur CRUD, manajemen user, visualisasi peta, dan RBAC.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
              alt="Plant map management system"
              fill
              className="project-cover"
            />
          </article>

          <article className="project-card">
            <div className="project-meta">React.js, Nest.js, PostgreSQL</div>
            <h3>IT Asset Management System</h3>
            <p>
              Sistem manajemen aset IT dengan dashboard monitoring BBM, bulk
              import CSV, RBAC, modul overtime, serta laporan berbasis Excel.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
              alt="IT asset management system"
              fill
              className="project-cover"
            />
          </article>
        </div>
      </section>

      <section className="experience section-pattern">
        <div className="section-head">
          <h2>Pengalaman Kerja Saya</h2>
          <p>
            Saya membangun pengalaman dari pendidikan formal, program magang,
            dan implementasi proyek nyata untuk menyelesaikan kebutuhan sistem
            internal secara end-to-end.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <article className={`timeline-item ${item.side}`} key={item.id}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="period">{item.period}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="name-wall">
        <ScrollVelocity
          velocity={60}
          numCopies={4}
          texts={[
            <span
              key="row-1"
              className="name-wall-text name-wall-text--outline"
            >
              ALDI VANDIAZ MAULANA
            </span>,
            <span key="row-2" className="name-wall-text name-wall-text--solid">
              ALDI VANDIAZ MAULANA
            </span>,
            <span
              key="row-3"
              className="name-wall-text name-wall-text--outline"
            >
              ALDI VANDIAZ MAULANA
            </span>,
            <span key="row-4" className="name-wall-text name-wall-text--solid">
              ALDI VANDIAZ MAULANA
            </span>,
          ]}
          parallaxClassName="name-wall-row"
          scrollerClassName="name-wall-scroller"
        />
      </section>

      <section className="cta section-pattern">
        <div>
          <h2>Mari bangun solusi digital bersama</h2>
          <p>
            Saya siap berkontribusi sebagai web programmer untuk membangun
            aplikasi yang rapi, cepat, dan sesuai kebutuhan bisnis.
          </p>
        </div>
        <div className="cta-avatar">
          <Image
            src="/aldi-bg.png"
            alt="Aldi Vandiaz Maulana formal portrait"
            fill
            className="cover"
          />
        </div>
      </section>

      <footer className="site-footer" aria-label="Footer">
        <div className="site-footer-inner">
          <div className="footer-brand">
            <strong>Aldi</strong>
            <span>Vandiaz</span>
          </div>

          <p className="footer-note">
            This website was build using Next.js, Typescript, Tailwind CSS, and
            Shadcn by Aldi Vandiaz
          </p>

          <a
            href="https://github.com/aldievanz"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-github"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
