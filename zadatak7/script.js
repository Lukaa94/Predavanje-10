// Zadatak 7 – AJAX pretraživanje
//
// SMJERNICE:
// 1. Pohranite sve korisnike u let sviKorisnici = [] – popunite ga jednom pri učitavanju
// 2. Napišite funkciju prikaziKorisnike(niz) koja prima niz i renderira kartice
// 3. Na input event input polja pročitajte vrijednost i pretvorite u mala slova: .toLowerCase()
// 4. Koristite .filter() na nizu: zadržite korisnike gdje .name.toLowerCase().includes(upit)
//    ILI .email.toLowerCase().includes(upit)
// 5. Pozovite prikaziKorisnike(filtrirani) – ako je niz prazan, prikažite poruku "Nema rezultata"
// 6. Razlika od Zad. 6: API se poziva SAMO JEDNOM, svo filtriranje je u memoriji browsera
//
// KLJUČNI KONCEPTI:
//
//   // Filtriranje niza:
//   const filtrirani = sviKorisnici.filter(function(korisnik) {
//       return korisnik.name.toLowerCase().includes(upit) ||
//              korisnik.email.toLowerCase().includes(upit);
//   });
//
//   // 'input' event se okida pri svakom znaku koji korisnik unese:
//   inputElement.addEventListener('input', function() {
//       const upit = inputElement.value.toLowerCase();
//       // filtriraj i prikaži...
//   });
//
//   // Brisanje i ponovni prikaz:
//   kontejner.innerHTML = '';            // briše sve kartice
//   filtrirani.forEach(k => prikaziKarticu(k)); // dodaje nove
//
// RAZLIKA od Zadatka 6:
//   Zadatak 6: svaki put kad kliknemo gumb, šalje se novi zahtjev na server
//   Zadatak 7: zahtjev se šalje JEDNOM, filtriranje se radi LOKALNO u memoriji

const API_URL = 'https://jsonplaceholder.typicode.com/users';

document.addEventListener('DOMContentLoaded', async function () {

    // TODO: Dohvatite elemente
    // const loader         = document.getElementById('ucitavanje');
    // const inputPretraga  = document.getElementById('pretraga');
    // const listaKorisnika = document.getElementById('lista-korisnika');
    // const porukaGreske   = document.getElementById('greska');
    // const nemaPoruka     = document.getElementById('nema-rezultata');

    // Ovaj niz čuva SVE korisnike – ne mijenja se nakon prvog dohvata
    // let sviKorisnici = [];

    // POMOĆNA FUNKCIJA – prikazuje dani niz korisnika
    // function prikaziKorisnike(niz) {
    //     listaKorisnika.innerHTML = ''; // briše stare kartice
    //
    //     if (niz.length === 0) {
    //         nemaPoruka.classList.remove('skriveno');
    //         return;
    //     }
    //     nemaPoruka.classList.add('skriveno');
    //
    //     niz.forEach(function (korisnik) {
    //         const kartica = document.createElement('div');
    //         kartica.classList.add('kartica');
    //         kartica.innerHTML = `
    //             <h3>${korisnik.name}</h3>
    //             <p>${korisnik.email}</p>
    //         `;
    //         // SIGURNOST: koristite textContent umjesto innerHTML
    //         // za dinamički uneseni sadržaj od korisnika!
    //         listaKorisnika.appendChild(kartica);
    //     });
    // }

    // TODO: Dohvatite korisnike s API-ja pri učitavanju stranice
    // try {
    //     const response = await fetch(API_URL);
    //     if (!response.ok) throw new Error('HTTP greška');
    //     sviKorisnici = await response.json();
    //     prikaziKorisnike(sviKorisnici);
    //     loader.classList.add('skriveno');
    //     inputPretraga.classList.remove('skriveno');
    // } catch (greska) {
    //     loader.classList.add('skriveno');
    //     porukaGreske.classList.remove('skriveno');
    //     console.error(greska);
    // }

    // TODO: Event listener za pretraživanje (input event)
    // inputPretraga.addEventListener('input', function () {
    //     const upit = inputPretraga.value.toLowerCase().trim();
    //
    //     const filtrirani = sviKorisnici.filter(function (korisnik) {
    //         // TODO: Provjerite sadrži li ime ILI email uneseni tekst
    //     });
    //
    //     prikaziKorisnike(filtrirani);
    // });

});
