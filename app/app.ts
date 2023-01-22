import { ControllerCliente } from "./controllers/ControllerCliente.js";

const controller = new ControllerCliente();

const form = document.querySelector(".form");
const radio = document.querySelector("#radio-group");
const log = document.querySelector("#vendasView");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  controller.adiciona();
});
