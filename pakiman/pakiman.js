class Pakiman
{
    constructor(n, v, a)
    {   
        this.imagen = new Image(); //manera de agregar una img en Js
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        //this.tipo = "tierra";
        this.imagen.src= imagenes[this.nombre]; //como hacer el SRC en JS.
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);//agregar IMG 
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br/>");
        document.write("Vida: " + this.nombre + "<br/>");
        document.write("Ataque: "+ this.ataque);
        document.write("</p>" + "<hr/>");
    }
}