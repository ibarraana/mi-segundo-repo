/*
    Utilizar un formulario para ingresar usuarios y guardarlos en un array vacio.
    A partir de eses array cargar una tabla de usuarios.

    La pagina debe estar compuesta por un formulario arriba y la tabla debajo.
*/

// Aqui investigue que debo poner entre llaves el objeto usuarios, vi videos de NodeJS
import { usuarios } from "./clase 8-9/usuarios.js";

let botonGuardar = document.getElementById("guardar");

let contador = 0;
let nombre = "";
let edad = 0;
let email = "";
let telefono = 0;
let activo = false;

botonGuardar.addEventListener("click", (event) => {

    /* Esto que es event.preventDefault lo averigue porque se actualizaba
     todo el tiempo la pagina y me borraba la tabla que habia hecho */
    event.preventDefault()

    contador++
    nombre = document.getElementById("txtNombre").value
    edad = document.getElementById("txtEdad").value
    email = document.getElementById("txtEmail").value
    telefono = document.getElementById("txtTelefono").value
    activo = document.getElementById("chkActivo").checked

    usuarios.push({
        id: contador,
        nombre: nombre,
        edad: edad,
        email: email,
        telefono: telefono,
        activo: activo,
    });

    document.querySelector('form').reset()
    cargarTabla();
});

function cargarTabla() {
  const tabla = document.getElementById("tablaUsuarios")

  /* Esto tambien lo encontre en internet tabla.innerHTML y lo agregue, fue porque se me repetia informacion en la tabla, 
  asi que vi que habia que limpiarla para que no sucediera */
  tabla.innerHTML = ''

  usuarios.forEach((usuario) => {
    let fila = document.createElement("tr")

    fila.innerHTML = `
      <td class="border border-gray-300 px-4 py-2 ">${usuario.id}</td>
      <td class="border border-gray-300 px-4 py-2">${usuario.nombre}</td>
      <td class="border border-gray-300 px-4 py-2">${usuario.edad}</td>
      <td class="border border-gray-300 px-4 py-2">${usuario.email}</td>
      <td class="border border-gray-300 px-4 py-2">${usuario.telefono}</td>
      <td class="border border-gray-300 px-4 py-2">${usuario.activo ? "Sí" : "No"}</td>
    `;

    tabla.appendChild(fila)
  });
}

