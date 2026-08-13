# On End Studio - Woodworking Portfolio

Portfolio website for my woodworking business, built with [Astro](https://astro.build) and [StyleX](https://stylexjs.com).

## 🚀 Quick Start

```sh
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Typecheck (astro check)
bun run check
```

## 📁 Project Structure

```
/
├── src/
│   ├── components/            # Components (*.astro) and their styles (*.styles.ts)
│   ├── content/               # Content collections
│   │   ├── projects/          # Individual project entries
│   │   └── text/              # Other reusable content
│   ├── layouts/
│   │   ├── Layout.astro       # Base layout template
│   │   ├── PageLayout.astro   # Common page template
│   │   └── GridLayout.astro   # Project grid template
│   ├── pages/                 # Site routes/pages
│   ├── scripts/               # Shared TypeScript functions
│   ├── styles/
│   │   ├── global.css         # Browser reset + base element styles
│   │   ├── tokens.stylex.ts   # StyleX design tokens (colors)
│   │   ├── consts.stylex.ts   # StyleX constants (breakpoints, type scale, motion)
│   │   ├── shared.ts          # Shared StyleX styles (layout grid areas)
│   │   └── pages/             # Per-page StyleX styles
│   ├── constants.ts           # Site-wide constants
│   ├── content.config.ts      # Content collection definitions
│   └── types.ts               # Custom types
├── public/                    # Static assets (favicon, social image, etc)
├── astro.config.mjs           # Astro configuration (includes StyleX compiler plugin)
└── postcss.config.cjs         # StyleX CSS extraction
```

## 🎨 Styling

Styling uses [StyleX](https://stylexjs.com). Each `.astro` component defines its
styles in a sibling `*.styles.ts` file (StyleX's compiler only processes
TypeScript files) and applies them in the template with `stylex.attrs()`.
Design tokens live in `src/styles/tokens.stylex.ts` and
`src/styles/consts.stylex.ts`. The compiled CSS is injected at the `@stylex;`
directive in `src/styles/global.css`, which otherwise contains only the browser
reset and base element styles for markdown-rendered content.
