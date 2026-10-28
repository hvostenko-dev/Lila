# Lila — Psychological Transformational Game Landing Page

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-Scoped_Styles-1572B6?logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?logo=vercel&logoColor=white)](https://lila-neon.vercel.app/)

A single-page promotional landing website for the psychological transformational game **"Lila: A New Perspective"** (*«Лила: Новый взгляд»*) and private psychotherapy sessions led by practicing psychotherapist **Ira Tishchenko** in Ashdod.

🔗 **Live Demo:** [https://lila-neon.vercel.app/](https://lila-neon.vercel.app/)

---

## ✨ Key Features

- **Scroll-Spy Navigation & Mobile Drawer (`NavBar`)** — Sticky header with `IntersectionObserver` active section tracking (`#hero`, `#game`, `#pricing`, `#faq`, `#contact`), accessible mobile menu (`aria-expanded`, `Escape` key handler), and quick booking CTA.
- **Multilingual: Russian / English / Hebrew (`src/i18n`)** — Lightweight dependency-free i18n via React Context. Language switcher buttons (RU / EN / עב) in the header, choice persisted in `localStorage` with browser-language auto-detection, full **RTL** layout for Hebrew (`dir="rtl"`, CSS logical properties, Hebrew fonts), localized document title / meta tags and WhatsApp booking messages.
- **Hero Showcase (`Hero`)** — Highlights core benefits of the transformational game, facilitator credentials, and direct Call-to-Action links.
- **Game Overview & Session Flow (`AboutGame`)** — Presents session metadata, topic badges, a 6-card value grid (`<article>`), and a 5-step walkthrough of how a session unfolds.
- **Multi-Format Pricing (`Pricing`)** — Compares 3 participation formats (Mini-Group Game, 1-on-1 Individual Game, and Private Psychotherapy Consultation) with pre-filled WhatsApp booking messages for each tier.
- **Interactive Accessible FAQ (`Faq`)** — Accordion component (`aria-expanded`, `aria-controls`, smooth CSS grid row transitions) addressing common questions before a session.
- **Two-Column Contact & Venue Map (`Contact`)** — Direct one-click integration with **WhatsApp**, **Telegram**, phone, email, Facebook, and an interactive **Google Maps** card for the offline venue in Ashdod.
- **SEO & Accessibility Best Practices** — Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<figure>`), skip-to-content keyboard link, `prefers-reduced-motion` support, Open Graph / Twitter meta tags, and JSON-LD `ProfessionalService` structured data.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **UI Library** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 7](https://vite.dev/) (`@vitejs/plugin-react-swc`) |
| **Styling** | Scoped CSS Modules (`*.module.css`) & CSS Custom Properties |
| **Typography** | Google Fonts (`Cormorant Garamond` & `Inter`; `Frank Ruhl Libre` & `Heebo` for Hebrew) |
| **Code Quality** | ESLint 9 (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
Lila/
├── public/
│   └── favicon.svg              # Custom lotus vector favicon
├── src/
│   ├── assets/
│   │   └── ira.jpg              # Facilitator portrait
│   ├── components/
│   │   ├── NavBar.jsx           # Scroll-spy header & responsive mobile menu
│   │   ├── NavBar.module.css
│   │   ├── Hero.jsx             # Hero section with facilitator intro & CTAs
│   │   ├── Hero.module.css
│   │   ├── AboutGame.jsx        # Game description, 6 value cards & 5-step process
│   │   ├── AboutGame.module.css
│   │   ├── Pricing.jsx          # 3 participation tiers with custom WhatsApp links
│   │   ├── Pricing.module.css
│   │   ├── Faq.jsx              # Accessible FAQ accordion
│   │   ├── Faq.module.css
│   │   ├── Contact.jsx          # Direct messengers, social links & Google Maps card
│   │   ├── Contact.module.css
│   │   ├── LanguageSwitcher.jsx # RU / EN / HE language toggle buttons
│   │   ├── LanguageSwitcher.module.css
│   │   ├── Footer.jsx           # Semantic footer with quick navigation & back-to-top
│   │   └── Footer.module.css
│   ├── data/
│   │   └── content.js           # Language-independent data (contacts, section ids)
│   ├── i18n/
│   │   ├── locales/             # ru.js, en.js, he.js — all translatable texts
│   │   ├── config.js            # Supported languages, detection & persistence
│   │   ├── LanguageContext.js   # React context
│   │   ├── LanguageProvider.jsx # Provider: sets <html lang/dir>, title & meta
│   │   └── useLanguage.js       # Hook: { lang, dir, setLang, t }
│   ├── App.jsx                  # Root layout assembling landmarks & sections
│   ├── index.css                # Design tokens, reset & accessibility utilities
│   └── main.jsx                 # React DOM root entrypoint
├── index.html                   # HTML5 shell, SEO meta tags & JSON-LD schema
├── eslint.config.js             # ESLint flat config
├── vite.config.js               # Vite + React SWC configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm** `>= 9.x`

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/ilyajavadeveloper/Lila.git

# 2. Navigate to the project directory
cd Lila

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with Hot Module Replacement (HMR) |
| `npm run build` | Builds the optimized production bundle into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs ESLint across the project |

---

## 👤 Author

**Ilya** — [@ilyajavadeveloper](https://github.com/ilyajavadeveloper)
