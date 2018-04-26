let jsonData = {};

jsonData.cumple = {
		"id": 1,
		"name": "Pepa",
		"foto": "lego batman",
		"cumple": "24-04-2018",
		"hobbies":{"mañana":"salir a correr",
				   "tarde" :"comer galletitas",
				   "noche" :"lee libros"
				  }
};

console.log(jsonData);

console.log(JSON.stringify(jsonData));

localStorage.setItem("jsonData", JSON.stringify(jsonData));

let jsonDataGuardado = JSON.parse(localStorage.getItem("jsonData"));

