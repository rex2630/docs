import { defineConfig } from "vitepress";
import { en } from "./en";
import { cs } from "./cs";
import { pl } from "./pl";

export default defineConfig({
  base: "/docs/",

  lastUpdated: true,

  locales: {
    en: en,
    cs: cs,
    pl: pl,
  },
  transformHead({ pageData }) {
    if (pageData.relativePath === "index.md") {
      return [
        ["meta", { "http-equiv": "refresh", content: "0; url=/docs/en/" }],
      ];
    }
  },
});
