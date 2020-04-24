<?php 
    /*
    crear una tabla de contactos
    -registrar un usuario
        nombre, apellido, direccion, telefono, email
        consultar y mostrar el contendio de las tablas
        puede actualizar
        puede eliminar
        buscar/filtrar un usuario
        
    */
        
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<link rel="stylesheet" type="text/css" href="Style.css">
</head>

<body>
    <div class="layout">
        <div class="insert column">
            <div class="title row" id="titulo">Agregar Nuevos Datos</div>
            <div class="column">
            <form method="post" action="" id="ins">
                <input type="text" name="nom" id="nom" placeholder="Nombre" required>
                <input type="text" name="ape" id="ape" placeholder="Apellido" required>
                <input type="email" name="email" id="email" placeholder="correo42@server.com">
                <input type="tel" name="tel" id="tel" placeholder="555-5555555">
                <input type="text" name="dir" id="dir" placeholder="Carrera 1 # 01-02">
                <input id="sub" mod="reg" regid="" type="submit" value="Agregar">
            </form>
                <div id="error"></div>
            </div>
        </div>
        
        <div class="find column">
            <div class="title row">Busqueda Rapida</div>
            <div class="column">
                <input type="text" id="finder" placeholder="Dato...">
                <div class="title-blue row-around" id="find-info">
                <span>Nombre</span>
                <span>Apellido</span>
                <span>E-mail</span>
                <span>Telefono</span>
                <span>Direccion</span>
                <span>Acciones</span>
                </div>
                <div class="g-table" id="result">Resultados de la consulta</div>
            </div>
        </div>
        
        <div class="show column">
            <div class="title row">Datos existentes</div>
            <div class="title-blue row-around">
                <span>Nombre</span>
                <span>Apellido</span>
                <span>E-mail</span>
                <span>Telefono</span>
                <span>Direccion</span>
                <span>Acciones</span>
            </div>
            <div class="g-table" id="show">
                
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/jscript" src="functionality.js"></script>
</body>
</html>