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

    // 👇 Datum poslední aktualizace
    lastUpdated: {
      text: "Naposledy aktualizováno",
      formatOptions: { dateStyle: "short", timeStyle: "short" },
    },

    // 👇 Outline (pravý panel "Na této stránce")
    outline: {
      label: "Na této stránce",
    },

    // 👇 Předchozí / Následující stránka (spodní navigace)
    docFooter: {
      prev: "Předchozí stránka",
      next: "Další stránka",
    },

    // 👇 Dark mode přepínač (jen mobilní zobrazení)
    darkModeSwitchLabel: "Vzhled",
    lightModeSwitchTitle: "Přepnout na světlý režim",
    darkModeSwitchTitle: "Přepnout na tmavý režim",

    // 👇 Mobilní sidebar tlačítko
    sidebarMenuLabel: "Menu",

    // 👇 Tlačítko "zpět na začátek" (jen mobil)
    returnToTopLabel: "Zpět na začátek",

    // 👇 Přepínač jazyka (accessibility label)
    langMenuLabel: "Změnit jazyk",

    // 👇 Skip link (přístupnost, klávesová navigace)
    skipToContentLabel: "Přeskočit na obsah",

    nav: [
      { text: "Domů", link: "/cs/" },
      { text: "Linux", link: "/cs/linux/" },
      { text: "Mikrotik", link: "/cs/mikrotik/mikrotik-doh-cloudflare" },
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
            { text: "CachyOS", link: "/cs/linux/install-cachyos" },
          ],
        },
        {
          text: "Software",
          items: [
            { text: "Alternativy k Windows aplikacím", link: "/cs/linux/alternatives" },
          ],
        },
        {
          text: "Souborové systémy",
          items: [
            { text: "Převod NTFS na Btrfs", link: "/cs/linux/ntfs-to-btrfs" },
          ],
        },
      ],
      "/cs/mikrotik/": [
        {
          text: "DNS",
          items: [
            { text: "Cloudflare DoH", link: "/cs/mikrotik/mikrotik-doh-cloudflare" },
          ],
        },
        {
          text: "CAPsMAN",
          items: [
            { text: "Úvod", link: "/cs/mikrotik/index-capsman" },
            { text: "Příprava", link: "/cs/mikrotik/capsman-prep" },
            { text: "Konfigurace", link: "/cs/mikrotik/capsman-config" },
            { text: "VLAN", link: "/cs/mikrotik/capsman-vlan" },
            { text: "Řízený upgrade CAPsMAN zařízení", link: "/cs/mikrotik/capsman-controlled-upgrade" },
            { text: "Troubleshooting", link: "/cs/mikrotik/capsman-troubleshooting" },
          ],
        },
      ],
    },
  },
};
