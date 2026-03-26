"use client";

import Image from "next/image";
import { motion } from "motion/react";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";
import ScrollVelocity from "@/components/ScrollVelocity";
import TrueFocus from "@/components/TrueFocus";
import SplashCursor from "@/components/SplashCursor";
import {
  SiJavascript,
  SiLaravel,
  SiNestjs,
  SiPhp,
  SiReact,
  SiTypescript,
  SiVuedotjs,
  SiInstagram,
} from "react-icons/si";

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
  const techLogos: LogoItem[] = [
    { node: <SiReact className="ref-tech-brand-icon" />, title: "React" },
    { node: <SiVuedotjs className="ref-tech-brand-icon" />, title: "Vue.js" },
    {
      node: <SiJavascript className="ref-tech-brand-icon" />,
      title: "JavaScript",
    },
    {
      node: <SiTypescript className="ref-tech-brand-icon" />,
      title: "TypeScript",
    },
    { node: <SiNestjs className="ref-tech-brand-icon" />, title: "NestJS" },
    { node: <SiPhp className="ref-tech-brand-icon" />, title: "PHP" },
    { node: <SiLaravel className="ref-tech-brand-icon" />, title: "Laravel" },
  ];

  const loopLogos: LogoItem[] = [...techLogos, ...techLogos];

  return (
    <main className="portfolio-page">
      <SplashCursor />
      {/* HEADER NAV SEPERTI REFERENSI */}
      <header className="ref-nav">
        <div className="ref-nav-logo">
          <TrueFocus
            sentence="Aldi Vandiaz"
            separator=" "
            blurAmount={1.6}
            borderColor="#258f90"
            glowColor="rgba(37, 143, 144, 0.35)"
            animationDuration={0.45}
            pauseBetweenAnimations={1.15}
            className="ref-nav-focus"
            wordClassName="ref-nav-focus-word"
          />
        </div>
        <div className="ref-nav-actions">
          <div className="ref-lang">
            <span className="ref-flag" aria-hidden="true">
              o
            </span>{" "}
            ID
          </div>
        </div>
      </header>

      <section className="hero-ref">
        {/* BACKGROUND LINGKARAN CENTER - TANPA RIPPLE */}
        <div className="ref-center-visual">
          <div className="ref-circle-backdrop" />
          <Image
            src="/aldi-bg.png"
            alt="Aldi Vandiaz Maulana"
            fill
            priority
            className="ref-person"
          />
        </div>

        <div className="ref-hero-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="ref-left"
          >
            <span className="ref-saya">I&apos;m</span>
            <h1 className="ref-name">
              <span style={{ whiteSpace: "nowrap" }}>
                {"Aldi Vandiaz".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <br />
              {"Maulana".split("").map((char, index) => (
                <motion.span
                  key={`m-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.05 }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="ref-line"
            />
            <p className="ref-bio-main">
              Sebagai mahasiswa dari Fakultas Ilmu Komputer dengan pengalaman 2
              tahun di bidang Frontend, Program Studi D-3 Teknik Informatika di
              Universitas Dian Nuswantoro, saya memiliki semangat dan motivasi
              tinggi, selalu mencari tantangan baru, serta berinisiatif. Mahir
              dalam membuat situs web responsif menggunakan HTML dan CSS, saya
              juga memiliki keahlian dalam bahasa pemrograman JavaScript dan
              PHP.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="ref-right"
          >
            <h2 className="ref-role">Frontend Developer</h2>
            <p className="ref-role-desc" style={{ marginBottom: "1.5rem" }}>
              Saya memiliki passion dalam menciptakan antarmuka pengguna yang
              menarik dan fungsional. Selalu bersemangat untuk mempelajari
              teknologi baru dan memberikan solusi inovatif.
            </p>

            <p className="ref-get-to-know">Kenali Saya Lebih Lanjut</p>

            <div className="ref-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ref-social-circle group relative"
                title="Instagram"
              >
                <SiInstagram className="tech-icon relative z-10" />
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
          </motion.div>
        </div>

        {/* BOTTOM TECH DOCK */}
        <div className="ref-tech-dock">
          <LogoLoop
            logos={loopLogos}
            speed={80}
            direction="left"
            logoHeight={50}
            gap={200}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Tech stack loop"
            className="ref-tech-loop"
          />
        </div>

        {/* BOTTOM WAVE TRANSITION */}
        <div className="hero-bottom-wave">
          <div className="hero-wave-layer hero-wave-layer-back" />
          <div className="hero-wave-layer hero-wave-layer-front" />
        </div>
      </section>

      <section className="skills-light" id="about">
        <div className="skills-grid-light">
          <div className="skills-left-light">
            <h2 className="skills-title-pink">
              Apa Yang Saya Bisa
              <br />
              Lakukan?
            </h2>
            <p>
              Saya mengkhususkan diri dalam membangun situs web yang menarik
              secara visual dan sangat fungsional sesuai dengan kebutuhan unik
              Anda. Mulai dari menciptakan desain responsif yang bekerja mulus
              di semua perangkat hingga memastikan kinerja dan pengalaman
              pengguna yang optimal, saya berusaha memberikan hasil yang
              melampaui ekspektasi.
            </p>
            <div className="stats-row-light">
              <div>
                <strong>5+</strong>
                <span>Proyek Selesai</span>
              </div>
              <div>
                <strong>2+</strong>
                <span>Tahun Pengalaman</span>
              </div>
            </div>
          </div>

          <div className="skills-right-light">
            <article className="service-item-light">
              <div className="service-icon-box">
                <Image
                  src="/fe.svg"
                  alt="Pengembangan Frontend"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h3>Pengembangan Frontend</h3>
                <p>5+ Proyek Selesai</p>
              </div>
            </article>

            <article className="service-item-light">
              <div className="service-icon-box">
                <Image
                  src="/fullstack.svg"
                  alt="Pengembangan Fullstack"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h3>Pengembangan Fullstack</h3>
                <p>2+ Proyek Selesai</p>
              </div>
            </article>

            <article className="service-item-light">
              <div className="service-icon-box">
                <Image
                  src="/ui.svg"
                  alt="Desain UI/UX"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h3>Desain UI/UX</h3>
                <p>Antarmuka Modern & Responsif</p>
              </div>
            </article>
          </div>
        </div>

        <div className="skill-cards-light">
          <article className="skill-card-box">
            <div className="skill-card-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#5D9B9B" />
                <path
                  d="M12 11L7 16L12 21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11L25 16L20 21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 9L15 23"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Pemrograman Web</h3>
            <p>
              Pemrograman web melibatkan pembuatan situs web dan aplikasi yang
              dinamis menggunakan bahasa seperti HTML, CSS, JavaScript, PHP,
              memastikan fungsi dan interaksi pengguna.
            </p>
          </article>
          <article className="skill-card-box">
            <div className="skill-card-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#5D9B9B" />
                <rect
                  x="9"
                  y="10"
                  width="14"
                  height="12"
                  rx="1"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path d="M9 14 L23 14" stroke="white" strokeWidth="1.5" />
                <path d="M13 14 L13 22" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <h3>Desain UI/UX</h3>
            <p>
              Desain UI/UX berfokus pada perancangan antarmuka visual yang
              modern dan intuitif, dengan mengutamakan kenyamanan, kemudahan,
              dan interaksi pengalaman pengguna yang memuaskan.
            </p>
          </article>
        </div>
      </section>

      <section className="portfolio">
        <div className="portfolio-inner">
          <div className="portfolio-intro">
            <h2 className="portfolio-title">Portofolio Terbaik Pilihan Saya</h2>
            <p className="portfolio-desc">
              Berikut adalah beberapa proyek paling menonjol saya yang
              menunjukkan kreativitas, keahlian teknis, dan dedikasi untuk
              memberikan hasil yang luar biasa. Setiap proyek menyoroti
              kemampuan saya dalam merancang, mengembangkan, dan
              mengimplementasikan solusi yang disesuaikan dengan kebutuhan unik
              klien, memastikan fungsionalitas, responsivitas, dan kepuasan
              pengguna.
            </p>
          </div>

          <div className="portfolio-cards-grid">
            <article className="portfolio-card-new">
              <div className="portfolio-card-header">
                <span className="portfolio-card-tag">React.js & Nest.js</span>
                <h3>Plant Map Management System</h3>
                <p>
                  Sistem pemetaan dan monitoring lokasi plant/unit produksi
                  dengan fitur CRUD, manajemen user, visualisasi peta, dan RBAC.
                </p>
              </div>
              <div className="portfolio-card-image">
                <Image
                  src="/plant-map-mockup.png"
                  alt="Plant Map Management System Dashboard"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </article>

            <article className="portfolio-card-new">
              <div className="portfolio-card-header">
                <span className="portfolio-card-tag">
                  React.js, Nest.js, PostgreSQL
                </span>
                <h3>IT Asset Management System</h3>
                <p>
                  Sistem manajemen aset IT dengan dashboard monitoring BBM, bulk
                  import CSV, RBAC, modul overtime, serta laporan berbasis
                  Excel.
                </p>
              </div>
              <div className="portfolio-card-image">
                <Image
                  src="/it-asset-mockup.png"
                  alt="IT Asset Management System Dashboard"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </article>
          </div>
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
