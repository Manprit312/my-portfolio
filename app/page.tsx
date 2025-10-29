"use client";
import React, { useEffect, useState } from "react";
import {
  Code,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Sparkles,
  Terminal,
  Rocket,
  Database,
  Globe,
  Zap,
  Linkedin,
  Chrome,
  Triangle,
} from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  
  const [menuOpen, setMenuOpen] = useState(false);




  const experiences = [
    {
      title: "Full Stack Developer",
      company: "AYD Software (BharatAI)",
      period: "May 2025 – Present",
      description:
        "Developed company website, e-commerce platforms with admin dashboards, and multi-service booking systems using Next.js, Node.js, and MongoDB.",
      highlights: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
      link: "https://bharatai-software.vercel.app/",
    },
    {
      title: "Fullstack Developer",
      company: "Appsmartz",
      period: "2023 - May 2025",
      description:
        "Built scalable web & desktop applications, Chrome extensions with recording, screen sharing, Google Classroom integration, and payment gateways.",
      highlights: ["MERN Stack", "Chrome Extensions", "Stripe", "PayPal"],
      link: "https://appsmartz.com/",
    },
    {
      title: "Frontend Developer",
      company: "Deliverables Agency",
      period: "2022 – 2023",
      description:
        "Created audio separation app with Firebase authentication, 2/4 stem separation features, and integrated Stripe & PayPal payments.",
      highlights: ["Firebase", "Audio Processing", "Payment Integration"],
      link: "https://deliverable.agency/",
    },
  ];

  const projects = [
    {
      title: "Vocal Remover - Music Separator (Chrome)",
      description:
        "Chrome extension for audio separation with 2/4 stem options, Firebase authentication, and Stripe/PayPal payment integration.",
      tech: ["Chrome Extension", "Firebase", "Stripe", "PayPal"],
      link: "https://chromewebstore.google.com/detail/vocal-remover-music-separ/bdgbhdnmgjkbpedemhmphgfjabmoagbk?pli=1",
      icon: <Chrome className="w-7 h-7" />,
    },
    {
      title: "ASO Tool - Appahead (Chrome)",
      description:
        "Chrome extension optimized for App Store Optimization to improve visibility on Play Store & App Store.",
      tech: ["Chrome Extension", "ASO", "Analytics"],
      link: "https://chromewebstore.google.com/detail/aso-tool-by-appahead/lieclbckelnmnnbgpoabacgheecgamkd",
      icon: <Chrome className="w-7 h-7" />,
    },
    {
      title: "unMix Desktop App",
      description: "Microsoft Store desktop application for professional audio stem separation.",
      tech: ["Electron.js", "Audio Processing", "Payments"],
      link: "https://apps.microsoft.com/detail/xpdnxlwj897k37?ocid=webpdpshare",
      icon: <Globe className="w-7 h-7" />,
    },
    {
      title: "Storyboats",
      description: "Next.js application with form enhancements and UI updates.",
      tech: ["Next.js", "React", "UI/UX"],
      link: "https://storyboats.com/",
      icon: <Sparkles className="w-7 h-7" />,
    },
    {
      title: "GameSee.gg",
      description: "Gaming platform built with React.js and HTML5.",
      tech: ["React.js", "HTML5", "Gaming"],
      link: "https://gamesee.gg/",
      icon: <Rocket className="w-7 h-7" />,
    },
    {
      title: "Appsmartz (Company site)",
      description: "Company website and services.",
      tech: ["Next.js", "React"],
      link: "https://appsmartz.com/",
      icon: <Globe className="w-7 h-7" />,
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce website with admin dashboard, MongoDB backend, and Cloudinary integration.",
      tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
      link: "https://ecommerce-website-sage-theta.vercel.app/",
      adminLink: "https://ecommerce-admin-dashboard-red-two.vercel.app/products",
      icon: <Rocket className="w-7 h-7" />,
    },
    {
      title: "MultiServices Platform",
      description:
        "Comprehensive booking platform for hotels, taxis, and home cleaning with admin panel.",
      tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
      link: "https://multiservices-alpha.vercel.app/",
      adminLink: "https://multiserve-admin.vercel.app/",
      icon: <Database className="w-7 h-7" />,
    },
    {
      title: "Klypto Trading Website",
      description: "Cryptocurrency trading platform built with Next.js.",
      tech: ["Next.js", "React", "Trading"],
      link: "https://github.com/Klypto-Application/klypto-website-new",
      icon: <Code className="w-7 h-7" />,
    },
    {
      title: "TechVoult (Company Site)",
      description: "Modern company website built with Next.js and contemporary design.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://github.com/Manprit312/TechVoult",
      icon: <Terminal className="w-7 h-7" />,
    },
    {
      title: "BharatAI / BharatAI Software (Company)",
      description: "Company website created for BharatAI.",
      tech: ["Next.js", "React"],
      link: "https://bharatai-software.vercel.app/",
      icon: <Globe className="w-7 h-7" />,
    },
  ];

  const socials = {
    linkedin: "https://www.linkedin.com/in/manprit-k-b164a01b0/",
    github: "https://github.com/Manprit312",
    email: "mailto:mnprt312@gmail.com",
    phone: "tel:+918264874761",
  };

  // subtle random squares for background
  const squares = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 8 + Math.random() * 24,
    delay: Math.random() * 6,
    duration: 6 + Math.random() * 8,
    opacity: 0.06 + Math.random() * 0.12,
  }));

  const icons = [Code, Github, Rocket, Terminal, Database, Chrome,Triangle, Zap];

  // floating cubes
  const cubes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 20 + Math.random() * 40,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 15,
    rotateSpeed: 8 + Math.random() * 12,
  }));

  return (
 <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden relative">
      {/* 🌈 background gradient */}
     
      {/* 🔶 floating shapes and cubes */}
      <div className="absolute inset-0  pointer-events-none">
        {squares.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-sm bg-red-900/30 border border-red-950/50 shadow-lg shadow-red-900/20"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animation: `floatSlow ${s.duration}s ease-in-out ${s.delay}s infinite alternate`,
            }}
          />
        ))}

        {cubes.map((cube) => (
          <div
            key={cube.id}
            className="absolute"
            style={{
              left: `${cube.left}%`,
              top: `${cube.top}%`,
              width: `${cube.size}px`,
              height: `${cube.size}px`,
              animation: `floatCube ${cube.duration}s ease-in-out ${cube.delay}s infinite`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="w-full h-full relative"
              style={{
                animation: `rotateCube ${cube.rotateSpeed}s linear infinite`,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-red-950/60 border border-red-800/40 backdrop-blur-sm"
                style={{ transform: "translateZ(10px)" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-red-950/40 to-red-900/60 border border-red-800/40 backdrop-blur-sm"
                style={{ transform: "rotateY(90deg) translateZ(10px)" }}
              />
            </div>
          </div>
        ))}

        {icons.map((IconComp, i) => (
          <IconComp
            key={i}
            className="absolute text-red-900/40 drop-shadow-[0_0_8px_rgba(127,0,0,0.4)]"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i * 10) % 80}%`,
              width: 48,
              height: 48,
              animation: `iconDrift ${10 + i * 3}s ease-in-out ${i * 0.8}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* 💫 cursor glow (behind text but above bg) */}
      <div
        className="fixed pointer-events-none rounded-full blur-3xl mix-blend-screen "
        style={{
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, rgba(100,0,0,0.25), rgba(80,0,0,0.15) 40%, transparent 70%)",
         
          transition: "left 0.08s linear, top 0.08s linear",
        }}
      />


      {/* nav */}
      <nav className="fixed w-full top-0 z-30 bg-black/40 backdrop-blur-md border-b border-red-950/50 shadow-lg shadow-red-950/20">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-950 rounded-md flex items-center justify-center shadow-lg shadow-red-900/30">
              <Code className="w-5 h-5 text-red-400" />
            </div>
            <div className="text-lg font-bold tracking-wider text-red-500">MANPRIT KAUR</div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-red-400/80">
            {['Home','About','Experience','Projects','Contact'].map((item)=> (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition-colors">{item}</Link>
            ))}
          </div>

          <button className="md:hidden text-red-500" onClick={()=> setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-6 text-2xl text-red-400/90">
          {['Home','About','Experience','Projects','Contact'].map((item)=> (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={()=> setMenuOpen(false)} className="hover:text-red-500 transition-colors">{item}</Link>
          ))}
        </div>
      )}

      {/* hero */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-6">
            <Sparkles className="w-12 h-12 text-red-800 mx-auto opacity-70 drop-shadow-[0_0_15px_rgba(127,0,0,0.5)]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-red-500 via-red-700 to-red-950 drop-shadow-2xl">
            MANPRIT KAUR
          </h1>
          <p className="text-red-400/90 mt-4 text-lg md:text-xl">Full Stack Developer — MERN, Next.js, Electron, Chrome Extensions</p>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">3+ years crafting web & desktop apps, Chrome extensions, and company sites. I focus on high performance, clean UX, and shipping production-ready systems.</p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="#projects" className="px-6 py-3 rounded-lg border border-red-900/60 text-red-400 hover:bg-red-950/30 hover:border-red-800 transition-all shadow-lg shadow-red-950/20">View Projects</Link>
            <Link href="#contact" className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-900 to-red-950 text-red-300 font-semibold hover:scale-105 transition-all shadow-lg shadow-red-900/40">Get In Touch</Link>
          </div>

          <Link href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-red-500 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* about */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-red-500 mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-4">I'm a passionate Full Stack Developer with experience building scalable web applications, desktop software, and Chrome extensions. I specialize in Next.js, Node.js and the MERN stack, and I love turning complex problems into elegant solutions.</p>

            <div className="flex items-center gap-4 text-red-400/90">
              <MapPin className="w-5 h-5" /> <span>Chandigarh / Jalandhar, India</span>
            </div>
            <div className="flex items-center gap-4 mt-3 text-red-400/90">
              <GraduationCap className="w-5 h-5" /> <span>B.Sc. Mathematics – GNDU, 2022</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["React.js","Next.js","Node.js","TypeScript","Firebase","Electron","MongoDB","Tailwind"].map((s,i)=> (
              <div key={s} className="p-5 bg-zinc-950/80 border border-red-950/60 rounded-lg hover:border-red-900/60 transition-all shadow-lg shadow-red-950/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-red-950/40 rounded flex items-center justify-center"> <Code className="w-5 h-5 text-red-500"/> </div>
                  <div className="font-semibold text-red-400">{s}</div>
                </div>
                <div className="text-sm text-gray-400">{i % 2 === 0 ? 'Experienced' : 'Familiar'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/80 rounded-2xl border border-red-950/60 hover:border-red-900/60 transition-all shadow-lg shadow-red-950/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-950 rounded flex items-center justify-center shadow-lg shadow-red-900/30"> <Briefcase className="w-6 h-6 text-red-400"/> </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-red-400">{exp.title}</h3>
                        <div className="text-red-500/90">{exp.company}</div>
                      </div>
                      {exp.link && exp.link !== '#' && (
                        <Link href={exp.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors"> <ExternalLink className="w-5 h-5"/> </Link>
                      )}
                    </div>

                    <p className="text-sm text-gray-400 my-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.highlights.map((h)=> (
                        <span key={h} className="px-2 py-1 text-xs bg-red-950/40 text-red-400 rounded border border-red-900/30">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Link key={i} href={p.link} target="_blank" rel="noreferrer" className="p-6 bg-zinc-950/80 rounded-2xl border border-red-950/50 hover:border-red-900/70 transition-all shadow-lg shadow-red-950/20 hover:scale-105 hover:shadow-red-900/30">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-red-500">{p.icon}</div>
                  <div className="flex gap-2">
                    {p.adminLink && (
                      <Link href={p.adminLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 text-sm">Admin</Link>
                    )}
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t)=> (
                    <span key={t} className="px-2 py-1 text-xs bg-red-950/40 text-red-400 rounded border border-red-900/30">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-red-500 mb-6">Let's Connect</h2>
          <p className="text-gray-300 mb-8">Open to freelance projects, full-time roles, and collaborations. Reach out and let's build something great.</p>

          <div className="flex items-center justify-center gap-8 mb-8">
            <Link href={socials.email} className="text-red-400 hover:text-red-500 transition-colors hover:scale-110 transform"><Mail className="w-7 h-7" /></Link>
            <Link href={socials.phone} className="text-red-400 hover:text-red-500 transition-colors hover:scale-110 transform"><Phone className="w-7 h-7" /></Link>
            <Link href={socials.github} target="_blank" rel="noreferrer" className="text-red-400 hover:text-red-500 transition-colors hover:scale-110 transform"><Github className="w-7 h-7" /></Link>
            <Link href={socials?.linkedin} target="_blank" rel="noreferrer" className="text-red-400 hover:text-red-500 transition-colors hover:scale-110 transform"><Linkedin className="w-7 h-7" /></Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href={socials.email} className="p-6 bg-zinc-950/80 rounded-lg border border-red-950/60 text-left hover:border-red-900/60 transition-all shadow-lg shadow-red-950/20">
              <div className="font-semibold text-red-400">Email</div>
              <div className="text-gray-400 text-sm">mnprt312@gmail.com</div>
            </Link>
            <Link href={socials.phone} className="p-6 bg-zinc-950/80 rounded-lg border border-red-950/60 text-left hover:border-red-900/60 transition-all shadow-lg shadow-red-950/20">
              <div className="font-semibold text-red-400">Phone</div>
              <div className="text-gray-400 text-sm">+91 8264874761</div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-red-950/50 text-center text-gray-500">© 2025 Manprit Kaur — Dark Blood Theme</footer>

     <style jsx>{`
        @keyframes floatSlow {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-22px) rotate(3deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes iconDrift {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(16px, -14px) rotate(8deg) scale(1.1);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
        @keyframes floatCube {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(10px);
          }
        }
        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>

  );
}