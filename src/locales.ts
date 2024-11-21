export const DEFAULT_LOCALE_SETTING: string = "en";

export const LOCALES_SETTING: LocaleSetting = {
  en: {
    label: "English",
  },
  pt: {
    label: "Português",
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: "rtl" | "ltr";
  };
} // refer: https://starlight.astro.build/reference/configuration/#locales
