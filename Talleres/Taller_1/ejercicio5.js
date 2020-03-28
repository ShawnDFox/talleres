// JavaScript Document
/*
Realiza un script que pida un texto e indique si es un palíndromo en un alert. Ejemplo de
palíndromo: “amor a roma”.
*/

function Palindromo()
{
    let texto=GetTextInput(3);
    let arrayFromText = Array.from(texto);
    if(arrayFromText == arrayFromText.reverse())
        {
            alert("Es un palindromo!");
        }else{
            alert("No es un palindromo");
        }
    document.getElementById("resultados").innerHTML+=(texto+"<br>");
}