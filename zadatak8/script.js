// Zadatak 8 – Bilješke s localStorage
//
// SMJERNICE:
// 1. localStorage može pohraniti samo stringove – koristite JSON.stringify(niz) za pohranu
//    i JSON.parse(tekst) za čitanje
// 2. Uvijek dohvaćajte cijeli niz: JSON.parse(localStorage.getItem('biljeske')) || []
// 3. Svaka biljede je objekt: { id: Date.now(), naslov, sadrzaj, datum }
// 4. Date.now() vraća timestamp u ms – koristi se kao jedinstven ID za svaku bilješku
// 5. Brisanje: filtrirajte niz (biljeske.filter(b => b.id !== id)), pohranite nazad, prerenderajte
// 6. Pozovite prikaziBiljeske() odmah pri DOMContentLoaded da se prikaže pohranjen sadržaj
//
// KAKO RADI localStorage:
//
//   // Pohrana (samo stringovi! – koristite JSON.stringify za objekte/nizove)
//   localStorage.setItem('kljuc', 'vrijednost');
//   localStorage.setItem('biljeske', JSON.stringify(nizObjekata));
//
//   // Čitanje
//   const tekst = localStorage.getItem('kljuc');         // vraća string ili null
//   const niz   = JSON.parse(localStorage.getItem('biljeske')) || [];
//
//   // Brisanje jednog ključa
//   localStorage.removeItem('kljuc');
//
//   // Brisanje svega (oprezno!)
//   localStorage.clear();
//
// STRUKTURA JEDNE BILJEŠKE:
//   {
//     id:       Date.now(),            // jedinstveni ID (timestamp)
//     naslov:   'Moja bilješka',
//     sadrzaj:  'Tekst bilješke...',
//     datum:    new Date().toLocaleString('hr-HR')
//   }
//
// KLJUČ u localStorage za pohranu niza bilješki: 'biljeske'

const KLJUC = 'biljeske';

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Dohvatite elemente
    // const inputNaslov    = document.getElementById('naslov');
    // const inputSadrzaj   = document.getElementById('sadrzaj');
    // const gumbSpremi     = document.getElementById('gumb-spremi');
    // const listaBiljesaka = document.getElementById('lista-biljesaka');
    // const brojBiljesaka  = document.getElementById('broj-biljesaka');

    // POMOĆNA FUNKCIJA – dohvata niz bilješki iz localStorage
    // function dohvatiBiljeske() {
    //     const podaci = localStorage.getItem(KLJUC);
    //     return podaci ? JSON.parse(podaci) : [];
    // }

    // POMOĆNA FUNKCIJA – sprema niz bilješki u localStorage
    // function spremiiBiljeske(niz) {
    //     localStorage.setItem(KLJUC, JSON.stringify(niz));
    // }

    // POMOĆNA FUNKCIJA – renderira sve bilješke na stranicu
    // function prikaziBiljeske() {
    //     const biljeske = dohvatiBiljeske();
    //     listaBiljesaka.innerHTML = ''; // očisti stare
    //     brojBiljesaka.textContent = '(' + biljeske.length + ')';
    //
    //     biljeske.forEach(function (b) {
    //         const div = document.createElement('div');
    //         div.classList.add('biljeska');
    //
    //         // TODO: Kreirajte h3, p, small i gumb za brisanje
    //         // Koristite textContent (NE innerHTML) za dinamički sadržaj!
    //
    //         // Gumb za brisanje – spremi ID bilješke kao data atribut
    //         const gumbObrisi = document.createElement('button');
    //         gumbObrisi.textContent = 'Obriši';
    //         gumbObrisi.classList.add('gumb-obrisi-biljesku');
    //         gumbObrisi.dataset.id = b.id; // data-id atribut
    //         gumbObrisi.addEventListener('click', function () {
    //             obrišiBilješku(b.id);
    //         });
    //
    //         div.appendChild(gumbObrisi);
    //         listaBiljesaka.appendChild(div);
    //     });
    // }

    // POMOĆNA FUNKCIJA – briše bilješku po ID-u
    // function obrišiBilješku(id) {
    //     let biljeske = dohvatiBiljeske();
    //     biljeske = biljeske.filter(function (b) { return b.id !== id; });
    //     spremiiBiljeske(biljeske);
    //     prikaziBiljeske();
    // }

    // TODO: Event listener za "Spremi"
    // gumbSpremi.addEventListener('click', function () {
    //     const naslov  = inputNaslov.value.trim();
    //     const sadrzaj = inputSadrzaj.value.trim();
    //     if (naslov === '' || sadrzaj === '') {
    //         alert('Popunite naslov i sadržaj!');
    //         return;
    //     }
    //
    //     const novaBiljeska = {
    //         id:      Date.now(),
    //         naslov:  naslov,
    //         sadrzaj: sadrzaj,
    //         datum:   new Date().toLocaleString('hr-HR')
    //     };
    //
    //     const biljeske = dohvatiBiljeske();
    //     biljeske.unshift(novaBiljeska); // dodaj na početak niza
    //     spremiiBiljeske(biljeske);
    //     prikaziBiljeske();
    //
    //     inputNaslov.value  = '';
    //     inputSadrzaj.value = '';
    // });

    // Prikaz bilješki pri učitavanju stranice
    // prikaziBiljeske();

});
