$('#test').on('click',(e)=>{

 let   values = {'asiento': $('#asiento').val()};   
                                    
 $.ajax({
          url: "http://mariabelenalegre.com/adApi/avion/checkPasaje.php",
          type: "post",
          data: values,
          success: function (response) {
                   
            console.log(response);
                                                     
            if(response){
                       
                  let resultado = JSON.parse(response);
                  console.log(resultado.mensaje);                               
                  alert(resultado.mensaje);
                   
            }else{
                  
                  alert("Error"); // Si esta vacio
                  console.log(response);
            }        
          },
          error: function(response) {
                  console.log("error");
          }
        }); 
});