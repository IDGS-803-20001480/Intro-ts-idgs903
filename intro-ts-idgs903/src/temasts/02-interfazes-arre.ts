

interface Alumno {
    matricula: number;
    nombre: string;
    email: string;
}
// se declara una interfaz con la palabra reservada interface 
//y el nombre de la interfaz nos ayuda a definir el tipo de dato de una variable

const alumno:Alumno = {
nombre: 'Juan',
matricula: 123,
email: 'Juan@gmail.com',

}
//el objeto alumno tiene que tener los mismos atributos que la interfaz Alumno 


let mascotas = ['perro', 'gato', 'perico'];
mascotas[1] = 'shhhhh';
mascotas.push('ssssssss');

let tem:(number|string)[] = [];
tem.push('nombre');
tem.push(123);

console.log(mascotas);
console.table(alumno);



