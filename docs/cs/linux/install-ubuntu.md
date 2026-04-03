---
title: Instalace Ubuntu
description: Podrobný průvodce instalací Ubuntu — stabilní distribuce pro začátečníky od Canonical.
---

# Instalace Ubuntu

Ubuntu je jedna z nejpoužívanějších linuxových distribucí na světě. Je propracovaná, dobře zdokumentovaná a má obrovskou komunitu — díky tomu snadno najdeš pomoc téměř pro jakýkoliv problém.

## Než začneš

Připrav si:
- USB disk s alespoň **8 GB** volného místa (vše na něm bude smazáno)
- Stabilní připojení k internetu pro stažení ISO
- Přibližně **20–30 minut** času

::: warning Nejdřív si zazálohuj data
Pokud instaluješ na fyzický počítač, ulož si všechny důležité soubory na externí disk nebo do cloudu.
:::

## Krok 1 — Stáhni ISO

1. Jdi na [ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)
2. Stáhni nejnovější verzi **LTS** (Long Term Support) — podporována 5 let, mnohem stabilnější než běžná vydání
3. Počkej, až se `.iso` soubor stáhne

::: tip LTS vs. běžné vydání
Vždy zvol verzi **LTS**, pokud specificky nepotřebuješ nejnovější funkce. Běžná (non-LTS) vydání jsou podporována pouze **9 měsíců** — poté přestáváš dostávat bezpečnostní aktualizace.
:::

## Krok 2 — Napiš USB pomocí Rufus

1. Stáhni [Rufus](https://rufus.ie) a otevři ho (instalace není potřeba)
2. Pod **Zařízení** vyber svůj USB disk
3. Pod **Výběr spouštění** klikni na **VYBRAT** a vyber stažené Ubuntu ISO
4. Ostatní nastavení nechej výchozí
5. Klikni na **START** a potvrď varování — Rufus smaže USB a zapíše ISO
6. Počkej, než se zobrazí **HOTOVO**

::: info Rufus vs. jiné nástroje
Můžeš použít také **balenaEtcher** pro jednodušší vizuální rozhraní — oba fungují perfektně.
:::

## Krok 3 — Spuštění z USB

1. Zapoj USB do cílového počítače a restartuj ho
2. Při startu opakovaně mačkej **klávesu pro spouštěcí nabídku**

| Výrobce | Klávesa |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Vyber svůj USB disk ze spouštěcí nabídky
4. Zvol **Try or Install Ubuntu** z grub menu

::: details Nejde spustit z USB? Vypni Secure Boot.
1. Restartuj a stiskni **F2**, **DEL** nebo **F10** pro vstup do BIOSu
2. Přejdi na záložku **Security** nebo **Boot**
3. Nastav **Secure Boot** na **Disabled**
4. Ulož a odejdi (F10) a zkus to znovu

Ubuntu na rozdíl od Fedory nepodporuje Secure Boot na všech konfiguracích, takže jeho vypnutí je nejjednodušším řešením.
:::

## Krok 4 — Vyzkoušej Ubuntu Live

Ubuntu se spustí do live GNOME plochy. Otestuj hardware — Wi-Fi, zvuk, rozlišení. Když je vše v pořádku, klikni na **Instalovat Ubuntu** na uvítací obrazovce nebo ikoně na ploše.

::: warning NVIDIA GPU v Live session
Pokud obrazovka vypadá špatně nebo je zaseknutá na nízkém rozlišení — instalátor nabídne proprietární ovladače. Po prvním spuštění se problém vyřeší.
:::

## Krok 5 — Typ instalace

### Možnost A: Nahradit vše (úplný přechod)

Na obrazovce nastavení disku zvol **Smazat disk a nainstalovat Ubuntu**.

- ✅ Nejjednodušší možnost
- ✅ Nejlepší výkon, celý disk pro Linux
- ❌ Windows bude kompletně odstraněn

::: danger Ujisti se, že máš zálohována data z Windows
Po potvrzení této možnosti jsou všechna data na vybraném disku nenávratně smazána.
:::

### Možnost B: Ponechat Windows (dual boot)

Zvol **Nainstalovat Ubuntu vedle Windows Boot Manager**.

- ✅ Oba systémy dostupné, výběr při startu přes GRUB
- ✅ Skvělý způsob jak vyzkoušet Ubuntu bez ztráty Windows
- ⚠️ Vyžaduje alespoň **30 GB** volného nepřiděleného místa

Instalátor zobrazí posuvník pro rozdělení místa mezi Windows a Ubuntu. Doporučujeme přidělit Ubuntuu **50 GB nebo více**, pokud plánuješ instalovat aplikace a hry.

::: details Nemáš dostatek místa pro dual boot?
1. Ve Windows stiskni **Win + X** → **Správa disků**
2. Klikni pravým tlačítkem na disk C: → **Zmenšit svazek**
3. Zadej množství v MB (např. `51200` pro 50 GB)
4. Klikni na **Zmenšit** — uvolněné místo se zobrazí jako „Nepřiděleno"
5. Instalátor Ubuntu toto místo automaticky použije
:::

::: tip Přístup k souborům Windows z Ubuntu
Disk C: Windows bude v správci souborů Ubuntu viditelný jako připojitelný disk. Soubory z něj můžeš volně číst i zapisovat.
:::

### Možnost C: Ruční instalace (pokročilé)

Zvol **Ruční instalace** pouze pokud víš, co děláš.

## Krok 6 — Dokončení instalátoru

1. **Jazyk a klávesnice** — vyber jazyk a rozložení klávesnice, otestuj ho v textovém poli
2. **Připojit k Wi-Fi** — volitelné, ale doporučené pro stažení aktualizací během instalace
3. **Typ instalace:**
   - Zvol **Interaktivní instalace**
   - Vyber **Výchozí výběr** pro standardní sadu aplikací
4. **Optimalizovat počítač:**
   - ✅ Zaškrtni **Nainstalovat software třetích stran pro grafiku a Wi-Fi**
   - ✅ Zaškrtni **Stáhnout a nainstalovat podporu pro další formáty médií**
5. **Nastavení účtu** — zadej jméno, název počítače, uživatelské jméno a heslo
6. Klikni na **Instalovat** → počkej **10–15 minut**

## Krok 7 — První spuštění

Odstraň USB, stiskni Enter a Ubuntu se restartuje do nového systému.

### 1. Nainstaluj aktualizace
```bash
sudo apt update && sudo apt upgrade -y
```
Nebo otevři **Aktualizace softwaru** z nabídky aplikací.

### 2. Nainstaluj ovladače GPU
Otevři **Software a aktualizace** → záložka **Další ovladače**. Ubuntu detekuje GPU a nabídne doporučený ovladač. Vyber ho a klikni na **Použít změny**, poté restartuj.

::: warning Uživatelé NVIDIA — udělej toto před hraním
Bez správného ovladače NVIDIA se budeš potýkat se špatným výkonem a trháním obrazu. Vždy ho nainstaluj přes Další ovladače dříve, než spustíš Steam.
:::

### 3. Aktivuj Ubuntu Pro (volitelné)
Ubuntu nabízí bezplatné **Ubuntu Pro** pro osobní použití — rozšiřuje bezpečnostní aktualizace o dalších 5 let nad rámec standardního LTS. Aktivuj ho příkazem:
```bash
sudo pro attach
```

## Časté problémy a jejich řešení

### Po dual boot instalaci se GRUB nezobrazí
1. Ve Windows otevři **CMD jako správce**
2. Spusť: `bcdedit /set {bootmgr} path \EFI\ubuntu\grubx64.efi`
3. Restartuj — GRUB by se měl zobrazit

### Wi-Fi nefunguje po instalaci
Nejčastější u Broadcom karet. Připoj se přes ethernet a spusť:
```bash
sudo apt update
sudo apt install bcmwl-kernel-source
```
Restartuj.

### Černá obrazovka po instalaci (NVIDIA)
V GRUB menu stiskni **E**, na řádku `linux` přidej `nomodeset` před `quiet splash`. Stiskni **F10**. Poté nainstaluj ovladač přes **Další ovladače** a restartuj.

### Ubuntu se zasekne na fialové/černé obrazovce
Jde o problém s Wayland na některém hardware. Na přihlašovací obrazovce klikni na ikonu ⚙️ vedle tlačítka Přihlásit se a zvol **Ubuntu na Xorg**.

### Rozlišení zaseknuté na 1024×768
Ovladač GPU není nainstalován. Otevři **Software a aktualizace → Další ovladače**, nainstaluj doporučený ovladač a restartuj.

### Hodiny ukazují špatný čas (dual boot)
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Snap aplikace se pomalu spouštějí
Ubuntu používá Snap balíčky pro některé aplikace. Nahraď je nativními `.deb` verzemi:
```bash
# Příklad: nahradit Snap Firefox nativním Firefox
sudo snap remove firefox
sudo add-apt-repository ppa:mozillateam/ppa
sudo apt install firefox
```

::: tip Hotovo! 🎉
Ubuntu je nainstalováno a připraveno. Přejdi na stránku [Alternativy aplikací](/cs/linux/alternatives) a najdi náhrady za své oblíbené Windows aplikace.
:::
