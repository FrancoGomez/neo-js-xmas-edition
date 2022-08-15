const $form = document.querySelector("form");
const $nombre = $form.nombre;
const $ciudad = $form.ciudad;
const $descripcionRegalo = $form["descripcion-regalo"];
const $enviarCarta = $form.submit;
const $errores = document.querySelector("#errores");
const errores = {};
let contadorErrores = 0;

$enviarCarta.onclick = (event) => {
  validarFromulario();
  event.preventDefault();
};

const validarFromulario = () => {
  errores["nombre"] = validarNombre($nombre.value);
  errores["ciudad"] = validarCiudad($ciudad.value);
  errores["descripcion-regalo"] = validarDescripcionRegalo(
    $descripcionRegalo.value
  );

  manejarErrores();

  if (contadorErrores === 0) {
    manejarEnvioFormulario();
  }
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

  return "";
};

const validarCiudad = (ciudad) => {
  if (ciudad === "") {
    return "Debes elegir una ciudad.";
  }

  return "";
};

const validarDescripcionRegalo = (descripcionRegalo) => {
  if (descripcionRegalo.length === 0) {
    return "La descripcion debe tener al menos 1 caracter.";
  }

  if (descripcionRegalo.length > 100) {
    return "La descripcion debe tener menos de 100 caracteres.";
  }

  return "";
};

const manejarErrores = () => {
  limpiarListadoErrores();
  limpiarRecuadrosRojos();
  contadorErrores = 0;

  for (const key in errores) {
    if (errores[key] === "") continue;

    $form[key].className = "error";
    imprimirError(errores[key]);

    contadorErrores++;
  }
};

const imprimirError = (error) => {
  const $error = document.createElement("li");
  $error.textContent = error;
  $errores.appendChild($error);
};

const limpiarListadoErrores = () => {
  const listadoErrores = document.querySelectorAll("#errores li");
  listadoErrores.forEach((elemento) => {
    elemento.remove();
  });
};

const limpiarRecuadrosRojos = () => {
  const listadoElementosConRecuadrosRojos = document.querySelectorAll(".error");

  listadoElementosConRecuadrosRojos.forEach((elemento) => {
    elemento.className = elemento.className.replace("error", "");
  });
};

const manejarEnvioFormulario = () => {
  $form.className += "oculto";
  document.querySelector("#exito").className = "";

  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/wishlist.html";
  }, 5000);
};
