export const en = {
  label: "English",
  lang: "en",
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
          { text: "Quick Start Guide", link: "/linux/" },
          { text: "Windows App Alternatives", link: "/linux/alternatives" },
        ],
      },
    ],
    sidebar: {
      "/linux/": [
        {
          text: "Linux",
          items: [
            { text: "Quick Start", link: "/linux/" },
            { text: "Windows App Alternatives", link: "/linux/alternatives" },
          ],
        },
        {
          text: "Installation Guides",
          items: [
            { text: "Linux Mint", link: "/linux/install-mint" },
            { text: "Ubuntu", link: "/linux/install-ubuntu" },
            { text: "Fedora", link: "/linux/install-fedora" },
          ],
        },
      ],
    },
  },
};
