/* 1.- en base a una lista de texto indique enque posicion(index) se encuentra el texte mas grande en javascript 
[texto, es grnade, pero, no , precisamente] */

const textos=["texto","es","grande","pero","no","precisamente"]
let textograne=0
for (let i = 1; i < textos.length; i++) {
    if (textos[i].length > textos[textograne].length) {
        textograne = i; 
    }
}
console.log(textograne);


/* en base a una lista de un numero debuelde la suma total que tien la lista y el numero 
mas grande  [1,3,5,10,22,12]*/

const misnumeros=[1,3,5,10,22,12]
let suma=0
let numerogrande=0
for(let i=1;i<misnumeros.length;i++){
    const numero=misnumeros[i]
    suma=suma+numero;

    if (numero >numerogrande ) {
        numerogrande = numero;
    }
}
console.log(suma)
console.log(numerogrande)