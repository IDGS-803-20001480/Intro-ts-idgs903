
var num1=2; // var es una variable global que se puede usar en cualquier parte del codigo
let num2=3;  // let es una variable local que solo se puede usar en el bloque de codigo donde se declaro
const num3=4; // const es una constante que no se puede modificar

let nombre:string= "Roberto"; // sele óne el indentificador desues del nombre de la varianle despues : y el tipo de dato
let num:number= 123;
let activo:boolean= true;
 

let matricula:string | number | boolean = "Jon12"; // se puede declarar una variable con dos tipos de datos

matricula=123; // se puede cambiar el tipo de dato de la variable
matricula=true;

console.log(matricula);
