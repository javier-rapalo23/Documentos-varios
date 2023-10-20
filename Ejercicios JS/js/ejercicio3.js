//3. Crear una función que devuelva el promedio de un arreglo, en caso de que el
//arreglo esté vacío debe devolver cero. (2 pts.)
console.log('\n 3')
const nula =[]
function promedio(array) {
    if(array.length != 0){
        let sums = array.reduce((prev, current) => prev + current);
         return(sums / array.length)}
    else{
        return 0
    }
}
console.log(promedio(arreglo))
console.log(promedio(nula))


