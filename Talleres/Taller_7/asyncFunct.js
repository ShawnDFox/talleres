// JavaScript Document
$(document).ready(function(){ //espera a que el documento este cargado y luego ejecuta las funciones que se contienen en este elemento
    
    $("input[name^='del']").click(function(){//selecciona todos los input cuyo nombre contenga 'del'
        let $input = $(this);
        let mod = $input.attr('mod'); //obtiene atributos del input
        let id = $input.attr('name');
        id = id.slice(3,20);
        //console.log(mod+', '+id);
         $.post('comm.php',{mod:mod,id:id}).done(function(msg){//ajax a comm para procesar el borrado
            if(msg != '')
                {
                $('#error').html(msg);//cualquier error de mensaje se imprime en el elemento de id error, no necesariamente un error pero imprimiria cualquier mensaje que de la conexion pdo
                }
        });
       loadinfo(); //recarga la consulta general de la base de datos
    });
    
    $("input[name^='mod']").click(function(){
        console.log(this);
        let $input = $(this);
        let mod = $input.attr('mod');
        let id = $input.attr('name');
        id = id.slice(3,20);//necesita una mejor solucion
        
        $.post('comm.php',{mod:mod,id:id}).done(function(msg){
            //ajax con la informacion de modificar un registro, devuelve un json
            console.log(msg);
            let jmsg = JSON.parse(msg);
            console.log(jmsg[0]['nombre']);
        $('#nom').val(jmsg[0]['nombre']);
        $('#ape').val(jmsg[0]['apellido']);
        $('#tel').val(jmsg[0]['telefono']);
        $('#dir').val(jmsg[0]['direccion']);
        $('#email').val(jmsg[0]['email']);
        $('#sub').attr({value:'Modificar',mod:'upd',regid:id});
        $('#titulo').html("Modificar registro");
        });
        
    });
// re definicion de la consulta loadinfo ya que esta no se reconoce del archivo js ya cargado   
     function loadinfo() 
    {
        $.post('comm.php',{mod:'read'}).done(function(msg){
           $('#show').html(msg);
 
        });
    }
});