export const pl = {
  label: "Polski",
  lang: "pl",
  link: "/pl/",
  title: "P4G Docs",
  description: "Dokumentacja P4G",
  themeConfig: {
    editLink: {
      pattern: "https://github.com/rex2630/docs/edit/main/docs/:path",
      text: "Edytuj tę stronę na GitHubie",
    },

    lastUpdated: {
      text: "Ostatnia aktualizacja",
      formatOptions: { dateStyle: "short", timeStyle: "short" },
    },

    outline: {
      label: "Na tej stronie",
    },

    docFooter: {
      prev: "Poprzednia strona",
      next: "Następna strona",
    },

    darkModeSwitchLabel: "Wygląd",
    lightModeSwitchTitle: "Przełącz na jasny motyw",
    darkModeSwitchTitle: "Przełącz na ciemny motyw",

    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Wróć na górę",
    langMenuLabel: "Zmień język",
    skipToContentLabel: "Przejdź do treści",

    nav: [
      { text: "Strona główna", link: "/pl/" },
      { text: "Linux", link: "/pl/linux/" },
      { text: "Mikrotik", link: "/pl/mikrotik/" },
    ],
  },
};
