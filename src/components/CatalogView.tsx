import React, { useState, useMemo } from 'react';
import { Product, FilterState } from '../types';
import { getEmailMailtoUrl } from '../utils/email';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface CatalogViewProps {
  products: Product[];
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  onSelectProduct: (product: Product) => void;
}

interface CategoryNav {
  id: string;
  label: string;
}

const CATEGORY_NAV_ITEMS: CategoryNav[] = [
  { id: 'All Products', label: 'All Products' },
  { id: 'EVA Resin', label: 'EVA Resin' },
  { id: 'Color Masterbatch', label: 'Color Masterbatch' },
  { id: 'Filler Masterbatch', label: 'Filler Masterbatch' },
  { id: 'Functional & Additive Masterbatch', label: 'Functional & Additive Masterbatch' },
  { id: 'Paper Products', label: 'Paper Products' },
];

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  filterState,
  setFilterState,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    filterState.category || 'All Products'
  );

  const searchQuery = filterState.searchQuery;
  const setSearchQuery = (query: string) => {
    setFilterState((prev) => ({ ...prev, searchQuery: query }));
  };

  // Filter products based on selected tab and search query
  const displayProducts = useMemo(() => {
    let list = [...products];

    // Filter by selected category tab if not 'All Products'
    if (selectedCategory !== 'All Products') {
      list = list.filter((p) => {
        if (selectedCategory === 'EVA Resin') {
          return p.category === 'EVA Resin' || p.category === 'Plastic Raw Materials' || p.name.includes('EVA');
        }
        return p.category === selectedCategory;
      });
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.specs.some(
            (s) => s.property.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
          )
      );
    }

    return list;
  }, [products, selectedCategory, searchQuery]);

  // Group products by defined section headings when 'All Products' is selected and no search
  const categorizedSections = useMemo(() => {
    if (selectedCategory !== 'All Products' || searchQuery.trim() !== '') {
      return null;
    }

    const sections = [
      {
        title: 'EVA & POLYMER RESINS',
        description: 'High-performance copolymer resins for extrusion, adhesives, and moldings.',
        items: products.filter(
          (p) => p.category === 'EVA Resin' || p.category === 'Plastic Raw Materials'
        ),
      },
      {
        title: 'COLOR MASTERBATCH',
        description: 'Vibrant, high-dispersion masterbatches matched to RAL and Pantone standards.',
        items: products.filter((p) => p.category === 'Color Masterbatch'),
      },
      {
        title: 'FILLER MASTERBATCH',
        description: 'Premium calcium carbonate (CaCO3) fillers for cost optimization and stiffness.',
        items: products.filter((p) => p.category === 'Filler Masterbatch'),
      },
      {
        title: 'FUNCTIONAL & ADDITIVE MASTERBATCH',
        description: 'Specialized additive formulations including UV stabilizers and performance enhancers.',
        items: products.filter((p) => p.category === 'Functional & Additive Masterbatch'),
      },
      {
        title: 'PAPER PRODUCTS',
        description: 'Heavy-duty kraft paper rolls and coated duplex boards for industrial packaging.',
        items: products.filter((p) => p.category === 'Paper Products'),
      },
    ];

    return sections.filter((sec) => sec.items.length > 0);
  }, [products, selectedCategory, searchQuery]);

  const renderProductCard = (product: Product) => (
    <div
      key={product.id}
      className="bg-white border border-[#c4c6ce] hover:border-[#081c34]/50 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between group transform hover:-translate-y-1.5 hover:scale-[1.025]"
    >
      <div>
        <div
          className="h-48 overflow-hidden relative bg-[#f2f4f7] cursor-pointer"
          onClick={() => onSelectProduct(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 left-3 bg-[#081c34]/90 text-white text-[10px] font-headline font-bold px-2.5 py-1 rounded uppercase tracking-wider backdrop-blur-sm shadow-xs">
            {product.categoryBadge}
          </div>
          <div className="absolute inset-0 bg-[#081c34]/0 group-hover:bg-[#081c34]/5 transition-colors duration-300 pointer-events-none" />
        </div>

        <div className="p-5 space-y-3">
          <h3
            onClick={() => onSelectProduct(product)}
            className="font-headline font-bold text-base text-[#081c34] hover:text-[#476082] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#44474d] font-body leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Key Specs Snippet */}
          <div className="bg-[#f2f4f7] group-hover:bg-[#eef2f7] transition-colors rounded p-2.5 text-[11px] font-mono text-[#081c34] space-y-1">
            {product.specs.slice(0, 2).map((spec, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-[#c4c6ce]/30 last:border-none pb-1 last:pb-0"
              >
                <span className="text-[#74777e]">{spec.property}:</span>
                <span className="font-semibold text-right truncate max-w-[150px]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 pt-0 flex items-center gap-2">
        <button
          onClick={() => onSelectProduct(product)}
          className="flex-1 bg-[#081c34] hover:bg-[#476082] text-white text-xs font-headline font-bold uppercase py-2.5 rounded transition-colors text-center cursor-pointer shadow-xs active:scale-95"
        >
          View Specs
        </button>

        <a
          href={getEmailMailtoUrl(product.name)}
          className="flex-1 bg-[#eebd97] hover:bg-[#ffdcc3] text-[#081c34] text-xs font-headline font-bold uppercase py-2.5 rounded transition-colors flex items-center justify-center gap-1"
          title="Email Inquiry for this Product"
        >
          <span className="material-symbols-outlined text-base">mail</span>
          <span>Email</span>
        </a>

        <a
          href={getWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-2.5 rounded transition-colors flex items-center justify-center flex-shrink-0"
          title="Inquire via WhatsApp"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-8 py-8 space-y-10 animate-fadeIn">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-headline font-bold uppercase text-[#476082] tracking-widest">
          Industrial Raw Materials & Supply Solutions
        </span>
        <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-[#081c34]">
          OUR PRODUCTS
        </h1>
        <p className="text-sm md:text-base text-[#44474d] font-body leading-relaxed">
          Explore our range of industrial raw materials, masterbatch solutions and paper products.
        </p>
        <p className="text-xs text-[#74777e] font-body">
          Product information, applications and technical details for industrial buyers.
        </p>
      </div>

      {/* Product Search Input */}
      <div className="max-w-xl mx-auto relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#74777e]">
          search
        </span>
        <input
          type="text"
          placeholder="Search products by name, category, material, or spec..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-[#c4c6ce] rounded-xl pl-11 pr-10 py-3 text-sm text-[#081c34] placeholder-[#74777e] shadow-xs focus:outline-none focus:border-[#081c34] focus:ring-1 focus:ring-[#081c34]"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#74777e] hover:text-[#081c34] p-1"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        )}
      </div>

      {/* Horizontal Category Navigation */}
      <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 border-b border-[#c4c6ce]/40 scrollbar-none">
        {CATEGORY_NAV_ITEMS.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setFilterState((prev) => ({ ...prev, category: cat.id as any }));
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-headline font-bold uppercase transition-all whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-[#081c34] text-white shadow-xs'
                : 'bg-white border border-[#c4c6ce] text-[#081c34] hover:bg-[#f2f4f7]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Catalogue Grid / Categorized Sections */}
      {categorizedSections ? (
        /* Categorized Grouped View for 'All Products' */
        <div className="space-y-12">
          {categorizedSections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <div className="border-b border-[#081c34]/20 pb-2">
                <h2 className="text-xl md:text-2xl font-headline font-extrabold text-[#081c34]">
                  {sec.title}
                </h2>
                <p className="text-xs text-[#74777e] font-body mt-0.5">{sec.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sec.items.map(renderProductCard)}
              </div>
            </div>
          ))}
        </div>
      ) : displayProducts.length === 0 ? (
        /* Empty Results */
        <div className="bg-white border border-[#c4c6ce] rounded-2xl p-12 text-center space-y-4 max-w-lg mx-auto">
          <span className="material-symbols-outlined text-5xl text-[#74777e]">
            inventory_2
          </span>
          <h3 className="font-headline font-bold text-lg text-[#081c34]">
            No matching products found
          </h3>
          <p className="text-xs text-[#44474d]">
            Try searching for another material name, grade or category keyword.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All Products');
              setSearchQuery('');
            }}
            className="bg-[#081c34] text-white font-headline font-bold text-xs uppercase px-5 py-2.5 rounded-lg hover:bg-[#476082] transition-colors"
          >
            Show All Products
          </button>
        </div>
      ) : (
        /* Filtered Grid View for specific category or search */
        <div className="space-y-4">
          {selectedCategory !== 'All Products' && (
            <div className="border-b border-[#081c34]/20 pb-2">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-[#081c34] uppercase">
                {selectedCategory}
              </h2>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayProducts.map(renderProductCard)}
          </div>
        </div>
      )}

      {/* Product Contact CTA Banner */}
      <div className="bg-[#081c34] text-white rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-md border border-[#ffdcc3]/20 mt-12">
        <div className="space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-headline font-bold uppercase text-[#ffdcc3] tracking-widest">
            Direct Supplier Assistance
          </span>
          <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-white">
            INTERESTED IN THIS PRODUCT?
          </h2>
          <p className="text-sm text-white/80 font-body leading-relaxed">
            Contact PRT Global Supply directly for product information, available grades, specifications and supply details.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-headline font-bold text-xs uppercase px-6 py-3.5 rounded-lg transition-all flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.513 3.37 1.83 8.054 1.828 13.914c0 2.119.555 4.184 1.61 5.998L1.6 22.8l3.003-.787a10.51 10.51 0 005.443 1.503h.005c5.856 0 10.54-4.743 10.542-10.603 0-2.833-1.102-5.492-3.104-7.493a10.485 10.485 0 00-7.489-3.09" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href={getEmailMailtoUrl()}
            className="bg-[#eebd97] hover:bg-[#ffdcc3] text-[#081c34] font-headline font-bold text-xs uppercase px-6 py-3.5 rounded-lg transition-all flex items-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">mail</span>
            <span>Email</span>
          </a>

          <a
            href="tel:+916353319802"
            className="bg-white/10 hover:bg-white/20 text-white font-headline font-bold text-xs uppercase px-6 py-3.5 rounded-lg transition-all flex items-center gap-2 border border-white/20"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};
