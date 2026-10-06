import React, { useState } from 'react';
import { ViewTab } from '../types';
import { OFFICIAL_EMAIL, getEmailMailtoUrl } from '../utils/email';

interface FooterProps {
  setActiveTab: (tab: ViewTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-[#081c34] text-white pt-16 pb-24 md:pb-12 border-t border-[#74777e]/30">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Brand & Overview */}
            <div className="space-y-4">
              <div
                onClick={() => setActiveTab('home')}
                className="flex items-center gap-2.5 cursor-pointer group select-none"
              >
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:scale-105"
                  aria-label="PRT Global Supply Logo"
                >
                  <circle cx="56" cy="62" r="36" stroke="#ffdcc3" strokeWidth="4.5" strokeLinecap="round"/>
                  <ellipse cx="56" cy="62" rx="36" ry="14" stroke="#ffdcc3" strokeWidth="3.5" strokeDasharray="4 2"/>
                  <ellipse cx="56" cy="62" rx="16" ry="36" stroke="#ffdcc3" strokeWidth="3.5"/>
                  <line x1="56" y1="26" x2="56" y2="98" stroke="#ffdcc3" strokeWidth="3.5"/>
                  <line x1="20" y1="62" x2="92" y2="62" stroke="#ffdcc3" strokeWidth="3.5"/>
                  <path d="M 12 82 C 16 38, 60 16, 96 28 C 108 32, 112 44, 100 56 C 84 72, 44 80, 24 74" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" fill="none"/>
                  <path d="M 90 18 L 108 30 L 88 38 Z" fill="#ffffff"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-headline font-extrabold text-xl tracking-tight text-white group-hover:text-[#ffdcc3] transition-colors leading-tight">
                    PRT Global Supply
                  </span>
                  <span className="text-[11px] font-headline font-medium text-[#ffdcc3] tracking-normal">
                    Your Trusted Paper & Chemical Partner
                  </span>
                </div>
              </div>
              <p className="text-white/75 text-xs leading-relaxed max-w-sm font-body">
                Industrial material sourcing and B2B supply solutions connecting manufacturers, processors, converters, and industrial buyers worldwide.
              </p>
            </div>

            {/* Column 2: Product Categories */}
            <div className="space-y-3">
              <h4 className="font-headline font-bold text-xs uppercase text-[#ffdcc3] tracking-wider">
                PRODUCT CATEGORIES
              </h4>
              <ul className="space-y-2 text-xs text-white/80 font-body">
                <li>
                  <button onClick={() => setActiveTab('products')} className="hover:text-[#ffdcc3] transition-colors text-left">
                    Paper & Paper Products
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('products')} className="hover:text-[#ffdcc3] transition-colors text-left">
                    Chemicals & Additives
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('products')} className="hover:text-[#ffdcc3] transition-colors text-left">
                    Industrial Raw Materials
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('products')} className="hover:text-[#ffdcc3] transition-colors text-left">
                    EVA & Polymer Resins
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('products')} className="hover:text-[#ffdcc3] transition-colors text-left">
                    Color & Filler Masterbatch
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-headline font-bold text-xs uppercase text-[#ffdcc3] tracking-wider">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-xs text-white/80 font-body">
                <li>
                  <button onClick={() => setActiveTab('home')} className="hover:text-[#ffdcc3] transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('products')} className="hover:text-[#ffdcc3] transition-colors">
                    Products
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('about')} className="hover:text-[#ffdcc3] transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('sourcing')} className="hover:text-[#ffdcc3] transition-colors">
                    Sourcing
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('contact')} className="hover:text-[#ffdcc3] transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Direct Contact */}
            <div className="space-y-3">
              <h4 className="font-headline font-bold text-xs uppercase text-[#ffdcc3] tracking-wider">
                DIRECT CONTACT
              </h4>
              <div className="space-y-2.5 text-xs text-white/80 font-body">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ffdcc3] text-base mt-0.5">location_on</span>
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ffdcc3] text-base">call</span>
                  <a href="tel:+916353319802" className="hover:text-[#ffdcc3] transition-colors font-mono">
                    +91 63533 19802
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#25D366] font-bold text-xs">WA:</span>
                  <a
                    href="https://wa.me/916353319802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors font-mono font-medium"
                  >
                    +91 63533 19802
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ffdcc3] text-base">mail</span>
                  <a href={getEmailMailtoUrl()} className="hover:text-[#ffdcc3] transition-colors font-mono break-all">
                    {OFFICIAL_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 font-body">
            <p>© 2026 PRT Global Supply. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-[#ffdcc3] hover:underline transition-colors"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#ffdcc3] hover:underline transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="hover:text-[#ffdcc3] hover:underline transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modal for Terms / Privacy */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#081c34] rounded-2xl max-w-lg w-full p-6 md:p-8 space-y-5 shadow-2xl relative border border-[#c4c6ce]">
            <div className="flex justify-between items-center border-b border-[#c4c6ce]/50 pb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#081c34] text-xl">gavel</span>
                <h3 className="font-headline font-extrabold text-xl text-[#081c34]">
                  {modalType === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
                </h3>
              </div>
              <button
                onClick={() => setModalType(null)}
                className="text-[#476082] hover:text-[#081c34] p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#44474d] font-body leading-relaxed max-h-72 overflow-y-auto pr-2">
              {modalType === 'terms' ? (
                <>
                  <p>
                    <strong>1. B2B Commercial Scope:</strong> PRT Global Supply operates as an industrial sourcing and supply coordination partner. Product descriptions, specifications, and grade references provided on this platform are for commercial guidance.
                  </p>
                  <p>
                    <strong>2. Inquiries & Quotations:</strong> All commercial inquiries submitted via the website or WhatsApp do not constitute binding sale contracts until formal proforma invoices or purchase agreements are agreed upon by both parties.
                  </p>
                  <p>
                    <strong>3. Specifications & Grade Compliance:</strong> Material technical data sheets (TDS) and safety data sheets (MSDS) are available upon request for verification prior to shipment.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Information Collection:</strong> PRT Global Supply respects business client confidentiality. Information submitted via direct email or WhatsApp is used solely for responding to product inquiries and managing commercial orders.
                  </p>
                  <p>
                    <strong>2. Data Protection:</strong> We do not sell, rent, or distribute client contact details or commercial specifications to third parties, except as required for logistics and export documentation.
                  </p>
                  <p>
                    <strong>3. Direct Business Support:</strong> You may request deletion or updates to your inquiry records at any time by contacting our sales desk at {OFFICIAL_EMAIL}.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="bg-[#081c34] text-white font-headline font-bold text-xs uppercase px-6 py-2.5 rounded-lg hover:bg-[#476082] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
