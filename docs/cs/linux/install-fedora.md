---
title: Instalace Fedory KDE
description: Průvodce instalací Fedory KDE Plasma — moderní linuxová distribuce ideální pro hráče a vývojáře.
---

# Instalace Fedory KDE

Fedora je moderní, rychle se vyvíjející distribuce sponzorovaná společností Red Hat. Přináší nejnovější software — aktuální ovladače GPU, aktualizace Protonu a vylepšení jádra dorazí sem jako první. Edice KDE Plasma nabízí přehledné, Windows-podobné prostředí s vysokou mírou přizpůsobení. To z ní dělá oblíbenou volbu hráčů i vývojářů, kteří chtějí aktuální software bez zbytečně složité správy systému.

## Než začneš

Připrav si:
- USB flash disk s alespoň **8 GB** volného místa (vše na něm bude smazáno)
- Stabilní připojení k internetu
- Přibližně **20–30 minut** volného času

::: warning Nejdřív si zazálohuj data
Pokud instaluješ na fyzický počítač, přesuň všechny důležité soubory na externí disk nebo do cloudu ještě před zahájením instalace.
:::

## Krok 1 — Stažení ISO

Fedora má vlastní nástroj pro vytvoření bootovacího USB — **Fedora Media Writer** — nejjednodušší možnost pro uživatele Windows.

**Možnost A — Fedora Media Writer (doporučeno):**
1. Jdi na [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/)
2. Klikni na **Stáhnout Fedora Media Writer** a nainstaluj ho
3. Otevři ho, vyber **Fedora KDE Plasma Desktop**, klikni na **Stáhnout a zapsat** — automaticky stáhne ISO a zapíše ho na USB

**Možnost B — Ruční ISO + Rufus:**
1. Stáhni ISO z [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/) → klikni na **Pro x86_64**
2. Otevři [Rufus](https://rufus.ie), vyber USB a ISO soubor, klikni na **START**

::: tip Fedora Media Writer šetří čas
Stáhne nejnovější ISO a rovnou ho zapíše na USB — není potřeba spravovat soubor ISO ručně.
:::

## Krok 2 — Bootování z USB

1. Zapoj USB a restartuj počítač
2. Při startu stiskni klávesu pro výběr bootovacího zařízení

| Výrobce | Klávesa boot menu |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Vyber své USB a zvol **Start Fedora KDE Plasma Desktop Live**

::: info Secure Boot na Fedoře
Fedora podporuje Secure Boot, takže ho ve většině případů není potřeba vypínat. Pokud narazíš na problém s bootováním, nejdřív ověř, že bylo USB správně zapsáno.
:::

## Krok 3 — Vyzkoušení live prostředí

Fedora nabootuje do živého desktopového prostředí KDE Plasma. Otestuj hardware — Wi‑Fi, zvuk, displej — ještě před instalací. Až budeš připraven, dvakrát klikni na ikonu **Instalovat na disk** na ploše nebo ji najdi ve spouštěči aplikací.

::: warning NVIDIA GPU v live session
Fedora standardně obsahuje open-source ovladač Nouveau s omezenou podporou NVIDIA. Obrazovka může být zaseknutá na nízkém rozlišení nebo mít slabý výkon. To je normální — správné ovladače NVIDIA nainstaluješ po dokončení instalace.
:::

## Krok 4 — Typ instalace (instalátor Anaconda)

Fedora používá instalátor **Anaconda**. Hlavní obrazovka zobrazuje všechny možnosti najednou — položky s ikonou upozornění ⚠️ musí být vyplněny před pokračováním.

### Možnost A: Nahradit vše (čistá instalace)

Klikni na **Cíl instalace**, vyber disk, zvol **Automatické** dělení, klikni na **Hotovo**.

- ✅ Nejjednodušší varianta, doporučena pro většinu uživatelů
- ✅ Celý disk dostupný pro Fedoru
- ❌ Všechna stávající data budou smazána

::: danger Ujisti se, že máš zálohována data z Windows
Výběr automatického dělení na jediném disku smaže vše, co na něm je. Dvakrát zkontroluj, který disk je vybraný.
:::

### Možnost B: Ponechat Windows (dual boot)

Klikni na **Cíl instalace**, vyber disk, pak zvol **Vlastní** dělení a klikni na **Hotovo**.

Na obrazovce ručního dělení:
1. Klikni na **Klikněte sem pro automatické vytvoření** jako výchozí bod
2. Ověř, že oddíl Windows (obvykle `ntfs`) je v seznamu a **není** označen k formátování
3. Uprav velikost kořenového oddílu Fedory (`/`) — doporučeno **40 GB nebo více**
4. Klikni na **Hotovo** → **Přijmout změny**

- ✅ Oba systémy dostupné při startu přes GRUB
- ⚠️ Vyžaduje alespoň **40 GB** volného nealokovaného místa

::: details Nemáš dost volného místa pro dual boot?
Nejdřív zmenš oddíl Windows:
1. Ve Windows stiskni **Win + X** → **Správa disků**
2. Pravé tlačítko na disk C: → **Zmenšit svazek**
3. Zadej množství v MB (např. `51200` pro 50 GB)
4. Klikni na **Zmenšit** — uvolněné místo se zobrazí jako „Nepřiděleno“
5. V Anacondě bude toto místo k dispozici pro Fedoru
:::

::: tip Přístup k souborům Windows z Fedory
Oddíl Windows se zobrazí ve správci souborů **Dolphin**. Lze ho připojit a procházet volně. Pozor — pokud Windows nebyl čistě vypnut (např. zapnutý rychlý start), oddíl může být připojen jen pro čtení jako bezpečnostní opatření.

Jak vypnout rychlý start Windows (doporučeno pro dual boot):
**Ovládací panely → Možnosti napájení → Nastavení tlačítek napájení → Zapnout rychlé spuštění → odškrtni**
:::

## Krok 5 — Dokončení instalátoru

1. **Klávesnice** — klikni a nastav rozložení
2. **Čas a datum** — vyber časové pásmo, zapni přepínač **Síťový čas**
3. **Účet root** — nech vypnutý (Fedora místo toho používá `sudo`)
4. **Vytvoření uživatele** — provede se po prvním spuštění v průvodci nastavením
5. Klikni na **Zahájit instalaci** → čekej **10–15 minut**

## Krok 6 — První spuštění a průvodce nastavením

Po restartu Fedora KDE spustí stručného **průvodce nastavením**:

1. Připoj se k Wi‑Fi
2. Nastav předvolby soukromí
3. Vytvoř uživatelský účet a heslo

Po přihlášení otevři **Konsole** (terminál KDE) a ihned spusť kompletní aktualizaci systému:

```bash
sudo dnf upgrade --refresh -y
```

### Instalace RPM Fusion

Výchozí repozitáře Fedory neobsahují proprietární software. **RPM Fusion** přidává ovladače NVIDIA, plný FFmpeg, multimediální kodeky, Steam a další balíčky.[web:23]

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Instalace multimediálních kodeků

RPM Fusion doporučuje přejít z `ffmpeg-free` na plnou RPM Fusion variantu `ffmpeg`, protože Fedora varianta může čas od času narážet na version mismatch.[web:23]

```bash
sudo dnf swap ffmpeg-free ffmpeg --allowerasing
```

Potom doinstaluj multimediální skupinu pro GStreamer a další aplikace používající běžné audio a video formáty.[web:23]

```bash
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
```

::: tip Proč je to důležité
Bez této části může Fedora po čisté instalaci postrádat podporu pro některé běžné audio a video formáty. Přidání plného FFmpeg a multimedia skupiny z RPM Fusion zlepší přehrávání videa, hudby i kompatibilitu aplikací.
:::

### Hardwarová akcelerace kodeků

Pokud chceš lepší přehrávání videa s akcelerací přes GPU, RPM Fusion doporučuje podle typu grafiky tyto balíčky.[web:23]

**AMD (Mesa):**
```bash
sudo dnf swap mesa-va-drivers mesa-va-drivers-freeworld
sudo dnf swap mesa-vdpau-drivers mesa-vdpau-drivers-freeworld
```

**Intel (novější generace):**
```bash
sudo dnf install intel-media-driver
```

**Intel (starší generace):**
```bash
sudo dnf install libva-intel-driver
```

**NVIDIA:**
```bash
sudo dnf install libva-nvidia-driver
```

::: details 32bit knihovny pro Steam a starší hry
Pokud používáš Steam, Proton nebo některé starší hry, může se hodit i 32bit varianta části balíčků.[web:23]

Například pro NVIDIA:
```bash
sudo dnf install libva-nvidia-driver.{i686,x86_64}
```
:::

### Instalace ovladačů NVIDIA (pokud je potřeba)

Pro většinu novějších NVIDIA karet na Fedoře stačí z RPM Fusion nainstalovat `akmod-nvidia`. Pokud používáš OBS, NVENC nebo CUDA akceleraci, hodí se přidat i CUDA balíček.[web:33][web:37]

```bash
sudo dnf install akmod-nvidia xorg-x11-drv-nvidia-cuda
```

Po dokončení **nerestartuj ihned**. Balíček `akmod-nvidia` nejdřív sestaví kernel modul pro tvoje aktuální jádro, což může několik minut trvat.[web:33][web:37]

::: warning NVIDIA na Fedoře — trpělivost
Po instalaci počkej, dokud se terminál plně nevrátí k promptu. Předčasný restart může způsobit nabootování bez správně sestaveného ovladače a skončit černou obrazovkou.[web:33][web:37]
:::

Pokud máš zapnutý **Secure Boot** a proprietární NVIDIA ovladač se nenačte, bude pravděpodobně potřeba podepsat akmods modul přes MOK workflow (`kmodgenca`, `mokutil`, import klíče a potvrzení při rebootu).[web:33]

::: details Secure Boot + NVIDIA
Pokud chceš ponechat Secure Boot zapnutý, můžeš postupovat takto:

```bash
sudo dnf install kmodtool akmods mokutil openssl
sudo kmodgenca -a
sudo mokutil --import /etc/pki/akmods/certs/public_key.der
```

Potom restartuj, v modré obrazovce **MOK Manager** zvol **Enroll MOK**, potvrď import klíče a po dalším restartu nech systém dokončit build modulu.[web:33]
:::

### Herní nastavení

1. Nainstaluj **Steam** z **Discoveru** nebo přes terminál:
```bash
sudo dnf install steam
```
2. Otevři Steam → **Nastavení → Kompatibilita**
3. Zapni **Povolit Steam Play pro všechny tituly**
4. Vyber nejnovější verzi **Protonu**

::: tip Nejdřív zkontroluj své hry
Před přechodem se podívej na [ProtonDB](https://www.protondb.com), jak dobře tvoje hry fungují. Fedora s aktuálním jádrem, Mesa stackem a RPM Fusion balíčky bývá pro gaming velmi dobrý základ.
:::

## Časté problémy a řešení

### Po dual boot instalaci se nezobrazí GRUB
Pokud PC bootuje přímo do Windows:
1. Otevři **CMD jako správce** ve Windows
2. Spusť: `bcdedit /set {bootmgr} path \EFI\fedora\grubx64.efi`
3. Restartuj — GRUB by se měl nyní zobrazit

Nebo vstup do BIOSu a nastav **Fedoru** jako první možnost bootování.

### Wi‑Fi nefunguje po instalaci
Nejčastěji u karet Broadcom nebo některých Intel. Připoj se přes ethernet a spusť:
```bash
sudo dnf install akmod-wl        # Broadcom
# nebo
sudo dnf install iwlwifi-dkms    # některé Intel karty
```

### Černá obrazovka po instalaci NVIDIA ovladačů
V GRUB menu stiskni **E**, najdi řádek `linux`, přidej `nomodeset` před `rhgb quiet`. Stiskni **F10** pro bootování. Pak zkontroluj, že je RPM Fusion aktivní, ovladač je doinstalovaný a akmods build doběhl korektně.

### Problémy s Waylandem a NVIDIA
Fedora KDE stále podporuje i **X11** session. Na přihlašovací obrazovce klikni na výběr session v levém dolním rohu a zvol **Plasma (X11)** místo **Plasma (Wayland)**, pokud narazíš na tearing, pády aplikací nebo grafické artefakty.

### SELinux blokuje aplikaci
Fedora používá SELinux pro bezpečnost, který občas blokuje aplikace. Zkontroluj upozornění SELinux v oznamovací oblasti a postupuj dle navrhovaného řešení, nebo ho dočasně přepni do permissive režimu:
```bash
sudo setenforce 0
```
::: warning
Přepnutí SELinux do permissive snižuje zabezpečení systému. Používej to pouze pro ladění — po dokončení ho znovu zapni:
```bash
sudo setenforce 1
```
:::

### dnf je pomalý při aktualizacích
Správce balíčků `dnf` kontroluje metadata při každém spuštění. Zrychli ho přidáním do `/etc/dnf/dnf.conf`:
```ini
max_parallel_downloads=10
fastestmirror=True
```

### Hodiny ukazují špatný čas při přepínání mezi Windows a Linuxem (dual boot)
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Oddíl Windows připojen jen pro čtení
Způsobeno rychlým startem Windows. Ve Windows:
**Ovládací panely → Možnosti napájení → Nastavení tlačítek napájení → odškrtni Zapnout rychlé spuštění**

::: tip Hotovo! 🎉
Fedora KDE je nainstalována a připravena k použití. Přejdi na stránku [Alternativy aplikací](/cs/linux/alternatives) a najdi náhrady za své oblíbené Windows aplikace.
:::
