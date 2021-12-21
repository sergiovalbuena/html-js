class Pakiman
{
    constructor(n, v, a)
    {   
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        //this.tipo = "tierra";
    }
    hablar()
    {
        alert(this.nombre);
    }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokachonononnon", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);

pokacho.hablar();