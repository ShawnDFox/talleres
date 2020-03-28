// JavaScript Document
/*
Crear un script que muestre una palabra o frase ingresada al revés y que indique cuántas
letras y espacios tiene.
*/

function SplitText()
{
    let texto = GetTextInput(5);
    let arrayFromText = Array.from(texto);
    let letters=0;
    let spaces=0;
    let numbers=0;
    for(var i =0;i<arrayFromText.length;i++)
        {
            if(arrayFromText[i]==" ")
                {
                    spaces++;
                }else if(!isNaN(arrayFromText[i]))
               {
                    numbers++;
               }else 
                {
                    letters++
                }
            
        }
    var txet = arrayFromText.reverse().join("")
    document.getElementById("resultados").innerHTML+=`la palabra <b>${texto}</b> al revez se lee <b>${txet}</b> y contiene: <br> ${letters} letras<br> ${spaces} espacios<br> ${numbers} numeros<br><hr>`;
}

function getnumericInput(condicion,mensaje)
{
    let msg;
    do{
        if(isNaN(mensaje))
            {
                msg = mensaje;
            }else{
            switch(mensaje)
               {
                   case 1: msg= `por favor indique el numero de datos que ingresara`;
                   break;

                   case 2:  msg = `por favor ingrese un dato`;
                   break;
                   case 3:  msg = `por favor ingrese una opcion \n 1 para imprimir de 1-100 \n 2 para imprimir de 101 a 200 \n cualquier otro numero para salir`;
                   break;
               }
            }
        
        numDatos = Number(prompt(msg));
        console.log(numDatos);
            
    }while(isNaN(numDatos) || numDatos < condicion);
return numDatos;
}

function GetTextInput(mensaje)
{
    let msg;

        if(isNaN(mensaje))
            {
                msg = mensaje;
            }else{
            switch(mensaje)
               {
                   case 1: msg= `por favor ingrese una frase`;
                   break;

                   case 2:  msg = `por favor ingrese una palabra`;
                   break;
                   case 3:  msg = `por favor ingrese un palindromo`;
                   break;
                   case 4:  msg = `por favor ingrese un nombre \n o un espacio en blanco para ejecutar`;
                   break; 
                   case 5:  msg = `por favor ingrese una palabra o frase`;
                   break;       
               }
            }
        
        numDatos = prompt(msg);
        //console.log(numDatos);
            
    
return numDatos;
}