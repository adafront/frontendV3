class Alumno extends Persona {

	constructor(nombre,apellido,fecha,dni,legajo){

		super(nombre,apellido,fecha,dni);
		this._legajo = legajo;
		this._colegio;
		this._materias = []; // Arreglo de objetos materia
	}

	set legajo(value){

		this._legajo = value;
	}

	get legajo(){

		return this._legajo;
	}

	addMateria(materia){

		this._materias.push(materia);
	}

	/**
	 * Calcula el promedio general del alumno
	 * Return numeric
	**/

	calcularPromedio(){

		let largo = this._materias.length;
		let total = 0;
		let i;
		for(i=0;i<largo;i++){

			total += this._materias[i].calcularPromedio(); // recupero el promedio de cada materia

		}

		let promedio = total/largo;

		return promedio;
	}

	/**
	 *	Retorno el arreglo de materias del alumno
	 *
	 **/	

	getMaterias(){

		return this._materias;
	}
}














































