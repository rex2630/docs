---
title: Jak nainstalovat CachyOS
description: Jednoduchý průvodce instalací CachyOS pro uživatele přecházející z Windows.
---

# Jak nainstalovat CachyOS

CachyOS je linuxová distribuce založená na Arch Linuxu, která se zaměřuje na výkon a zároveň nabízí pohodlnější instalaci než čistý Arch. Pokud chceš moderní systém s velmi aktuálním softwarem, ale nechceš vše nastavovat ručně od nuly, je to zajímavá volba.

[[toc]]

## Co je dobré vědět předem

CachyOS není typická “bezúdržbová” distribuce pro úplné začátečníky. Je vhodnější pro uživatele, kteří chtějí aktuální software, hraní, vývoj nebo ladění systému, a nevadí jim, že jde o rolling release distribuci.

Oficiální wiki uvádí tyto základní požadavky:

- alespoň **3 GB RAM**
- alespoň **30 GB volného místa**
- **stabilní připojení k internetu** během instalace

::: warning Pro koho CachyOS je
Pokud chceš systém, který se bude chovat co nejvíc předvídatelně a nebude od tebe skoro nic chtít, vhodnější bude Linux Mint nebo Ubuntu. CachyOS dává větší kontrolu a novější software, ale občas za cenu větší údržby.
:::

## 1. Stažení ISO

Nejprve si stáhni instalační obraz z oficiálních stránek:

- [CachyOS](https://cachyos.org/)

Na webu najdeš desktop variantu i další možnosti instalace. Pro běžný desktop nebo notebook zvol klasické instalační ISO.

## 2. Vytvoření bootovacího USB

Na Windows je nejjednodušší použít **Rufus**:

- [Rufus](https://rufus.ie)

Postup:

1. Připoj USB disk.
2. Otevři Rufus.
3. V poli **Device** vyber svůj USB disk.
4. V poli **Boot selection** klikni na **SELECT** a vyber stažené ISO CachyOS.
5. Klikni na **START**.

Oficiální wiki uvádí jako podporované nástroje také **balenaEtcher** a **Ventoy**.

::: info Internet během instalace
CachyOS používá online instalaci, takže se ujisti, že máš během instalace funkční internetové připojení.
:::

## 3. Boot z USB

Po vytvoření USB restartuj počítač a otevři boot menu, obvykle klávesou **F12**, **F11**, **Esc** nebo podobnou podle výrobce zařízení.

Vyber USB disk a spusť živé prostředí CachyOS. Po nabootování spusť možnost **Launch Installer**.

## 4. Instalace systému

Během instalace typicky projdeš těmito kroky:

1. Vybereš jazyk, region a časové pásmo.
2. Nastavíš rozložení klávesnice.
3. Zvolíš způsob rozdělení disku.
4. Vybereš desktopové prostředí.
5. Zvolíš balíčky, které se mají nainstalovat.
6. Nastavíš uživatelský účet a heslo.
7. Zkontroluješ souhrn a spustíš instalaci.

CachyOS nabízí grafický instalátor, takže oproti čistému Arch Linuxu není potřeba vše řešit ručně v terminálu.

## 5. Dual boot s Windows

Pokud chceš CachyOS nainstalovat vedle Windows, je dobré si dopředu připravit volné místo na disku přímo ve Windows.

Oficiální wiki pro dual boot doporučuje předem:

- vypnout **Fast Startup**
- vypnout **hibernaci**
- vypnout **BitLocker**
- vypnout **Secure Boot**
- připravit alespoň **30 GB** volného místa pro Linux

Ve Windows můžeš zmenšit hlavní oddíl přes **Správu disků** (`diskmgmt.msc`) a vytvořit tak nealokované místo pro instalaci.

::: warning Dual boot
Při rozdělování disku buď opatrný. Pokud si nejsi jistý, nejbezpečnější je nejdřív zazálohovat důležitá data nebo zkusit instalaci do virtuálního stroje.
:::

## 6. Po instalaci

Po prvním spuštění systému doporučuji:

- aktualizovat systém
- nainstalovat Steam, pokud chceš hrát hry
- zkontrolovat ovladače a nastavení grafiky
- projít předinstalované nástroje a správu balíčků
- případně si ověřit kompatibilitu her přes [ProtonDB](https://www.protondb.com)

CachyOS cílí i na výkon a gaming, takže dává smysl hlavně uživatelům, kteří chtějí novější software a nevadí jim arch-based ekosystém.

## Časté otázky

### Je CachyOS vhodný pro začátečníka?

Spíš pro zvídavého začátečníka nebo pokročilejšího uživatele. Instalace je jednoduchá, ale dlouhodobě je potřeba počítat s tím, že rolling release distribuce vyžaduje trochu víc samostatnosti.

### Je lepší než Arch Linux?

Pro většinu lidí, kteří chtějí Arch základ bez ruční instalace, ano. Nabízí jednodušší start, grafický instalátor a výkonové úpravy navíc.

### Je vhodný na hraní?

Ano, zvlášť pokud chceš aktuální kernel, novější balíčky a modernější základ systému.
