// Crea función que reciba una cadena de texto y devuelva cuántas vocales (a, e, i, o, u) contiene.

function contarVocales(texto) {
    vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0
    for (let letra of texto.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("Hellooo"));