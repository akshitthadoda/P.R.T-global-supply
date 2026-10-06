import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getEmailMailtoUrl, OFFICIAL_EMAIL } from '../utils/email';

interface FloatingContactProps {
  onContactClick?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingContactProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl();
  const emailMailto = getEmailMailtoUrl();

  return (
    <div className="fixed bottom-[76px] md:bottom-7 right-5 md:right-7 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Expanded Contact Menu */}
      {isOpen && (
        <div className="bg-[#081c34] border border-[#c4c6ce]/30 rounded-2xl p-3 shadow-2xl flex flex-col gap-2 w-60 animate-fadeIn text-white">
          <div className="px-2 pt-1 pb-2 border-b border-white/10 flex justify-between items-center">
            <span className="text-[11px] font-headline font-bold uppercase tracking-wider text-[#ffdcc3]">
              Direct Contact Channels
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-0.5"
              aria-label="Close contact options"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-2.5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
            </svg>
            <span>WhatsApp Us</span>
          </a>

          <a
            href={emailMailto}
            aria-label="Email PRT Global Supply"
            className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider transition-all border border-white/20 active:scale-95"
          >
            <span className="material-symbols-outlined text-lg text-[#ffdcc3]">mail</span>
            <div className="flex flex-col text-left overflow-hidden">
              <span>Email Us</span>
              <span className="text-[10px] text-white/80 font-mono lowercase font-normal leading-tight truncate">{OFFICIAL_EMAIL}</span>
            </div>
          </a>

          <a
            href="tel:+916353319802"
            className="flex items-center gap-2.5 bg-[#eebd97] hover:bg-[#ffdcc3] text-[#081c34] p-2.5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            <span>Call +91 63533 19802</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button Group */}
      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact PRT Global Supply on WhatsApp"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 md:p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
          </svg>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle floating contact options"
          className="bg-[#081c34] hover:bg-[#476082] text-white p-3 md:p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center border border-white/20 focus:outline-none"
        >
          <span className="material-symbols-outlined text-2xl">
            {isOpen ? 'expand_more' : 'contact_support'}
          </span>
        </button>
      </div>
    </div>
  );
};
