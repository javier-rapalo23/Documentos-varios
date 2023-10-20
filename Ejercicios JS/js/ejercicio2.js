//2. Crear una función que reciba un arreglo como parámetro y devuelva una copia del arreglo (este debe
// ser una copia integra y no solo una referencia al arreglo original). (2 pts.)
console.log('\n 2')

function F_arreglo (array_){
    return [...array_]
}
F_arreglo(arreglo)

console.log(F_arreglo(arreglo))
console.log(arreglo)

