
// KLJUČNE METODE:
//   document.createElement('li')           → kreira novi HTML element
//   element.textContent = 'tekst'          → postavljanje teksta elementa
//   element.classList.add('klasa')         → dodavanje CSS klase
//   roditeljElement.appendChild(dijete)    → dodavanje elementa kao dijete
//   element.remove()                       → brisanje elementa iz DOM-a
//   liElement.querySelector('span')        → dohvat djeteta unutar <li>
//   input.value = ''                       → pražnjenje inputa
//   lista.children.length                  → broj djece liste

const input = document.getElementById("unos-tekst");
const gumbDodaj = document.getElementById("gumb-dodaj");
const lista = document.getElementById("lista");
const brojStavki = document.getElementById("broj-stavki");

function azurirajBroj() {
  brojStavki.textContent = "Broj stavki: " + lista.children.length;
}

function dodajStavku() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const gumbObrisi = document.createElement("button");

  const tekst = input.value.trim();
  if (tekst === "") return;

  span.textContent = tekst;

  gumbObrisi.textContent = "Obriši";

  li.classList.add("gumb-li");
  gumbObrisi.classList.add("gumb-obrisi");

  gumbObrisi.addEventListener("click", function () {
    obrisiStavku(li);
  });

  lista.appendChild(li);
  li.appendChild(span);
  li.appendChild(gumbObrisi);

  input.value = "";
  azurirajBroj();
}

function obrisiStavku(li) {
  li.remove();
  azurirajBroj();
}

gumbDodaj.addEventListener("click", dodajStavku);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") dodajStavku();
});
