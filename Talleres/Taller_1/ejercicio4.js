// JavaScript Document
/*
Crear un algoritmo que imprima los números del 1 al 100 y del 101 al 200. El usuario debe
poder escoger la opción a imprimir.
*/

function PrintNumbers()
{
    switch(getnumericInput(1,3))
        {
            case 1: for(var i=0;i<100;i++)
            {
                document.getElementById("resultados").innerHTML+=(i+1+",");
                if((i+1)%5==0)
                    {
                        document.getElementById("resultados").innerHTML+=("<br>")
                    }
            }
                document.getElementById("resultados").innerHTML+=("<hr>");
            break;
            case 2:
                for(var i=100;i<200;i++)
            {
                document.getElementById("resultados").innerHTML+=(i+1+",")
                if((i+1)%5==0)
                    {
                        document.getElementById("resultados").innerHTML+=("<br>")
                    }
            }
                document.getElementById("resultados").innerHTML+=("<hr>");
                ;
            break;
        }
}