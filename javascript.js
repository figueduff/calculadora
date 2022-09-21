let display = document.querySelector("#resultado");
let btn = document.querySelectorAll(".mostrar_display");
let btnEspecial = document.querySelectorAll(".especial")


btn.forEach((btn) => {
  btn.addEventListener("click", e => {
    agregarCaracterDisplay(btn.textContent);
  });
});


btnEspecial.forEach((btnEspecial) => {
    btnEspecial.addEventListener("click",e => {
        aplicarOperacion()
    })
})


function agregarCaracterDisplay(dato) {
  if (display.textContent == null || display.textContent == "0")
    display.textContent = dato;
  else display.textContent += dato;
}

function aplicarOperacion(dato)
{}