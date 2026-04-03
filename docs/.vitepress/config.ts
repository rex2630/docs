export default {
  title: "P4G Docs",
  description: "Documentation for P4G",

  themeConfig: {
    editLink: {
      pattern: "https://github.com/rex2630/docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Linux",
        items: [
          { text: "Quick Start", link: "/linux" },
          { text: "Test Category 2", link: "/linux/test" },
        ],
      },
    ],
  },
  base: "/docs/",
};
