//Herencia
class Persona5{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

//Intancia de la clase Persona y le pasamos los parametros al constructor de la clase Persona
class Empleado extends Persona5{
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    imprimir(){
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }
}