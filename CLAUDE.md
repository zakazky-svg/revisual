# Revisual.cz – nový web

Firemní web revisual.cz (2D/3D půdorysy, vizualizace, Matterport, videoprohlídky, focení nemovitostí pro realitní makléře). Nahrazuje starý web z Nicepage. Podrobné zadání je v `docs/ZADANI.md`, texty, ceny a reference v `docs/OBSAH.md`. Před každou větší prací si je přečti.

## Cíle (v tomto pořadí)
1. Víc poptávek od realitních makléřů
2. Prémiový a profesionální dojem
3. Dobrá pozice na Googlu (celá ČR, důraz na Ostravu a Prahu)
4. Snadná správa obsahu bez programátora

## Technologie
- **Astro** (statický výstup), čisté CSS s proměnnými (design tokens), minimum JavaScriptu
- Žádné těžké UI frameworky a žádné nové závislosti bez předchozí domluvy
- Obrázky přes `astro:assets` (WebP/AVIF, responzivní velikosti, `loading="lazy"`)
- Obsah, který se mění (ceník, reference, FAQ, portfolio, kontakty), je v `src/content/` jako JSON/Markdown, ne natvrdo v komponentách
- Hosting: Cloudflare Pages, repozitář na GitHubu
- Písma hostovat lokálně (např. `@fontsource`), ne z Google Fonts

## Struktura složek
```
src/pages/        stránky
src/components/   komponenty
src/layouts/      layouty
src/content/      editovatelný obsah (ceník, reference, FAQ, portfolio)
src/styles/       tokens.css, global.css
public/           favicon, robots.txt, _redirects, og-image
assets/brand/     loga (logo-cerne.png, logo-bile.png)
assets-src/       ORIGINÁLNÍ velké obrázky (NEJSOU v gitu, viz .gitignore)
```
Originály v `assets-src/` jsou velké (desítky MB). Do projektu patří až optimalizované kopie (max. šířka 2000 px).

## Značka a design
- Styl: **světlý, čistý, minimalistický**, hodně bílého prostoru, velké kvalitní obrázky, výrazná typografie
- Hlavní barva: **#FBB02E** (žlutooranžová). Je to akcent, ne barva textu: na bílém má kontrast jen cca 1,9:1, proto se používá na tlačítka, linky a detaily, vždy s **tmavým textem** (#111) na ní
- Doporučená paleta: text `#111111`, pozadí `#FFFFFF`, jemně šedé plochy `#F5F5F3`, linky `#E6E6E3`, tlumený text `#5B5B5B`
- Písma (návrh, lze změnit): nadpisy Montserrat 700–800 (blízké logu), text Inter
- Logo: `assets/brand/logo-cerne.png` (na světlém), `logo-bile.png` (na tmavém). Až bude k dispozici SVG, použít SVG
- Tlačítka: žluté s černým textem, zaoblení a stíny držet střídmě
- **Mobile-first**: makléři web otevírají hodně z telefonu. Na mobilu lepivé tlačítko „Poptat“ a odkaz `tel:`

## Pravidla pro texty
- Česky, **vykání**, věcně a konkrétně, bez klišé a prázdných frází
- Mluvit o přínosu pro makléře (rychlejší prodej, víc prohlídek, lepší prezentace), ne jen o tom, co děláme
- **Nic si nevymýšlej**: žádná čísla, reference, ocenění, lhůty ani garance, které nejsou v `docs/OBSAH.md`. Chybějící údaje označ `[DOPLNIT]` a nahlas mi je
- Ceny jen z ceníku v `docs/OBSAH.md`. Při změně ceny měnit jediný zdroj (`src/content/cenik.json`)
- Všechny `alt` texty obrázků česky a popisně

## SEO a výkon (povinné)
- Každá stránka: unikátní `<title>`, meta description, jedno `<h1>`, canonical, Open Graph
- `sitemap.xml`, `robots.txt`, strukturovaná data (JSON-LD `ProfessionalService`/`LocalBusiness`, `FAQPage` u FAQ)
- 301 přesměrování starých URL (viz `docs/ZADANI.md`) v `public/_redirects`
- Cíl: Lighthouse ≥ 90 ve všech čtyřech kategoriích (mobil)
- YouTube videa přes „lite“ vložení (náhled, načtení až po kliknutí, doména `youtube-nocookie.com`)
- Respektovat `prefers-reduced-motion`, viditelný focus, klávesnicová ovladatelnost

## Soukromí a měření
- Meta Pixel a Google Tag Manager (ID v `docs/OBSAH.md`) se spouštějí **až po souhlasu** v cookie liště
- Formulář: souhlas se zpracováním osobních údajů + odkaz na stránku Ochrana osobních údajů

## Jak pracovat (šetření usage)
- Pracuj po malých krocích podle fází v `docs/ZADANI.md`, jeden úkol = jeden commit
- Před commitem spustit `npm run build`, musí projít bez chyb
- Nerefaktoruj nesouvisející části a nepřepisuj celé soubory, když stačí změnit pár řádků
- Když ti něco chybí (foto, text, údaj), zeptej se, nehádej
- Na konci každé fáze napiš krátké shrnutí: co je hotovo, co chybí, co mám zkontrolovat
