
function suma(): void {
 console.log(3+6);
}

function suma2(a:number, b:number): number {
    return a+b;
}

const sumar = (a:number, b:number): string => {
    return `${a+b}`
}


function multiplicar(n1:number, otronumero:number,nuevonumero=3): number {
    let tem = n1*nuevonumero;
    return tem;
}

interface Mascota {
    nombre: string;
    edad: number;
    mostrarEdad: () => void;
}

function calcular(mascota:Mascota,x:number): void {
    mascota.edad += x;
    console.log(mascota);
}

const nuevamMascota:Mascota = {
    nombre: 'Firulais',
    edad: 3,
    mostrarEdad() {
        console.log('La edad es: ', this.edad);
    }
}

calcular(nuevamMascota, 5);

console.log(multiplicar(3,0,2));

//suma();
console.log(suma2(2,8));


//Funciones anonimas
const funcSumar= function (valor1:number, valor2:number): number {
    return valor1+valor2;
}


console.log(funcSumar(2,12));


//funcion con parametros opcionales
function calcular1(n1:number, n2:number, n3?:number): number {
    if(n3) {

        return n1+n2+n3;
    }else {
        return n1+n2;
    }
}

console.log(calcular1(2,3,4));
console.log(calcular1(2,3));

//const sumaFlecha = () => {}

////Parametros REST en funciones
function calcular2(...valores:number[]): number {
 let suma = 0;
    for(let i=0; i<valores.length; i++) {
        suma += valores[i];
    }
    return suma;
}

console.log(calcular2(10,2,3,4));
console.log(calcular2(1,2));


