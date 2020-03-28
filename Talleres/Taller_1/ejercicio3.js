// JavaScript Document
/*
Crear un algoritmo que pida x cantidad de números e indique el porcentaje de números
pares y el porcentaje de números impares.
*/
let numDatos=0;




function OddsAndEvenPercentage()
{
    let arrayDatos=[];
     arrayDatos.length = numDatos;
    let odds=0;
    let evens=0;
    for(var i=0;i<arrayDatos.length;i++)
        {
            arrayDatos[i] = getnumericInput(0,2);//recibimos datos
            if(arrayDatos[i] % 2 == 0)
                {
                    evens++;      
                }else{
                    odds++;
                }
        }
    /*
    100% = array.length
    
    */
    //pares impares
    document.getElementById("resultados").innerHTML+=(`
porcentaje de numeros pares : ${(evens*100)/arrayDatos.length}% <br>
porcentaje de numeros impares : ${(odds*100)/arrayDatos.length}% <br>
total datos : ${arrayDatos.length} <br>
Datos recibidos ${arrayDatos}   <hr>                                              
`);
    
}

function RunCode()
{
    getnumericInput(1,1);
    OddsAndEvenPercentage();
}

