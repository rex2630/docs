import { defineConfig } from "vitepress";
import { en } from "./en";
import { cs } from "./cs";

export default defineConfig({
  base: "/docs/",
  locales: {
    root: en,
    cs: cs,
    pl: pl,
  },
});
