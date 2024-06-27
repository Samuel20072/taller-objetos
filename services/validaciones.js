export function validNum(value) {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return "Número";
    } else if (/^[a-zA-Z]+$/.test(value)) {
        return "Letra";
    } else {
        return "No se pudo identificar";
    }
}
export function esPar(num) {
    return num % 2 === 0;
}
export function randomNum(max){
    return Math.floor(Math.random() * max) + 1;
}