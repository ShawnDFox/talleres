// JavaScript Document
/*
    Realiza una página que muestre cinco cuadrados de diferentes colores. Cuando el
    mouse pase por encima de alguno de ellos el color de fondo será del color de relleno
    del cuadrado.
*/

// funcion para generar colores aleatorios

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// funcion añadir colores aleatorios a los divs
function getDivs()
{
    let divs = document.getElementsByClassName('card');
    
    for(var i=0;i<divs.length;i++)
        {
            
            let colores = getRandomColor();
            divs[i].style.backgroundColor = colores
            divs[i].addEventListener('mouseover',function(){
                console.log("mouseover");
                cambiarfondo(colores);
            });
        }
    // añadir onmouseover a los div y cambio a bg
    
}
function cambiarfondo(colores)
{
    document.body.style.backgroundColor = colores;
}
// 

getDivs();