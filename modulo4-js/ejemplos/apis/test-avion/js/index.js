$('#test').on('click',(e)=>{

 let   values = {'asiento': $('#asiento').val()};   
                                    
 $.ajax({
          url: "http://mariabelenalegre.com/adApi/avion/checkPasaje.php",
          type: "post",
          data: values,
          success: function (response) {
                                                     
            if(response == 1){
                                                 
                   alert("Ok");
            }else{
                    alert("Error");
            }        
          },
          error: function(response) {
                  console.log("error");
          }
        }); 
});