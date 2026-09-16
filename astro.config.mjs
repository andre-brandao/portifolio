// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.andrebrandao.dev",
  integrations: [
    mdx(),
    sitemap({
      // error pages have no business in a sitemap
      filter: (page) => !page.includes("/404"),
      // pairs /en/<path> with /pt/<path> as xhtml:link alternates, matching
      // the hreflang tags Base.astro already puts in each page head
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", pt: "pt" },
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {

      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    },
  },
});
