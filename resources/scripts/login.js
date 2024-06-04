// acá la lógica para tomar los datos del form, validarlos, luego buscar los
// usuarios en el localstorage y comprobar el username y password ingresados
// si los datos coindicen se redirige al index pero antes setear el valor de
// userActive a true en el localstorage

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#login-form");
    const errorMessage = document.querySelector("#error-message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const username = form.username.value;
      const password = form.password.value;
      // realizar las validaciones
      if (username.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Por favor ingrese el usuario y el password";
        return;
      }
  
      // simulacion de bd: guardar en el localstorage
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.username === username);
      const passwordOK   = users.find((user) => user.password === password);
 console.log(username , password);
      if (existingUser && passwordOK) {
        window.location.href = "carrito.html"
      return
      } else {
        errorMessage.textContent = "Verificar usuario/clave";
        return;
      }
      

    });
  });