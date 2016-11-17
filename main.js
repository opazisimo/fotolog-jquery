$(document).ready(function(){

  /*
    ---
    div class="posteo"
      Strong - nombre
      p - comentario
      hr - linea separadora
    --

    1- Ver el elemento y el evento que detona nuestra acción;
    2- Recoger las cosas que ya tengo (valor nombre, valor posteo, contenedor donde los dejaré);
    3- Crear y armar nuestros nuevos elementos con sus respectivos contenidos
        (el div posteo que contiene un strong, un p y un hr);
    4- Añadir los elementos dentro del div que contiene el posteo y luego agregarle la clase 'posteo'
    5- Añadir el posteo a nuestra caja contenedora.

  */

  $('button').click(function(){
    var $contenedor = $('#contenedor-posteos');
    var $nombre = $('#nombre').val();
    var $texto = $('#cajaposteos').val();

    var $strong = $('<strong>'+$nombre+' dijo:'+'</strong>');
    var $p = $('<p>'+$texto+'</p>');
    var $div = $('<div></div>');
    var $hr = $('<hr>');

    $div.append($strong).append($p).append($hr).addClass('posteo');
    $contenedor.append($div);

  })

});
