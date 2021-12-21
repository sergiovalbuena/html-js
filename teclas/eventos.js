var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  
  //keydown
  //keydown
  //mousedown
  //mouseup

  document.addEventListener("keydown", dibujarTeclado);
  var cuadrito = document.getElementById("areaDibujo");
  var papel = cuadrito.getContext("2d");
  var x = 150;
  var y = 150;
  
  dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
  
  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  
  function dibujarTeclado(evento)
  {
    var colorcito = "#FAA";
    var movimiento = 5; //si ponemos 1px, se pueden hacer casi curvas.
    switch(evento.keyCode)
    {
      case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    }
  }


/*
document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("keyup", soltarTeclado);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};



var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;


dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarTeclado(evento)
//si le pasamos eventos dentro de los parametros podemos ver en consola las KeyboardEvent{isTrusted, key, code, location, ctrlKey...}
{
 console.log("Tecla oprimida");   
 console.log(evento);
 console.log(evento.keyCode); //imprime el #keyCode 

 if(evento.keyCode == teclas.UP)
 {
     console.log("vamo' pa arriba");
     dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
     y = y - movimiento;
 }
 if(evento.keyCode == teclas.DOWN)
 {
     console.log("vamo' pa bajo");
     dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
     y = y + movimiento;
 }

var colorcito = "blue";
var movimiento = 10;

 switch(evento.keyCode)
 {
     case teclas.RIGHT:
         console.log("pa'la dere");
         dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
         x = x - movimiento;
         break;
     case teclas.LEFT:
        console.log("pa'la izqui");
        dibujarLinea(colorcito, x, y, x + movimiento, papel);
        x = x + movimiento;
        break;
    default: 
        console.log("otra tecla")
        break;

 }

}







function soltarTeclado()
{
    console.log("Tecla soltadad");
}
*/