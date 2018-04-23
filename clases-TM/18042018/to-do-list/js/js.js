$(document).ready(function() {
    var items = [];
    $('#agregar').on('click', function() {

        if ($('input#urgente').is(':checked')) {
            var texto = $('#texto').val();
            var li = '<li id="' + items.length + '"><a href="#" class="urgente">' + texto + '</a><button class="borrar" data-id="' + items.length + '">Eliminar</button></li>';
            $('#todo').append(li);
            items.push(li);
        } else {
            var texto = $('#texto').val();
            var li = '<li id="' + items.length + '"><a href="#">' + texto + '</a><button class="borrar">Eliminar</button></li>';
            $('#todo').append(li);
            items.push(li);
        }
        $('#texto').val("");

        $('a').on('click', function () {
            //evito el normal funcionamiento del evento, e intervengo con mi
            //evento
            event.preventDefault();
            $(this).addClass('linea');
        });

        $('.borrar').on('click', function() {
            alert("Item borrado.");
            $(this).parent('li').addClass('borrado');
            console.log($(this).parent());
            //$(this).remove();
        });

    });
});