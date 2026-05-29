
// KORISNE METODE:
//   parseFloat('3.14')          → pretvara string u decimalni broj
//   parseInt('42')              → pretvara string u cijeli broj
//   Number(vrijednost)          → još jedan način pretvorbe u broj
//   isNaN(vrijednost)           → vraća true ako vrijednost NIJE broj
//   element.textContent = tekst → ispisuje tekst u element
//   element.classList.add()     → dodaje CSS klasu
//   element.classList.remove()  → uklanja CSS klasu

const input1 = document.getElementById("broj1");
const input2 = document.getElementById("broj2");

const zbrajanje = document.getElementById("zbrajanje");
const oduzimanje = document.getElementById("oduzimanje");
const mnozenje = document.getElementById("mnozenje");
const djeljenje = document.getElementById("djeljenje");

const rezultat = document.getElementById("rezultat");
const operacija = document.getElementById("operacija");

function dohvatiBrojeve() {
  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);

  rezultat.classList.remove("greska");

  if (isNaN(a) || isNaN(b)) {
    rezultat.classList.add("greska");
    rezultat.textContent = "Unesite ispravne brojeve!";
    return null;
  }
  return { a, b };
}

zbrajanje.addEventListener("click", function () {
  const brojevi = dohvatiBrojeve();

  if (brojevi === null) return;

  rezultat.textContent = "Rezultat: " + (brojevi.a + brojevi.b);
  operacija.textContent ="+";
});

oduzimanje.addEventListener("click", function () {
  const brojevi = dohvatiBrojeve();

  if (brojevi === null) return;

  rezultat.textContent = "Rezultat: " + (brojevi.a - brojevi.b);
  operacija.textContent ="-";
});

mnozenje.addEventListener("click", function () {
  const brojevi = dohvatiBrojeve();

  if (brojevi === null) return;

  rezultat.textContent = "Rezultat: " + (brojevi.a * brojevi.b);
  operacija.textContent ="*";
});

djeljenje.addEventListener("click", function () {
  const brojevi = dohvatiBrojeve();

  if (brojevi === null) return;

  if (brojevi.b === 0) {
    rezultat.classList.add("greska");
    rezultat.textContent = "Greška: ne može se dijeliti s nulom!";
    return;
  }

  rezultat.textContent = `Rezultat: ${brojevi.a / brojevi.b}`;
  operacija.textContent ="/";
});
