<?php
require_once('conexion.php');
/*
    se usa @ al principio de una declaracion en caso que esta
    pueda ser vacia para que no muestre errores en el navegador
    consultando parece ser mejor usar este metodo ya que al evitar 
    todos los errores podrian pasarse por alto errores en variables 
    no "controladas"
*/
$mode=$_REQUEST['mod']; //request trae tanto elementos get como post, creo qeu las use en algun momento pero ya no son necesarias. me da pereza revisar de nuevo asi que lo deje asi  ¯\_(ツ)_/¯
@$enc=$_POST['enc'];
@$id=$_REQUEST['id'];
@$nombre=$_POST['nom'];
@$apellido=$_POST['ape'];
@$telefono=$_POST['tel'];
@$direccion=$_POST['dir'];
@$Correo=$_POST['email'];


function Read()
{
    $sql = "Select * from contactos order by nombre asc";
    $res = ReadDB($sql);
    //print_r($res);
    PrintToDoc($res);
}
function consult($id)
{
    $sql = "Select * from contactos Where id_contacto='$id' order by nombre asc";
    $res = ReadDB($sql);
    //print_r($res);
    echo json_encode($res);
    /*
        retorna un json con el resultado de la base de datos
        para poder manipular los valores desde jquery y poder 
        asignarlos a los inputs yya existentes
    */
    
}

function Register($name,$surname,$email,$phone,$addres)
{
    $sql = "insert into contactos (nombre,apellido,telefono,email,direccion) values ('$name','$surname','$phone','$email','$addres')";
    ejecutar($sql);
    
    //echo $sql;
    
}
function modify($name,$surname,$email,$phone,$addres,$id)
{
    $sql = "update contactos set nombre='$name',apellido='$surname',telefono='$phone',email='$email',direccion='$addres' where id_contacto='$id'";
    ejecutar($sql);
    
    //echo $sql;
    
}
function delete($id)
{
    $sql = "delete from contactos where id_contacto = '$id'";
    ejecutar($sql);
    
    //echo $sql;
    
}
function Find($data)
{
    $sql = "Select * from contactos Where nombre like '%".$data."%' or apellido LIKE '%".$data."%' OR email like '%".$data."%' or telefono LIKE '%".$data."%' or direccion like '%".$data."%' order by nombre asc";
    $res = ReadDB($sql);
    
    //print_r($res);
    PrintToDoc($res);
}

function PrintToDoc($sqlresult)
{
    //echo json_encode($sqlresult); 
    foreach($sqlresult as $result)
    {
        
    ?>
<!--
se puede imprimir html desde php y esto se hace especificamente para recibir una pagina asincronicamente
en este caso imprime todos los valores en span para darles orden con grid en el documento principal
--> 
            <span><?php echo $result['nombre'] ?> </span> 
            <span><?php echo $result['apellido'] ?></span> 
            <span><?php echo $result['email']?></span>  
            <span><?php echo $result['telefono'] ?></span>  
            <span><?php echo $result['direccion'] ?></span> 
        <span>
            <input mod='del' name='del<?php echo $result['id_contacto']?>' type="button" value="Eliminar">
            <input mod='con' name='mod<?php echo $result['id_contacto']?>' type="button" value="Modificar">
        </span>
        <!--/div-->
        
    <?php } ?>
    <script type="text/javascript" src="asyncFunct.js"></script>
    <?php
}

//switch case para controlar que funciones usar
switch($mode)
{
        case 'read':Read();
    break;
        case 'find':if($enc != '')
                    {
                    find($enc);
                    };
    break;
        case 'reg': Register($nombre,$apellido,$Correo,$telefono,$direccion);
    break;
        case 'del': delete($id);
    break;
        case 'con':consult($id);
    break;
        case 'upd':modify($nombre,$apellido,$Correo,$telefono,$direccion,$id);
    break;
}




?>
