
let contenido = document.getElementById("contenido")
let respuesta = document.getElementById("respuesta")
let input = document.querySelector("input")
let btn = document.getElementById("btn")
import { inicio } from "./main.js"
import { esPar } from "./validaciones.js"
import { randomNum } from "./validaciones.js"

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
        respuesta.innerHTML += `El valor de la clave '${clave}' (${valor}) es par.<br>`;
    }
}

    btn.removeEventListener('click', ejercicio4);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio5 (){
    contenido.innerHTML = `
    5. Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552:
"inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar cuántos usuarios están habilitados.
     <br><br>Ingrese 0 para volver al inicio
    `
    let objeto = { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552:
        "inhabilitado", 438276: "habilitado" } 
    let contadorHabilitados = 0    

      for (let clave in objeto){
        if (objeto[clave] === "habilitado") {
            contadorHabilitados++;
        }
      }  
    respuesta.innerHTML = `Hay ${contadorHabilitados} usuarios habilitados` 
    btn.removeEventListener('click', ejercicio5)
    btn.addEventListener('click', handleFinalOption) 
}
export function ejercicio6 (){
    contenido.innerHTML = `
    6. Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave números.

    <br> <br>Ingresa 0 para volver al inicio
    `
    let objeto =  { numeros: [45, 78, 22, 89, 8] }
    for (let clave in objeto){
        respuesta.innerHTML += `El valor de ${clave} es: ${objeto[clave]}`
    }
    btn.removeEventListener('click', ejercicio6)
    btn.addEventListener('click', handleFinalOption) 
}
export function ejercicio7 (){
    contenido.innerHTML = `7. Dado el objeto { 3: "tres", 60: "sesenta", 10: "diez" } eliminar la clave valor 60-"sesenta". Imprima todo el
     objeto para verificar los cambios.

     <br><br>Ingrese 0 para volver al inicio
      `
    let objeto = {
        3: "tres",
        60: "sesenta",
        10:"diez"
    }
    delete objeto[60]
    respuesta.innerHTML = `Se elimino 60 de este objeto <br> `
    for (let clave in objeto){
        respuesta.innerHTML += `Clave: ${clave}, Valor: ${objeto[clave]}<br>`
    }
  
    btn.removeEventListener('click', ejercicio7)
    btn.addEventListener('click', handleFinalOption)

}
export function ejercicio8 (){
    contenido.innerHTML = `8. Dado el objeto {
        162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
        4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
        786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
        }
        Use dos ciclos for-in para recorrer los objetos más internos y mostrar sus llaves y valores
       
    `
    let objeto = {
        162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
        4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
        786353: { nombres: "Raul", apellidos: "Castro", edad: 80 }
    };
    
    for (let claveExterna in objeto) {
        respuesta.innerHTML += `ID: ${claveExterna}<br>`;
        let objetoInterno = objeto[claveExterna];
        for (let claveInterna in objetoInterno) {
            respuesta.innerHTML += `${claveInterna}: ${objetoInterno[claveInterna]}<br>`;
        }
        respuesta.innerHTML += `<br>`;
    }
    btn.removeEventListener('click', ejercicio8)
    btn.addEventListener('click', handleFinalOption)
}
export function ejercicio9() {
    contenido.innerHTML = `
    <h1>Clinica de don pepito</h1>
    <p>Ingrese su documento para saber cuando le toca la cita</p>
    <input id="documento" type="text" placeholder="Digite su documento">
    <button id="btnBuscar">Buscar</button>
    <div id="respuesta"></div>
    `;

    let btn_buscar = document.getElementById("btnBuscar");
    let documento = document.getElementById("documento");

    let usuarios = {
        1094907010: {
            nombre: "Samuel Torres Ospina",
            fecha: "30/06/204",
            dia: "2:00PM"
        },
        1010: {
            nombre: "Nicol Perez",
            fecha: "06/07/204",
            dia: "10:00AM"
        },
        2020: {
            nombre: "Angelica Ospina",
            fecha: "21/08/204",
            dia: "7:00PM"
        }
    };

    btn_buscar.addEventListener('click', buscarusuario);

    function buscarusuario() {
        let respuestaUsuario = documento.value;
        let usuarioEncontrado = usuarios[respuestaUsuario];
        let respuesta = document.getElementById("respuesta");

        if (usuarioEncontrado) {
            respuesta.innerHTML = `
                <p>Nombre: ${usuarioEncontrado.nombre}</p>
                <p>Fecha de cita: ${usuarioEncontrado.fecha}</p>
                <p>Hora de cita: ${usuarioEncontrado.dia}</p>
                <p>¿Quiere cambiar la fecha o la hora de su cita?</p>
                <button id="newFecha">Cambiar fecha</button>
            `;
            let newFecha = document.getElementById("newFecha");
            newFecha.addEventListener('click', fechaNew);
        } else {
            respuesta.innerHTML = "No se encontró el usuario";
        }
    }

    function fechaNew() {
        let dia = randomNum(31); 
        let nuevaFecha = randomNum(12) + `/${dia}/2024`
        respuesta.innerHTML = `Nueva fecha de cita: ${nuevaFecha}`;
        error.innerHTML ="Ingrese 0 para salir"
    }
    btn.removeEventListener('click', ejercicio9)
    btn.addEventListener('click', handleFinalOption)

  
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
