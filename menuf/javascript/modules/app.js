// app.js
import { mostrarPrecio } from './menu.js';

const btn = document.querySelector("#btn");
const menu = document.querySelector("#menu");

btn.onclick = (event) => {
  event.preventDefault();
  switch (menu.selectedIndex) {
    case 1:
      mostrarPrecio("img/helado.png", "imagen de helado", "Helado", "5.000");
      break;

    case 2:
      mostrarPrecio(
        "../img/hamburguesa.png",
        "imagen de hamburguesa",
        "Hamburguesa",
        "15.000"
      );
      break;

    case 3:
      mostrarPrecio(
        "../img/perro.png",
        "imagen de perro caliente",
        "Perro caliente",
        "10.000"
      );
      break;

    case 4:
      mostrarPrecio(
        "../img/ensalada.png",
        "imagen de ensalada",
        "Ensalada",
        "8.000"
      );
      break;

    default:
      alert("Debes seleccionar una opción del menú");
      break;
  }
};
