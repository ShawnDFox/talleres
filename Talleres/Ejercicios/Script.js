// JavaScript Document
/*
    Crear los siguientes botones
    Un boton para agregar un dato nuevo a un JSON
    un boton para modificar un dato de json
    
    tema libre
    
    crear un objeto carro con las siguientes caracteristicas.
    marca, modelo, kilometraje
    crear un conductor que herede las caracteristicas del auto
    color del auto y nombre del conductor
*/

var Info = {"Carros":[]}

class Car
    {
        constructor(marca, modelo, kilometraje){
            this.marca = marca;
            this.modelo = modelo;
            this.kilometraje = kilometraje; 
        }
    }

class Owner extends Car
{
   
    constructor(marca, modelo, kilometraje,nombre,apellido,cedula)
    {
        super(marca,modelo,kilometraje);
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
    }
    
    //imprimir contenido
    printInfo(index)
    {
        
        console.log("printing info");
        let Card = document.createElement('div');
        Card.classList.add('card');
        let content = document.createTextNode(`Marca: ${this.marca},Modelo: ${this.modelo},Kilometraje: ${this.kilometraje}\nPropietario: ${this.nombre} ${this.apellido} Documento: ${this.cedula}`);
        Card.appendChild(content);
        Card.addEventListener('click',function(index){    
            modifyData(index);
        });
        document.getElementById("ShowData").appendChild(Card);
    }
    
    modifyData(index)
    {
        var data = Info.Carros[index];
         document.getElementById("Marca").value = data.marca;
         document.getElementById("Modelo").value = data.modelo;
         document.getElementById("Kilometraje").value = data.kilo;
         document.getElementById("Nombre").value = data.nombre;
         document.getElementById("Apellido").value = data.apellido;
         document.getElementById("Cedula").value = data.cedula;
    }
}
//save to LocalStorage
function Save(data)
{
    Info.Carros.push(data);
    localStorage.setItem("Carros",JSON.stringify(Info));
}

//load from localstorage
function Load()
{
    let SavedInfo = localStorage.getItem("Carros");
    console.log("LS: "+SavedInfo);
    try{
        var readedInfo = JSON.parse(SavedInfo);
        for(var i=0;i<readedInfo.Carros.length;i++)
            {
                CreateCarFromLS(readedInfo.Carros[i],i);        
            }
        
    }catch(E)
        {
            alert("LS corrupted, deleting variable Carros");
            localStorage.removeItem("Carros");
        }
    
}
function CreateCarFromLS(data,ind)
{
    let Carro = new Owner(data.marca,data.modelo,data.kilo,data.nombre,data.apellido,data.cedula);
    Carro.printInfo(ind);
}
//update from LocalStorage
function CreateCar()
{
    console.log("creating car");
    let data = GetInputs();
    let Carro = new Owner(data.marca,data.modelo,data.kilo,data.nombre,data.apellido,data.cedula);
    Carro.printInfo();
    Save(data);
}




function GetInputs()
{
    //console.log("getting info");
    let Jdata={
        "marca" : document.getElementById("Marca").value,
        "modelo" : document.getElementById("Modelo").value,
        "kilo" : document.getElementById("Kilometraje").value,
        "nombre" : document.getElementById("Nombre").value,
        "apellido" : document.getElementById("Apellido").value,
        "cedula" : document.getElementById("Cedula").value
    }
    console.log("info: " + JSON.stringify(Jdata));
    return Jdata;
}

Load();
let btn = document.getElementById('btn');
btn.addEventListener('click',CreateCar);