// JavaScript Document

//asignar funciones


const Vid = document.getElementById('Vid');


function playToggle()
{   
       if(Vid.paused)
           {
               Vid.play();
           }else
           {
               Vid.pause();   
           }
}
function vUp()
{
    try{
    console.log
    Vid.volume +=0.1;
        }catch(e)
        {
             console.log(e);
            console.log("posiblemente no puede subir mas");
        }
}
function vDown()
{
    try{
    Vid.volume -=0.1;
    }catch(e)
        {
             console.log(e);
            console.log("posiblemente no puede bajar mas");
        }
}
function mute()
{
    
    if(Vid.volume==0)
        {
            Vid.volume = 1;
        }else{
            Vid.volume = 0;
        }
    
}

function rewind()
{
    try{
        Vid.currentTime-=10;
    }catch(e)
        {
            console.log(e);
            console.log("posiblemente no puede retroceder mas");
        }
}

function forward()
{
    try{
        Vid.currentTime+=10;
    }catch(e)
        {
            console.log(e);
            console.log("posiblemente no puede adelantar mas");
        }
}

document.getElementById('SV').addEventListener('click',vUp);
document.getElementById('BV').addEventListener('click',vDown);
document.getElementById('M').addEventListener('click',mute);
document.getElementById('FW').addEventListener('click',forward);
document.getElementById('RW').addEventListener('click',rewind);
document.getElementById('PP').addEventListener('click',playToggle);