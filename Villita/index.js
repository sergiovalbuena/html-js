/*
parseInt(3.78)
Math.ceil (3.78) // 4
Math.floor(3.78) //3
Math.random();

Math.floor(random * (maxi-min+1))+min;
*/


/*
prueba de aletoriedad: 
var z;
for(var i = 0; i < 10; i++)
{
    z = aleatorio(1,20); //definicion del rango
    document.write(z + ", ");
}
*/

var vp = document.getElementById("villita");
var papel = vp.getContext("2d");
//var mapa = "imgs/tile.png";
//var imgVaca = "imgs/vaca.png";


var fondo = {
    url: "imgs/tile.png",
    cargaOK: false
}
var vaca = {
    url: "imgs/vaca.png",
    cargaOK: false
};

var cantidad = aleatorio(5,14);

fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//carga imagenes 
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();

}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();

}

/*
var cerdo = new Image();
cerdo.src = "imgs/cerdo.png";
cerdo.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "imgs/pollo.png";
pollo.addEventListener("load", cargarPollos);
*/

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        //mejor ponemos esto afuera para que no se ejeqcute dos veces;
        //var cantidad = aleatorio(5,14);
        console.log(cantidad);
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x*60;
            var y = y*60;
            papel.drawImage(vaca.imagen,x,y);
        }
    }
}


function aleatorio(min, max)
{
    var resultado; 
    resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado; 
}