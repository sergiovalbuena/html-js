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
var mapa = "imgs/tile.png";
var imgVaca = "imgs/vaca.png";


var fondo = new Image(); 
fondo.src = mapa;
fondo.addEventListener("load", dibjuar);

//carga imagenes 
var vaca = new Image();
vaca.src = imgVaca;
vaca.addEventListener("load", dibujarVacas);

var cerdo = new Image();
cerdo.src = "imgs/cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

var pollo = new Image();
pollo.src = "imgs/pollo.png";
pollo.addEventListener("load", dibujarPollos);

function dibjuar()
{
    papel.drawImage(fondo, 0, 0);
}
function dibujarVacas()
{
    papel.drawImage(vaca, 100, 10);
}
function dibujarCerdos()
{
    papel.drawImage(cerdo, 230, 450);
}
function dibujarPollos()
{
    papel.drawImage(pollo, 400, 20);
}


function aleatorio(min, max)
{
    var resultado; 
    resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado; 
}