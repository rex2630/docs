export default {
  title: "P4G Docs",
  description: "Documentation for P4G",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Linux",
        items: [
          { text: 'Quick Start', link: '/linux' },
          { text: 'Test Category 2', link: '/linux/test' }
        ]
      },
    ],
  },
  base: "/docs/",
};
