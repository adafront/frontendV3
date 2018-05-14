class MedioPago{
	
	construct(){}

	static calcularDescuento(monto,descuento){

		let valor = (monto*descuento)/100; 
		
		return valor; 

	}

	static calcularRecargo(monto,nroCuotas){

		let cuota3 = 1.05;

		let recargo = 0;

		switch(nroCuotas){

			case 3: recargo = monto*cuota3;

			break;
		}

		return recargo;
	}

	

}