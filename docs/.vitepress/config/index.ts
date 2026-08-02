import { defineConfig } from "vitepress";
import { en } from "./en.ts";
import { cs } from "./cs.ts";
import { pl } from "./pl.ts";

export default defineConfig({
  base: "/docs/",
  lastUpdated: true,
  locales: {
    en,
    cs,
    pl,
  },
  transformHead({ pageData }) {
    if (pageData.relativePath === "index.md") {
      return [
        ["meta", { "http-equiv": "refresh", content: "0; url=/docs/en/" }],
      ];
    }
  },
});
