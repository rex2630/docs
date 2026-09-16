import type { VitePressSidebarOptions } from "vitepress-sidebar";

const locales = ["en", "cs", "pl"];

const sharedOptions = {
  useTitleFromFrontmatter: true,
  frontmatterTitleFieldName: "sidebarTitle",
  useTitleFromFileHeading: true,
  sortMenusByFrontmatterOrder: true,
  frontmatterOrderDefaultValue: 999,
};

/**
 * Each locale is scanned directly from its own document tree. Category labels
 * and ordering live alongside their folders in sidebar.config.json, not in
 * language-specific VitePress configuration files.
 */
export const sidebarOptions: VitePressSidebarOptions[] = locales.flatMap((locale) => [
  {
    ...sharedOptions,
    documentRootPath: `/docs/${locale}`,
    scanStartPath: "linux",
    resolvePath: `/${locale}/linux/`,
    rootGroupText: "Linux",
    includeRootIndexFile: true,
  },
  {
    ...sharedOptions,
    documentRootPath: `/docs/${locale}`,
    scanStartPath: "mikrotik",
    resolvePath: `/${locale}/mikrotik/`,
    includeFolderIndexFile: true,
  },
]);
