---
title: Průvodce rychlým přechodem na Linux
description: Přecházíš z Windows na Linux? Tady je vše, co potřebuješ vědět pro začátek.
---

# Průvodce rychlým přechodem na Linux

Pravděpodobně jsi na této stránce, protože přemýšlíš o přechodu z Windows na Linux, ale nevíš, kde začít. Neboj se — pokusím se to co nejvíce usnadnit.

[[toc]]

## Výběr distribuce

Představ si linuxovou distribuci jako edici Windows — stejné jádro, jiný zážitek. Tady jsou naše doporučení pro přecházející z Windows:

| Distribuce | Stabilita | Čerstvost softwaru | Nejlepší pro | |
|---|---|---|---|---|
| [Ubuntu](https://ubuntu.com) | ⭐⭐⭐⭐⭐ | Střední | Úplné začátečníky | [Průvodce instalací →](/cs/linux/install-ubuntu) |
| [Linux Mint](https://linuxmint.com) | ⭐⭐⭐⭐⭐ | Střední | Přecházející z Windows | [Průvodce instalací →](/cs/linux/install-mint) |
| [Fedora](https://fedoraproject.org) | ⭐⭐⭐⭐ | Velmi aktuální | Hráče & vývojáře | [Průvodce instalací →](/cs/linux/install-fedora) |
| [Arch Linux](https://archlinux.org) | ⭐⭐ | Nejnovější verze | Pokročilé uživatele | — |

::: tip Nevíš, kterou si vybrat?
Pokud chceš něco, co prostě „funguje" hned po instalaci a bude ti připadat povědomé, zvol **Linux Mint**. Má hlavní panel, nabídku Start a správce souborů, které ti budou připadat jako doma po přechodu z Windows.

Pokud jsi hráč, **Fedora** je skvělá volba — díky aktuálnímu softwaru máš k dispozici nejnovější ovladače GPU, aktualizace Protonu a herní nástroje dříve než ostatní.
:::

::: warning Arch Linux
Arch se začátečníkům nedoporučuje. Vyžaduje ruční nastavení a je lepší se k němu dostat až poté, co máš základy Linuxu zvládnuté.
:::

## Instalace

Instalace Linuxu jako uživatel Windows je jednodušší, než to zní. Doporučený způsob je použít nástroj **Rufus** — který možná znáš z vytváření instalačních USB pro Windows.

### Co budeš potřebovat
- USB disk s alespoň **8 GB** volného místa
- ISO soubor tvé zvolené distribuce
- [Rufus](https://rufus.ie) (aplikace pro Windows, zdarma)

### Postup

1. Stáhni ISO své zvolené distribuce z jejích oficiálních stránek
2. Otevři Rufus, vyber svůj USB disk a stažené ISO
3. Klikni na **Start** a počkej, až to skončí
4. Restartuj PC a nabootuj z USB (obvykle klávesou **F12** nebo **F11** při startu)
5. Nejdřív vyzkoušej Linux živě z USB — zatím žádné změny na tvém PC!
6. Až budeš připraven, klikni na **Instalovat** z živé plochy

::: info Vyzkoušej před instalací
Každá větší linuxová distribuce umožňuje spustit systém přímo z USB bez instalace čehokoli. Říká se tomu **Live session** — ideální pro otestování, zda tvůj hardware funguje správně, než se rozhodneš.
:::

::: details Dual boot vs. úplný přechod
Nemusíš hned mazat Windows. Během instalace si můžeš zvolit nainstalovat Linux **vedle Windows** a při startu si vybrat, který systém spustit. Tomu se říká dual boot a je to skvělý způsob, jak si na přechod pomalu zvyknout.
:::

## První kroky po instalaci

Jakmile máš vše v provozu, tady je co dělat jako první:

1. **Aktualizuj systém** — otevři Správce aktualizací nebo Centrum softwaru
2. **Nainstaluj prohlížeč** — Firefox je předinstalovaný, nebo si stáhni Chrome z obchodu s aplikacemi
3. **Zkontroluj herní nastavení** — pokud používáš Fedoru, nainstaluj [Steam](https://store.steampowered.com/about/) a v nastavení aktivuj **Proton** pro hraní Windows her
4. **Prozkoumej obchod s aplikacemi** — většina aplikací, které znáš, má linuxovou verzi nebo dobrou alternativu

::: tip Hraní na Linuxu
Vrstva kompatibility **Proton** od Steamu ti umožní hrát obrovskou knihovnu her pouze pro Windows i na Linuxu. Na stránkách jako [ProtonDB](https://www.protondb.com) si můžeš ověřit, jak dobře tvé oblíbené hry běží.
:::

## Potřebuješ pomoc?

Linuxová komunita je k nováčkům velmi přívětivá. Tady jsou nejlepší místa pro kladení otázek:

- [r/linux4noobs](https://reddit.com/r/linux4noobs) — začátečníkům přívětivá komunita na Redditu
- [r/linux_gaming](https://www.reddit.com/r/linux_gaming/) — pokud přicházíš kvůli hraní
- [Linux Mint Forums](https://forums.linuxmint.com) — pokud sis vybral Mint
