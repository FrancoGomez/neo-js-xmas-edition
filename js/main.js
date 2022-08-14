const $form = document.querySelector("form");
const $nombre = document.querySelector('[name="nombre"]');
const $ciudad = document.querySelector('[name="ciudad"]');
const $descripcionRegalo = document.querySelector(
  '[name="descripcion-regalo"]'
);
const $enviarCarta = document.querySelector("#enviar-carta");

$enviarCarta.onclick = (event) => {
  validarFromulario();
  event.preventDefault();
};

const validarFromulario = () => {
  console.log(validarNombre($nombre.value));
  console.log(validarCiudad($ciudad.value));
  console.log(validarDescripcionRegalo($descripcionRegalo.value));
};

const validarNombre = (nombre) => {
  let contieneSoloLetras = new RegExp("^[A-z]+$");

  if (nombre.length < 2) {
    return "El nombre debe contener al menos 2 caracteres.";
  }

  if (nombre.length > 50) {
    return "El nombre debe contener menos de 50 caracteres.";
  }

  if (!contieneSoloLetras.test(nombre)) {
    return "El nombre solo debe contener letras, estas pueden ser minusculas o mayusculas.";
  }
};

const validarCiudad = (ciudad) => {
  if (ciudad === "") {
    return "Debes elegir una ciudad.";
  }
};

const validarDescripcionRegalo = (descripcionRegalo) => {
  if (descripcionRegalo.length < 2) {
    return "La descripcion debe tener al menos 2 caracteres.";
  }

  if (descripcionRegalo.length > 250) {
    return "La descripcion debe tener menos de 250 caracteres.";
  }
};
