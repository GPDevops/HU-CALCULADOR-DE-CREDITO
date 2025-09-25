//Definir los valores de entrada
function calculateMortage(event) {                                  
    event.preventDefault();                                             //Prevenir que realice el comportamiento default
    let valorTotal = document.forms["fmortgage"]["valorTotal"].value;
    //alert("El valor Total es: " + valorTotal)
    let cuotaInicial = document.forms["fmortgage"]["cuotaInicial"].value;
    let tasaInteres = document.forms["fmortgage"]["tasaInteres"].value;
    let plazo = document.forms["fmortgage"]["plazo"].value;
    //alert("El valor Total es: " + valorTotal + " La cuota inicial es: " + cuotaInicial + " La tasa de interes: " + tasaInteres + " El plazo es: " + plazo)
    //Definir los valores de salida
    const mortgage = {
        totalPrestamo: 0,
        totalIntereses: 0,
        cuotaMensual: 0
    };
    //Calculos
    const monthsOfYear = 12;
    mortgage.totalPrestamo = valorTotal - cuotaInicial;
    //alert("La diferencia entre el valor total del inmueble y la cuota de entrada es: " + mortgage.totalPrestamo)
    mortgage.totalIntereses = mortgage.totalPrestamo * (tasaInteres / 100);
    //alert("El total de interes es: " + mortgage.totalIntereses)
    mortgage.cuotaMensual = (mortgage.totalPrestamo + mortgage.totalIntereses) / (plazo * monthsOfYear);
    //alert("La cuota mensual es: " + mortgage.cuotaMensual)
    outputMortgage(mortgage);
}
//Mostrar valores
function outputMortgage (datosFinales) {
    //alert("Se ha ingresado en la ultima funcion")
    document.getElementById("montoPrestamo").innerHTML = datosFinales.totalPrestamo;
    document.getElementById("valorCuota").innerHTML = datosFinales.cuotaMensual;
}
//Reiniciar formulario
function reiniciarForm() {
    document.forms["fmortgage"].reset();
}