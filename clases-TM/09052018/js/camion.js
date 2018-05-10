class Camion{

	constructor (patente,ejes){

		this._patente = patente;
		this._ejes = ejes;
		this._velocidad;
	} 

	set patente(value){

		this._patente = value;
	}

	get patente(){
		return this._patente;		
	}

	set ejes(value){

		this._ejes = value;
	}

	get ejes(){
		return this._ejes;		
	}

	get velocidad(){
		return this._velocidad;		
	}

	/** 
	 *
	 **/

	acelerar(aceleracion){

		this._velocidad+=aceleracion;

	} 

	frenar(){

		this._velocidad = 0;
	}

}




















