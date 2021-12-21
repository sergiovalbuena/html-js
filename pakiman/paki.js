var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//CICLO ESPECIAL!
for(var pakin of coleccion) 
{
    pakin.mostrar();
}

for(var x in imagenes)
{
    console.log(x);
}
for(var x in coleccion[0])
{
    console.log(x);
}

//console.log(coleccion);


/*
OBJETO LITERAL 
JSON
var imagenes = 
{
    Cauchin: "vaca.png",
    Pokacho: "pollo.png",
    Tocinauro: "cerdo.png"
}


console.log(imagenes);


var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
//console.log(cauchin, pokacho, tocinauro);

//pokacho.hablar();
pokacho.mostrar();
tocinauro.mostrar();
cauchin.mostrar();
*/