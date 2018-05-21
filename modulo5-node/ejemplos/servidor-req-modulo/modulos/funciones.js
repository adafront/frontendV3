exports.random = function(){

    let num = Math.floor((Math.random()*10)+1);

    return num.toString();
};

exports.saludo = function(){

	return "Bienvenido usuario";
}

