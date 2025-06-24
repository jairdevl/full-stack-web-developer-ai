/* Crear una función que reciba un número y determine si es un número capicúa
(es decir, que se lee igual de izquierda a derecha que de derecha a izquierda).
*/

function numeroCapicua(numero) {
    let numeroComoCadena = numero.toString();
    let cadenaInvertida = numeroComoCadena.split('').reverse().join('');
    if (numeroComoCadena == cadenaInvertida) {
        return true;
    } else {
        return false;
    }
}

console.log(numeroCapicua(1221));