var numeros = 100; 
var divisible = false; 

for(var i = 1; i <= 100; i++)
{
    //divisible = false;
    //if(i % 3 == 0)
    if(esDiviisible(i,3))
    {
        document.write("Fizz")
        divisible = true;
    }

    //if(i % 5 == 0)
    if(esDiviisible(i,5))
    {
        document.write("Buzz")
        divisible = true;
    }

    //if(!divisible)
    //if(i%3 != 0 && i % 5 != 0)
    if(!esDiviisible(i,3) && !esDiviisible(i,5))
    {
        document.write(i);
    }
    document.write("<br />");
}

function esDiviisible(num, divisor)
{
    if(num%divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}