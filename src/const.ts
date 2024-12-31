import type { NavLink } from "@types";

export const THEME_COLOR = "#f3f1ef";
export const SITE_TITLE = "On end studio";
export const SITE_DESCRIPTION = {
  short:
    "Justin Belcher is a designer and furniture maker based out of San Francisco, California.",
  long: "Justin Belcher is a designer and furniture maker based out of San Francisco, California. His work focuses on unexpected forms grounded in a modern Nordic vernacular.",
};
export const SOCIAL_IMAGE =
  "https://onend.studio/photos/coffeetable-front-640w.jpg";
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
