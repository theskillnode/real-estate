"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", interest: "office" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = ["About", "Features", "Locations", "Contact"];

  const features = [
    {
      icon: "🏢",
      title: "Premium Office Spaces",
      desc: "Class-A office suites with floor-to-ceiling windows, modern amenities, and flexible lease terms tailored to your growth trajectory.",
      color: "from-amber-400 to-orange-500",
      stat: "120+",
      statLabel: "Properties",
    },
    {
      icon: "🌐",
      title: "Strategic Locations",
      desc: "Prime commercial corridors, downtown districts, and emerging tech hubs — placed where your business visibility matters most.",
      color: "from-cyan-400 to-blue-500",
      stat: "15",
      statLabel: "Districts",
    },
    {
      icon: "📈",
      title: "Investment Growth",
      desc: "Data-driven market insights and portfolio management services that maximize your commercial real estate ROI.",
      color: "from-emerald-400 to-teal-500",
      stat: "32%",
      statLabel: "Avg. ROI",
    },
    {
      icon: "🤝",
      title: "Expert Advisory",
      desc: "Decades of Crystalshore market expertise. Our brokers negotiate leases, acquisitions, and exits with surgical precision.",
      color: "from-violet-400 to-purple-600",
      stat: "500+",
      statLabel: "Clients Served",
    },
  ];

  const locations = [
    {
      name: "Crystalshore Downtown",
      type: "Financial District",
      sqft: "2,000 – 50,000 sq ft",
      price: "From $42/sq ft",
      tag: "HOT",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    },
    {
      name: "Harbor Business Park",
      type: "Waterfront Campus",
      sqft: "5,000 – 120,000 sq ft",
      price: "From $38/sq ft",
      tag: "NEW",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    },
    {
      name: "Crystalshore Tech Hub",
      type: "Innovation District",
      sqft: "1,000 – 30,000 sq ft",
      price: "From $35/sq ft",
      tag: "POPULAR",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a7f80?w=600&q=80",
    },
  ];

  const stats = [
    { value: "18+", label: "Years in Crystalshore" },
    { value: "$2.4B", label: "Transactions Closed" },
    { value: "98%", label: "Client Retention" },
    { value: "340", label: "Active Listings" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; }
        .display-font { font-family: 'Playfair Display', serif; }
        .gradient-text {
          background: linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .crystal-gradient {
          background: linear-gradient(135deg, #0ea5e9, #6366f1, #a855f7);
        }
        .card-hover {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b, #ef4444);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-in { animation: slideIn 0.7s ease forwards; }
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(245,158,11,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245,158,11,0); }
        }
        .location-tag {
          animation: pulse-ring 2s infinite;
        }
        .grid-bg {
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .counter {
          background: linear-gradient(135deg, #18181b, #27272a);
          border: 1px solid rgba(255,255,255,0.08);
        }
        input, textarea, select {
          background: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          color: white !important;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        input:focus, textarea:focus, select:focus {
          border-color: #f59e0b !important;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.15) !important;
          outline: none !important;
        }
        select option { background: #18181b; color: white; }
        .feature-active {
          background: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.1));
          border-color: rgba(245,158,11,0.4) !important;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #09090b; }
        ::-webkit-scrollbar-thumb { background: #f59e0b; border-radius: 3px; }
      `}</style>

      {/* ── STICKY NAV ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrollY > 60
            ? "rgba(9,9,11,0.95)"
            : "transparent",
          backdropFilter: scrollY > 60 ? "blur(20px)" : "none",
          borderBottom: scrollY > 60 ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 crystal-gradient rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
              D
            </div>
            <div>
              <span className="display-font text-xl font-bold text-white">DemoShore</span>
              <p className="text-xs text-zinc-500 -mt-0.5 tracking-widest uppercase">Commercial Real Estate</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link text-sm text-zinc-300 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+15551234567" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">
              +1 (555) 123-4567
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              List Property
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-zinc-300 hover:text-amber-400 transition-colors py-2 border-b border-zinc-800"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a href="#contact" className="mt-2 px-5 py-3 bg-amber-500 text-black font-semibold rounded-xl text-center">
              List Property
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
        style={{ paddingTop: "80px" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
            filter: "brightness(0.25)",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-950/80 via-transparent to-blue-950/40" />

        {/* Floating Decorative Blobs */}
        <div className="hero-particle w-72 h-72 bg-amber-500 rounded-full top-20 -right-20 z-0" style={{ animationDelay: "0s" }} />
        <div className="hero-particle w-48 h-48 bg-blue-500 rounded-full bottom-32 -left-16 z-0" style={{ animationDelay: "2s" }} />
        <div className="hero-particle w-32 h-32 bg-purple-500 rounded-full top-1/2 right-1/4 z-0" style={{ animationDelay: "4s" }} />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)"
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left Content */}
          <div className="slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-amber-400 rounded-full pulse-ring" />
              #1 Commercial Broker in Crystalshore
            </div>

            <h1 className="display-font text-5xl md:text-7xl font-black leading-tight mb-6">
              We know{" "}
              <span className="gradient-text">Crystalshore</span>{" "}
              commercial real estate.
            </h1>

            <p className="text-zinc-300 text-xl leading-relaxed mb-10 max-w-xl">
              Specializing in office space, we are always looking to expand our offerings to meet the needs of growing companies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 flex items-center gap-2"
              >
                Contact Us
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#locations"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm"
              >
                Browse Listings
              </a>
            </div>

            {/* Mini Stats */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="display-font text-2xl font-bold text-amber-400">{s.value}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Property Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                    alt="Featured Property"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">FEATURED</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="display-font text-2xl font-bold mb-1">One Crystal Tower</h3>
                  <p className="text-zinc-400 text-sm mb-4">📍 Crystalshore Financial District</p>
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    {[["45,000", "Sq Ft"], ["$44", "Per Sq Ft"], ["Q2 2025", "Available"]].map(([v, l]) => (
                      <div key={l} className="text-center p-3 bg-white/5 rounded-xl">
                        <div className="font-bold text-white text-lg">{v}</div>
                        <div className="text-zinc-500 text-xs">{l}</div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
                    Schedule Viewing
                  </button>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 w-24 h-24 crystal-gradient rounded-2xl flex flex-col items-center justify-center shadow-2xl">
                <div className="display-font text-2xl font-black">18</div>
                <div className="text-xs text-blue-100">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 z-10">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card-hover rounded-2xl overflow-hidden h-48">
                  <img src="https://images.unsplash.com/photo-1497366754035-f200968a7f80?w=400&q=80" alt="Office" className="w-full h-full object-cover" />
                </div>
                <div className="card-hover rounded-2xl overflow-hidden h-32">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80" alt="Interior" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card-hover rounded-2xl overflow-hidden h-32">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" alt="Building" className="w-full h-full object-cover" />
                </div>
                <div className="card-hover rounded-2xl overflow-hidden h-48">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" alt="City" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-2xl">🏆</div>
                <div>
                  <div className="font-bold">Top Brokerage 2024</div>
                  <div className="text-zinc-400 text-sm">Crystalshore Chamber of Commerce</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">About Crystalshore CRE</div>
            <h2 className="display-font text-5xl font-black leading-tight mb-6">
              Rooted in Crystalshore.{" "}
              <span className="gradient-text">Built for your business.</span>
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Since 2006, Crystalshore Commercial Real Estate has been the go-to partner for companies seeking premium office environments in one of the region's most dynamic markets. We combine hyper-local market intelligence with a client-first approach.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Whether you're a startup seeking your first headquarters, or an enterprise rightsizing across multiple floors, our team has the relationships, data, and negotiating power to secure the ideal space — at the right price, on the right terms.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🔍", text: "Market Analysis" },
                { icon: "📋", text: "Lease Negotiation" },
                { icon: "🏗️", text: "Tenant Improvement" },
                { icon: "📊", text: "Portfolio Strategy" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 hover:border-amber-500/30 rounded-xl transition-colors group">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">What We Offer</div>
            <h2 className="display-font text-5xl font-black mb-4">
              Services that{" "}
              <span className="gradient-text">set us apart</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              End-to-end commercial real estate solutions designed around your company's ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 card-hover ${
                  activeFeature === i
                    ? "feature-active border-amber-500/40"
                    : "bg-white/3 border-white/5 hover:border-white/10"
                }`}
                onClick={() => setActiveFeature(i)}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{f.desc}</p>
                <div className="flex items-end gap-1">
                  <span className={`display-font text-3xl font-black bg-gradient-to-r ${f.color} bg-clip-text text-transparent`}>{f.stat}</span>
                  <span className="text-zinc-500 text-sm pb-1">{f.statLabel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Process Strip */}
          <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-6 items-start relative">
              {[
                { step: "01", title: "Discovery Call", desc: "We learn your space, timeline, and growth goals." },
                { step: "02", title: "Market Search", desc: "We surface listings that match your criteria — curated, not generic." },
                { step: "03", title: "Tour & Negotiate", desc: "Accompany you on tours and negotiate favorable lease terms." },
                { step: "04", title: "Move-In Ready", desc: "Coordinate TI, legal, and logistics so you open on time." },
              ].map((p, i) => (
                <div key={p.step} className="relative text-center md:text-left">
                  <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold mb-4">
                    STEP {p.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-zinc-400 text-sm">{p.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-3 -right-3 text-zinc-600 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section id="locations" className="py-32 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Prime Locations</div>
              <h2 className="display-font text-5xl font-black">
                Find your{" "}
                <span className="gradient-text">perfect space</span>
              </h2>
            </div>
            <a href="#contact" className="px-6 py-3 border border-white/10 hover:border-amber-500/50 text-white rounded-xl transition-colors text-sm font-medium self-start md:self-auto">
              View All Listings →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.name} className="group bg-zinc-900 border border-white/5 hover:border-white/15 rounded-3xl overflow-hidden card-hover">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={loc.img}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-black rounded-full ${
                    loc.tag === "HOT" ? "bg-red-500 text-white" :
                    loc.tag === "NEW" ? "bg-emerald-500 text-white" :
                    "bg-blue-500 text-white"
                  }`}>
                    {loc.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">{loc.type}</div>
                  <h3 className="font-bold text-xl mb-3">{loc.name}</h3>
                  <div className="flex items-center justify-between text-sm mb-5">
                    <span className="text-zinc-400">{loc.sqft}</span>
                    <span className="text-amber-400 font-semibold">{loc.price}</span>
                  </div>
                  <button className="w-full py-3 bg-white/5 hover:bg-amber-500 hover:text-black border border-white/5 hover:border-amber-500 text-white font-semibold rounded-xl transition-all duration-300">
                    Request Info
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-white/5 relative h-72 shimmer bg-zinc-900 flex items-center justify-center">
            <div className="text-center z-10">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="text-zinc-400 text-sm">Interactive map — 340 listings across Crystalshore</p>
              <button className="mt-4 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl text-sm transition-colors">
                Open Full Map
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 70%)"
        }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Client Stories</div>
            <h2 className="display-font text-4xl font-black">What our clients say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO, NovaTech Inc.",
                quote: "Crystalshore CRE found us a stunning HQ in the Financial District within 6 weeks. Their negotiation saved us 18% on the lease. Extraordinary service.",
                avatar: "SC",
                color: "from-blue-500 to-indigo-500",
              },
              {
                name: "Marcus Rivera",
                role: "COO, Pulse Analytics",
                quote: "We expanded from 3,000 to 22,000 sq ft seamlessly. Their team managed every detail — from buildout coordination to move-in day.",
                avatar: "MR",
                color: "from-amber-500 to-orange-500",
              },
              {
                name: "Lena Hartmann",
                role: "Founder, Bloom Ventures",
                quote: "As a first-time commercial tenant, I was nervous. Crystalshore CRE guided us with patience and expertise. We couldn't be happier with our space.",
                avatar: "LH",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((t) => (
              <div key={t.name} className="bg-zinc-950 border border-white/5 hover:border-white/10 rounded-3xl p-8 card-hover">
                <div className="text-amber-400 text-3xl mb-4">"</div>
                <p className="text-zinc-300 leading-relaxed mb-6 text-sm">{t.quote}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-sm text-white`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-zinc-500 text-xs">{t.role}</div>
                  </div>
                  <div className="ml-auto text-amber-400 text-sm">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)"
        }} />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <div>
              <div className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">Get In Touch</div>
              <h2 className="display-font text-5xl font-black leading-tight mb-6">
                Let's find your{" "}
                <span className="gradient-text">ideal space.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Tell us about your company and what you're looking for. Our advisors respond within one business hour.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "📍", label: "Office", value: "200 Crystal Tower, Suite 1800\nCrystalshore, CS 10001" },
                  { icon: "📞", label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: "✉️", label: "Email", value: "hello@crystalshorecre.com" },
                  { icon: "⏰", label: "Hours", value: "Mon–Fri, 8:00 AM – 7:00 PM" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4 p-5 bg-white/3 border border-white/5 hover:border-white/10 rounded-2xl transition-colors group">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wide mb-0.5">{c.label}</div>
                      <div className="text-zinc-200 font-medium whitespace-pre-line">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-zinc-900 border border-white/8 rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-7xl mb-6">🎉</div>
                  <h3 className="display-font text-3xl font-bold mb-3">Message Received!</h3>
                  <p className="text-zinc-400">One of our advisors will be in touch within 1 business hour.</p>
                  <button
                    className="mt-8 px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="display-font text-2xl font-bold mb-6">Schedule a Consultation</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wide mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wide mb-2 block">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl text-sm"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 uppercase tracking-wide mb-2 block">I'm interested in</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="office">Office Space</option>
                      <option value="cowork">Co-Working / Flex</option>
                      <option value="retail">Retail</option>
                      <option value="investment">Investment Property</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 uppercase tracking-wide mb-2 block">Tell us more</label>
                    <textarea
                      rows={4}
                      placeholder="Company size, preferred location, timeline, budget range..."
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20 text-lg"
                  >
                    Send Message →
                  </button>

                  <p className="text-center text-zinc-600 text-xs">
                    We respond within 1 business hour · No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-900 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 crystal-gradient rounded-xl flex items-center justify-center text-xl font-bold">C</div>
                <span className="display-font text-xl font-bold">Crystalshore</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Crystalshore's premier commercial real estate firm since 2006.
              </p>
              <div className="flex gap-3">
                {["🐦", "💼", "📘", "📸"].map((icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 bg-white/5 hover:bg-amber-500/20 border border-white/5 hover:border-amber-500/30 rounded-xl flex items-center justify-center text-base transition-all"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: "Services", links: ["Office Leasing", "Tenant Representation", "Investment Sales", "Property Management", "Market Research"] },
              { title: "Company", links: ["About Us", "Our Team", "Careers", "Press", "Contact"] },
              { title: "Resources", links: ["Market Reports", "Lease Guide", "Calculator", "Blog", "FAQs"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-zinc-300">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
            <p>© 2025 Crystalshore Commercial Real Estate. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}