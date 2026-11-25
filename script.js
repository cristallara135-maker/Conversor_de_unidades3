function calcular() {

    var cm = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(cm)) {
        alert("Ingresa una cantidad");
        return;
    }

    var mm = cm * 10;
    var m = cm / 100;
    var km = cm / 100000;
    var p = cm / 2.54;

    document.getElementById("milimetros").innerHTML =
    "Milimetros: " + mm;

    document.getElementById("metros").innerHTML =
    "Metros: " + m;

    document.getElementById("kilometros").innerHTML =
    "Kilometros: " + km;

    document.getElementById("pulgadas").innerHTML =
    "Pulgadas: " + p;

    document.getElementById("resultados").style.display = "block";

}