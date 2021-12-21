var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

/*
OBJETO LITERAL 
JSON
var imagenes = 
{
    Cauchin: "vaca.png",
    Pokacho: "pollo.png",
    Tocinauro: "cerdo.png"
}
*/ 

console.log(imagenes);


var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
//console.log(cauchin, pokacho, tocinauro);

//pokacho.hablar();
pokacho.mostrar();
tocinauro.mostrar();
cauchin.mostrar();