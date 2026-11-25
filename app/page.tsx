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
      desc: "Distinct architectural elevation with organic red laterite stone and acoustic bronze louvers",
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
    <div className="min-h-screen bg-white text-[#262638] font-sans antialiased selection:bg-[#262638] selection:text-white">
      {/* ======================================================== */}
      {/* 1. TOP SUBTLE NOTICE BAR */}
      {/* ======================================================== */}
      <div className="bg-[#f8f6f2] border-b border-[#eae7e1] py-2 px-4 text-xs text-[#5e6074]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#262638] font-semibold tracking-wider uppercase text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c58b5c]"></span>
              Exclusive Boutique Residences
            </span>
            <span className="hidden md:inline text-[#d4cfc7]">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#5e6074]">
              <MapPin className="w-3.5 h-3.5 text-[#c58b5c]" />
              D Block, 3rd Cross Street, Anna Nagar East, Chennai – 600102
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+914442244444"
              className="flex items-center gap-1.5 hover:text-[#c58b5c] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c58b5c]" />
              <span className="font-medium text-[#262638]">+91 44 4224 4444</span>
            </a>
            <span className="text-[#d4cfc7]">|</span>
            <a
              href="https://wa.me/917601000444"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#262638] hover:text-[#c58b5c] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. PRIMARY NAVIGATION (MATCHING LIVE ARIHANT SPACES) */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eae7e1] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Exact Arihant Brandmark from Screenshot 2 & 4 */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-2xl tracking-tight text-[#262638]">
                  Arihant
                </span>
                <span className="text-xs text-[#262638]">®</span>
              </div>
              <span className="text-[10px] lowercase tracking-wider text-[#5e6074] -mt-1 font-light">
                memorable spaces
              </span>
            </a>
            <span className="h-6 w-[1px] bg-[#eae7e1] mx-1 hidden sm:block"></span>
            <span className="text-xs tracking-[0.2em] font-serif-luxury uppercase text-[#c58b5c] hidden sm:block font-medium">
              Mira Anna Nagar
            </span>
          </div>

          {/* Nav Links Matching Screenshot 1: LIFESTYLE, NEIGHBOURHOOD, DESIGN, FAQ, PLANS */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#262638]">
            <a href="#lifestyle" className="hover:text-[#c58b5c] transition-colors">
              Lifestyle
            </a>
            <a href="#neighbourhood" className="hover:text-[#c58b5c] transition-colors">
              Neighbourhood
            </a>
            <a href="#whymira" className="hover:text-[#c58b5c] transition-colors">
              Why Mira
            </a>
            <a href="#pricing" className="hover:text-[#c58b5c] transition-colors">
              Price & Specs
            </a>
            <a href="#plans" className="hover:text-[#c58b5c] transition-colors">
              Plans
            </a>
            <a href="#gallery" className="hover:text-[#c58b5c] transition-colors">
              Gallery
            </a>
          </nav>

          {/* Exact Rounded Pill Button: "ENQUIRE" (Screenshot 1) */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-8 py-2.5 rounded-full bg-[#262638] hover:bg-[#191925] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Enquire
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#262638] hover:text-black"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f8f6f2] border-b border-[#eae7e1] px-6 py-5 space-y-3 text-xs uppercase tracking-widest text-[#262638]">
            <a
              href="#lifestyle"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c58b5c] py-1"
            >
              Lifestyle
            </a>
            <a
              href="#neighbourhood"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c58b5c] py-1"
            >
              Neighbourhood
            </a>
            <a
              href="#whymira"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c58b5c] py-1"
            >
              Why Mira
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c58b5c] py-1"
            >
              Price & Specs
            </a>
            <a
              href="#plans"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c58b5c] py-1"
            >
              Plans
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#c58b5c] py-1"
            >
              Gallery
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 rounded-full bg-[#262638] text-white text-center font-semibold uppercase tracking-widest"
              >
                Enquire Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* 3. HERO SECTION (MATCHING SCREENSHOT 4: "A WHISPER OF ELEGANCE") */}
      {/* ======================================================== */}
      <section className="relative bg-amber-silk overflow-hidden border-b border-[#eae7e1] py-16 lg:py-24">
        {/* Decorative Fluid Texture Backdrop */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-[#c58b5c]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Path from Goed Properties */}
          <div className="flex items-center gap-2 text-xs text-[#262638]/70 mb-8 font-medium">
            <a href="#" className="hover:text-[#262638] flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <span>Chennai</span>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <span>Anna Nagar East</span>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <span className="text-[#262638] font-bold">Arihant Spaces (Mira)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Exactly Matching Hero in Screenshot 4 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 text-xs font-medium text-[#262638] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c58b5c]"></span>
                Under Construction • Exclusive 5 Residences
              </div>

              {/* Exact Tagline from Screenshot 4 */}
              <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-normal text-white drop-shadow-sm leading-[1.1] tracking-tight">
                A whisper of <br />
                <span className="italic">elegance</span>
              </h1>

              {/* Exact Project Header Label from Screenshot 4 */}
              <div className="flex items-center gap-4 pt-2">
                <span className="font-serif-luxury text-2xl sm:text-3xl text-white font-semibold">
                  Mira
                </span>
                <span className="h-6 w-[1.5px] bg-white/70"></span>
                <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white/90">
                  D BLOCK, ANNA NAGAR EAST
                </span>
              </div>

              <p className="text-sm sm:text-base text-white/90 font-light max-w-xl leading-relaxed">
                An ultra-luxury boutique sanctuary featuring sprawling 4 BHK homes of 3,308 sq. ft.
                One residence per floor (Stilt + 5 levels) with zero shared walls and an enduring red
                laterite stone façade.
              </p>

              {/* Specifications Strip (Goed Properties details in Arihant refined styling) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[#5e6074] block">Type</span>
                  <span className="font-serif-luxury text-base font-semibold text-[#262638]">4 BHK</span>
                  <span className="text-[10px] text-[#5e6074] block">Palatial</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[#5e6074] block">Area</span>
                  <span className="font-serif-luxury text-base font-semibold text-[#262638]">3,308</span>
                  <span className="text-[10px] text-[#5e6074] block">Sq. Ft.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[#5e6074] block">Density</span>
                  <span className="font-serif-luxury text-base font-semibold text-[#262638]">1 / Floor</span>
                  <span className="text-[10px] text-[#5e6074] block">Zero Shared Walls</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[#5e6074] block">Price</span>
                  <span className="font-serif-luxury text-base font-semibold text-[#262638]">₹8.5 Cr*</span>
                  <span className="text-[10px] text-[#5e6074] block">Onwards</span>
                </div>
              </div>
            </div>

            {/* Right Column: Goed Properties Sticky Callback & Lead Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#eae7e1] p-6 sm:p-8 shadow-xl relative">
                <div className="mb-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c58b5c] font-semibold block mb-1">
                    Marketing by Goed Properties
                  </span>
                  <h3 className="font-serif-luxury text-xl text-[#262638] font-semibold">
                    Request Price Sheet & Site Visit
                  </h3>
                  <p className="text-xs text-[#5e6074] mt-1 font-light">
                    Direct official pricing, floor layouts, and private preview access.
                  </p>
                </div>

                {submittedInquiry ? (
                  <div className="p-6 bg-[#f8f6f2] rounded-xl border border-[#eae7e1] text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#262638] mx-auto animate-pulse" />
                    <h4 className="font-serif-luxury text-lg text-[#262638]">Inquiry Received</h4>
                    <p className="text-xs text-[#5e6074]">
                      Thank you! Our property advisory team from Goed Properties & Arihant Spaces will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmittedInquiry(false)}
                      className="text-xs text-[#262638] underline uppercase tracking-wider pt-2 font-semibold"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[#262638] uppercase tracking-wider mb-1 font-medium text-[11px]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sundaram"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f6f2] border border-[#eae7e1] text-[#262638] placeholder-[#a0a3ab] focus:outline-none focus:border-[#262638]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#262638] uppercase tracking-wider mb-1 font-medium text-[11px]">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f6f2] border border-[#eae7e1] text-[#262638] placeholder-[#a0a3ab] focus:outline-none focus:border-[#262638]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#262638] uppercase tracking-wider mb-1 font-medium text-[11px]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8f6f2] border border-[#eae7e1] text-[#262638] placeholder-[#a0a3ab] focus:outline-none focus:border-[#262638]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#262638] hover:bg-[#191925] text-white font-semibold uppercase tracking-widest text-xs transition-all shadow-md mt-2"
                    >
                      Instant Call Back & Price Sheet
                    </button>
                  </form>
                )}

                <div className="mt-4 pt-3 border-t border-[#eae7e1] flex items-center justify-between text-xs">
                  <span className="text-[#5e6074]">Direct hotline:</span>
                  <a
                    href="tel:+914442244444"
                    className="font-semibold text-[#262638] hover:text-[#c58b5c]"
                  >
                    +91 44 4224 4444
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. "WHY MIRA?" SECTION (EXACTLY FROM SCREENSHOT 3) */}
      {/* ======================================================== */}
      <section id="whymira" className="py-20 bg-amber-silk-soft border-b border-[#eae7e1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Centered Heading Matching Screenshot 3 */}
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#262638] mb-12">
            Why Mira?
          </h2>

          {/* 3 Column Feature Highlights from Screenshot 3 with Divider Line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#262638]/20 text-left">
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-[#262638]/90 font-light leading-relaxed">
                Each residence occupies an entire floor, ensuring no shared walls and a level of
                privacy that is rarely achieved.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm sm:text-base text-[#262638]/90 font-light leading-relaxed">
                3308 sq.ft. homes designed with clear separation between living, private, and service
                areas, allowing the home to function seamlessly through the day.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm sm:text-base text-[#262638]/90 font-light leading-relaxed">
                A focus on proportion, material quality, and restraint creates spaces that feel
                timeless, balanced, and built for long-term living.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#262638] hover:bg-[#1a1a26] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-sm"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. "THE MIRA LIFESTYLE" & OVERVIEW (MATCHING SCREENSHOT 1) */}
      {/* ======================================================== */}
      <section id="lifestyle" className="py-20 bg-white border-b border-[#eae7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative: Exact Content from Screenshot 1 */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#262638]">
                The Mira Lifestyle
              </h2>

              <p className="text-sm sm:text-base text-[#262638]/90 font-light leading-relaxed">
                A home that feels expansive in every way, movements feel natural, and living feels
                uncontained. A rare typology that brings the essence of a private home into the sky.
              </p>

              <p className="text-sm sm:text-base text-[#5e6074] font-light leading-relaxed">
                Minimal in form and refined in detail, the lobby and the well appointed terrace are
                elegant bookends to the residences — where privacy and restraint define luxury.
              </p>

              {/* Exact Features Listed in Screenshot 1 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 pt-6 border-t border-[#eae7e1] text-xs font-medium text-[#262638]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c58b5c]"></span>
                  <span>Landscaped Terrace Garden</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c58b5c]"></span>
                  <span>Rainwater harvesting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c58b5c]"></span>
                  <span>100% Power Backup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c58b5c]"></span>
                  <span>24×7 Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c58b5c]"></span>
                  <span>Car Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c58b5c]"></span>
                  <span>Private Elevator Foyer</span>
                </div>
              </div>
            </div>

            {/* Right: Goed Properties Project Snapshot Table */}
            <div className="lg:col-span-5 bg-[#f8f6f2] rounded-2xl border border-[#eae7e1] p-6 sm:p-8">
              <h3 className="font-serif-luxury text-xl text-[#262638] font-semibold mb-4 border-b border-[#eae7e1] pb-3 flex items-center justify-between">
                <span>Project Snapshot</span>
                <Info className="w-4 h-4 text-[#c58b5c]" />
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-[#eae7e1]">
                  <span className="text-[#5e6074]">Project Name</span>
                  <span className="text-[#262638] font-semibold">Arihant Spaces (Mira)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7e1]">
                  <span className="text-[#5e6074]">Developer</span>
                  <span className="text-[#262638] font-medium">Arihant Foundations & Housing Ltd</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7e1]">
                  <span className="text-[#5e6074]">Location</span>
                  <span className="text-[#262638] font-medium">D Block, Anna Nagar East, Chennai</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7e1]">
                  <span className="text-[#5e6074]">Scale & Structure</span>
                  <span className="text-[#262638] font-medium">Stilt + 5 Floors (5 Units Total)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7e1]">
                  <span className="text-[#5e6074]">Unit Type</span>
                  <span className="text-[#262638] font-medium">4 BHK Palatial Residences</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7e1]">
                  <span className="text-[#5e6074]">Super Built-up Area</span>
                  <span className="text-[#262638] font-medium">Approx. 3,308 Sq. Ft.</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7e1]">
                  <span className="text-[#5e6074]">Status</span>
                  <span className="text-[#c58b5c] font-semibold">Under Construction</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#5e6074]">Starting Price</span>
                  <span className="text-[#262638] font-bold text-sm">₹8.5 Cr* Onwards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. CONFIGURATION & PRICING TABLE (GOED PROPERTIES DETAILS) */}
      {/* ======================================================== */}
      <section id="pricing" className="py-20 bg-[#f8f6f2] border-b border-[#eae7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c58b5c] font-semibold block mb-2">
              Configuration & Pricing
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#262638]">
              Units & Investment Plans
            </h2>
            <p className="text-xs sm:text-sm text-[#5e6074] mt-2 font-light">
              Limited collection of 5 residences designed for families seeking generous proportions and absolute privacy.
            </p>
          </div>

          {/* Pricing Table with Dark Slate Header */}
          <div className="overflow-x-auto rounded-2xl border border-[#eae7e1] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#262638] text-white uppercase tracking-wider text-[11px] font-medium">
                <tr>
                  <th className="py-4 px-6">Type</th>
                  <th className="py-4 px-6">Super Built-up Area</th>
                  <th className="py-4 px-6">Configuration</th>
                  <th className="py-4 px-6">Car Parking</th>
                  <th className="py-4 px-6">Starting Price</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae7e1] text-[#262638]">
                <tr className="hover:bg-[#f8f6f2]/60 transition-colors">
                  <td className="py-5 px-6 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c58b5c]"></span>
                    4 BHK Luxury Palatial
                  </td>
                  <td className="py-5 px-6 font-mono font-medium">3,308 Sq. Ft.</td>
                  <td className="py-5 px-6">
                    <span className="block font-medium">4 Bed + 5 Bath + Living Salon</span>
                    <span className="text-[11px] text-[#5e6074]">
                      + Maid&apos;s Quarters & Private Foyer
                    </span>
                  </td>
                  <td className="py-5 px-6">3 Covered Bays (with EV socket)</td>
                  <td className="py-5 px-6">
                    <span className="text-base font-serif-luxury font-bold text-[#262638]">
                      ₹8.50 Cr*
                    </span>
                    <span className="text-[10px] text-[#5e6074] block">+ Taxes & Registration</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button
                      onClick={() => setPriceBreakupModalOpen(true)}
                      className="px-5 py-2 rounded-full bg-[#262638] hover:bg-[#1a1a26] text-white text-xs uppercase tracking-wider font-semibold transition-all"
                    >
                      Price Breakup
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5e6074] gap-2">
            <span>*Government charges, GST, registration, and club amenities applicable as per norms.</span>
            <span className="text-[#262638] font-medium">Pre-approved with leading financial institutions.</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. ARCHITECTURAL PLANS & BLUEPRINTS (TABBED) */}
      {/* ======================================================== */}
      <section id="plans" className="py-20 bg-white border-b border-[#eae7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c58b5c] font-semibold block mb-2">
              Plans & Blueprints
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#262638]">
              Spatial Layout & Architecture
            </h2>
          </div>

          {/* Plan Navigation Tabs (Pill Buttons) */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full bg-[#f8f6f2] border border-[#eae7e1] p-1 gap-1">
              <button
                onClick={() => setActivePlanTab("floor")}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  activePlanTab === "floor"
                    ? "bg-[#262638] text-white"
                    : "text-[#5e6074] hover:text-[#262638]"
                }`}
              >
                Typical 4 BHK Plan (3,308 Sq.Ft)
              </button>
              <button
                onClick={() => setActivePlanTab("master")}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  activePlanTab === "master"
                    ? "bg-[#262638] text-white"
                    : "text-[#5e6074] hover:text-[#262638]"
                }`}
              >
                Master Suite Zoning
              </button>
              <button
                onClick={() => setActivePlanTab("terrace")}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  activePlanTab === "terrace"
                    ? "bg-[#262638] text-white"
                    : "text-[#5e6074] hover:text-[#262638]"
                }`}
              >
                Rooftop Sky Terrace
              </button>
            </div>
          </div>

          {/* Floor Plan Display Card */}
          <div className="bg-[#f8f6f2] rounded-2xl border border-[#eae7e1] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Blueprint Diagram */}
              <div className="lg:col-span-8 bg-white rounded-xl border border-[#eae7e1] p-8 sm:p-12 relative flex items-center justify-center min-h-[400px]">
                {activePlanTab === "floor" && (
                  <div className="w-full max-w-lg border-2 border-dashed border-[#c58b5c]/40 rounded-xl p-6 text-center space-y-4">
                    <div className="flex justify-between text-[10px] text-[#c58b5c] uppercase tracking-widest font-mono font-semibold">
                      <span>EAST-FACING FOYER ENTRY</span>
                      <span>VASTU COMPLIANT</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-left text-xs">
                      <div className="border border-[#eae7e1] rounded-lg p-2.5 bg-[#f8f6f2]">
                        <span className="text-[10px] text-[#c58b5c] block font-semibold">SUITE 01</span>
                        <span className="font-semibold text-[#262638]">Master Suite</span>
                        <span className="text-[10px] text-[#5e6074] block">16&apos;0&quot; x 18&apos;6&quot;</span>
                      </div>
                      <div className="border border-[#eae7e1] rounded-lg p-2.5 bg-[#f8f6f2]">
                        <span className="text-[10px] text-[#c58b5c] block font-semibold">SUITE 02</span>
                        <span className="font-semibold text-[#262638]">Guest Suite</span>
                        <span className="text-[10px] text-[#5e6074] block">14&apos;0&quot; x 16&apos;0&quot;</span>
                      </div>
                      <div className="border border-[#eae7e1] rounded-lg p-2.5 bg-[#f8f6f2]">
                        <span className="text-[10px] text-[#c58b5c] block font-semibold">SUITE 03</span>
                        <span className="font-semibold text-[#262638]">Family Suite</span>
                        <span className="text-[10px] text-[#5e6074] block">13&apos;6&quot; x 15&apos;0&quot;</span>
                      </div>
                    </div>

                    <div className="border border-[#262638] rounded-lg p-5 bg-[#262638] text-white text-center">
                      <span className="text-xs uppercase tracking-widest text-[#d9a779] font-semibold block">
                        Grand Social Salon & Dining
                      </span>
                      <span className="text-sm font-serif-luxury">
                        38&apos;4&quot; x 19&apos;8&quot;
                      </span>
                      <span className="text-[11px] text-white/70 block mt-1">
                        Opens to Covered Viewing Sit-out Balcony
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-left text-xs">
                      <div className="border border-[#eae7e1] rounded-lg p-2.5 bg-[#f8f6f2]">
                        <span className="text-[10px] text-[#c58b5c] block font-semibold">SUITE 04</span>
                        <span className="font-semibold text-[#262638]">Children Suite</span>
                        <span className="text-[10px] text-[#5e6074] block">13&apos;0&quot; x 14&apos;0&quot;</span>
                      </div>
                      <div className="border border-[#eae7e1] rounded-lg p-2.5 bg-[#f8f6f2]">
                        <span className="text-[10px] text-[#c58b5c] block font-semibold">CULINARY</span>
                        <span className="font-semibold text-[#262638]">Chef&apos;s Kitchen</span>
                        <span className="text-[10px] text-[#5e6074] block">14&apos;6&quot; x 12&apos;0&quot;</span>
                      </div>
                      <div className="border border-[#eae7e1] rounded-lg p-2.5 bg-[#f8f6f2]">
                        <span className="text-[10px] text-[#c58b5c] block font-semibold">SERVICE</span>
                        <span className="font-semibold text-[#262638]">Maid + WC</span>
                        <span className="text-[10px] text-[#5e6074] block">9&apos;0&quot; x 8&apos;0&quot;</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#262638] font-mono tracking-widest font-semibold">
                      ✦ PRIVATE ELEVATOR LOBBY • EXCLUSIVE FLOOR KEYCARD ACCESS ✦
                    </div>
                  </div>
                )}

                {activePlanTab === "master" && (
                  <div className="text-center p-8 space-y-3">
                    <Maximize2 className="w-12 h-12 text-[#c58b5c] mx-auto" />
                    <h4 className="font-serif-luxury text-xl text-[#262638]">
                      Master Suite Spatial Zoning
                    </h4>
                    <p className="text-xs text-[#5e6074] max-w-md mx-auto">
                      Includes private walk-in dressing lounge, 5-fixture bath with rain shower & soaking tub,
                      insulated wooden flooring, and floor-to-ceiling glass doors opening to the morning terrace.
                    </p>
                  </div>
                )}

                {activePlanTab === "terrace" && (
                  <div className="text-center p-8 space-y-3">
                    <Sparkles className="w-12 h-12 text-[#c58b5c] mx-auto" />
                    <h4 className="font-serif-luxury text-xl text-[#262638]">
                      Rooftop Sky Lounge Layout
                    </h4>
                    <p className="text-xs text-[#5e6074] max-w-md mx-auto">
                      Shared exclusively by the 5 families: landscaped zen garden deck, barbecue pavilion,
                      shaded meditation cabana, and panoramic city lights views over Anna Nagar.
                    </p>
                  </div>
                )}
              </div>

              {/* Plan Specs Column */}
              <div className="lg:col-span-4 space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c58b5c] font-semibold">
                    Spatial Specifications
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-[#262638] mt-1">
                    3,308 Sq. Ft. Palatial Layout
                  </h3>
                  <p className="text-xs text-[#5e6074] mt-2 font-light">
                    Every residence is an independent sanctuary covering the entire floor plate with 360° light.
                  </p>
                </div>

                <div className="space-y-2.5 border-t border-b border-[#eae7e1] py-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#5e6074]">Super Built-up Area:</span>
                    <span className="text-[#262638] font-semibold">3,308 Sq. Ft.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e6074]">Configuration:</span>
                    <span className="text-[#262638] font-semibold">4 BHK + Maid&apos;s Quarters</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e6074]">Balconies:</span>
                    <span className="text-[#262638] font-semibold">2 Private Covered Sit-outs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e6074]">Bathrooms:</span>
                    <span className="text-[#262638] font-semibold">5 Toilets (4 Ensuite + 1 Staff)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e6074]">Stilt Parking:</span>
                    <span className="text-[#262638] font-semibold">3 Covered Bays / Unit</span>
                  </div>
                </div>

                <button
                  onClick={() => setBrochureModalOpen(true)}
                  className="w-full py-3.5 rounded-full bg-[#262638] hover:bg-[#1a1a26] text-white text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Blueprint PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. VISUAL GALLERY (MATCHING SCREENSHOT 3) */}
      {/* ======================================================== */}
      <section id="gallery" className="py-20 bg-[#f8f6f2] border-b border-[#eae7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c58b5c] font-semibold block mb-2">
                Visual Impressions
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#262638]">
                Project Gallery & Elevation
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => setGalleryFilter("all")}
                className={`px-5 py-2 rounded-full uppercase tracking-wider transition-all ${
                  galleryFilter === "all"
                    ? "bg-[#262638] text-white font-semibold"
                    : "bg-white text-[#5e6074] hover:text-[#262638] border border-[#eae7e1]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setGalleryFilter("exterior")}
                className={`px-5 py-2 rounded-full uppercase tracking-wider transition-all ${
                  galleryFilter === "exterior"
                    ? "bg-[#262638] text-white font-semibold"
                    : "bg-white text-[#5e6074] hover:text-[#262638] border border-[#eae7e1]"
                }`}
              >
                Laterite Façade
              </button>
              <button
                onClick={() => setGalleryFilter("interior")}
                className={`px-5 py-2 rounded-full uppercase tracking-wider transition-all ${
                  galleryFilter === "interior"
                    ? "bg-[#262638] text-white font-semibold"
                    : "bg-white text-[#5e6074] hover:text-[#262638] border border-[#eae7e1]"
                }`}
              >
                Interiors
              </button>
              <button
                onClick={() => setGalleryFilter("amenities")}
                className={`px-5 py-2 rounded-full uppercase tracking-wider transition-all ${
                  galleryFilter === "amenities"
                    ? "bg-[#262638] text-white font-semibold"
                    : "bg-white text-[#5e6074] hover:text-[#262638] border border-[#eae7e1]"
                }`}
              >
                Terrace Deck
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white border border-[#eae7e1] aspect-[4/3] shadow-sm"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#d9a779] block mb-1 font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-serif-luxury text-base text-white">{item.title}</h4>
                  <p className="text-[11px] text-white/80 font-light mt-0.5 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. NEIGHBOURHOOD & CONNECTIVITY (ANNA NAGAR EAST) */}
      {/* ======================================================== */}
      <section id="neighbourhood" className="py-20 bg-white border-b border-[#eae7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Distances List */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#c58b5c] font-semibold block mb-2">
                  Neighbourhood & Connectivity
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#262638]">
                  D Block, Anna Nagar East
                </h2>
                <p className="text-xs sm:text-sm text-[#5e6074] mt-2 font-light">
                  A revered, quiet residential boulevard with wide tree-lined avenues and immediate connectivity to
                  transit hubs, premier academic institutions, and healthcare centers.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#f8f6f2] border border-[#eae7e1] flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[#262638] font-medium">
                    <MapPin className="w-4 h-4 text-[#c58b5c]" />
                    Anna Nagar East Metro Station
                  </span>
                  <span className="text-[#262638] font-mono font-semibold">800 M | 2 Mins</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f8f6f2] border border-[#eae7e1] flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[#262638] font-medium">
                    <MapPin className="w-4 h-4 text-[#c58b5c]" />
                    Anna Nagar Tower Park & Shanthi Colony
                  </span>
                  <span className="text-[#262638] font-mono font-semibold">1.2 Km | 3 Mins</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f8f6f2] border border-[#eae7e1] flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[#262638] font-medium">
                    <MapPin className="w-4 h-4 text-[#c58b5c]" />
                    Chinmaya Vidyalaya & CPS Global School
                  </span>
                  <span className="text-[#262638] font-mono font-semibold">1.0 Km | 4 Mins</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f8f6f2] border border-[#eae7e1] flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[#262638] font-medium">
                    <MapPin className="w-4 h-4 text-[#c58b5c]" />
                    Billroth Hospital & MGM Healthcare
                  </span>
                  <span className="text-[#262638] font-mono font-semibold">1.1 Km | 4 Mins</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f8f6f2] border border-[#eae7e1] flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[#262638] font-medium">
                    <MapPin className="w-4 h-4 text-[#c58b5c]" />
                    Poonamallee High Road & Kilpauk
                  </span>
                  <span className="text-[#262638] font-mono font-semibold">1.8 Km | 5 Mins</span>
                </div>
              </div>
            </div>

            {/* Location Visual Card */}
            <div className="lg:col-span-6 bg-[#f8f6f2] rounded-2xl border border-[#eae7e1] p-6 sm:p-8">
              <span className="text-[11px] uppercase tracking-wider text-[#c58b5c] font-semibold block mb-2">
                Geographic Coordinates
              </span>
              <h3 className="font-serif-luxury text-2xl text-[#262638] mb-2">
                Arihant Spaces (Mira) Site
              </h3>
              <p className="text-xs text-[#5e6074] mb-6">
                D Block, 3rd Cross Street, Anna Nagar East, Chennai – 600102
              </p>

              <div className="aspect-[16/10] bg-white rounded-xl border border-[#eae7e1] relative overflow-hidden flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#262638] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <MapPin className="w-6 h-6 text-[#d9a779]" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-lg text-[#262638] font-semibold">
                      Arihant Spaces (Mira)
                    </h4>
                    <span className="text-xs text-[#c58b5c] font-medium">D Block, Anna Nagar East</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-[#5e6074]">Landmark: Near Anna Nagar East Post Office</span>
                <a
                  href="https://maps.google.com/?q=Anna+Nagar+East+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#262638] font-semibold hover:underline flex items-center gap-1"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. EXACT FOOTER FROM SCREENSHOT 2 (DEEP SLATE NAVY #242533) */}
      {/* ======================================================== */}
      <footer id="contact" className="bg-[#242533] text-[#9fa1b4] pt-16 pb-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Logo & Say Hello */}
            <div className="space-y-6">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-3xl tracking-tight text-white">
                    Arihant
                  </span>
                  <span className="text-xs text-white">®</span>
                </div>
                <span className="text-xs lowercase tracking-wider text-[#9fa1b4] block mt-0.5">
                  memorable spaces
                </span>
              </div>

              <div className="space-y-2">
                <h5 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
                  SAY HELLO
                </h5>
                <p className="text-xs text-[#9fa1b4]">
                  TEL: <a href="tel:+914442244444" className="text-white hover:underline">+91 44 4224 4444</a>
                </p>
                <p className="text-xs text-[#9fa1b4]">
                  MOBILE: <a href="tel:+917601000444" className="text-white hover:underline">+91 7601 000 444</a>
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
                  FOLLOW US
                </h5>
                <div className="flex gap-2">
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-xs">in</span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-xs">ig</span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-xs">yt</span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-xs">X</span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-xs">fb</span>
                </div>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="space-y-4">
              <h5 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
                NAVIGATION
              </h5>
              <div className="grid grid-cols-2 gap-y-2.5 text-xs text-[#9fa1b4]">
                <a href="#lifestyle" className="hover:text-white transition-colors">ACTIVE PROJECTS</a>
                <a href="#" className="hover:text-white transition-colors">ABOUT</a>
                <a href="#" className="hover:text-white transition-colors">DELIVERED PROJECTS</a>
                <a href="#" className="hover:text-white transition-colors">INVESTORS</a>
                <a href="#" className="hover:text-white transition-colors">REFER A FRIEND</a>
                <a href="#" className="hover:text-white transition-colors">BLOG</a>
                <a href="#" className="hover:text-white transition-colors">CAREERS</a>
              </div>
            </div>

            {/* Col 3: Write to Us & Come See Us */}
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h5 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
                  WRITE TO US
                </h5>
                <p className="text-xs text-[#9fa1b4]">GENERAL ENQUIRIES:</p>
                <a href="mailto:INFO@ARIHANTS.CO.IN" className="text-white hover:underline block font-mono text-[11px]">
                  INFO@ARIHANTS.CO.IN
                </a>
                <p className="text-xs text-[#9fa1b4] pt-1">SALES ENQUIRIES:</p>
                <a href="mailto:SALES@ARIHANTS.CO.IN" className="text-white hover:underline block font-mono text-[11px]">
                  SALES@ARIHANTS.CO.IN
                </a>
              </div>

              <div className="space-y-1.5">
                <h5 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
                  COME SEE US
                </h5>
                <p className="text-xs text-[#9fa1b4] leading-relaxed">
                  NEW #3 OLD #25, GANAPATHY COLONY 3RD LANE, OFF CENOTAPH ROAD TEYNAMPET, CHENNAI – 600 018
                </p>
                <p className="text-[11px] text-[#d9a779] pt-1">
                  Site: D Block, 3rd Cross Street, Anna Nagar East
                </p>
              </div>
            </div>

            {/* Col 4: Email Newsletter Subscribe (Screenshot 2) */}
            <div className="space-y-4">
              <h5 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">
                EMAIL
              </h5>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 text-xs focus:outline-none focus:border-white"
                />
                <button
                  type="button"
                  onClick={() => alert("Thank you for subscribing!")}
                  className="w-full py-3 rounded-full bg-[#5d5f72] hover:bg-[#6c6e83] text-white uppercase tracking-[0.2em] text-xs font-semibold transition-all mt-2"
                >
                  SUBSCRIBE NOW
                </button>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] text-white/50 block">CIN: L70101TN1992PLC022299</span>
                <span className="text-[10px] text-white/50 block">Marketing Partner: Goed Properties & Promoters</span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-3">
            <span>Copyright 1985 - 2026 Arihant | All Rights Reserved - POWERED BY HYPHEN DESIGN</span>
            <span>PRIVACY & DISCLAIMER</span>
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 11. MOBILE FLOATING ACTION BAR */}
      {/* ======================================================== */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#eae7e1] p-2 flex items-center justify-around gap-2 shadow-2xl">
        <a
          href="tel:+914442244444"
          className="flex-1 py-2.5 rounded-full bg-[#f8f6f2] text-[#262638] text-xs font-semibold uppercase text-center flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#c58b5c]" />
          Call
        </a>
        <a
          href="https://wa.me/917601000444"
          className="flex-1 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase text-center flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex-1 py-2.5 rounded-full bg-[#262638] text-white text-xs font-semibold uppercase text-center"
        >
          Enquire
        </a>
      </div>

      {/* ======================================================== */}
      {/* 12. INTERACTIVE MODALS */}
      {/* ======================================================== */}
      {brochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl border border-[#eae7e1] max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setBrochureModalOpen(false)}
              className="absolute top-4 right-4 text-[#5e6074] hover:text-[#262638]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <Download className="w-8 h-8 text-[#262638] mx-auto mb-2" />
              <h3 className="font-serif-luxury text-xl text-[#262638] font-semibold">Download Master Brochure</h3>
              <p className="text-xs text-[#5e6074] mt-1">
                Arihant Spaces (Mira) — 4 BHK Boutique Residences (3,308 Sq.Ft)
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! The brochure download has commenced.");
                setBrochureModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-[#262638] uppercase mb-1 font-medium">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-lg bg-[#f8f6f2] border border-[#eae7e1] text-[#262638]"
                />
              </div>
              <div>
                <label className="block text-[#262638] uppercase mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile Number"
                  className="w-full px-3 py-2 rounded-lg bg-[#f8f6f2] border border-[#eae7e1] text-[#262638]"
                />
              </div>
              <div>
                <label className="block text-[#262638] uppercase mb-1 font-medium">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#f8f6f2] border border-[#eae7e1] text-[#262638]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#262638] hover:bg-[#1a1a26] text-white font-semibold uppercase tracking-wider text-xs mt-3"
              >
                Instant Download PDF
              </button>
            </form>
          </div>
        </div>
      )}

      {priceBreakupModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl border border-[#eae7e1] max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setPriceBreakupModalOpen(false)}
              className="absolute top-4 right-4 text-[#5e6074] hover:text-[#262638]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <FileText className="w-8 h-8 text-[#262638] mx-auto mb-2" />
              <h3 className="font-serif-luxury text-xl text-[#262638] font-semibold">Detailed Cost Sheet</h3>
              <p className="text-xs text-[#5e6074] mt-1">
                Payment schedule, base price, car park charges, and government taxes breakdown.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! The cost sheet has been sent to your email and phone.");
                setPriceBreakupModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-[#262638] uppercase mb-1 font-medium">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-lg bg-[#f8f6f2] border border-[#eae7e1] text-[#262638]"
                />
              </div>
              <div>
                <label className="block text-[#262638] uppercase mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile Number"
                  className="w-full px-3 py-2 rounded-lg bg-[#f8f6f2] border border-[#eae7e1] text-[#262638]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#262638] hover:bg-[#1a1a26] text-white font-semibold uppercase tracking-wider text-xs mt-3"
              >
                Send Detailed Cost Sheet
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
