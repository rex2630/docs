export const cs = {
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
          { text: "Rychlý přechod", link: "/cs/linux/" },
          { text: "Alternativy k Windows aplikacím", link: "/cs/linux/alternatives" },
        ],
      },
    ],
    sidebar: {
      "/cs/linux/": [
        {
          text: "Linux",
          items: [
            { text: "Rychlý přechod", link: "/cs/linux/" },
          ],
        },
        {
          text: "Průvodci instalací",
          items: [
            { text: "Linux Mint", link: "/cs/linux/install-mint" },
            { text: "Ubuntu", link: "/cs/linux/install-ubuntu" },
            { text: "Fedora", link: "/cs/linux/install-fedora" },
          ],
        },
        {
          text: "Software",
          items: [
            { text: "Alternativy k Windows aplikacím", link: "/cs/linux/alternatives" },
          ],
        },
      ],
    },
  },
};
