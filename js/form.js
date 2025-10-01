//Verificar los valores de entrada. 1ra solucion
/*function procesarContacForm() {
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
}*/

//Verificar los valores de entrada. 2a solucion

const persona = {
    nombres: "",
    apellidos: "",
    numeroTelefono: "",
    correo: "",
    pais: "",
    ciudad: ""
};

let personasArray = [];

//Utilizando funciones
function processContactForm(e) {
    persona.nombres = document.forms["formDatos"]["nombres"].value;
    persona.apellidos = document.forms["formDatos"]["apellidos"].value;
    persona.numeroTelefono = document.forms["formDatos"]["numeroTelefono"].value;
    persona.correo = document.forms["formDatos"]["correo"].value;
    persona.pais = document.forms["formDatos"]["pais"].value;
    persona.ciudad = document.forms["formDatos"]["ciudad"].value;

    let personaJson = JSON.stringify(persona);

    personasArray.push(personaJson);

    e.preventDefault();
    //alert("Datos ingresados con exito: " + personasArray.toString());

}
//Crear tabla dinamica

function listarcontactos() {
    let dinamicTable = "";
    //cabecera de la tabla
    dinamicTable += "<table class='table table-striped'>";
    dinamicTable += "<tr>";
    dinamicTable += "<th>Nombres</th>";
    dinamicTable += "<th>Apellidos</th>";
    dinamicTable += "<th>Numero Telefonico</th>";
    dinamicTable += "<th>Correo</th>";
    dinamicTable += "<th>Pais</th>";
    dinamicTable += "<th>Ciudad</th>";
    dinamicTable += "</tr>";
//filas con informacion de la tabla
for (let i = 0; i < personasArray.length; i++) {
    dinamicTable += "<tr>";
    let personaobjeto = JSON.parse(personasArray[i]);
    dinamicTable += "<td>" + personaobjeto.nombres + "</td>";
    dinamicTable += "<td>" + personaobjeto.apellidos + "</td>";
    dinamicTable += "<td>" + personaobjeto.numeroTelefono + "</td>";
    dinamicTable += "<td>" + personaobjeto.correo + "</td>";
    dinamicTable += "<td>" + personaobjeto.pais + "</td>";
    dinamicTable += "<td>" + personaobjeto.ciudad + "</td>";
    dinamicTable += "</tr>";
}
    dinamicTable += "</table>";
    document.getElementById("tablecontact").innerHTML = dinamicTable;
} 