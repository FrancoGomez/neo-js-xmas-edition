const probarValidarNombre = () => {
  console.assert(
    validarNombre("") === "El nombre debe contener al menos 2 caracteres.",
    "Validar nombre no validó que el nombre tenga al menos 2 caracteres."
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
};

const probarValidarCiudad = () => {
  console.assert(
    validarCiudad("") === "Debes elegir una ciudad.",
    "Validar ciudad no valido que se haya elegido al menos una ciudad."
  );
};

const probarValidarDescripcionRegalo = () => {
  console.assert(
    validarDescripcionRegalo("a") ===
      "La descripcion debe tener al menos 2 caracteres.",
    "Validar descripcion regalo no valido que la descripcion contenga al menos dos caracteres."
  );

  console.assert(
    validarDescripcionRegalo(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ) === "La descripcion debe tener menos de 250 caracteres.",
    "Validar descripcion regalo no valido que la descripcion contenga menos de 250 caracteres."
  );
};

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
