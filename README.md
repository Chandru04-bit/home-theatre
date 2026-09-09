# AVÉRA CINEMA — Home Theatre & Audio System Installation Service

A luxury, cinematic, and responsive multi-page website built for **AVÉRA CINEMA**, a bespoke residential home theatre and professional audio installation service.

Designed with a dark architectural aesthetic (`#080808` / `#0d0d0d` / `#121212`), refined champagne gold accents (`#d4af37`), and typography set in **Montserrat** and **Inter**.

---

## 🏛️ Project Structure

```
home-theatre-website/
│
├── index.html                  # Cinematic Home Page & Showcase
├── services.html               # Comprehensive Engineering & Installation Services
├── products.html               # Curated Audiophile Equipment Showcase
├── product-details.html        # Dynamic Dedicated Product Details Page
├── gallery.html                # High-Resolution Installation Portfolio & Modal
├── contact.html                # Consultation Booking Form with Live Validation
│
├── css/
│   └── style.css               # Production Stylesheet (CSS Variables, Dark/Light Themes)
│
├── js/
│   ├── script.js               # Global JavaScript (Navigation, Theme, Direction, Forms)
│   ├── products-data.js        # Curated Equipment Catalog Dataset (Specs, Features)
│   └── product-detail.js       # Dynamic Product Details Page Controller
│
├── images/
│   ├── hero/
│   │   ├── hero-home-theatre.jpg
│   │   └── hero-audio-system.jpg
│   │
│   ├── services/
│   │   ├── surround-sound.jpg
│   │   ├── projector-setup.jpg
│   │   └── acoustic-treatment.jpg
│   │
│   ├── products/
│   │   ├── sony.jpg
│   │   ├── bose.jpg
│   │   ├── yamaha.jpg
│   │   ├── denon.jpg
│   │   └── jbl.jpg
│   │
│   └── gallery/
│       ├── theatre-01.jpg
│       ├── theatre-02.jpg
│       ├── theatre-03.jpg
│       ├── theatre-04.jpg
│       ├── theatre-05.jpg
│       └── theatre-06.jpg
│
└── README.md                   # Comprehensive Project Documentation
```

---

## 🛠️ Technology Stack

- **HTML5**: Semantic markup, accessible landmarks, and rich Open Graph SEO meta tags.
- **CSS3**: Custom CSS variables, glassmorphism, responsive grid, and custom hover states.
- **Vanilla JavaScript (ES6+)**: Zero framework dependencies; handles counters, filtering, animations, and form validation.
- **Bootstrap 5 (v5.3.2)**: Layout grid system, collapse navigation, modals, and carousel.
- **Bootstrap Icons (v1.11.3)**: High-precision SVG iconography.
- **Google Fonts**: Montserrat (headings, tags) and Inter (body copy, specifications).

> **Note**: Strictly NO React, Vue, Angular, Tailwind, PHP, Node.js, or backend runtime required. Runs in any modern browser right out of the box.

---

## ✨ Key Features & Page Breakdown

### 1. Global Navigation (`navbar-custom`)
- **Transparent Over Hero**: Blends seamlessly with high-res hero imagery on initial load.
- **Dynamic Scroll Blur**: Morphs to a frosted dark background (`rgba(8, 8, 8, 0.95)`) with subtle gold border upon scrolling > 50px.
- **Active State Highlighting**: Detects the current page URL and underlines the corresponding navigation item.
- **Mobile Responsive Drawer**: Auto-collapses the menu whenever a user taps a link.

### 2. Home Page (`index.html`)
- **Cinematic Hero**: Ambient zoom animation, dark vignette overlay, and animated scroll-down mouse icon.
- **Animated Statistics Counters**: IntersectionObserver counts up installations (500+), experience (12+), brands (25+), and client satisfaction (98%).
- **Interactive Process Pipeline**: 4-step workflow (*Consultation*, *Room Assessment*, *System Design*, *Installation*) with connected timeline lines on desktop and responsive stacking on mobile.
- **Customer Testimonial Carousel**: Smooth Bootstrap carousel featuring verified client reviews and star ratings.

### 3. Services Page (`services.html`)
- Detailed architectural breakdown of 6 core installation solutions:
  1. **Surround Sound Installation** (Dolby Atmos, 5.1, 7.1, 7.2.4 calibration)
  2. **Projector & Display Setup** (Native 4K laser optics, UST, acoustic screens)
  3. **Acoustic Treatment** (Bass management, room isolation, flutter echo reduction)
  4. **AV Receiver & Amplifier Setup** (16-ch processors, HDMI 2.1, thermal rack management)
  5. **Speaker Installation** (Zero-bezel architectural in-wall & ceiling speakers)
  6. **Complete Custom Home Cinema** (Turnkey cinema design, starlight ceilings, automation)

### 4. Products & Brands Page (`products.html`)
- **Interactive Dual Filters**: Filter equipment by **Brand** (*Sony, Bose, Yamaha, Denon, JBL, Marantz*) and **Category** (*Projectors, AV Receivers, Speakers, Subwoofers, Soundbars, Displays*) without page reload.
- **Dynamic Redirection**: Clicking any product card, image, title, or "Enquire Now" button dynamically redirects to its dedicated `product-details.html?id=<product-id>`.

### 5. Dedicated Product Details Page (`product-details.html`)
- **Dynamic Deep-Linking**: Dynamically renders individual specifications, images, features, and pricing context for any equipment item via URL parameters (`?id=...`).
- **Showcase Matrix**: Large high-resolution imagery, thumbnail previews, verified authorized dealer badges, and custom room calibration guarantee.
- **Comprehensive Technical Specs**: Structured table with certified laboratory parameters (frequency response, DACs, throw ratio, SPL, dimensions, weight).
- **Signature Features Grid**: 6 architectural audio/video highlights per product with custom iconography.
- **Consultation & Enquiry Modals**: High-end quotation request modal pre-filled with the current product, with direct handoff to `contact.html?product=...`.
- **Intelligent Related Products**: Contextual cross-recommendations dynamically mapped to complementary equipment.

### 6. Installation Gallery (`gallery.html`)
- **Category Filter Tabs**: *All*, *Home Theatres*, *Audio Systems*, *Projectors*, *Acoustic Treatment*.
- **Interactive Lightbox Modal**: Clicking any project reveals the full high-res photo, location, system specifications (Dolby Atmos configuration, display size, acoustic decoupling method).

### 6. Consultation Booking (`contact.html`)
- **Custom-Validated Form**: Validates full name, 10-digit phone number regex, valid email format, and future appointment date.
- **Luxury Success Modal**: Displays a formatted consultation summary upon valid submission.
- **Interactive Studio Map**: Embedded Google Maps view with dark cinema aesthetics.

---

## 📱 Responsive Breakpoints Tested

- **Large Displays (1920px, 1440px, 1200px)**: Multi-column grids, horizontal timeline connector, generous whitespace.
- **Tablets (768px – 992px)**: 2-column card layouts, comfortable touch targets.
- **Mobile Handsets (375px, 390px, 576px)**: Stacked single-column layouts, touch-friendly navigation, zero horizontal scroll.

---

## 🚀 How to Run Locally

1. Clone or download the `home-theatre-website` folder.
2. Open `index.html` directly in any modern browser (Chrome, Edge, Safari, Firefox), or launch via a local HTTP server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using VS Code Live Server extension
   ```
3. Navigate to `http://localhost:8000`.

---

## 🔒 Code Quality & Standards

- **Semantic HTML5** tags used throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **WAI-ARIA Accessibility**: Proper `aria-label`, `aria-expanded`, and form input labeling.
- **No Console Errors**: Strict event listeners and error-safe JavaScript DOM queries.
- **Optimized Media**: Responsive images with `loading="lazy"` on all below-the-fold content.

---

© 2026 AVÉRA Cinema. All Rights Reserved.
