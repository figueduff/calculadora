let display = document.querySelector("#resultado");
let teclado = document.querySelector("#teclado");

// levanta y muestra en display numeros y operaciones simples
teclado.addEventListener("click", (event) => {
  const boton = event.target.classList.contains("mostrar_display");
  if (boton) agregarCaracterDisplay(event.target.textContent);
});

// levanta y muestra resultado de operaciones
teclado.addEventListener("click", (event) => {
  const boton = event.target.classList.contains("especial");
  if (boton) discriminarOperacion(event.target.id);
});

// muestra en display
function checkDisplay() {
  let condicionDisplay = ["null", "recupera_memoria", "N°_grande/decimal", "_"];
  return condicionDisplay.some((esta) => display.textContent.includes(esta));
}

const agregarCaracterDisplay = (dato) =>
  checkDisplay()
    ? (display.textContent = dato)
    : display.textContent.length < 16
    ? (display.textContent += dato)
    : (display.textContent = " Max_16_digitos ");

// operacion simple
const operacionSimple = () =>
  display.textContent !== "" ? evalOperacion() : (display.textContent = "_");

function evalOperacion() {
  try {
    result = eval(display.textContent);
    if (result !== "") {
      //display.textContent = "";
      display.textContent = result;
      return result;
    }
  } catch (e) {
    if (e instanceof SyntaxError) {
      alert(e.message);
    }
  }
}

// operaciones
function checkOperacionEspecial() {
  let condicionEspecial = ["√n", "xn", "Pi", "%"];
  return condicionEspecial.find((esta) => display.textContent.includes(esta));
}

function discriminarOperacion(key) {
  checkOperacionEspecial() //!== undefined
    ? aplicarOperacionEspecial(key)
    : aplicarOperacion(key);
}

function aplicarOperacionEspecial(key) {
  console.log("entro a especial", key);
  if (key == "ac") display.textContent = "";
  if (key == "igual") {
    switch (checkOperacionEspecial()) {
      case "xn":
        let xnDivido = display.textContent.split("xn");
        display.textContent = xnDivido[0];
        operacionSimple();
        display.textContent = Math.pow(display.textContent, xnDivido[1]);
        break;
      case "√n":
        let vnDivido = display.textContent.split("√n");
        display.textContent = vnDivido[0];
        operacionSimple();
        display.textContent = Math.pow(display.textContent, 1 / vnDivido[1]);
        break;
      case "Pi":
        display.textContent = display.textContent.replace(/Pi/, "3.1415");
        operacionSimple();
        break;
      case "%":
        display.textContent = display.textContent.replace(/%/, "*") + "/100";
        operacionSimple();
        break;
      default:
        break;
    }
  }
}

function aplicarOperacion(key) {
  if (key == "ac") display.textContent = "";
  let resultado = operacionSimple();
  switch (key) {
    case "igual":
      display.textContent = resultado;
      break;
    case "x!":
      resultado < 18 && Number.isInteger(resultado)
        ? (display.textContent = factorial(resultado))
        : (display.textContent = "N°_grande/decimal");
      break;
    case "potencia2":
      display.textContent = Math.pow(resultado, 2);
      break;
    case "potencia3":
      display.textContent = Math.pow(resultado, 3);
      break;
    case "raiz2":
      display.textContent = Math.sqrt(resultado);
      break;
    case "raiz3":
      display.textContent = Math.cbrt(resultado);
      break;
    case "sin":
      display.textContent = Math.sin(resultado);
      break;
    case "cos":
      display.textContent = Math.cos(resultado);
      break;
    case "tg":
      display.textContent = Math.tan(resultado);
      break;
    case "mr":
      display.textContent = "recupera_memoria";
      break;
    case "ln":
      display.textContent = Math.log(resultado);
      break;
    case "log":
      display.textContent = Math.log10(resultado);
      break;
    case "e":
      display.textContent += "e";
      break;
    default:
      break;
  }
}

function factorial(dato) {
  let mumerofact = BigInt(1);
  for (let i = BigInt(dato); i > 0; i--) mumerofact *= i;
  console.log("factor", mumerofact);
  return mumerofact;
}
