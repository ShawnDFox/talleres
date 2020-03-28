// JavaScript Document
/*
Crear un algoritmo que almacene una lista de nombres en un arreglo y luego ordenarlos
alfabéticamente. No se sabe la cantidad de datos que se ingresarán. Se ingresa una lista de
nombres (la lista termina cuando se ingresa un espacio en blanco) si se repite un nombre,
el sistema debe mostrar un mensaje indicando al usuario que no debe repetir nombres y
continuar con la lista.
*/

function OrderNames()
{
    let names=[];
    names.length=1;
    let finish=false;
    let i=0;
    let repeated=false;
    do{
        names[i] = GetTextInput(4);
        if(names[i]==" ")
        {
            finish=true;
            
        }else if(!isNaN(names[i]))
        {
            alert("porfavor no ingresar numeros");
        }else{
            if(names.length-1>0)
                {
                    console.log("comparando")
                for(var j=0;j<names.length-1;j++)
                    {
                        if(names[i]===names[j])
                            {
                               repeated=true;
                            }
                    }
                    
                }
            if(repeated)
            {
                alert(`nombre esta repetido\n por favor ingresar uno nuevo`);
                repeated=false;
            }else{
                i++;
                names.length++;
            }
            console.log(names);
            
        }
        console.log(finish);
    }while(!finish)
        console.log(names);
        names.length-=1;
    console.log(names);
    if(names.length>1)
        {
        for(i=0;i<names.length;i++)
            {
                var aux1;
                //var aux2;
                // aux1 = numArray[i];
                // outputArray[i]=outputArray[i].charAt(0);
                for(var j=0;j<names.length;j++)
                {
                    if(names[i] < names[j])
                    {
                        aux1=names[i];
                        names[i] = names[j];
                        names[j] = aux1;
                    }
                }
            }
        }
    document.getElementById("resultados").innerHTML+=`la lista de nombres es:<br> ${names}`;
}