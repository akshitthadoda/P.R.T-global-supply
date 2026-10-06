import React from 'react';
import { ViewTab } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getEmailMailtoUrl } from '../utils/email';

interface MobileBottomNavProps {
  setActiveTab: (tab: ViewTab) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  setActiveTab,
}) => {
  const whatsappUrl = getWhatsAppUrl();
  const emailMailto = getEmailMailtoUrl();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#081c34] text-white border-t border-[#74777e]/30 px-3 py-2 shadow-2xl flex items-center justify-around gap-1">
      {/* WhatsApp Quick Chat */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact PRT Global Supply on WhatsApp"
        className="flex flex-col items-center justify-center p-1 text-[#25D366] hover:text-[#20ba5a] transition-colors"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
        </svg>
        <span className="text-[10px] font-headline uppercase font-bold tracking-wider mt-0.5">WHATSAPP</span>
      </a>

      {/* Email Link */}
      <a
        href={emailMailto}
        className="flex flex-col items-center justify-center p-1 text-white/90 hover:text-[#ffdcc3] transition-colors"
      >
        <span className="material-symbols-outlined text-xl text-[#ffdcc3]">mail</span>
        <span className="text-[10px] font-headline uppercase font-bold tracking-wider mt-0.5">EMAIL</span>
      </a>

      {/* Call Direct */}
      <a
        href="tel:+916353319802"
        className="flex flex-col items-center justify-center p-1 text-white/90 hover:text-[#ffdcc3] transition-colors"
      >
        <span className="material-symbols-outlined text-xl">call</span>
        <span className="text-[10px] font-headline uppercase font-bold tracking-wider mt-0.5">CALL</span>
      </a>

      {/* Contact Page */}
      <button
        onClick={() => setActiveTab('contact')}
        className="flex flex-col items-center justify-center p-1 text-[#eebd97] hover:text-[#ffdcc3] transition-colors"
      >
        <span className="material-symbols-outlined text-xl">support_agent</span>
        <span className="text-[10px] font-headline uppercase font-bold tracking-wider mt-0.5">CONTACT</span>
      </button>
    </div>
  );
};
