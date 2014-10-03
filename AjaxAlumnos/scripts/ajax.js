var url = "https://alumnos-mcsd2014.azure-mobile.net/Tables/alumnos";

function pintarTabla(datos) {
    var tabla = document.getElementById("datos");

    while (tabla.childNodes.lenght > 0) {
        tabla.removeChild(tabla.childNodes[0]);
    }

    for (var i = 0; i < datos.lenght; i++) { //borro la tabla, creo la fila, la celda y los nodos de texto, luego aplico los nodos a las celdas y a las filas
        var fila = document.createElement("tr");
        var c1 = document.createElement("tr");
        var c2 = document.createElement("tr");
        var c3 = document.createElement("tr");

        var t1 = document.createTextNode(datos[i].nombre);
        var t2 = document.createTextNode(datos[i].edad);
        var t3 = document.createTextNode(datos[i].nota);

        c1.appendChild(t1);
        c2.appendChild(t2);
        c3.appendChild(t3);

        fila.appendChild(c1);
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appendChild(fila);
    }
}

function cargar() {
    var ajax = new XMLHttpRequest();

    ajax.open("get",url);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            //esto es preguntarle si hemos terminado la petición, en referencia a los estados, 4 es todo listo
            var datos = ajax.responseText;

        }
    };

    ajax.send(null); //cuando hemos configurado todo, al final pongo un nulo


}
 (function () {
     cargar();
 } )()