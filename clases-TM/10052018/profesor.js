class Profesor extends Persona{

	constructor(nombre,apellido,fecha,dni){

		super(nombre,apellido,fecha,dni);
		this._sueldo;
	}

	set sueldo(value){

		this._sueldo = value;
	}

	get sueldo(){

		return this._sueldo;
	}

}