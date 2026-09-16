import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import { en } from "./en.ts";
import { cs } from "./cs.ts";
import { pl } from "./pl.ts";
import { sidebarOptions } from "./sidebar.ts";

export default defineConfig(withSidebar({
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
}, sidebarOptions));
