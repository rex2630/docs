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
              { text: "Alternativy k Windows aplikacím", link: "/cs/linux/alternatives" },
            ],
          },
        ],
        sidebar: {
          "/cs/linux/": [
            {
              text: "Linux",
              items: [
                { text: "Rychlý start", link: "/cs/linux/" },
                { text: "Alternativy k Windows aplikacím", link: "/cs/linux/alternatives" },
              ],
            },
          ],
        },
      },
    },
  },
};
