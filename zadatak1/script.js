
// KORISNE METODE I SVOJSTVA:
//   document.getElementById('id')        → dohvat elementa po ID-u
//   element.value.trim()                 → čitanje vrijednosti inputa (trim = uklanja razmake)
//   element.value.trim() === ''          → provjera je li polje prazno
//   tekst.includes('@')                  → provjera sadrži li string znak @
//   tekst.length >= 6                    → provjera duljine stringa
//   element.textContent = 'poruka'       → postavljanje teksta elementa
//   element.classList.add('klasa')       → dodavanje CSS klase
//   element.classList.remove('klasa')    → uklanjanje CSS klase
//   element.style.display = 'block'      → prikazivanje sakrivenog elementa
//   element.style.display = 'none'       → sakrivanje elementa

const forma = document.getElementById("forma");

const inputIme = document.getElementById("ime");
const inputEmail = document.getElementById("email");
const inputLozinka = document.getElementById("lozinka");

const greskaIme = document.getElementById("greska-ime");
const greskaEmail = document.getElementById("greska-email");
const greskaLozinka = document.getElementById("greska-lozinka");

const poruka = document.getElementById("poruka-uspjeha");

forma.addEventListener("submit", function (event) {
  event.preventDefault();

  greskaIme.textContent = "";
  greskaEmail.textContent = "";
  greskaLozinka.textContent = "";
  poruka.textContent = "";

  let imaGresaka = false;

  if (inputIme.value.trim() === "") {
    imaGresaka = true;
    greskaIme.textContent = "Ime je obavezno!";
    inputIme.classList.remove("uspjeh");
    inputIme.classList.add("greska");
  } else {
    inputIme.classList.add("uspjeh");
  }

  if (!inputEmail.value.includes("@")) {
    imaGresaka = true;
    greskaEmail.textContent = "Email mora sadržavati @";
    inputEmail.classList.remove("uspjeh");
    inputEmail.classList.add("greska");
  } else {
    inputEmail.classList.add("uspjeh");
  }

  if (inputLozinka.value.length < 6) {
    imaGresaka = true;
    greskaLozinka.textContent = "Lozinka mora imati minimalno 6 znakova!";
    inputLozinka.classList.remove("uspjeh");
    inputLozinka.classList.add("greska");
  } else {
    inputLozinka.classList.add("uspjeh");
  }

  if (!imaGresaka) {
    poruka.innerHTML = "<b>Forma je uspješno poslana!</b>";
  }
});
