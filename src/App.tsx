import React, { useState, useMemo } from 'react';
import { ViewTab, Product, FilterState } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { CatalogView } from './components/CatalogView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InfoPages } from './components/InfoPages';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [activeTab, setActiveTab] = useState<ViewTab>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [filterState, setFilterState] = useState<FilterState>({
    category: 'All Products',
    applications: [],
    searchQuery: '',
    sortBy: 'Recommended',
    viewMode: 'grid',
  });

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (filterState.category !== 'All Products') {
      result = result.filter((p) => {
        if (filterState.category === 'Plastic Raw Materials') {
          return p.category === 'Plastic Raw Materials' || p.category === 'EVA Resin';
        }
        if (filterState.category === 'EVA Resin') {
          return p.category === 'EVA Resin' || p.name.includes('EVA');
        }
        if (filterState.category === 'Masterbatch') {
          return p.category.includes('Masterbatch');
        }
        return p.category === filterState.category;
      });
    }

    // Application filter
    if (filterState.applications.length > 0) {
      result = result.filter((p) =>
        filterState.applications.some((app) => p.applications.includes(app))
      );
    }

    // Search query filter
    if (filterState.searchQuery.trim() !== '') {
      const q = filterState.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.specs.some(
            (s) =>
              s.property.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
          )
      );
    }

    // Sort By
    if (filterState.sortBy === 'Name (A-Z)') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filterState.sortBy === 'Category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [filterState]);

  // Set category filter from home page click
  const handleSelectCategoryFromHome = (cat: string) => {
    setFilterState((prev) => ({
      ...prev,
      category: cat as FilterState['category'],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fc] text-[#191c1e]">
      {/* Primary Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={filterState.searchQuery}
        setSearchQuery={(q) =>
          setFilterState((prev) => ({ ...prev, searchQuery: q }))
        }
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            onSelectProduct={(p) => setSelectedProduct(p)}
            featuredProducts={PRODUCTS}
            setSelectedCategory={handleSelectCategoryFromHome}
          />
        )}

        {activeTab === 'products' && (
          <CatalogView
            products={filteredProducts}
            filterState={filterState}
            setFilterState={setFilterState}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {['about', 'sourcing', 'contact'].includes(activeTab) && (
          <InfoPages activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Mobile Sticky Action Bar */}
      <MobileBottomNav setActiveTab={setActiveTab} />

      {/* Persistent Floating Contact Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
