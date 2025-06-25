// Crear una función que reciba un array de números y devuelva el número más grande del array
function encontrarNumeroMayor(array) {
    /*let mayor = array[0]
    for(let i = 1; array.legth; i++) {
        if(array[i] > i) {
            mayor = array[i];
        }
    }
    return mayor
    */
   return Math.max(...array);
}

console.log(encontrarNumeroMayor([10, 5, 3]))