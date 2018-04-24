$('.big').on('click',function(e){

	$(this).toggleClass("red");
	console.log("click");
});

$('.two').on('click',function(e){

	let id = $(this).attr('id');
	console.log(id);
	if(id == "left"){
		$(this).next().toggleClass("yellow");
	}else{
		$(this).prev().toggleClass("yellow");
	}	
});	

$('.third').on('click',function(e){

	let id = $(this).attr('id');

	if(id == 'center'){

		$(this).siblings().toggleClass('peru');
	}

});