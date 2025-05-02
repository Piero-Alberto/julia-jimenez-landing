document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    // Limpiar mensajes de error previos
    let errores = document.querySelectorAll('.error');
    errores.forEach(function(error) {
      error.style.display = 'none';
    });

    let formValido = true;

    // Validar campo de nombre
    if (nombre === '') {
      document.getElementById('error-nombre').textContent = 'El campo nombre es obligatorio.';
      document.getElementById('error-nombre').style.display = 'block';
      formValido = false;
    }

    // Validar campo de email
    if (email === '') {
      document.getElementById('error-email').textContent = 'El campo email es obligatorio.';
      document.getElementById('error-email').style.display = 'block';
      formValido = false;
    } else if (!validarEmail(email)) {
      document.getElementById('error-email').textContent = 'Introduce un email válido.';
      document.getElementById('error-email').style.display = 'block';
      formValido = false;
    }

    // Validar campo de mensaje
    if (mensaje === '') {
      document.getElementById('error-mensaje').textContent = 'El campo mensaje es obligatorio.';
      document.getElementById('error-mensaje').style.display = 'block';
      formValido = false;
    }

    // Si el formulario es válido, enviar (aquí se puede hacer el envío)
    if (formValido) {
      alert('Formulario enviado correctamente');
      // Aquí puedes hacer el envío real del formulario, por ejemplo, usando fetch o AJAX
      // this.submit(); // Descomentar para permitir el envío
    }
  });

  // Función para validar el formato del email
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
