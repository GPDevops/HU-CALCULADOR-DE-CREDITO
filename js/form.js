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
    id: 0,
    nombres: "",
    apellidos: "",
    numeroTelefono: "",
    correo: "",
    pais: "",
    ciudad: ""
};

//let personasArray = [];

//Utilizando funciones
function processContactForm(e) {
    persona.nombres = document.forms["formDatos"]["nombres"].value;
    persona.apellidos = document.forms["formDatos"]["apellidos"].value;
    persona.numeroTelefono = document.forms["formDatos"]["numeroTelefono"].value;
    persona.correo = document.forms["formDatos"]["correo"].value;
    persona.pais = document.forms["formDatos"]["pais"].value;
    persona.ciudad = document.forms["formDatos"]["ciudad"].value;
    if (persona.id <= 0) {
        //persona.id = allStorage().length;   //Asignar un ID unico a cada objeto  //persona.id = personasArray.length; 
        persona.id = new Date().valueOf(); //Asignar un ID unico a cada objeto por otro metodo
    }

    //Convertir el objeto a formato JSON
    let personaJson = JSON.stringify(persona);

    localStorage.setItem(persona.id, personaJson);

    //personasArray.push(personaJson);

    e.preventDefault();
    //alert("Datos ingresados con exito: " + personasArray.toString());
    alert("Datos ingresados con exito: ");
    listarcontactos();
    resetform();
}

function resetform(){
    document.forms["formDatos"].reset();
    persona.id = 0;
}

//Crear tabla dinamica

function listarcontactos() {
    let dinamicTable = "";
    //cabecera de la tabla
    dinamicTable += "<table class='table'>";
    dinamicTable += "<tr>";
    dinamicTable += "<th>Id</th>";
    dinamicTable += "<th>Nombres</th>";
    dinamicTable += "<th>Apellidos</th>";
    dinamicTable += "<th>Numero Telefonico</th>";
    dinamicTable += "<th>Correo</th>";
    dinamicTable += "<th>Pais</th>";
    dinamicTable += "<th>Ciudad</th>";
    dinamicTable += "<th>Accion</th>";
    dinamicTable += "</tr>";
    //filas con informacion de la tabla
    let personasGuardadas = [];
    personasGuardadas = allStorage();
    for (let i = 0; i < personasGuardadas.length; i++) {
        dinamicTable += "<tr>";
        let personaobjeto = JSON.parse(personasGuardadas[i]);
        dinamicTable += "<td>" + personaobjeto.id + "</td>";
        dinamicTable += "<td>" + personaobjeto.nombres + "</td>";
        dinamicTable += "<td>" + personaobjeto.apellidos + "</td>";
        dinamicTable += "<td>" + personaobjeto.numeroTelefono + "</td>";
        dinamicTable += "<td>" + personaobjeto.correo + "</td>";
        dinamicTable += "<td>" + personaobjeto.pais + "</td>";
        dinamicTable += "<td>" + personaobjeto.ciudad + "</td>";
        dinamicTable += "<td>" + '<a href="./detalles.html?id=' + personaobjeto.id + '">Ver</a>' + "</td>";
        dinamicTable += "<td>" + '<a href="javascript:editarContacto(' + personaobjeto.id + ');">Editar</a>' + "</td>";
        dinamicTable += "<td>" + '<a href="javascript:eliminarContacto(' + personaobjeto.id + ');">Eliminar</a>' + "</td>";
        dinamicTable += "</tr>";
        dinamicTable += "<tr>";
    }
    dinamicTable += "</table>";
    document.getElementById("tablecontact").innerHTML = dinamicTable;
}

//Guardar datos en el almacenamiento local del navegador
function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    return values;
}

//Pinta en la vista de detalles la informacion del cotnacto seleccionado
function verDetalles() {
    let contactoId = obtenerParametroUrl();
    let contacto = localStorage.getItem(contactoId);
    if (contacto.length > 0) {
        let personaObjeto = JSON.parse(contacto);
        document.getElementById("nombres").innerText = personaObjeto.nombres;
        document.getElementById("apellidos").innerText = personaObjeto.apellidos;
        document.getElementById("numeroTelefono").innerText = personaObjeto.numeroTelefono;
        document.getElementById("correo").innerText = personaObjeto.correo;
        document.getElementById("pais").innerText = personaObjeto.pais;
        document.getElementById("ciudad").innerText = personaObjeto.ciudad;
    }
}

//busca un contacto y lo pinta en el formulario para permitir modificarlo

function editarContacto(id) {
    let contacto = localStorage.getItem(id);
    if (contacto.length > 0) {
        let personaObjeto = JSON.parse(contacto);
        document.getElementById("nombres").value = personaObjeto.nombres;
        document.getElementById("apellidos").value = personaObjeto.apellidos;
        document.getElementById("numeroTelefono").value = personaObjeto.numeroTelefono;
        document.getElementById("correo").value = personaObjeto.correo;
        document.getElementById("pais").value = personaObjeto.pais;
        document.getElementById("ciudad").value = personaObjeto.ciudad;
        persona.id = id;
    }
    listarcontactos();
}

//elimina un contacto del localstorage 
function eliminarContacto(id) {
    let contacto = localStorage.getItem(id);
    if (contacto.length > 0) {
        localStorage.removeItem(id);
        alert("Contacto eliminado");
    }
    listarcontactos();
}

function obtenerParametroUrl() {
    let url = window.location.href;
    let paramString = url.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    let parameterId = 0;
    for (let pair of queryString.entries()) {
        console.log("Key: " + pair[0]);
        console.log("Value: " + pair[1]);
        parameterId = Number(pair[1]);

    }
    return parameterId;
}



