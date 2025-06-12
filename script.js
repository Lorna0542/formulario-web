// script.js
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (username && email) {
    alert(`Registro exitoso:\nUsuario: ${username}\nCorreo: ${email}`);
    // Aquí podrías enviar los datos a un backend
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
