class Menu{

	construct(entrada,principal,postre,bebida){

		this._entrada = entrada;
		this._princial = principal;
		this._postre = postre;
		this._bebida = bebida;
		this._precio = 180;

	}

	/**
	 * Params entrada Object
	 *
	 **/

	set entrada(value){

		this._entrada = value;
	}

	get entrada(){

		return this._entrada;
	}


}



