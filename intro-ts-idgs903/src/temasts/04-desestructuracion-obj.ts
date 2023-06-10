//desestructuracion de objetos y arreglos

interface Alumno1 {
    matricula1: number;
    nombre: string;
    edad: number;
    correo: string;
    grupo: Grupo;
}

interface Grupo {
    grupo: string;
    year: number;
}


// Asignacion desestructurante de objetos
const alumno2:Alumno1 = {
    matricula1: 12345,
    nombre: 'Mario',
    edad: 23,
    correo: 'Mario@gmail.com',
    grupo: {
        grupo: 'idgs',
        year: 2023,
    }
}


// La desectruturacion de objetos consiste en extraer los atributos de un objeto
console.log(`La matricula es ${alumno2.matricula1}` );
console.log(`El nombre es ${alumno2.nombre}` );
console.log(`El año del grupo es: ${alumno2.grupo}` );


// estos sirve para cambiar el nombre de los atributos de un objeto por otros nombres es como un alias
const{matricula1,nombre:nom,grupo:xx} = alumno2;
const{grupo,year:anio} = xx;


console.log(`La matricula es ${matricula1}` );
console.log(`El nombre es ${nom}` );
console.log(`El grupo es: ${grupo}` );
console.log(`El año del grupo es: ${anio}` );


// desestructuracion de arreglos
const gps:string[] = ['IDGS','IVEN','REDES'];

console.log(`El grupo es: ${gps[0]}` );
console.log(`El grupo es: ${gps[1]}` );
console.log(`El grupo es: ${gps[2]}` );

//Esto es lo mismo que lo anterior pero con la desestructuracion de arreglos
//en este caso se esta extrayendo el primer y tercer elemento del arreglo y el segundo se esta ignorando
const [a,,b] = gps;

console.log(`El grupo 1 es: ${a}` );
