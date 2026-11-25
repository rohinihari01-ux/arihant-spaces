"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Shield,
  Layers,
  Sparkles,
  Compass,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Download,
  Calendar,
  Maximize2,
  ArrowRight,
  Menu,
  X,
  Car,
  Zap,
  Building,
  KeyRound,
  FileText,
  Clock,
  Award,
  ExternalLink,
  MessageSquare,
  Home,
  Check,
  Share2,
  Eye,
  Info,
  Play,
  User,
  Lock,
  Wrench,
  Cpu,
  Droplets,
  HelpCircle,
} from "lucide-react";

export default function HomeClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePlanTab, setActivePlanTab] = useState<"floor" | "master" | "terrace">("floor");
  const [galleryFilter, setGalleryFilter] = useState<"all" | "exterior" | "interior" | "amenities">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeVideoChapter, setActiveVideoChapter] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Modals
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [priceBreakupModalOpen, setPriceBreakupModalOpen] = useState(false);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    unitType: "4 BHK Palatial Residence (3,308 Sq.Ft)",
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedInquiry(true);
  };

  // Gallery items featuring local folder images
  const galleryItems = [
    {
      id: 1,
      category: "exterior",
      title: "Signature Laterite Stone Façade",
      desc: "Distinct architectural elevation with organic red laterite stone and acoustic bronze louvers",
      img: "/images/building-2.webp",
    },
    {
      id: 2,
      category: "interior",
      title: "Palatial 38-Ft Living Salon",
      desc: "Expansive double-height open living and dining area with Italian marble flooring",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "exterior",
      title: "Boutique Low-Rise Profile",
      desc: "Stilt + 5 levels with only one exclusive sanctuary per floor",
      img: "/images/building-3.jpg",
    },
    {
      id: 4,
      category: "interior",
      title: "Master Suite & Private Dresser",
      desc: "Spacious master bedroom with wooden flooring and walk-in dressing wardrobe",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "exterior",
      title: "Contemporary Architectural Geometry",
      desc: "Sculptural balconies framing verdant canopy vistas in Anna Nagar East",
      img: "/images/building-4.avif",
    },
    {
      id: 6,
      category: "amenities",
      title: "Rooftop Sky Lounge & Zen Deck",
      desc: "Landscaped terrace with private pergola seating and panoramic city views",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 7,
      category: "interior",
      title: "Gourmet Chef's Kitchen",
      desc: "Ergonomic culinary space with separate wet prep area and utility balcony",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      category: "exterior",
      title: "Private Boulevard Approach",
      desc: "Tree-canopied residential enclave offering serene, discreet neighborhood arrival",
      img: "/images/buildings.jpg",
    },
  ];

  const filteredGallery =
    galleryFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === galleryFilter);

  const faqs = [
    {
      question: "What makes Arihant Mira unique compared to other developments in Anna Nagar East?",
      answer:
        "Arihant Mira is an ultra-niche boutique residential enclave comprising only 5 palatial residences in total. Each resident occupies an entire autonomous floor (Stilt + 5 levels) of 3,308 sq. ft. with zero shared walls, absolute acoustic seclusion, direct private elevator foyer access, and a distinctive red laterite stone architectural elevation.",
    },
    {
      question: "What is the construction progress and expected possession timeline?",
      answer:
        "The project is under active construction with structural milestones advancing on schedule. The estimated handover date is slated for Q4 2026. Buyers receive monthly photographic construction progress reports and scheduled private on-site inspection privileges.",
    },
    {
      question: "What are the statutory approvals and RERA registration credentials?",
      answer:
        "Arihant Mira holds complete statutory clearances from CMDA (Chennai Metropolitan Development Authority), GCC, and Tamil Nadu Fire & Rescue Services. The development is registered under TNRERA: TN/29/Building/XXXX/2026.",
    },
    {
      question: "How are the dedicated car parking and electric vehicle charging bays arranged?",
      answer:
        "Each 4 BHK residence is allocated 2 dedicated, spacious, covered car parking bays at the stilt level with direct vehicular circulation corridors. Each bay is equipped with conduits for individual high-speed AC electric vehicle (EV) charging stations.",
    },
    {
      question: "Which financial institutions and banks offer approved home loan facilities?",
      answer:
        "Arihant Mira is pre-approved for flexible construction-linked home financing with leading institutional banking partners including HDFC Bank, State Bank of India (SBI), ICICI Bank, Axis Bank, and Kotak Mahindra Bank.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0a1f16] font-sans antialiased selection:bg-[#0c261c] selection:text-white">
      {/* ======================================================== */}
      {/* 1. REGAL SOVEREIGN EMERALD NAVBAR */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 bg-[#0c261c] text-white shadow-lg transition-all border-b border-[#163d2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex flex-col group">
              <div className="flex items-baseline gap-1">
                <span className="font-serif-luxury font-bold text-2xl sm:text-3xl tracking-wide text-white">
                  Arihant
                </span>
                <span className="text-[10px] text-[#c49b66]">®</span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#c49b66] -mt-0.5 font-sans font-light">
                memorable spaces
              </span>
            </a>

            <span className="h-7 w-[1.5px] bg-white/20 mx-1 hidden sm:block"></span>

            <div className="hidden sm:flex flex-col text-[11px] uppercase tracking-[0.16em] font-bold text-white/95 leading-tight">
              <span>Authorised</span>
              <span className="text-[#c49b66] font-medium">Sales Partner</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] uppercase tracking-[0.18em] font-semibold text-white/90">
            <a href="#pricing" className="hover:text-[#c49b66] transition-colors whitespace-nowrap">
              Pricing & Plans
            </a>
            <a href="#amenities" className="hover:text-[#c49b66] transition-colors whitespace-nowrap">
              Amenities
            </a>
            <a href="#video-tour" className="hover:text-[#c49b66] transition-colors whitespace-nowrap flex items-center gap-1.5 text-[#c49b66]">
              <Play className="w-3 h-3 fill-current" />
              <span>Video Tour</span>
            </a>
            <a href="#specifications" className="hover:text-[#c49b66] transition-colors whitespace-nowrap">
              Specifications
            </a>
            <a href="#legacy" className="hover:text-[#c49b66] transition-colors whitespace-nowrap">
              Legacy
            </a>
            <a href="#faq" className="hover:text-[#c49b66] transition-colors whitespace-nowrap">
              FAQ
            </a>
            <a href="#location" className="hover:text-[#c49b66] transition-colors whitespace-nowrap">
              Location
            </a>
          </nav>

          {/* Right CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSiteVisitModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-[#c49b66] hover:bg-[#b0864e] text-white text-xs sm:text-[13px] uppercase tracking-[0.18em] font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Book Site Visit
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#c49b66] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071711] border-t border-white/15 px-6 py-5 space-y-3.5 text-sm uppercase tracking-widest text-white shadow-2xl">
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#c49b66] py-1 font-semibold">
              Pricing & Plans
            </a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#c49b66] py-1 font-semibold">
              Amenities
            </a>
            <a href="#video-tour" onClick={() => setMobileMenuOpen(false)} className="block text-[#c49b66] py-1 font-semibold flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              <span>Video Tour</span>
            </a>
            <a href="#specifications" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#c49b66] py-1 font-semibold">
              Specifications
            </a>
            <a href="#legacy" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#c49b66] py-1 font-semibold">
              Arihant Legacy
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#c49b66] py-1 font-semibold">
              FAQ & Advisory
            </a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#c49b66] py-1 font-semibold">
              Location
            </a>
            <div className="pt-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBrochureModalOpen(true);
                }}
                className="w-full py-3 rounded-full border border-[#c49b66] text-[#c49b66] text-center font-semibold uppercase tracking-widest text-xs"
              >
                Download Brochure
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSiteVisitModalOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-[#c49b66] text-white text-center font-semibold uppercase tracking-widest text-xs"
              >
                Book A Site Visit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-[#e0eae3] py-14 lg:py-20 bg-gradient-to-br from-[#f6f9f7] via-white to-[#edf5f0]">
        {/* Architectural Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/building-2.webp"
            alt="Arihant Mira Anna Nagar Luxury Residences"
            className="w-full h-full object-cover object-right lg:object-center filter brightness-[0.96] scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 lg:to-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold uppercase tracking-widest text-[#0c261c]">
                  <MapPin className="w-4 h-4 text-[#c49b66] shrink-0" />
                  <span>D Block, 3rd Cross Street, Anna Nagar East | Chennai – 600102</span>
                </div>
                <div className="text-xs sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#40544b]">
                  BY ARIHANT FOUNDATIONS <span className="text-[#c49b66]">|</span> 35+ YEARS OF ARCHITECTURAL EXCELLENCE
                </div>
              </div>

              <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-[68px] font-bold text-[#0a1f16] leading-[1.12] tracking-tight">
                New Premium <br />
                Residential Launch <br />
                in <span className="text-[#c49b66] italic">Anna Nagar</span>
              </h1>

              <p className="text-sm sm:text-base text-[#40544b] font-normal max-w-2xl leading-relaxed">
                Arihant Mira brings bespoke 4 BHK palatial residences to Anna Nagar East, right on 3rd Cross Street, D Block. Spread across Stilt + 5 levels with only one exclusive sanctuary per floor (3,308 sq. ft.), zero shared walls, private elevator foyer, and enduring red laterite stone façade. Homes start at ₹8.5 Cr* | Handover: Q4 2026.
              </p>

              {/* 4 Feature Specification Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#e0eae3] shadow-xs text-center">
                  <Building className="w-5 h-5 text-[#0c261c] mx-auto mb-1" />
                  <span className="font-serif-luxury text-base font-bold text-[#0a1f16] block">4 BHK Only</span>
                  <span className="text-[11px] text-[#40544b] block">Palatial Home</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#e0eae3] shadow-xs text-center">
                  <Maximize2 className="w-5 h-5 text-[#0c261c] mx-auto mb-1" />
                  <span className="font-serif-luxury text-base font-bold text-[#0a1f16] block">3,308 Sq.Ft</span>
                  <span className="text-[11px] text-[#40544b] block">Zero Shared Walls</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#e0eae3] shadow-xs text-center">
                  <Home className="w-5 h-5 text-[#0c261c] mx-auto mb-1" />
                  <span className="font-serif-luxury text-base font-bold text-[#0a1f16] block">1 / Floor</span>
                  <span className="text-[11px] text-[#40544b] block">Only 5 Residences</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#e0eae3] shadow-xs text-center">
                  <Clock className="w-5 h-5 text-[#0c261c] mx-auto mb-1" />
                  <span className="font-serif-luxury text-base font-bold text-[#0a1f16] block">800 Mtrs*</span>
                  <span className="text-[11px] text-[#40544b] block">Anna Nagar Metro</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setPriceBreakupModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  <span>Get Price Sheet</span>
                  <ArrowRight className="w-4 h-4 text-[#c49b66]" />
                </button>
                <button
                  onClick={() => setSiteVisitModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-[#0c261c] hover:bg-[#0c261c] hover:text-white text-[#0c261c] text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all bg-white/80 backdrop-blur-sm"
                >
                  <span>Book A Site Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-[#40544b] pt-2 flex items-center gap-1.5 font-medium">
                <span className="text-[#c49b66]">✦</span>
                <span>TNRERA/29/BLG/XXXX/2026 | Arihant Foundations & Housing Ltd</span>
              </div>
            </div>

            {/* Right Column Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-2xl border border-[#e0eae3] relative">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf5f0] text-[#0c261c] text-[11px] font-bold uppercase tracking-widest mb-2">
                    Direct VIP Desk
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0a1f16]">
                    Pre-Launch Pricing & <br />
                    Offers
                  </h3>
                  <p className="text-xs sm:text-sm text-[#40544b] mt-2 font-light">
                    Register now for early-bird pricing and exclusive pre-booking benefits.
                  </p>
                </div>

                {submittedInquiry ? (
                  <div className="p-6 bg-[#edf5f0] rounded-xl border border-[#e0eae3] text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#0c261c] mx-auto animate-bounce" />
                    <h4 className="font-serif-luxury text-xl text-[#0a1f16] font-semibold">
                      VIP Registration Confirmed
                    </h4>
                    <p className="text-xs text-[#40544b]">
                      Thank you! Our property advisory desk will share the official pricing sheet and floor plans via WhatsApp & call shortly.
                    </p>
                    <button
                      onClick={() => setSubmittedInquiry(false)}
                      className="text-xs text-[#0c261c] underline uppercase tracking-wider pt-2 font-bold block mx-auto"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs sm:text-sm">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6b8075]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e0eae3] bg-white text-[#0a1f16] placeholder-[#6b8075] text-sm focus:outline-none focus:border-[#0c261c] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6b8075]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e0eae3] bg-white text-[#0a1f16] placeholder-[#6b8075] text-sm focus:outline-none focus:border-[#0c261c] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6b8075]">
                        <Home className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.unitType}
                        onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e0eae3] bg-white text-[#0a1f16] text-sm focus:outline-none focus:border-[#0c261c] transition-colors"
                      >
                        <option value="4 BHK Palatial Residence (3,308 Sq.Ft)">
                          4 BHK Palatial Residence (3,308 Sq.Ft)
                        </option>
                        <option value="Penthouse (Top Floor + Terrace)">
                          Penthouse (Top Floor + Terrace)
                        </option>
                        <option value="General Project Inquiry">
                          General Project Inquiry
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white font-semibold uppercase tracking-wider text-xs sm:text-[13px] transition-all shadow-md mt-2 flex items-center justify-center gap-2"
                    >
                      <span>GET PRE-LAUNCH PRICE LIST</span>
                      <ArrowRight className="w-4 h-4 text-[#c49b66]" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-xs text-[#40544b] pt-2 font-light">
                      <Lock className="w-3.5 h-3.5 text-[#40544b]" />
                      <span>Your information is safe with us. No spam.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CINEMATIC VIDEO WALKTHROUGH */}
      {/* ======================================================== */}
      <section id="video-tour" className="py-20 lg:py-24 bg-[#f6f9f7] border-b border-[#e0eae3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf5f0] border border-[#0c261c]/20 text-xs uppercase tracking-widest text-[#0c261c] font-bold mb-3 shadow-xs">
              <Play className="w-3 h-3 fill-current text-[#c49b66]" />
              Cinematic Architectural Tour
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0a1f16]">
              Experience Mira in Motion
            </h2>
            <p className="text-sm sm:text-base text-[#40544b] mt-3 font-normal leading-relaxed">
              Step inside Chennai’s most exclusive boutique residence. Take an immersive virtual walkthrough through our 3,308 sq. ft. 4 BHK model sanctuary, landscaped rooftop deck, and architectural foyer.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl bg-white p-3 sm:p-5 shadow-2xl border border-[#e0eae3]">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#071711] shadow-inner group">
                {isPlayingVideo ? (
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0&modestbranding=1&controls=1"
                      title="Arihant Mira Luxury Architectural Tour"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-md"
                    >
                      <X className="w-4 h-4" />
                      <span>Back to Cover</span>
                    </button>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                      alt="Arihant Mira 4K Walkthrough Video Poster"
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.82] group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30"></div>

                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10">
                      <span className="px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#c49b66] animate-pulse"></span>
                        4K Ultra HD Tour
                      </span>
                      <span className="px-3 py-1.5 rounded-md bg-[#0c261c] text-[#c49b66] text-[11px] uppercase tracking-widest font-bold shadow-md border border-[#c49b66]/30">
                        3,308 Sq.Ft Model Home
                      </span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="relative flex items-center justify-center mb-3">
                        <span className="absolute -inset-4 rounded-full bg-[#c49b66]/30 animate-ping"></span>
                        <span className="absolute -inset-2 rounded-full bg-[#c49b66]/50"></span>
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0c261c] border-2 border-[#c49b66] group-hover:bg-[#163d2e] text-[#c49b66] flex items-center justify-center shadow-2xl transition-all transform group-hover:scale-110">
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-[#c49b66]" />
                        </div>
                      </div>
                      <span className="text-white font-serif-luxury text-base sm:text-xl font-bold tracking-wide drop-shadow-md">
                        Click to Play 4K Walkthrough
                      </span>
                      <span className="text-white/80 text-xs font-light mt-1 uppercase tracking-widest">
                        Duration: 3 Mins 20 Sec • Full Guided Audio Tour
                      </span>
                    </div>

                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-white/90 z-10">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#c49b66] font-bold block">
                          Arihant Mira • Anna Nagar East
                        </span>
                        <span className="text-xs sm:text-sm font-light text-white/90">
                          Stilt + 5 Floors • 1 Home Per Floor • Zero Shared Walls
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 backdrop-blur-md text-xs text-white">
                        <span>High-Res Video</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Bottom Panel */}
              <div className="p-4 sm:p-6 bg-white border-t border-[#e0eae3] flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#edf5f0] text-[#0c261c] flex items-center justify-center shrink-0 border border-[#e0eae3]">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-[#0c261c]" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-[#0a1f16]">
                      Arihant Mira 4 BHK Palatial Residence Walkthrough
                    </h4>
                    <p className="text-xs text-[#40544b]">
                      Experience the private elevator landing, 38-ft living salon, and landscaped sky deck.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSiteVisitModalOpen(true)}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white font-semibold uppercase tracking-wider text-xs transition-all shadow-md text-center whitespace-nowrap"
                  >
                    Book Site Inspection
                  </button>
                  <a
                    href="https://wa.me/917601000444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] font-semibold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Interactive Video Chapters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
              <div
                onClick={() => {
                  setIsPlayingVideo(true);
                  setActiveVideoChapter(0);
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-center ${
                  activeVideoChapter === 0
                    ? "bg-white border-[#0c261c] shadow-sm"
                    : "bg-white/80 border-[#e0eae3] hover:border-[#0c261c]/50 hover:bg-white"
                }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c49b66] block">
                  01 : Foyer (0:00)
                </span>
                <span className="font-serif-luxury text-sm font-bold text-[#0a1f16] block mt-0.5">
                  Private Lift Landing
                </span>
              </div>

              <div
                onClick={() => {
                  setIsPlayingVideo(true);
                  setActiveVideoChapter(1);
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-center ${
                  activeVideoChapter === 1
                    ? "bg-white border-[#0c261c] shadow-sm"
                    : "bg-white/80 border-[#e0eae3] hover:border-[#0c261c]/50 hover:bg-white"
                }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c49b66] block">
                  02 : Living (0:45)
                </span>
                <span className="font-serif-luxury text-sm font-bold text-[#0a1f16] block mt-0.5">
                  38-Ft Palatial Salon
                </span>
              </div>

              <div
                onClick={() => {
                  setIsPlayingVideo(true);
                  setActiveVideoChapter(2);
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-center ${
                  activeVideoChapter === 2
                    ? "bg-white border-[#0c261c] shadow-sm"
                    : "bg-white/80 border-[#e0eae3] hover:border-[#0c261c]/50 hover:bg-white"
                }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c49b66] block">
                  03 : Suite (1:30)
                </span>
                <span className="font-serif-luxury text-sm font-bold text-[#0a1f16] block mt-0.5">
                  Master Sanctuary
                </span>
              </div>

              <div
                onClick={() => {
                  setIsPlayingVideo(true);
                  setActiveVideoChapter(3);
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-center ${
                  activeVideoChapter === 3
                    ? "bg-white border-[#0c261c] shadow-sm"
                    : "bg-white/80 border-[#e0eae3] hover:border-[#0c261c]/50 hover:bg-white"
                }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c49b66] block">
                  04 : Terrace (2:15)
                </span>
                <span className="font-serif-luxury text-sm font-bold text-[#0a1f16] block mt-0.5">
                  Rooftop Sky Deck
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. AMENITIES & LIFESTYLE */}
      {/* ======================================================== */}
      <section id="amenities" className="py-20 bg-white border-b border-[#e0eae3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c49b66] font-bold block mb-2">
              Bespoke Sanctuary
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0a1f16]">
              Signature Amenities & Lifestyle
            </h2>
            <p className="text-sm sm:text-base text-[#40544b] mt-3 font-light">
              Crafted for serene privacy, uninterrupted power, and gracious indoor-outdoor living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="/images/building-3.jpg"
                  alt="Exclusive 1 Residence per Floor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0c261c] text-[#c49b66] text-xs font-semibold uppercase tracking-wider border border-[#c49b66]/30">
                  Zero Shared Walls
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif-luxury text-xl text-[#0a1f16] font-bold">
                  One Residence Per Floor
                </h3>
                <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                  Only 5 private residences in total. Enjoy 360-degree cross-ventilation, complete acoustic seclusion, and a dedicated elevator foyer.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
                  alt="3,308 Sq.Ft Palatial Space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0c261c] text-[#c49b66] text-xs font-semibold uppercase tracking-wider border border-[#c49b66]/30">
                  3,308 Sq. Ft.
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif-luxury text-xl text-[#0a1f16] font-bold">
                  38-Ft Palatial Living Salon
                </h3>
                <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                  Breathtaking double-height proportions with Italian marble flooring, expansive panoramic balcony, and clear separation of service zones.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="/images/building-4.avif"
                  alt="Rooftop Sky Deck"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0c261c] text-[#c49b66] text-xs font-semibold uppercase tracking-wider border border-[#c49b66]/30">
                  Rooftop Sky Deck
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif-luxury text-xl text-[#0a1f16] font-bold">
                  Zen Terrace Garden & Lounge
                </h3>
                <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                  Landscaped rooftop garden with private pergola seating, native flowering flora, and sweeping skyline vistas across Anna Nagar East.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. PRICING & PLANS */}
      {/* ======================================================== */}
      <section id="pricing" className="py-20 bg-[#f6f9f7] border-b border-[#e0eae3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c49b66] font-bold block mb-2">
              Units & Pricing Plans
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0a1f16]">
              Pricing & Configuration
            </h2>
            <p className="text-sm sm:text-base text-[#40544b] mt-2 font-light">
              Limited collection of 5 residences designed for families seeking generous proportions and absolute privacy.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#e0eae3] bg-white shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0c261c] text-white uppercase tracking-wider text-xs font-semibold">
                <tr>
                  <th className="py-4 px-6">Unit Configuration</th>
                  <th className="py-4 px-6">Floor Level</th>
                  <th className="py-4 px-6">Super Built-up Area</th>
                  <th className="py-4 px-6">Car Parking</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Starting Price</th>
                  <th className="py-4 px-6 text-center">Cost Sheet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e0eae3] text-[#0a1f16]">
                <tr className="hover:bg-[#f6f9f7] transition-colors">
                  <td className="py-5 px-6 font-semibold">
                    <span className="text-base block">Palatial 4 BHK</span>
                    <span className="text-xs text-[#40544b]">1 Residence Per Floor</span>
                  </td>
                  <td className="py-5 px-6 text-[#40544b]">1st Floor</td>
                  <td className="py-5 px-6 font-mono font-bold">3,308 Sq. Ft.</td>
                  <td className="py-5 px-6">2 Dedicated Covered</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Available
                    </span>
                  </td>
                  <td className="py-5 px-6 font-serif-luxury text-lg font-bold text-[#0a1f16]">
                    ₹8.50 Cr*
                  </td>
                  <td className="py-5 px-6 text-center">
                    <button
                      onClick={() => setPriceBreakupModalOpen(true)}
                      className="px-5 py-2 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
                    >
                      Cost Breakup
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#f6f9f7] transition-colors">
                  <td className="py-5 px-6 font-semibold">
                    <span className="text-base block">Palatial 4 BHK</span>
                    <span className="text-xs text-[#40544b]">1 Residence Per Floor</span>
                  </td>
                  <td className="py-5 px-6 text-[#40544b]">2nd & 3rd Floors</td>
                  <td className="py-5 px-6 font-mono font-bold">3,308 Sq. Ft.</td>
                  <td className="py-5 px-6">2 Dedicated Covered</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                      Under Negotiation
                    </span>
                  </td>
                  <td className="py-5 px-6 font-serif-luxury text-lg font-bold text-[#0a1f16]">
                    ₹8.65 Cr*
                  </td>
                  <td className="py-5 px-6 text-center">
                    <button
                      onClick={() => setPriceBreakupModalOpen(true)}
                      className="px-5 py-2 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
                    >
                      Cost Breakup
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#f6f9f7] transition-colors">
                  <td className="py-5 px-6 font-semibold">
                    <span className="text-base block">Penthouse 4 BHK</span>
                    <span className="text-xs text-[#40544b]">Top Floor + Terrace Access</span>
                  </td>
                  <td className="py-5 px-6 text-[#40544b]">4th & 5th Floors</td>
                  <td className="py-5 px-6 font-mono font-bold">3,308 Sq. Ft.</td>
                  <td className="py-5 px-6">2 Dedicated Covered</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Available
                    </span>
                  </td>
                  <td className="py-5 px-6 font-serif-luxury text-lg font-bold text-[#0a1f16]">
                    ₹8.95 Cr*
                  </td>
                  <td className="py-5 px-6 text-center">
                    <button
                      onClick={() => setPriceBreakupModalOpen(true)}
                      className="px-5 py-2 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
                    >
                      Cost Breakup
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. [NEW SECTION 1] PREMIUM SPECIFICATIONS & CRAFTSMANSHIP */}
      {/* ======================================================== */}
      <section id="specifications" className="py-20 bg-white border-b border-[#e0eae3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c49b66] font-bold block mb-2">
              Architectural Craftsmanship
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0a1f16]">
              Exquisite Specifications
            </h2>
            <p className="text-sm sm:text-base text-[#40544b] mt-3 font-light leading-relaxed">
              Every detail is engineered with uncompromising luxury — from imported Italian Statuario marble to soundproof acoustic joinery and European sanitaryware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Spec 1 */}
            <div className="p-7 rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] hover:border-[#0c261c]/40 transition-all shadow-xs hover:shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf5f0] text-[#0c261c] flex items-center justify-center border border-[#0c261c]/15">
                <Sparkles className="w-6 h-6 text-[#c49b66]" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#0a1f16]">
                Italian Marble & Hardwood
              </h3>
              <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                Large-format imported Italian Statuario / Botticino marble in living, dining, and foyer areas. Master suites feature high-density engineered oak hardwood flooring.
              </p>
              <div className="text-xs text-[#0c261c] font-semibold pt-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c49b66]" />
                <span>Zero grout lines with mirror diamond polish</span>
              </div>
            </div>

            {/* Spec 2 */}
            <div className="p-7 rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] hover:border-[#0c261c]/40 transition-all shadow-xs hover:shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf5f0] text-[#0c261c] flex items-center justify-center border border-[#0c261c]/15">
                <Shield className="w-6 h-6 text-[#c49b66]" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#0a1f16]">
                Acoustic Double Glazing
              </h3>
              <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                Heavy-duty German engineered Schuco / Fenesta anodized aluminum windows with hermetically sealed double glazing for complete thermal barrier and acoustic silence.
              </p>
              <div className="text-xs text-[#0c261c] font-semibold pt-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c49b66]" />
                <span>35 dB external street noise attenuation</span>
              </div>
            </div>

            {/* Spec 3 */}
            <div className="p-7 rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] hover:border-[#0c261c]/40 transition-all shadow-xs hover:shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf5f0] text-[#0c261c] flex items-center justify-center border border-[#0c261c]/15">
                <Droplets className="w-6 h-6 text-[#c49b66]" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#0a1f16]">
                Kohler & Villeroy Fixtures
              </h3>
              <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                Spa-grade master bathroom with freestanding soaking tub, concealed Grohe / Kohler thermostatic rain shower diverters, and rimless wall-hung sanitary ware.
              </p>
              <div className="text-xs text-[#0c261c] font-semibold pt-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c49b66]" />
                <span>Full-height marble vanity backsplashes</span>
              </div>
            </div>

            {/* Spec 4 */}
            <div className="p-7 rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] hover:border-[#0c261c]/40 transition-all shadow-xs hover:shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf5f0] text-[#0c261c] flex items-center justify-center border border-[#0c261c]/15">
                <KeyRound className="w-6 h-6 text-[#c49b66]" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#0a1f16]">
                Private Elevator Foyer
              </h3>
              <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                High-speed automatic 8-passenger elevator programmed for direct floor access. Step directly into your own private reception foyer with no shared corridors.
              </p>
              <div className="text-xs text-[#0c261c] font-semibold pt-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c49b66]" />
                <span>RFID card & biometric access control</span>
              </div>
            </div>

            {/* Spec 5 */}
            <div className="p-7 rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] hover:border-[#0c261c]/40 transition-all shadow-xs hover:shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf5f0] text-[#0c261c] flex items-center justify-center border border-[#0c261c]/15">
                <Zap className="w-6 h-6 text-[#c49b66]" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#0a1f16]">
                100% DG Back-up & EV Ready
              </h3>
              <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                Silent diesel generator provides uninterrupted power backup including air-conditioning units and water pumps. Dedicated stilt parking bays feature EV charging points.
              </p>
              <div className="text-xs text-[#0c261c] font-semibold pt-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c49b66]" />
                <span>Separate 3-phase commercial metering</span>
              </div>
            </div>

            {/* Spec 6 */}
            <div className="p-7 rounded-2xl bg-[#f6f9f7] border border-[#e0eae3] hover:border-[#0c261c]/40 transition-all shadow-xs hover:shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf5f0] text-[#0c261c] flex items-center justify-center border border-[#0c261c]/15">
                <Cpu className="w-6 h-6 text-[#c49b66]" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#0a1f16]">
                Smart Home Automation
              </h3>
              <p className="text-xs sm:text-sm text-[#40544b] leading-relaxed">
                App-controlled multi-zone mood lighting, motorized curtain automation channels, digital Yale/Samsung biometric main door locks, and high-definition video door entry.
              </p>
              <div className="text-xs text-[#0c261c] font-semibold pt-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c49b66]" />
                <span>Compatible with Apple HomeKit & Alexa</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setBrochureModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0c261c] hover:bg-[#163d2e] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
            >
              <Download className="w-4 h-4 text-[#c49b66]" />
              <span>Download Full Specifications Sheet (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. [NEW SECTION 2] DEVELOPER LEGACY & DELIVERED LANDMARKS */}
      {/* ======================================================== */}
      <section id="legacy" className="py-20 bg-[#f6f9f7] border-b border-[#e0eae3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative & Stats */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c49b66] font-bold block">
                Heritage & Trust Since 1992
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0a1f16] leading-tight">
                The Arihant Legacy
              </h2>
              <p className="text-sm sm:text-base text-[#40544b] leading-relaxed">
                For over three decades, Arihant Foundations & Housing Ltd has transformed Chennai’s skyline through iconic commercial towers, boutique luxury residences, and integrated townships. Known for uncompromising structural integrity, transparent dealings, and on-time delivery.
              </p>

              {/* 4 Counter Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-5 rounded-xl bg-white border border-[#e0eae3] shadow-xs">
                  <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0c261c] block">
                    35+
                  </span>
                  <span className="text-xs font-semibold text-[#c49b66] uppercase tracking-wider block mt-1">
                    Years of Heritage
                  </span>
                  <span className="text-[11px] text-[#40544b] block mt-0.5">Established in 1992</span>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#e0eae3] shadow-xs">
                  <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0c261c] block">
                    60+
                  </span>
                  <span className="text-xs font-semibold text-[#c49b66] uppercase tracking-wider block mt-1">
                    Delivered Landmarks
                  </span>
                  <span className="text-[11px] text-[#40544b] block mt-0.5">Across Prime Chennai</span>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#e0eae3] shadow-xs">
                  <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0c261c] block">
                    15M+
                  </span>
                  <span className="text-xs font-semibold text-[#c49b66] uppercase tracking-wider block mt-1">
                    Sq. Ft. Built
                  </span>
                  <span className="text-[11px] text-[#40544b] block mt-0.5">Residential & Commercial</span>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#e0eae3] shadow-xs">
                  <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0c261c] block">
                    10,000+
                  </span>
                  <span className="text-xs font-semibold text-[#c49b66] uppercase tracking-wider block mt-1">
                    Happy Homeowners
                  </span>
                  <span className="text-[11px] text-[#40544b] block mt-0.5">Generations of Trust</span>
                </div>
              </div>
            </div>

            {/* Right Landmark Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0c261c] font-bold block mb-1">
                Prominent Delivered Chennai Landmarks
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-[#e0eae3] shadow-xs space-y-2">
                  <span className="text-xs font-bold text-[#c49b66] uppercase tracking-wider block">Nandanam</span>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#0a1f16]">Arihant Tiara</h4>
                  <p className="text-xs text-[#40544b]">
                    Ultra-luxury high-profile residential apartments in the center of South Chennai.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#e0eae3] shadow-xs space-y-2">
                  <span className="text-xs font-bold text-[#c49b66] uppercase tracking-wider block">OMR Corridor</span>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#0a1f16]">Arihant Escapade</h4>
                  <p className="text-xs text-[#40544b]">
                    Integrated resort-style township with cutting-edge recreational amenities.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#e0eae3] shadow-xs space-y-2">
                  <span className="text-xs font-bold text-[#c49b66] uppercase tracking-wider block">Boat Club Area</span>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#0a1f16]">Arihant Galatea</h4>
                  <p className="text-xs text-[#40544b]">
                    Prestigious super-luxury residences crafted for Chennai&apos;s corporate leaders.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#e0eae3] shadow-xs space-y-2">
                  <span className="text-xs font-bold text-[#c49b66] uppercase tracking-wider block">Kilpauk</span>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#0a1f16]">Arihant Amara</h4>
                  <p className="text-xs text-[#40544b]">
                    Bespoke residential landmark with landscaped sky parks and expansive layouts.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0c261c] text-white flex items-center justify-between gap-4 mt-2">
                <div>
                  <h5 className="font-serif-luxury text-base font-bold text-white">Publicly Listed Trust</h5>
                  <p className="text-xs text-white/70">BSE Listed: 531381 • Strict compliance & financial transparency.</p>
                </div>
                <Award className="w-8 h-8 text-[#c49b66] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. [NEW SECTION 3] FAQ & BUYER ADVISORY */}
      {/* ======================================================== */}
      <section id="faq" className="py-20 bg-white border-b border-[#e0eae3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c49b66] font-bold block mb-2">
              Buyer Advisory
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0a1f16]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#40544b] mt-3 font-light leading-relaxed">
              Clear answers regarding unit exclusivity, possession schedules, RERA compliance, and banking approvals.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#e0eae3] bg-[#f6f9f7] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white transition-colors"
                  >
                    <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#0a1f16]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "bg-[#0c261c] text-white rotate-180" : "bg-[#edf5f0] text-[#0c261c]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#40544b] leading-relaxed border-t border-[#e0eae3]/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Concierge Prompt */}
          <div className="mt-12 p-7 rounded-2xl bg-[#edf5f0] border border-[#e0eae3] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#0a1f16]">Have More Specific Questions?</h4>
              <p className="text-xs sm:text-sm text-[#40544b] mt-1">
                Our property advisory team is available for in-depth technical blueprints and financial payment schedule consultations.
              </p>
            </div>
            <a
              href="https://wa.me/917601000444"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0c261c] hover:bg-[#163d2e] text-white text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shadow-sm"
            >
              Consult with Property Advisor
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. LOCATION & CONNECTIVITY */}
      {/* ======================================================== */}
      <section id="location" className="py-20 bg-[#f6f9f7] border-b border-[#e0eae3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#c49b66] font-bold block mb-2">
                  Prime Neighbourhood
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0a1f16]">
                  D Block, Anna Nagar East
                </h2>
                <p className="text-sm sm:text-base text-[#40544b] mt-2 font-light leading-relaxed">
                  A prestigious, quiet residential boulevard with wide tree-lined avenues and immediate connectivity to transit hubs, schools, and healthcare.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-xl bg-white border border-[#e0eae3] flex items-center justify-between shadow-xs">
                  <span className="flex items-center gap-2.5 font-medium text-[#0a1f16]">
                    <MapPin className="w-4 h-4 text-[#c49b66]" />
                    Anna Nagar East Metro Station
                  </span>
                  <span className="font-mono font-bold text-[#0a1f16]">800 M | 2 Mins</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#e0eae3] flex items-center justify-between shadow-xs">
                  <span className="flex items-center gap-2.5 font-medium text-[#0a1f16]">
                    <MapPin className="w-4 h-4 text-[#c49b66]" />
                    Anna Nagar Tower Park & Shanthi Colony
                  </span>
                  <span className="font-mono font-bold text-[#0a1f16]">1.2 Km | 3 Mins</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#e0eae3] flex items-center justify-between shadow-xs">
                  <span className="flex items-center gap-2.5 font-medium text-[#0a1f16]">
                    <MapPin className="w-4 h-4 text-[#c49b66]" />
                    Chinmaya Vidyalaya & CPS Global School
                  </span>
                  <span className="font-mono font-bold text-[#0a1f16]">1.0 Km | 4 Mins</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#e0eae3] flex items-center justify-between shadow-xs">
                  <span className="flex items-center gap-2.5 font-medium text-[#0a1f16]">
                    <MapPin className="w-4 h-4 text-[#c49b66]" />
                    Billroth Hospital & MGM Healthcare
                  </span>
                  <span className="font-mono font-bold text-[#0a1f16]">1.1 Km | 4 Mins</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-2xl border border-[#e0eae3] p-7 sm:p-8 space-y-5 shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c49b66] font-bold block mb-1">
                  Site Map & Coordinates
                </span>
                <h3 className="font-serif-luxury text-2xl text-[#0a1f16] font-bold">
                  Arihant Mira Project Site
                </h3>
                <p className="text-xs text-[#40544b]">
                  D Block, 3rd Cross Street, Anna Nagar East, Chennai – 600102
                </p>
              </div>

              <div className="aspect-[16/10] rounded-xl overflow-hidden relative border border-[#e0eae3] shadow-inner">
                <img
                  src="/images/building-2.webp"
                  alt="Arihant Mira Site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#071711]/30 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="text-center p-5 bg-white/95 rounded-xl shadow-lg border border-white max-w-xs">
                    <MapPin className="w-8 h-8 text-[#0c261c] mx-auto mb-2" />
                    <h5 className="font-serif-luxury text-base font-bold text-[#0a1f16]">Arihant Mira</h5>
                    <span className="text-xs text-[#c49b66] font-semibold block">D Block, Anna Nagar East</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
                <span className="text-[#40544b]">Landmark: Near Anna Nagar East Post Office</span>
                <a
                  href="https://maps.google.com/?q=Anna+Nagar+East+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0c261c] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. CONTACT & REGAL EVERGREEN FOOTER */}
      {/* ======================================================== */}
      <footer id="contact" className="bg-[#071711] text-[#a0b5ab] pt-16 pb-12 text-sm border-t border-[#163d2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif-luxury font-bold text-3xl tracking-wide text-white">
                    Arihant
                  </span>
                  <span className="text-xs text-[#c49b66]">®</span>
                </div>
                <span className="text-xs lowercase tracking-wider text-[#c49b66] block mt-0.5">
                  memorable spaces
                </span>
              </div>
              <p className="text-xs text-[#a0b5ab] leading-relaxed">
                New #3 Old #25, Ganapathy Colony 3rd Lane, Off Cenotaph Road, Teynampet, Chennai – 600 018
              </p>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs uppercase tracking-[0.2em] text-[#c49b66] font-bold">
                ENQUIRIES
              </h5>
              <p className="text-xs text-white">
                TEL: <a href="tel:+914442244444" className="hover:text-[#c49b66]">+91 44 4224 4444</a>
              </p>
              <p className="text-xs text-white">
                MOBILE: <a href="tel:+917601000444" className="hover:text-[#c49b66]">+91 7601 000 444</a>
              </p>
              <p className="text-xs text-white">
                EMAIL: <a href="mailto:SALES@ARIHANTS.CO.IN" className="hover:text-[#c49b66]">SALES@ARIHANTS.CO.IN</a>
              </p>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs uppercase tracking-[0.2em] text-[#c49b66] font-bold">
                EXPLORE
              </h5>
              <div className="flex flex-col gap-2 text-xs text-[#a0b5ab]">
                <a href="#pricing" className="hover:text-white">PRICING & PLANS</a>
                <a href="#amenities" className="hover:text-white">AMENITIES</a>
                <a href="#video-tour" className="hover:text-white">VIDEO TOUR</a>
                <a href="#specifications" className="hover:text-white">SPECIFICATIONS</a>
                <a href="#legacy" className="hover:text-white">ARIHANT LEGACY</a>
                <a href="#faq" className="hover:text-white">FAQ</a>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs uppercase tracking-[0.2em] text-[#c49b66] font-bold">
                RERA ACCREDITATION
              </h5>
              <p className="text-xs text-white/80">
                TNRERA/29/Building/XXXX/2026
              </p>
              <p className="text-xs text-white/50">
                Authorized Marketing Partner: Goed Properties & Promoters
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-3">
            <span>© 1985 - 2026 Arihant Foundations & Housing Ltd | All Rights Reserved.</span>
            <span>PRIVACY POLICY & TERMS</span>
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 11. MODALS */}
      {/* ======================================================== */}
      {brochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-7 relative shadow-2xl">
            <button
              onClick={() => setBrochureModalOpen(false)}
              className="absolute top-4 right-4 text-[#40544b] hover:text-[#0a1f16]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <Download className="w-10 h-10 text-[#0c261c] mx-auto mb-2" />
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0a1f16]">
                Download Master Brochure
              </h3>
              <p className="text-xs text-[#40544b] mt-1">
                Arihant Mira — 4 BHK Boutique Residences (3,308 Sq.Ft)
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! The brochure download link has been dispatched to your mobile & email.");
                setBrochureModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-[#e0eae3] text-sm"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-lg border border-[#e0eae3] text-sm"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white font-semibold uppercase tracking-wider text-xs shadow-md mt-2"
              >
                Instant Download PDF
              </button>
            </form>
          </div>
        </div>
      )}

      {priceBreakupModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-7 relative shadow-2xl">
            <button
              onClick={() => setPriceBreakupModalOpen(false)}
              className="absolute top-4 right-4 text-[#40544b] hover:text-[#0a1f16]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <FileText className="w-10 h-10 text-[#0c261c] mx-auto mb-2" />
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0a1f16]">
                Detailed Cost Sheet
              </h3>
              <p className="text-xs text-[#40544b] mt-1">
                Payment milestone schedule, base price, car park, and tax breakdown.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! The detailed cost breakup has been dispatched to your email & WhatsApp.");
                setPriceBreakupModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-[#e0eae3] text-sm"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-lg border border-[#e0eae3] text-sm"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white font-semibold uppercase tracking-wider text-xs shadow-md mt-2"
              >
                Send Cost Sheet
              </button>
            </form>
          </div>
        </div>
      )}

      {siteVisitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-7 relative shadow-2xl">
            <button
              onClick={() => setSiteVisitModalOpen(false)}
              className="absolute top-4 right-4 text-[#40544b] hover:text-[#0a1f16]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <Calendar className="w-10 h-10 text-[#0c261c] mx-auto mb-2" />
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0a1f16]">
                Book A Site Visit
              </h3>
              <p className="text-xs text-[#40544b] mt-1">
                Experience the 3,308 Sq.Ft single-floor layout in person at D Block, Anna Nagar East.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your private inspection request has been logged. Our concierge will confirm the time slot.");
                setSiteVisitModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-[#e0eae3] text-sm"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-lg border border-[#e0eae3] text-sm"
              />
              <input
                type="datetime-local"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#e0eae3] text-sm text-[#0a1f16]"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#0c261c] hover:bg-[#163d2e] text-white font-semibold uppercase tracking-wider text-xs shadow-md mt-2"
              >
                Confirm Site Inspection Slot
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
