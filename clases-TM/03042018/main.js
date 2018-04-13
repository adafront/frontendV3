var monto = 400;
var descuento = 0;
var pagoTarjeta = true;
var cuotas = 3;

if(monto<500){
	console.log(monto);
}else if(monto<=1000){
	descuento = 0.1 * monto;
	monto = monto -descuento;
	console.log(monto);
}else if(monto <=1500){
	descuento = 0.15 * monto;
	monto = monto -descuento;
	console.log("Entró al menor de 1500 " + monto);
}else{
	descuento = 0.2 * monto;
	monto = monto - descuento;
	console.log("Gastó más de 1500 " + "= " + monto);
}
/* if(true)*/
if(pagoTarjeta){
	var recargo=0;

	switch (cuotas){
		case 1: 
		case 2: 
		case 3: recargo=0.05; 
				break;
		case 6: recargo=0.1;
				break;
		default: recargo=0;
				break;
	}
	/*if(cuotas == 3){
		recargo = 0.05;
	}

	if(cuotas == 6){
		recargo = 0.1;
	}*/
	monto = monto + recargo * monto;
	console.log(cuotas +" Total con recargo " + 
		monto);
}

