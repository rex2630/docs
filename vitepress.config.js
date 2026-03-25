// docs/vitepress.config.js
export default {
  title: "Portal4Gamers Docs",
  description: "Documentation for Portal4Gamers",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/intro" },
    ],
  },
  outDir: ".vitepress/dist", // kam se buildne
  base: "/docs/",                 // docs.p4g.cz je root
};
