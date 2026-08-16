# APHN Official Website Codebase

Official website and member portal application for the **Association of Private Hospital and Nursing Home (APHN)** West Bengal (domain: `aphnwb.com`).

This repository is built using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, providing a dynamic, fully responsive, and premium web experience.

---

## 🛠️ Tech Stack & Key Libraries

- **Core Framework**: Next.js 14+ (App Router) & React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS (fully customized using variables/design tokens in `tailwind.config.ts` and `src/styles/globals.css`)
- **Icons**: Lucide React
- **Form Handling & Validation**: React Hook Form + Zod
- **Micro-Interactions**: Framer Motion (can be loaded for dynamic page elements)
- **Data Engine**: Decoupled JSON data files under `src/data/` for easy CMS/API integration later.

---

## 📁 Repository Directory Structure

```
aphn-website/
├── README.md
├── PLACEHOLDER_CONTENT.md        # List of assets & data to swap before launch
├── .env.example                  # Environmental variables guide
├── package.json                  # Dependencies registry
├── tailwind.config.ts            # Color tokens and theme configurations
├── next.config.js                # Next.js environment configurations
├── postcss.config.js
├── public/
│   ├── logo.svg                  # SVG placeholder logo
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── layout.tsx            # Global layout (Navbar, Footer, Font definitions)
    │   ├── page.tsx              # Home Page (Interactive search, priority grid, feeds)
    │   ├── about/                # About APHN, Mission & Messages
    │   ├── leadership/           # Governing Body & District Coordinators
    │   ├── membership/           # Eligibility, categories, fee calculations
    │   │   └── apply/            # [Phase 2] Multi-step online enrollment form
    │   ├── directory/            # Searchable and multi-filterable Member Directory
    │   ├── government-collaboration/ # Government collaboration pillars
    │   ├── safety/               # Patient & Healthcare-Worker safety guidelines
    │   ├── news/                 # News list & dynamic [slug] article details
    │   ├── events/               # Events calendar & dynamic [slug] registration portals
    │   ├── committees/           # List of 13 committees & chairpersons
    │   ├── resources/            # Publications PDF download vault
    │   ├── contact/              # HQ contacts, department routing & validated forms
    │   ├── grievance/            # [Phase 2] Secure grievance representation form
    │   ├── careers/              # [Phase 2] Health vacancy job board & modals
    │   └── portal/               # [Phase 2] Member administrative login & dashboard shell
    ├── components/
    │   ├── layout/               # Navbar & Footer
    │   └── ui/                   # Reusable components (Button, Card, Badge)
    ├── data/
    │   ├── org.json              # Society profile and fee tiers
    │   ├── leadership.json       # State office bearers registries
    │   ├── committees.json       # Committee rosters
    │   ├── members.json          # Example directory database
    │   ├── news.json             # Press circular database
    │   └── events.json           # Assemblies calendar database
    └── styles/
        └── globals.css           # Tailwind imports and root CSS variables
```

---

## 🚀 Setup & Installation Instructions

To build, test, or launch the website locally:

### 1. Prerequisites
Ensure you have **Node.js 18+** and **npm** installed on your system.

### 2. Install Dependencies
Run the installation command in the root folder to download required modules:
```bash
npm install
```

### 3. Run Development Server
Start the local server to inspect page rendering and form inputs:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 4. Build for Production
Run the build script to compile and check TypeScript configurations:
```bash
npm run build
```

---

## 🔒 Security & Privacy Notice

1. **Non-PHI Grievances**: The Grievance Representation Form strictly enforces data protocols preventing the submission of patient diagnostics or Protected Health Information (PHI), conforming with privacy guidelines.
2. **Office Bearers Contacts**: Contact records are routed to a central registry address (`info@aphnwb.com`) to prevent public phone harvesting.
