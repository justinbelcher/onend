# On End Studio - Woodworking Portfolio

Portfolio website for my woodworking business, built with [Astrojs](https://astro.build) and [TailwindCSS](https://tailwindcss.com).

## 🚀 Quick Start

```sh
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── src/
│   ├── components/            # Components and includes
│   ├── content/               # Content collections
│   │   ├── projects/          # Individual project entries
│   │   ├── text/              # Other reusable content
│   ├── layouts/
│   │   ├── Layout.astro       # Base layout template
│   │   ├── PageLayout.astro   # Common page template
│   │   └── GridLayout.astro   # Project grid template
│   ├── pages/                 # Site routes/pages
│   ├── scripts/               # Shared Typescript functions
│   └── styles/
│   │    ├── global.css        # Global styles
│   │    └── fonts.css         # Custom font definitions
│   ├── constants.ts           # Site-wide constants
│   ├── content.config.ts      # Content collection definition
│   └── types.ts               # Custom types
├── public/                    # Static assets (webfonts, favicon, etc)
├── tailwind.config.mjs        # Tailwind configuration
└── astro.config.mjs           # Astro configuration
```
