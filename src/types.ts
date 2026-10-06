export type Category = 
  | 'All Products'
  | 'Plastic Raw Materials'
  | 'EVA Resin'
  | 'Masterbatch'
  | 'Color Masterbatch'
  | 'Filler Masterbatch'
  | 'Functional & Additive Masterbatch'
  | 'Paper Products';

export type Application = 
  | 'Packaging (Flexible)'
  | 'Packaging (Rigid)'
  | 'Automotive Components'
  | 'Consumer Goods'
  | 'Construction Materials';

export interface TechSpec {
  property: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  categoryBadge: string;
  categoryBadgeClass?: string;
  image: string;
  description: string;
  overview?: string;
  applications: Application[];
  specs: TechSpec[];
  featured?: boolean;
  minOrderQuantity?: string;
  origin?: string;
}

export interface ContactForm {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ViewTab = 'home' | 'products' | 'about' | 'sourcing' | 'contact';

export interface FilterState {
  category: Category;
  applications: Application[];
  searchQuery: string;
  sortBy: 'Recommended' | 'Name (A-Z)' | 'Category';
  viewMode: 'grid' | 'list';
}
