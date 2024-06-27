
let contenido = document.getElementById("contenido")
let respuesta = document.getElementById("respuesta")
let input = document.querySelector("input")
let btn = document.getElementById("btn")
import { inicio } from "./main.js"
import { esPar } from "./validaciones.js"

export function ejercicio1() {
    contenido.innerHTML = `1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los
productos son:
<br> <br>Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el objeto anterior con su
respectivo producto.


<br><br>Ingrese 0 para volver al inicio
`
let productos = {
     Papa: 2000,
     Lentejas: 3000,
     Aceite: 5000,
};
respuesta.innerHTML = `Los productos y sus precios son:
<br><br>papa: ${productos.Papa}
<br><br>Lentejas ${productos.Lentejas}
<br><br>Aceite: ${productos.Aceite}
`
   
    btn.removeEventListener('click', ejercicio1);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio2() {
    contenido.innerHTML = `2. Cree un objeto vacío, p.e. let objeto = {} y agregue tres pares clave-valor. Imprima todo el objeto para verificar
que se han agregado las nuevos pares clave-valor

<br><br>Ingrese 0 para volver al inicio
`
let ropa = {};
ropa.camiseta =  "20000";
ropa.pantalon =  "90000";
ropa.zapatos =  "200000";
;
for (let i in ropa) {
    respuesta.innerHTML += `Clave: ${i}, Valor: ${ropa[i]}<br>`;
}

   
    btn.removeEventListener('click', ejercicio2);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio3() {
    contenido.innerHTML = `3. Dado el objeto {password: "admin30905", rol: "admin", edad: 20} cambie el valor de la clave password por
"user_7833", el valor de la clave rol por "user", el valor de la clave edad por 34. Imprima todo el objeto para
verificar los cambios.

<br><br>Ingrese 0 para volver al inicio
`
let usuario = { password: "admin30905", rol: "admin", edad: 20 };

usuario.password = "user_7833";
usuario.rol = "user";
usuario.edad = 34;
for (let i in usuario) {
    respuesta.innerHTML += `Clave: ${i}, Valor: ${usuario[i]}<br>`;
}
   
    btn.removeEventListener('click', ejercicio3);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio4() {
    contenido.innerHTML = `4. Dado el objeto {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} recorrer el objeto y mostrar
cuáles de los valores son pares.


<br><br>Ingrese 0 para volver al inicio
`
let numeros = {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50};
for (let clave in numeros) {
    let valor = numeros[clave];
    if (esPar(valor)) {
        respuesta.innerHTML = `El valor de la clave '${clave}' (${valor}) es par.`;
    }
}
    btn.removeEventListener('click', ejercicio4);
    btn.addEventListener('click', handleFinalOption);
}





































function handleFinalOption() {
    let option = input.value.trim();
    error.textContent = "";

    switch (option) {
        case "0":
            inicio()
            error.textContent = "";
            respuesta.textContent = "";
            btn.removeEventListener('click', handleFinalOption);
            break;
        default:
            error.textContent = "Esta opción no es válida";
            break;
    }
}
