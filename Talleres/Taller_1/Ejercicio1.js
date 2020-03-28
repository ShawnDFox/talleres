// JavaScript Document
/*
Pepe desea saber cuál será su calificación final en la materia de Lógica de Programación y
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
- 55% promedio de tres parciales
- 30% Examen Final
- 15% Trabajo final
*/

let notas=[];
notas.length=5;
let promedioParciales;
let notaFinal;
function calcNote()
{
    let mensaje="";
    for(var i=0;i<notas.length;i++)
        {
            if(i<=2)
               {
                   mensaje = `por favor ingrese nota del parcial ${i+1}`;
               }else if(i==3)
                     {
                       mensaje= `por favor ingresar nota del examen final`;
                     }else if(i==4)
                            {
                                mensaje= `por favor ingresar nota del Trabajo final`;
                            }
            
            
            notas[i] = getnumericInput(0,mensaje);
        }
    /*suma los primeros tres valores dividido en 3*/
    
    promedioParciales = (notas[0] + notas[1] + notas[2])/3; // yo se peresoso eso
    notaFinal = (promedioParciales * 0.55)+(notas[3]*0.3)+(notas[4]*0.15); //x0.3(30%) x0.15 (15%)
    document.getElementById("resultados").innerHTML+=(`su nota final es: ${notaFinal} <br><hr>`);
}






