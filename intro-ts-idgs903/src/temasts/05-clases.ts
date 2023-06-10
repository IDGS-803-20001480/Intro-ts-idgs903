export{}

//Clase
class Persona2{
    nombre: string='2';
    edad: number=2;

    constructor(a:string, b:number) {
        this.nombre = a;
        this.edad = b;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

//Intancia de la clase Persona
let persona:Persona2;
persona = new Persona2('Juan', 23);
persona.imprimir();


///Modificadores de acceso

class Dado{
    private valor: number=0;
    public tirar(){
        this.ganerar();
    }
    private ganerar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();

//clase 2
// con el constructor se puede inicializar las propiedades de la clase sin necesidad de declararlas
class Persona3 {
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre},Edad: ${this.edad}`);
    }
}

let persona3:Persona3;
persona3 = new Persona3('Juan2', 28);
persona3.imprimir();


