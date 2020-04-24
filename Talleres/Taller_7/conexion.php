<?php
//conetar a base de datos
//define = define define una constante, puede usarse en tiempo de ejecucuon
//variables de conexion
define('DB','mysql:host=localhost;dbname=data');
define('pass','');
define('user','root');

function ReadDB($sql)
{
    try{
        //Conexion PDO
        $conexion = new PDO(DB,user,pass,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));//usar clase pdo
        $conexion->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY,true);//seleccionar el modo en que hara querys
        $sel=$conexion->prepare($sql);//prepara la sentencia
        $sel->execute();//ejecuta
        $obj=$sel->fetchAll(PDO::FETCH_ASSOC);//recibe la respuesta
        return($obj);//retorna el resultado de la consulta
        $conexion = null;//libera la variable de conexion liberando memora en servidor
        
    }catch(Exception $e)
    {
        echo $e-getMessage().'</br> en sentencia: '.$sql.'base: '.$dbname;
    }
}

function ejecutar($sql)
{
        try{
            $conexion = new PDO(DB,user,pass,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            $conexion->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY,true);
            $sel=$conexion->exec($sql);
            return($sel);
            $conexion = null;
        }catch(Exception $e)
        {
            echo $e->getMessage().'</br> en sentencia: '.$sql;
        }
}
?>