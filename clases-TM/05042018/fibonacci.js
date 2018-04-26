// 0,1,1,2,3,5,8,13,21,34

var numero = 0;
var firstNum = -1;
var lastNum = 1;

while (numero < 11) {
	numero = firstNum + lastNum;
    firstNum = lastNum;
    lastNum = numero;
    console.log(numero);
}

/*numero| numero<11 |numero= firstNum+lastNum | firstNUm = lastNum | lastNum=numero
0		true			0=-1+1(0)					-1=1(1)			1=0(0)
*/







