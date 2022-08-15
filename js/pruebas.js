const probarValidarNombre = () => {
  console.assert(
    validarNombre("") === "El nombre debe contener al menos 1 caracteres.",
    "Validar nombre no validó que el nombre tenga al menos 1 caracter."
  );

  console.assert(
    validarNombre(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ) === "El nombre debe contener menos de 50 caracteres.",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres."
  );

  console.assert(
    validarNombre("Fran23") ===
      "El nombre solo debe contener letras, estas pueden ser minusculas o mayusculas.",
    "Validar nombre no validó que el nombre solo contenga letras."
  );

  console.assert(
    validarNombre("Fran") === "",
    "Validar nombre fallo con un nombre valido."
  );
};

const probarValidarCiudad = () => {
  console.assert(
    validarCiudad("") === "Debes elegir una ciudad.",
    "Validar ciudad no valido que se haya elegido al menos una ciudad."
  );

  console.assert(
    validarCiudad("Catamarca") === "",
    "Validar ciudad fallo con una ciudad valida."
  );
};

const probarValidarDescripcionRegalo = () => {
  console.assert(
    validarDescripcionRegalo("") ===
      "La descripcion debe tener al menos 1 caracter.",
    "Validar descripcion regalo no valido que la descripcion contenga al menos 1 caracter."
  );

  console.assert(
    validarDescripcionRegalo(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ) === "La descripcion debe tener menos de 100 caracteres.",
    "Validar descripcion regalo no valido que la descripcion contenga menos de 100 caracteres."
  );

  console.assert(
    validarDescripcionRegalo("Max Steel") === "",
    "Validar descripcion regalo fallo con una descripcion valida."
  );
};

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
