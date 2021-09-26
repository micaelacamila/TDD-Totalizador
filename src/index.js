import multiplicar from "./App";

const first = document.querySelector("#first-number");
const second = document.querySelector("#second-number");
const form = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
