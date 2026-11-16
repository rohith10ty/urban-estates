# Urban Estates — Luxury Real Estate & Architectural Residences

![Urban Estates Banner](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=80)

**Urban Estates** is an ultra-minimalist, high-end real estate web application curated for collectors of exceptional architecture, prime residential compounds, sky penthouses, and trophy commercial assets across global metropolitan capitals.

---

## 🏛 Design Ethos & Architecture

- **Minimalist Two-Color Identity**: Form follows function with a disciplined two-color palette — **Architectural Deep Charcoal / Onyx (`#0D0D0D`)** and **Warm Sand Taupe / Bronze (`#C5A880`)** set against a crisp canvas, avoiding visual noise or distracting gradients.
- **Typography**: Clean, geometric modernism powered by Google Font **Outfit** (`font-family: 'Outfit', sans-serif`).
- **Lenis Smooth Scroll**: Butter-smooth inertial scrolling throughout the entire application powered by Lenis, configured with smooth wheel interpolation and automatic route transition reset.
- **Scrollbar Elimination**: System-wide invisible scrollbars across Chrome, Safari, Firefox, and Edge while retaining 100% natural, fluid mouse wheel and trackpad scroll capability.
- **Standout Minimal Hero**: Editorial hero composition featuring high-resolution architectural photography, an integrated multi-criteria search console (Buy / Rent / Commercial), quick valuation brackets, bedroom selectors, and live transacted portfolio statistics.

---

## ✨ Core Features & Pages

### 1. Home Page (`/`)
- **Hero Console**: Inline search bar supporting instant filtering by purpose, location, architectural typology, bedrooms, and valuation range.
- **Featured Prime Mandates**: Interactive showcase of trophy residences with category filter pills (Villas, Penthouses, Commercial).
- **Curated Collections**: Architectural typologies (Sky Penthouses, Architectural Compounds, Prime Commercial, Waterfront Estates).
- **The Urban Estates Standard**: Core advisory pillars highlighting off-market discretion, architectural integrity verification, and cross-border metropolitan reach.
- **Client Endorsements**: Confidential testimonials from family offices, founders, and international collectors.

### 2. Property Listings & Discovery (`/listings`)
- **Comprehensive Filtering**:
  - Purpose switcher: All, For Sale, For Lease, Commercial
  - Free-text keyword search across titles, addresses, and architectural descriptions
  - Location filter (Beverly Hills, Manhattan NY, Miami Beach FL, London UK, Dubai UAE, Aspen CO)
  - Architectural typology filter (Villa, Penthouse, Waterfront, Modern Apartment, Townhouse, Commercial Office/Retail)
  - Bedroom counts (3+, 4+, 5+, 6+ beds)
  - Price brackets with rental and purchase models
- **Display Modes**: Toggle between **Grid View** and **List View**.
- **Sorting**: Curated/Featured, Price (Low to High), Price (High to Low), Interior Area (Largest First).
- **Interactive State**: Real-time counter of matching properties and single-click filter reset.

### 3. Individual Property Details (`/property/:id`)
- **Dynamic Gallery & Fullscreen Lightbox**:
  - Interactive hero photo with synchronized thumbnail strip.
  - Fullscreen Lightbox modal with keyboard arrow navigation, image counter, and thumbnail tray.
- **Architectural Specifications**: Bed/bath counts, interior square footage, lot size, year built, garage capacity, property ID, and architectural pedigree.
- **Curated Amenities**: Dedicated amenity chips spanning private wellness, infinity pools, biometric security, wine galleries, and superyacht docks.
- **Financial & Mortgage Estimator**: Real-time monthly payment calculator incorporating property price, down payment percentage, interest rate, loan term, property taxes, and insurance.
- **Private Showing Modal**: Interactive appointment scheduler supporting in-person tours and virtual walkthroughs with instant confirmation reference generation.
- **Assigned Private Advisor**: Dedicated senior broker card with credentials, direct contact links, and immediate mandate inquiry form.
- **Complementary Estates**: Recommended similar properties based on typology and purpose.

### 4. Sell with Us (`/sell`)
- **Private Representation Overview**: Benefits of listing with Urban Estates (confidential off-market vault, museum-grade production, global capital reach, record price benchmarks).
- **Interactive Valuation Request Form**: Step-by-step submission capturing property coordinates, architectural specs, estimated valuation, and representation preference (Private Vault vs. Public Launch).
- **Four-Phase Listing Timeline**: Transparent overview from appraisal and digital twin production to vetted showings and discreet escrow closing.

### 5. About Us (`/about`)
- **Architectural Heritage**: The founding ethos of treating real estate as collectible architectural provenance.
- **Four Service Pillars**: Residential Acquisition, Commercial Advisory, Private Off-Market Vault, and Architectural Valuation.
- **Senior Leadership Desk**: Partner profiles across Beverly Hills, New York, London Mayfair, and Dubai DIFC.
- **Global Metropolitan Footprint**: Contact and location directory across four global hubs.

### 6. Contact Us (`/contact`)
- **Confidential Inquiry Form**: Name, email, direct phone, primary interest, valuation target, and message with instant confirmation ticket generator.
- **Direct Hub Information**: Physical addresses, direct phones, emails, and operating hours for each office.
- **Frequently Addressed Inquiries (FAQ)**: Expandable accordion addressing off-market access, international LLC acquisitions, privacy protocols, and appraisal methodology.

### 7. Saved Residences Drawer (Global Wishlist)
- Persistent bookmarking system saved to `localStorage`.
- Slide-over drawer accessible from any page via the navbar bookmark counter.
- Quick preview of bookmarked estates with direct links, deletion actions, and one-click inquiry.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Typography**: [Outfit via Google Fonts](https://fonts.google.com/specimen/Outfit)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/rohith10ty/urban-estates.git

# Navigate to project folder
cd urban-estates

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist` directory.

---

## 🌐 Deployment

The application is structured for instant zero-configuration deployment to **Vercel** or **Netlify**:

### Deploy on Vercel
1. Import the repository in [Vercel Dashboard](https://vercel.com/new).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Deploy.

---

## 📄 License
This project is licensed under the MIT License.
