var url = "https://alumnos-mcsd2014.azure-mobile.net/Tables/alumnos";

function pintarTabla(datos) {
    var tabla = document.getElementById("datos");//

    while (tabla.childNodes.lenght > 0) {
        tabla.removeChild(tabla.childNodes[0]);//lo primero que hago es borrar el contenido de la tabla
    }

    for (var i = 0; i < datos.lenght; i++) { //creo fila, celda y los textos
        var fila = document.createElement("tr");
        var c1 = document.createElement("tr");
        var c2 = document.createElement("tr");
        var c3 = document.createElement("tr");

        var t1 = document.createTextNode(datos[i].nombre);//añado el texto a las celdas
        var t2 = document.createTextNode(datos[i].edad);
        var t3 = document.createTextNode(datos[i].nota);

        c1.appendChild(t1);//a las filas añado los textos
        c2.appendChild(t2);
        c3.appendChild(t3);

        fila.appendChild(c1);//a las filas añado las celdas
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appendChild(fila);//a la tabla añado la fila
    }
}

function cargar() { //primero creo una función, y le digo que voy a trabjar con ajax, así que le digo que cree un objeto ajax
    var ajax = new XMLHttpRequest();

    ajax.open("get",url); //abreme una petición ajax y le digo que voy a usar el método get

    ajax.onreadystatechange = function () { 
        if (ajax.readyState == 4) {
            //esto es preguntarle si hemos terminado la petición, en referencia a los estados, 4 es todo listo, entonces me avisa
            var res = ajax.responseText;//me avisa quiere decir que ejecuta esta función anónima, aquí como sé que me devuelve texto, así le digo que me de ResponseText
            var datos = eval(res); //aquí lo que hace, es que eval es una función de javascript que traduce el string que me ha dado, el que es res, y me lo da en este caso como un array, que es lo que me da azure por el get
            pintarTabla(datos);//este array me lo escribes en la tabla, con la función que le he dicho de pintarla

        }
    };

    ajax.send(null); //cuando hemos configurado todo, al final pongo un nulo


}
 (function () {
     cargar();
 } )()