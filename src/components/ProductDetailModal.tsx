import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getEmailMailtoUrl, OFFICIAL_EMAIL } from '../utils/email';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const [isBouncing, setIsBouncing] = useState(false);
  const [quoteRequested, setQuoteRequested] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = getWhatsAppUrl(product.name);
  const emailUrl = getEmailMailtoUrl(product.name);

  const quoteSubject = `Official B2B Price Quote Request - ${product.name}`;
  const quoteBody = `Hello PRT Global Supply Team,\n\nI am requesting an official price quote for ${product.name}.\n\nPlease provide pricing details, lead times, and available supply grades.\n\nRequired Volume / Quantity:\nDelivery Location:\nCompany Name:\n\nThank you.`;
  const quoteMailUrl = getEmailMailtoUrl(product.name, quoteSubject, quoteBody);

  const handleRequestQuote = (e: React.MouseEvent) => {
    setIsBouncing(true);
    setQuoteRequested(true);
    setTimeout(() => setIsBouncing(false), 500);
    setTimeout(() => setQuoteRequested(false), 4500);

    // Launch quote email after slight delay for visual feedback
    setTimeout(() => {
      window.location.href = quoteMailUrl;
    }, 250);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#081c34]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#c4c6ce] relative flex flex-col my-auto animate-modalScaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-10 bg-[#081c34] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffdcc3] text-2xl">science</span>
            <span className="font-headline font-bold text-sm uppercase text-[#ffdcc3] tracking-wider">
              Product Information & Technical Specifications
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8 flex-1">
          {/* Top Grid: Image + Main Meta */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#c4c6ce] bg-[#f2f4f7] h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <span className="inline-block bg-[#081c34] text-white text-[11px] font-headline font-bold px-3 py-1 rounded uppercase tracking-wider">
                {product.categoryBadge}
              </span>

              <h2 className="font-headline font-extrabold text-2xl text-[#081c34]">
                {product.name}
              </h2>

              <p className="text-xs text-[#44474d] font-body leading-relaxed">
                {product.description}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs font-headline">
                {product.minOrderQuantity && (
                  <div className="bg-[#f2f4f7] p-2.5 rounded border border-[#c4c6ce]/50">
                    <span className="text-[#74777e] block text-[10px] uppercase">Packaging / MOQ</span>
                    <span className="font-bold text-[#081c34]">{product.minOrderQuantity}</span>
                  </div>
                )}
                {product.origin && (
                  <div className="bg-[#f2f4f7] p-2.5 rounded border border-[#c4c6ce]/50">
                    <span className="text-[#74777e] block text-[10px] uppercase">Supply Sourcing</span>
                    <span className="font-bold text-[#081c34]">{product.origin}</span>
                  </div>
                )}
              </div>

              {/* Main "Request a Quote" Button with Subtle Bounce Animation */}
              <div className="pt-2">
                <button
                  onClick={handleRequestQuote}
                  onMouseEnter={() => setIsBouncing(true)}
                  onAnimationEnd={() => setIsBouncing(false)}
                  className={`w-full bg-[#081c34] hover:bg-[#112d50] text-[#ffdcc3] border border-[#ffdcc3]/40 font-headline font-bold text-xs uppercase py-3.5 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 ${
                    isBouncing ? 'animate-subtle-bounce' : 'hover-subtle-bounce'
                  }`}
                >
                  <span className={`material-symbols-outlined text-lg text-[#ffdcc3] ${isBouncing ? 'animate-subtle-bounce' : ''}`}>
                    request_quote
                  </span>
                  <span className="tracking-wider">REQUEST A QUOTE</span>
                  <span className="material-symbols-outlined text-sm opacity-80">arrow_forward</span>
                </button>

                {/* Subtle Visual Feedback Banner on Click */}
                {quoteRequested && (
                  <div className="mt-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#127233] px-3.5 py-2 rounded-lg text-xs font-headline font-semibold flex items-center gap-2 animate-fadeIn">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    <span>Opening B2B quote request inquiry email...</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Overview */}
          {product.overview && (
            <div className="space-y-2 border-t border-[#c4c6ce]/40 pt-6">
              <h3 className="font-headline font-bold text-sm uppercase text-[#081c34] tracking-wider">
                Material Overview & Characteristics
              </h3>
              <p className="text-xs text-[#44474d] font-body leading-relaxed whitespace-pre-line">
                {product.overview}
              </p>
            </div>
          )}

          {/* Target Applications */}
          <div className="space-y-3 border-t border-[#c4c6ce]/40 pt-6">
            <h3 className="font-headline font-bold text-sm uppercase text-[#081c34] tracking-wider">
              Recommended End-Use Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <span
                  key={i}
                  className="bg-[#e0e3e6] text-[#081c34] font-headline font-bold text-xs px-3 py-1.5 rounded flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3 border-t border-[#c4c6ce]/40 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline font-bold text-sm uppercase text-[#081c34] tracking-wider">
                Technical Specifications & Parameters
              </h3>
            </div>

            <div className="border border-[#c4c6ce] rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs font-body">
                <thead className="bg-[#081c34] text-white font-headline uppercase text-[11px]">
                  <tr>
                    <th className="py-2.5 px-4 font-bold">Property / Parameter</th>
                    <th className="py-2.5 px-4 font-bold text-right">Technical Spec / Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c4c6ce]">
                  {product.specs.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f2f4f7]'}>
                      <td className="py-2.5 px-4 font-medium text-[#081c34]">{spec.property}</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-right text-[#081c34]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Compact Inquiry Panel */}
          <div className="bg-[#081c34] text-white rounded-xl p-6 space-y-4 border border-[#ffdcc3]/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-lg text-[#ffdcc3]">
                  Interested in {product.name}?
                </h3>
                <p className="text-xs text-white/80 font-body">
                  Contact our team directly for product availability, material grades, technical specifications, packaging details, and instant pricing quotes.
                </p>
              </div>

              {/* Second "Request a Quote" Button in Inquiry Panel */}
              <button
                onClick={handleRequestQuote}
                className={`flex-shrink-0 bg-[#eebd97] hover:bg-[#ffdcc3] text-[#081c34] font-headline font-bold text-xs uppercase px-5 py-3 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  isBouncing ? 'animate-subtle-bounce' : 'hover-subtle-bounce'
                }`}
              >
                <span className="material-symbols-outlined text-base">request_quote</span>
                <span>REQUEST A QUOTE</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-headline font-bold text-xs uppercase py-3 px-4 rounded transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
                </svg>
                <span>WHATSAPP</span>
              </a>

              <a
                href={emailUrl}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-headline font-bold text-xs uppercase py-3 px-4 rounded transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-symbols-outlined text-base text-[#ffdcc3]">mail</span>
                <span>EMAIL</span>
              </a>

              <a
                href="tel:+916353319802"
                className="bg-[#eebd97] hover:bg-[#ffdcc3] text-[#081c34] font-headline font-bold text-xs uppercase py-3 px-4 rounded transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>CALL</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f2f4f7] border-t border-[#c4c6ce] p-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#081c34] hover:bg-[#476082] text-white font-headline font-bold text-xs uppercase px-6 py-2.5 rounded transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

