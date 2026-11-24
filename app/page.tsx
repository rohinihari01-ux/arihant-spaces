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
  Download,
  Calendar,
  Maximize2,
  ArrowUpRight,
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
} from "lucide-react";

export default function HomeClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePlanTab, setActivePlanTab] = useState<"floor" | "master" | "terrace">("floor");
  const [galleryFilter, setGalleryFilter] = useState<"all" | "exterior" | "interior" | "amenities">("all");
  
  // Modals
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [priceBreakupModalOpen, setPriceBreakupModalOpen] = useState(false);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "I am interested in Arihant Spaces - 4 BHK (3,308 Sq.Ft) at Anna Nagar East.",
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedInquiry(true);
  };

  // Gallery items
  const galleryItems = [
    {
      id: 1,
      category: "exterior",
      title: "Signature Laterite Stone Façade",
      desc: "Architectural elevation with organic red laterite stone and acoustic bronze louvers",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
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
      category: "interior",
      title: "Master Suite & Private Dresser",
      desc: "Spacious master bedroom with wooden flooring and walk-in dressing wardrobe",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "exterior",
      title: "Boutique Low-Rise Profile",
      desc: "Stilt + 5 levels with only one exclusive sanctuary per floor",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "amenities",
      title: "Rooftop Sky Lounge & Zen Deck",
      desc: "Landscaped terrace with private pergola seating and panoramic city views",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "interior",
      title: "Gourmet Chef's Kitchen",
      desc: "Ergonomic culinary space with separate wet prep area and utility balcony",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const filteredGallery =
    galleryFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === galleryFilter);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f5f3ee] font-sans antialiased selection:bg-[#c5a880] selection:text-black">
      {/* ======================================================== */}
      {/* 1. TOP HEADER & PARTNER CO-BRANDING BAR */}
      {/* ======================================================== */}
      <div className="bg-[#08090b] border-b border-white/5 py-2 px-4 text-xs text-[#a0a3ab]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#c5a880] font-semibold tracking-wider uppercase text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse"></span>
              Verified Exclusive Listing
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
              D Block, 3rd Cross Street, Anna Nagar East, Chennai – 600102
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+919840012345"
              className="flex items-center gap-1.5 hover:text-[#c5a880] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="font-medium text-white">+91 98400 12345</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://wa.me/919840012345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. PRIMARY NAVBAR (GOED PROPERTIES LAYOUT x ARIHANT THEME) */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 bg-[#0d0f12]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand Pairing */}
          <div className="flex items-center gap-5">
            <a href="#" className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-semibold">
                  ARIHANT SPACES
                </span>
                <span className="text-[10px] px-1.5 py-0.5 border border-[#c5a880]/30 text-[#c5a880] bg-[#c5a880]/10 uppercase font-mono">
                  MIRA
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-serif-luxury tracking-wider text-white font-semibold">
                BOUTIQUE RESIDENCES
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#a0a3ab]">
                ANNA NAGAR EAST • MARKETING BY GOED PROPERTIES
              </span>
            </a>
          </div>

          {/* Nav Items as structured on Goed Properties */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.16em] font-medium text-white/80">
            <a href="#overview" className="hover:text-[#c5a880] transition-colors">
              Overview
            </a>
            <a href="#pricing" className="hover:text-[#c5a880] transition-colors">
              Configuration & Price
            </a>
            <a href="#floorplans" className="hover:text-[#c5a880] transition-colors">
              Floor Plans
            </a>
            <a href="#amenities" className="hover:text-[#c5a880] transition-colors">
              Amenities
            </a>
            <a href="#gallery" className="hover:text-[#c5a880] transition-colors">
              Gallery
            </a>
            <a href="#location" className="hover:text-[#c5a880] transition-colors">
              Location
            </a>
          </nav>

          {/* Quick Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBrochureModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold text-[#0d0f12] bg-[#c5a880] hover:bg-[#dfc299] transition-all duration-300 shadow-md shadow-[#c5a880]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Brochure</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#14171d] border-b border-white/10 px-6 py-5 space-y-3 text-xs uppercase tracking-widest text-white/80">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c5a880] py-1.5"
            >
              Overview
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c5a880] py-1.5"
            >
              Configuration & Price
            </a>
            <a
              href="#floorplans"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c5a880] py-1.5"
            >
              Floor Plans
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c5a880] py-1.5"
            >
              Amenities
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c5a880] py-1.5"
            >
              Gallery
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c5a880] py-1.5"
            >
              Location
            </a>
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSiteVisitModalOpen(true);
                }}
                className="w-full py-2.5 bg-[#c5a880] text-[#0d0f12] font-semibold uppercase text-center"
              >
                Schedule Site Visit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* 3. HERO & BREADCRUMBS WITH TWO-COLUMN LISTING HERO */}
      {/* ======================================================== */}
      <section className="relative border-b border-white/10 bg-[#0d0f12] pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Path as on Goed Properties */}
          <div className="flex items-center gap-2 text-xs text-[#a0a3ab] mb-6">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="hover:text-white">Chennai</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="hover:text-white">Anna Nagar East</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#c5a880] font-medium">Arihant Spaces (Mira)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Project Showcase, Banner, & Summary Badges */}
            <div className="lg:col-span-8 space-y-6">
              {/* Project Header Title Area */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#8c3a27] text-white text-[11px] font-semibold uppercase tracking-wider">
                    Under Construction
                  </span>
                  <span className="px-3 py-1 bg-[#c5a880]/15 border border-[#c5a880]/40 text-[#dfc299] text-[11px] font-semibold uppercase tracking-wider">
                    Only 5 Exclusive Residences
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-[11px] font-medium uppercase tracking-wider">
                    RERA Approved
                  </span>
                </div>

                <h1 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                  Arihant Spaces (Mira)
                </h1>

                <p className="text-sm sm:text-base text-[#cfcbbe] mt-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>D Block, 3rd Cross Street, Anna Nagar East, Chennai – 600102</span>
                </p>
              </div>

              {/* Main Feature Visual Banner */}
              <div className="relative aspect-[16/9] overflow-hidden border border-white/15 bg-[#14171d] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                  alt="Arihant Spaces Anna Nagar Exterior Elevation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-[#0d0f12]/90 border border-[#c5a880]/30 backdrop-blur-md">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold block">
                      Architectural Masterpiece
                    </span>
                    <span className="text-sm sm:text-base font-serif-luxury text-white">
                      Red Laterite Stone Façade • 1 Residence Per Floor
                    </span>
                  </div>
                  <button
                    onClick={() => setSiteVisitModalOpen(true)}
                    className="px-4 py-2 bg-[#c5a880] text-[#0d0f12] text-xs uppercase tracking-wider font-semibold hover:bg-[#dfc299] transition-all"
                  >
                    Schedule Visit
                  </button>
                </div>
              </div>

              {/* Key Features Metric Grid (Goed Properties Specification Bar) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 bg-[#14171d] border border-white/10 text-center">
                  <span className="text-[11px] uppercase tracking-wider text-[#a0a3ab] block mb-1">
                    Property Type
                  </span>
                  <span className="font-serif-luxury text-base sm:text-lg text-[#c5a880] font-semibold block">
                    4 BHK Boutique
                  </span>
                  <span className="text-[10px] text-white/50">Palatial Homes</span>
                </div>

                <div className="p-4 bg-[#14171d] border border-white/10 text-center">
                  <span className="text-[11px] uppercase tracking-wider text-[#a0a3ab] block mb-1">
                    Super Built-up
                  </span>
                  <span className="font-serif-luxury text-base sm:text-lg text-[#c5a880] font-semibold block">
                    3,308 Sq. Ft.
                  </span>
                  <span className="text-[10px] text-white/50">Per Residence</span>
                </div>

                <div className="p-4 bg-[#14171d] border border-white/10 text-center">
                  <span className="text-[11px] uppercase tracking-wider text-[#a0a3ab] block mb-1">
                    Building Density
                  </span>
                  <span className="font-serif-luxury text-base sm:text-lg text-[#c5a880] font-semibold block">
                    Stilt + 5 Floors
                  </span>
                  <span className="text-[10px] text-white/50">1 Home Per Floor</span>
                </div>

                <div className="p-4 bg-[#14171d] border border-white/10 text-center">
                  <span className="text-[11px] uppercase tracking-wider text-[#a0a3ab] block mb-1">
                    Starting Price
                  </span>
                  <span className="font-serif-luxury text-base sm:text-lg text-[#c5a880] font-semibold block">
                    ₹8.5 Cr*
                  </span>
                  <span className="text-[10px] text-white/50">Onwards</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Instant Callback & Enquiry Box (Exact Goed Properties Format) */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-[#14171d] border border-[#c5a880]/40 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dfc299] via-[#c5a880] to-[#8c3a27]"></div>

                <div className="mb-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold block mb-1">
                    Authorized Channel Partner
                  </span>
                  <h3 className="font-serif-luxury text-xl text-white">
                    Request Price & Site Visit
                  </h3>
                  <p className="text-xs text-[#a0a3ab] mt-1 font-light">
                    Direct developer pricing, layout sheets, and private VIP previews.
                  </p>
                </div>

                {submittedInquiry ? (
                  <div className="p-5 bg-white/5 border border-[#c5a880]/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#c5a880] mx-auto animate-pulse" />
                    <h4 className="font-serif-luxury text-lg text-white">Inquiry Received</h4>
                    <p className="text-xs text-[#a0a3ab]">
                      Thank you! Our property specialist from Goed Properties & Arihant Spaces will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmittedInquiry(false)}
                      className="text-xs text-[#c5a880] underline uppercase tracking-wider pt-2"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-white/80 uppercase tracking-wider mb-1 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#090b0e] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 uppercase tracking-wider mb-1 font-medium">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#090b0e] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 uppercase tracking-wider mb-1 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#090b0e] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 uppercase tracking-wider mb-1 font-medium">
                        Message / Query
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#090b0e] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c5a880]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#c5a880] hover:bg-[#dfc299] text-[#0d0f12] font-semibold uppercase tracking-widest text-xs transition-all shadow-md shadow-[#c5a880]/20"
                    >
                      Instant Call Back & Price Sheet
                    </button>
                  </form>
                )}

                <div className="mt-5 pt-4 border-t border-white/10 text-center">
                  <span className="text-[11px] text-[#a0a3ab] block">Or speak directly with our team:</span>
                  <a
                    href="tel:+919840012345"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c5a880] mt-1 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 98400 12345
                  </a>
                </div>
              </div>

              {/* Quick Downloads Card */}
              <div className="bg-[#14171d] border border-white/10 p-5 space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold block">
                  Project Assets
                </span>
                <button
                  onClick={() => setBrochureModalOpen(true)}
                  className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#c5a880]" />
                    Project Master Brochure
                  </span>
                  <Download className="w-3.5 h-3.5 text-white/60" />
                </button>

                <button
                  onClick={() => setPriceBreakupModalOpen(true)}
                  className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#c5a880]" />
                    Detailed Cost Sheet & Payment Plan
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/60" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. OVERVIEW & PROJECT SUMMARY SECTION */}
      {/* ======================================================== */}
      <section id="overview" className="py-20 border-b border-white/10 bg-[#0f1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Description Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
                  Project Overview
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white">
                  About Arihant Spaces (Mira), Anna Nagar East
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#cfcbbe] font-light leading-relaxed">
                <strong className="text-white font-medium">Arihant Spaces (Mira)</strong> is an
                exclusive, under-construction ultra-luxury residential development brought to life by{" "}
                <strong className="text-white font-medium">Arihant Foundations & Housing Ltd</strong>.
                Positioned in the prime avenue of D Block, 3rd Cross Street, Anna Nagar East, Chennai,
                this project redefines bespoke urban living with an unprecedented low density of just{" "}
                <span className="text-[#c5a880] font-medium">5 private palatial residences</span>.
              </p>

              <p className="text-sm text-[#a0a3ab] font-light leading-relaxed">
                Structured as a Stilt + 5 Floors boutique tower, each level hosts exactly one 4 BHK home
                of approximately 3,308 sq. ft. With zero common shared walls, private elevator foyer
                access, and triple-aspect cross-ventilation, residents experience the unhindered privacy
                of an independent bungalow with the security and maintenance advantages of a gated
                residence.
              </p>

              {/* Project Bullet Highlights as on Goed Properties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>Ultra-Exclusive: 1 Apartment Per Floor</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>Sprawling 3,308 Sq. Ft. Floor Plates</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>Red Laterite Stone Façade Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>Direct Biometric Elevator Entrance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>3 Dedicated Covered Car Parking Bays</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>Separate Domestic Staff Quarters</span>
                </div>
              </div>
            </div>

            {/* Quick Fact Sheet / Snapshot Table */}
            <div className="lg:col-span-5 bg-[#14171d] border border-white/10 p-6 sm:p-8">
              <h3 className="font-serif-luxury text-xl text-white mb-4 border-b border-white/10 pb-3 flex items-center justify-between">
                <span>Project Snapshot</span>
                <Info className="w-4 h-4 text-[#c5a880]" />
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Project Name</span>
                  <span className="text-white font-medium">Arihant Spaces (Mira)</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Developer</span>
                  <span className="text-white font-medium">Arihant Foundations & Housing Ltd</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Marketing Partner</span>
                  <span className="text-white font-medium">Goed Properties & Promoters</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Location</span>
                  <span className="text-white font-medium">D Block, Anna Nagar East, Chennai</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Structure</span>
                  <span className="text-white font-medium">Stilt + 5 Floors</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Total Units</span>
                  <span className="text-[#c5a880] font-semibold">5 Units Only (1/Floor)</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Unit Variant</span>
                  <span className="text-white font-medium">4 BHK Boutique Residences</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Super Built-up Area</span>
                  <span className="text-white font-medium">Approx. 3,308 Sq. Ft.</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#a0a3ab]">Project Status</span>
                  <span className="text-[#dfc299] font-medium">Under Construction</span>
                </div>

                <div className="flex justify-between py-1.5">
                  <span className="text-[#a0a3ab]">Starting Price</span>
                  <span className="text-[#c5a880] font-semibold text-sm">₹8.5 Cr* Onwards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. CONFIGURATION & PRICING TABLE (GOED PROPERTIES FORMAT) */}
      {/* ======================================================== */}
      <section id="pricing" className="py-20 border-b border-white/10 bg-[#0d0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
              Configuration & Pricing
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white">
              Residential Units & Investment Plans
            </h2>
            <p className="text-xs sm:text-sm text-[#a0a3ab] mt-2 font-light">
              Limited collection of 5 residences designed for families seeking generous proportions and exclusivity.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto border border-white/10 bg-[#14171d]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#090b0e] text-[#c5a880] uppercase tracking-wider text-[11px] border-b border-white/10 font-medium">
                <tr>
                  <th className="py-4 px-6">Type</th>
                  <th className="py-4 px-6">Super Built-up Area</th>
                  <th className="py-4 px-6">Layout Configuration</th>
                  <th className="py-4 px-6">Car Parking</th>
                  <th className="py-4 px-6">Starting Price</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/90">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-5 px-6 font-medium text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c5a880]"></span>
                    4 BHK Luxury Palatial
                  </td>
                  <td className="py-5 px-6 font-mono text-[#cfcbbe]">3,308 Sq. Ft.</td>
                  <td className="py-5 px-6">
                    <span className="block text-white">4 Bed + 5 Bath + Living Salon</span>
                    <span className="text-[11px] text-[#a0a3ab]">
                      + Maid&apos;s Quarters & Private Foyer
                    </span>
                  </td>
                  <td className="py-5 px-6">3 Covered Bays (with EV socket)</td>
                  <td className="py-5 px-6">
                    <span className="text-base font-serif-luxury text-[#c5a880] font-bold">
                      ₹8.50 Cr*
                    </span>
                    <span className="text-[10px] text-[#a0a3ab] block">+ Taxes & Registration</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button
                      onClick={() => setPriceBreakupModalOpen(true)}
                      className="px-4 py-2 bg-[#c5a880] hover:bg-[#dfc299] text-[#0d0f12] text-xs uppercase tracking-wider font-semibold transition-all"
                    >
                      Price Breakup
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#a0a3ab] gap-2">
            <span>*Government charges, GST, registration, and club amenities applicable as per norms.</span>
            <span className="text-[#c5a880]">Bank loans pre-approved with leading financial institutions.</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FLOOR PLANS & SPATIAL BLUEPRINTS (TABBED) */}
      {/* ======================================================== */}
      <section id="floorplans" className="py-20 border-b border-white/10 bg-[#0f1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
              Architectural Blueprints
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white">
              Floor Plan & Spatial Layout
            </h2>
            <p className="text-xs sm:text-sm text-[#a0a3ab] mt-2 font-light">
              Full-floor palatial living with zero shared walls and dedicated service integration.
            </p>
          </div>

          {/* Plan Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex border border-white/10 bg-[#090b0e] p-1 gap-1">
              <button
                onClick={() => setActivePlanTab("floor")}
                className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all ${
                  activePlanTab === "floor"
                    ? "bg-[#c5a880] text-[#0d0f12]"
                    : "text-[#a0a3ab] hover:text-white"
                }`}
              >
                Typical 4 BHK Floor Plan (3,308 Sq.Ft)
              </button>
              <button
                onClick={() => setActivePlanTab("master")}
                className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all ${
                  activePlanTab === "master"
                    ? "bg-[#c5a880] text-[#0d0f12]"
                    : "text-[#a0a3ab] hover:text-white"
                }`}
              >
                Master Suite & Balcony Zoning
              </button>
              <button
                onClick={() => setActivePlanTab("terrace")}
                className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all ${
                  activePlanTab === "terrace"
                    ? "bg-[#c5a880] text-[#0d0f12]"
                    : "text-[#a0a3ab] hover:text-white"
                }`}
              >
                Terrace Sky Lounge Plan
              </button>
            </div>
          </div>

          {/* Floor Plan Display Card */}
          <div className="bg-[#14171d] border border-white/10 p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Architectural Schematic */}
              <div className="lg:col-span-8 bg-[#090b0e] border border-white/10 p-8 sm:p-12 relative flex items-center justify-center min-h-[400px]">
                {activePlanTab === "floor" && (
                  <div className="w-full max-w-lg border-2 border-dashed border-[#c5a880]/30 p-6 text-center space-y-4">
                    <div className="flex justify-between text-[10px] text-[#c5a880] uppercase tracking-widest font-mono">
                      <span>EAST-FACING FOYER ENTRY</span>
                      <span>VASTU COMPLIANT</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-left text-xs">
                      <div className="border border-white/10 p-2.5 bg-white/5">
                        <span className="text-[10px] text-[#c5a880] block">BEDROOM 01</span>
                        <span className="font-semibold text-white">Master Suite</span>
                        <span className="text-[10px] text-[#a0a3ab] block">16&apos;0&quot; x 18&apos;6&quot;</span>
                      </div>
                      <div className="border border-white/10 p-2.5 bg-white/5">
                        <span className="text-[10px] text-[#c5a880] block">BEDROOM 02</span>
                        <span className="font-semibold text-white">Guest Suite</span>
                        <span className="text-[10px] text-[#a0a3ab] block">14&apos;0&quot; x 16&apos;0&quot;</span>
                      </div>
                      <div className="border border-white/10 p-2.5 bg-white/5">
                        <span className="text-[10px] text-[#c5a880] block">BEDROOM 03</span>
                        <span className="font-semibold text-white">Family Suite</span>
                        <span className="text-[10px] text-[#a0a3ab] block">13&apos;6&quot; x 15&apos;0&quot;</span>
                      </div>
                    </div>

                    <div className="border border-[#c5a880]/60 p-5 bg-[#c5a880]/10 text-center">
                      <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block">
                        Grand Social Salon & Dining
                      </span>
                      <span className="text-sm font-serif-luxury text-white">
                        38&apos;4&quot; x 19&apos;8&quot;
                      </span>
                      <span className="text-[11px] text-[#cfcbbe] block mt-1">
                        Opens to Covered Viewing Sit-out Balcony
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-left text-xs">
                      <div className="border border-white/10 p-2.5 bg-white/5">
                        <span className="text-[10px] text-[#c5a880] block">BEDROOM 04</span>
                        <span className="font-semibold text-white">Children Suite</span>
                        <span className="text-[10px] text-[#a0a3ab] block">13&apos;0&quot; x 14&apos;0&quot;</span>
                      </div>
                      <div className="border border-white/10 p-2.5 bg-white/5">
                        <span className="text-[10px] text-[#c5a880] block">KITCHEN</span>
                        <span className="font-semibold text-white">Dry + Wet Prep</span>
                        <span className="text-[10px] text-[#a0a3ab] block">14&apos;6&quot; x 12&apos;0&quot;</span>
                      </div>
                      <div className="border border-white/10 p-2.5 bg-white/5">
                        <span className="text-[10px] text-[#c5a880] block">STAFF</span>
                        <span className="font-semibold text-white">Maid + WC</span>
                        <span className="text-[10px] text-[#a0a3ab] block">9&apos;0&quot; x 8&apos;0&quot;</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#c5a880] font-mono tracking-widest">
                      ✦ PRIVATE ELEVATOR LOBBY • EXCLUSIVE FLOOR KEYCARD ACCESS ✦
                    </div>
                  </div>
                )}

                {activePlanTab === "master" && (
                  <div className="text-center p-8 space-y-3">
                    <Maximize2 className="w-12 h-12 text-[#c5a880] mx-auto" />
                    <h4 className="font-serif-luxury text-xl text-white">
                      Master Suite Spatial Zoning
                    </h4>
                    <p className="text-xs text-[#a0a3ab] max-w-md mx-auto">
                      Features private walk-in dressing wardrobe, 5-fixture bath with rain shower & soaking tub,
                      insulated timber flooring, and direct glass doors opening to the morning sun terrace.
                    </p>
                  </div>
                )}

                {activePlanTab === "terrace" && (
                  <div className="text-center p-8 space-y-3">
                    <Sparkles className="w-12 h-12 text-[#c5a880] mx-auto" />
                    <h4 className="font-serif-luxury text-xl text-white">
                      Rooftop Sky Lounge Layout
                    </h4>
                    <p className="text-xs text-[#a0a3ab] max-w-md mx-auto">
                      Shared exclusively by the 5 families: landscaped zen garden deck, barbecue pavilion,
                      shaded meditation cabana, and panoramic city lights views over Anna Nagar.
                    </p>
                  </div>
                )}
              </div>

              {/* Plan Specs Column */}
              <div className="lg:col-span-4 space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                    Spatial Specifications
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-white mt-1">
                    3,308 Sq. Ft. Palatial Layout
                  </h3>
                  <p className="text-xs text-[#a0a3ab] mt-2 font-light">
                    Every residence is an independent sanctuary covering the entire floor plate with 360° light.
                  </p>
                </div>

                <div className="space-y-2.5 border-t border-b border-white/10 py-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#a0a3ab]">Super Built-up Area:</span>
                    <span className="text-white font-medium">3,308 Sq. Ft.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a0a3ab]">Configuration:</span>
                    <span className="text-white font-medium">4 BHK + Maid&apos;s Quarters</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a0a3ab]">Balconies:</span>
                    <span className="text-white font-medium">2 Private Covered Sit-outs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a0a3ab]">Bathrooms:</span>
                    <span className="text-white font-medium">5 Toilets (4 Ensuite + 1 Staff)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a0a3ab]">Stilt Parking:</span>
                    <span className="text-white font-medium">3 Covered Bays / Unit</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => setBrochureModalOpen(true)}
                    className="w-full py-3.5 bg-[#c5a880] hover:bg-[#dfc299] text-[#0d0f12] text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Blueprint PDF
                  </button>

                  <button
                    onClick={() => setSiteVisitModalOpen(true)}
                    className="w-full py-3.5 border border-[#c5a880]/50 hover:border-[#c5a880] text-white text-xs uppercase tracking-widest font-medium transition-all"
                  >
                    Request Physical Walkthrough
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. AMENITIES & SPECIFICATIONS GRID */}
      {/* ======================================================== */}
      <section id="amenities" className="py-20 border-b border-white/10 bg-[#0d0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
              Exclusive Amenities
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white">
              Curated Privileges for 5 Families
            </h2>
            <p className="text-xs sm:text-sm text-[#a0a3ab] mt-2 font-light">
              Tailored for privacy and low maintenance without large crowded clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-[#14171d] border border-white/10 hover:border-[#c5a880]/40 transition-all">
              <KeyRound className="w-8 h-8 text-[#c5a880] mb-4" />
              <h3 className="font-serif-luxury text-lg text-white mb-2">
                Private Elevator Foyer
              </h3>
              <p className="text-xs text-[#a0a3ab] leading-relaxed">
                High-speed automatic lift programmed to open exclusively inside your home’s private access lobby.
              </p>
            </div>

            <div className="p-6 bg-[#14171d] border border-white/10 hover:border-[#c5a880]/40 transition-all">
              <Sparkles className="w-8 h-8 text-[#c5a880] mb-4" />
              <h3 className="font-serif-luxury text-lg text-white mb-2">
                Rooftop Sky Terrace Lounge
              </h3>
              <p className="text-xs text-[#a0a3ab] leading-relaxed">
                Landscaped terrace with private sunset dining, landscaped planters, and relaxation cabanas.
              </p>
            </div>

            <div className="p-6 bg-[#14171d] border border-white/10 hover:border-[#c5a880]/40 transition-all">
              <Zap className="w-8 h-8 text-[#c5a880] mb-4" />
              <h3 className="font-serif-luxury text-lg text-white mb-2">
                100% DG Power Backup
              </h3>
              <p className="text-xs text-[#a0a3ab] leading-relaxed">
                Uninterrupted silent diesel generator backup supporting air-conditioning, lights, and heavy appliances.
              </p>
            </div>

            <div className="p-6 bg-[#14171d] border border-white/10 hover:border-[#c5a880]/40 transition-all">
              <Car className="w-8 h-8 text-[#c5a880] mb-4" />
              <h3 className="font-serif-luxury text-lg text-white mb-2">
                3 Covered Parks & EV Ready
              </h3>
              <p className="text-xs text-[#a0a3ab] leading-relaxed">
                Dedicated stilt car parking bays equipped with electric vehicle charging provisions.
              </p>
            </div>

            <div className="p-6 bg-[#14171d] border border-white/10 hover:border-[#c5a880]/40 transition-all">
              <Shield className="w-8 h-8 text-[#c5a880] mb-4" />
              <h3 className="font-serif-luxury text-lg text-white mb-2">
                Multi-Tier Security & CCTV
              </h3>
              <p className="text-xs text-[#a0a3ab] leading-relaxed">
                24x7 trained security, perimeter surveillance cameras, video door phone, and access control.
              </p>
            </div>

            <div className="p-6 bg-[#14171d] border border-white/10 hover:border-[#c5a880]/40 transition-all">
              <Layers className="w-8 h-8 text-[#c5a880] mb-4" />
              <h3 className="font-serif-luxury text-lg text-white mb-2">
                Domestic Staff Suite & Service Lift
              </h3>
              <p className="text-xs text-[#a0a3ab] leading-relaxed">
                Separate service stairs, delivery lobby, and dedicated domestic staff room with attached washroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. PHOTO GALLERY & VISUAL WALKTHROUGH */}
      {/* ======================================================== */}
      <section id="gallery" className="py-20 border-b border-white/10 bg-[#0f1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
                Project Gallery
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white">
                Visual Impressions & Walkthrough
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => setGalleryFilter("all")}
                className={`px-4 py-2 uppercase tracking-wider transition-all ${
                  galleryFilter === "all"
                    ? "bg-[#c5a880] text-[#0d0f12] font-semibold"
                    : "bg-[#14171d] text-[#a0a3ab] hover:text-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setGalleryFilter("exterior")}
                className={`px-4 py-2 uppercase tracking-wider transition-all ${
                  galleryFilter === "exterior"
                    ? "bg-[#c5a880] text-[#0d0f12] font-semibold"
                    : "bg-[#14171d] text-[#a0a3ab] hover:text-white"
                }`}
              >
                Exterior & Laterite
              </button>
              <button
                onClick={() => setGalleryFilter("interior")}
                className={`px-4 py-2 uppercase tracking-wider transition-all ${
                  galleryFilter === "interior"
                    ? "bg-[#c5a880] text-[#0d0f12] font-semibold"
                    : "bg-[#14171d] text-[#a0a3ab] hover:text-white"
                }`}
              >
                Interiors
              </button>
              <button
                onClick={() => setGalleryFilter("amenities")}
                className={`px-4 py-2 uppercase tracking-wider transition-all ${
                  galleryFilter === "amenities"
                    ? "bg-[#c5a880] text-[#0d0f12] font-semibold"
                    : "bg-[#14171d] text-[#a0a3ab] hover:text-white"
                }`}
              >
                Terrace & Lifestyle
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-[#14171d] border border-white/10 aspect-[4/3]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif-luxury text-base text-white">{item.title}</h4>
                  <p className="text-[11px] text-[#a0a3ab] font-light mt-0.5 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. LOCATION & PROXIMITY MAP (ANNA NAGAR EAST) */}
      {/* ======================================================== */}
      <section id="location" className="py-20 border-b border-white/10 bg-[#0d0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Distances List as on Goed Properties */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
                  Neighborhood & Connectivity
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white">
                  Prime Address: D Block, Anna Nagar East
                </h2>
                <p className="text-xs sm:text-sm text-[#a0a3ab] mt-2 font-light">
                  Anna Nagar East stands among Chennai’s most established residential havens with planned tree-lined
                  boulevards and immediate metro connectivity.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-[#14171d] border border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-[#c5a880]" />
                    Anna Nagar East Metro Station
                  </span>
                  <span className="text-[#c5a880] font-mono font-medium">800 Meters | 2 Mins</span>
                </div>

                <div className="p-3.5 bg-[#14171d] border border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-[#c5a880]" />
                    Anna Nagar Tower Park & Shanthi Colony
                  </span>
                  <span className="text-[#c5a880] font-mono font-medium">1.2 Km | 3 Mins</span>
                </div>

                <div className="p-3.5 bg-[#14171d] border border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-[#c5a880]" />
                    Chinmaya Vidyalaya & CPS Global School
                  </span>
                  <span className="text-[#c5a880] font-mono font-medium">1.0 Km | 4 Mins</span>
                </div>

                <div className="p-3.5 bg-[#14171d] border border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-[#c5a880]" />
                    Billroth Hospital & MGM Healthcare
                  </span>
                  <span className="text-[#c5a880] font-mono font-medium">1.1 Km | 4 Mins</span>
                </div>

                <div className="p-3.5 bg-[#14171d] border border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-[#c5a880]" />
                    Poonamallee High Road & Kilpauk
                  </span>
                  <span className="text-[#c5a880] font-mono font-medium">1.8 Km | 5 Mins</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Location Card */}
            <div className="lg:col-span-6 bg-[#14171d] border border-white/10 p-6 sm:p-8">
              <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold block mb-2">
                Geographic Location
              </span>
              <h3 className="font-serif-luxury text-2xl text-white mb-2">
                Arihant Spaces (Mira) Site
              </h3>
              <p className="text-xs text-[#a0a3ab] mb-6">
                D Block, 3rd Cross Street, Anna Nagar East, Chennai – 600102
              </p>

              {/* Map Illustration Box */}
              <div className="aspect-[16/10] bg-[#090b0e] border border-white/10 relative overflow-hidden flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#c5a880] text-[#0d0f12] flex items-center justify-center mx-auto shadow-lg shadow-[#c5a880]/30 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-lg text-white">Arihant Spaces (Mira)</h4>
                    <span className="text-xs text-[#c5a880]">D Block, Anna Nagar East</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-[#a0a3ab]">Landmark: Near Anna Nagar East Post Office</span>
                <a
                  href="https://maps.google.com/?q=Anna+Nagar+East+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a880] hover:underline flex items-center gap-1 font-medium"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. ABOUT DEVELOPER & CHANNEL PARTNER CO-BRANDING */}
      {/* ======================================================== */}
      <section className="py-16 border-b border-white/10 bg-[#0f1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Developer Details */}
            <div className="bg-[#14171d] border border-white/10 p-6 sm:p-8 space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold block">
                About the Developer
              </span>
              <h3 className="font-serif-luxury text-2xl text-white">
                Arihant Foundations & Housing Ltd
              </h3>
              <p className="text-xs text-[#a0a3ab] leading-relaxed font-light">
                Over 30 years of landmark real estate craftsmanship in Chennai. Pioneers in bringing
                European and contemporary architectural aesthetics to residential developments with over
                15 million sq. ft. of residential and commercial spaces delivered.
              </p>
            </div>

            {/* Goed Properties Channel Partner Details */}
            <div className="bg-[#14171d] border border-white/10 p-6 sm:p-8 space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold block">
                About Marketing Partner
              </span>
              <h3 className="font-serif-luxury text-2xl text-white">
                Goed Properties & Promoters
              </h3>
              <p className="text-xs text-[#a0a3ab] leading-relaxed font-light">
                Chennai-based premier real estate advisory headquartered in Anna Nagar, Chennai.
                Specializing in luxury residences, legal due diligence, title verification, and end-to-end
                buyer consultation for prestigious developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. FOOTER WITH RERA & LEGAL COMPLIANCE */}
      {/* ======================================================== */}
      <footer className="bg-[#090a0d] text-[#a0a3ab] border-t border-white/10 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                ARIHANT SPACES
              </span>
              <h4 className="font-serif-luxury text-lg text-white">MIRA ANNA NAGAR</h4>
              <p className="text-xs text-[#828692] leading-relaxed font-light">
                Exclusive 4 BHK Boutique Residences (3,308 Sq.Ft) limited to 5 families in Anna Nagar East.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-white uppercase tracking-wider text-xs font-semibold">
                Project Sections
              </h5>
              <ul className="space-y-1.5 text-xs text-[#828692]">
                <li><a href="#overview" className="hover:text-[#c5a880]">Overview</a></li>
                <li><a href="#pricing" className="hover:text-[#c5a880]">Configuration & Price</a></li>
                <li><a href="#floorplans" className="hover:text-[#c5a880]">Floor Plans</a></li>
                <li><a href="#amenities" className="hover:text-[#c5a880]">Curated Amenities</a></li>
                <li><a href="#gallery" className="hover:text-[#c5a880]">Visual Gallery</a></li>
                <li><a href="#location" className="hover:text-[#c5a880]">Location Coordinates</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h5 className="text-white uppercase tracking-wider text-xs font-semibold">
                Site Address
              </h5>
              <p className="text-xs text-[#828692] leading-relaxed">
                Arihant Spaces (Mira)<br />
                D Block, 3rd Cross Street,<br />
                Anna Nagar East, Chennai – 600102,<br />
                Tamil Nadu, India.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-white uppercase tracking-wider text-xs font-semibold">
                Inquiries & Previews
              </h5>
              <p className="text-xs text-[#828692]">
                Connect with our authorized advisory team:
              </p>
              <a href="tel:+919840012345" className="block text-white font-medium hover:text-[#c5a880]">
                +91 98400 12345
              </a>
              <a href="mailto:info@goedproperties.in" className="block text-[#c5a880] hover:underline">
                info@goedproperties.in
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6b6f7a] gap-3">
            <span>© 2026 Arihant Spaces & Goed Properties. All rights reserved.</span>
            <span className="text-center sm:text-right">
              Disclaimer: Artistic impressions and specifications are indicative and subject to approvals under Tamil Nadu RERA norms.
            </span>
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 12. FLOATING ACTION BAR FOR MOBILE (GOED PROPERTIES STYLE) */}
      {/* ======================================================== */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0f12] border-t border-white/10 p-2.5 flex items-center justify-around gap-2 shadow-2xl">
        <a
          href="tel:+919840012345"
          className="flex-1 py-2.5 bg-[#14171d] border border-white/10 text-white text-xs font-semibold uppercase text-center flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
          Call
        </a>
        <a
          href="https://wa.me/919840012345"
          className="flex-1 py-2.5 bg-[#25D366] text-black text-xs font-semibold uppercase text-center flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          WhatsApp
        </a>
        <button
          onClick={() => setSiteVisitModalOpen(true)}
          className="flex-1 py-2.5 bg-[#c5a880] text-[#0d0f12] text-xs font-semibold uppercase text-center"
        >
          Enquire
        </button>
      </div>

      {/* ======================================================== */}
      {/* 13. MODALS (BROCHURE, PRICE BREAKUP, SITE VISIT) */}
      {/* ======================================================== */}
      {brochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#14171d] border border-[#c5a880] max-w-md w-full p-6 relative">
            <button
              onClick={() => setBrochureModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <Download className="w-8 h-8 text-[#c5a880] mx-auto mb-2" />
              <h3 className="font-serif-luxury text-xl text-white">Download Brochure</h3>
              <p className="text-xs text-[#a0a3ab]">
                Arihant Spaces (Mira) — 4 BHK Boutique Residences (3,308 Sq.Ft)
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! The brochure download has started.");
                setBrochureModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-white/80 uppercase mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-[#090b0e] border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block text-white/80 uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile Number"
                  className="w-full px-3 py-2 bg-[#090b0e] border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block text-white/80 uppercase mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 bg-[#090b0e] border border-white/10 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#c5a880] hover:bg-[#dfc299] text-[#0d0f12] font-semibold uppercase tracking-wider text-xs mt-3"
              >
                Instant Download
              </button>
            </form>
          </div>
        </div>
      )}

      {priceBreakupModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#14171d] border border-[#c5a880] max-w-md w-full p-6 relative">
            <button
              onClick={() => setPriceBreakupModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <FileText className="w-8 h-8 text-[#c5a880] mx-auto mb-2" />
              <h3 className="font-serif-luxury text-xl text-white">Detailed Cost Sheet</h3>
              <p className="text-xs text-[#a0a3ab]">
                Get payment milestones, base price, car park charges, and government taxes breakdown.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! The price sheet has been sent to your email and phone.");
                setPriceBreakupModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-white/80 uppercase mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-[#090b0e] border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block text-white/80 uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile Number"
                  className="w-full px-3 py-2 bg-[#090b0e] border border-white/10 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#c5a880] hover:bg-[#dfc299] text-[#0d0f12] font-semibold uppercase tracking-wider text-xs mt-3"
              >
                Send Detailed Cost Sheet
              </button>
            </form>
          </div>
        </div>
      )}

      {siteVisitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#14171d] border border-[#c5a880] max-w-md w-full p-6 relative">
            <button
              onClick={() => setSiteVisitModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <Calendar className="w-8 h-8 text-[#c5a880] mx-auto mb-2" />
              <h3 className="font-serif-luxury text-xl text-white">Book Site Visit</h3>
              <p className="text-xs text-[#a0a3ab]">
                Schedule an exclusive walkthrough of D Block, Anna Nagar East.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your private site visit request is scheduled.");
                setSiteVisitModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-white/80 uppercase mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-[#090b0e] border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block text-white/80 uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile Number"
                  className="w-full px-3 py-2 bg-[#090b0e] border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block text-white/80 uppercase mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-3 py-2 bg-[#090b0e] border border-white/10 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#c5a880] hover:bg-[#dfc299] text-[#0d0f12] font-semibold uppercase tracking-wider text-xs mt-3"
              >
                Confirm Site Visit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
