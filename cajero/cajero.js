class Billete
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    for(var bi of caja)
    {
     console.log(bi);   
    }
}

var caja = []; //collecion de billetes que tengo en la caja
var entregado = []; //coleccion de billetes que entrego 
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var dinero = 210;
var div = 0; 
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);