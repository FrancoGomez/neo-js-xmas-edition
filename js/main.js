const $form = document.querySelector("form");
const $nombre = $form.nombre;
const $ciudad = $form.ciudad;
const $descripcionRegalo = $form["descripcion-regalo"];
const $enviarCarta = $form.submit;

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

  if (nombre.length === 0) {
    return "El nombre debe contener al menos 1 caracteres.";
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
  if (descripcionRegalo.length === 0) {
    return "La descripcion debe tener al menos 1 caracter.";
  }

  if (descripcionRegalo.length > 100) {
    return "La descripcion debe tener menos de 100 caracteres.";
  }
};
