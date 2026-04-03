export default {
  base: "/docs/",

  locales: {
    root: {
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
              { text: "Test Category 2", link: "/linux/test" },
            ],
          },
        ],
        sidebar: {
          "/linux/": [
            {
              text: "Linux",
              items: [
                { text: "Quick Start", link: "/linux/" },
                { text: "Test Category 2", link: "/linux/test" },
              ],
            },
          ],
        },
      },
    },

    cs: {
      label: "Čeština",
      lang: "cs",
      link: "/cs/",
      title: "P4G Docs",
      description: "Dokumentace pro P4G",
      themeConfig: {
        editLink: {
          pattern: "https://github.com/rex2630/docs/edit/main/docs/:path",
          text: "Upravit tuto stránku na GitHubu",
        },
        nav: [
          { text: "Domů", link: "/cs/" },
          {
            text: "Linux",
            items: [
              { text: "Rychlý start", link: "/cs/linux/" },
              { text: "Testovací kategorie 2", link: "/cs/linux/test" },
            ],
          },
        ],
        sidebar: {
          "/cs/linux/": [
            {
              text: "Linux",
              items: [
                { text: "Rychlý start", link: "/cs/linux/" },
                { text: "Testovací kategorie 2", link: "/cs/linux/test" },
              ],
            },
          ],
        },
      },
    },
  },
};
