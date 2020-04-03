
let Seld=null;
function addDiv()
{
    let divs = document.getElementsByClassName('slice');
    let newdiv = document.createElement('div');
    let Ci=divs.length;
    newdiv.classList.add('slice');
    newdiv.appendChild(document.createTextNode(`div: ${Ci}`));
    document.getElementById('resultados').appendChild(newdiv);
    newdiv.addEventListener('click',function(){
        
        console.log(this);
        Seld = this;
    });
    
}

function delDivs()
{
    let divs = document.getElementsByClassName('slice');
    console.log(divs.length);
    do{
        i=divs.length-1;
        divs[i].remove();
    }while(i>0);
    
   
}
function dOdds()
{
    let divs = document.getElementsByClassName('slice');
    console.log(divs.length);
    var i=divs.length-1;
    do{
        
        if(!(i%2)==0)
        {
        divs[i].remove();
        }
        i--;
    }while(i>0);
}
function dSelected()
{
    let divs = document.getElementsByClassName('slice');
    Seld.remove();
    Seld = null;
}

document.getElementById('addDiv').addEventListener('click',addDiv);
document.getElementById('dAllDiv').addEventListener('click',delDivs);
document.getElementById('dOddDiv').addEventListener('click',dOdds);
document.getElementById('dSelected').addEventListener('click',dSelected);