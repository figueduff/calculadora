let display = document.querySelector("#resultado");
let btn = document.querySelectorAll(".mostrar_display");

btn.forEach((btn) => {
  btn.addEventListener("click", e => {
    agregarCaracterDisplay(btn.textContent);
  });
});

function agregarCaracterDisplay(dato) {
  if (display.textContent == null || display.textContent == "0")
    display.textContent = dato;
  else display.textContent += dato;
}
