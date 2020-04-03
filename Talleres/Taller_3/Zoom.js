// JavaScript Document

function zoomToggle()
{
    let img = document.getElementById('Img');
    console.log(img.style.width==' 450px');
    if(img.style.width=='450px')
    {
        img.style.width='225px';
    }else{
        img.style.width='450px';
    }
}


document.getElementById('tZoom').addEventListener('click',zoomToggle);