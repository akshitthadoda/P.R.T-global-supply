import React from 'react';
import { ViewTab } from '../types';
import { getWhatsAppUrl, WHATSAPP_NUMBER_DISPLAY } from '../utils/whatsapp';
import { OFFICIAL_EMAIL, getEmailMailtoUrl } from '../utils/email';

interface InfoPagesProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
}

export const InfoPages: React.FC<InfoPagesProps> = ({ activeTab, setActiveTab }) => {
  const whatsappUrl = getWhatsAppUrl();
  const emailMailto = getEmailMailtoUrl();

  if (activeTab === 'contact') {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 space-y-12 animate-fadeIn">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-widest">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-[#081c34]">
            Contact PRT Global Supply
          </h1>
          <p className="text-sm text-[#44474d] font-body leading-relaxed">
            Connect directly with our sales team and technical advisers for product inquiries, material grades, and supply support.
          </p>
        </div>

        {/* Contact Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: WhatsApp Primary */}
          <div className="bg-white border-2 border-[#25D366] rounded-2xl p-8 space-y-6 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#25D366]/15 rounded-xl flex items-center justify-center text-[#25D366]">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-headline font-bold uppercase text-[#25D366] tracking-wider">
                  Official WhatsApp Business
                </span>
                <h2 className="text-2xl font-headline font-extrabold text-[#081c34]">
                  WhatsApp
                </h2>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-mono font-bold text-[#081c34] hover:text-[#25D366] transition-colors block pt-1"
                >
                  {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </div>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Chat with PRT Global Supply for direct technical assistance, product specifications, and general inquiries.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-headline font-bold text-xs uppercase py-3.5 px-4 rounded transition-all shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
              </svg>
              <span>OPEN WHATSAPP</span>
            </a>
          </div>

          {/* Card 2: Email Direct */}
          <div className="bg-white border border-[#c4c6ce] rounded-2xl p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#081c34]/10 rounded-xl flex items-center justify-center text-[#081c34]">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-wider">
                  Official Business Email
                </span>
                <h2 className="text-2xl font-headline font-extrabold text-[#081c34]">
                  Email Us
                </h2>
                <a
                  href={emailMailto}
                  className="text-base font-mono font-bold text-[#081c34] hover:text-[#476082] transition-colors block pt-1 break-all"
                >
                  {OFFICIAL_EMAIL}
                </a>
              </div>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Send your product inquiries, specifications, and supply requests directly to our sales inbox.
              </p>
            </div>

            <a
              href={emailMailto}
              className="w-full bg-[#081c34] hover:bg-[#476082] text-white font-headline font-bold text-xs uppercase py-3.5 px-4 rounded transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              <span>SEND EMAIL</span>
            </a>
          </div>

          {/* Card 3: Phone Direct */}
          <div className="bg-white border border-[#c4c6ce] rounded-2xl p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#081c34]/10 rounded-xl flex items-center justify-center text-[#081c34]">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-wider">
                  Direct Phone Desk
                </span>
                <h2 className="text-2xl font-headline font-extrabold text-[#081c34]">
                  Phone Contact
                </h2>
                <a
                  href="tel:+916353319802"
                  className="text-xl font-mono font-bold text-[#081c34] hover:text-[#476082] transition-colors block pt-1"
                >
                  {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </div>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Direct phone line for product communication, order inquiries, and general assistance.
              </p>
            </div>

            <a
              href="tel:+916353319802"
              className="w-full bg-[#eebd97] hover:bg-[#ffdcc3] text-[#081c34] font-headline font-bold text-xs uppercase py-3.5 px-4 rounded transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'about') {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 space-y-12 animate-fadeIn">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-widest">
            Corporate Profile
          </span>
          <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-[#081c34]">
            About PRT Global Supply
          </h1>
          <p className="text-sm text-[#44474d] font-body leading-relaxed">
            Distributor and sourcing partner for industrial polymer raw materials, color masterbatches, and paper products.
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-[#c4c6ce] shadow-md h-80 relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6YJ2bvm7f3-aYIUBlCvPJ4pIzuE6z2PImru7k35EKOM-Wc-GR_-hmCUwGmvWoW_TdR3POZ00vAEEDvxJ9gR8Ha1oO4yRMZHSXeqgk72dkUjyfgjg2EeJ5MwJNRZ0duvxQRXrJvZvuoHgeweQSHyXqeq_wI7qYbnkhVuyhN4UF2aPMn3RV47MjPmVNB6QwC5mdhH3SVmpUIA1m3uctnmM7rGULrTDxSdLRq4eGHQrzeCBzRP6RkUb4TQ"
              alt="PRT Petrochemical Processing"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-[#081c34]">
              Industrial Raw Materials & Sourcing Support
            </h2>
            <p className="text-xs text-[#44474d] font-body leading-relaxed">
              PRT Global Supply connects polymer resin manufacturers, masterbatch producers, and paper mills with industrial processing clients worldwide.
            </p>
            <p className="text-xs text-[#44474d] font-body leading-relaxed">
              Our B2B team provides structured product information, direct communication, and product selection assistance to help industrial buyers source suitable materials for their manufacturing needs.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-[#081c34] text-white font-headline font-bold text-xs uppercase px-5 py-3 rounded hover:bg-[#476082] transition-colors"
              >
                Contact Our Sales Team
              </button>
            </div>
          </div>
        </div>

        {/* Our Business Approach */}
        <div className="bg-white border border-[#c4c6ce] rounded-2xl p-8 space-y-6 shadow-xs">
          <h2 className="text-2xl font-headline font-extrabold text-[#081c34] border-b border-[#c4c6ce]/40 pb-4">
            Our Business Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#081c34]">
                <span className="material-symbols-outlined text-xl">category</span>
                <h3 className="font-headline font-bold text-sm uppercase">PRODUCT FOCUS</h3>
              </div>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Focused on industrial raw materials, masterbatch, and paper products.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#081c34]">
                <span className="material-symbols-outlined text-xl">hub</span>
                <h3 className="font-headline font-bold text-sm uppercase">SOURCING</h3>
              </div>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Connecting customers with suitable product and supplier sources.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#081c34]">
                <span className="material-symbols-outlined text-xl">description</span>
                <h3 className="font-headline font-bold text-sm uppercase">PRODUCT INFORMATION</h3>
              </div>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Providing product descriptions, applications, and technical information where available.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#081c34]">
                <span className="material-symbols-outlined text-xl">chat</span>
                <h3 className="font-headline font-bold text-sm uppercase">DIRECT COMMUNICATION</h3>
              </div>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Customers can contact our team directly through WhatsApp, email, and phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'sourcing') {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 space-y-12 animate-fadeIn">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-widest">
            Supply Chain
          </span>
          <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-[#081c34]">
            Global Direct Sourcing
          </h1>
          <p className="text-sm text-[#44474d] font-body leading-relaxed">
            Connecting industrial customers with reliable raw material sources worldwide.
          </p>
        </div>

        <div className="bg-[#081c34] text-white rounded-2xl p-8 border border-[#74777e]/30 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="material-symbols-outlined text-[#ffdcc3] text-3xl">public</span>
            <h3 className="font-headline font-bold text-lg text-[#ffdcc3]">International Logistics</h3>
            <p className="text-xs text-white/80 font-body leading-relaxed">
              Supporting standard shipping arrangements and commercial Incoterms across major freight routes.
            </p>
          </div>
          <div className="space-y-2">
            <span className="material-symbols-outlined text-[#ffdcc3] text-3xl">warehouse</span>
            <h3 className="font-headline font-bold text-lg text-[#ffdcc3]">Supply Network</h3>
            <p className="text-xs text-white/80 font-body leading-relaxed">
              Established sourcing connections with polymer producers, masterbatch compounding plants, and paper mills.
            </p>
          </div>
          <div className="space-y-2">
            <span className="material-symbols-outlined text-[#ffdcc3] text-3xl">article</span>
            <h3 className="font-headline font-bold text-lg text-[#ffdcc3]">Supply Communication</h3>
            <p className="text-xs text-white/80 font-body leading-relaxed">
              Clear technical communication, packing information, shipping papers, and product specification support.
            </p>
          </div>
        </div>

        {/* Our Sourcing Approach */}
        <div className="bg-white border border-[#c4c6ce] rounded-2xl p-8 space-y-6 shadow-xs">
          <h2 className="text-2xl font-headline font-extrabold text-[#081c34] border-b border-[#c4c6ce]/40 pb-4">
            Our Sourcing Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-[#f2f4f7] p-5 rounded-xl border border-[#c4c6ce]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#476082]">STEP 01</span>
              <h3 className="font-headline font-bold text-sm text-[#081c34] uppercase">UNDERSTAND</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Understand the customer's material requirement.
              </p>
            </div>

            <div className="bg-[#f2f4f7] p-5 rounded-xl border border-[#c4c6ce]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#476082]">STEP 02</span>
              <h3 className="font-headline font-bold text-sm text-[#081c34] uppercase">IDENTIFY</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Identify suitable product and source options.
              </p>
            </div>

            <div className="bg-[#f2f4f7] p-5 rounded-xl border border-[#c4c6ce]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#476082]">STEP 03</span>
              <h3 className="font-headline font-bold text-sm text-[#081c34] uppercase">REVIEW</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Review product specifications and available documentation.
              </p>
            </div>

            <div className="bg-[#f2f4f7] p-5 rounded-xl border border-[#c4c6ce]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#476082]">STEP 04</span>
              <h3 className="font-headline font-bold text-sm text-[#081c34] uppercase">COORDINATE</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Coordinate supply requirements and communication.
              </p>
            </div>

            <div className="bg-[#f2f4f7] p-5 rounded-xl border border-[#c4c6ce]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#476082]">STEP 05</span>
              <h3 className="font-headline font-bold text-sm text-[#081c34] uppercase">SUPPORT</h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Provide direct support throughout the business communication process.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
