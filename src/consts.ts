// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";

/**
 * Who the site is about. Anything that would otherwise be pasted into a
 * second template belongs here.
 */
export const PROFILE = {
  name: "André Brandão",
  email: "eu@andrebrandao.dev",
  github: "https://github.com/andre-brandao",
  linkedin: "https://www.linkedin.com/in/andr%C3%A9-brand%C3%A3o-719684239/",
} as const;

export const SITE_TITLE: string | Multilingual = `${PROFILE.name} Portfolio`;

export const SITE_DESCRIPTION: string | Multilingual = {
  en: "André Brandão's Portfolio",
  pt: "Portfólio André Brandão",
};

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
  en: "This page is not available in your language.",
  pt: "Esta página não está disponível no seu idioma.",
};

// Countries highlighted on the globe. Names must match world.json.
export const VISITED_COUNTRIES = ["Brazil", "USA", "Canada", "Peru", "Chile"] as const;
