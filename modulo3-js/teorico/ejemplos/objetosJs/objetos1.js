var auto = new Object();

auto.marca = "Chevrolet";
auto.modelo = "Camaro";
auto.anio = 2017;

auto.setPatente = function(patente){

	auto.patente = patente;
}

auto.getPatente = function(){ console.log(auto.patente); }


auto.setPatente("ABZ 0215 UZ");
auto.getPatente();

console.log(auto);

var moto = {

	marca: "suzuki",
	patente: function(patente){ moto.patente = patente; console.log(moto); }
}

moto.patente("ASX 124");