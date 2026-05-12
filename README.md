# Predavanje 10 – Ponavljanje osnova: JavaScript, AJAX i XHTML

Praktični zadaci za ponavljanje gradiva. Svaki zadatak ima vlastiti folder s predpripremljenim datotekama.  
Otvorite `index.html` u browseru i popunite `TODO` komentare u `script.js` i `style.css`.

## Struktura projekta

```
Predavanje-10/
├── README.md
├── Index.html
├── zadatak1/          ← Validacija forme
│   ├── index.html
│   ├── style.css
│   └── script.js
├── zadatak2/          ← Kalkulator
│   ├── index.html
│   ├── style.css
│   └── script.js
├── zadatak3/          ← Dinamička lista
│   ├── index.html
│   ├── style.css
│   └── script.js
├── zadatak4/          ← Tajmer/odbrojavanje
│   ├── index.html
│   ├── style.css
│   └── script.js
├── zadatak5/          ← XHTML struktura
│   ├── index.html
│   └── style.css
├── zadatak6/          ← AJAX GET – dohvat korisnika
│   ├── index.html
│   ├── style.css
│   └── script.js
├── zadatak7/          ← AJAX pretraživanje
│   ├── index.html
│   ├── style.css
│   └── script.js
├── zadatak8/          ← localStorage bilješke
│   ├── index.html
│   ├── style.css
│   └── script.js
├── zadatak9/          ← AJAX POST zahtjev
│   ├── index.html
│   ├── style.css
│   └── script.js
└── zadatak10/         ← Mini SPA
    ├── index.html
    ├── style.css
    └── script.js
```

> **Kako raditi:** Svaki `script.js` i `style.css` sadrži detaljne komentare i smjernice.  
> Pronađite `// TODO:` komentare – to su mjesta koja trebate implementirati.

---

## Zadatak 1 – Validacija forme (JavaScript)

📁 [`zadatak1/`](zadatak1/)

Napravite HTML stranicu s formom koja sadrži polja:
- **Ime** (tekst, obavezno)
- **Email** (tekst, obavezno, mora sadržavati `@`)
- **Lozinka** (password, obavezno, minimalno 6 znakova)

Pritiskom na gumb **"Pošalji"** JavaScript treba provjeriti sva polja i prikazati poruku o grešci ispod svakog polja koje nije ispravno popunjeno. Ako su sva polja ispravna, prikazati poruku: `"Forma je uspješno poslana!"`.

**Smjernice:**
1. Koristite `event.preventDefault()` da spriječite reload stranice pri submitu forme
2. Za svako polje dohvatite vrijednost s `.value.trim()` – `trim()` uklanja razmake s rubova
3. Provjerite uvjete: prazno polje (`=== ''`), sadrži `@` (`.includes('@')`), duljina (`.length >= 6`)
4. Grešku prikažite u `<span>` elementu ispod odgovarajućeg inputa (postavite `.textContent`)
5. Koristite `classList.add('greska')` za crveni stil i `classList.remove('greska')` za uklanjanje
6. Koristite varijablu `imaGresaka = true/false` da pratite je li bilo grešaka

> **Koncepti:** DOM manipulacija, validacija, event listeneri, `classList`

---

## Zadatak 2 – Kalkulator (JavaScript)

📁 [`zadatak2/`](zadatak2/)

Napravite kalkulator koji podržava osnovne operacije: **zbrajanje, oduzimanje, množenje i dijeljenje**.

Zahtjevi:
- Dva inputa za unos brojeva
- Četiri gumba (jedan za svaku operaciju)
- Prikaz rezultata na stranici
- Upozorenje ako korisnik pokuša dijeliti s nulom

**Smjernice:**
1. Koristite `parseFloat(input.value)` za pretvorbu teksta u broj
2. Provjerite `isNaN(broj)` – vraća `true` ako vrijednost nije valjani broj
3. Napišite jednu pomoćnu funkciju `dohvatiBrojeve()` koja čita oba inputa i vraća `{ a, b }` ili `null`
4. Za svaki gumb pozovite tu funkciju, a zatim izvršite operaciju
5. Za dijeljenje: ako je `b === 0`, prikažite poruku greške umjesto rezultata
6. Rezultat pišite u `element.textContent = 'Rezultat: ' + vrijednost`

> **Koncepti:** funkcije, uvjetni izrazi, DOM, `parseFloat`, `isNaN`

---

## Zadatak 3 – Dinamička lista (JavaScript)

📁 [`zadatak3/`](zadatak3/)

Napravite stranicu s:
- Input poljem za unos teksta
- Gumbom **"Dodaj"** koji dodaje uneseni tekst kao novi `<li>` element u `<ul>` listu
- Mogućnošću brisanja pojedinog elementa klikom na **"Obriši"** gumb pored svakog elementa

**Smjernice:**
1. Funkcija `dodajStavku()` čita input, kreira `<li>` s `document.createElement('li')`
2. Unutar `<li>` kreirajte `<span>` za tekst i `<button>` za brisanje
3. Gumbu za brisanje dodajte event listener koji poziva `li.remove()`
4. Nakon dodavanja ispraznite input: `input.value = ''`
5. Ažurirajte broj stavki: `lista.children.length`
6. Bonus: dodajte i unos pritiskom na `Enter` (`keydown` event, `event.key === 'Enter'`)

> **Koncepti:** `createElement`, `appendChild`, `remove()`, event listeneri

---

## Zadatak 4 – Tajmer i odbrojavanje (JavaScript)

📁 [`zadatak4/`](zadatak4/)

Napravite odbrojavač koji:
- Prima broj sekundi od korisnika (input)
- Pritiskom na **"Start"** počinje odbrojavati i svake sekunde ažurira prikaz
- Pritiskom na **"Stop"** zaustavlja odbrojavanje
- Kada dođe do 0, prikazuje poruku: `"Vrijeme je isteklo!"`

**Smjernice:**
1. Deklarirajte `let intervalID = null` **izvan** event listenera – mora biti dostupno Stopu
2. `setInterval(fn, 1000)` poziva funkciju svake 1000ms i vraća ID koji morate pohraniti
3. `clearInterval(intervalID)` zaustavlja interval – koristite i u Stopu i kad dođe do 0
4. Svake sekunde smanjite `preostaloVrijeme--` i ažurirajte `element.textContent`
5. Onemogućite Start (`gumb.disabled = true`) dok odbrojavanje teče da nema duplikata
6. Bonus: dodajte `Reset` gumb koji vraća sve na početno stanje

> **Koncepti:** `setInterval`, `clearInterval`, `disabled`, DOM ažuriranje

---

## Zadatak 5 – XHTML ispravna struktura

📁 [`zadatak5/`](zadatak5/)

Napravite **XHTML 1.0 Strict** stranicu s:
- Ispravnim `DOCTYPE` deklaracijom (već postavljena u starteru)
- Navigacijom (`<ul>` s linkovima)
- Glavnim sadržajem s naslovom, podnaslovom i odlomcima teksta
- Slikom s obaveznim `alt` atributom
- Tablicom s 3 stupca i 3 retka podataka (zaglavlje s `<th>`)

Provjerite valjanost stranice na [W3C Validatoru](https://validator.w3.org/).

**Smjernice – XHTML pravila koja se razlikuju od HTML-a:**
1. **Svi tagovi moraju biti zatvoreni:** `<br />`, `<img />`, `<input />` (obratite pažnju na `/`)
2. **Malim slovima:** `<div>` ✓, `<DIV>` ✗ – tagovi i atributi su uvijek mala slova
3. **Navodnici su obavezni:** `href="link.html"` ✓, `href=link.html` ✗
4. **`alt` je obavezan** na svakom `<img />` – validator će javiti grešku bez njega
5. **Atributi bez skraćenica:** `checked="checked"` ✓, samo `checked` ✗
6. Tablica treba `<thead>` s `<th>` i `<tbody>` s `<td>` elementima

> **Koncepti:** XHTML 1.0 Strict, DOCTYPE, samozatvarajući tagovi, W3C validacija

---

## Zadatak 6 – AJAX dohvat podataka (Fetch API)

📁 [`zadatak6/`](zadatak6/)

Koristite javni API za dohvat podataka i prikaz na stranici.

Endpoint: `https://jsonplaceholder.typicode.com/users`

Zahtjevi:
- Pritiskom na gumb **"Učitaj korisnike"** dohvatite listu korisnika
- Prikažite ime (`name`) i email (`email`) svakog korisnika u kartici
- Dok se podaci učitavaju, prikazati tekst `"Učitavanje..."`
- U slučaju greške prikazati poruku `"Greška pri dohvatu podataka."`

**Smjernice:**
1. Napišite `async function ucitajKorisnike()` i povežite je s gumbom
2. Na početku funkcije prikažite loader i sakrijte prethodne poruke
3. `const response = await fetch(URL)` – šalje GET zahtjev
4. Provjerite `response.ok` – ako je `false`, bacite grešku s `throw new Error(...)`
5. `const podaci = await response.json()` – parsira tijelo odgovora kao JSON niz
6. Za svakog korisnika kreirajte `<div class="kartica">` s `<h3>` (ime) i `<p>` (email)
7. Koristite `try/catch/finally` – `finally` blok sakriva loader uvijek (i pri uspjehu i grešci)

> **Koncepti:** `fetch()`, `async/await`, `try/catch/finally`, JSON, DOM kreiranje

---

## Zadatak 7 – AJAX pretraživanje (Fetch API)

📁 [`zadatak7/`](zadatak7/)

Nadogradnja Zadatka 6 – podaci se učitavaju jednom, a filtriranje se radi lokalno.

- Podaci se dohvaćaju automatski pri učitavanju stranice (nema gumba)
- Input za pretraživanje filtrira korisnike u realnom vremenu dok korisnik tipka
- Pretraživanje radi po **imenu** i **emailu** (ne razlikuje velika/mala slova)

**Smjernice:**
1. Pohranite sve korisnike u `let sviKorisnici = []` – popunite ga jednom pri učitavanju
2. Napišite funkciju `prikaziKorisnike(niz)` koja prima niz i renderira kartice
3. Na `input` event input polja pročitajte vrijednost i pretvorite u mala slova: `.toLowerCase()`
4. Koristite `.filter()` na nizu: zadržite korisnike gdje `.name.toLowerCase().includes(upit)` ILI `.email.toLowerCase().includes(upit)`
5. Pozovite `prikaziKorisnike(filtrirani)` – ako je niz prazan, prikažite poruku "Nema rezultata"
6. Razlika od Zad. 6: API se poziva **samo jednom**, svo filtriranje je u memoriji browsera

> **Koncepti:** `.filter()`, `.includes()`, `.toLowerCase()`, `input` event, lokalni state

---

## Zadatak 8 – Lokalna pohrana podataka (localStorage)

📁 [`zadatak8/`](zadatak8/)

Napravite jednostavnu aplikaciju bilješki:
- Input i textarea za unos naslova i teksta bilješke
- Gumb **"Spremi"** koji sprema bilješku u `localStorage`
- Pri svakom učitavanju stranice automatski prikazati sve pohranjene bilješke
- Mogućnost brisanja pojedine bilješke (i brisanje iz `localStorage`)

**Smjernice:**
1. `localStorage` može pohraniti samo stringove – koristite `JSON.stringify(niz)` za pohranu i `JSON.parse(tekst)` za čitanje
2. Uvijek dohvaćajte cijeli niz: `JSON.parse(localStorage.getItem('biljeske')) || []`
3. Svaka bilješka je objekt: `{ id: Date.now(), naslov, sadrzaj, datum }`
4. `Date.now()` vraća timestamp u ms – koristi se kao jedinstven ID za svaku bilješku
5. Brisanje: filtrirajte niz (`biljeske.filter(b => b.id !== id)`), pohranite nazad, prerenderajte
6. Pozovite `prikaziBiljeske()` odmah pri `DOMContentLoaded` da se prikaže pohranjen sadržaj

> **Koncepti:** `localStorage`, `JSON.stringify/parse`, `Date.now()`, filtriranje niza

---

## Zadatak 9 – AJAX slanje podataka (POST zahtjev)

📁 [`zadatak9/`](zadatak9/)

Endpoint: `https://jsonplaceholder.typicode.com/posts`

Napravite formu s poljima **Naslov** i **Sadržaj**. Pritiskom na **"Objavi"** pošaljite `POST` zahtjev i prikažite odgovor servera.

**Smjernice:**
1. Event listener stavite na `submit` forme (ne na klik gumba!) i pozovite `preventDefault()`
2. POST fetch zahtjev razlikuje se od GET-a po opcijama:
   ```js
   fetch(URL, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ title, body, userId: 1 })
   })
   ```
3. `Content-Type: application/json` header govori serveru da šaljete JSON
4. `JSON.stringify(objekt)` pretvara JS objekt u JSON string (suprotno od `JSON.parse`)
5. Prikažite `response.status` (broj, npr. `201`) i `JSON.stringify(podaci, null, 2)` (formatirani JSON)
6. Onemogućite gumb dok traje slanje (`gumb.disabled = true`) i vratite ga u `finally`

> **Koncepti:** `fetch` POST, `headers`, `body: JSON.stringify()`, `response.status`

---

## Zadatak 10 – Mini SPA (JavaScript + AJAX)

📁 [`zadatak10/`](zadatak10/)

Napravite **jednostraničnu aplikaciju (SPA)** s:
- Navigacijom s 3 "stranice": **Početna**, **Korisnici**, **Objave**
- Klikanjem na navigaciju mijenja se sadržaj glavnog dijela stranice **bez osvježavanja**
- Stranica "Korisnici" dohvaća podatke s `https://jsonplaceholder.typicode.com/users`
- Stranica "Objave" dohvaća podatke s `https://jsonplaceholder.typicode.com/posts` (prvih 10)
- Početna stranica prikazuje statički pozdravni tekst

**Smjernice:**
1. Svaki navigacijski gumb ima `data-stranica="naziv"` atribut – čitajte ga s `gumb.dataset.stranica`
2. Na klik gumba: uklonite `aktivan` klasu sa SVIH gumba, dodajte na kliknutom
3. Svaka "stranica" je JavaScript funkcija koja briše stari sadržaj (`innerHTML = ''`) i upisuje novi
4. Prikažite loader (`innerHTML = '<p class="loader">Učitavanje...</p>'`) dok čekate fetch
5. Za Objave koristite `.slice(0, 10)` na nizu da uzmete samo prvih 10 elemenata
6. Pohranite `aktivnaStranica` varijablu i preskočite render ako se klikne ista stranica dva puta

> **Koncepti:** `data-*` atributi, `dataset`, dinamičko renderiranje, `fetch`, SPA arhitektura, `.slice()`

---

## Napomene

- Svaki zadatak je u **zasebnom folderu** s predpripremljenim datotekama
- Pronađite `// TODO:` komentare u datotekama – to su mjesta koja trebate implementirati
- Koristite **čisti JavaScript** (bez jQuery ili frameworka)
- Zadaci su poredani po težini — preporučeno ih je rješavati redom
- Za AJAX zadatke (6–10) potrebna je internetska veza (javni API)
