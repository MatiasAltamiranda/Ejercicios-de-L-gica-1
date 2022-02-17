// ***************************** Ejercicio 1 ***************************

//Escribir una función que tome una array de números por parámetros y devuelva un array con el número mayor y el menor. 
//Ejemplo: [1,2, 3,4, 5] => [1, 5]


/* let array=[50,32,89,5,96];
let array2=[6,90,555,3]

const numMinAndMaxOfArray=array=>{
    let minimo = Math.min(...array)
    let maximo = Math.max(...array)
    let newArray=[];
    newArray.push(minimo,maximo)
    return `El numero mimino es ${minimo} \nEl numero maximo es ${maximo}\nEl nuevo array es ${newArray}`
}

console.log(numMinAndMaxOfArray(array))
console.log(numMinAndMaxOfArray(array2)) */
 

// ***************************** Ejercicio 2 ***************************

//Escribir una función que tome dos parámetros. una string y un caracter. La función debe devolver cuántas veces aparece ese caracter en la string. 
//Si el caracter no aparece en la string debe retornar false.
//Ejemplo: ("hola mundo", "o") => 2 veces.

/* let cadena=prompt('Ingrese la frase');
let crt=prompt('Ingrese el caracter a contar');

const numsCrt =(cadena,crt)=>{
    let c=0;
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === crt){
            c++;
        }
        else if (c===0){
            c=false;
        }
    }
    return c;
}

console.log(numsCrt(cadena,crt)); */


// ***************************** Ejercicio 3 ***************************

// Limpiar una array. Debemos crear una función que tome una array de múltiples datos y que solo devuelva los strings dentro de la array.
//Ejemplo: [1, 'hola', 2, true, 'mundo'] => ['hola', 'mundo']

/* let array = [1, 'hola', 2, true, 'mundo','soy',6,false,'Matias'];
let array2 = [7,false,'javascript',6,6,true,true,'html','css'];

const arrayFilterString=array=>{
    let newArray = array.filter(string => typeof string === 'string');
    return newArray;
}

console.log(arrayFilterString(array))
console.log(arrayFilterString(array2)) */

// ***************************** Ejercicio 4 ***************************

//Contar vocales. Crear una función que cuente la cantidad de vocales que posee una palabra.

/* let cadena = 'hola como estas?'


const numVocales=cadena=>{
    let c=0; 
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] ==='a' || cadena[i] ==='e' || cadena[i] ==='i' || cadena[i] ==='o' || cadena[i] ==='u'  ){
            c++
        }
        }
    return c
}

console.log(numVocales(cadena)) */

// ***************************** Ejercicio 5 ***************************

//Escribir una función que quite todos las vocales de una string.
//Ejemplo: (banana) => bnn

/* let cadena='banana'
let cadena2='manzana'

const deleteVocales=cadena=>{
    let array=[];
    let newCadena;
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] !=='a' &&  cadena[i] !=='e' && cadena[i] !=='i' && cadena[i] !=='o' && cadena[i] !=='u' ){
            array.push(cadena[i])
        }
    newCadena=array.join('')  
        }
    return newCadena    
    }

console.log(deleteVocales(cadena));    
console.log(deleteVocales(cadena2));   */

// ***************************** Ejercicio 6 ***************************

// Quitar los duplicados de una array. Escribir una función que tome una array por parámetros y quite todos los valores duplicados.
//Ejemplo: [1, 1, 2,2, true, true, 'hola', 'mundo', 'hola] => [1, 2, true, hola, mundo]

let data = [1,2,6,1,2,5,9,'33','33'];

let result = data.filter((item,index)=>{
  return data.indexOf(item) === index;
})
console.log(result);


