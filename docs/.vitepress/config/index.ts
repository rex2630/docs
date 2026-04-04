import { defineConfig } from "vitepress";
import { en } from "./en";
import { cs } from "./cs";
import { pl } from "./pl";

export default defineConfig({
  base: "/docs/",
  locales: {
    en: en,
    cs: cs,
    pl: pl,
  },
});
