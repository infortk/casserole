const targeta = document.querySelector("#targeta"),
      btnAbrirForulario = document.querySelector("#btn-abrir-formulario"),
      formulario = document.querySelector("#formulario-targeta");

targeta.addEventListener("click", () => {
      targeta.classList.toggle("active");
});

btnAbrirForulario.addEventListener("click", () => {
      btnAbrirForulario.classList.toggle("active");
      formulario.classList.toggle("active");
});