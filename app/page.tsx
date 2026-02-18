"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isScrolled = scrollY > 80;

  const features = [
    {
      icon: "◈",
      title: "Premium Office Spaces",
      desc: "Class-A buildings with state-of-the-art amenities, floor-to-ceiling windows, and flexible lease terms tailored to your business.",
      color: "#C9A84C",
    },
    {
      icon: "◉",
      title: "Market Intelligence",
      desc: "Real-time data analytics, vacancy rates, and pricing trends across TSNshore's commercial corridors — giving you an edge.",
      color: "#4C9AC9",
    },
    {
      icon: "◐",
      title: "Tenant Representation",
      desc: "Our dedicated brokers negotiate on your behalf, securing below-market rates and favorable lease concessions.",
      color: "#C94C7A",
    },
    {
      icon: "◑",
      title: "Portfolio Management",
      desc: "End-to-end asset management, from acquisition strategy to disposition — maximizing your commercial real estate ROI.",
      color: "#4CC97A",
    },
  ];

  const properties = [
    {
      name: "The Meridian Tower",
      type: "Class-A Office",
      sqft: "42,000",
      price: "$58/sqft",
      floors: "12 Floors",
      available: "Q2 2025",
      tag: "Premium",
    },
    {
      name: "Harbor View Plaza",
      type: "Mixed-Use Commercial",
      sqft: "28,500",
      price: "$44/sqft",
      floors: "8 Floors",
      available: "Immediate",
      tag: "Hot",
    },
    {
      name: "TSNshore Commons",
      type: "Creative Campus",
      sqft: "67,200",
      price: "$36/sqft",
      floors: "Campus",
      available: "Q3 2025",
      tag: "New",
    },
  ];

  const stats = [
    { number: "340+", label: "Properties Leased" },
    { number: "$2.4B", label: "Portfolio Value" },
    { number: "18yrs", label: "Market Experience" },
    { number: "97%", label: "Client Retention" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white overflow-x-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        body { margin: 0; }

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        .gold { color: #C9A84C; }
        .gold-bg { background-color: #C9A84C; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(201,168,76,0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes lineGrow {
          from { width: 0; }
          to { width: 100%; }
        }

        .hero-animate { animation: fadeUp 1s ease forwards; }
        .hero-animate-delay-1 { animation: fadeUp 1s ease 0.2s both; }
        .hero-animate-delay-2 { animation: fadeUp 1s ease 0.4s both; }
        .hero-animate-delay-3 { animation: fadeUp 1s ease 0.6s both; }

        .shimmer-text {
          background: linear-gradient(90deg, #C9A84C 0%, #F5E6A3 40%, #C9A84C 60%, #8B6914 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
        }

        .nav-link::after {
          content: '';
          display: block;
          height: 1px;
          background: #C9A84C;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .feature-tab {
          transition: all 0.3s ease;
          cursor: pointer;
          border-left: 2px solid transparent;
          padding-left: 20px;
        }
        .feature-tab.active {
          border-left: 2px solid #C9A84C;
        }

        .map-dot {
          animation: pulse-gold 2s ease-in-out infinite;
        }

        .floating { animation: float 6s ease-in-out infinite; }

        .bg-grid {
          background-image: linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .glass-gold {
          background: rgba(201,168,76,0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(201,168,76,0.2);
        }

        .diagonal-cut {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 3.5rem;
          letter-spacing: -1px;
        }

        input, textarea {
          background: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          color: white !important;
          transition: all 0.3s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: rgba(201,168,76,0.6) !important;
          background: rgba(201,168,76,0.05) !important;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .scroll-indicator {
          animation: fadeUp 2s ease 1.5s both;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0E1A; }
        ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 2px; }

        section { scroll-margin-top: 80px; }
      `}</style>

      {/* ─── STICKY HEADER ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 font-body transition-all duration-500 ${
          isScrolled ? "glass shadow-2xl shadow-black/50" : "bg-transparent"
        }`}
        style={{ borderBottom: isScrolled ? "1px solid rgba(201,168,76,0.15)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 border-2 border-[#C9A84C] rotate-45 transform"></div>
              <div className="absolute inset-1 border border-[#C9A84C]/40 rotate-45 transform"></div>
            </div>
            <div>
              <span className="font-display text-lg font-semibold tracking-widest text-white">TSNSHORE</span>
              <div className="text-[9px] tracking-[0.3em] text-[#C9A84C] uppercase font-body">Commercial Real Estate</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Features", "Properties", "Location", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300 font-body"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm tracking-widest uppercase font-semibold text-[#0A0E1A] gold-bg hover:bg-[#D4B85A] transition-all duration-300 font-body"
              style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Btn */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-4 h-px bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden glass border-t border-[#C9A84C]/10 px-6 py-6 flex flex-col gap-4">
            {["About", "Features", "Properties", "Location", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-widest uppercase text-white/70 hover:text-[#C9A84C] transition-colors font-body"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ─── HERO SECTION ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0E1A 0%, #0D1526 50%, #0A0E1A 100%)" }}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid opacity-40"></div>

        {/* Ambient orbs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", filter: "blur(60px)" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #4C9AC9 0%, transparent 70%)", filter: "blur(40px)" }}></div>

        {/* Parallax Images — right side mosaic */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block" style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          {/* Image 1 — top */}
          <div
            className="absolute top-0 right-0 w-full h-1/2"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85&auto=format&fit=crop"
              alt="Modern office building"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.5) saturate(0.8)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,14,26,0.3) 0%, transparent 50%, rgba(10,14,26,0.6) 100%)" }}></div>
          </div>

          {/* Image 2 — bottom */}
          <div
            className="absolute bottom-0 right-0 w-full h-1/2"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&auto=format&fit=crop"
              alt="Premium office interior"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.45) saturate(0.7)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,14,26,0.4) 0%, transparent 50%, rgba(10,14,26,0.7) 100%)" }}></div>
          </div>

          {/* Diagonal overlay to blend with left */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A0E1A 0%, rgba(10,14,26,0.4) 30%, transparent 60%)" }}></div>
        </div>

        {/* Mobile background */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop"
            alt="Modern office"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.25) saturate(0.6)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,14,26,0.5) 0%, rgba(10,14,26,0.8) 100%)" }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="hero-animate flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C9A84C]"></div>
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-body font-medium">TSNshore, CA — Commercial Division</span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.0] mb-6">
              We know{" "}
              <span className="italic">TSNshore</span>
              <br />
              <span className="shimmer-text font-semibold">commercial</span>
              <br />
              <span className="text-white/90">real estate.</span>
            </h1>

            {/* Description */}
            <p className="hero-animate-delay-2 font-body text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Specializing in office space, we are always looking to expand our offerings to meet the needs of growing companies. From boutique suites to full-floor headquarters.
            </p>

            {/* CTAs */}
            <div className="hero-animate-delay-3 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="group relative px-8 py-4 overflow-hidden font-body text-sm tracking-widest uppercase font-semibold text-[#0A0E1A] transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #C9A84C, #D4B85A)" }}
              >
                <span className="relative z-10">Contact Our Team</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
              <a
                href="#properties"
                className="group flex items-center gap-3 font-body text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-300"
              >
                <span>View Properties</span>
                <div className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12"></div>
              </a>
            </div>

            {/* Stats strip */}
            <div className="hero-animate-delay-3 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-number shimmer-text">{s.number}</div>
                  <div className="font-body text-xs text-white/40 tracking-widest uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-body">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent"></div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{ background: "radial-gradient(circle, #C9A84C, transparent)", filter: "blur(80px)" }}></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image collage */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main image */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=85&auto=format&fit=crop"
                alt="TSNshore cityscape"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.7) saturate(0.9)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 60%, rgba(10,14,26,0.6) 100%)" }}></div>
            </div>

            {/* Accent image */}
            <div className="absolute bottom-0 right-0 w-2/5 h-2/5 overflow-hidden border-2 border-[#C9A84C]/30">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=85&auto=format&fit=crop"
                alt="Office meeting room"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.6) saturate(0.8)" }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 glass-gold px-6 py-5 text-center floating">
              <div className="font-display text-4xl font-light text-[#C9A84C]">18+</div>
              <div className="font-body text-xs tracking-widest uppercase text-white/50 mt-1">Years<br />Excellence</div>
            </div>

            {/* Gold line accent */}
            <div className="absolute bottom-1/3 left-0 w-12 h-px bg-[#C9A84C]"></div>
          </div>

          {/* Right — Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C9A84C]"></div>
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-body">Our Story</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8">
              Built on trust,<br />
              <span className="italic text-[#C9A84C]">driven by results.</span>
            </h2>

            <p className="font-body text-white/60 text-base leading-relaxed mb-6">
              Since 2006, TSNshore Commercial Real Estate has been the premier brokerage for companies seeking to establish or expand their presence along the TSNshore corridor. We've helped over 340 businesses find their ideal commercial home.
            </p>

            <p className="font-body text-white/50 text-base leading-relaxed mb-10">
              Our team of 24 licensed commercial specialists brings deep local expertise and national-caliber deal-making skills to every engagement — whether you're a startup securing your first office or an enterprise renegotiating a multi-floor lease.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-4">
              {["Local Expertise", "Transparent Deals", "Long-Term Partners"].map((p, i) => (
                <div key={i} className="glass px-4 py-4 text-center">
                  <div className="text-[#C9A84C] text-2xl mb-2">{["◈", "◇", "◉"][i]}</div>
                  <div className="font-body text-xs text-white/60 tracking-wide">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES SECTION ─── */}
      <section id="features" className="py-32 relative" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.03), transparent)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C9A84C]"></div>
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-body">What We Offer</span>
              <div className="h-px w-12 bg-[#C9A84C]"></div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light">
              Services built for <span className="italic text-[#C9A84C]">ambition.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Tabs */}
            <div className="space-y-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`feature-tab ${activeFeature === i ? "active" : ""}`}
                  onClick={() => setActiveFeature(i)}
                >
                  <div className="flex items-start gap-4 py-4">
                    <span
                      className="text-2xl mt-0.5 transition-all duration-300"
                      style={{ color: activeFeature === i ? f.color : "rgba(255,255,255,0.2)" }}
                    >
                      {f.icon}
                    </span>
                    <div>
                      <h3
                        className="font-display text-xl font-semibold mb-2 transition-colors duration-300"
                        style={{ color: activeFeature === i ? "white" : "rgba(255,255,255,0.4)" }}
                      >
                        {f.title}
                      </h3>
                      {activeFeature === i && (
                        <p className="font-body text-white/50 text-sm leading-relaxed">{f.desc}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Display */}
            <div className="relative h-96 lg:h-auto lg:min-h-[480px]">
              <div
                className="absolute inset-0 glass rounded-none"
                style={{ borderLeft: `2px solid ${features[activeFeature].color}` }}
              >
                <div className="p-12 h-full flex flex-col justify-between">
                  <div>
                    <div
                      className="text-6xl mb-6 transition-all duration-500"
                      style={{ color: features[activeFeature].color }}
                    >
                      {features[activeFeature].icon}
                    </div>
                    <h3 className="font-display text-4xl font-light mb-4 text-white">
                      {features[activeFeature].title}
                    </h3>
                    <p className="font-body text-white/60 text-base leading-relaxed">
                      {features[activeFeature].desc}
                    </p>
                  </div>

                  <div>
                    {/* Progress bar */}
                    <div className="flex gap-2 mt-8">
                      {features.map((_, i) => (
                        <div
                          key={i}
                          className="h-0.5 flex-1 transition-all duration-500"
                          style={{ background: i === activeFeature ? features[activeFeature].color : "rgba(255,255,255,0.1)" }}
                        />
                      ))}
                    </div>
                    <div className="mt-4 flex justify-between font-body text-xs text-white/30 tracking-widest uppercase">
                      <span>0{activeFeature + 1}</span>
                      <span>of 04</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-5 transition-all duration-700"
                style={{ background: `radial-gradient(circle at 30% 50%, ${features[activeFeature].color}, transparent)`, filter: "blur(40px)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROPERTIES SECTION ─── */}
      <section id="properties" className="py-32 relative bg-grid">
        <div className="absolute inset-0 opacity-60" style={{ background: "linear-gradient(180deg, #0A0E1A 0%, transparent 20%, transparent 80%, #0A0E1A 100%)" }}></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#C9A84C]"></div>
                <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-body">Current Listings</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-light">
                Featured<br />
                <span className="italic text-[#C9A84C]">Properties.</span>
              </h2>
            </div>
            <a href="#contact" className="mt-6 md:mt-0 font-body text-sm tracking-widest uppercase text-white/40 hover:text-[#C9A84C] transition-colors flex items-center gap-3 group">
              View All Listings
              <div className="h-px w-8 bg-current transition-all duration-300 group-hover:w-16"></div>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {properties.map((p, i) => (
              <div key={i} className="card-hover group relative glass overflow-hidden cursor-pointer">
                {/* Property image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={[
                      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=600&q=80&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1554435493-93422e8d1c46?w=600&q=80&auto=format&fit=crop",
                    ][i]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: "brightness(0.5) saturate(0.7)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,14,26,0.8) 100%)" }}></div>

                  {/* Tag */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 text-xs tracking-widest uppercase font-semibold font-body"
                    style={{
                      background: p.tag === "Hot" ? "#C94C4C" : p.tag === "Premium" ? "#C9A84C" : "#4C9AC9",
                      color: "#0A0E1A",
                    }}
                  >
                    {p.tag}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="font-body text-xs tracking-widest uppercase text-[#C9A84C] mb-2">{p.type}</div>
                  <h3 className="font-display text-xl font-semibold text-white mb-4">{p.name}</h3>

                  <div className="grid grid-cols-2 gap-y-3 mb-6">
                    {[
                      { l: "Size", v: `${p.sqft} sqft` },
                      { l: "Asking", v: p.price },
                      { l: "Floors", v: p.floors },
                      { l: "Available", v: p.available },
                    ].map((item, j) => (
                      <div key={j}>
                        <div className="font-body text-xs text-white/30 uppercase tracking-widest">{item.l}</div>
                        <div className="font-body text-sm text-white/80 mt-0.5">{item.v}</div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-[#C9A84C] group-hover:gap-4 transition-all duration-300"
                  >
                    <span>Request Tour</span>
                    <div className="h-px w-6 bg-[#C9A84C]"></div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION SECTION ─── */}
      <section id="location" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C9A84C]"></div>
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-body">Where We Operate</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8">
              The heart of<br />
              <span className="italic text-[#C9A84C]">TSNshore.</span>
            </h2>
            <p className="font-body text-white/60 text-base leading-relaxed mb-10">
              Strategically positioned in TSNshore's Central Business District, our offices and listings span the most sought-after commercial corridors — from the waterfront tech campus to the heritage financial quarter.
            </p>

            {/* Districts */}
            <div className="space-y-4">
              {[
                { name: "Central Business District", props: "142 active listings", color: "#C9A84C" },
                { name: "Waterfront Innovation Park", props: "67 active listings", color: "#4C9AC9" },
                { name: "Heritage Financial Quarter", props: "89 active listings", color: "#C94C7A" },
                { name: "North Shore Tech Corridor", props: "54 active listings", color: "#4CC97A" },
              ].map((d, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 group cursor-pointer hover:border-[#C9A84C]/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full map-dot" style={{ background: d.color, boxShadow: `0 0 0 0 ${d.color}66` }}></div>
                    <span className="font-body text-white/70 group-hover:text-white transition-colors">{d.name}</span>
                  </div>
                  <span className="font-body text-xs text-white/30 tracking-widest">{d.props}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map visualization */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0 glass overflow-hidden">
              {/* Stylized map grid */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}></div>

              {/* Decorative map elements */}
              <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute inset-0">
                {/* Streets */}
                <line x1="0" y1="250" x2="500" y2="250" stroke="rgba(201,168,76,0.15)" strokeWidth="1.5"/>
                <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(201,168,76,0.15)" strokeWidth="1.5"/>
                <line x1="0" y1="150" x2="500" y2="300" stroke="rgba(201,168,76,0.08)" strokeWidth="1"/>
                <line x1="0" y1="350" x2="350" y2="100" stroke="rgba(201,168,76,0.08)" strokeWidth="1"/>
                <line x1="100" y1="0" x2="400" y2="500" stroke="rgba(201,168,76,0.06)" strokeWidth="1"/>

                {/* Blocks */}
                <rect x="80" y="80" width="120" height="80" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
                <rect x="300" y="80" width="100" height="60" fill="none" stroke="rgba(76,154,201,0.15)" strokeWidth="1"/>
                <rect x="80" y="280" width="80" height="100" fill="none" stroke="rgba(201,76,122,0.15)" strokeWidth="1"/>
                <rect x="280" y="300" width="140" height="90" fill="none" stroke="rgba(76,201,122,0.15)" strokeWidth="1"/>
                <rect x="180" y="180" width="140" height="100" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>

                {/* Location pins */}
                {[
                  { x: 140, y: 120, color: "#C9A84C", r: 6 },
                  { x: 350, y: 110, color: "#4C9AC9", r: 5 },
                  { x: 120, y: 330, color: "#C94C7A", r: 5 },
                  { x: 350, y: 345, color: "#4CC97A", r: 4 },
                ].map((pin, i) => (
                  <g key={i}>
                    <circle cx={pin.x} cy={pin.y} r={pin.r * 3} fill={pin.color} opacity="0.1"/>
                    <circle cx={pin.x} cy={pin.y} r={pin.r} fill={pin.color} opacity="0.9"/>
                  </g>
                ))}

                {/* Waterfront */}
                <path d="M 0 420 Q 100 400 200 430 Q 300 460 400 440 L 500 460 L 500 500 L 0 500 Z" fill="rgba(76,154,201,0.08)"/>
                <text x="200" y="475" fill="rgba(76,154,201,0.4)" fontSize="9" fontFamily="DM Sans" letterSpacing="2" textAnchor="middle">TSNSHORE BAY</text>
              </svg>

              {/* HQ Marker */}
              <div className="absolute" style={{ top: "44%", left: "47%", transform: "translate(-50%, -50%)" }}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-[#C9A84C] opacity-10 animate-ping"></div>
                  <div className="w-4 h-4 rounded-full bg-[#C9A84C] border-2 border-white relative z-10"></div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap glass-gold px-3 py-1">
                    <span className="font-body text-xs text-[#C9A84C] tracking-widest uppercase">Our HQ</span>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 glass px-4 py-3 space-y-2">
                {[
                  { color: "#C9A84C", label: "CBD" },
                  { color: "#4C9AC9", label: "Waterfront" },
                  { color: "#C94C7A", label: "Heritage" },
                  { color: "#4CC97A", label: "North Shore" },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: l.color }}></div>
                    <span className="font-body text-xs text-white/40">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section id="contact" className="py-32 relative" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.04))" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C9A84C]"></div>
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-body">Get In Touch</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8">
              Let's find your<br />
              <span className="italic text-[#C9A84C]">perfect space.</span>
            </h2>
            <p className="font-body text-white/50 text-base leading-relaxed mb-12">
              Whether you're seeking your first office or restructuring a large portfolio, our team is ready to guide you through every step of the commercial leasing process.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                { icon: "◎", label: "Visit Us", value: "One Harbor Plaza, Suite 2200\nTSNshore, CA 94110" },
                { icon: "◉", label: "Call Us", value: "+1 (415) 888-2400\nMon–Fri, 8am–6pm PST" },
                { icon: "◈", label: "Email Us", value: "hello@TSNshore.re\nResponse within 2 hours" },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 p-5 glass group hover:glass-gold transition-all duration-300 cursor-pointer">
                  <span className="text-[#C9A84C] text-xl mt-0.5">{c.icon}</span>
                  <div>
                    <div className="font-body text-xs tracking-widest uppercase text-white/30 mb-1">{c.label}</div>
                    <div className="font-body text-sm text-white/70 whitespace-pre-line">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="glass-gold p-10">
            <h3 className="font-display text-2xl font-light mb-8 text-white">
              Send us a message
            </h3>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-white/40 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 text-sm font-body rounded-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-white/40 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 text-sm font-body rounded-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-white/40 mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Your Company Name"
                  className="w-full px-4 py-3 text-sm font-body rounded-none"
                />
              </div>

              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-white/40 mb-2">Space Requirements</label>
                <select className="w-full px-4 py-3 text-sm font-body rounded-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                  <option value="">Select size range</option>
                  <option>Under 2,000 sqft</option>
                  <option>2,000 – 5,000 sqft</option>
                  <option>5,000 – 15,000 sqft</option>
                  <option>15,000+ sqft</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-white/40 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your ideal space, timeline, and any specific requirements..."
                  className="w-full px-4 py-3 text-sm font-body rounded-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                className="w-full py-4 font-body text-sm tracking-widest uppercase font-semibold text-[#0A0E1A] transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
                style={{ background: "linear-gradient(135deg, #C9A84C, #D4B85A)" }}
              >
                Submit Inquiry →
              </button>

              <p className="font-body text-xs text-white/30 text-center">
                By submitting, you agree to our Privacy Policy. We never share your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="pt-20 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 relative flex-shrink-0">
                  <div className="absolute inset-0 border-2 border-[#C9A84C] rotate-45 transform"></div>
                </div>
                <span className="font-display text-lg tracking-widest text-white">TSNSHORE</span>
              </div>
              <p className="font-body text-xs text-white/30 leading-relaxed mb-6">
                TSNshore's premier commercial real estate advisory, since 2006.
              </p>
              <div className="flex gap-3">
                {["Li", "Tw", "Ig"].map((s, i) => (
                  <div key={i} className="w-8 h-8 glass flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-colors cursor-pointer font-body text-xs">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: "Services", links: ["Office Leasing", "Tenant Rep", "Investment Sales", "Portfolio Mgmt", "Market Reports"] },
              { title: "Company", links: ["About Us", "Our Team", "Case Studies", "News & Press", "Careers"] },
              { title: "Resources", links: ["Market Intel", "Lease Guide", "Blog", "FAQs", "Privacy Policy"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="font-body text-xs text-white/40 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <span className="font-body text-xs text-white/20">© 2025 TSNshore Commercial Real Estate. All rights reserved. CA DRE #01234567</span>
            <div className="flex gap-6">
              {["Terms", "Privacy", "Cookies"].map((item, i) => (
                <a key={i} href="#" className="font-body text-xs text-white/20 hover:text-white/50 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}