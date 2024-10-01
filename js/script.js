// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Obtenemos el formulario por su ID
  let formulario = document.getElementById('formulario-prueba');

  // Función para validar el formato del correo electrónico
  function validarCorreoElectronico(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
  }

  // Función para validar el campo de texto
  function validarCampoTexto(texto) {
    return texto.trim().length > 3;
  }

  // Función para validar la contraseña
  function validarContrasena(contrasena) {
    return contrasena.trim().length > 8;
  }

  // Función para validar el checkbox
  function validarCheckbox(checkbox) {
    return checkbox.checked;
  }

  // Añadimos un listener para el evento 'submit'
  formulario.addEventListener('submit', function(event) {
    let esValido = true;

    // Validamos el correo electrónico
    let inputEmail = document.getElementById('input-email');
    let correo = inputEmail.value;
    if (!validarCorreoElectronico(correo)) {
      esValido = false;
      inputEmail.classList.add('is-invalid');
      inputEmail.classList.remove('is-valid');
      inputEmail.nextElementSibling.textContent = 'Por favor, ingresa un correo electrónico válido (nombre@organizacion.dominio)';
    } else {
      inputEmail.classList.remove('is-invalid');
      inputEmail.classList.add('is-valid');
    }

    // Validamos el campo de texto
    let inputTexto = document.getElementById('input-texto');
    let texto = inputTexto.value;
    if (!validarCampoTexto(texto)) {
      esValido = false;
      inputTexto.classList.add('is-invalid');
      inputTexto.classList.remove('is-valid');
      inputTexto.nextElementSibling.textContent = 'efqjfqljfqj.';
    } else {
      inputTexto.classList.remove('is-invalid');
      inputTexto.classList.add('is-valid');
    }

    // Validamos la contraseña
    let inputPassword = document.getElementById('input-password');
    let contrasena = inputPassword.value;
    if (!validarContrasena(contrasena)) {
      esValido = false;
      inputPassword.classList.add('is-invalid');
      inputPassword.classList.remove('is-valid');
      inputPassword.nextElementSibling.textContent = 'La contraseña debe tener más de 8 caracteres.';
    } else {
      inputPassword.classList.remove('is-invalid');
      inputPassword.classList.add('is-valid');
    }

    // Validamos el select
    let selectOpciones = document.getElementById('select-opciones');
    if (selectOpciones.value === '') {
      esValido = false;
      selectOpciones.classList.add('is-invalid');
      selectOpciones.classList.remove('is-valid');
    } else {
      selectOpciones.classList.remove('is-invalid');
      selectOpciones.classList.add('is-valid');
    }

    // Validamos los radio buttons
    let radios = document.getElementsByName('radio-group');
    let radioSeleccionado = false;
    for (let radio of radios) {
      if (radio.checked) {
        radioSeleccionado = true;
        break;
      }
    }
    let feedbackRadios = document.querySelector('fieldset .invalid-feedback');
    if (!radioSeleccionado) {
      esValido = false;
      feedbackRadios.style.display = 'block';
    } else {
      feedbackRadios.style.display = 'none';
    }

    // Validamos el checkbox
    let checkbox = document.getElementById('checkbox1');
    let feedbackCheckbox = checkbox.parentElement.querySelector('.invalid-feedback');
    if (!validarCheckbox(checkbox)) {
      esValido = false;
      checkbox.classList.add('is-invalid');
      feedbackCheckbox.textContent = 'Debes aceptar los términos y condiciones.';
      feedbackCheckbox.style.display = 'block';
    } else {
      checkbox.classList.remove('is-invalid');
      feedbackCheckbox.style.display = 'none';
    }

    // // Añadimos la clase 'was-validated' para que Bootstrap aplique los estilos
    // formulario.classList.add('was-validated');

    // Si el formulario no es válido, prevenimos el envío
    if (!esValido) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Si es válido, mostramos el mensaje de éxito
      event.preventDefault(); // Prevenimos el envío para mostrar el mensaje
      document.getElementById('mensaje-exito').classList.remove('d-none');
      // Aquí podrías realizar otras acciones, como enviar los datos a un servidor
    }

  }, false);
});
