// Seleccionamos todos los botones
const botones = document.querySelectorAll(".color");

// Creamos una lista de colores (pares)
let colores = ["red", "blue", "green", "yellow", "pink", "red", "blue", "green", "yellow"];

// Mezclamos los colores aleatoriamente
colores = colores.sort(() => Math.random() - 0.5);

// Asignamos los colores a los botones
botones.forEach((btn, i) => {
btn.dataset.color = colores[i];
btn.style.backgroundColor = colores[i];
});

// Variables para controlar los clics
let primerColor = null;
let segundoColor = null;
let primerBoton = null;
let segundoBoton = null;

// Cuando se hace clic en un botón
botones.forEach(boton => {
boton.addEventListener("click", () => {
    // Si ya está oculto, no hacer nada
    if (boton.style.visibility === "hidden") return;

    // Mostrar el color temporalmente
    boton.style.opacity = "1";

    // Guardar el primer o segundo color
    if (!primerColor) {
    primerColor = boton.dataset.color;
    primerBoton = boton;
    } else {
    segundoColor = boton.dataset.color;
    segundoBoton = boton;

      // Deshabilitar clics momentáneamente
    botones.forEach(b => b.disabled = true);

      // Verificar si son iguales
    setTimeout(() => {
        if (primerColor === segundoColor) {

        // Desaparecen si son iguales
        primerBoton.style.visibility = "hidden";
        segundoBoton.style.visibility = "hidden";
        } else {
        // Si no son iguales, bajamos la opacidad de nuevo
        primerBoton.style.opacity = "0.5";
        segundoBoton.style.opacity = "0.5";
        }

        // Reiniciamos valores
        primerColor = null;
        segundoColor = null;
        primerBoton = null;
        segundoBoton = null;

        // Habilitamos clics otra vez
        botones.forEach(b => b.disabled = false);

        // Verificar si ganó
        const visibles = Array.from(botones).filter(b => b.style.visibility !== "hidden");
        if (visibles.length === 0) {
alert("🎉 ¡Ganaste! Todos los colores fueron emparejados.");
        }
    }, 600);
    }
});
});