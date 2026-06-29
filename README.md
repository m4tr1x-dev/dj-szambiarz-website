# DJ Szambiarz — strona internetowa

Statyczna strona wizytówka (HTML + CSS + JS, bez build-stepu). Wystarczy otworzyć
`index.html` w przeglądarce albo wrzucić cały folder na dowolny hosting
(Netlify, Vercel, GitHub Pages, zwykły FTP).

## Struktura
```
index.html      – treść strony
styles.css      – wygląd, kolory marki, RWD
script.js       – menu, liczniki, galeria, odtwarzacz demo, formularz
assets/
  logo.svg      – zastępcze logo (podmień na oryginał, patrz niżej)
  favicon.svg   – ikona w karcie przeglądarki
```

## Co podmienić na swoje
1. **Logo** — wrzuć oryginalny plik jako `assets/logo.png`. W `index.html`
   zamień `assets/logo.svg` na `assets/logo.png` (2 miejsca: nawigacja i stopka).
2. **Zdjęcie DJ-a** — dodaj `assets/dj.jpg` i podmień placeholder w sekcji „O mnie”.
3. **Galeria** — w `script.js` (tablica `tiles`) podmień emoji-kafelki na
   prawdziwe `<img>` ze zdjęciami z imprez.
4. **Kontakt** — w `index.html` ustaw prawdziwy telefon, e-mail i linki do
   social mediów (Facebook, Instagram, YouTube, TikTok).
5. **Statystyki / opinie / repertuar** — dostosuj liczby i teksty do siebie.
6. **Odtwarzacz** — pasek w sekcji „Repertuar” jest demonstracyjny. Możesz
   wstawić tam embed z SoundCloud / Spotify albo prawdziwy `<audio>`.

## Formularz rezerwacji
Działa **bez backendu** w oparciu o `mailto:`. Po wypełnieniu i walidacji
formularz otwiera domyślny program pocztowy gościa (Gmail, Outlook, Poczta itp.)
z gotową wiadomością zaadresowaną na `djszambiarz@gmail.com` — wystarczy
kliknąć „Wyślij". Adres docelowy zmienisz w `script.js` (stała `RECIPIENT`).

Gdybyś w przyszłości chciał wysyłkę „w tle" (bez otwierania poczty), podłącz
usługę typu **Formspree** / **Web3Forms** i dodaj `fetch()` w miejscu wysyłki.

## Kolory marki
- granat tła `#143a4a`
- żółty (beczka) `#f5c518`
- pomarańczowy (napis) `#e8731c`
- krem `#fff7e6`
