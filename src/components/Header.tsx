import React, { useState } from 'react';
import { ViewTab } from '../types';
import { getWhatsAppUrl, WHATSAPP_NUMBER_DISPLAY } from '../utils/whatsapp';
import { OFFICIAL_EMAIL, getEmailMailtoUrl } from '../utils/email';

interface HeaderProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab !== 'products') {
      setActiveTab('products');
    }
  };

  const whatsappUrl = getWhatsAppUrl();
  const emailMailto = getEmailMailtoUrl();

  return (
    <>
      <header className="bg-[#081c34] text-white sticky top-0 z-50 h-[72px] border-b border-[#74777e]/30 shadow-md transition-all">
        <div className="max-w-[1440px] mx-auto h-full px-4 md:px-6 flex justify-between items-center">
          {/* Left: Hamburger & Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/90 hover:text-[#eebd97] transition-colors p-1"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2.5 cursor-pointer group select-none"
            >
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-9 md:w-9 shrink-0 transition-transform duration-200 group-hover:scale-105"
                aria-label="PRT Global Supply Logo"
              >
                {/* Globe Sphere */}
                <circle cx="56" cy="62" r="36" stroke="#ffdcc3" strokeWidth="4.5" strokeLinecap="round"/>
                
                {/* Longitude and Latitude Grid */}
                <ellipse cx="56" cy="62" rx="36" ry="14" stroke="#ffdcc3" strokeWidth="3.5" strokeDasharray="4 2"/>
                <ellipse cx="56" cy="62" rx="16" ry="36" stroke="#ffdcc3" strokeWidth="3.5"/>
                <line x1="56" y1="26" x2="56" y2="98" stroke="#ffdcc3" strokeWidth="3.5"/>
                <line x1="20" y1="62" x2="92" y2="62" stroke="#ffdcc3" strokeWidth="3.5"/>
                
                {/* Dynamic Sweeping Orbiting Arrow */}
                <path d="M 12 82 C 16 38, 60 16, 96 28 C 108 32, 112 44, 100 56 C 84 72, 44 80, 24 74" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" fill="none"/>
                
                {/* Arrowhead */}
                <path d="M 90 18 L 108 30 L 88 38 Z" fill="#ffffff"/>
              </svg>
              <span className="font-headline font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight text-white group-hover:text-[#ffdcc3] transition-colors whitespace-nowrap">
                PRT Global Supply
              </span>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-headline font-bold text-xs lg:text-sm tracking-wider uppercase">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors py-1 ${
                activeTab === 'home'
                  ? 'text-[#ffdcc3] border-b-2 border-[#ffdcc3]'
                  : 'text-white/90 hover:text-[#ffdcc3]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`transition-colors py-1 ${
                activeTab === 'products'
                  ? 'text-[#ffdcc3] border-b-2 border-[#ffdcc3]'
                  : 'text-white/90 hover:text-[#ffdcc3]'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`transition-colors py-1 ${
                activeTab === 'about'
                  ? 'text-[#ffdcc3] border-b-2 border-[#ffdcc3]'
                  : 'text-white/90 hover:text-[#ffdcc3]'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('sourcing')}
              className={`transition-colors py-1 ${
                activeTab === 'sourcing'
                  ? 'text-[#ffdcc3] border-b-2 border-[#ffdcc3]'
                  : 'text-white/90 hover:text-[#ffdcc3]'
              }`}
            >
              Sourcing
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`transition-colors py-1 ${
                activeTab === 'contact'
                  ? 'text-[#ffdcc3] border-b-2 border-[#ffdcc3]'
                  : 'text-white/90 hover:text-[#ffdcc3]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Header WhatsApp Contact Option */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact PRT Global Supply on WhatsApp"
              className="hidden lg:flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-white px-2.5 py-1.5 rounded transition-all group"
            >
              <svg className="w-4 h-4 fill-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-headline font-bold text-[#25D366] uppercase leading-none">WhatsApp</span>
                <span className="text-xs font-mono font-bold text-white/90 leading-tight">{WHATSAPP_NUMBER_DISPLAY}</span>
              </div>
            </a>

            {/* Header Email Option */}
            <a
              href={emailMailto}
              aria-label="Email PRT Global Supply"
              className="hidden sm:flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-2.5 py-1.5 rounded transition-all group"
            >
              <span className="material-symbols-outlined text-[#ffdcc3] text-base group-hover:scale-110 transition-transform">
                mail
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-headline font-bold text-[#ffdcc3] uppercase leading-none">Email Us</span>
                <span className="text-xs font-mono font-bold text-white/90 leading-tight">{OFFICIAL_EMAIL}</span>
              </div>
            </a>

            {/* Quick Search (Desktop) */}
            <form onSubmit={handleSearchSubmit} className="hidden xl:flex items-center bg-[#f2f4f7]/10 border border-[#c4c6ce]/30 rounded px-3 py-1.5 focus-within:border-[#ffdcc3] focus-within:bg-[#f2f4f7]/20 transition-all">
              <span className="material-symbols-outlined text-white/70 text-lg mr-2">search</span>
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-white placeholder-white/60 w-28 focus:w-40 transition-all"
              />
            </form>

            {/* Contact Us CTA Button */}
            <button
              onClick={() => setActiveTab('contact')}
              className="bg-[#eebd97] text-[#081c34] hover:bg-[#ffdcc3] font-headline font-bold text-xs uppercase px-4 py-2.5 rounded transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">support_agent</span>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#081c34]/95 text-white flex flex-col pt-20 px-6 space-y-6 animate-fadeIn">
          <div className="flex justify-between items-center border-b border-white/20 pb-4">
            <span className="font-headline font-bold text-lg text-[#ffdcc3]">Navigation Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white/80 p-2">
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <nav className="flex flex-col space-y-3 font-headline text-base uppercase tracking-wider font-semibold">
            <button
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className={`text-left py-2 border-b border-white/10 ${activeTab === 'home' ? 'text-[#ffdcc3]' : 'text-white'}`}
            >
              Home
            </button>
            <button
              onClick={() => { setActiveTab('products'); setMobileMenuOpen(false); }}
              className={`text-left py-2 border-b border-white/10 ${activeTab === 'products' ? 'text-[#ffdcc3]' : 'text-white'}`}
            >
              Products
            </button>
            <button
              onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
              className={`text-left py-2 border-b border-white/10 ${activeTab === 'about' ? 'text-[#ffdcc3]' : 'text-white'}`}
            >
              About Us
            </button>
            <button
              onClick={() => { setActiveTab('sourcing'); setMobileMenuOpen(false); }}
              className={`text-left py-2 border-b border-white/10 ${activeTab === 'sourcing' ? 'text-[#ffdcc3]' : 'text-white'}`}
            >
              Sourcing
            </button>
            <button
              onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
              className={`text-left py-2 border-b border-white/10 ${activeTab === 'contact' ? 'text-[#ffdcc3]' : 'text-white'}`}
            >
              Contact
            </button>
          </nav>

          <div className="flex flex-col gap-2.5 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-headline font-bold uppercase text-xs tracking-wider"
            >
              <span>WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</span>
            </a>

            <a
              href={emailMailto}
              className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white py-3 rounded-lg font-headline font-bold uppercase text-xs tracking-wider hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              <span>Email: {OFFICIAL_EMAIL}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

