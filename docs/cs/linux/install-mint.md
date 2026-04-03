---
title: Instalace Linux Mint
description: Podrobný průvodce instalací Linux Mint — nejpřívětivější linuxové distribuce pro přecházející z Windows.
---

# Instalace Linux Mint

Linux Mint je nejdoporučovanější distribuce pro uživatele přecházející z Windows. Má známý hlavní panel, nabídku Start a správce souborů, a funguje hned po instalaci bez složitého nastavování.

[[toc]]

## Než začneš

Připrav si:
- USB disk s alespoň **8 GB** volného místa (vše na něm bude smazáno)
- Stabilní připojení k internetu pro stažení ISO
- Přibližně **20–30 minut** času

::: warning Nejdřív si zazálohuj data
Pokud instaluješ na fyzický počítač, ulož si všechny důležité soubory na externí disk nebo do cloudu. Instalace může při chybě přepsat existující data.
:::

## Krok 1 — Stáhni ISO

1. Jdi na [linuxmint.com/download.php](https://www.linuxmint.com/download.php)
2. Vyber edici **Cinnamon** — nejpropracovanější a nejvíce připomínající Windows
3. Klikni na odkaz ke stažení a počkej, až se `.iso` soubor stáhne

::: tip Kterou edici vybrat?
- **Cinnamon** — doporučeno, moderní a podobné Windows
- **MATE** — méně náročné na výkon, mírně tradičnější vzhled
- **Xfce** — nejlepší pro starší nebo slabší hardware (4 GB RAM nebo méně)
:::

## Krok 2 — Napiš USB pomocí Rufus

1. Stáhni [Rufus](https://rufus.ie) a otevři ho (instalace není potřeba)
2. Pod **Zařízení** vyber svůj USB disk
3. Pod **Výběr spouštění** klikni na **VYBRAT** a vyber stažené ISO Mintu
4. Ostatní nastavení nechej výchozí
5. Klikni na **START** — potvrď varování, že data na USB budou smazána
6. Počkej, než ukazatel průběhu dosáhne 100 % a zobrazí **HOTOVO**

::: info Rufus vs. jiné nástroje
Můžeš použít také **balenaEtcher** pro jednodušší vizuální rozhraní — oba fungují s ISO Mintu perfektně.
:::

## Krok 3 — Spuštění z USB

1. Zapoj USB do počítače, na který chceš Linux nainstalovat
2. Restartuj PC
3. Při startu opakovaně mačkej **klávesu pro spouštěcí nabídku**

| Výrobce | Klávesa |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

4. Vyber svůj USB disk ze spouštěcí nabídky
5. V grub menu zvol **Start Linux Mint**

::: details Nejde spustit z USB? Vypni Secure Boot.
Některé počítače blokují spuštění z USB kvůli **Secure Boot**:
1. Restartuj a stiskni **F2**, **DEL** nebo **F10** pro vstup do BIOSu
2. Přejdi na záložku **Security** nebo **Boot**
3. Najdi **Secure Boot** a nastav ho na **Disabled**
4. Ulož a odejdi (obvykle F10) a zkus to znovu

Linux Mint funguje bez Secure Boot bez problémů.
:::

## Krok 4 — Vyzkoušej Linux Mint Live

Po nabootování se ocitneš na plně funkční ploše Linux Mint přímo z USB — nic ještě není nainstalováno. Říká se tomu **Live session**.

**Před kliknutím na Instalovat otestuj hardware:**
- Připoj se k Wi-Fi a otevři nějakou webovou stránku
- Přehraj video na YouTube pro test zvuku
- Zkontroluj, že klávesnice a myš fungují správně
- Pokud máš NVIDIA GPU, zkontroluj, že zobrazení vypadá správně

::: warning Problémy s NVIDIA GPU v Live session
Pokud obrazovka vypadá špatně, má artefakty nebo je zaseknutá na nízkém rozlišení — nepanikař, to je běžné s kartami NVIDIA v Live módu. Instalátor nabídne správné ovladače a po instalaci se to vyřeší.
:::

Když vše vypadá dobře, dvakrát klikni na ikonu **Instalovat Linux Mint** na ploše.

## Krok 5 — Typ instalace

Toto je nejdůležitější krok — zvol pečlivě.

### Možnost A: Nahradit vše (úplný přechod)

Zvol **Smazat disk a nainstalovat Linux Mint**.

- ✅ Nejjednodušší možnost
- ✅ Nejlepší výkon, celý disk pro Linux
- ❌ Windows bude kompletně odstraněn

::: danger Ujisti se, že máš zálohována data z Windows
Jakmile tuto možnost potvrdíš a klikneš na Instalovat, všechna data na disku jsou nenávratně pryč. Nejde to vzít zpět bez přeinstalování Windows od nuly.
:::

### Možnost B: Ponechat Windows (dual boot)

Zvol **Nainstalovat Linux Mint vedle Windows**.

- ✅ Oba systémy dostupné, výběr při startu přes GRUB
- ✅ Skvělý způsob jak si na Linux zvyknout bez závazků
- ⚠️ Vyžaduje alespoň **30 GB** volného místa na disku

**Jak dual boot funguje:**
1. Instalátor zobrazí posuvník — táhni ho pro rozdělení místa mezi Windows a Linux Mint
2. Po instalaci se při každém startu PC zobrazí **GRUB bootloader** — nabídka, kde vybereš Windows nebo Linux Mint
3. Oba systémy jsou zcela oddělené — soubory se ve výchozím stavu nesdílí

::: tip Přístup k souborům Windows z Linuxu
I při dual boot nastavení si můžeš procházet Windows oddíl ze správce souborů Linux Mint. Disk `C:` Windows se zobrazí jako připojitelný disk. Soubory z něj můžeš volně číst i zapisovat.
:::

::: details Nemáš dostatek místa pro dual boot?
Nejdřív zmenši Windows oddíl:
1. Ve Windows stiskni **Win + X** → **Správa disků**
2. Klikni pravým tlačítkem na disk C: → **Zmenšit svazek**
3. Zadej množství v MB (např. `40960` pro 40 GB)
4. Klikni na **Zmenšit** — uvolněné místo se zobrazí jako „Nepřiděleno"
5. Instalátor Linux Mint toto nepřidělené místo automaticky použije
:::

### Možnost C: Ruční rozdělení (pokročilé)

Zvol **Něco jiného** pouze pokud víš, co děláš — dává ti plnou kontrolu nad rozložením oddílů, ale pro začátečníky se nedoporučuje.

## Krok 6 — Dokončení instalátoru

Po výběru typu instalace je zbytek přímočarý:

1. **Časové pásmo** — klikni na svoji polohu na mapě nebo napiš název města
2. **Uživatelský účet:**
   - Zadej své jméno a název počítače (např. `martin-pc`)
   - Nastav uživatelské jméno (malá písmena, bez mezer)
   - Nastav silné heslo
   - Zvol, zda vyžadovat heslo při přihlášení (doporučeno ✅)
3. Klikni na **Instalovat** → potvrď změny oddílů → počkej **10–15 minut**

## Krok 7 — První spuštění

Po dokončení instalace tě instalátor vyzve k restartu. **Odstraň USB až budeš vyzván** a stiskni Enter.

Po přihlášení se automaticky otevře **Uvítací obrazovka**. Udělej tyto věci jako první:

### 1. Nainstaluj aktualizace
Otevři **Správce aktualizací** z hlavního panelu → klikni na **Obnovit** → **Instalovat aktualizace**.

::: tip Vždy nejdřív aktualizuj
Čerstvé instalace mívají týdny čekajících aktualizací. Jejich instalace jako první věc předchází bezpečnostním problémům a zajišťuje správnou funkci ovladačů.
:::

### 2. Nainstaluj ovladače GPU
Otevři **Správce ovladačů** (vyhledej v nabídce). Pokud máš NVIDIA nebo AMD GPU, detekuje ho a nabídne doporučený proprietární ovladač. Klikni na **Použít změny**.

::: warning Uživatelé NVIDIA — udělej toto jako první
Bez správného ovladače NVIDIA se budeš potýkat s trháním obrazu, špatným výkonem a nefunkčním hraním. Vždy ho nainstaluj přes Správce ovladačů dříve, než spustíš Steam nebo jakoukoliv hru.
:::

### 3. Nastav Timeshift (zálohy)
Otevři **Timeshift** z nabídky. Vytváří snímky systému — v podstatě body obnovení, podobně jako Obnovení systému ve Windows. Nastav ho na týdenní spouštění, abys mohl vrátit změny v případě problémů.

## Časté problémy a jejich řešení

### Po dual boot instalaci se GRUB nezobrazí
Pokud se PC rovnou spustí do Windows:
1. Spusť **CMD jako správce** ve Windows
2. Spusť: `bcdedit /set {bootmgr} path \EFI\linuxmint\grubx64.efi`
3. Restartuj — GRUB by se měl nyní zobrazit

Případně vstup do BIOSu a změň pořadí spouštění tak, aby byl **Linux Mint** na prvním místě.

### Wi-Fi nefunguje po instalaci
Nejčastější u Broadcom Wi-Fi karet.
1. Dočasně se připoj přes ethernetový kabel
2. Otevři **Správce ovladačů** — měl by detekovat a nabídnout ovladač Broadcom
3. Nainstaluj ho, restartuj — Wi-Fi by měla fungovat

Pokud nemáš ethernet k dispozici, ISO Mintu obsahuje offline Broadcom ovladače:
```bash
sudo apt install bcmwl-kernel-source
```

### Rozlišení obrazovky zaseknuté na 1024×768
Ovladač GPU ještě není nainstalován. Otevři **Správce ovladačů**, nainstaluj doporučený ovladač a restartuj.

### Černá obrazovka po instalaci (NVIDIA)
V GRUB menu stiskni **E** pro úpravu spouštěcího záznamu, najdi řádek začínající `linux` a přidej `nomodeset` před `quiet splash`. Stiskni **F10** pro spuštění. Poté nainstaluj NVIDIA ovladač přes Správce ovladačů a restartuj — problém se již neobjeví.

### Touchpad nefunguje na laptopu
```bash
sudo apt install xserver-xorg-input-synaptics
```
Po instalaci restartuj.

### Hodiny ukazují špatný čas při přepínání mezi Windows a Linuxem (dual boot)
Windows a Linux zpracovávají hardwarové hodiny různě. Oprav to v Linuxu:
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

::: tip Hotovo! 🎉
Linux Mint je nainstalován a připraven. Přejdi na stránku [Alternativy aplikací](/cs/linux/alternatives) a najdi náhrady za své oblíbené Windows aplikace.
:::
