/* JavaScript Document
ajax se entinede como una llamada asincronica al servidor
se usa para crear pagina que no se recargen desde el navegador
y da una vista mas dinamica y limpia
*/
$(document).ready(function(){
    
    $('#finder').keyup(function(){//se ejecuta cuando una tecla es soltada en el input de busqueda rapida
        if(this.value!='')
            {
        $('#find-info').fadeIn(200);//efecto para desaparecer un elemento
            }
        
        $.post("comm.php",{enc:this.value,mod:'find'}).done(function(msg){//ajax para buscar en la BD
                    if(msg=='')
                        {
                            $('#find-info').fadeOut(200);
                          msg = "Escribe un dato para buscar coincidencias";  
                        }
                    $('#result').html(msg);
                });
            
    });
    
    $('#ins').submit(function(event){
        event.preventDefault();
        
        let nom = $('#nom').val();
        let ape = $('#ape').val();
        let tel = $('#tel').val();
        let dir = $('#dir').val();
        let mail = $('#email').val();
        let mod = $('#sub').attr('mod');
        let id = $('#sub').attr('regid');
        //ajax de insercion en base de datos en caso de fallar devuelve errores
        $.post('comm.php',{nom:nom,ape:ape,email:mail,tel:tel,dir:dir,mod:mod,id:id}).done(function(msg){
            $('#error').html(msg);
            
             $('#sub').attr({value:'Agregar',mod:'reg',regid:''});
            //cambia los atributos de 'sub' boton submit en el form
            $('#titulo').html("Agregar Nuevos Datos");
            //cambia el titulo
            
            
        });
        
        loadinfo();//llamada a la recarga de datos
        
        nom = $('#nom').val(null);
        ape = $('#ape').val(null);
        tel = $('#tel').val(null);
        dir = $('#dir').val(null);
        mail = $('#email').val(null);
    });
    
  function loadinfo()//funcion de recarga de datos para mantener siempre actualizado lo que hay en el registro
    {
        $.post('comm.php',{mod:'read'}).done(function(msg){
           $('#show').html(msg);
 
        });
    }
    
    loadinfo();//este nos muestra la informacion recien cargada la pagina
    $('#find-info').fadeOut(1);
    /*
        se decidio no usar setinterval para recargar la informacion de la base de datos ya que de momento es poco probable que otro usuario diferente llene la base, aun asi seria preferible tener la funcion loadinfo en setinterval para manter la pagina totalmente actualizada
    */
});
