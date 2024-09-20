/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import Excusa from "./excusa.js";
import gr from "./getRandom";

window.onload = function() {
  //write your code here

  let quien = [
    "Darwin Nuñez",
    "Mi perro Toto",
    "El vecino",
    "Joaquito de Piedras Blancas"
  ];
  let accion = ["le erró a", "meó", "me robó", "me pegó con"];
  let que = ["la pelota", "el sillón", "mi gato", "la alpargata"];
  let cuando = [
    "durante la clase",
    "otra vez",
    "mientras cargaba el codespace💤"
  ];

  let botonGenerarExcusa = document.querySelector("#botonGenerar");
  let contenedorExcusa = document.querySelector("code");
  let botonCopiar = document.querySelector("#botonCopiar");

  botonGenerarExcusa.addEventListener("click", function(e) {
    let excusa = new Excusa(gr(quien), gr(accion), gr(que), gr(cuando));
    contenedorExcusa.innerHTML = excusa.getExcusa();
  });

  botonCopiar.addEventListener("click", function(e) {
    navigator.clipboard.writeText(contenedorExcusa.innerText);
  });
};
