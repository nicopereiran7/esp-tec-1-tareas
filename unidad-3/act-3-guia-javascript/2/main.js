var botones = document.getElementById("botones").children;

let input_1 = document.getElementById("input_1");
let input_2 = document.getElementById("input_2");

let resultado = document.getElementById("resultado");

const handleClick = (btn, callback) => {
  btn.addEventListener("click", () => {
    if (!input_1.value || !input_2.value) {
      alert("Ingrese numeros");
    } else {
      let value_1 = parseInt(input_1.value);
      let value_2 = parseInt(input_2.value);
      let calculo = callback(value_1, value_2)
      
      if(calculo) {
        resultado.style.color = "black"
        resultado.innerHTML = calculo
      }else {
        resultado.style.color = "red"
        resultado.innerHTML = "No se puede dividir por cero"
      }
      
    }
  })
}

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const dividir = (num1, num2) => {
  if(num2 === 0) return null;
  return num1 / num2;
}
const multiplicar = (num1, num2) => num1 * num2;


for(var i=0; i<4; i++) {
  botones[i].id === "sumar" && handleClick(botones[i], sumar);
  botones[i].id === "restar" && handleClick(botones[i], restar);
  botones[i].id === "dividir" && handleClick(botones[i], dividir);
  botones[i].id === "multiplicar" && handleClick(botones[i], multiplicar);
}

