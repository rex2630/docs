// .vitepress/config/en.ts
export const en = {
  label: 'English',
  lang: 'en',
  title: 'P4G Docs',
  description: 'Documentation for P4G',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/rex2630/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Home', link: '/en/' },
      { text: "Linux", link: "/en/linux/" },
      { text: "Mikrotik", link: "/en/mikrotik/" },
    ],
    sidebar: {
      '/en/linux/': [
        {
          text: 'Linux',
          items: [
            { text: 'Quick Start', link: '/en/linux/' },
          ],
        },
        {
          text: 'Installation Guides',
          items: [
            { text: 'Linux Mint', link: '/en/linux/install-mint' },
            { text: 'Ubuntu', link: '/en/linux/install-ubuntu' },
            { text: 'Fedora', link: '/en/linux/install-fedora' },
            { text: "CachyOS", link: "/en/linux/install-cachyos" },
          ],
        },
        {
          text: 'Software',
          items: [
            { text: 'Windows App Alternatives', link: '/en/linux/alternatives' },
          ],
        },
        {
          text: "File systems",
          items: [
            { text: "Convert NTFS to Btrfs", link: "/en/linux/ntfs-to-btrfs" },
          ],
        },
      ],
      "/en/mikrotik/": [
        {
          text: "DNS",
          items: [
            { text: "Cloudflare DoH", link: "/en/mikrotik/dns/doh-cloudflare" },
          ],
        },
        {
          text: "CAPsMAN",
          items: [
            { text: "Introduction", link: "/en/mikrotik/caps/" },
            { text: "Preparation", link: "/en/mikrotik/capsman-prep" },
            { text: "Configuration", link: "/en/mikrotik/caps/config" },
            { text: "VLAN", link: "/en/mikrotik/caps/vlan" },
            { text: "Managed upgrade", link: "/en/mikrotik/caps/upgrade" },
            { text: "Troubleshooting", link: "/en/mikrotik/caps/troubleshooting" },
          ],
        },
      ],
    },
  },
}
