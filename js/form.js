//Verificar los valores de entrada
function guardar() {
    let nombres = document.forms["formDatos"]["nombres"].value;
    //alert("Los nombres ingresados son: " + nombres)
    let apellidos = document.forms["formDatos"]["apellidos"].value;
    //alert("Los apellidos ingresados son: " + apellidos)
    let numeroTelefono = document.forms["formDatos"]["numeroTelefono"].value;
    //alert("El numero telefonico ingresado es: " + numeroTelefono)
    let correo = document.forms["formDatos"]["correo"].value;
    //alert("El correo ingresado es: " + correo)
    let pais = document.forms["formDatos"]["pais"].value;
    //alert("El pais ingresado es: " + pais)
    let ciudad = document.forms["formDatos"]["ciudad"].value;
    alert("Datos ingresados con exito: ")
}