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
      // Error pages have no business in a sitemap. The bare "/" is left out
      // too: it is a JS redirect stub, and the i18n grouping below would file
      // it under `en` next to /en/, emitting two conflicting hreflang="en"
      // alternates for the same set, which makes Google discard them all.
      filter: (page) => !page.includes("/404") && new URL(page).pathname !== "/",
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
