---
title: Instalace Fedory
description: Podrobný průvodce instalací Fedory — moderní distribuce pro hráče a vývojáře.
---

# Instalace Fedory

Fedora je moderní, rychle se vyvíjející distribuce sponzorovaná Red Hat. Přináší nejnovější software — nejnovější ovladače GPU, aktualizace Protonu a vylepšení jádra se tu objevují jako první. To z ní dělá oblíbenou volbu hráčů a vývojářů.

[[toc]]

## Než začneš

Připrav si:
- USB disk s alespoň **8 GB** volného místa (vše na něm bude smazáno)
- Stabilní připojení k internetu
- Přibližně **20–30 minut** času

::: warning Nejdřív si zazálohuj data
Pokud instaluješ na fyzický počítač, ulož si všechny důležité soubory na externí disk nebo do cloudu.
:::

## Krok 1 — Stáhni ISO

Fedora má vlastní nástroj pro zápis na USB — **Fedora Media Writer** — nejjednodušší varianta pro uživatele Windows.

**Možnost A — Fedora Media Writer (doporučeno):**
1. Jdi na [fedoraproject.org/workstation](https://fedoraproject.org/workstation/)
2. Klikni na **Stáhnout Fedora Media Writer** a nainstaluj ho
3. Otevři ho, vyber **Fedora Workstation**, klikni na **Stáhnout a zapsat** — stáhne ISO a zapíše USB automaticky

**Možnost B — Ruční ISO + Rufus:**
1. Stáhni ISO z [fedoraproject.org/workstation](https://fedoraproject.org/workstation/) → klikni na **Pro x86_64**
2. Otevři [Rufus](https://rufus.ie), vyber USB a ISO, klikni na **START**

::: tip Fedora Media Writer šetří krok
Stáhne nejnovější ISO a zapíše ho na USB v jednom kroku — není potřeba spravovat ISO soubor ručně.
:::

## Krok 2 — Spuštění z USB

1. Zapoj USB a restartuj PC
2. Při startu opakovaně mačkej klávesu pro spouštěcí nabídku

| Výrobce | Klávesa |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Vyber USB disk a zvol **Start Fedora Workstation Live**

::: info Secure Boot na Fedoře
Na rozdíl od jiných distribucí **Fedora plně podporuje Secure Boot** — neměl by být potřeba ho vypínat. Pokud máš problémy se spuštěním, ověř, že bylo USB správně zapsáno.
:::

## Krok 3 — Vyzkoušej Fedoru Live

Fedora se spustí do live GNOME plochy. Otestuj hardware — Wi-Fi, zvuk, displej — před instalací. Když jsi připraven, klikni na **Nainstalovat na pevný disk** z přehledu **Aktivity** nebo uvítacího dialogu.

::: warning NVIDIA GPU v Live session
Fedora ve výchozím stavu používá open-source ovladač Nouveau, který má omezenou podporu NVIDIA. Obrazovka může být zaseknutá na nízkém rozlišení nebo mít špatný výkon. To je normální — správné ovladače NVIDIA se nainstalují po zprovoznění systému.
:::

## Krok 4 — Typ instalace (instalátor Anaconda)

Fedora používá instalátor **Anaconda**. Hlavní obrazovka zobrazuje všechny možnosti najednou — položky s ikonou varování ⚠️ musíš dokončit před pokračováním.

### Možnost A: Nahradit vše (úplný přechod)

Klikni na **Cíl instalace**, vyber disk, zvol **Automatické** rozdělení a klikni na **Hotovo**.

- ✅ Nejjednodušší varianta, doporučeno pro většinu uživatelů
- ✅ Celý disk dostupný pro Fedoru
- ❌ Všechna existující data budou smazána

::: danger Ujisti se, že máš zálohována data z Windows
Výběr Automatické na jediném disku smaže vše na něm. Zkontroluj, který disk je vybrán.
:::

### Možnost B: Ponechat Windows (dual boot)

Klikni na **Cíl instalace**, vyber disk, zvol **Vlastní** rozdělení a klikni na **Hotovo**.

Na obrazovce ručního rozdělení:
1. Klikni na **Klikni zde pro jejich automatické vytvoření** jako výchozí bod
2. Ověř, že tvůj Windows oddíl (obvykle `ntfs`) je v seznamu a **není** označen k formátování
3. Uprav velikost kořenového oddílu Fedory (`/`) — doporučeno **40 GB nebo více**
4. Klikni na **Hotovo** → **Přijmout změny**

- ✅ Oba systémy dostupné při startu přes GRUB
- ⚠️ Vyžaduje alespoň **40 GB** volného nepřiděleného místa (Fedora potřebuje více místa než Mint/Ubuntu kvůli větším balíčkům)

::: details Nemáš dostatek místa pro dual boot?
1. Ve Windows stiskni **Win + X** → **Správa disků**
2. Klikni pravým tlačítkem na disk C: → **Zmenšit svazek**
3. Zadej množství v MB (např. `51200` pro 50 GB)
4. Klikni na **Zmenšit** — uvolněné místo se zobrazí jako „Nepřiděleno"
5. V Anacondě bude toto místo dostupné pro Fedoru
:::

::: tip Přístup k souborům Windows z Fedory
Windows oddíl se zobrazí v správci souborů Fedory (Nautilus). Pokud Windows nebyl řádně vypnut (např. kvůli rychlému spuštění), oddíl může být připojen pouze pro čtení z bezpečnostních důvodů.

Chceš-li vypnout Rychlé spuštění Windows (doporučeno pro dual boot):
**Ovládací panely → Možnosti napájení → Nastavení tlačítek napájení → Zapnout rychlé spuštění → odškrtni**
:::

## Krok 5 — Dokončení instalátoru

1. **Klávesnice** — klikni a nastav rozložení
2. **Čas a datum** — vyber časové pásmo, zapni přepínač **Čas ze sítě**
3. **Účet root** — nechej zakázaný (Fedora používá místo toho `sudo`)
4. **Vytvoření uživatele** — provede se po prvním spuštění v Průvodci nastavením
5. Klikni na **Zahájit instalaci** → počkej **10–15 minut**

## Krok 6 — První spuštění a Průvodce nastavením

Po restartu Fedora spustí **Průvodce nastavením (GNOME Initial Setup)**:

1. Připoj se k Wi-Fi
2. Nastav předvolby ochrany soukromí
3. Vytvoř uživatelský účet a heslo

Po přihlášení okamžitě spusť úplnou aktualizaci systému v **Terminálu**:

```bash
sudo dnf upgrade --refresh -y
```

### Nainstaluj RPM Fusion (nezbytné pro hraní a multimédia)

Výchozí repozitáře Fedory neobsahují proprietární software. **RPM Fusion** přidává ovladače NVIDIA, multimediální kodeky, Steam a další:

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Nainstaluj ovladače NVIDIA (pokud je máš)

Po aktivaci RPM Fusion:

```bash
sudo dnf install akmod-nvidia
```

Po dokončení restartuj. Proces sestavení trvá několik minut — **nerestartouj okamžitě**, počkej, až se terminál plně vrátí na příkazový řádek.

::: warning NVIDIA na Fedoře — trpělivost nutná
Balíček `akmod-nvidia` sestavuje modul ovladače pro tvoje konkrétní jádro. Trvá to **2–5 minut** po instalaci. Pokud restartuješ příliš brzy, spustíš se bez ovladače a dostaneš černou obrazovku. Počkej, až se terminál plně vrátí na příkazový řádek.
:::

### Nastavení pro hraní

1. Nainstaluj **Steam** z obchodu se softwarem nebo terminálem:
```bash
sudo dnf install steam
```
2. Otevři Steam → **Nastavení → Kompatibilita**
3. Zapni **Povolit Steam Play pro všechny tituly**
4. Vyber nejnovější verzi **Proton**

::: tip Nejdřív ověř kompatibilitu her
Před přechodem zkontroluj na [ProtonDB](https://www.protondb.com), jak dobře tvé hry běží na Linuxu. Většina populárních titulů funguje skvěle na Fedoře díky nejnovějšímu jádru a ovladačům.
:::

## Časté problémy a jejich řešení

### Po dual boot instalaci se GRUB nezobrazí
1. Ve Windows otevři **CMD jako správce**
2. Spusť: `bcdedit /set {bootmgr} path \EFI\fedora\grubx64.efi`
3. Restartuj — GRUB by se měl zobrazit

### Wi-Fi nefunguje po instalaci
Nejčastější u Broadcom nebo některých Intel karet. Připoj se přes ethernet a spusť:
```bash
sudo dnf install akmod-wl        # Broadcom
# nebo
sudo dnf install iwlwifi-dkms    # některé Intel karty
```

### Černá obrazovka po instalaci (NVIDIA, bez RPM Fusion)
V GRUB menu stiskni **E**, na řádku `linux` přidej `nomodeset` před `rhgb quiet`. Stiskni **F10**. Poté aktivuj RPM Fusion a nainstaluj `akmod-nvidia` jak je popsáno výše.

### Problémy s Wayland na NVIDIA (trhání obrazu, padání aplikací)
Starší NVIDIA karty mají omezenou podporu Wayland. Na přihlašovací obrazovce klikni na ikonu ⚙️ a zvol **GNOME na Xorg**.

### SELinux blokuje aplikaci
Fedora používá SELinux pro zabezpečení, který příležitostně blokuje aplikace. Zkontroluj upozornění SELinux v oznamovací oblasti a postupuj podle navrhovaného řešení, nebo dočasně přepni do permisivního režimu:
```bash
sudo setenforce 0
```
::: warning
Nastavení SELinux do permisivního režimu snižuje zabezpečení systému. Dělej to pouze pro ladění — po vyřešení ho znovu zapni:
```bash
sudo setenforce 1
```
:::

### dnf je při aktualizacích pomalý
Přidej do `/etc/dnf/dnf.conf`:
```ini
max_parallel_downloads=10
fastestmirror=True
```

### Hodiny ukazují špatný čas (dual boot)
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Windows oddíl připojen pouze pro čtení
Způsobeno Rychlým spuštěním Windows. Ve Windows:
**Ovládací panely → Možnosti napájení → Nastavení tlačítek napájení → odškrtni Zapnout rychlé spuštění**

::: tip Hotovo! 🎉
Fedora je nainstalována a připravena. Přejdi na stránku [Alternativy aplikací](/cs/linux/alternatives) a najdi náhrady za své oblíbené Windows aplikace.
:::
