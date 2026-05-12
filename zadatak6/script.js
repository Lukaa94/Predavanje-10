// Zadatak 6 – AJAX dohvat podataka (Fetch API)
//
// SMJERNICE:
// 1. Napišite async function ucitajKorisnike() i povežite je s gumbom
// 2. Na početku funkcije prikažite loader i saknite prethodne poruke
// 3. const response = await fetch(URL) – šalje GET zahtjev
// 4. Provjerite response.ok – ako je false, bacite grešku s throw new Error(...)
// 5. const podaci = await response.json() – parsira tijelo odgovora kao JSON niz
// 6. Za svakog korisnika kreirajte <div class="kartica"> s <h3> (ime) i <p> (email)
// 7. Koristite try/catch/finally – finally blok sakriva loader uvijek (i pri uspjehu i grešci)
//
// KAKO RADI FETCH + ASYNC/AWAIT:
//
//   async function dohvatiPodatke() {
//       try {
//           const response = await fetch('https://api.example.com/data');
//           if (!response.ok) {
//               throw new Error('HTTP greška: ' + response.status);
//           }
//           const podaci = await response.json(); // parsiranje JSON odgovora
//           console.log(podaci); // podaci je JavaScript array ili objekt
//       } catch (greska) {
//           console.error('Greška:', greska);
//       }
//   }
//
// STRUKTURA JEDNOG KORISNIKA IZ API-ja:
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "phone": "1-770-736-0988 x56442",
//     "website": "hildegard.org",
//     ...
//   }
//
// Korisna svojstva: korisnik.name, korisnik.email, korisnik.phone
//
// KLJUČNE METODE:
//   fetch(url)                        → šalje GET zahtjev, vraća Promise
//   await response.json()             → parsira tijelo odgovora kao JSON
//   response.ok                       → true ako je status 200-299
//   element.innerHTML = ''            → brisanje sadržaja elementa
//   element.classList.add('skriveno') → sakrivanje elementa
//   element.classList.remove('skriveno') → prikazivanje elementa

const API_URL = 'https://jsonplaceholder.typicode.com/users';

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Dohvatite elemente
    // const gumb           = document.getElementById('gumb-ucitaj');
    // const loader         = document.getElementById('ucitavanje');
    // const porukaGreske   = document.getElementById('greska');
    // const listaKorisnika = document.getElementById('lista-korisnika');

    // TODO: Napišite async funkciju za dohvat korisnika
    // async function ucitajKorisnike() {
    //
    //     // Prikaži loader, sakrij grešku, isprazni listu
    //     loader.classList.remove('skriveno');
    //     porukaGreske.classList.add('skriveno');
    //     listaKorisnika.innerHTML = '';
    //
    //     try {
    //         const response = await fetch(API_URL);
    //
    //         if (!response.ok) {
    //             throw new Error('HTTP greška: ' + response.status);
    //         }
    //
    //         const korisnici = await response.json();
    //
    //         // Za svakog korisnika kreiraj karticu
    //         korisnici.forEach(function (korisnik) {
    //             const kartica = document.createElement('div');
    //             kartica.classList.add('kartica');
    //
    //             // TODO: Dodajte h3 s imenom i p s emailom u karticu
    //             // const naslov = document.createElement('h3');
    //             // naslov.textContent = korisnik.name;
    //             // ...
    //
    //             listaKorisnika.appendChild(kartica);
    //         });
    //
    //     } catch (greska) {
    //         porukaGreske.classList.remove('skriveno');
    //         console.error(greska);
    //     } finally {
    //         // finally se izvršava uvijek (i pri uspjehu i pri grešci)
    //         loader.classList.add('skriveno');
    //     }
    // }

    // TODO: Povežite funkciju s gumbom
    // gumb.addEventListener('click', ucitajKorisnike);

});
