let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
  if (!num1.value || !num2.value) {
    alert("Ingrese numeros");
  } else {
    let value_1 = parseInt(num1.value);
    let value_2 = parseInt(num2.value);

    resultado.innerHTML = getRandom(value_1, value_2);
  }
});

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
