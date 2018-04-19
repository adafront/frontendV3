var datos= [["Jaime","Rodriguez",34],
            ["Laura","Perez",24],
            ["Belen","Alegre",36]];

console.log(datos);

$(document).ready(function(){
   for (var i=0; i<datos.length; i++) {
        var tr= '<tr id="registro_'+i+'"><td> <input id="nombre'+i+'" class="registro'+i+'" value="'+datos[i][0] +'"type="text" disabled></input></td>'+
        '<td><input id="nombre'+i+'" class="registro'+i+'" value="'+datos[i][1] +'"type="text" disabled></input></td>'+
        '<td><input id="nombre'+i+'" class="registro'+i+'" value="'+datos[i][2] +'"type="text" disabled></input></td>'+
        '<td>'+'<button data-rg="#registro_'+i+'"class="eliminar" name="boton">'+ '&#128686'+'</button>'+'</td>'+'<td>'+
        '<button id="_'+i+'" data-rg=".registro'+i+'" class="btnEditor">'+' &#9998'+'</button>'+'</td>'+'</tr>';

        $('#tabla').append(tr);
    }
    
     $(".eliminar").on('click',function(){
       var trId= $(this).data('rg');
       console.log(trId);
       
       console.log("padre:"+$(this).parent());
       $(trId).hide(100, function(){
        alert('su registro se elimino correctamente');
       });
      });

    $(".btnEditor").on('click', function(){
      $('input').prop('disabled',true);
      var fila=$(this).data('rg');
      $(fila).prop('disabled',false);
    });

    $('#add').on('click',function(){
     
      var nuevo=[];
      var n=$('#nn').val();
      nuevo.push(n);
      nuevo.push($('#an').val());
      nuevo.push($('#en').val());
      datos.push(nuevo);
      console.log("elemento nuevo:",nuevo);
      console.log("array actualizado",datos);


    });


});

/*<td><input class="registro2" id="nombre2" value="Laura" type="text" disabled></input></td>*/
/*$(document).ready(function(){

      $(".btnEditor").on('click', function(){
      $('input').prop('disabled',true); // para que solo aparezca habilitado el que toco
      //$('.fila1').prop('disabled',false);
      var fila=$(this).data('rg');
      $(fila).prop('disabled',false);

   //$(this).addClass('clicked');
   
   //var btnId=$(this).attr('id');// esto es para quedarme con la data del id 
   //alert('Boton'+ btnId);
   });

   $(".eliminar").on('click',function(){

     //var btnId=$(this).prop('id');
       var trId= $(this).data('rg');
       
       $(trId).hide(100, function(){
       	alert('su registro se elimino correctamente');
       });//puede recibir dos paarmetros: velocidad(speed), callback (lo llamo con un a funcion)
        //show tambien puede contener los mismos parametros.


  
   });

   $('#add').on('click',function(){

    var tr = '<tr id="registro_1"> <td><input class="registro1" id="nombre1" value="Jaime" type="text" disabled></input> </td><td><input class="registro1" id="apellido1" value="Rodriguez" type="text" disabled></input></td> <td><input class="registro1" id="edad1" value="34" type="text" disabled></input></td><td><button  data-rg="#registro_1" class="eliminar" name="boton">&#128686</button> <button id="_1" data-rg=".registro1" class="btnEditor"> &#9998</button> </td></tr>'
    
    $('#tabla').append(tr);


   });




});*/







