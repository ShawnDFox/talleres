// JavaScript Document
/*
Crear un algoritmo en el cual el usuario tenga que adivinar un número. Este número lo
creará el sistema al azar. El usuario tiene solo 10 intentos y el sistema debe mostrar si el
usuario está cerca o lejos de dar con el número programado por el sistema.
*/

function NumeroRandom()
{
    return parseInt((Math.random() * 50)+1);
    
    
}

function GameRandom()
{
    let myNumber = NumeroRandom();
    console.log(myNumber);
    let suNumero;
    let adivino=false;
    for(var i=10;i>0;i--)
        {
            let distancia=0;
            suNumero = prompt(`intente adivinar mi numero \n esta entre 0 y 50 \n intentos restantes ${i}`);
            
            /*
                frio tibio o caliente
                >30  >15      >5
                que tan lejos esta su numero de mi numero
                distancia=abs(mynumero-su numero)
                mi<0 descartar
                mi>50 descartar
            */
            if(suNumero == myNumber)
                {
                    alert(`Usted ha adivinado el numero es: ${myNumber}`)
                    adivino = true;
                    break;
                }
            else{
                distancia=Math.abs(myNumber-suNumero);
                console.log(`distancia = ${distancia}`);
                if(distancia > 15)
                   {
                       alert(`frio`);
                   }
                if(distancia > 5 && distancia <= 15)
                   {
                       alert(`tibio`);
                   }
                if(distancia >= 1 && distancia <= 5)
                   {
                       alert(`caliente`);
                   }
            }
        }
    if(adivino==false)
        {
            alert(`Te has quedado sin intentos.\n mi numero era  ${myNumber}`);
        }
}

    
    