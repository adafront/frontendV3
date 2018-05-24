var path_nombre = (url.parse(peticion.url).pathname == '/') ? '/index.html' : url.parse(peticion.url).pathname;
   
if(url.parse(peticion.url).pathname == '/'){

	path_nombre = '/index.html';
}else{

	path_nombre = url.parse(peticion.url).pathname
}   