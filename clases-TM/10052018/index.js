
let alumno = new Alumno("Pepe","Feliz","12-07-1999","43509423","1004");

console.log("Alumno:", alumno);

let materia = new Materia("fisica","lu y mie 19:00 a 22:00 hs");

materia.addNota(9);

console.log("Materia", materia);

materia.addNota(8);

console.log(materia);

let promedioMateria = materia.calcularPromedio();

console.log("promedio materia:", promedioMateria);

alumno.addMateria(materia); // Agrego la materia al alumno


let m2 = new Materia("quimica","ma y ju 19:00 a 22:00 hs");

m2.addNota(7);
m2.addNota(5);

alumno.addMateria(m2);

let promAlumno = alumno.calcularPromedio();

console.log("promedio Gral.:",promAlumno);














































