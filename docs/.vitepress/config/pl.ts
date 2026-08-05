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
    sidebar: {
      "/pl/linux/": [
        {
          text: "Linux",
          items: [
            { text: "Szybki start", link: "/pl/linux/" },
          ],
        },
        {
          text: "Przewodniki instalacji",
          items: [
            { text: "Linux Mint", link: "/pl/linux/install-mint" },
            { text: "Ubuntu", link: "/pl/linux/install-ubuntu" },
            { text: "Fedora", link: "/pl/linux/install-fedora" },
            { text: "CachyOS", link: "/pl/linux/install-cachyos" },
          ],
        },
        {
          text: "Oprogramowanie",
          items: [
            { text: "Alternatywy dla aplikacji Windows", link: "/pl/linux/alternatives" },
          ],
        },
        {
          text: "Systemy plików",
          items: [
            { text: "Konwersja NTFS na Btrfs", link: "/pl/linux/ntfs-to-btrfs" },
          ],
        },
      ],
      "/pl/mikrotik/": [
        {
          text: "DNS",
          items: [
            { text: "Cloudflare DoH", link: "/pl/mikrotik/dns/doh-cloudflare" },
          ],
        },
        {
          text: "CAPsMAN",
          items: [
            { text: "Wstęp", link: "/pl/mikrotik/caps/" },
            { text: "Przygotowanie", link: "/pl/mikrotik/caps/preparation" },
            { text: "Konfiguracja", link: "/pl/mikrotik/caps/config" },
            { text: "VLAN", link: "/pl/mikrotik/caps/vlan" },
            { text: "Kontrolowany upgrade", link: "/pl/mikrotik/caps/upgrade" },
            { text: "Troubleshooting", link: "/pl/mikrotik/caps/troubleshooting" },
          ],
        },
      ],
    },
  },
};
