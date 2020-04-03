// JavaScript Document
$(document).ready(function(){
    
    $('article').fadeOut(10);  
    
    $('#EJ1').click(function(){
        $('#vid').fadeIn(200);
        $('#Divs').fadeOut(200);
        $('#BGC').fadeOut(200); 
        $('#Zoom').fadeOut(200);
    });
    
    $('#EJ2').click(function(){
        $('#vid').fadeOut(200);
        $('#Divs').fadeIn(200);
        $('#BGC').fadeOut(200);
        $('#Zoom').fadeOut(200);
    });
    
    $('#EJ3').click(function(){
        $('#vid').fadeOut(200);
        $('#Divs').fadeOut(200);
        $('#BGC').fadeIn(200); 
        $('#Zoom').fadeOut(200);
    });
    
    $('#EJ4').click(function(){
        $('#vid').fadeOut(200);
        $('#Divs').fadeOut(200);
        $('#BGC').fadeOut(200);
        $('#Zoom').fadeIn(200);
    });
});
