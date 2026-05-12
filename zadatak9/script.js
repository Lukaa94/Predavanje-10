// Zadatak 9 – AJAX slanje podataka (POST zahtjev)
//
// SMJERNICE:
// 1. Event listener stavite na submit forme (ne na klik gumba!) i pozovite preventDefault()
// 2. POST fetch zahtjev razlikuje se od GET-a – potrebno navesti method, headers i body
// 3. 'Content-Type': 'application/json' header govori serveru da šaljete JSON
// 4. JSON.stringify(objekt) pretvara JS objekt u JSON string (suprotno od JSON.parse)
// 5. Prikažite response.status (broj, npr. 201) i JSON.stringify(podaci, null, 2) (formatirani JSON)
// 6. Onemogućite gumb dok traje slanje (gumb.disabled = true) i vratite ga u finally
//
// RAZLIKA GET vs POST FETCH:
//
//   // GET (zadatak 6 i 7) – jednostavan, bez dodatnih opcija
//   const response = await fetch('https://api.example.com/resource');
//
//   // POST – potrebno navesti metodu, zaglavlja i tijelo zahtjeva
//   const response = await fetch('https://api.example.com/resource', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'  // govori serveru što šaljemo
//       },
//       body: JSON.stringify({                   // pretvara objekt u JSON string
//           title: 'Moj naslov',
//           body:  'Moj tekst',
//           userId: 1
//       })
//   });
//
// PROVJERA ODGOVORA:
//   response.status       → HTTP status kod (npr. 201 = Created)
//   response.ok           → true ako je 200-299
//   await response.json() → parsira JSON odgovor
//
// JSON.stringify() vs JSON.parse():
//   JSON.stringify(objekt) → JavaScript objekt → JSON string (za slanje)
//   JSON.parse(string)     → JSON string → JavaScript objekt (za primanje)
//
// LIJEPI PRIKAZ JSON-a:
//   JSON.stringify(objekt, null, 2) → formatiran JSON s uvlakom od 2 razmaka

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Dohvatite elemente
    // const forma        = document.getElementById('forma-objave');
    // const inputNaslov  = document.getElementById('naslov');
    // const inputSadrzaj = document.getElementById('sadrzaj');
    // const gumb         = document.getElementById('gumb-objavi');
    // const loader       = document.getElementById('slanje');
    // const divOdgovor   = document.getElementById('odgovor');
    // const statusKod    = document.getElementById('status-kod');
    // const odgovorJSON  = document.getElementById('odgovor-json');
    // const porukaGreske = document.getElementById('greska');

    // TODO: Event listener na submit forme
    // forma.addEventListener('submit', async function (event) {
    //     event.preventDefault();
    //
    //     const naslov  = inputNaslov.value.trim();
    //     const sadrzaj = inputSadrzaj.value.trim();
    //
    //     // Pripremi UI
    //     loader.classList.remove('skriveno');
    //     divOdgovor.classList.add('skriveno');
    //     porukaGreske.classList.add('skriveno');
    //     gumb.disabled = true;
    //
    //     try {
    //         const response = await fetch(API_URL, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 title:  naslov,
    //                 body:   sadrzaj,
    //                 userId: 1
    //             })
    //         });
    //
    //         const podaci = await response.json();
    //
    //         // Prikazi odgovor
    //         statusKod.textContent = 'Status: ' + response.status + ' ' + (response.ok ? '✓ Uspješno' : '✗ Greška');
    //         odgovorJSON.textContent = JSON.stringify(podaci, null, 2);
    //         divOdgovor.classList.remove('skriveno');
    //
    //     } catch (greska) {
    //         porukaGreske.classList.remove('skriveno');
    //         console.error(greska);
    //     } finally {
    //         loader.classList.add('skriveno');
    //         gumb.disabled = false;
    //     }
    // });

});
