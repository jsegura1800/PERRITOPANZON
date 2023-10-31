// Cargar el archivo menu.js
const menu = require("menu.js");

// Crear una lista de artículos
const articulos = [];
for (const item of menu) {
  articulos.push(item);
}

// Mostrar la lista de artículos
const ul = document.querySelector("#menu ul");
ul.innerHTML = articulos.map(item => `<li>${item}</li>`).join("");

