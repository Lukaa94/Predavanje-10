// Zadatak 10 – Mini SPA (Single Page Application)
//
// SPA = Single Page Application – aplikacija koja radi unutar jedne HTML stranice.
// Umjesto učitavanja novih stranica, JavaScript dinamički mijenja sadržaj.
//
// SMJERNICE:
// 1. Svaki navigacijski gumb ima data-stranica="naziv" atribut – čitajte ga s gumb.dataset.stranica
// 2. Na klik gumba: uklonite 'aktivan' klasu sa SVIH gumba, dodajte na kliknutom
// 3. Svaka "stranica" je JavaScript funkcija koja briše stari sadržaj (innerHTML = '') i upisuje novi
// 4. Prikažite loader (innerHTML = '<p class="loader">Učitavanje...</p>') dok čekate fetch
// 5. Za Objave koristite .slice(0, 10) na nizu da uzmete samo prvih 10 elemenata
// 6. Pohranite aktivnaStranica varijablu i preskočite render ako se klikne ista stranica dva puta
//
// DATA ATRIBUTI:
//   <button data-stranica="korisnici">Korisnici</button>
//   button.dataset.stranica  → 'korisnici'   (čitanje u JS-u)
//
// KORISNI PATTERN za dinamički sadržaj:
//   sadrzaj.innerHTML = '<h1>Naslov</h1><p class="loader">Učitavanje...</p>';
//   // dohvati podatke...
//   sadrzaj.innerHTML = ''; // zamijeni loaderom s karticama

const API_KORISNICI = 'https://jsonplaceholder.typicode.com/users';
const API_OBJAVE    = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', function () {

    const sadrzaj       = document.getElementById('sadrzaj');
    const navGumbi      = document.querySelectorAll('.nav-gumb');
    let aktivnaStranica = 'pocetna';

    // POČETNA STRANICA – statički sadržaj, nema fetcha
    function prikaziPocetnu() {
        sadrzaj.innerHTML = `
            <h1>Dobrodošli!</h1>
            <p>Ovo je mini SPA aplikacija. Koristite navigaciju za prebacivanje između stranica.</p>
            <p>Sadržaj se mijenja bez osvježavanja stranice – to je osnova Single Page Application arhitekture.</p>
        `;
        // NAPOMENA: innerHTML je ovdje sigurno jer koristimo SAMO statički tekst
        // koji ne dolazi od korisnika. Za dinamički korisnički sadržaj uvijek
        // koristite textContent ili sanitizaciju!
    }

    // TODO: Stranica KORISNICI – dohvati i prikaži korisnike
    // async function prikaziKorisnike() {
    //     sadrzaj.innerHTML = '<h1>Korisnici</h1><p class="loader">Učitavanje korisnika...</p>';
    //
    //     try {
    //         const response  = await fetch(API_KORISNICI);
    //         const korisnici = await response.json();
    //
    //         // Obrišite loader, dodajte grid s karticama
    //         sadrzaj.innerHTML = '<h1>Korisnici</h1><div class="grid" id="grid-korisnici"></div>';
    //         const grid = document.getElementById('grid-korisnici');
    //
    //         korisnici.forEach(function (k) {
    //             const kartica = document.createElement('div');
    //             kartica.classList.add('kartica');
    //             // TODO: Dodajte h3 s imenom, p s emailom, p s telefonom
    //             grid.appendChild(kartica);
    //         });
    //
    //     } catch (greska) {
    //         sadrzaj.innerHTML += '<p style="color:red">Greška pri učitavanju.</p>';
    //     }
    // }

    // TODO: Stranica OBJAVE – dohvati i prikaži prvih 10 objava
    // async function prikaziObjave() {
    //     sadrzaj.innerHTML = '<h1>Objave</h1><p class="loader">Učitavanje objava...</p>';
    //
    //     try {
    //         const response = await fetch(API_OBJAVE);
    //         const objave   = await response.json();
    //         const prvih10  = objave.slice(0, 10); // uzmi samo prvih 10
    //
    //         sadrzaj.innerHTML = '<h1>Objave</h1>';
    //
    //         prvih10.forEach(function (o) {
    //             const div = document.createElement('div');
    //             div.classList.add('objava');
    //             // TODO: Dodajte h3 s naslovom i p sa sadržajem
    //             sadrzaj.appendChild(div);
    //         });
    //
    //     } catch (greska) {
    //         sadrzaj.innerHTML += '<p style="color:red">Greška pri učitavanju.</p>';
    //     }
    // }

    // NAVIGACIJA – event listener na sve gumbe
    // TODO: Iteracija kroz querySelectorAll vraća NodeList, koristite forEach
    // navGumbi.forEach(function (gumb) {
    //     gumb.addEventListener('click', function () {
    //         const stranica = gumb.dataset.stranica; // čitanje data-stranica atributa
    //
    //         // Ako je već aktivna stranica – ne radi ništa
    //         if (stranica === aktivnaStranica) return;
    //         aktivnaStranica = stranica;
    //
    //         // Makni 'aktivan' klasu sa svih, dodaj na kliknutom
    //         navGumbi.forEach(g => g.classList.remove('aktivan'));
    //         gumb.classList.add('aktivan');
    //
    //         // Prikaži odgovarajuću stranicu
    //         if (stranica === 'pocetna')   prikaziPocetnu();
    //         if (stranica === 'korisnici') prikaziKorisnike();
    //         if (stranica === 'objave')    prikaziObjave();
    //     });
    // });

    // Prikaz početne stranice pri prvom učitavanju
    prikaziPocetnu();

});
