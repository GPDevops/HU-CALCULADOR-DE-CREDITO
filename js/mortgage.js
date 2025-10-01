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
        costoTotalInmueble: 0,
        totalPrestamo: 0,
        totalIntereses: 0,
        cuotaMensual: 0
    };
    //Calculos
    mortgage.costoTotalInmueble = valorTotal;
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
function outputMortgage(datosFinales) {
    //alert("Se ha ingresado en la ultima funcion")
    document.getElementById("montoPrestamo").innerHTML = valueToDollar(datosFinales.totalPrestamo);
    document.getElementById("valorCuota").innerHTML = valueToDollar(datosFinales.cuotaMensual);
    var totalPrestamoPorcentaje = 0;
    totalPrestamoPorcentaje = (datosFinales.totalPrestamo *100 / datosFinales.costoTotalInmueble);
    //alert("El porcentaje del prestamo es: " + totalPrestamoPorcentaje);  //Debug
    //Cambiar el color del monto del prestamo si es mayor al 90%
    //<output id="montoPrestamo" class="form-control alertaPorcentaje">0</output>  <---a modificar esta clase del index.html
    if (totalPrestamoPorcentaje > 90) {
        document.getElementById("montoPrestamo").className += " alertaPorcentaje"; //Agregar clase para resaltar el valor en rojo
    }else {
        //document.getElementById("montoPrestamo").classList.remove("alertaPorcentaje"); //Remover clase
        document.getElementById("montoPrestamo").className = "form-control"; //Reestablecer clase original
    }
}
//Reiniciar formulario
function reiniciarForm() {
    document.forms["fmortgage"].reset();
}
function valueToDollar(value) {
    const dollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    return dollarFormatter.format(value);
}