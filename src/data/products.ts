import { Product, Application } from '../types';

export const APPLICATIONS_LIST: Application[] = [
  'Packaging (Flexible)',
  'Packaging (Rigid)',
  'Automotive Components',
  'Consumer Goods',
  'Construction Materials'
];

export const PRODUCTS: Product[] = [
  {
    id: 'eva-resin',
    name: 'Ethylene Vinyl Acetate (EVA) Resin',
    category: 'Plastic Raw Materials',
    categoryBadge: 'Plastic Raw Materials',
    categoryBadgeClass: 'bg-primary-fixed text-on-primary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnFVyn4Pu0O2-FCP_AHLZYgsjqxuM6_N6yMsTcOLi3m8OQAlnmdIn5laFcRSPxu_XAlNhGkQvM-FQQT1fM87ogr89Ni92NmP_H8WLNkC1ewTjjgrRONB4PxVink5rQ77wfiVf-ayPdyT4wFgS6kUVijucVxFonmtWQXLGQoTsWZzShmglZBvfZWyVbU8SJgeCQKhGU88z2eTCjZK1eoLRsnXU2u7evPVtyA6Sf-te4CF0IHX_wPVcYwg',
    description: 'High-grade copolymer resin offering excellent flexibility, toughness, and clarity. Ideal for extrusion coating, hot melt adhesives, and wire/cable insulation.',
    overview: 'Ethylene Vinyl Acetate (EVA) is an elastomeric polymer that produces materials which are "rubber-like" in softness and flexibility. The material has good clarity and gloss, low-temperature toughness, stress-crack resistance, hot-melt adhesive waterproof properties, and resistance to UV radiation.\n\nIt is broadly utilized in applications requiring extreme flexibility and toughness, including footwear midsoles, flexible foam products, high-end packaging films, and hot melt adhesives.',
    applications: ['Packaging (Flexible)', 'Automotive Components', 'Consumer Goods'],
    featured: true,
    minOrderQuantity: '1 Metric Ton',
    origin: 'South Korea / UAE',
    specs: [
      { property: 'Grade', value: 'Available on request (e.g. EVA 1802, EVA 2805)' },
      { property: 'Appearance', value: 'Translucent Pellets' },
      { property: 'VA Content (%)', value: '18% - 28%' },
      { property: 'Melt Index (g/10min)', value: '1.5 - 400' },
      { property: 'Density (g/cm³)', value: '0.93 - 0.95' }
    ]
  },
  {
    id: 'black-masterbatch',
    name: 'High-Jet Black Masterbatch',
    category: 'Color Masterbatch',
    categoryBadge: 'Color Masterbatch',
    categoryBadgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_buJ1RoayKaaU9rUKfQDDival2jt98SiGTNFClZ1FRzpNwWdu58WX_KJ2vBjbZ7LUBlqibkSXIyugOKjkaNYxyesdSSwsITMYkdpmunmF1TmLrMhcU9WqmagZkl8aEzZC_1GSyRMGhe_6i6RpA8-MYlMpfnhLagYKZ08rRhNP0L5VS_Wr12wKfeU9hTkmrEwdi_CMy_HC5nWYdPcV4H-nXtkbXK2ALwVjthjXUsgazMn9FVXcj2G3Hw',
    description: 'Formulated with premium carbon black for deep, intense coloration and excellent UV protection. Suitable for agricultural films, pipes, and automotive parts.',
    overview: 'High-Jet Black Masterbatch is an advanced carbon black dispersion in a polyolefin carrier resin. Designed for demanding applications where opacity, deep jetness, and thermal/UV resistance are mandatory.',
    applications: ['Automotive Components', 'Construction Materials', 'Packaging (Flexible)'],
    featured: true,
    minOrderQuantity: '500 kg',
    origin: 'Germany / India',
    specs: [
      { property: 'Carbon Black Content (%)', value: '40% - 50%' },
      { property: 'Carrier Resin', value: 'LLDPE / Universal' },
      { property: 'Melt Flow Index (g/10min)', value: '10 - 15' },
      { property: 'Heat Resistance (°C)', value: '280°C' },
      { property: 'Filter Value (bar/g)', value: '< 0.5' }
    ]
  },
  {
    id: 'white-masterbatch',
    name: 'Premium White Masterbatch',
    category: 'Color Masterbatch',
    categoryBadge: 'Color Masterbatch',
    categoryBadgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZwDlQjo476KfwmWH-TDBSQ-Irpsaf03EugDoi969HfmSpEtU90ppTL6471b2oY6L7N3PIMyE54daRCnvVx2CRp500fe3CRv0TfVbfpw3owg82ge3QhS1Qe5l8Px-vgy8Va9f2FKpblz-QJJzbCi-OZesGAstVd5Taft3HODEAEQ4wlK1c33WD3ryEroKBfYfmtYwS0j3txyxWAxzmdKDNqH5DtTOzYBWIu1P6kFfXEoCB7yTUN7CGQ',
    description: 'High-opacity titanium dioxide (TiO2) concentration providing superior whiteness and dispersion for film extrusion, blow molding, and injection molding applications.',
    overview: 'Premium White Masterbatch incorporates micronized rutile Titanium Dioxide (TiO2) for maximum opacity and whiteness with minimal let-down ratios. Suitable for packaging films, bottles, and high-gloss consumer items.',
    applications: ['Packaging (Rigid)', 'Packaging (Flexible)', 'Consumer Goods'],
    featured: true,
    minOrderQuantity: '1 Metric Ton',
    origin: 'USA / Netherlands',
    specs: [
      { property: 'TiO2 Content (%)', value: '60% - 70% Rutile' },
      { property: 'Carrier Resin', value: 'PE / PP' },
      { property: 'Moisture Content (%)', value: '< 0.08%' },
      { property: 'Whiteness Index', value: '96.5' },
      { property: 'Compatibility', value: 'LDPE, LLDPE, HDPE, PP' }
    ]
  },
  {
    id: 'custom-color-masterbatch',
    name: 'Custom Color Masterbatch',
    category: 'Color Masterbatch',
    categoryBadge: 'Color Masterbatch',
    categoryBadgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeeW3DymEpjgpajzN7rgq-FDMkDmA2LZEoelXjKNUiP7YDx9BS4lioJjjcjkDAjd9ok6e9iuSIBhwZ6m-0M_KpPklNXlIpkEAepvOxgLxrX_l6xYo247fH8HvSI79UKEnVNqBYCgNbFjkWL1u3wS8udgaAXPE_uWnQoHk-iZecjL8hk7PzbuwDrxxJaAJnOwB_ORSX6St3xgeTHoG3c0_mDokqCquP7KqJiiG7QGV-Tm4TIxL2KaubSw',
    description: 'Tailor-made color solutions matched to precise RAL or Pantone specifications. Ensures color consistency across production batches for consumer packaging and goods.',
    overview: 'Our laboratory accurately formulates custom color masterbatches using advanced spectrophotometry. We match exact Pantone, RAL, or customer physical swatches while maintaining polymer melt stability.',
    applications: ['Consumer Goods', 'Packaging (Flexible)', 'Packaging (Rigid)'],
    featured: true,
    minOrderQuantity: '250 kg',
    origin: 'Germany / Taiwan',
    specs: [
      { property: 'Color Match System', value: 'RAL / Pantone / Custom Sample' },
      { property: 'Pigment Loading', value: '20% - 50%' },
      { property: 'Light Fastness', value: '7 - 8 Grade' },
      { property: 'Thermal Stability', value: 'Up to 300°C' }
    ]
  },
  {
    id: 'kraft-paper-rolls',
    name: 'Industrial Kraft Paper Rolls',
    category: 'Paper Products',
    categoryBadge: 'Paper Products',
    categoryBadgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOsVdj-mUaoSFAnhPqklBi8HqoR4JKe8WBtRMDwE7nHDby5r2oAeoHCAI-eODQmxGAfz0YDg6XCrJA5aijlT65nf9Uh1bpolLIGk-uZ1k0TmEvsF0B5Od_KGVuBUhEGec7-ybQWHsTlKQOKC7bGSI05hfKyhXjszBX14vKYov9UwPCHp-BkVABbbAl88DWX2jxujy_OSiHDpVP4U9tza4fNzdcg3xLnar8SAsEHCXjWlAwvUzVuLzDyg',
    description: 'High-tensile strength unbleached kraft paper available in various GSM grades. Essential for heavy-duty wrapping, multi-wall sacks, and protective void fill applications.',
    overview: '100% virgin wood pulp unbleached kraft paper engineered for extreme burst resistance and tear strength. Ideal for industrial wrapping, corrugated board liners, and heavy-duty valve sacks.',
    applications: ['Packaging (Flexible)', 'Packaging (Rigid)', 'Construction Materials'],
    featured: true,
    minOrderQuantity: '5 Metric Tons',
    origin: 'Sweden / Finland',
    specs: [
      { property: 'Grammage Range (GSM)', value: '60 GSM - 180 GSM' },
      { property: 'Bursting Strength (kPa)', value: '250 - 600' },
      { property: 'Tear Factor (MD/CD)', value: '110 / 125' },
      { property: 'Moisture Content (%)', value: '7.0% ± 1%' },
      { property: 'Roll Width', value: '300mm - 2200mm' }
    ]
  },
  {
    id: 'coated-duplex-board',
    name: 'Coated Duplex Board',
    category: 'Paper Products',
    categoryBadge: 'Paper Products',
    categoryBadgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxit8C5bzeRKXm-iZS7lCgSw_fvHWpKZeMI5uIokYGrvqMhvGYbyvPAx2s5j1VTpFUa3U4rOWfx0RtbGeaXaWAje2DTLvDJ-bhmDIM_cs7nsafL0hZK8GiylDhFyJmfNPhvYd-IuDDKs_LcDFPRj_5wlhulLxTqXUj2kZtnxMnRqqsxuzeAGFddK9GBV-A2_d52ui_6ZhfsUtQVB-0UciPlS4xPdHBs8TaDvPa2-smfzXzAac8ymofLQ',
    description: 'Rigid, multi-layered paperboard with a premium white coated top layer for excellent printability. The standard choice for pharmaceutical, food, and FMCG folding cartons.',
    overview: 'Coated Duplex Board with Grey Back or White Back designed for high-speed offset and flexographic printing. Offers high stiffness, smooth surface gloss, and robust folding resistance.',
    applications: ['Packaging (Rigid)', 'Consumer Goods'],
    featured: true,
    minOrderQuantity: '10 Metric Tons',
    origin: 'Indonesia / China',
    specs: [
      { property: 'Grammage Range (GSM)', value: '230 GSM - 450 GSM' },
      { property: 'Brightness (Top Layer)', value: '80% - 85%' },
      { property: 'Caliper (Thickness)', value: '300µm - 600µm' },
      { property: 'Smoothness (PPS)', value: '1.2 - 1.8 µm' }
    ]
  },
  {
    id: 'red-masterbatch',
    name: 'Red Masterbatch',
    category: 'Color Masterbatch',
    categoryBadge: 'Color Masterbatch',
    categoryBadgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwNniQGQnqusaLtVmKT8Lda-fIzrbE3KQxVA0BsT_6vXZ--BhAmSlGADZ83u9AwPd5YqNI3KwKofFFWcNTQjZZfqm0RdC9vF-yo7f8nQWBa1Z5ur_ZRnX5RAsf9PIetIvng7wkwknHyvoDnZUfm0X_DH9xvOVnLAhNiZkg9baLVSVSy9fX7ioiSq19LBch91Bh7tOyApm7xR0NrmVOBZHJ0co8fusXaqjuPEbi8Sj6MgSrLWsGs5oJbw',
    description: 'High-quality red color masterbatch providing excellent dispersion and thermal stability for vibrant, long-lasting coloration in plastics.',
    applications: ['Consumer Goods', 'Packaging (Rigid)'],
    specs: [
      { property: 'Color Tone', value: 'Signal Red / Ruby Red' },
      { property: 'Pigment Concentration', value: '30%' },
      { property: 'Heat Resistance', value: '260°C' },
      { property: 'Carrier', value: 'PE / Universal' }
    ]
  },
  {
    id: 'blue-masterbatch',
    name: 'Blue Masterbatch',
    category: 'Color Masterbatch',
    categoryBadge: 'Color Masterbatch',
    categoryBadgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUzLGq95Qf9Pr5LORuGEZS7QCKipaG-Xmzrdxhc27NU_gd7-hcvUI_QUAcbJl5JIwLLJnPFA1Y2ebVmNzxyVFwHS1TT-znNljC3MqMXWtA6yXjwrRVP6jzhQOql1HOSZDC-IcIDPQfklQ0ObRDXEsXDcimQsJDm_OhIrovu5TU2owckaQEbTfRN0Wh2qLAbJEQOnZ5Q1lALQf_oaKWcl618lUeJfluxa2vFyCS_OmY_-k8i4QI_bh_ZA',
    description: 'Premium blue masterbatch offering deep, consistent coloration and UV resistance. Ideal for packaging and consumer goods applications.',
    applications: ['Packaging (Rigid)', 'Consumer Goods'],
    specs: [
      { property: 'Phthalo Blue Grade', value: '15:3 High Dispersion' },
      { property: 'Light Fastness', value: 'Grade 8' },
      { property: 'Heat Resistance', value: '280°C' }
    ]
  },
  {
    id: 'green-masterbatch',
    name: 'Green Masterbatch',
    category: 'Color Masterbatch',
    categoryBadge: 'Color Masterbatch',
    categoryBadgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATqoh_1aD6ARKTb4Drxddp5xKXxgFllm_TDRhsef_REn92JK_f6XZw0xnXiYWbTGYUeF0tfOukUJQY4yd-V8gmtNjD4g8XOvonePl6hszY6L4P1Vd4LcjpMz7ytTUoR2AO3lonE1kf_HsvFXLP0uB2iBVChTlYz3phlLBKKkOrjnB0uXl-5hcb7B2hhQA0weHkQ31rekyL82jMr6PZJW6tfHEYmm7CS0PV_70gPHZfqvn9pTxXDzABAQ',
    description: 'High-performance green masterbatch designed for excellent color consistency and dispersion across various polymer matrices.',
    applications: ['Consumer Goods', 'Construction Materials'],
    specs: [
      { property: 'Pigment Content', value: '25%' },
      { property: 'Melt Index', value: '10 g/10min' },
      { property: 'Weathering Grade', value: 'High Exterior Rating' }
    ]
  },
  {
    id: 'yellow-masterbatch',
    name: 'Yellow Masterbatch',
    category: 'Color Masterbatch',
    categoryBadge: 'Color Masterbatch',
    categoryBadgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcCXIgBgCAyyXX-MytTd24I7XcGa0gRalOLcD6f809BnwLv4-YC5EF4VtR3N1IGaxqqN5c5fVvDBHK7afQ3HasT3_Q3krUlYMZoPV_qzSkmhGoBtkS9mCHRh39SQpmBQXZaxhFOdXlXP7xtLgNedKagf_lFdIQh6qDhk7mpWNEOqZDnp5-I_LaoKTnAL8sQn_v4YlVZyhfoFP6zIDJemgc5TcJM5ubGGBxrE1OCTmOcFkOqQWU844qDw',
    description: 'Vibrant yellow masterbatch offering high opacity and excellent heat resistance, suitable for a wide range of plastic manufacturing processes.',
    applications: ['Packaging (Flexible)', 'Consumer Goods'],
    specs: [
      { property: 'Pigment Type', value: 'Organic Yellow' },
      { property: 'Opacity', value: 'High Cover Rate' },
      { property: 'Heat Stability', value: '270°C' }
    ]
  },
  {
    id: 'filler-masterbatch-caco3',
    name: 'CaCO3 Filler Masterbatch',
    category: 'Filler Masterbatch',
    categoryBadge: 'Filler Masterbatch',
    categoryBadgeClass: 'bg-secondary-fixed-dim text-on-secondary-fixed-variant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaHuwp95I5bop09T9h2dJPID_iS5IXbyjyte7lnGMR780l4y-oHkmiYbRxQUsT_xy73xlyKio3YXC5q9DtYFVsWNlm57OSy3LlcBqn57ymTzkPiCcwRxQYaSL3Tt4s2nTb1xOnRfmW7yGmnCm-EgptAmun9rR1GfKpKu6PUTa67CgeKGgYIYmOOfzqUFzefxmvddTuJtsrk1wj7NgS6EWZ3Fi4FnNGhJ66zjYvBFBRiBpr0_56_n3pwA',
    description: 'High-quality calcium carbonate (CaCO3) filler masterbatch designed to improve product rigidity, heat resistance, and reduce production costs.',
    applications: ['Construction Materials', 'Packaging (Rigid)'],
    specs: [
      { property: 'CaCO3 Purity (%)', value: '80% - 85%' },
      { property: 'Particle Size (D50)', value: '1.2 - 2.0 microns' },
      { property: 'Carrier', value: 'PE / PP' },
      { property: 'Whiteness', value: '> 95%' }
    ]
  },
  {
    id: 'uv-masterbatch',
    name: 'UV Stabilizer Masterbatch',
    category: 'Functional & Additive Masterbatch',
    categoryBadge: 'Functional & Additive',
    categoryBadgeClass: 'bg-surface-tint text-on-primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBge4mzkeI8agEeHSxv8yOfN3Kg2hx3C0UhE2PyjftpsNkajnlRJVVzu_Je3TjKGUjX0Dsm_9W-sqinm5OX9lMNuSoMLpreFWic1ZV5RsYAf5jr9lHRhgz2ffTMMuiV58bhwzSKzhk0znf6nWkhAd5gjvboYR1WKLrNDhN87V60KIR3SzoiAZPRD0tjy6OLay5IO1XJQZwSSzLWJyMLUgXUfRzo6nbQtRlqJm-YyqqAGQl4_paIqwpCBg',
    description: 'Provides superior protection against ultraviolet degradation, extending the lifespan and preserving the mechanical properties of outdoor plastic products.',
    applications: ['Construction Materials', 'Automotive Components'],
    specs: [
      { property: 'Active Ingredient', value: 'HALS (Hindered Amine Light Stabilizer)' },
      { property: 'Additive Loading', value: '10% - 20%' },
      { property: 'Dosage Recommendation', value: '1.0% - 3.0%' }
    ]
  }
];
