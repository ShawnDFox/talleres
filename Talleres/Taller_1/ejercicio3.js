// JavaScript Document
/*
Crear un algoritmo que pida x cantidad de números e indique el porcentaje de números
pares y el porcentaje de números impares.
*/
let numDatos=0;

function getnumericInput()
{
    do{
        numDatos = Number(prompt(`por favor indique el numero de datos que ingresara`));
        console.log(numDatos);
            
    }while(isNaN(numDatos) || numDatos < 1);
return numDatos;
}

function OddsAndEvenPercentage()
{
    
}

