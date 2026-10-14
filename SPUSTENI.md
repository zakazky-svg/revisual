# Jak spustit stavbu webu v Claude Code

## 1. Příprava složky (jednou, cca 15 minut)
1. Na počítači vytvoř složku `revisual-web` a rozbal do ní celý tento balíček (soubory `CLAUDE.md`, `docs/`, `assets/brand/`).
2. Uvnitř projektu vytvoř složku `assets-src` a rozbal do ní ZIPy s obrázky tak, aby vznikly složky:
   - `assets-src/modelove/` (Klasická modelová vizualizace)
   - `assets-src/virtual-staging/`
   - `assets-src/exterier/`
3. Pokud máš SVG logo, fotku pro O nás nebo další podklady, dej je do `assets/brand/` a `assets-src/`.
4. Založ si bezplatné účty **GitHub** a **Cloudflare** (budou potřeba až na konci, zatím nemusí).

## 2. Spuštění
1. Otevři Claude Code ve složce `revisual-web` (CLAUDE.md se načte automaticky).
2. Zvol model **Sonnet** na běžnou práci, silnější model nech na složitější problémy.
3. Zadej první prompt (plánovací, nic se ještě nestaví):

```
Přečti CLAUDE.md, docs/ZADANI.md a docs/OBSAH.md. Zatím nic nevytvářej.
Navrhni plán Fáze 1 (kostra projektu) a vypiš, co ti chybí nebo co je nejasné.
Počkej na moje schválení.
```

4. Po schválení pokračuj fázemi z `docs/ZADANI.md`. **Každou fázi dělej v nové konverzaci** (šetří usage), po každé fázi nech udělat commit.

## 3. Ukázkové prompty pro jednotlivé fáze

**Fáze 1 – kostra**
```
Proveď Fázi 1 ze ZADANI.md: Astro projekt, design tokens podle CLAUDE.md, layout s hlavičkou a patičkou, lokální písma, základní komponenty (Button, Section, Card) a cookie lišta. Spusť build, udělej commit a napiš shrnutí.
```

**Fáze 2 – úvod**
```
Proveď Fázi 2: úvodní stránka podle ZADANI.md a textů z OBSAH.md. Obrázky zatím zástupné. Na mobilu i desktopu zkontroluj vzhled a napiš, co chybí.
```

**Fáze 4 – portfolio a obrázky**
```
Proveď Fázi 4: zpracuj originály z assets-src/ (WebP/AVIF, max. šířka 2000 px, menší varianty pro mřížku), vytvoř portfolio.json s kategoriemi a českými alt texty a stránku Portfolio s filtrem a lightboxem. Alt texty a zařazení do kategorií mi dej ke kontrole.
```

**Fáze 6 – SEO a výkon**
```
Proveď Fázi 6: title a description pro každou stránku, JSON-LD, sitemap, robots, _redirects, Lighthouse na mobilu. Vypiš skóre před a po opravách.
```
(Fáze 3, 5 a 7 zadáš stejným stylem: „Proveď Fázi X ze ZADANI.md“.)

## 4. Nasazení a doména (Fáze 7, probereme společně)
- Web poběží na Cloudflare Pages, doména revisual.cz u GoDaddy zůstane registrovaná, jen se bude řešit nasměrování.
- **Pozor na e-mail:** pokud se při přepnutí domény mění DNS, musí se zachovat záznamy, které zajišťují doručování pošty na zakazky@revisual.cz. Před jakoukoliv změnou DNS si udělej snímek (screenshot) všech současných záznamů v GoDaddy.
- Starý web na Nicepage nevypínej, dokud nový nefunguje a není otestovaný.

## 5. Co ode mě bude Code chtít
Fotka a role pro O nás, odpovědi do FAQ, klíč služby pro formulář, potvrzení písem. Zaznamenané v `docs/ZADANI.md`, sekce 9.
