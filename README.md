# Lila — Psychological Transformational Game Landing Page

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-Scoped_Styles-1572B6?logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?logo=vercel&logoColor=white)](https://lila-neon.vercel.app/)

A single-page promotional landing website for the psychological transformational game **"Lila: A New Perspective"** (*«Лила: Новый взгляд»*), led by practicing psychotherapist **Ira Tishchenko** in Ashdod.

🔗 **Live Demo:** [https://lila-neon.vercel.app/](https://lila-neon.vercel.app/)

---

## ✨ Key Features

- **Dynamic Sticky Navigation (`NavBar`)** — Scroll-aware header that transitions smoothly as the user navigates across sections (`#hero`, `#game`, `#pricing`, `#contact`).
- **Hero Showcase (`Hero`)** — Highlights core benefits of the transformational game, facilitator bio, and direct Call-to-Action (CTA) anchor links.
- **Game Overview & Session Flow (`AboutGame`)** — Presents session metadata (duration, format, location), topic badges, a 6-card value grid, and a 5-step walkthrough of how a session unfolds.
- **Transparent Pricing (`Pricing`)** — Dedicated participation pricing card with session format details and quick booking link.
- **Multi-Channel Contact & Location (`Contact`)** — Direct one-click integration with **WhatsApp** (with pre-filled booking message), **Telegram**, phone, email, Facebook, and an embedded interactive **Google Maps** view for the offline venue in Ashdod.
- **Accessibility Integration** — Configured for the UserWay Accessibility Widget in `index.html` and semantic SVG iconography.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **UI Library** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 7](https://vite.dev/) (`@vitejs/plugin-react-swc`) |
| **Styling** | Scoped CSS Modules (`*.module.css`) & Global CSS |
| **Code Quality** | ESLint 9 (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
Lila/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                  # Facilitator photos & branding assets
│   ├── components/
│   │   ├── NavBar.jsx           # Scroll-aware top navigation bar
│   │   ├── NavBar.module.css
│   │   ├── Hero.jsx             # Hero section with facilitator intro & CTAs
│   │   ├── Hero.module.css
│   │   ├── AboutGame.jsx        # Game description, value cards & 5-step process
│   │   ├── AboutGame.module.css
│   │   ├── Pricing.jsx          # Session pricing & format summary
│   │   ├── Pricing.module.css
│   │   ├── Contact.jsx          # Social links, direct messengers & Google Maps embed
│   │   └── Contact.module.css
│   ├── App.jsx                  # Root layout assembling landing sections
│   ├── App.css                  # Application-level styles
│   ├── index.css                # Base reset & global typography/layout rules
│   └── main.jsx                 # React DOM root entrypoint
├── index.html                   # HTML shell & UserWay accessibility widget loader
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

## ⚙️ Configuration Notes

- **Accessibility Widget:** To enable your own UserWay account in production, replace `YOUR_ACCOUNT_ID` in `index.html` with your UserWay account key.

---

## 👤 Author

**Ilya** — [@ilyajavadeveloper](https://github.com/ilyajavadeveloper)
