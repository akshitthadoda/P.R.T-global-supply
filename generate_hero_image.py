import subprocess
import os

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051329"/>
      <stop offset="40%" stop-color="#0a2240"/>
      <stop offset="100%" stop-color="#081c34"/>
    </linearGradient>

    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3a506b"/>
      <stop offset="50%" stop-color="#6c7a89"/>
      <stop offset="100%" stop-color="#212f3d"/>
    </linearGradient>

    <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>

    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.6)"/>
      <stop offset="30%" stop-color="rgba(255,255,255,0.15)"/>
      <stop offset="70%" stop-color="rgba(255,255,255,0.05)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.4)"/>
    </linearGradient>

    <radialGradient id="lightSpot" cx="80%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#4a90e2" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#081c34" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass Bowl Reflections -->
    <linearGradient id="bowlRim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#70a1ff" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.9"/>
    </linearGradient>

    <!-- Filter for subtle drop shadow -->
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Base Industrial Background -->
  <rect width="1600" height="1000" fill="url(#bgGrad)"/>
  <rect width="1600" height="1000" fill="url(#lightSpot)"/>

  <!-- Industrial Plant Overhead Beams & Ceiling Grid -->
  <g stroke="#1a365d" stroke-width="3" opacity="0.4">
    <line x1="0" y1="120" x2="1600" y2="120"/>
    <line x1="0" y1="200" x2="1600" y2="200"/>
    <line x1="400" y1="0" x2="400" y2="300"/>
    <line x1="800" y1="0" x2="800" y2="300"/>
    <line x1="1200" y1="0" x2="1200" y2="300"/>
  </g>

  <!-- Background Extruders, Hoppers & Stainless Steel Piping -->
  <g transform="translate(750, 40)" filter="url(#shadow)">
    <!-- Stainless Steel Hopper Funnel -->
    <path d="M 500,0 L 700,0 L 630,220 L 570,220 Z" fill="url(#metalGrad)" stroke="#1e293b" stroke-width="2"/>
    <ellipse cx="600" cy="0" rx="100" ry="25" fill="#52606d"/>
    <rect x="560" y="220" width="80" height="120" fill="url(#metalGrad)"/>

    <!-- Large Industrial Extruder Body -->
    <rect x="350" y="260" width="450" height="140" rx="8" fill="#1e293b" stroke="#334155" stroke-width="4"/>
    <rect x="370" y="280" width="200" height="100" fill="#0f172a"/>
    <circle cx="420" cy="330" r="25" fill="#38bdf8" opacity="0.8"/>
    <rect x="600" y="280" width="180" height="100" fill="#334155"/>

    <!-- Overhead Pipes and Ducts -->
    <path d="M 200,0 L 200,180 L 500,180" stroke="url(#metalGrad)" stroke-width="28" fill="none" stroke-linecap="round"/>
    <path d="M 240,0 L 240,140 L 530,140" stroke="url(#metalGrad)" stroke-width="18" fill="none" stroke-linecap="round"/>

    <!-- Safety Walkway & Yellow Handrails -->
    <rect x="50" y="180" width="550" height="16" fill="#f59e0b"/>
    <g stroke="#f59e0b" stroke-width="6" stroke-linecap="round">
      <line x1="80" y1="100" x2="80" y2="180"/>
      <line x1="220" y1="100" x2="220" y2="180"/>
      <line x1="360" y1="100" x2="360" y2="180"/>
      <line x1="500" y1="100" x2="500" y2="180"/>
      <line x1="80" y1="100" x2="500" y2="100"/>
      <line x1="80" y1="140" x2="500" y2="140"/>
    </g>
  </g>

  <!-- Industrial Floor Gradient -->
  <polygon points="0,520 1600,450 1600,1000 0,1000" fill="#07162c" opacity="0.95"/>

  <!-- Middleground: FIBC Bulk Bags (Super Sacks) on Wooden Pallets -->
  <!-- Pallet Row 1 (Far Left) -->
  <g transform="translate(100, 420)" filter="url(#shadow)">
    <!-- Wooden Pallet -->
    <rect x="0" y="240" width="220" height="25" fill="#85582c"/>
    <rect x="20" y="240" width="30" height="25" fill="#5c3a1d"/>
    <rect x="95" y="240" width="30" height="25" fill="#5c3a1d"/>
    <rect x="170" y="240" width="30" height="25" fill="#5c3a1d"/>

    <!-- Bulk Bag Stack 1 -->
    <path d="M 15,30 Q 110,10 205,30 Q 220,130 210,230 Q 110,245 10,230 Q 0,130 15,30 Z" fill="url(#bagGrad)" stroke="#94a3b8" stroke-width="2"/>
    <!-- Bag Loops -->
    <path d="M 25,30 C 25,0 55,0 55,30" stroke="#0284c7" stroke-width="8" fill="none"/>
    <path d="M 165,30 C 165,0 195,0 195,30" stroke="#0284c7" stroke-width="8" fill="none"/>
  </g>

  <!-- Pallet Row 2 (Middle) -->
  <g transform="translate(360, 360)" filter="url(#shadow)">
    <!-- Wooden Pallet -->
    <rect x="0" y="280" width="280" height="30" fill="#85582c"/>
    <rect x="25" y="280" width="35" height="30" fill="#5c3a1d"/>
    <rect x="120" y="280" width="35" height="30" fill="#5c3a1d"/>
    <rect x="220" y="280" width="35" height="30" fill="#5c3a1d"/>

    <!-- Large FIBC Super Sack 2 -->
    <path d="M 20,30 Q 140,5 260,30 Q 275,150 265,270 Q 140,290 15,270 Q 5,150 20,30 Z" fill="url(#bagGrad)" stroke="#cbd5e1" stroke-width="3"/>
    <!-- Heavy Duty Lifting Loops -->
    <path d="M 35,30 C 35,-10 75,-10 75,30" stroke="#0284c7" stroke-width="12" fill="none"/>
    <path d="M 205,30 C 205,-10 245,-10 245,30" stroke="#0284c7" stroke-width="12" fill="none"/>
    <text x="140" y="160" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#475569" text-anchor="middle" letter-spacing="2">EVA RESIN / POLYMER</text>
  </g>

  <!-- Stacked Raw Material Bags on Pallet (Middle Right) -->
  <g transform="translate(680, 440)" filter="url(#shadow)">
    <!-- Pallet -->
    <rect x="0" y="220" width="260" height="25" fill="#85582c"/>
    <!-- Stacked 25kg Poly Bags -->
    <rect x="10" y="170" width="240" height="45" rx="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    <rect x="15" y="120" width="230" height="45" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
    <rect x="10" y="70" width="240" height="45" rx="10" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
    <rect x="20" y="20" width="220" height="45" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
  </g>

  <!-- Foreground: Glass Bowls Filled with Polymer Resin Pellets -->

  <!-- Bowl 1: White/Translucent Polymer Resin Pellets (Center Large) -->
  <g transform="translate(880, 580)" filter="url(#shadow)">
    <!-- Glass Bowl Base -->
    <ellipse cx="220" cy="220" rx="220" ry="110" fill="url(#glassGrad)" stroke="url(#bowlRim)" stroke-width="4"/>

    <!-- Heap of White Resin Pellets -->
    <path d="M 20,200 Q 220,40 420,200 Z" fill="#f8fafc"/>
    <!-- Individual Pellet Details -->
    <g fill="#ffffff" stroke="#e2e8f0" stroke-width="1">
      <ellipse cx="220" cy="90" rx="12" ry="8"/>
      <ellipse cx="190" cy="110" rx="10" ry="7"/>
      <ellipse cx="250" cy="105" rx="11" ry="8"/>
      <ellipse cx="160" cy="130" rx="12" ry="8"/>
      <ellipse cx="280" cy="125" rx="10" ry="7"/>
      <ellipse cx="220" cy="135" rx="13" ry="9"/>
      <ellipse cx="130" cy="155" rx="11" ry="8"/>
      <ellipse cx="310" cy="150" rx="12" ry="8"/>
      <ellipse cx="180" cy="165" rx="12" ry="8"/>
      <ellipse cx="260" cy="160" rx="13" ry="9"/>
      <ellipse cx="220" cy="175" rx="12" ry="8"/>
      <ellipse cx="90" cy="180" rx="11" ry="7"/>
      <ellipse cx="350" cy="175" rx="10" ry="7"/>
    </g>
    <!-- Glass Rim Reflection -->
    <ellipse cx="220" cy="220" rx="218" ry="108" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.8"/>
  </g>

  <!-- Bowl 2: Blue Masterbatch Pellets (Foreground Left-Center) -->
  <g transform="translate(520, 780)" filter="url(#shadow)">
    <ellipse cx="140" cy="110" rx="140" ry="70" fill="url(#glassGrad)" stroke="url(#bowlRim)" stroke-width="3"/>
    <path d="M 15,100 Q 140,20 265,100 Z" fill="#2563eb"/>
    <g fill="#3b82f6" stroke="#1d4ed8" stroke-width="1">
      <ellipse cx="140" cy="50" rx="8" ry="5"/>
      <ellipse cx="110" cy="65" rx="9" ry="6"/>
      <ellipse cx="170" cy="60" rx="8" ry="5"/>
      <ellipse cx="80" cy="80" rx="8" ry="5"/>
      <ellipse cx="200" cy="75" rx="9" ry="6"/>
      <ellipse cx="140" cy="80" rx="9" ry="6"/>
    </g>
  </g>

  <!-- Bowl 3: Beige/Natural EVA Resin Granules (Foreground Left) -->
  <g transform="translate(280, 720)" filter="url(#shadow)">
    <ellipse cx="150" cy="120" rx="150" ry="75" fill="url(#glassGrad)" stroke="url(#bowlRim)" stroke-width="3"/>
    <path d="M 15,110 Q 150,25 285,110 Z" fill="#fef08a"/>
    <g fill="#fde047" stroke="#eab308" stroke-width="1">
      <ellipse cx="150" cy="55" rx="9" ry="6"/>
      <ellipse cx="120" cy="70" rx="8" ry="5"/>
      <ellipse cx="180" cy="65" rx="10" ry="6"/>
      <ellipse cx="90" cy="85" rx="9" ry="6"/>
      <ellipse cx="210" cy="80" rx="8" ry="5"/>
      <ellipse cx="150" cy="85" rx="10" ry="6"/>
    </g>
  </g>

  <!-- Bowl 4: Natural Tan/Gold Resin Granules (Foreground Right) -->
  <g transform="translate(1320, 700)" filter="url(#shadow)">
    <ellipse cx="130" cy="120" rx="130" ry="65" fill="url(#glassGrad)" stroke="url(#bowlRim)" stroke-width="3"/>
    <path d="M 15,110 Q 130,30 245,110 Z" fill="#fde68a"/>
    <g fill="#fcd34d" stroke="#d97706" stroke-width="1">
      <ellipse cx="130" cy="60" rx="9" ry="6"/>
      <ellipse cx="100" cy="75" rx="8" ry="5"/>
      <ellipse cx="160" cy="70" rx="9" ry="6"/>
    </g>
  </g>

  <!-- Bowl 5: Black Masterbatch Granules (Far Right Middle) -->
  <g transform="translate(1420, 560)" filter="url(#shadow)">
    <ellipse cx="80" cy="70" rx="80" ry="40" fill="url(#glassGrad)" stroke="url(#bowlRim)" stroke-width="2"/>
    <path d="M 10,65 Q 80,15 150,65 Z" fill="#1e293b"/>
    <g fill="#334155" stroke="#0f172a" stroke-width="1">
      <ellipse cx="80" cy="35" rx="6" ry="4"/>
      <ellipse cx="60" cy="45" rx="6" ry="4"/>
      <ellipse cx="100" cy="42" rx="6" ry="4"/>
    </g>
  </g>

  <!-- Subtle Overall Dark Navy Vignette Layer for Depth -->
  <rect width="1600" height="1000" fill="url(#bgGrad)" opacity="0.1" style="mix-blend-mode: overlay;"/>
</svg>
'''

with open("public/hero-industrial-facility.svg", "w") as f:
    f.write(svg_content)

print("SVG created successfully at public/hero-industrial-facility.svg")

# Convert SVG to PNG using ImageMagick convert
try:
    cmd = ["convert", "-background", "none", "-density", "150", "public/hero-industrial-facility.svg", "public/hero-industrial-facility.png"]
    subprocess.run(cmd, check=True)
    print("PNG converted successfully at public/hero-industrial-facility.png")
except Exception as e:
    print("Convert failed:", e)

