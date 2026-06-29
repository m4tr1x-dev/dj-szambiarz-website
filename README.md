# DJ Szambiarz — oficjalna strona internetowa

Oficjalne repozytorium kodu strony internetowej **DJ Szambiarz** (Artur Tomaszewski) — profesjonalna oprawa muzyczna na wesela, urodziny, imprezy firmowe i eventy w całej Polsce.

> **Status:** projekt ukończony — strona opublikowana na żywo. ✅
>
> 🌐 **[m4tr1x-dev.github.io/dj-szambiarz-website](https://m4tr1x-dev.github.io/dj-szambiarz-website/)**

## O projekcie

DJ Szambiarz to oprawa muzyczna eventów z pełnym bakiem hitów i zerową nudą — disco polo, dance, pop, house i hip-hop, profesjonalne nagłośnienie, oświetlenie oraz konferansjerka.

- **DJ:** Artur Tomaszewski
- **Telefon:** [507 046 509](tel:+48507046509)
- **E-mail:** [djszambiarz@gmail.com](mailto:djszambiarz@gmail.com)
- **Obszar działania:** cała Polska

Strona jest lekka, szybka i responsywna (mobile-first), zbudowana jako pojedyncza strona statyczna i hostowana na **GitHub Pages**.

## Stack

- **Frontend:** HTML5 + CSS + JavaScript (vanilla) + Google Fonts — bez frameworków i bez kroku budowania
- **Hosting:** GitHub Pages (treść statyczna)

## Zawartość strony

- **Hero** — „Rozkręcę Twoją imprezę"
- **O mnie** — prezentacja DJ-a
- **Oferta** („Na czym gram") — zakres usług
- **Repertuar** („Co leci z głośników") — gatunki i styl grania
- **Opinie** („Co mówią goście") — referencje gości
- **Kontakt** („Sprawdź wolny termin") — formularz rezerwacji

Dodatkowo: responsywne menu mobilne, płynne przewijanie, animowane liczniki, galeria oraz przycisk „do góry".

## Struktura

```
dj-szambiarz-website/
├── index.html        # cała strona (jedna podstrona)
├── styles.css        # wygląd, kolory marki, RWD
├── script.js         # menu, liczniki, galeria, formularz rezerwacji
├── assets/
│   ├── logo.png          # logo (nawigacja, OG, dane strukturalne)
│   ├── logo-square.png   # logo kwadratowe (sekcja „O mnie")
│   ├── logo.svg          # logo wektorowe (zapas)
│   └── favicon.svg       # ikona karty przeglądarki
├── .gitignore
└── README.md
```

## Uruchomienie lokalne

```bash
python3 -m http.server 8000
# następnie otwórz http://localhost:8000
```

## Wdrożenie (GitHub Pages)

Strona jest opublikowana pod adresem:

```
https://m4tr1x-dev.github.io/dj-szambiarz-website/
```

Źródło: gałąź `main`, katalog `/ (root)`. Każdy push na `main` automatycznie publikuje aktualną wersję.

## Formularz rezerwacji

Formularz kontaktowy działa **bez backendu** w oparciu o `mailto:` — po wypełnieniu i walidacji otwiera domyślny program pocztowy gościa z gotową wiadomością zaadresowaną na `djszambiarz@gmail.com`. Adres docelowy ustawia się w `script.js` (stała `RECIPIENT`).

## Kolory marki

- granat tła `#143a4a`
- żółty (beczka) `#f5c518`
- pomarańczowy (napis) `#e8731c`
- krem `#fff7e6`

## Wykonanie

Strona zaprojektowana i wykonana przez **CBprojekt sp. z o.o.** — developer **M4tr1x** (Mateusz Gumuła).

## Prawa autorskie

© DJ Szambiarz · Artur Tomaszewski. Wszelkie prawa zastrzeżone. Kod oraz materiały służą wyłącznie potrzebom DJ Szambiarz.

---

Repozytorium prowadzone przez [@m4tr1x-dev](https://github.com/m4tr1x-dev).
