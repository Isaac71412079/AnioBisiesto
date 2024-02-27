import esBisiesto from "./esBisiesto"; // Importar la función de esBisiesto

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number.parseInt(first.value);

  // Utilizar la función de esBisiesto
  const resultado = esBisiesto(year) ? "Es Bisiesto" : "No es Bisiesto";
  div.innerHTML = "<p>" + resultado + "</p>";
});