
// **********************************************   EJERCICIO 1  ********************************************************************************

//Crear una función que tome una array de números y retorne la suma de esos números.Ejemplo: [1, 2, 3]  Debe retornar 6. 

/* let array=[1,2,3];
let suma=0;
    const sumar=()=>{
         for (const key of array) {
            suma+=key;
         }
         console.log(suma);
    }
sumar(array); */

// **********************************************   EJERCICIO 2  ********************************************************************************


//Crear una función que calcule el área de un tríangulo. Pista: la formula para calcula la altura de un triángulo es base * altura / 2 


/* const areaTriangulo =(base,altura)=>{
    let area = (base*altura)/2
    console.log(area);
}
areaTriangulo(4,10) */

// **********************************************   EJERCICIO 3  ********************************************************************************

//Crear una función que transforme la cantidad de días en años. Ejemplo: 555 => Debe retornar 1 Ejemplo: 3650 => Debe retornar 10 

/* const total1Año=365;
let dias=prompt('Introduce la cantidad de dias a transformar');

const calcularAños=(dias)=>{
    let años= Math.floor(dias/total1Año);
    console.log(años)
}
calcularAños(dias); */

// **********************************************   EJERCICIO 4  ********************************************************************************

//Crear una función que tome dos strings y retorne un booleano. Si las dos strings tienen la misma cantidad de caracteres, deberá retornar true; en el otro caso deberá retornar false. 


/* let comparativa;

const compararString =(frase1,frase2)=>{
    if(frase1.length === frase2.length){
        comparativa=true;
        console.log(comparativa)
    }
    else{
        comparativa=false;
        console.log(comparativa)
    }
}
let frase1=prompt('Ingrese la primer frase a comparar');
let frase2=prompt('Ingrese la segunda frase a comparar');
compararString(frase1,frase2) */

// **********************************************   EJERCICIO 5  ********************************************************************************

//Crear una función que tome una string y la de vuelta, muestre la palabra la revés. Ejemplo: hola => Debe retornar aloh.

/* let frase=prompt('Ingrese la frase')

const reverseFrase=(frase)=>{
        let fraseReverse=frase.split('').reverse().join('')
        console.log(fraseReverse)
}

reverseFrase(frase) */

// **********************************************   EJERCICIO 6  ********************************************************************************

//Crear una función que calcule si un numero es es divisible por 5. Si es divisible debe retornar true; sino debe retornar false.

/* let comparativa;
let numero =prompt('Ingrese un numero')
const compararString = numero =>{
    if(numero % 5 === 0){
        comparativa=true;
        console.log(comparativa)
    }
    else{
        comparativa=false;
        console.log(comparativa)
    }
}
compararString(numero) */

// **********************************************   EJERCICIO 7  ********************************************************************************

//  Crear una función que transforme una string en formato capital. El formato capital es aquel en el que las primeras letras comienza con mayúsculas.
//Ejemplo: hola mundo => Hola Mundo
//Ejemplo: soy Otro ejemplo => Soy Otro Ejemplo
//Ejemplo: por si todavía no queda claro => Por Si Todavía No Queda Claro


/* let cadena=prompt('Indroduce la cadena a transformar');
let cadenaToArray= cadena.split(' ');
let newCadena=[];
let newCadenaToString;

const italicArray=(cadenaToArray)=>{

for(let i=0;i<cadenaToArray.length;i++){
    let crtUpperCase =cadenaToArray[i].charAt(0).toUpperCase()
    newCadena.push(crtUpperCase+cadenaToArray[i].slice(1))
    newCadenaToString=newCadena.join(' ')
}
console.log(newCadenaToString)
}

italicArray(cadenaToArray); */

// **********************************************   EJERCICIO 8  ********************************************************************************

// Crear una función que tome una array de números y devuelva cuál es el número más grande de la array.
//Ejemplo: [45, 53, 88, 21, 11, 87, 66] => Debe retornar 88

/* let array=[105,3,339,55,6,99,66,555,3,1]
let numMayor=0;

const calcNumMayor=(array)=>{
    for (let i = 0; i < array.length; i++) {
        if(array[i]>numMayor){
            numMayor=array[i]
        }
    }
console.log(`El numero mas grande en el array es: ${numMayor}`)
}

calcNumMayor(array); */

// **********************************************   EJERCICIO 9  ********************************************************************************

//Remover el primer caracter de una palabra. Crear una función que tome una string y retorne la misma palabra sin su primer caracter.
//Ejemplo: apple => pple

/* let cadena =prompt('Ingrese la frase o palabra');
let cadenaToString= cadena.split(' ');
let newArray=[];
let newCadena;

const deleteFirstCrt=(cadenaToString)=>{
    for(let i=0;i<cadenaToString.length;i++){
        newArray.push(cadenaToString[i].slice(1))
        newCadena=newArray.join(' ')
    }
console.log(newCadena)
}

deleteFirstCrt(cadenaToString)
 */

// **********************************************   EJERCICIO 10  ********************************************************************************

//Convertir una array a una string. Una función tomará una array de strings y se convertirá en una única string.

/* let array=['Ultimo','ejercicio','del','dia'];
let array2=['aprendiendo','javascript']
let array3=['gracias','totales']
let newCadena;

const arrayToString=(array)=>{
    newCadena=array.join(' ')
    console.log(newCadena)
}

arrayToString(array)
arrayToString(array2)
arrayToString(array3) */