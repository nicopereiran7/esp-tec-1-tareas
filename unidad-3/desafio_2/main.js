var numeros = document.getElementById("numeros").children;
var signos = document.getElementById("signos").children;
const activo = document.getElementById("activo");
const operacion = document.getElementById("operacion");
const guardado = document.getElementById("guardado");

const igual = document.getElementById("igual");
const borrar = document.getElementById("borrar");

var numeroGuardado;
var signoOperacion;
var numeroActivo;
var resultado;

const handleNumber = (btn, numero) => {
  btn.addEventListener("click", () => {
    if (!numeroActivo) {
      numeroActivo = numero;
    } else {
      numeroActivo = numeroActivo + "" + numero;
    }
    activo.innerHTML = numeroActivo;
  });
};

const handleSigno = (btn, signo) => {
  btn.addEventListener("click", () => {
    if (numeroActivo) {
      signoOperacion = signo;
      numeroGuardado = numeroActivo;
      guardado.innerHTML = numeroGuardado;
      activo.innerHTML = "";
      operacion.innerHTML = signoOperacion;
    }
    if (numeroGuardado) {
      signoOperacion = signo;
      operacion.innerHTML = signoOperacion;
    }

    if (resultado) {
      numeroGuardado = resultado;
      numeroActivo = undefined;
    } else {
      numeroActivo = undefined;
    }
  });
};

for (let i = 0; i < numeros.length; i++) {
  numeros[i].id === "cero" && handleNumber(numeros[i], 0);
  numeros[i].id === "uno" && handleNumber(numeros[i], 1);
  numeros[i].id === "dos" && handleNumber(numeros[i], 2);
  numeros[i].id === "tres" && handleNumber(numeros[i], 3);
  numeros[i].id === "cuatro" && handleNumber(numeros[i], 4);
  numeros[i].id === "cinco" && handleNumber(numeros[i], 5);
  numeros[i].id === "seis" && handleNumber(numeros[i], 6);
  numeros[i].id === "siete" && handleNumber(numeros[i], 7);
  numeros[i].id === "ocho" && handleNumber(numeros[i], 8);
  numeros[i].id === "nueve" && handleNumber(numeros[i], 9);
}

if (!numeroActivo || !signoOperacion) {
  for (let i = 0; i < signos.length; i++) {
    signos[i].id === "sumar" && handleSigno(signos[i], "+");
    signos[i].id === "restar" && handleSigno(signos[i], "-");
    signos[i].id === "multiplicar" && handleSigno(signos[i], "x");
    signos[i].id === "dividir" && handleSigno(signos[i], "/");
  }
}

igual.addEventListener("click", () => {
  activo.innerHTML = "";
  operacion.innerHTML = "";

  if (signoOperacion === "+") {
    resultado = numeroGuardado + numeroActivo;
  }

  if (signoOperacion === "x") {
    resultado = numeroGuardado * numeroActivo;
  }

  if (signoOperacion === "-") {
    resultado = numeroGuardado - numeroActivo;
  }

  if (signoOperacion === "/") {
    resultado = numeroGuardado / numeroActivo;
  }

  numeroActivo = resultado;
  guardado.innerHTML = resultado;
});

borrar.addEventListener("click", () => {
  numeroActivo = undefined;
  activo.innerHTML = "";

  if (numeroGuardado) {
    guardado.innerHTML = "";
    numeroGuardado = undefined;
    resultado = undefined;
  }
});
