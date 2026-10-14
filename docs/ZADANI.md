# Zadání: nový web revisual.cz

## 1. Cíl a cílová skupina
- **Hlavní cíl:** víc poptávek od realitních makléřů a kanceláří. Pak prémiový dojem, SEO a snadná správa.
- **Cílovka:** realitní makléři a realitní kanceláře v celé ČR, hlavně Ostrava a Praha. Rozhodují se rychle, často z telefonu, zajímá je cena, rychlost dodání a kvalita výstupu.
- **Konkurenční výhody, které web musí ukázat** (jen to, co je doloženo v referencích a ceníku): rychlé dodání (i expres), kompletní služby z jedné ruky (půdorysy, vizualizace, Matterport, video, focení, dron), transparentní veřejný ceník, reference od známých kanceláří.

## 2. Mapa webu

| Stránka | URL | Účel |
|---|---|---|
| Úvod | `/` | Přesvědčit a nasměrovat k poptávce |
| Půdorysy a vizualizace | `/pudorysy-a-vizualizace/` | 2D/3D půdorysy, vizualizace, virtual staging, exteriéry |
| Matterport | `/matterport/` | 3D virtuální prohlídky |
| Videoprohlídky | `/videoprohlidky/` | Videa, varianty, cena |
| Focení a dron | `/foceni-a-dron/` | Fotografie nemovitostí, dron |
| Portfolio | `/portfolio/` | Galerie s filtrem podle služby |
| Ceník | `/cenik/` | Kompletní ceník (cíl na vyhledávání „půdorys cena“) |
| O nás | `/o-nas/` | Kdo jsme, důvěra |
| Kontakt a poptávka | `/kontakt/` | Formulář, telefon, e-mail |
| Ochrana osobních údajů | `/ochrana-osobnich-udaju/` | Nutné kvůli formuláři |

Navigace: Služby (rozbalovací: Půdorysy a vizualizace, Matterport, Videoprohlídky, Focení a dron), Portfolio, Ceník, O nás, Kontakt. Vpravo výrazné tlačítko **Nezávazná poptávka**.

## 3. Struktura jednotlivých stránek

### Úvod (`/`)
1. **Hero:** nadpis s hlavním přínosem, podnadpis, dvě tlačítka (Nezávazná poptávka, Zobrazit ceník), 1 silný vizuál nebo krátké zacyklené video bez zvuku (jen pokud po kompresi ≤ 4 MB, jinak statický obrázek)
2. **Pás důvěry:** loga nebo názvy kanceláří z referencí (RE/MAX, Bidli, Reality Zavadil a partneři, Kaktus Reality, QARA, Saxa Real, ADHREAL) – pouze se souhlasem, dokud není potvrzeno, použít jen jména textem
3. **Služby:** 6 karet (2D půdorysy, 3D půdorysy, Vizualizace, Exteriéry, Focení, Videoprohlídky + Matterport) s obrázkem, jednou větou a odkazem
4. **Proč Revisual:** 3–4 body vycházející z referencí (rychlost, komunikace, kompletní služby, jasné ceny)
5. **Portfolio náhled:** 6–8 nejlepších obrázků + odkaz na celé portfolio
6. **Videoprohlídky:** 1–3 YouTube videa (lite embed)
7. **Ceník – přehled:** zkrácené tabulky + odkaz na celý ceník
8. **Reference:** karusel/mřížka, 9 referencí
9. **FAQ:** 5–6 nejdůležitějších otázek
10. **Závěrečná výzva** + krátký formulář nebo odkaz na `/kontakt/`

### Stránky služeb
Jednotná šablona: H1 s klíčovým slovem a lokalitou (např. „Půdorysy nemovitostí – Ostrava, Praha a celá ČR“), co služba obnáší, ukázky, pro koho je, cena (z `cenik.json`), 3–4 FAQ, tlačítko poptávky. Každá stránka má unikátní text, nekopírovat bloky mezi stránkami.

### Portfolio
Mřížka s filtrem: Půdorysy, Vizualizace, Virtual staging, Exteriéry, Matterport, Video. Lightbox, lazy loading. Údaje o položkách v `src/content/portfolio.json` (soubor, kategorie, alt text), aby šlo přidávat bez kódu. Zdrojové obrázky: viz `docs/OBSAH.md`, sekce Obrázky.

### Ceník
Tři tabulky (půdorysy a vizualizace, Matterport, videoprohlídky a focení) z `cenik.json`, pod nimi poznámka k expresnímu zpracování `[DOPLNIT]` a tlačítko poptávky.

### O nás
Úvodní text, dva lidé (Alexandr Skýba, Daniel Kresila) s fotkou `[DOPLNIT]`, krátký blok „Kde působíme: Praha a Ostrava“, tlačítko poptávky. Návrh textu v `docs/OBSAH.md`.

### Kontakt a poptávka
Poptávkový formulář + telefony a e-mail + IČO + Instagram + odkaz na Google recenze. Mapa není potřeba.

## 4. Poptávkový formulář
- Pole: jméno, kancelář/firma (nepovinné), e-mail, telefon, **služba** (výběr, vícenásobný: půdorys, vizualizace, Matterport, videoprohlídka, focení, dron, jiné), **lokalita nemovitosti**, **přibližná plocha (m²)**, **požadovaný termín**, zpráva (nepovinné), souhlas se zpracováním údajů (povinný)
- Odesílání: bezplatná služba typu Web3Forms nebo Formspree, doručení na `zakazky@revisual.cz`. Přístupový klíč dodám po registraci
- Ochrana proti spamu: honeypot pole, případně nenápadná captcha
- Po odeslání: potvrzení na stránce (bez přesměrování mimo web) a událost pro měření (`generate_lead`)
- Stejný krátký formulář (jméno, telefon, e-mail, služba) lze vložit na úvod

## 5. SEO
- **Hlavní klíčová slova:** 2D půdorys, 3D půdorys, půdorys cena, vizualizace nemovitostí, virtual staging, Matterport, videoprohlídka bytu, focení nemovitostí, půdorys Ostrava, půdorys Praha
- Každá stránka: unikátní title (do 60 znaků) a description (do 155 znaků), jedno H1, smysluplné H2
- Lokalita: bloky „Působíme v Ostravě, Praze a po celé ČR“ na stránkách služeb. Samostatné lokální stránky (např. `/pudorysy-ostrava/`) vytvářet **až později** a jen s unikátním obsahem, aby nešlo o duplicitní stránky
- JSON-LD: `ProfessionalService` (název, telefon, e-mail, IČO, oblast působení, odkaz na Instagram), `FAQPage` u FAQ
- `sitemap.xml`, `robots.txt`, canonical, Open Graph obrázek, favicon (zjednodušený znak R)
- Přesměrování starých adres (v `public/_redirects`, 301):
  - `/videoprohlídky.html` → `/videoprohlidky/`
  - `/#sec-18ca` a podobné kotvy nelze přesměrovat, vyřeší je navigace
  - `/index.html` → `/`

## 6. Měření a cookies
- Google Tag Manager a Meta Pixel (ID v `docs/OBSAH.md`) po souhlasu v cookie liště
- Cookie lišta česky: Odmítnout vše / Přijmout vše / Nastavení. Souhlas se ukládá, jde změnit z patičky
- Na webu běží Meta reklamy, proto zachovat události PageView a přidat Lead při odeslání formuláře

## 7. Technické požadavky
- Astro, statický build, deploy na Cloudflare Pages (větev `main` = produkce, ostatní větve = náhledy)
- Lighthouse ≥ 90 (mobil), přístupnost WCAG AA (kontrast, popisky formuláře, focus)
- Žádné externí požadavky navíc kromě GTM, Pixelu (po souhlasu), YouTube (po kliknutí) a služby formuláře

## 8. Fáze realizace
1. **Kostra:** projekt, tokeny, layout, hlavička a patička, písma, cookie lišta, základní komponenty
2. **Úvod**
3. **Stránky služeb** (4 stránky)
4. **Portfolio** a optimalizace obrázků z `assets-src/`
5. **Ceník, O nás, Kontakt + formulář, Ochrana osobních údajů**
6. **SEO, přesměrování, výkon, přístupnost, měření**
7. **Nasazení** na Cloudflare Pages a přepnutí domény

Po každé fázi shrnutí a moje kontrola. Rozjetý starý web zůstává v provozu, dokud není nový schválený.

## 9. Co ještě chybí (doplní majitel)
- Fotka a role pro Alexandra a Daniela, text do O nás ke schválení
- Příklady 2D a 3D půdorysů (ve složkách s obrázky je zatím nemám), případně stažení z původního webu (URL v `docs/OBSAH.md`)
- Odpovědi pro FAQ označené `[DOPLNIT]` (dodací lhůty, podklady, platba)
- Potvrzení písem a souhlas s uvedením jmen/log kanceláří z referencí
- SVG verze loga
- Klíč služby pro formuláře, účty GitHub a Cloudflare
