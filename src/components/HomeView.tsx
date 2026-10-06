import React from 'react';
import { ViewTab } from '../types';
import { getWhatsAppUrl, WHATSAPP_NUMBER_DISPLAY } from '../utils/whatsapp';
import { getEmailMailtoUrl, OFFICIAL_EMAIL } from '../utils/email';
import heroIndustrialImage from '../assets/hero-industrial-facility.jpg';

interface HomeViewProps {
  setActiveTab: (tab: ViewTab) => void;
  setSelectedCategory?: (cat: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  setSelectedCategory,
}) => {
  const whatsappUrl = getWhatsAppUrl();
  const emailMailto = getEmailMailtoUrl();

  const handleCategoryClick = (categoryName: string) => {
    if (setSelectedCategory) {
      setSelectedCategory(categoryName);
    }
    setActiveTab('products');
  };

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      {/* 1. HERO SECTION UPGRADE */}
      <section className="relative bg-[#081c34] text-white overflow-hidden min-h-[580px] lg:min-h-[620px] flex items-center">
        {/* Subtle Industrial Background Overlay & Technical Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#081c34] via-[#081c34]/98 to-[#0b2444]"></div>
          {/* Technical Lines Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>
          {/* Subtle Glowing Radial Accents */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#eebd97]/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded text-xs font-mono text-[#ffdcc3] uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">public</span>
              <span>GLOBAL INDUSTRIAL MATERIAL SOURCING & SUPPLY</span>
            </div>

            <h1 className="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.15]">
              Industrial Materials.<br />
              Global Sourcing.<br />
              Reliable Supply.
            </h1>

            <div className="space-y-2 text-white/85 text-base md:text-lg max-w-2xl font-body leading-relaxed">
              <p>
                PRT Global Supply provides industrial raw material sourcing and B2B supply support for manufacturers, processors, converters, distributors and industrial buyers.
              </p>
              <p className="text-sm md:text-base text-white/75">
                Our product portfolio includes EVA resin, masterbatch solutions, plastic additives, filler materials and paper products.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
              <button
                onClick={() => setActiveTab('products')}
                className="bg-[#eebd97] text-[#081c34] hover:bg-[#ffdcc3] font-headline font-bold text-xs md:text-sm uppercase px-6 py-3.5 rounded-lg transition-all shadow-md flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>VIEW PRODUCTS</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-headline font-bold text-xs md:text-sm uppercase px-6 py-3.5 rounded-lg transition-all backdrop-blur-sm flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>CONTACT US</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-headline font-bold text-xs md:text-sm uppercase px-5 py-3.5 rounded-lg transition-all shadow-md flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
                </svg>
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Polymer Industrial Materials & Facility Hero Image */}
          <div className="lg:col-span-5 xl:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#081c34] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1.15/1] min-h-[280px]">
              <img
                src={heroIndustrialImage}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('hero-industrial-facility.jpg')) {
                    target.src = '/hero-industrial-facility.jpg';
                  } else if (!target.src.includes('hero-industrial-facility.png')) {
                    target.src = '/hero-industrial-facility.png';
                  } else if (!target.src.includes('prt-image.png')) {
                    target.src = '/prt-image.png';
                  }
                }}
                alt="PRT Global Supply polymer raw materials, warehouse logistics, and industrial supply facility"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Dark Navy Left-Edge Overlay Gradient for seamless integration with dark background */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#081c34]/80 via-[#081c34]/30 to-transparent pointer-events-none"></div>
              {/* Subtle Dark Navy Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c34]/90 via-transparent to-transparent pointer-events-none opacity-80"></div>

              {/* Floating B2B Direct Desk Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#081c34]/85 backdrop-blur-md border border-white/20 rounded-xl p-3.5 text-white shadow-xl space-y-2 z-10">
                <div className="flex items-center justify-between border-b border-white/15 pb-2">
                  <span className="text-[10px] font-headline uppercase font-bold text-[#ffdcc3] tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    GLOBAL INDUSTRIAL MATERIAL SUPPLY
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white/70">PRT GLOBAL</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-white/60 block uppercase font-mono">WHATSAPP DESK</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-[#25D366] hover:underline block truncate"
                    >
                      {WHATSAPP_NUMBER_DISPLAY}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/60 block uppercase font-mono">OFFICIAL EMAIL</span>
                    <a
                      href={emailMailto}
                      className="font-mono font-bold text-[#ffdcc3] hover:underline block truncate"
                    >
                      {OFFICIAL_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY PRT GLOBAL SUPPLY (6 TRUST CARDS) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-wider">
            WHY PRT GLOBAL SUPPLY
          </span>
          <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-[#081c34]">
            A Practical Approach to Industrial Supply
          </h2>
          <p className="text-sm md:text-base text-[#44474d] font-body leading-relaxed">
            We focus on clear product information, sourcing coordination and responsive communication to support the material requirements of B2B customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 01 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs hover:shadow-md hover:border-[#081c34]/40 transition-all duration-200 hover:-translate-y-1 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                  01
                </span>
                <span className="material-symbols-outlined text-[#476082] text-2xl select-none">
                  factory
                </span>
              </div>
              <h3 className="font-headline font-bold text-base text-[#081c34] leading-snug">
                INDUSTRIAL MATERIAL FOCUS
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                Focused product categories covering EVA resin, masterbatch, plastic additives, filler materials and paper products.
              </p>
            </div>
          </div>

          {/* CARD 02 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs hover:shadow-md hover:border-[#081c34]/40 transition-all duration-200 hover:-translate-y-1 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                  02
                </span>
                <span className="material-symbols-outlined text-[#476082] text-2xl select-none">
                  manage_search
                </span>
              </div>
              <h3 className="font-headline font-bold text-base text-[#081c34] leading-snug">
                SOURCING SUPPORT
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                Support in identifying suitable product and supply options based on customer requirements.
              </p>
            </div>
          </div>

          {/* CARD 03 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs hover:shadow-md hover:border-[#081c34]/40 transition-all duration-200 hover:-translate-y-1 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                  03
                </span>
                <span className="material-symbols-outlined text-[#476082] text-2xl select-none">
                  description
                </span>
              </div>
              <h3 className="font-headline font-bold text-base text-[#081c34] leading-snug">
                CLEAR PRODUCT INFORMATION
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                Clear information about products, applications, specifications and available documentation where applicable.
              </p>
            </div>
          </div>

          {/* CARD 04 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs hover:shadow-md hover:border-[#081c34]/40 transition-all duration-200 hover:-translate-y-1 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                  04
                </span>
                <span className="material-symbols-outlined text-[#476082] text-2xl select-none">
                  forum
                </span>
              </div>
              <h3 className="font-headline font-bold text-base text-[#081c34] leading-snug">
                DIRECT B2B COMMUNICATION
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                Customers can connect directly with our team through WhatsApp, email and phone.
              </p>
            </div>
          </div>

          {/* CARD 05 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs hover:shadow-md hover:border-[#081c34]/40 transition-all duration-200 hover:-translate-y-1 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                  05
                </span>
                <span className="material-symbols-outlined text-[#476082] text-2xl select-none">
                  support_agent
                </span>
              </div>
              <h3 className="font-headline font-bold text-base text-[#081c34] leading-snug">
                RESPONSIVE BUSINESS SUPPORT
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                We focus on timely communication and practical support throughout the sourcing discussion.
              </p>
            </div>
          </div>

          {/* CARD 06 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs hover:shadow-md hover:border-[#081c34]/40 transition-all duration-200 hover:-translate-y-1 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                  06
                </span>
                <span className="material-symbols-outlined text-[#476082] text-2xl select-none">
                  business
                </span>
              </div>
              <h3 className="font-headline font-bold text-base text-[#081c34] leading-snug">
                B2B ORIENTED APPROACH
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                Our website and product portfolio are designed for manufacturers, processors, converters, distributors and industrial buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE SUPPLY (PRODUCT CATEGORIES) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-wider">
            WHAT WE SUPPLY
          </span>
          <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-[#081c34]">
            Industrial Material Categories
          </h2>
          <p className="text-sm text-[#44474d] font-body leading-relaxed">
            Focused product categories for manufacturing, processing and packaging applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category 1 */}
          <div className="bg-white p-7 rounded-xl border border-[#c4c6ce] shadow-2xs hover:border-[#081c34] transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#081c34] text-[#ffdcc3] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">science</span>
              </div>
              <h3 className="font-headline font-extrabold text-lg text-[#081c34]">
                EVA & Polymer Resins
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                EVA resin and copolymer materials for industrial processing, compounding, and footwear applications.
              </p>
            </div>
            <div>
              <button
                onClick={() => handleCategoryClick('EVA Resin')}
                className="text-xs font-headline font-bold uppercase text-[#081c34] hover:text-[#476082] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>EXPLORE PRODUCTS →</span>
              </button>
            </div>
          </div>

          {/* Category 2 */}
          <div className="bg-white p-7 rounded-xl border border-[#c4c6ce] shadow-2xs hover:border-[#081c34] transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#081c34] text-[#ffdcc3] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">palette</span>
              </div>
              <h3 className="font-headline font-extrabold text-lg text-[#081c34]">
                Masterbatch Solutions
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                Color, black, white, filler, functional and custom additive masterbatch solutions.
              </p>
            </div>
            <div>
              <button
                onClick={() => handleCategoryClick('Color Masterbatch')}
                className="text-xs font-headline font-bold uppercase text-[#081c34] hover:text-[#476082] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>EXPLORE PRODUCTS →</span>
              </button>
            </div>
          </div>

          {/* Category 3 */}
          <div className="bg-white p-7 rounded-xl border border-[#c4c6ce] shadow-2xs hover:border-[#081c34] transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#081c34] text-[#ffdcc3] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">biotech</span>
              </div>
              <h3 className="font-headline font-extrabold text-lg text-[#081c34]">
                Plastic Additives
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                UV stabilizers, slip agents, anti-block, anti-static, and performance additive solutions.
              </p>
            </div>
            <div>
              <button
                onClick={() => handleCategoryClick('Functional & Additive Masterbatch')}
                className="text-xs font-headline font-bold uppercase text-[#081c34] hover:text-[#476082] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>EXPLORE PRODUCTS →</span>
              </button>
            </div>
          </div>

          {/* Category 4 */}
          <div className="bg-white p-7 rounded-xl border border-[#c4c6ce] shadow-2xs hover:border-[#081c34] transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#081c34] text-[#ffdcc3] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">layers</span>
              </div>
              <h3 className="font-headline font-extrabold text-lg text-[#081c34]">
                Filler Masterbatch
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                High-calcium carbonate (CaCO3) filler masterbatches for film, extrusion, and moulding.
              </p>
            </div>
            <div>
              <button
                onClick={() => handleCategoryClick('Filler Masterbatch')}
                className="text-xs font-headline font-bold uppercase text-[#081c34] hover:text-[#476082] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>EXPLORE PRODUCTS →</span>
              </button>
            </div>
          </div>

          {/* Category 5 */}
          <div className="bg-white p-7 rounded-xl border border-[#c4c6ce] shadow-2xs hover:border-[#081c34] transition-all flex flex-col justify-between space-y-4 md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#081c34] text-[#ffdcc3] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">description</span>
              </div>
              <h3 className="font-headline font-extrabold text-lg text-[#081c34]">
                Paper Products
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                Industrial kraft paper rolls, corrugated paperboard, and packaging paper materials.
              </p>
            </div>
            <div>
              <button
                onClick={() => handleCategoryClick('Paper Products')}
                className="text-xs font-headline font-bold uppercase text-[#081c34] hover:text-[#476082] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>EXPLORE PRODUCTS →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="bg-[#081c34] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-headline font-bold uppercase text-[#ffdcc3] tracking-wider">
              TARGET SECTORS
            </span>
            <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-white">
              Industries We Serve
            </h2>
            <p className="text-sm text-white/80 font-body leading-relaxed">
              Supplying industrial raw materials to specialized processing and converting sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-colors flex flex-col justify-start min-w-0 overflow-hidden">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#ffdcc3] shrink-0">
                <span className="material-symbols-outlined text-2xl select-none">precision_manufacturing</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white leading-snug break-words">Plastic Processing</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed break-words">Compounding, masterbatch blending, and resin processing.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-colors flex flex-col justify-start min-w-0 overflow-hidden">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#ffdcc3] shrink-0">
                <span className="material-symbols-outlined text-2xl select-none">inventory_2</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white leading-snug break-words">Packaging</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed break-words">Flexible packaging, pouches, films, and industrial wrapping.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-colors flex flex-col justify-start min-w-0 overflow-hidden">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#ffdcc3] shrink-0">
                <span className="material-symbols-outlined text-2xl select-none">view_in_ar</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white leading-snug break-words">Injection Moulding</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed break-words">Industrial components, closures, household items, and technical moldings.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-colors flex flex-col justify-start min-w-0 overflow-hidden">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#ffdcc3] shrink-0">
                <span className="material-symbols-outlined text-2xl select-none">oil_barrel</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white leading-snug break-words">Blow Moulding</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed break-words">Hollow containers, jerrycans, bottles, and industrial drums.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-colors flex flex-col justify-start min-w-0 overflow-hidden">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#ffdcc3] shrink-0">
                <span className="material-symbols-outlined text-2xl select-none">layers</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white leading-snug break-words">Film Manufacturing</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed break-words">Blown film, agricultural film, shrink films, and liners.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-colors flex flex-col justify-start min-w-0 overflow-hidden">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#ffdcc3] shrink-0">
                <span className="material-symbols-outlined text-2xl select-none">footprint</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white leading-snug break-words">Footwear</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed break-words">Cross-linked EVA foam, midsoles, flip-flops, and shoe soles.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-colors flex flex-col justify-start min-w-0 overflow-hidden">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#ffdcc3] shrink-0">
                <span className="material-symbols-outlined text-2xl select-none">power</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white leading-snug break-words">Cable Manufacturing</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed break-words">Wire insulation, jacketing compounds, and cable fillers.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-colors flex flex-col justify-start min-w-0 overflow-hidden">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#ffdcc3] shrink-0">
                <span className="material-symbols-outlined text-2xl select-none">description</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white leading-snug break-words">Paper & Corrugated Packaging</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed break-words">Kraft paper bags, corrugated boxes, cartons, and paper converting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOURCING PROCESS / HOW WE WORK */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-wider">
            SOURCING PROCESS
          </span>
          <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-[#081c34]">
            How We Work
          </h2>
          <p className="text-sm text-[#44474d] font-body leading-relaxed">
            A simple 4-step sourcing and supply coordination process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                01
              </span>
              <span className="material-symbols-outlined text-[#476082] text-xl">manage_search</span>
            </div>
            <h3 className="font-headline font-bold text-base text-[#081c34]">
              Understand Your Requirement
            </h3>
            <p className="text-xs text-[#44474d] font-body leading-relaxed">
              Identify exact material specifications, grades, and application parameters.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                02
              </span>
              <span className="material-symbols-outlined text-[#476082] text-xl">fact_check</span>
            </div>
            <h3 className="font-headline font-bold text-base text-[#081c34]">
              Identify Suitable Supply Options
            </h3>
            <p className="text-xs text-[#44474d] font-body leading-relaxed">
              Evaluate reliable supplier channels and match suitable material availability.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                03
              </span>
              <span className="material-symbols-outlined text-[#476082] text-xl">handshake</span>
            </div>
            <h3 className="font-headline font-bold text-base text-[#081c34]">
              Coordinate Product & Commercial Details
            </h3>
            <p className="text-xs text-[#44474d] font-body leading-relaxed">
              Review technical specifications, commercial terms, and delivery logistics.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-xl border border-[#c4c6ce] shadow-2xs space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#081c34] bg-[#ffdcc3] px-2.5 py-1 rounded uppercase">
                04
              </span>
              <span className="material-symbols-outlined text-[#476082] text-xl">local_shipping</span>
            </div>
            <h3 className="font-headline font-bold text-base text-[#081c34]">
              Support the Supply Process
            </h3>
            <p className="text-xs text-[#44474d] font-body leading-relaxed">
              Provide ongoing communication and fulfillment assistance throughout delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FINAL CONTACT CALL TO ACTION */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="bg-[#081c34] text-white rounded-2xl p-8 md:p-12 border border-[#ffdcc3]/20 shadow-xl text-center space-y-6">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-white">
              Looking for the Right Industrial Material?
            </h2>
            <p className="text-sm md:text-base text-white/85 font-body leading-relaxed">
              Share your material requirement with our team and we will help you identify suitable product and sourcing options.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="bg-[#eebd97] hover:bg-[#ffdcc3] text-[#081c34] font-headline font-bold text-xs md:text-sm uppercase px-8 py-3.5 rounded-lg transition-all shadow-md flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">support_agent</span>
              <span>CONTACT PRT</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-headline font-bold text-xs md:text-sm uppercase px-8 py-3.5 rounded-lg transition-all shadow-md flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
              </svg>
              <span>WHATSAPP US</span>
            </a>

            <a
              href={emailMailto}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-headline font-bold text-xs md:text-sm uppercase px-8 py-3.5 rounded-lg transition-all backdrop-blur-sm flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              <span>EMAIL US</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
