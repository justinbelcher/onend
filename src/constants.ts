import type { NavLink } from "@types";

export const THEME_COLOR = "#f3f1ef";
export const SITE_TITLE = "On end studio";
export const SITE_DESCRIPTION = {
  short:
    "Justin Belcher is a designer and furniture maker based out of San Francisco, California.",
  long: "Justin Belcher is a designer and furniture maker based out of San Francisco, California. His work focuses on unexpected forms grounded in Nordic vernacular.",
};
export const SOCIAL_IMAGE = "https://onend.studio/onend-social.jpg";
export const SOCIAL_LINKS = {
  email: "hi@onendstudio.com",
  instagram: "https://instagram.com/onendstudio",
};
export const NAV_LINKS: NavLink[] = [
  {
    label: "work",
    href: "/work",
  },
  {
    label: "about",
    href: "/about",
  },

  {
    label: "contact",
    href: `mailto:${SOCIAL_LINKS.email}`,
  },
];
export const PROJECT_ORDER = [
  "house-numbers",
  "critter-table",
  "custom-kitchen",
  "midcentury-crib",
  "library-builtins",
  "oak-desk",
  "calhoun-table",
  "stands",
  "slab-table",
  "changing-table",
  "station-brush",
  "credenza",
  "floating-tables",
  "wine-storage",
  "bath-tray",
  "serving-boards",
  "knife-holer",
];
export const MAX_GRID_WIDTH = 640;
export const MAX_HERO_WIDTH = 1200;
