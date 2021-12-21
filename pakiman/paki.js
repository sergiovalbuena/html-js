class Pakiman
{
    constructor(n, v, a)
    {   
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = "tierra";
    }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
console.log(cauchin);
console.log(pokacho);